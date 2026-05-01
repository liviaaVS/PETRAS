import Image from 'next/image';

export default function Benefits() {
  return (
    <section className="py-16 text-center">
      {/* Título */}
      <div className="mb-12">
        <div className="h-[0.005rem] w-[70%] bg-primary mx-auto mb-4" />
        <h2 id="empresa" className="text-2xl font-bold text-[#0D0065]">EMPRESA</h2>
        <p className="text-[#0D0065] mt-2">
          Nossos benefícios para você
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {/* Esquerda */}
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/grafismos/grafismo1.svg"
            alt="grafismo1"
            width={80}
            height={80}
            className="w-auto h-auto"
          />
          <h3 className="font-semibold text-[#0D0065]">
            Cortes Personalizados
          </h3>
          <p className="text-sm text-[#0D0065] max-w-xs">
            Aqui está uma imagem em forma de ícone que representa a montagem de peças de mármore:
          </p>
        </div>

        {/* Centro (destacado) */}
        <div className="relative bg-white shadow-md rounded-lg py-20 px-4 border border-gray-200 flex flex-col items-center gap-4">

          <Image
            src="/grafismos/trabalhadores.svg"
            alt="trabalhadores"
            width={150}
            height={80}
            className="w-auto h-auto"
          />

          <h3 className="font-semibold text-[#0D0065] text-2xl mb-2">
            Montagem e Mão de obra inclusa
          </h3>

          <p className="text-sm text-[#0D0065]">
            Aqui está uma imagem em forma de ícone que representa a montagem de peças de mármore:
          </p>
        </div>

        {/* Direita */}
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/grafismos/grafismo2.svg"
            alt="grafismo2"
            width={80}
            height={80}
            className="w-auto h-auto"
          />
          <h3 className="font-semibold text-[#0D0065] text-2xl">
            Diversidade em pedras
          </h3>
          <p className="text-sm text-[#0D0065] max-w-xs">
            Aqui está uma imagem em forma de ícone que representa a montagem de peças de mármore:
          </p>
        </div>

      </div>
    </section>
  );
}