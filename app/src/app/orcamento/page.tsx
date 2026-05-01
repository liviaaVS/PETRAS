"use client";

import { useMemo, useState } from "react";
import NavBar from "../components/ui/NavBar";
import HeroSection from "./components/HeroSection";
import StepHeader from "./components/StepHeader";
import StepPills from "./components/StepPills";
import StepContent from "./components/StepContent";
import StepFooter from "./components/StepFooter";
import SummaryAside from "./components/SummaryAside";

const stones = [
  {
    id: "marmore",
    label: "Marmore",
    priceAdd: 500,
    swatchClass:
      "bg-[linear-gradient(135deg,#f2f0ea,#d9d1c7,#f7f5f1)]",
  },
  {
    id: "granito",
    label: "Granito",
    priceAdd: 350,
    swatchClass:
      "bg-[radial-gradient(circle_at_30%_30%,#c9c9c9,#8f8f8f,#5b5b5b)]",
  },
  {
    id: "ardosia",
    label: "Ardosia",
    priceAdd: 250,
    swatchClass:
      "bg-[linear-gradient(135deg,#3b414a,#2b2f36,#1f2329)]",
  },
];

const models = [
  {
    id: "simples",
    label: "Modelo simples (1-2 gavetas)",
    basePrice: 1800,
  },
  { id: "triplo", label: "Modelo triplo (3 gavetas)", basePrice: 3200 },
  {
    id: "familiar",
    label: "Modelo familiar (4-6 gavetas)",
    basePrice: 4200,
  },
];

const drawerOptions = [1, 2, 3, 4, 5, 6];

const steps = [
  { id: "type", label: "Tipo" },
  { id: "stone", label: "Pedra" },
  { id: "model", label: "Modelo" },
  { id: "drawers", label: "Gavetas" },
  { id: "candle", label: "Casinha" },
  { id: "summary", label: "Resumo" },
];

const drawerUnitPrice = 350;
const candleHousePrice = 280;
const finishingFee = 300;

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

function getAllowedDrawerOptions(modelId: string | null) {
  if (modelId === "simples") return [1, 2];
  if (modelId === "triplo") return [3];
  if (modelId === "familiar") return [4, 5, 6];
  return drawerOptions;
}

export default function OrcamentoPage() {
  const [step, setStep] = useState(0);
  const [quoteType, setQuoteType] = useState<"tumulo" | "outro" | null>(null);
  const [stone, setStone] = useState<string | null>(null);
  const [model, setModel] = useState<string | null>(null);
  const [drawers, setDrawers] = useState<number | null>(null);
  const [candleHouse, setCandleHouse] = useState<boolean | null>(null);

  const selectedStone = stones.find((item) => item.id === stone) || null;
  const selectedModel = models.find((item) => item.id === model) || null;

  const allowedDrawerOptions = useMemo(
    () => getAllowedDrawerOptions(selectedModel?.id ?? null),
    [selectedModel]
  );

  const estimate = useMemo(() => {
    const base = selectedModel?.basePrice ?? 0;
    const stoneAdd = selectedStone?.priceAdd ?? 0;
    const drawerAdd =
      selectedModel?.id === "familiar" && drawers === 6 ? drawerUnitPrice : 0;
    const candleAdd = candleHouse ? candleHousePrice : 0;

    return base + stoneAdd + drawerAdd + candleAdd + finishingFee;
  }, [selectedModel, selectedStone, drawers, candleHouse]);

  const canAdvance = useMemo(() => {
    if (step === 0) return quoteType === "tumulo";
    if (step === 1) return !!stone;
    if (step === 2) return !!model;
    if (step === 3) return drawers !== null;
    if (step === 4) return candleHouse !== null;
    return true;
  }, [step, quoteType, stone, model, drawers, candleHouse]);

  const progress = Math.round((step / (steps.length - 1)) * 100);

  const summaryLines = useMemo(() => [
    `Tipo: ${quoteType === "tumulo" ? "Tumulo" : "-"}`,
    `Pedra: ${selectedStone?.label ?? "-"}`,
    `Modelo: ${selectedModel?.label ?? "-"}`,
    `Gavetas: ${drawers ?? "-"}`,
    `Casinha de vela: ${
      candleHouse === null ? "-" : candleHouse ? "Sim" : "Nao"
    }`,
    `Estimativa: ${formatCurrency(estimate)}`,
  ], [quoteType, selectedStone, selectedModel, drawers, candleHouse, estimate]);

  const whatsappUrl = useMemo(() => {
    const text =
      quoteType === "outro"
        ? [
            "Ola! Vim atraves do site.",
            "Quero um orcamento para moveis planejados ou outro projeto.",
            "Pode me ajudar com valores e prazos?",
          ].join("\n")
        : [
            "Ola! Vim atraves do site.",
            "Gostaria de simular um orcamento de tumulo.",
            ...summaryLines,
            "(Estimativa sujeita a confirmacao final.)",
          ].join("\n");

    return `https://api.whatsapp.com/send?phone=558496729317&text=${encodeURIComponent(
      text
    )}`;
  }, [quoteType, summaryLines]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#eef1ff,#fdfcff_45%,#f7f5ff_100%)]">
      <NavBar />

      <main className="container mx-auto px-4 pb-16">
        <HeroSection />

        <section className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl bg-white shadow-sm border border-(--border-color) p-6 sm:p-8">
            <StepHeader
              step={step}
              stepLabel={steps[step].label}
              totalSteps={steps.length}
              progress={progress}
            />

            <StepPills step={step} steps={steps} />

            <StepContent
              step={step}
              quoteType={quoteType}
              whatsappUrl={whatsappUrl}
              stone={stone}
              model={model}
              drawers={drawers}
              candleHouse={candleHouse}
              summaryLines={summaryLines}
              stones={stones}
              models={models}
              drawerOptions={allowedDrawerOptions}
              drawerUnitPrice={drawerUnitPrice}
              candleHousePrice={candleHousePrice}
              formatCurrency={formatCurrency}
              onSelectQuoteType={(nextType) => {
                setQuoteType(nextType);
                if (nextType !== "tumulo") {
                  setStone(null);
                  setModel(null);
                  setDrawers(null);
                  setCandleHouse(null);
                  setStep(0);
                }
              }}
              onSelectStone={setStone}
              onSelectModel={(nextModel) => {
                setModel(nextModel);
                const allowed = getAllowedDrawerOptions(nextModel);
                if (drawers !== null && !allowed.includes(drawers)) {
                  setDrawers(null);
                }
              }}
              onSelectDrawers={setDrawers}
              onSelectCandleHouse={setCandleHouse}
            />

            <StepFooter
              step={step}
              totalSteps={steps.length}
              canAdvance={canAdvance}
              onPrev={() => setStep((prev) => Math.max(prev - 1, 0))}
              onNext={() => setStep((prev) => Math.min(prev + 1, 5))}
              onSend={() => window.open(whatsappUrl, "_blank")}
              onReset={() => {
                setStep(0);
                setQuoteType(null);
                setStone(null);
                setModel(null);
                setDrawers(null);
                setCandleHouse(null);
              }}
            />
          </div>

          <SummaryAside
            summaryLines={summaryLines}
            estimate={estimate}
            formatCurrency={formatCurrency}
            onSend={() => window.open(whatsappUrl, "_blank")}
          />
        </section>
      </main>
    </div>
  );
}
