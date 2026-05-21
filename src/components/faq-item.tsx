"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#39261B] py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="faq-trigger w-full flex items-center justify-between gap-2 text-left"
        data-faq={question}
      >
        <h3 className="flex-1 text-[#1E0C01] text-base font-medium leading-[1.6] tracking-tight">
          {question}
        </h3>
        <ChevronDown
          size={24}
          className={`text-[#39261B] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''
            }`}
        />
      </button>
      {isOpen && (
        <p className="mt-3 text-[#1E0C01] text-base font-normal leading-[1.6] tracking-tight">
          {answer}
        </p>
      )}
    </div>
  );
}
