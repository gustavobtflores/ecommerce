'use server';

import { z } from 'zod';

const cepSchema = z
  .string()
  .trim()
  .regex(/^\d{5}-?\d{3}$/, { message: 'Formato de CEP inválido' });

export type CepResponse = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

export async function validateCep(rawCep: string): Promise<CepResponse> {
  const cep = cepSchema.parse(rawCep).replace('-', '');

  const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

  if (!res.ok) {
    throw new Error(`Falha ao buscar CEP: ${res.status} ${res.statusText}`);
  }

  const data = (await res.json()) as CepResponse & { erro?: boolean };

  if (data.erro) {
    throw new Error('CEP não encontrado');
  }

  return {
    cep: data.cep,
    logradouro: data.logradouro,
    complemento: data.complemento ?? '',
    bairro: data.bairro,
    localidade: data.localidade,
    uf: data.uf,
    ibge: data.ibge,
    gia: data.gia,
    ddd: data.ddd,
    siafi: data.siafi,
  };
}
