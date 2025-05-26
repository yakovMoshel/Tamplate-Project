import { useLoaderData } from 'react-router-dom';
import { getWatchlist } from '../services/WatchListServices';
import CryptoDashboard from '../components/molecules/CryptoDashboard';
import { Crypto } from '../domain/models/models';
import { useAppDispatch } from '../hooks/redux';
import { setCoins } from '../store/watchlistSlice';
import { useEffect } from 'react';

export default function WatchlistPage() {
      const cryptos = useLoaderData() as Crypto[];
       const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCoins(cryptos));
  }, [cryptos, dispatch]);
      return (
            <>
                  <CryptoDashboard cryptos={cryptos} />
            </>
      )
}

export async function loader() {
      const cryptos = await getWatchlist();
      return cryptos;
}

