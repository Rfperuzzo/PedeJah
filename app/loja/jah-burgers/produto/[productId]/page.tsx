import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import {
  ProductAddButton,
  ProductDetailHero,
  ProductIngredientList,
  ProductObservation,
  ProductOptionGroup,
  ProductQuantitySelector
} from "@/components/storefront/product-detail";
import { jahBurgersStore } from "@/lib/mock/jah-burgers";

type ProductDetailPageProps = {
  params: Promise<{
    productId: string;
  }>;
};

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { productId } = await params;
  const product = jahBurgersStore.products.find((item) => item.id === productId);

  if (!product) {
    return {
      title: "Produto nao encontrado | Jah Burgers"
    };
  }

  return {
    title: `${product.name} | Jah Burgers`,
    description: product.description
  };
}

export function generateStaticParams() {
  return jahBurgersStore.products
    .filter((product) => product.requiresCustomization)
    .map((product) => ({
      productId: product.id
    }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { productId } = await params;
  const product = jahBurgersStore.products.find((item) => item.id === productId);

  if (!product) {
    notFound();
  }

  if (!product.requiresCustomization) {
    redirect("/loja/jah-burgers#cardapio");
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-[#eae1d4]">
      <ProductDetailHero product={product} />
      <div className="mx-auto grid max-w-4xl gap-4 px-5 py-6 sm:gap-5 sm:px-8 sm:py-8">
        <ProductIngredientList
          ingredients={product.ingredients}
          removableIngredients={product.removableIngredients}
        />
        {product.addonGroups.map((group) => (
          <ProductOptionGroup group={group} key={group.id} />
        ))}
        <ProductObservation enabled={product.allowObservation} />
        <ProductQuantitySelector />
        <ProductAddButton productName={product.name} price={product.price} />
      </div>
    </main>
  );
}
