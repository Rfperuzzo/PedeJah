import type { StoreHeroProps } from "./types";

export function StoreHero({ store }: StoreHeroProps) {
  return (
    <section className="relative min-h-[620px] w-full overflow-hidden sm:min-h-[700px]" aria-labelledby="store-hero-title">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${store.heroImageUrl})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,10,0)_0%,rgba(10,10,10,0.4)_60%,rgba(10,10,10,1)_100%)]" />

      <div className="fixed left-0 top-0 z-50 flex w-full items-center justify-between gap-4 bg-[#0a0a0a]/35 px-5 py-4 text-[#f2ca50] backdrop-blur-md sm:px-8">
        <button
          className="grid size-9 shrink-0 cursor-not-allowed place-items-center rounded-full border border-[#f2ca50]/20 opacity-70"
          type="button"
          aria-label="Menu ainda não disponível"
          disabled
        >
          <span className="block h-2.5 w-3 border-y border-current" />
        </button>
        <p className="min-w-0 truncate text-center text-[16px] font-extrabold uppercase leading-6 tracking-[0.18em] sm:text-[20px] sm:leading-7">
          {store.name}
        </p>
        <button
          className="grid size-9 shrink-0 cursor-not-allowed place-items-center rounded-full border border-[#f2ca50]/20 opacity-70"
          type="button"
          aria-label="Carrinho ainda não disponível"
          disabled
        >
          <span className="block size-3 rounded-b-[3px] rounded-t-sm border border-current" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 w-full px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="max-w-[min(100%,42rem)] space-y-4">
          <span className="block text-[12px] font-bold uppercase leading-4 tracking-[0.3em] text-[#f2ca50]">
            {store.heroLabel}
          </span>
          <h1
            id="store-hero-title"
            className="whitespace-pre-line text-[clamp(3rem,16vw,5.5rem)] font-extralight leading-[0.95] tracking-normal text-[#eae1d4]"
          >
            {store.heroTitle}
          </h1>
          <div className="flex items-center gap-4 pt-6">
            <a
              className="rounded-full bg-[#f2ca50] px-7 py-4 text-[12px] font-bold uppercase leading-4 tracking-[0.15em] text-[#241a00] transition hover:bg-[#ffe082] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2ca50]"
              href="#cardapio"
            >
              {store.heroActionLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
