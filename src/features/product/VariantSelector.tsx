'use client';

import { ColorOption } from '@/components/ColorOption';
import { SizeOption } from '@/components/SizeOption';

type VariantSelectorProps = {
  label: string;
  selectedValue: string | null;
  onSelect: (value: string) => void;
} & (
  | {
      type: 'color';
      options: { value: string; label: string; hex: string[] }[];
    }
  | { type: 'size'; options: string[] }
);

export function VariantSelector({
  label,
  type,
  options,
  selectedValue,
  onSelect,
}: VariantSelectorProps) {
  return (
    <div>
      <span className="text-zinc-600 inline-block mb-2">{label}</span>
      <div className="flex items-center flex-wrap gap-2">
        {type === 'color' &&
          options.map((color) => (
            <ColorOption
              key={color.value}
              color={color}
              onSelect={onSelect}
              active={selectedValue === color.value}
            />
          ))}
        {type === 'size' &&
          options.map((size) => (
            <SizeOption
              key={size}
              size={size}
              onSelect={onSelect}
              active={selectedValue === size}
            />
          ))}
      </div>
    </div>
  );
}
