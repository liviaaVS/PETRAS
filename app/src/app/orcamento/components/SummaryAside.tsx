import PetraButton from "../../components/ui/Button";

type SummaryAsideProps = {
  summaryLines: string[];
  estimate: number;
  formatCurrency: (value: number) => string;
  onSend: () => void;
};

export default function SummaryAside({
  summaryLines,
  estimate,
  formatCurrency,
  onSend,
}: SummaryAsideProps) {
  return (
    <aside className="rounded-2xl border border-(--border-color) bg-white p-6 sm:p-8 shadow-sm">
      <h3 className="text-lg font-semibold text-(--text-color)">
        Seu resumo rapido
      </h3>
      <div className="mt-4 rounded-xl bg-(--background-color) p-4">
        <ul className="space-y-2 text-sm text-(--text-color)">
          {summaryLines.slice(0, 4).map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-xl border border-(--border-color) p-4">
        <p className="text-xs uppercase text-(--text-color)/60">
          Estimativa atual
        </p>
        <p className="mt-2 text-3xl font-semibold text-(--primary-color)">
          {formatCurrency(estimate)}
        </p>
        <p className="mt-2 text-xs text-(--text-color)/60">
          Inclui acabamento e suporte inicial.
        </p>
      </div>

      <div className="mt-6">
        <PetraButton
          className="w-full bg-primary border-0 text-white"
          type="primary"
          size="large"
          onClick={onSend}
        >
          Falar no WhatsApp
        </PetraButton>
      </div>
    </aside>
  );
}
