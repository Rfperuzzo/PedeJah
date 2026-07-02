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

export type StorefrontAddon = {
  id: string;
  name: string;
  price: string;
};

export type StorefrontAddonGroup = {
  id: string;
  name: string;
  description: string;
  minSelected: number;
  maxSelected: number;
  options: StorefrontAddon[];
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
  requiresCustomization: boolean;
  ingredients: string[];
  removableIngredients: string[];
  addonGroups: StorefrontAddonGroup[];
  allowObservation: boolean;
  directAddEnabled: boolean;
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

const burgerExtras: StorefrontAddonGroup = {
  id: "extras",
  name: "Adicionais",
  description: "Deixe o burger ainda mais completo.",
  minSelected: 0,
  maxSelected: 3,
  options: [
    { id: "bacon", name: "Bacon crocante", price: "+ R$ 5,00" },
    { id: "cheddar-extra", name: "Cheddar extra", price: "+ R$ 4,00" },
    { id: "smash-extra", name: "Smash extra", price: "+ R$ 9,00" }
  ]
};

export const jahBurgersStore: StorefrontStore = {
  name: "Jah Burgers",
  type: "Hamburgueria artesanal",
  city: "Florianopolis - SC",
  description: "Burgers artesanais, carnes selecionadas e combos feitos para chegar no ponto certo.",
  status: "open",
  statusLabel: "Aberto agora",
  estimatedTime: "35-45 min",
  serviceModes: ["Entrega", "Retirada"],
  initials: "JB",
  heroLabel: "Artesanal no ponto",
  heroTitle: "Burgers\nPremium",
  heroActionLabel: "Ver cardapio",
  heroImageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCYel09QWbXdPSI5pVmbW8cZ9hEuFZzDOSVwoH3dfb0DTe4n8ivHqLbmyTe85aEnnxMYgio9U9Wwa_7SjC9ahWEVYzy9d_I3l3ACpqJQEwfG4sYQv8PTAreeOY9zpErtCOYWWeUtde7fm676Ak6agaXVI9TO23Lw1fcCn0Uf_E1O2Ej6wtY3beUL4cc6Nr1c6W2wCeLqIGo3tVAlU3iEdYpCPSYeOHgnyV3ko-P9BHQuA2bmdFv2YMC4Q",
  searchPlaceholder: "Buscar burger, combo ou bebida",
  experienceTitle: "A experiencia",
  experienceText:
    "Uma combinacao precisa de fogo, blend artesanal e servico rapido. Transformamos o burger em uma experiencia de compra premium.",
  featuredTitle: "Cardapio em destaque",
  featuredSubtitle: "Escolhas rapidas para pedir melhor",
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
    { id: "burgers", name: "Burgers", productCount: 2 },
    { id: "combos", name: "Combos", productCount: 1 },
    { id: "acompanhamentos", name: "Acompanhamentos", productCount: 1 },
    { id: "bebidas", name: "Bebidas", productCount: 1 }
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
      imageAlt: "Burger artesanal alto com queijo derretido e pao brioche em luz dramatica.",
      requiresCustomization: true,
      ingredients: ["Pao brioche", "Double smash", "Cheddar cremoso", "Cebola caramelizada", "Molho da casa"],
      removableIngredients: ["Cebola caramelizada", "Molho da casa"],
      addonGroups: [
        {
          id: "ponto-carne",
          name: "Ponto da carne",
          description: "Escolha como prefere o preparo.",
          minSelected: 1,
          maxSelected: 1,
          options: [
            { id: "ao-ponto", name: "Ao ponto", price: "R$ 0,00" },
            { id: "bem-passado", name: "Bem passado", price: "R$ 0,00" }
          ]
        },
        burgerExtras
      ],
      allowObservation: true,
      directAddEnabled: false,
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
      requiresCustomization: true,
      ingredients: ["Pao brioche", "Blend bovino", "Queijo prato", "Bacon crocante", "Barbecue artesanal"],
      removableIngredients: ["Bacon crocante", "Barbecue artesanal"],
      addonGroups: [burgerExtras],
      allowObservation: true,
      directAddEnabled: false,
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
      imageAlt: "Burger premium com pao escuro e acabamento sofisticado.",
      requiresCustomization: true,
      ingredients: ["Jah King", "Fritas finas", "Refrigerante lata"],
      removableIngredients: [],
      addonGroups: [
        {
          id: "bebida",
          name: "Bebida do combo",
          description: "Escolha uma bebida para acompanhar.",
          minSelected: 1,
          maxSelected: 1,
          options: [
            { id: "coca", name: "Coca-Cola lata", price: "R$ 0,00" },
            { id: "guarana", name: "Guarana lata", price: "R$ 0,00" },
            { id: "agua", name: "Agua sem gas", price: "R$ 0,00" }
          ]
        },
        {
          id: "molhos",
          name: "Molhos extras",
          description: "Escolha ate dois molhos.",
          minSelected: 0,
          maxSelected: 2,
          options: [
            { id: "maionese", name: "Maionese da casa", price: "+ R$ 2,00" },
            { id: "barbecue", name: "Barbecue artesanal", price: "+ R$ 2,00" }
          ]
        }
      ],
      allowObservation: true,
      directAddEnabled: false,
      badge: "Combo",
      featured: true
    },
    {
      id: "fritas-crocantes",
      name: "Fritas Crocantes",
      description: "Porcao individual de fritas finas com sal da casa.",
      price: "R$ 14,90",
      categoryId: "acompanhamentos",
      imageTone: "gold",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDkf36P2-VLDW2RDTkfrDGSAFIPcvEWxYJMb6N4Mhwg1ezdNdGgRdJbWZ0OhLPnYtjuJgvJmt30QdZVbIaTZnCJCby0bC-rJ8-MQ20-mzvDrEaXL3jBaku5u7sHQJrkLSbMbKUxv831fI93bCUbb5QVAC6vcitJlvlKjUtF9Ia457KNb4jbTJyUu6VryKOrMigLqLnLUei8-YmGJUUVh0_ecPFx8W5BC0ti9DK3HQWUlHhj-I3u-i7v0g",
      imageAlt: "Acompanhamento em visual premium escuro.",
      requiresCustomization: false,
      ingredients: ["Batata", "Sal da casa"],
      removableIngredients: [],
      addonGroups: [],
      allowObservation: false,
      directAddEnabled: true
    },
    {
      id: "coca-cola",
      name: "Coca-Cola Lata",
      description: "Refrigerante gelado, 350 ml.",
      price: "R$ 7,90",
      categoryId: "bebidas",
      imageTone: "smoke",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCYel09QWbXdPSI5pVmbW8cZ9hEuFZzDOSVwoH3dfb0DTe4n8ivHqLbmyTe85aEnnxMYgio9U9Wwa_7SjC9ahWEVYzy9d_I3l3ACpqJQEwfG4sYQv8PTAreeOY9zpErtCOYWWeUtde7fm676Ak6agaXVI9TO23Lw1fcCn0Uf_E1O2Ej6wtY3beUL4cc6Nr1c6W2wCeLqIGo3tVAlU3iEdYpCPSYeOHgnyV3ko-P9BHQuA2bmdFv2YMC4Q",
      imageAlt: "Bebida gelada em composicao escura premium.",
      requiresCustomization: false,
      ingredients: [],
      removableIngredients: [],
      addonGroups: [],
      allowObservation: false,
      directAddEnabled: true
    }
  ]
};
