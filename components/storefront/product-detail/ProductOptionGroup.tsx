"use client";

import { useState } from "react";
import type { ProductOptionGroupProps } from "./types";

export function ProductOptionGroup({ group }: ProductOptionGroupProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const isSingleChoice = group.maxSelected === 1;

  function toggleOption(optionId: string) {
    setSelectedOptions((current) => {
      if (isSingleChoice) {
        return current.includes(optionId) ? [] : [optionId];
      }

      if (current.includes(optionId)) {
        return current.filter((id) => id !== optionId);
      }

      if (current.length >= group.maxSelected) {
        return current;
      }

      return [...current, optionId];
    });
  }

  return (
    <section className="space-y-4 rounded-[1.5rem] border border-[#d4af37]/15 bg-[#1c1811] p-5 sm:p-6">
      <div className="space-y-1">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <h2 className="text-[22px] font-medium leading-7 text-[#fff7e8]">{group.name}</h2>
          <span className="w-fit rounded-full border border-[#f2ca50]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#f2ca50]">
            {group.minSelected > 0 ? "Obrigatorio" : `Ate ${group.maxSelected}`}
          </span>
        </div>
        <p className="text-[14px] leading-5 text-[#c9bfa8]">{group.description}</p>
      </div>

      <div className="space-y-2">
        {group.options.map((option) => {
          const isSelected = selectedOptions.includes(option.id);

          return (
            <label
              className="flex items-center justify-between gap-3 rounded-2xl border border-[#d4af37]/10 bg-black/15 px-4 py-3 text-[14px] leading-5 text-[#eae1d4]"
              key={option.id}
            >
              <span className="min-w-0">
                <span className="block truncate">{option.name}</span>
                <span className="block text-[12px] leading-4 text-[#c9bfa8]">{option.price}</span>
              </span>
              <input
                className="size-5 shrink-0 accent-[#f2ca50]"
                type={isSingleChoice ? "radio" : "checkbox"}
                name={group.id}
                checked={isSelected}
                onChange={() => toggleOption(option.id)}
              />
            </label>
          );
        })}
      </div>
    </section>
  );
}
