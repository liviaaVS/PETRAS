export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-white/70 shadow-sm border border-(--border-color) p-6 sm:p-8">
      <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[conic-gradient(from_180deg,#50e3c2,#0D0065,#50e3c2)] opacity-10" />
      <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,#0D0065,transparent_70%)] opacity-10" />

      <div className="relative z-10">
        <p className="text-sm uppercase tracking-[0.2em] text-(--primary-color)">
          Simulador de orcamento
        </p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-(--text-color)">
          Configure seu produto
        </h1>
        <p className="mt-3 max-w-2xl text-base text-(--text-color)/80">
          Escolha pedra, modelo, gavetas e casinha de vela. A estimativa e
          calculada automaticamente para facilitar seu planejamento.
        </p>
      </div>
    </section>
  );
}
