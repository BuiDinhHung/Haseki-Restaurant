import menuDraft from "@/data/haseki-full-menu-draft.json";

export type MenuOption = {
  key?: string;
  label: string;
  price?: string;
};

export type MenuItem = {
  no?: number | string;
  name: string;
  description?: string;
  price?: string;
  options?: MenuOption[];
  badges?: string[];
};

export type MenuCategory = {
  id: string;
  title: string;
  description: string;
  representativeImage: string;
  items: MenuItem[];
};

export type SiteImage = {
  id: string;
  title: string;
  path: string;
  kind: "space" | "food" | "drink";
};

type RawMenuItem = MenuItem & {
  image?: string;
  categoryId?: string;
  categoryTitle?: string;
};

type RawCategory = {
  id: string;
  title: string;
  description?: string;
  representativeImage?: string;
  items?: RawMenuItem[];
};

type RawMenuDraft = {
  restaurant: {
    name: string;
    cuisine: string;
    address: string;
    phones: string[];
    openingHours: { days: string; time: string }[];
  };
  demoImages: { title: string; path: string }[];
  categories: RawCategory[];
};

const draft = menuDraft as RawMenuDraft;

const categoryDescriptions: Record<string, string> = {
  vorspeisen: "Knusprige und frische Vorspeisen mit Kräutern, Gemüse, Garnelen und hausgemachten Saucen.",
  suppen: "Wärmende asiatische Suppen mit Miso, Kokos, Zitronengras und frischen Zutaten.",
  salat: "Frische Salate mit Kräutern, Mango, Papaya, Glasnudeln und aromatischen Dressings.",
  "japanisch-tradition": "Japanische Klassiker wie Ramen und warme Gerichte mit kräftigen Brühen.",
  "vietnamesisch-tradition": "Pho, Bun, Pad Thai und vietnamesische Spezialitäten mit frischen Kräutern.",
  "jasminreis-mit-sosse": "Jasminreis mit Curry, Mango, Süß-Sauer, Erdnuss und weiteren Saucen.",
  spezialitaeten: "Besondere Haseki-Gerichte mit warmer Sauce, Gemüse und kräftigem Geschmack.",
  "kinder-beilagen": "Kleine Gerichte, Beilagen und einfache Lieblingsgerichte für Kinder.",
  "haki-sushi-tapas": "Kleine Sushi-Tapas und feine japanische Häppchen zum Teilen.",
  "haki-nigiri": "Klassische Nigiri mit Fisch, Meeresfrüchten und vegetarischen Varianten.",
  maki: "Kleine Maki-Rollen mit Fisch, Gemüse und frischen Füllungen.",
  sashimi: "Frische Fischscheiben pur serviert, klar und reduziert.",
  "haki-crunchy": "Knusprige panierte Sushi-Rollen mit cremigen und frischen Füllungen.",
  "inside-out": "Inside-Out Rolls mit Reis außen, Fisch, Gemüse und feinen Toppings.",
  "haki-spezial-rolle": "Kreative Haseki-Rollen mit besonderen Kombinationen und Toppings.",
  "haki-menu": "Gemischte Sushi-Menüs und Platten für eine oder mehrere Personen.",
  donburi: "Japanische Reisschalen mit Salat, Gemüse, Sesamsoße und Toppings."
};

function maybeFixMojibake(value: string) {
  if (!/[ÃÂâ]/.test(value)) return value;

  try {
    const bytes = Uint8Array.from(Array.from(value, (char) => char.charCodeAt(0)));
    const decoded = new TextDecoder("utf-8", { fatal: false }).decode(bytes);
    return decoded.includes("�") ? value : decoded;
  } catch {
    return value;
  }
}

export function cleanText(value = "") {
  return maybeFixMojibake(value)
    .replaceAll("Â", "")
    .replaceAll("â‚¬", "€")
    .replaceAll("â€“", "-")
    .replaceAll("â€™", "'")
    .trim();
}

