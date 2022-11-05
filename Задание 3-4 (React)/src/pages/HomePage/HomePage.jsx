import { useState } from 'react'
import { Books } from '../../components/Books/Books'
import styles from './styles.module.css'

export const HomePage = ({book}) => {
    const [activeGenre, setActiveGenre] = useState(book[0]);
    return <>
        <div className="container">
            <div className={styles.homePage}>
                <div className={styles.sidebar}>
                    {   
                        book.map(activeBook => <p className={activeGenre === activeBook ? styles.sidebar__genre_active : styles.sidebar__genre}
                        key={activeBook.id} onClick={() => setActiveGenre(activeBook)}>
                        {activeBook.genre}
                        </p>)
                    }
                </div>
                <Books book={activeGenre}/>
            </div>
        </div>
    </>
}
