export type StoreStatus = "open" | "closed";

export type StoreTheme = {
  primary: string;
  primarySoft: string;
  surface: string;
  surfaceElevated: string;
  text: string;
  muted: string;
};

export type StorefrontCategory = {
  id: string;
  name: string;
  productCount: number;
};

export type StorefrontProduct = {
  id: string;
  name: string;
  description: string;
  price: string;
  categoryId: string;
  imageTone: "gold" | "ember" | "smoke";
  imageUrl: string;
  imageAlt: string;
  badge?: string;
  featured?: boolean;
};

export type StorefrontStore = {
  name: string;
  type: string;
  city: string;
  description: string;
  status: StoreStatus;
  statusLabel: string;
  estimatedTime: string;
  serviceModes: string[];
  initials: string;
  heroLabel: string;
  heroTitle: string;
  heroActionLabel: string;
  heroImageUrl: string;
  searchPlaceholder: string;
  experienceTitle: string;
  experienceText: string;
  featuredTitle: string;
  featuredSubtitle: string;
  signatureLabel: string;
  signatureProductId: string;
  theme: StoreTheme;
  categories: StorefrontCategory[];
  products: StorefrontProduct[];
};

export const jahBurgersStore: StorefrontStore = {
  name: "Jah Burgers",
  type: "Hamburgueria artesanal",
  city: "Florianópolis - SC",
  description: "Burgers artesanais, carnes selecionadas e combos feitos para chegar no ponto certo.",
  status: "open",
  statusLabel: "Aberto agora",
  estimatedTime: "35-45 min",
  serviceModes: ["Entrega", "Retirada"],
  initials: "JB",
  heroLabel: "Artesanal no ponto",
  heroTitle: "Burgers\nPremium",
  heroActionLabel: "Ver cardápio",
  heroImageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCYel09QWbXdPSI5pVmbW8cZ9hEuFZzDOSVwoH3dfb0DTe4n8ivHqLbmyTe85aEnnxMYgio9U9Wwa_7SjC9ahWEVYzy9d_I3l3ACpqJQEwfG4sYQv8PTAreeOY9zpErtCOYWWeUtde7fm676Ak6agaXVI9TO23Lw1fcCn0Uf_E1O2Ej6wtY3beUL4cc6Nr1c6W2wCeLqIGo3tVAlU3iEdYpCPSYeOHgnyV3ko-P9BHQuA2bmdFv2YMC4Q",
  searchPlaceholder: "Buscar burger, combo ou bebida",
  experienceTitle: "A experiência",
  experienceText:
    "Uma combinação precisa de fogo, blend artesanal e serviço rápido. Transformamos o burger em uma experiência de compra premium.",
  featuredTitle: "Cardápio em destaque",
  featuredSubtitle: "Escolhas rápidas para pedir melhor",
  signatureLabel: "Especial da casa",
  signatureProductId: "jah-king",
  theme: {
    primary: "#F2C94C",
    primarySoft: "rgba(242, 201, 76, 0.16)",
    surface: "#0B0A07",
    surfaceElevated: "#1C1811",
    text: "#FFF7E8",
    muted: "#C9BFA8"
  },
  categories: [
    { id: "destaques", name: "Destaques", productCount: 1 },
    { id: "burgers", name: "Burgers", productCount: 1 },
    { id: "combos", name: "Combos", productCount: 1 },
    { id: "acompanhamentos", name: "Acompanhamentos", productCount: 0 },
    { id: "bebidas", name: "Bebidas", productCount: 0 }
  ],
  products: [
    {
      id: "jah-king",
      name: "Jah King",
      description: "Double smash, cheddar cremoso, cebola caramelizada e molho da casa no brioche tostado.",
      price: "R$ 34,90",
      categoryId: "destaques",
      imageTone: "gold",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC9hIPLYt0jukiVkVN3DJmHWDqvOCsz22uyVVy_mhLe943wYe5AQf8gKQq0mU3UhmZPBk0VCNMMrTM3bbJHgfv5mBTLTquqjTGZ51fc5YYp4e_DMfXeyXWUJ7Z-ZKXQZbh25sXi8ZBvRFHPl2-lQQrnbs6sYirEu6VtSnL7ynYfhuYVvu7V7ogmr8dNVYsoUjQcyvC1j6JFxj0zVfNQ1y6iVQsWsCTwrjKWROs4ZaBqscrCotCigNdGgg",
      imageAlt: "Burger artesanal alto com queijo derretido e pão brioche em luz dramática.",
      badge: "Mais vendido",
      featured: true
    },
    {
      id: "floripa-bbq",
      name: "Floripa BBQ",
      description: "Blend bovino, queijo prato, bacon crocante e barbecue artesanal levemente defumado.",
      price: "R$ 31,90",
      categoryId: "burgers",
      imageTone: "ember",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAjJXaMUoKRF1XqwRZ14yntoSc_dvTrIT2_gUk6bbKz91lkWOGFXJa0bkl9QzW2UR1I4tJJGrDsYFFFN3Ym1UsRubY5BrBEXdTltGtnDLEi1qLOerCvIjGtzD-DVAsgQ3RJMUNV-B1fwvTVf7G4f-6gtGTZbtytUAXuhLPgfhcGY4egxVZVQNL7t7T9TJivU7HrVRZ-ut611VwEw3Uu3zbv4DZhhBUdTYe6uD_76VmkNizqH_RxxbDjBQ",
      imageAlt: "Burger gourmet com queijo e folhas em fotografia escura premium.",
      badge: "Novo",
      featured: true
    },
    {
      id: "combo-jah",
      name: "Combo Jah",
      description: "Burger Jah King, fritas finas e refrigerante gelado para pedir sem pensar duas vezes.",
      price: "R$ 46,90",
      categoryId: "combos",
      imageTone: "smoke",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDkf36P2-VLDW2RDTkfrDGSAFIPcvEWxYJMb6N4Mhwg1ezdNdGgRdJbWZ0OhLPnYtjuJgvJmt30QdZVbIaTZnCJCby0bC-rJ8-MQ20-mzvDrEaXL3jBaku5u7sHQJrkLSbMbKUxv831fI93bCUbb5QVAC6vcitJlvlKjUtF9Ia457KNb4jbTJyUu6VryKOrMigLqLnLUei8-YmGJUUVh0_ecPFx8W5BC0ti9DK3HQWUlHhj-I3u-i7v0g",
      imageAlt: "Burger premium com pão escuro e acabamento sofisticado.",
      badge: "Combo",
      featured: true
    }
  ]
};