const pathToId = (path: string) =>
  path
    .split("/")
    .pop()
    ?.replace(/\.[^.]+$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") ?? path;

export const restaurant = {
  name: cleanText(draft.restaurant.name),
  cuisine: cleanText(draft.restaurant.cuisine),
  address: cleanText(draft.restaurant.address),
  phones: draft.restaurant.phones,
  openingHours: draft.restaurant.openingHours.map((row) => ({
    days: cleanText(row.days),
    time: cleanText(row.time)
  })),
  callHref: `tel:${draft.restaurant.phones[0].replaceAll(" ", "")}`,
  routeHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    cleanText(draft.restaurant.address)
  )}`
};

export const logoImage = {
  src: "/images/demo/ChatGPT Image Jun 10, 2026, 10_18_11 PM.png",
  alt: "Haseki Restaurant Logo"
};

export const ambientImages: SiteImage[] = [
  {
    id: "front-exterior",
    title: "Außenansicht Haseki Restaurant",
    path: "/images/demo/WhatsApp Image 2026-06-08 at 14.08.29.jpeg",
    kind: "space"
  },
  {
    id: "lantern-interior-wide",
    title: "Warme Laternen im Gastraum",
    path: "/images/demo/WhatsApp Image 2026-06-08 at 14.08.49.jpeg",
    kind: "space"
  },
  {
    id: "lantern-interior",
    title: "Innenraum mit japanischen Fächern",
    path: "/images/demo/WhatsApp Image 2026-06-08 at 14.08.49 (1).jpeg",
    kind: "space"
  },
  {
    id: "wood-interior",
    title: "Holzdetails und Restaurantambiente",
    path: "/images/demo/WhatsApp Image 2026-06-08 at 14.08.49 (2).jpeg",
    kind: "space"
  },
  {
    id: "street-food-atmosphere",
    title: "Asiatische Bistro-Atmosphäre",
    path: "/images/demo/WhatsApp Image 2026-06-08 at 14.08.49 (3).jpeg",
    kind: "space"
  }
];

const extraDrinkImages: SiteImage[] = [
  {
    id: "cocktail-green",
    title: "Hauscocktail",
    path: "/images/demo/WhatsApp Image 2026-06-08 at 14.11.52.jpeg",
    kind: "drink"
  },
  {
    id: "cocktail-house-one",
    title: "Frischer Drink",
    path: "/images/demo/WhatsApp Image 2026-06-08 at 14.11.52 (1).jpeg",
    kind: "drink"
  },
  {
    id: "cocktail-house-two",
    title: "Cocktail im Haseki",
    path: "/images/demo/WhatsApp Image 2026-06-08 at 14.11.52 (2).jpeg",
    kind: "drink"
  }
];

export const foodImages: SiteImage[] = draft.demoImages.map((image) => ({
  id: pathToId(image.path),
  title: cleanText(image.title),
  path: image.path,
  kind: image.title.toLowerCase().includes("mojito") || image.title.toLowerCase().includes("limonade") || image.title.toLowerCase().includes("cocktail") ? "drink" : "food"
}));

export const heroSlides: SiteImage[] = [
  {
    id: "hero-sushi-mix-deluxe",
    title: "Sushi Mix Deluxe",
    path: "/images/demo/WhatsApp Image 2026-06-08 at 14.09.58.jpeg",
    kind: "food"
  },
  {
    id: "hero-sushi-platter",
    title: "Frische Sushi Platte",
    path: "/images/demo/WhatsApp Image 2026-06-08 at 14.09.51.jpeg",
    kind: "food"
  },
  {
    id: "hero-close-up",
    title: "Haki Dragonroll",
    path: "/images/demo/WhatsApp Image 2026-06-08 at 14.10.04.jpeg",
    kind: "food"
  },
  {
    id: "hero-hot-dish",
    title: "Haseki Curry",
    path: "/images/demo/WhatsApp Image 2026-06-08 at 14.09.39.jpeg",
    kind: "food"
  },
  {
    id: "hero-restaurant-atmosphere",
    title: "Haseki Restaurant Atmosphäre",
    path: "/images/demo/WhatsApp Image 2026-06-08 at 14.08.49 (3).jpeg",
    kind: "space"
  }
];

export const aboutImages = [ambientImages[3], ambientImages[2]];
export const contactImage = ambientImages[0];
export const reservationImage = ambientImages[4];

export const galleryImages: SiteImage[] = [
  foodImages.find((image) => image.title.includes("Sushi Set")) ?? foodImages[3],
  ambientImages[1],
  foodImages.find((image) => image.title.includes("Mien Xao")) ?? foodImages[6],
  ambientImages[2],
  foodImages.find((image) => image.title.includes("Cocktails")) ?? foodImages[12],
  ambientImages[3],
  foodImages.find((image) => image.title.includes("Haseki Curry")) ?? foodImages[8],
  ambientImages[4],
  foodImages.find((image) => image.title.includes("Tuna Tataki")) ?? foodImages[10],
  foodImages.find((image) => image.title.includes("Haki Dragonroll")) ?? foodImages[5],
  extraDrinkImages[0],
  foodImages.find((image) => image.title.includes("Sushi Mix Deluxe")) ?? foodImages[4]
].filter(Boolean);

export const demoImages = [...ambientImages, ...foodImages, ...extraDrinkImages];

export const menuCategories: MenuCategory[] = draft.categories.map((category) => {
  const title = cleanText(category.title);
  const representativeImage =
    category.representativeImage ?? "/images/demo/WhatsApp Image 2026-06-08 at 14.09.51.jpeg";

  return {
    id: category.id,
    title,
    description: cleanText(category.description ?? categoryDescriptions[category.id] ?? "Ausgewählte Haseki Spezialitäten frisch zubereitet."),
    representativeImage,
    items: (category.items ?? []).map((item) => ({
      no: item.no,
      name: cleanText(item.name),
      description: cleanText(item.description),
      price: item.price ? cleanText(item.price) : undefined,
      options: item.options?.map((option) => ({
        key: option.key ? cleanText(option.key) : undefined,
        label: cleanText(option.label),
        price: option.price ? cleanText(option.price) : undefined
      })),
      badges: item.badges?.map(cleanText)
    }))
  };
});

const signatureIds = [
  "haki-menu",
  "vietnamesisch-tradition",
  "jasminreis-mit-sosse",
  "vorspeisen",
  "carpaccio-tataki",
  "haki-spezial-rolle"
];

export const signatureCategories = signatureIds
  .map((id) => menuCategories.find((category) => category.id === id))
  .filter((category): category is MenuCategory => Boolean(category));

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurant.name,
  image: demoImages.map((image) => image.path),
  servesCuisine: ["Japanisch", "Vietnamesisch", "Sushi", "Pho"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Waltersdorfer Straße 1A",
    postalCode: "12526",
    addressLocality: "Berlin",
    addressCountry: "DE"
  },
  telephone: restaurant.phones[0],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "11:00",
      closes: "22:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "11:30",
      closes: "22:00"
    }
  ],
  priceRange: "€€"
};
