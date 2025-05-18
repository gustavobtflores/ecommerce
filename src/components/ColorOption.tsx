import { VariantOptionBase } from './VariantOptionBase';

export function ColorOption({
  color,
  onSelect,
  active,
}: {
  color: { value: string; label: string; hex: string[] };
  onSelect: (value: string) => void;
  active: boolean;
}) {
  return (
    <VariantOptionBase
      className="pr-3"
      active={active}
      onSelect={() => onSelect(color.value)}
    >
      <div
        className="w-6 h-6 rounded-full"
        style={{
          background: `linear-gradient(135deg, ${color.hex.join(',')})`,
        }}
      />
      <span
        className="text-zinc-600 transition duration-200"
        style={{ color: active ? '#50B0F4' : '' }}
      >
        {color.label}
      </span>
    </VariantOptionBase>
  );
}
