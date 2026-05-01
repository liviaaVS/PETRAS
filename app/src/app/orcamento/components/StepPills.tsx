type StepPill = {
  id: string;
  label: string;
};

type StepPillsProps = {
  step: number;
  steps: StepPill[];
};

export default function StepPills({ step, steps }: StepPillsProps) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {steps.map((item, index) => (
        <span
          key={item.id}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
            index === step
              ? "bg-(--primary-color) text-white"
              : index < step
              ? "bg-(--secondary-color)/20 text-(--text-color)"
              : "bg-(--border-color)/60 text-(--text-color)/60"
          }`}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
}
