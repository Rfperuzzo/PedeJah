import type { StorefrontProduct } from "@/lib/mock/jah-burgers";

export type ProductPreviewProps = {
  products: StorefrontProduct[];
  title: string;
  subtitle: string;
  emptyTitle?: string;
  emptyDescription?: string;
};
