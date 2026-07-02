import type { StorefrontStore } from "@/lib/mock/jah-burgers";

export type StoreMenuProps = {
  store: Pick<
    StorefrontStore,
    "searchPlaceholder" | "categories" | "products" | "featuredTitle" | "featuredSubtitle"
  >;
};
