export function StoreBottomNav() {
  return (
    <nav
      className="fixed bottom-0 z-50 flex h-20 w-full items-center justify-around rounded-t-[2rem] border-t border-[#4d4635]/10 bg-[#110e07]/80 px-4 pb-4 shadow-lg backdrop-blur-xl sm:hidden"
      aria-label="Navegação visual da loja"
    >
      <BottomNavButton active label="Início" icon="⌂" />
      <BottomNavButton label="Cardápio" icon="≡" />
      <BottomNavButton label="Favoritos indisponíveis" icon="♡" disabled />
      <BottomNavButton label="Perfil indisponível" icon="♙" disabled />
    </nav>
  );
}

type BottomNavButtonProps = {
  label: string;
  icon: string;
  active?: boolean;
  disabled?: boolean;
};

function BottomNavButton({ label, icon, active = false, disabled = false }: BottomNavButtonProps) {
  return (
    <button
      className={`flex flex-col items-center gap-1 transition ${
        active ? "scale-110 text-[#f2ca50]" : "text-[#d0c5af]/60"
      } ${disabled ? "cursor-not-allowed opacity-40" : "active:scale-90"}`}
      type="button"
      aria-label={label}
      disabled={disabled}
    >
      <span className="text-base leading-none">{icon}</span>
    </button>
  );
}
