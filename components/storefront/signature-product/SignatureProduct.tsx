import type { SignatureProductProps } from "./types";

export function SignatureProduct({ label, product }: SignatureProductProps) {
  return (
    <section className="rounded-t-[2rem] border border-b-0 border-[#d4af37]/15 bg-[#1f1b13] px-5 pb-24 pt-16 sm:rounded-t-[3rem] sm:px-6 sm:pb-20 sm:pt-20">
      <div className="mx-auto max-w-4xl space-y-10 sm:space-y-12">
        <div className="space-y-2 text-center">
          <span className="block text-[12px] font-bold uppercase leading-4 tracking-[0.2em] text-[#f2ca50]">
            {label}
          </span>
          <h2 className="text-[28px] font-light leading-9 tracking-normal text-[#eae1d4]">{product.name}</h2>
        </div>

        <div className="relative aspect-square overflow-hidden rounded-[1.5rem] border border-[#d4af37]/15 shadow-[0_0_40px_rgba(212,175,55,0.05)] sm:rounded-[2rem]">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${product.imageUrl})` }}
            role="img"
            aria-label={product.imageAlt}
          />
        </div>

        <div className="space-y-6">
          <div className="flex flex-col gap-4 border-b border-[#4d4635]/30 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[18px] font-normal leading-7 text-[#eae1d4] sm:max-w-[70%]">{product.description}</p>
            <span className="shrink-0 whitespace-nowrap text-[28px] font-extralight leading-10 tracking-normal text-[#f2ca50] sm:text-[32px]">
              {product.price}
            </span>
          </div>

          <div className="flex gap-4">
            <button
              className="flex-1 cursor-not-allowed rounded-full border border-[#f2ca50]/30 bg-[#f2ca50]/20 py-5 text-[12px] font-bold uppercase leading-4 tracking-[0.15em] text-[#f2ca50]"
              type="button"
              disabled
            >
              Pedido em breve
            </button>
            <button
              className="grid size-16 cursor-not-allowed place-items-center rounded-full border border-[#f2ca50]/30 text-[#f2ca50]/60"
              type="button"
              aria-label="Favoritos ainda não disponíveis"
              disabled
            >
              <span className="text-2xl leading-none">♡</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
