"use client";

import { useState } from "react";
import type { ProductQuantitySelectorProps } from "./types";

export function ProductQuantitySelector({ initialQuantity = 1 }: ProductQuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  return (
    <section className="flex items-center justify-between gap-4 rounded-[1.5rem] border border-[#d4af37]/15 bg-[#1c1811] p-5 sm:p-6">
      <div>
        <h2 className="text-[22px] font-medium leading-7 text-[#fff7e8]">Quantidade</h2>
        <p className="text-[14px] leading-5 text-[#c9bfa8]">Ajuste antes de adicionar.</p>
      </div>
      <div className="flex items-center rounded-full border border-[#f2ca50]/20 bg-black/20 p-1">
        <button
          className="grid size-10 place-items-center rounded-full text-[22px] leading-none text-[#f2ca50] transition hover:bg-[#f2ca50]/10 disabled:text-[#c9bfa8]/40"
          type="button"
          onClick={() => setQuantity((current) => Math.max(1, current - 1))}
          disabled={quantity === 1}
          aria-label="Diminuir quantidade"
        >
          -
        </button>
        <span className="w-10 text-center text-[18px] leading-7 text-[#fff7e8]">{quantity}</span>
        <button
          className="grid size-10 place-items-center rounded-full text-[22px] leading-none text-[#f2ca50] transition hover:bg-[#f2ca50]/10"
          type="button"
          onClick={() => setQuantity((current) => current + 1)}
          aria-label="Aumentar quantidade"
        >
          +
        </button>
      </div>
    </section>
  );
}
