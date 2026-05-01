export default function ProdutosSection() {
  return (
    <section id="produtos" className="mt-16">
      <div className="text-center">

        <p className="text-sm mt-4 uppercase tracking-[0.35em] text-(--primary-color)">
          Produtos
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-(--text-color)">
          Duas linhas de atendimento
        </h2>
        <p className="mt-3 text-(--text-color)/70">
          Marmore, granito e ardosia com acabamento sob medida.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <article className="rounded-2xl border border-(--border-color) bg-white p-5 shadow-sm">
          <div className="h-1 w-10 bg-(--primary-color)" />
          <h3 className="mt-4 text-lg font-semibold text-(--text-color)">
            Tumulos
          </h3>
          <p className="mt-2 text-sm text-(--text-color)/70">
            Modelos simples, triplo e familiar, com personalizacao de gavetas e
            casinha de vela.
          </p>
        </article>
        <article className="rounded-2xl border border-(--border-color) bg-white p-5 shadow-sm">
          <div className="h-1 w-10 bg-(--primary-color)" />
          <h3 className="mt-4 text-lg font-semibold text-(--text-color)">
            Moveis planejados
          </h3>
          <p className="mt-2 text-sm text-(--text-color)/70">
            Bancas, banheiros, mesas e outros projetos sob medida para sua casa
            ou negocio.
          </p>
        </article>
      </div>
    </section>
  );
}
