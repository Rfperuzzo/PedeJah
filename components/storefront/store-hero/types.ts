import type { StorefrontStore } from "@/lib/mock/jah-burgers";

export type StoreHeroProps = {
  store: Pick<
    StorefrontStore,
    | "name"
    | "type"
    | "city"
    | "description"
    | "status"
    | "statusLabel"
    | "estimatedTime"
    | "serviceModes"
    | "initials"
    | "heroLabel"
    | "heroTitle"
    | "heroActionLabel"
    | "heroImageUrl"
    | "searchPlaceholder"
    | "theme"
  >;
};
