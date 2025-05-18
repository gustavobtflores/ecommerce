'use client';

import { Product } from '@/constants/product';
import { VariantSelector } from './VariantSelector';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export function VariantsGroup({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useLocalStorage<string | null>(
    'selectedColor',
    product.colors[0].value
  );
  const [selectedSize, setSelectedSize] = useLocalStorage<string | null>(
    'selectedSize',
    null
  );

  return (
    <>
      <VariantSelector
        label="Cor"
        type="color"
        options={product.colors}
        selectedValue={selectedColor}
        onSelect={setSelectedColor}
      />
      <VariantSelector
        label="Tamanho"
        type="size"
        options={product.sizes}
        selectedValue={selectedSize}
        onSelect={setSelectedSize}
      />
    </>
  );
}
