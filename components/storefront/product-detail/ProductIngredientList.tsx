"use client";

import { useState } from "react";
import type { ProductIngredientListProps } from "./types";

export function ProductIngredientList({ ingredients, removableIngredients }: ProductIngredientListProps) {
  const [removedIngredients, setRemovedIngredients] = useState<string[]>([]);

  function toggleIngredient(ingredient: string) {
    setRemovedIngredients((current) =>
      current.includes(ingredient)
        ? current.filter((item) => item !== ingredient)
        : [...current, ingredient]
    );
  }

  return (
    <section className="space-y-4 rounded-[1.5rem] border border-[#d4af37]/15 bg-[#1c1811] p-5 sm:p-6">
      <div className="space-y-1">
        <h2 className="text-[22px] font-medium leading-7 text-[#fff7e8]">Ingredientes</h2>
        <p className="text-[14px] leading-5 text-[#c9bfa8]">Confira a composicao do produto.</p>
      </div>

      {ingredients.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {ingredients.map((ingredient) => (
            <span
              className="rounded-full border border-[#f2ca50]/15 bg-[#f2ca50]/10 px-3 py-2 text-[13px] leading-4 text-[#f6e2a0]"
              key={ingredient}
            >
              {ingredient}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-[14px] leading-5 text-[#c9bfa8]">Produto simples sem composicao detalhada.</p>
      )}

      {removableIngredients.length > 0 ? (
        <div className="space-y-3 border-t border-[#4d4635]/40 pt-4">
          <p className="text-[12px] font-bold uppercase leading-4 tracking-[0.15em] text-[#f2ca50]">Remover</p>
          <div className="space-y-2">
            {removableIngredients.map((ingredient) => (
              <label
                className="flex items-center justify-between gap-3 rounded-2xl border border-[#d4af37]/10 bg-black/15 px-4 py-3 text-[14px] leading-5 text-[#eae1d4]"
                key={ingredient}
              >
                <span>{ingredient}</span>
                <input
                  className="size-5 accent-[#f2ca50]"
                  type="checkbox"
                  checked={removedIngredients.includes(ingredient)}
                  onChange={() => toggleIngredient(ingredient)}
                />
              </label>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
