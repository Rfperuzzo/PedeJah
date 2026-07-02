"use client";

import { useState } from "react";
import type { ProductAddButtonProps } from "./types";

export function ProductAddButton({ productName, price }: ProductAddButtonProps) {
  const [feedback, setFeedback] = useState("");

  function handleAddClick() {
    setFeedback(`${productName} pronto para entrar no pedido em sprint futura.`);
    window.setTimeout(() => setFeedback(""), 2600);
  }

  return (
    <section className="sticky bottom-0 z-20 border-t border-[#d4af37]/15 bg-[#0a0a0a]/90 px-5 py-4 backdrop-blur-md sm:static sm:rounded-[1.5rem] sm:border sm:bg-[#1c1811] sm:p-5">
      <button
        className="flex w-full items-center justify-between gap-4 rounded-full bg-[#f2ca50] px-5 py-4 text-left text-[#241a00] transition hover:bg-[#ffe082] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2ca50]"
        type="button"
        onClick={handleAddClick}
      >
        <span className="text-[12px] font-bold uppercase leading-4 tracking-[0.15em]">Adicionar ao pedido</span>
        <span className="shrink-0 text-[16px] font-semibold leading-6">{price}</span>
      </button>
      {feedback ? <p className="mt-3 text-center text-[13px] leading-5 text-[#f6e2a0]">{feedback}</p> : null}
    </section>
  );
}
