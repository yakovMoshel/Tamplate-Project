import { Link } from 'react-router-dom';
import { Crypto } from '../../domain/models/models';
import styles from '../../styles/CryptoDashboard.module.css';
import AddToWatchList from '../organisms/AddToWatchList';

export default function CryptoDashboard({ cryptos }: {cryptos: Crypto[]}) {
    return (
        <div className={styles.dashboard}>
            <ul className={styles.list}>
                {cryptos.map((crypto) => (
                    <li key={crypto.id} className={styles.item}>
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

