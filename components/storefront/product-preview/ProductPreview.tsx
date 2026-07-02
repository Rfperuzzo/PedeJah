import { ProductCard } from "../product-card";
import type { ProductPreviewProps } from "./types";

export function ProductPreview({
  products,
  title,
  subtitle,
  emptyTitle = "Nenhum produto encontrado",
  emptyDescription = "Tente buscar por outro nome ou escolher outra categoria."
}: ProductPreviewProps) {
  return (
    <section className="space-y-8 pb-16 sm:space-y-10 sm:pb-20" aria-labelledby="featured-products-title">
      <div className="flex flex-col gap-2 px-5 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div className="space-y-1">
          <h2 id="featured-products-title" className="text-[28px] font-light leading-9 tracking-normal text-[#eae1d4]">
            {title}
          </h2>
          <p className="text-[12px] font-bold uppercase leading-4 tracking-[0.15em] text-[#d0c5af]/60">
            {subtitle}
          </p>
        </div>
      </div>

      {products.length > 0 ? (
        <div className="grid gap-6 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mx-5 rounded-[1.5rem] border border-[#d4af37]/15 bg-[#231f17] px-6 py-10 text-center sm:mx-8">
          <h3 className="text-[20px] font-medium leading-7 text-[#eae1d4]">{emptyTitle}</h3>
          <p className="mx-auto mt-2 max-w-md text-[15px] leading-6 text-[#d0c5af]">{emptyDescription}</p>
        </div>
      )}
    </section>
  );
}
