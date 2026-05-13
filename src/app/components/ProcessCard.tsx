interface ProcessCardProps {
  index: number;
  title: string;
  description: string;
}

export function ProcessCard({ index, title, description }: ProcessCardProps) {
  return (
    <div className="p-6 border border-[#DEDCDC] rounded-md flex flex-col gap-3">
      <div className="w-8 h-8 bg-[#F8F8F7] rounded-full flex items-center justify-center">
        <span className="text-[#1E0C01] text-lg font-extrabold tracking-tight">
          {index}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[#F8F8F7] text-base font-extrabold tracking-tight">
          {title}
        </h3>
        <p className="text-[#F8F8F7] text-base font-medium leading-[1.6] tracking-tight">
          {description}
        </p>
      </div>
    </div>
  );
}
