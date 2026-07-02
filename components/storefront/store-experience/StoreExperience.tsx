import type { StoreExperienceProps } from "./types";

export function StoreExperience({ store }: StoreExperienceProps) {
  return (
    <section className="mx-auto max-w-2xl space-y-8 px-6 py-20 text-center">
      <span className="block text-[12px] font-bold uppercase leading-4 tracking-[0.15em] text-[#f2ca50]">
        {store.experienceTitle}
      </span>
      <p className="text-[28px] font-light leading-9 tracking-[0.02em] text-[#eae1d4]">
        {store.experienceText}
      </p>
      <div className="mx-auto h-px w-12 bg-[#d4af37]/30" />
    </section>
  );
}
