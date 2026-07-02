import type { Metadata } from "next";
import { DetailBento } from "@/components/storefront/detail-bento";
import { SignatureProduct } from "@/components/storefront/signature-product";
import { StoreBottomNav } from "@/components/storefront/store-bottom-nav";
import { StoreExperience } from "@/components/storefront/store-experience";
import { StoreFooter } from "@/components/storefront/store-footer";
import { StoreHero } from "@/components/storefront/store-hero";
import { StoreInfoStrip } from "@/components/storefront/store-info-strip";
import { StoreMenu } from "@/components/storefront/store-menu";
import { jahBurgersStore } from "@/lib/mock/jah-burgers";

export const metadata: Metadata = {
  title: "Jah Burgers | PedeJah",
  description: "Hamburgueria artesanal em Florianópolis - SC."
};

export default function JahBurgersStorefrontPage() {
  const featuredProducts = jahBurgersStore.products.filter((product) => product.featured);
  const signatureProduct =
    jahBurgersStore.products.find((product) => product.id === jahBurgersStore.signatureProductId) ??
    featuredProducts[0];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0a0a0a] pb-20 text-[#eae1d4] sm:pb-0">
      <StoreHero store={jahBurgersStore} />
      <StoreExperience store={jahBurgersStore} />
      <StoreInfoStrip store={jahBurgersStore} />
      <StoreMenu store={jahBurgersStore} />
      <SignatureProduct label={jahBurgersStore.signatureLabel} product={signatureProduct} />
      <DetailBento />
      <StoreFooter />
      <StoreBottomNav />
    </main>
  );
}
