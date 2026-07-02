"use client";

import { useState } from "react";
import type { ProductObservationProps } from "./types";

export function ProductObservation({ enabled }: ProductObservationProps) {
  const [observation, setObservation] = useState("");

  if (!enabled) {
    return null;
  }

  return (
    <section className="space-y-3 rounded-[1.5rem] border border-[#d4af37]/15 bg-[#1c1811] p-5 sm:p-6">
      <div className="space-y-1">
        <h2 className="text-[22px] font-medium leading-7 text-[#fff7e8]">Observacao</h2>
        <p className="text-[14px] leading-5 text-[#c9bfa8]">Use somente para preferencias simples.</p>
      </div>
      <textarea
        className="min-h-28 w-full resize-none rounded-2xl border border-[#d4af37]/15 bg-black/20 px-4 py-3 text-[15px] leading-6 text-[#fff7e8] outline-none placeholder:text-[#c9bfa8]/55 focus:border-[#f2ca50]/60"
        maxLength={140}
        placeholder="Ex: tirar guardanapo, ponto mais passado..."
        value={observation}
        onChange={(event) => setObservation(event.target.value)}
      />
      <p className="text-right text-[12px] leading-4 text-[#c9bfa8]/70">{observation.length}/140</p>
    </section>
  );
}
