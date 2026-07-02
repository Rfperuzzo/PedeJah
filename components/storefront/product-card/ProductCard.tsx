"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { ProductCardProps } from "./types";

export function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const [feedback, setFeedback] = useState("");

  function handleProductAction() {
    if (product.requiresCustomization) {
      router.push(`/loja/jah-burgers/produto/${product.id}`);
      return;
    }

    if (product.directAddEnabled) {
      setFeedback(`${product.name} pronto para adicionar em breve`);
      window.setTimeout(() => setFeedback(""), 2200);
    }
  }

  return (
    <article className="group min-w-0 space-y-4">
      <button
        className="block w-full rounded-[1.5rem] text-left outline-none transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f2ca50] sm:rounded-[2rem]"
        type="button"
        onClick={handleProductAction}
        aria-label={
          product.requiresCustomization
            ? `Abrir detalhes de ${product.name}`
            : `Selecionar ${product.name}`
        }
      >
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
          <span className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#f6e2a0] backdrop-blur-md">
            {product.requiresCustomization ? "Personalizar" : "Rapido"}
          </span>
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="text-[20px] font-medium leading-7 tracking-[0.01em] text-[#eae1d4]">{product.name}</h3>
          <p className="line-clamp-2 text-[14px] leading-5 text-[#d0c5af]">{product.description}</p>
          <p className="text-[16px] font-normal leading-6 text-[#f2ca50]">{product.price}</p>
        </div>
      </button>
      {feedback ? (
        <p className="rounded-full border border-[#f2ca50]/20 bg-[#f2ca50]/10 px-4 py-2 text-center text-[12px] font-bold uppercase leading-4 tracking-[0.12em] text-[#f2ca50]">
          {feedback}
        </p>
      ) : null}
    </article>
  );
}
