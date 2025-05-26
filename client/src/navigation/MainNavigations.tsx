import { NavLink } from 'react-router-dom'
import styles from '../styles/MainNavigation.module.css'


export default function MainNavigations() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                        }
                    >HOME </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/watchlist"
                        className={({ isActive }) =>
                            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                        }
                    > Watchlist </NavLink>
                </li>
            </ul>
        </nav>
    )
}