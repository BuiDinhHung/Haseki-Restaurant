import { ArrowUp } from "lucide-react";

export function BackToTop() {
  return (
    <a
      href="#start"
      aria-label="Zurück nach oben"
      className="button-pop fixed bottom-24 right-4 z-40 hidden rounded-full bg-[#5A3824] p-3 text-white shadow-xl shadow-[#5A3824]/20 lg:inline-flex"
    >
      <ArrowUp size={20} />
    </a>
  );
}
