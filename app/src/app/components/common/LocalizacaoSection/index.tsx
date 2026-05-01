import Image from "next/image";
export default function LocalizacaoSection() {
  return (
    <section id="localizacao" className="mt-16">
      <div className="text-center">
        <p className="text-sm  uppercase tracking-[0.2em] text-(--primary-color)">
          Localizacao
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-(--text-color)">
          Encontre a PETRAS
        </h2>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-(--border-color) bg-white p-6 shadow-sm">
        <p className="text-sm uppercase tracking-[0.2em] text-(--primary-color)">
            Endereco
          </p>
          <p className="mt-3 text-lg font-semibold text-(--text-color)">
            Rua Principal, 123 - Centro
          </p>
          <p className="mt-2 text-sm text-(--text-color)/70">
            Atendimento: segunda a sabado, 8h as 17h
          </p>
          <div className="relative mt-6 h-40 overflow-hidden rounded-xl border border-(--border-color) bg-[linear-gradient(135deg,#f4f4f8,#ececf2)]">
            <Image src="/paudosferros.svg" alt="Mapa" fill className="object-cover" />
          </div>
        </div>
        <div className="rounded-2xl border border-(--border-color) bg-white p-6 shadow-sm">
        <p className="text-sm  uppercase tracking-[0.2em] text-(--primary-color)">
            Agendamento
          </p>
          <h3 className="mt-3 text-lg font-semibold text-(--text-color)">
            Atendimento dedicado
          </h3>
          <p className="mt-2 text-sm text-(--text-color)/70">
            Reserve um horario para consultoria, medidas e definicao de
            materiais.
          </p>
          <div className="mt-4 rounded-xl border border-(--border-color) bg-(--background-color) p-4">
        <p className="text-sm uppercase tracking-[0.2em] text-(--primary-color)">
              Como funciona
            </p>
            <ul className="mt-3 space-y-2 text-sm text-(--text-color)/70">
              <li>1. Informe o tipo de projeto.</li>
              <li>2. Combine data e horario.</li>
              <li>3. Receba orientacao personalizada.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
