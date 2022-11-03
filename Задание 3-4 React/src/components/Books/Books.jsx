import styles from './styles.module.css'
import starImg from '../../star.svg'

export const Books = ({book}) => {
    const activeBook = book[0];
    return <div className={styles.books}>
        {
            activeBook.books.map(book => <div key={book.id} className={styles.books__item}>
                <div className={styles.books__left}>
                    <p className={styles.books__title}>{book.name}</p>
                    <p className={styles.books__author}>{book.author}</p>
                    <p className={styles.books__genre}>{activeBook.genre}</p>
                    <div className={styles.books__rating}>
                        <img src={starImg} alt="star" />
                        <img src={starImg} alt="star" />
                        <img src={starImg} alt="star" />
                        <img src={starImg} alt="star" />
                        <img src={starImg} alt="star" />
                    </div>
                    <p className={styles.books__price}>{book.price} ₽</p>
                </div>
                <div className={styles.books__right}>

                </div>
            </div>)
        }
    </div>
}