import type { StoreSearchProps } from "./types";

export function StoreSearch({ placeholder, value, onChange }: StoreSearchProps) {
  return (
    <section className="px-5 pt-2 sm:px-8" aria-label="Busca de produtos">
      <label className="sr-only" htmlFor="store-search">
        Buscar produto
      </label>
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center gap-3 rounded-full border border-[#F2C94C]/14 bg-[#17130D] px-5 text-[#FFF7E8] shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
        <span className="size-3 rounded-full border-2 border-[#F2C94C]/80" aria-hidden="true" />
        <input
          id="store-search"
          className="h-full min-w-0 flex-1 bg-transparent text-sm font-medium text-[#FFF7E8] outline-none placeholder:text-[#C9BFA8]/62"
          placeholder={placeholder}
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </section>
  );
}
