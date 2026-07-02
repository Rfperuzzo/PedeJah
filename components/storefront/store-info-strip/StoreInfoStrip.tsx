import type { StoreInfoStripProps } from "./types";

export function StoreInfoStrip({ store }: StoreInfoStripProps) {
  return (
    <section className="px-5 pb-14 sm:px-6 sm:pb-16">
      <div className="mx-auto grid max-w-2xl grid-cols-3 gap-0 overflow-hidden rounded-[1.5rem] border border-[#d4af37]/15 bg-[#231f17] p-4 shadow-[0_0_40px_rgba(212,175,55,0.05)] sm:rounded-[2rem] sm:p-6">
        <InfoItem icon="pin" label={store.city.replace("Florianópolis - SC", "Floripa")} />
        <InfoItem icon="clock" label={store.statusLabel} divided />
        <InfoItem icon="route" label={store.estimatedTime} />
      </div>
    </section>
  );
}

type InfoItemProps = {
  icon: "pin" | "clock" | "route";
  label: string;
  divided?: boolean;
};

function InfoItem({ icon, label, divided = false }: InfoItemProps) {
  const iconLabel = {
    pin: "⌖",
    clock: "◷",
    route: "↝"
  }[icon];

  return (
    <div className={`space-y-2 text-center ${divided ? "border-x border-[#4d4635]/30" : ""}`}>
      <span className="mx-auto block h-5 text-center text-sm leading-5 text-[#f2ca50]" aria-hidden="true">
        {iconLabel}
      </span>
      <span className="block break-words text-[10px] font-bold uppercase leading-4 tracking-[0.1em] text-[#d0c5af] sm:tracking-[0.15em]">
        {label}
      </span>
    </div>
  );
}
