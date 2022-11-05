import styles from './styles.module.css'

export const Annotation = ({book}) => {
    const bookAnnotation = book[0].books[0].annotation
    return <>
        <h2 className={styles.book__annotation_title}>Аннотация</h2>
        <p className={styles.book__anotation}>{bookAnnotation}</p>
    </>
}