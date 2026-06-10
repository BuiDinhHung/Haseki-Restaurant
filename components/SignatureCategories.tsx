import Image from "next/image";
import { signatureCategories } from "@/lib/site-data";
import { FadeUp } from "@/components/Motion";

export function SignatureCategories() {
  return (
    <section className="bg-[#FFFDF8] py-20 sm:py-24">
      <div className="section-shell">
        <FadeUp className="balanced-heading">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#B8322A]">Signature Dishes</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-[#5A3824] sm:text-4xl">Lieblingsgerichte für jeden Moment</h2>
        </FadeUp>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {signatureCategories.map((category, index) => (
            <FadeUp key={category.id} delay={index * 0.04}>
              <a href="#speisekarte" className="group block overflow-hidden rounded-lg bg-[#F8F4EC] shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F2E7D7]">
                  <Image
                    src={category.representativeImage}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="scale-110 object-cover opacity-25 blur-2xl"
                    aria-hidden="true"
                  />
                  <Image
                    src={category.representativeImage}
                    alt={category.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-3 transition duration-500 group-hover:scale-[1.03] sm:p-4"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-2xl font-bold text-[#5A3824]">{category.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#7A6A58]">{category.description}</p>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

