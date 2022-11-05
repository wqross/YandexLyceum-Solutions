import { useState } from 'react'
import starImg from '../../star.svg'
import styles from '../../components/Book/styles.module.css'

export const Book = (book) => {
    const activeBook = book.book[0].books[0];
    let [count, setCount] = useState(0);
    return <>
    {
        <div className={styles.book__item}>
            <div className={styles.book__left}>
                <p className={styles.book__title}>{activeBook.name}</p>
                <p className={styles.book__author}>{activeBook.author}</p>
                <p className={styles.book__genre}>{book.book[0].genre}</p>
                <div className={styles.book__rating}>
                    <img src={starImg} alt="star" />
                    <img src={starImg} alt="star" />
                    <img src={starImg} alt="star" />
                    <img src={starImg} alt="star" />
                    <img src={starImg} alt="star" />
                </div>
                <p className={styles.book__price}>{activeBook.price} ₽</p>
            </div>
            <div className={styles.book__right}>
                <button className={styles.book__count} onClick={() => setCount(count -= 1)} disabled={count === 0}>-</button>
                <p className={styles.book__amount}>{count}</p>
                <button className={styles.book__count} onClick={() => setCount(count += 1)}>+</button>
            </div>
        </div>
    }
    </>
}