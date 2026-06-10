import { MapPin, Menu, Phone } from "lucide-react";
import { restaurant } from "@/lib/site-data";

export function MobileStickyActions() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 grid min-w-0 grid-cols-3 overflow-hidden rounded-full bg-[#FFFDF8] p-1 shadow-2xl shadow-[#5A3824]/20 lg:hidden">
      <a href={restaurant.callHref} className="flex min-w-0 items-center justify-center gap-1 rounded-full py-3 text-[11px] font-bold text-[#5A3824]">
        <Phone size={15} />
        <span className="truncate">Anrufen</span>
      </a>
      <a href={restaurant.routeHref} className="flex min-w-0 items-center justify-center gap-1 rounded-full py-3 text-[11px] font-bold text-[#5A3824]">
        <MapPin size={15} />
        <span className="truncate">Route</span>
      </a>
      <a href="#speisekarte" className="flex min-w-0 items-center justify-center gap-1 rounded-full bg-[#B8322A] px-1 py-3 text-[11px] font-bold text-white">
        <Menu size={15} />
        <span className="truncate">Speisekarte</span>
      </a>
    </div>
  );
}

export function MobileActions() {
  return <MobileStickyActions />;
}
