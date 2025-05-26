import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addCoinToWatchlist, removeCoinFromWatchlist } from "../../store/watchlistSlice";
import styles from '../../styles/WatchlistButton.module.css'

type Props = {
  coinId: string;
};

export default function WatchlistButton({ coinId }: Props) {
  const dispatch = useAppDispatch();
  const watchlistCoins = useAppSelector(state => state.watchlist.coins);
  const isLoading = useAppSelector(state => state.watchlist.status === 'loading');
  
  // בדיקה אם המטבע כבר נמצא ברשימת המעקב
  const isInWatchlist = watchlistCoins.find(coin => coin.id === coinId);

  const handleClick = () => {
    if (isInWatchlist) {
      dispatch(removeCoinFromWatchlist(coinId));
    } else {
      dispatch(addCoinToWatchlist(coinId))
    }
  };

  return (
    <button 
      onClick={handleClick}
      disabled={isLoading}
      className={`${styles.watchlistBtn} ${isInWatchlist ? styles.inWatchlist : ''}`}
    >
      {isLoading ? 'Loading...' : isInWatchlist ? '★' : '☆ '}
    </button>
  );
}