import Link from "next/link";
import type { ProductDetailHeroProps } from "./types";

export function ProductDetailHero({ product }: ProductDetailHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#d4af37]/15 bg-[#120f0a]">
      <div className="relative aspect-[4/3] min-h-[320px] overflow-hidden sm:aspect-[21/9]">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${product.imageUrl})` }}
          role="img"
          aria-label={product.imageAlt}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/35 to-black/10" />
      </div>

      <div className="absolute left-0 top-0 z-10 flex w-full items-center justify-between px-5 py-4 sm:px-8">
        <Link
          className="rounded-full border border-[#f2ca50]/30 bg-black/35 px-4 py-2 text-[12px] font-bold uppercase leading-4 tracking-[0.15em] text-[#f2ca50] backdrop-blur-md transition hover:bg-[#f2ca50]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2ca50]"
          href="/loja/jah-burgers#cardapio"
        >
          Voltar
        </Link>
        {product.badge ? (
          <span className="rounded-full bg-[#f2ca50]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#f2ca50] backdrop-blur-md">
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="relative z-10 mx-auto -mt-28 max-w-4xl px-5 pb-8 sm:-mt-24 sm:px-8">
        <div className="space-y-4">
          <p className="text-[12px] font-bold uppercase leading-4 tracking-[0.22em] text-[#f2ca50]">
            Personalize seu pedido
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <h1 className="text-[40px] font-light leading-[1.05] tracking-normal text-[#fff7e8] sm:text-[56px]">
                {product.name}
              </h1>
              <p className="max-w-2xl text-[16px] leading-7 text-[#d0c5af] sm:text-[18px]">{product.description}</p>
            </div>
            <p className="shrink-0 text-[30px] font-extralight leading-10 text-[#f2ca50] sm:text-[36px]">
              {product.price}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
