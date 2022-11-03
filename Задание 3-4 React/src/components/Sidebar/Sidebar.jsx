import styles from './styles.module.css'

export const Sidebar = ({book}) => {
    return <div className={styles.sidebar}>
        {
            book.map(genre => <button className={styles.sidebar__genre} key={genre.id}>{genre.genre}</button>)
        }
    </div>
}