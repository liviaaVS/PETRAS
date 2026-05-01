type StoneOption = {
  id: string;
  label: string;
  priceAdd: number;
  swatchClass: string;
};

type ModelOption = {
  id: string;
  label: string;
  basePrice: number;
};

type StepContentProps = {
  step: number;
  quoteType: "tumulo" | "outro" | null;
  whatsappUrl: string;
  stone: string | null;
  model: string | null;
  drawers: number | null;
  candleHouse: boolean | null;
  summaryLines: string[];
  stones: StoneOption[];
  models: ModelOption[];
  drawerOptions: number[];
  drawerUnitPrice: number;
  candleHousePrice: number;
  formatCurrency: (value: number) => string;
  onSelectStone: (value: string) => void;
  onSelectModel: (value: string) => void;
  onSelectDrawers: (value: number) => void;
  onSelectCandleHouse: (value: boolean) => void;
  onSelectQuoteType: (value: "tumulo" | "outro") => void;
};

export default function StepContent({
  step,
  quoteType,
  whatsappUrl,
  stone,
  model,
  drawers,
  candleHouse,
  summaryLines,
  stones,
  models,
  drawerOptions,
  drawerUnitPrice,
  candleHousePrice,
  formatCurrency,
  onSelectQuoteType,
  onSelectStone,
  onSelectModel,
  onSelectDrawers,
  onSelectCandleHouse,
}: StepContentProps) {
  return (
    <div className="mt-8">
      {step === 0 && (
        <div>
          <h3 className="text-lg font-semibold text-(--text-color)">
            O orcamento e para qual tipo de produto?
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <OptionCard
              active={quoteType === "tumulo"}
              title="Tumulo"
              description="Simulacao disponivel no site."
              onClick={() => onSelectQuoteType("tumulo")}
            />
            <OptionCard
              active={quoteType === "outro"}
              title="Outro item"
              description="Por enquanto, orcamento apenas pelo WhatsApp."
              onClick={() => onSelectQuoteType("outro")}
            />
          </div>
          {quoteType === "outro" ? (
            <div className="mt-4 rounded-2xl border-2 border-(--warning-color) bg-(--warning-color)/15 p-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-(--warning-color) px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#1b1b1b] animate-pulse">
                Aviso importante
              </div>
              <p className="mt-3 text-sm font-semibold text-(--text-color)">
                Por enquanto o site so simula orcamento de tumulo.
              </p>
              <p className="mt-2 text-sm text-(--text-color)/70">
                Para moveis planejados e outros projetos, fale com a equipe no
                WhatsApp e faremos um orcamento personalizado.
              </p>
              <a
                href={whatsappUrl}
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-(--primary-color) px-4 py-3 text-sm font-semibold text-white sm:hidden"
              >
                Ir para o WhatsApp
              </a>
            </div>
          ) : null}
        </div>
      )}

      {step === 1 && quoteType === "tumulo" && (
        <div>
          <h3 className="text-lg font-semibold text-(--text-color)">
            Escolha o tipo de pedra
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {stones.map((item) => (
              <OptionCard
                key={item.id}
                active={stone === item.id}
                title={item.label}
                description={`+ ${formatCurrency(item.priceAdd)}`}
                swatchClass={item.swatchClass}
                onClick={() => onSelectStone(item.id)}
              />
            ))}
          </div>
        </div>
      )}

      {step === 2 && quoteType === "tumulo" && (
        <div>
          <h3 className="text-lg font-semibold text-(--text-color)">
            Selecione o modelo
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {models.map((item) => (
              <OptionCard
                key={item.id}
                active={model === item.id}
                title={item.label}
                description={`Base ${formatCurrency(item.basePrice)}`}
                onClick={() => onSelectModel(item.id)}
              />
            ))}
          </div>
        </div>
      )}

      {step === 3 && quoteType === "tumulo" && (
        <div>
          <h3 className="text-lg font-semibold text-(--text-color)">
            Quantas gavetas?
          </h3>
          <p className="mt-1 text-sm text-(--text-color)/60">
            Disponivel: {drawerOptions.join(", ")} gaveta
            {drawerOptions.length > 1 ? "s" : ""}.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {drawerOptions.map((count) => (
              <OptionCard
                key={count}
                active={drawers === count}
                title={`${count} gaveta${count > 1 ? "s" : ""}`}
                description={
                  model === "familiar" && count === 6
                    ? `+ ${formatCurrency(drawerUnitPrice)}`
                    : "Sem adicional"
                }
                onClick={() => onSelectDrawers(count)}
              />
            ))}
          </div>
        </div>
      )}

      {step === 4 && quoteType === "tumulo" && (
        <div>
          <h3 className="text-lg font-semibold text-[--text-color]">
            Deseja casinha de vela?
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <OptionCard
              active={candleHouse === true}
              title="Sim, adicionar"
              description={`+ ${formatCurrency(candleHousePrice)}`}
              onClick={() => onSelectCandleHouse(true)}
            />
            <OptionCard
              active={candleHouse === false}
              title="Nao, obrigado"
              description="Sem adicional"
              onClick={() => onSelectCandleHouse(false)}
            />
          </div>
        </div>
      )}

      {step === 5 && quoteType === "tumulo" && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[--text-color]">
            Resumo da simulacao
          </h3>
          <div className="rounded-xl border border-(--border-color) bg-(--background-color) p-4">
            <ul className="space-y-2 text-sm text-[--text-color]">
              {summaryLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-[--text-color]/70">
            Estimativa sujeita a validacao final e variacoes de acabamento ou
            medidas.
          </p>
        </div>
      )}
    </div>
  );
}

function OptionCard({
  title,
  description,
  active,
  swatchClass,
  onClick,
}: {
  title: string;
  description: string;
  active: boolean;
  swatchClass?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group w-full rounded-xl border px-4 py-5 text-left transition-all ${
        active
          ? "border-(--primary-color) bg-(--primary-color)/10 shadow-sm"
          : "border-(--border-color) bg-white hover:border-(--primary-color)/60 hover:bg-(--primary-color)/5"
      }`}
    >
      <div className="flex items-center gap-3">
        {swatchClass ? (
          <span
            className={`h-10 w-10 rounded-full border border-(--border-color) ${swatchClass}`}
            aria-hidden="true"
          />
        ) : null}
        <p className="text-base font-semibold text-(--text-color)">{title}</p>
      </div>
      <p className="mt-2 text-sm text-(--text-color)/70">{description}</p>
      <span
        className={`mt-4 inline-flex items-center text-xs font-medium uppercase tracking-[0.15em] ${
          active ? "text-(--primary-color)" : "text-(--text-color)/50"
        }`}
      >
        {active ? "Selecionado" : "Selecionar"}
      </span>
    </button>
  );
}
