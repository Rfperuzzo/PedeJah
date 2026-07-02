import type { CategorySelectorProps } from "./types";

const allCategory = {
  id: "todos",
  name: "Todos",
  productCount: 0
};

export function CategorySelector({ categories, activeCategoryId, onCategoryChange }: CategorySelectorProps) {
  const allProductsCount = categories.reduce((total, category) => total + category.productCount, 0);
  const visibleCategories = [{ ...allCategory, productCount: allProductsCount }, ...categories];

  return (
    <nav className="px-5 py-5 sm:px-8" aria-label="Categorias da loja">
      <div className="mx-auto flex w-full max-w-5xl gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {visibleCategories.map((category) => {
          const active = category.id === activeCategoryId;

          return (
            <button
              key={category.id}
              className={`shrink-0 rounded-full border px-5 py-3 text-left transition active:scale-95 ${
                active
                  ? "border-[#F2C94C] bg-[#F2C94C] text-[#16100A]"
                  : "border-[#F2C94C]/14 bg-[#17130D] text-[#FFF7E8]"
              }`}
              type="button"
              aria-pressed={active}
              onClick={() => onCategoryChange(category.id)}
            >
              <span className="block text-sm font-bold leading-none">{category.name}</span>
              <span className={`mt-1 block text-[11px] ${active ? "text-[#47360A]" : "text-[#C9BFA8]/70"}`}>
                {category.productCount} itens
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
