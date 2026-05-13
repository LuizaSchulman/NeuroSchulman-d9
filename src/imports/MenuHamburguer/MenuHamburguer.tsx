import svgPaths from "./svg-48n9tjtb8l";

export default function MenuHamburguer({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white content-stretch flex flex-col gap-[40px] h-[844px] items-center justify-center overflow-clip p-[16px] relative w-[390px]"} data-name="menu-hamburguer">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Nav contents">
        <div className="h-[24px] relative shrink-0 w-[105.098px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105.098 24">
            <g id="Frame 12">
              <path d={svgPaths.p12d4b490} fill="var(--fill-0, #1E0C01)" id="Subtract" />
              <g id="Logo">
                <g id="Luiza Schulman">
                  <path d={svgPaths.p134c0070} fill="var(--fill-0, #1E0C01)" />
                  <path d={svgPaths.p39925f00} fill="var(--fill-0, #1E0C01)" />
                  <path d={svgPaths.pac31b00} fill="var(--fill-0, #1E0C01)" />
                  <path d={svgPaths.p382df600} fill="var(--fill-0, #1E0C01)" />
                  <path d={svgPaths.p3c3f8d00} fill="var(--fill-0, #1E0C01)" />
                  <path d={svgPaths.p2963b680} fill="var(--fill-0, #1E0C01)" />
                  <path d={svgPaths.p2e2c1d80} fill="var(--fill-0, #1E0C01)" />
                  <path d={svgPaths.p23497680} fill="var(--fill-0, #1E0C01)" />
                  <path d={svgPaths.p125e4600} fill="var(--fill-0, #1E0C01)" />
                  <path d={svgPaths.p325eb880} fill="var(--fill-0, #1E0C01)" />
                  <path d={svgPaths.p2137d80} fill="var(--fill-0, #1E0C01)" />
                  <path d={svgPaths.p18f09cf0} fill="var(--fill-0, #1E0C01)" />
                  <path d={svgPaths.p2564b140} fill="var(--fill-0, #1E0C01)" />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="menu">
          <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
              <g id="Vector">
                <path d="M0 0H20V2H0V0Z" fill="var(--fill-0, #1E0C01)" />
                <path d="M0 14H20V16H0V14Z" fill="var(--fill-0, #1E0C01)" />
                <path d="M0 7H20V9H0V7Z" fill="var(--fill-0, #1E0C01)" />
              </g>
            </svg>
          </div>
        </button>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col font-normal gap-[40px] items-start justify-center leading-[normal] min-h-px not-italic relative text-[#1e0c01] text-[18px] text-center tracking-[-0.16px] w-full">
        <p className="opacity-70 relative shrink-0 w-full">Início</p>
        <p className="opacity-70 relative shrink-0 w-full">Para quem é indicado</p>
        <p className="opacity-70 relative shrink-0 w-full">Sobre a avaliação</p>
        <p className="opacity-70 relative shrink-0 w-full">Quem vai te atender</p>
        <p className="opacity-70 relative shrink-0 w-full">Teste gratuito</p>
        <p className="opacity-70 relative shrink-0 w-full">Dúvidas frequentes</p>
      </div>
    </div>
  );
}