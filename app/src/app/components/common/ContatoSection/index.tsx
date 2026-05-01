export default function ContatoSection() {
  return (
    <section id="contato" className="mt-16">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-(--primary-color)">
          Contato
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-(--text-color)">
          Fale com a equipe
        </h2>
      </div>

      <div className="mt-8">
        <div className="rounded-2xl border border-(--border-color) bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
        <p className="text-sm uppercase tracking-[0.2em] text-(--primary-color)">
                WhatsApp oficial
              </p>
              <p className="mt-2 text-2xl font-semibold text-(--text-color)">
                (84) 96729-317
              </p>
              <p className="mt-2 text-sm text-(--text-color)/70">
                Atendimento rapido para orcamentos, visitas e suporte.
              </p>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=558496729317&text=Ola!%20Vim%20atraves%20do%20site."
              className="inline-flex items-center justify-center rounded-lg bg-(--primary-color) px-5 py-3 text-sm font-semibold text-white"
            >
              Chamar no WhatsApp
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-(--border-color) p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-(--text-color)/60">
                Horario
              </p>
              <p className="mt-2 text-sm text-(--text-color)/70">
                Segunda a sabado, 8h as 17h
              </p>
            </div>
            <div className="rounded-xl border border-(--border-color) p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-(--text-color)/60">
                Resposta
              </p>
              <p className="mt-2 text-sm text-(--text-color)/70">
                Normalmente em ate 1 hora
              </p>
            </div>
            <div className="rounded-xl border border-(--border-color) p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-(--text-color)/60">
                Suporte
              </p>
              <p className="mt-2 text-sm text-(--text-color)/70">
                Orcamentos, visitas e duvidas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
