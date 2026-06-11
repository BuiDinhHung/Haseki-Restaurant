"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { menuCategories } from "@/lib/site-data";
import { MenuCategoryBlock } from "@/components/MenuCategoryBlock";

export function MenuSection() {
  const [active, setActive] = useState(menuCategories[0].id);
  const [query, setQuery] = useState("");
  const activeCategory = menuCategories.find((category) => category.id === active) ?? menuCategories[0];

  const searchResults = useMemo(() => {
    const search = query.trim().toLowerCase();
    if (!search) return [];

    return menuCategories
      .map((category) => ({
        category,
        items: category.items.filter((item) =>
          [
            item.no,
            item.name,
            item.description,
            item.price,
            item.badges?.join(" "),
            item.options?.map((option) => `${option.key ?? ""} ${option.label} ${option.price ?? ""}`).join(" ")
          ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase()
            .includes(search)
        )
      }))
      .filter((result) => result.items.length > 0);
  }, [query]);

  return (
    <section id="speisekarte" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="balanced-heading">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#B8322A]">Speisekarte</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#5A3824] sm:text-4xl">Frisch gerollt, gekocht und serviert</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#7A6A58]">
              Wählen Sie eine Kategorie und lesen Sie die Gerichte in Ruhe. Die Bilder zeigen die Kategorie,
              nicht jedes einzelne Gericht.
            </p>
          </div>
          <label className="relative mx-auto mt-7 block w-full max-w-md">
            <span className="sr-only">Gericht suchen</span>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A6A58]" size={18} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Gericht suchen"
              className="focus-ring w-full rounded-full border border-[#5A3824]/15 bg-[#FFFDF8] py-4 pl-12 pr-5 text-sm font-semibold text-[#2B2B2B] shadow-sm"
            />
          </label>
        </div>

        <div className="mx-auto mt-8 flex max-w-6xl gap-3 overflow-x-auto pb-3 lg:flex-wrap lg:justify-center lg:overflow-visible lg:pb-0">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => {
                setActive(category.id);
                setQuery("");
              }}
              className={`focus-ring button-pop shrink-0 rounded-full px-5 py-3 text-sm font-bold transition ${
                active === category.id
                  ? "bg-[#5A3824] text-white"
                  : "bg-[#FFFDF8] text-[#5A3824] hover:bg-[#F0E7D8]"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={query.trim() ? `search-${query.trim()}` : activeCategory.id}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="balanced-panel mt-8 grid gap-8"
          >
            {query.trim() ? (
              searchResults.length ? (
                searchResults.map((result) => (
                  <MenuCategoryBlock
                    key={result.category.id}
                    category={result.category}
                    items={result.items}
                  />
                ))
              ) : (
                <div className="rounded-lg bg-[#FFFDF8] p-8 text-[#7A6A58] shadow-sm">
                  Kein Gericht zur Suche gefunden.
                </div>
              )
            ) : (
              <MenuCategoryBlock category={activeCategory} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

