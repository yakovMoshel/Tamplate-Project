import { Link } from 'react-router-dom';
import { Crypto } from '../../domain/models/models';
import styles from '../../styles/CryptoDashboard.module.css';
import AddToWatchList from '../organisms/AddToWatchList';
import { JSX } from 'react';

/**
 * CryptoDashboard component
 *
 * Renders a list of cryptocurrency items with their image, name, symbol, and current price.
 * Each item links to a detailed coin page and includes a button to add the coin to the user's watchlist.
 * Includes entry animations with incremental delays for each item.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Crypto[]} props.cryptos - An array of crypto objects to display in the dashboard
 * 
 * @returns {JSX.Element} A styled dashboard of cryptocurrencies
 */
export default function CryptoDashboard({ cryptos }: { cryptos: Crypto[] }): JSX.Element {
  return (
    <div className={styles.dashboard}>
      <ul className={styles.list}>
        {cryptos.map((crypto, index) => (
          <li
            key={crypto.id}
            className={styles.item}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Link to={`/coin/${crypto.id}`} className={styles.link}>
              <img src={crypto.image} alt={crypto.name} className={styles.image} />
              <span>{crypto.name} ({crypto.symbol.toUpperCase()})</span>
              <span>- ${crypto.current_price.toLocaleString()}</span>
            </Link>
            <AddToWatchList coinId={crypto.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
