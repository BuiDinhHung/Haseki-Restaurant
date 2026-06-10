import type { MenuItem as MenuItemType } from "@/lib/site-data";

export function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <article className="border-t border-[#5A3824]/10 py-5 first:border-t-0 first:pt-0 last:pb-0">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            {item.no ? <span className="text-xs font-bold text-[#B87946]">{item.no}</span> : null}
            <h4 className="font-heading text-2xl font-bold leading-tight text-[#5A3824]">{item.name}</h4>
          </div>
          {item.badges?.length ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {item.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-[#3F7D3A]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#3F7D3A]"
                >
                  {badge}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        {item.price ? <p className="shrink-0 pt-1 font-bold text-[#B8322A]">{item.price}</p> : null}
      </div>

      {item.description ? <p className="mt-2 text-sm leading-6 text-[#7A6A58]">{item.description}</p> : null}

      {item.options?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.options.map((option) => (
            <span
              key={`${option.key ?? ""}-${option.label}-${option.price ?? ""}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#B87946]/25 bg-[#F8F4EC] px-3 py-2 text-xs font-semibold text-[#5A3824]"
            >
              {option.key ? <span className="uppercase text-[#B87946]">{option.key}</span> : null}
              <span>{option.label}</span>
              {option.price ? <strong className="text-[#B8322A]">{option.price}</strong> : null}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}
