'use client';

import { CepResponse, validateCep } from '@/app/actions/validateCep';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { InputMask } from '@react-input/mask';
import { useState } from 'react';

export function CepChecker() {
  const [address, setAddress] = useLocalStorage<CepResponse | null>(
    'cep',
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSearchCep(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setAddress(null);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      const cep = formData.get('cep') as string;

      const result = await validateCep(cep);

      setAddress(result);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'Ocorreu um erro ao buscar o CEP'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form className="flex flex-col gap-2" onSubmit={handleSearchCep}>
        <span className="text-zinc-600">Frete e entrega</span>
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <InputMask
              type="text"
              className="bg-white border border-zinc-200 rounded-lg p-2 flex-1"
              placeholder="00000-000"
              mask="_____-___"
              replacement={{ _: /\d/ }}
              id="cep"
              name="cep"
              defaultValue={address?.cep}
            />
            <button
              type="submit"
              className="cursor-pointer bg-black text-white w-24 rounded-lg py-2 font-bold"
              disabled={loading}
            >
              Buscar
            </button>
          </div>
          {error && (
            <span className="text-red-500 text-sm block px-2">{error}</span>
          )}
        </div>
      </form>
      <div className="py-4 px-2 min-h-32">
        {address && (
          <address>
            {address.logradouro} - {address.bairro}
            <br />
            {address.localidade} - {address.uf}, {address.cep}
          </address>
        )}
      </div>
    </div>
  );
}
