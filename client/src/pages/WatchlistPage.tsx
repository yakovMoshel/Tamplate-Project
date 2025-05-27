import { useLoaderData } from 'react-router-dom';
import { getWatchlist } from '../services/WatchListServices';
import CryptoDashboard from '../components/molecules/CryptoDashboard';
import { Crypto } from '../domain/models/models';
import { useAppDispatch } from '../hooks/redux';
import { setCoins } from '../store/watchlistSlice';
import { JSX, useEffect, useMemo } from 'react';

/**
 * WatchlistPage displays the user's saved cryptocurrencies.
 * 
 * - Loads the data from the route loader (server/localStorage/db).
 * - Filters out cryptos with invalid prices.
 * - Saves the data to the Redux store (for global state management).
 * 
 * @returns {JSX.Element} Rendered dashboard with filtered cryptos.
 */
export default function WatchlistPage(): JSX.Element {
  const cryptos = useLoaderData() as Crypto[];
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCoins(cryptos));
  }, [cryptos, dispatch]);

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
 * Loader function to fetch the user's watchlist.
 * 
 * Simulates a delay and retrieves the list of cryptocurrencies
 * the user has saved to their watchlist.
 * 
 * @returns {Promise<Crypto[]>} A promise that resolves with the list of cryptos.
 */
export async function loader(): Promise<Crypto[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const cryptos = await getWatchlist();
  return cryptos;
}
