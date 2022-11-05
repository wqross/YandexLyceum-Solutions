import styles from './styles.module.css'
import starImg from '../../star.svg'

export const Reviews = (book) => {
    const bookReviews = book.book[0].books[0].reviews;
    return <>
        {
            bookReviews.map(review => 
                <div className={styles.reviews__item}>
                    <div className={styles.review__flex}>
                        <p className={styles.review__username}>{review.user}</p>
                        <div className={styles.review__rating}>
                            <img src={starImg} style={{height: 13.5, width: 14}} alt="звезда" />
                            <img src={starImg} style={{height: 13.5, width: 14}} alt="звезда" />
                            <img src={starImg} style={{height: 13.5, width: 14}} alt="звезда" />
                            <img src={starImg} style={{height: 13.5, width: 14}} alt="звезда" />
                            <img src={starImg} style={{height: 13.5, width: 14}} alt="звезда" />
                        </div>
                    </div>
                    <p className={styles.review__text}>{review.text}</p>
                </div>)
        }
    </>
}