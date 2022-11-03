import { Sidebar } from '../../components/Sidebar/Sidebar'
import { BookList } from '../../constants/mock'
import { Books } from '../../components/Books/Books'

export const HomePage = () => {
    return <>
        <Sidebar book={BookList}/>
        <Books book={BookList}/>
    </>
}