import type { StorefrontStore } from "@/lib/mock/jah-burgers";

export type StoreExperienceProps = {
  store: Pick<StorefrontStore, "experienceTitle" | "experienceText">;
};
