import { useState } from "react";
import styles from '../Books/styles.module.css'

export const AddToCart = () => {
    let [count, setCount] = useState(0);
    return <>
        <button className={count != 0 ? styles.books__count :styles.books__count_disabled } onClick={() => setCount(count -= 1)} disabled={count === 0}>-</button>
            <p className={styles.books__amount}>{count}</p>
        <button className={styles.books__count} onClick={() => setCount(count += 1)}>+</button>
    </>
}