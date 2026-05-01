import PetraButton from "../../components/ui/Button";

type StepFooterProps = {
  step: number;
  totalSteps: number;
  canAdvance: boolean;
  onPrev: () => void;
  onNext: () => void;
  onSend: () => void;
  onReset: () => void;
};

export default function StepFooter({
  step,
  totalSteps,
  canAdvance,
  onPrev,
  onNext,
  onSend,
  onReset,
}: StepFooterProps) {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-3">
      <PetraButton
        className="border border-(--border-color)"
        type="default"
        size="large"
        onClick={onPrev}
      >
        Voltar
      </PetraButton>
      {step < totalSteps - 1 ? (
        <PetraButton
          className="bg-primary border-0 text-white"
          type="primary"
          size="large"
          onClick={onNext}
          loading={false}
          iconPlacement="end"
          icon={null}
          disabled={!canAdvance}
        >
          Proximo
        </PetraButton>
      ) : (
        <PetraButton
          className="bg-primary border-0 text-white"
          type="primary"
          size="large"
          onClick={onSend}
        >
          Enviar resumo no WhatsApp
        </PetraButton>
      )}

      <button
        type="button"
        className="text-sm text-(--primary-color) underline"
        onClick={onReset}
      >
        Reiniciar simulacao
      </button>
    </div>
  );
}
