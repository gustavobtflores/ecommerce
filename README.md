# Ecommerce Product Page

![Demo](https://imgur.com/KiFUXXk.png)

Aplicação de página de produto para e-commerce, construída com Next.js 15 e Tailwind CSS.

## Tecnologias

- Next.js 15
- Tailwind CSS
- TypeScript

## Funcionalidades Principais

- **Galeria**: imagem principal e miniaturas clicáveis.
- **Título & Preço**: valor formatado em BRL.
- **Variantes Dinâmicas**: tamanho, cor, etc.
- **Validação de CEP**: consulta à API ViaCEP.
- **Persistência**: estado em LocalStorage.
- **Responsivo**: layout mobile-first com CSS Grid.

## Estrutura Básica

```
ecommerce/
├─ public/                   # Assets estáticos (imagens)
├─ src/
│  ├─ app/                   # Páginas e roteamento
│  ├─ components/            # UI components
│  ├─ features/product/      # Lógica do produto
│  ├─ hooks/                 # Hooks reutilizáveis
└─ README.md                 # Documentação
```

## Como Executar

```bash
pnpm install
pnpm dev
```

Acesse `http://localhost:3000/product` para visualizar.
