import { Layout } from "./components/Layout/Layout"
import { BookPage } from "./pages/BookPage/BookPage"
import { HomePage } from "./pages/HomePage/HomePage"
import { BookList } from './constants/mock'

export const App = () => {
    return <Layout>
        <HomePage book={BookList}/>
    </Layout>
}