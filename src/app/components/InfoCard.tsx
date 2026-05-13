interface InfoCardProps {
  title: string;
  description: string;
  variant?: 'default' | 'highlight';
  hasOutline?: boolean;
}

export function InfoCard({ title, description, variant = 'default', hasOutline = false }: InfoCardProps) {
  const isHighlight = variant === 'highlight';

  return (
    <div
      className={`
        p-6 rounded-md flex flex-col gap-4
        ${hasOutline || isHighlight ? 'border border-[#39261B]' : ''}
        ${isHighlight ? 'shadow-[1px_3px_0_#39261B]' : ''}
      `}
    >
      <h3 className="text-[#1E0C01] text-base font-bold tracking-tight leading-[1.15]">
        {title}
      </h3>
      <p className="text-[#1E0C01] text-base font-normal leading-[1.6] tracking-tight">
        {description}
      </p>
    </div>
  );
}
