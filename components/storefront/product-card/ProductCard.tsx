import type { ProductCardProps } from "./types";

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group min-w-0 space-y-4">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-[#d4af37]/15 bg-[#231f17] sm:rounded-[2rem]">
        <div
          className="h-full w-full bg-cover bg-center transition duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${product.imageUrl})` }}
          role="img"
          aria-label={product.imageAlt}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        {product.badge ? (
          <span className="absolute bottom-4 left-4 rounded-full bg-[#f2ca50]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#f2ca50] backdrop-blur-md">
            {product.badge}
          </span>
        ) : null}
      </div>
      <div className="space-y-1">
        <h3 className="text-[20px] font-medium leading-7 tracking-[0.01em] text-[#eae1d4]">{product.name}</h3>
        <p className="line-clamp-2 text-[14px] leading-5 text-[#d0c5af]">{product.description}</p>
        <p className="text-[16px] font-normal leading-6 text-[#f2ca50]">{product.price}</p>
      </div>
    </article>
  );
}
