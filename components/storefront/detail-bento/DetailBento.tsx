export function DetailBento() {
  return (
    <section className="grid grid-cols-2 gap-4 px-5 py-16 sm:px-6 sm:py-20">
      <div className="col-span-2 flex flex-col items-center justify-center space-y-4 rounded-[1.5rem] border border-[#d4af37]/15 bg-[#2d2a21] p-8 text-center sm:rounded-[2rem]">
        <span className="grid size-10 place-items-center rounded-full border border-[#f2ca50]/25 text-[#f2ca50]">
          ★
        </span>
        <h3 className="text-[20px] font-medium leading-7 tracking-normal text-[#eae1d4]">
          Ingredientes selecionados
        </h3>
        <p className="text-[16px] font-normal leading-6 text-[#d0c5af]">
          Usamos blend selecionado, pão fresco e molhos da casa para manter cada pedido consistente.
        </p>
      </div>

      <DetailItem label="Ponto" value="Ao ponto" />
      <DetailItem label="Pão" value="Brioche" />
    </section>
  );
}

type DetailItemProps = {
  label: string;
  value: string;
};

function DetailItem({ label, value }: DetailItemProps) {
  return (
    <div className="space-y-2 rounded-[1.5rem] border border-[#d4af37]/15 bg-[#231f17] p-5 sm:rounded-[2rem] sm:p-6">
      <h4 className="text-[12px] font-bold uppercase leading-4 tracking-[0.15em] text-[#f2ca50]">{label}</h4>
      <p className="text-[20px] font-medium leading-7 tracking-normal text-[#eae1d4]">{value}</p>
    </div>
  );
}
