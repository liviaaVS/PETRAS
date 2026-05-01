type StepHeaderProps = {
  step: number;
  stepLabel: string;
  totalSteps: number;
  progress: number;
};

export default function StepHeader({
  step,
  stepLabel,
  totalSteps,
  progress,
}: StepHeaderProps) {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-(--text-color)/70">
            Etapa {step + 1} de {totalSteps}
          </p>
          <h2 className="text-xl font-semibold text-(--text-color)">
            {stepLabel}
          </h2>
        </div>
        <div className="text-right">
          <p className="text-xs uppercase text-(--text-color)/50">
            Progresso
          </p>
          <p className="text-lg font-semibold text-(--primary-color)">
            {progress}%
          </p>
        </div>
      </div>

      <div className="mt-4 h-2 w-full rounded-full bg-(--border-color)">
        <div
          className="h-2 rounded-full bg-(--primary-color) transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
