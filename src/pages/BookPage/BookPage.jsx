import { Annotation } from "../../components/Annotation/Annotation"
import { Book } from "../../components/Book/Book"
import { Reviews } from "../../components/Reviews/Reviews"
import { BookList } from "../../constants/mock"
import styles from "./styles.module.css"

export const BookPage = () => {
    return <div className={styles.bookPage}>
        <div className="container">
            <section className={styles.book__info}>
                <div className={styles.book__item}>
                    <Book book={BookList}/>
                </div>
                <div className={styles.book__item}>
                    <Annotation book={BookList}/>
                </div>
            </section>
            <Reviews book={BookList}/>
        </div>
    </div>
}