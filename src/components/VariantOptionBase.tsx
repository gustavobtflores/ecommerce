import clsx from 'clsx';

export function VariantOptionBase({
  onSelect,
  children,
  active,
  className = '',
}: {
  onSelect: () => void;
  children: React.ReactNode;
  active: boolean;
  className?: string;
}) {
  return (
    <button
      className={clsx(
        'cursor-pointer flex items-center justify-center gap-2 rounded-full p-1 bg-zinc-100 border border-zinc-200 hover:border-zinc-300 transition duration-200',
        className,
        { 'border-[#50B0F4]': active }
      )}
      style={{
        borderColor: active ? '#50B0F4' : '',
      }}
      role="radio"
      aria-checked={active}
      onClick={onSelect}
    >
      {children}
    </button>
  );
}
