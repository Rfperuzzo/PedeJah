import type { StorefrontProduct, StorefrontStore } from "@/lib/mock/jah-burgers";

export type SignatureProductProps = {
  label: StorefrontStore["signatureLabel"];
  product: StorefrontProduct;
};
