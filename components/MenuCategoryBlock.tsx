import Image from "next/image";
import type { MenuCategory, MenuItem as MenuItemType } from "@/lib/site-data";
import { MenuItem } from "@/components/MenuItem";
import { ChopstickAccent, SteamWisps } from "@/components/RestaurantAnimations";

const warmCategoryIds = new Set([
  "suppen",
  "japanisch-tradition",
  "vietnamesisch-tradition",
  "jasminreis-mit-sosse",
  "spezialitaeten",
  "kinder-beilagen",
  "donburi"
]);

export function MenuCategoryBlock({
  category,
  items = category.items
}: {
  category: MenuCategory;
  items?: MenuItemType[];
}) {
  const isWarmCategory = warmCategoryIds.has(category.id);
  const isDrinkCategory = category.id === "getraenke";
  const categoryBadge = isDrinkCategory ? "Frisch gemixt" : isWarmCategory ? "Warm serviert" : "Handgemacht";

  return (
    <article id={category.id} className="overflow-hidden rounded-lg border border-[#5A3824]/10 bg-[#FFFDF8] shadow-sm">
      <div className="grid lg:grid-cols-[minmax(320px,430px)_1fr]">
        <div className="bg-[#F8F4EC] p-4 sm:p-6">
          <div className="menu-image-stage relative h-[280px] overflow-hidden rounded-md border border-[#5A3824]/10 bg-[#F2E7D7] sm:h-[360px] lg:sticky lg:top-28">
            {isWarmCategory ? (
              <SteamWisps className="absolute right-4 top-3 z-20 opacity-90" />
            ) : !isDrinkCategory ? (
              <ChopstickAccent className="-right-8 top-6 z-20 opacity-90" />
            ) : null}
            <span className="absolute left-4 top-4 z-20 rounded-full bg-[#FFFDF8]/92 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#5A3824] shadow-lg shadow-[#5A3824]/10 backdrop-blur">
              {categoryBadge}
            </span>
            <Image
              src={category.representativeImage}
              alt=""
              fill
              sizes="(min-width: 1024px) 430px, 100vw"
              className="scale-110 object-cover opacity-25 blur-2xl"
              aria-hidden="true"
            />
            <Image
              src={category.representativeImage}
              alt={category.title}
              fill
              sizes="(min-width: 1024px) 430px, 100vw"
              className="menu-image-main object-contain p-3 sm:p-5"
            />
          </div>
        </div>

        <div className="p-5 sm:p-8">
          <div className="flex flex-col gap-4 border-b border-[#5A3824]/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8322A]">Kategorie</p>
              <h3 className="mt-2 font-heading text-3xl font-bold text-[#5A3824] sm:text-4xl">{category.title}</h3>
              <p className="mt-3 max-w-3xl leading-7 text-[#7A6A58]">{category.description}</p>
            </div>
            <span className="w-fit rounded-full bg-[#F8F4EC] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#B87946]">
              {items.length} Gerichte
            </span>
          </div>

          <div className="mt-7">
            {items.length ? (
              items.map((item) => <MenuItem key={`${category.id}-${item.no ?? item.name}`} item={item} />)
            ) : (
              <p className="rounded-md bg-[#F8F4EC] p-5 text-sm text-[#7A6A58]">
                Diese Kategorie wird bald mit weiteren Gerichten ergänzt.
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

