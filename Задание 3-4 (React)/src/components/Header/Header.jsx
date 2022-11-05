import styles from './styles.module.css'
import cartIcon from '../../cart-icon.svg'

export const Header = () => {
    return <header className={styles.header}>
        <div className="container">
            <div className={styles.header__inner}>
                <a href="#" className={styles.header__link}>Магазин</a>
                <a href="#" className="header__cart"><img src={cartIcon} alt="Иконка карточки"/></a>
            </div>
        </div>
    </header>
}