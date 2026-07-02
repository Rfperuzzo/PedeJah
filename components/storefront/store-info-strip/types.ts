import type { StorefrontStore } from "@/lib/mock/jah-burgers";

export type StoreInfoStripProps = {
  store: Pick<StorefrontStore, "city" | "statusLabel" | "estimatedTime">;
};
