export const product = {
  name: 'Tênis Nike Giannis Immortality 4 Masculino',
  description:
    'O Giannis Immortality 4 foi criado para o jogador multifacetado. O formato elegante e de suporte do calcanhar é combinado com um padrão de tração aprimorado da versão anterior para ajudar você a fazer todas aquelas jogadas decisivas.',
  price: 759.99,
  currency: 'BRL',
  images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
  colors: [
    { value: 'gg', label: 'Verde e cinza', hex: ['#19A07B', '#858489'] },
    { value: 'rb', label: 'Vermelho e preto', hex: ['#D91518', '#06040F'] },
    { value: 'pg', label: 'Rosa e cinza', hex: ['#D10DE3', '#858489'] },
  ],
  sizes: ['38', '39', '40', '41', '42', '43', '44'],
};

export type Product = typeof product;
