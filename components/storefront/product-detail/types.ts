import type { StorefrontAddonGroup, StorefrontProduct } from "@/lib/mock/jah-burgers";

export type ProductDetailHeroProps = {
  product: StorefrontProduct;
};

export type ProductIngredientListProps = {
  ingredients: string[];
  removableIngredients: string[];
};

export type ProductOptionGroupProps = {
  group: StorefrontAddonGroup;
};

export type ProductObservationProps = {
  enabled: boolean;
};

export type ProductQuantitySelectorProps = {
  initialQuantity?: number;
};

export type ProductAddButtonProps = {
  productName: string;
  price: string;
};
