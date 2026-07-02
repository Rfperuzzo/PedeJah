"use client";

import { useMemo, useState } from "react";
import { CategorySelector } from "../category-selector";
import { ProductPreview } from "../product-preview";
import { StoreSearch } from "../store-search";
import type { StoreMenuProps } from "./types";

const allCategoryId = "todos";

export function StoreMenu({ store }: StoreMenuProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategoryId, setActiveCategoryId] = useState(allCategoryId);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return store.products.filter((product) => {
      const matchesCategory =
        activeCategoryId === allCategoryId || product.categoryId === activeCategoryId;
      const matchesSearch =
        normalizedSearch.length === 0 ||
        `${product.name} ${product.description} ${product.badge ?? ""}`
          .toLowerCase()
          .includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategoryId, searchTerm, store.products]);

  return (
    <section id="cardapio" className="scroll-mt-24">
      <StoreSearch
        placeholder={store.searchPlaceholder}
        value={searchTerm}
        onChange={setSearchTerm}
      />
      <CategorySelector
        categories={store.categories}
        activeCategoryId={activeCategoryId}
        onCategoryChange={setActiveCategoryId}
      />
      <ProductPreview
        products={filteredProducts}
        title={store.featuredTitle}
        subtitle={store.featuredSubtitle}
      />
    </section>
  );
}
