import type { StorefrontCategory } from "@/lib/mock/jah-burgers";

export type CategorySelectorProps = {
  categories: StorefrontCategory[];
  activeCategoryId: string;
  onCategoryChange: (categoryId: string) => void;
};
