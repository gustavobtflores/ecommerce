import { VariantOptionBase } from './VariantOptionBase';

export function SizeOption({
  size,
  onSelect,
  active,
}: {
  size: string;
  onSelect: (value: string) => void;
  active: boolean;
}) {
  return (
    <VariantOptionBase
      className="rounded-lg w-20"
      active={active}
      onSelect={() => onSelect(size)}
    >
      <span
        className="text-zinc-600"
        style={{ color: active ? '#50B0F4' : '' }}
      >
        {size}
      </span>
    </VariantOptionBase>
  );
}
