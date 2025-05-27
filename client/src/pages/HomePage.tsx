import CryptoDashboard from '../components/molecules/CryptoDashboard';
import { useLoaderData } from 'react-router-dom';
import { getCryptos } from '../services/cryptoService';
import { Crypto } from '../domain/models/models';
import { JSX, useMemo } from 'react';

/**
 * HomePage component displays the list of cryptocurrencies fetched from the server.
 * It filters out any crypto with a price lower than or equal to 0 and passes the result to the dashboard.
 *
 * @returns {JSX.Element} The rendered home page with filtered cryptocurrency data.
 */
export default function HomePage(): JSX.Element {
  const cryptos = useLoaderData() as Crypto[];

  /**
   * Filters cryptocurrencies with price greater than 0.
   * This is memoized to avoid unnecessary recalculations on re-render.
   */
  const filteredCryptos = useMemo(() => {
    return cryptos.filter(crypto => crypto.current_price > 0);
  }, [cryptos]);

  return (
    <>
      <CryptoDashboard cryptos={filteredCryptos} />
    </>
  );
}

/**
 * Loader function for the HomePage route.
 * Fetches cryptocurrency data from the API and simulates network delay.
 *
 * @returns {Promise<Crypto[]>} A promise resolving to the list of cryptocurrencies.
 */
export async function loader(): Promise<Crypto[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const cryptos = await getCryptos();
  return cryptos;
}
