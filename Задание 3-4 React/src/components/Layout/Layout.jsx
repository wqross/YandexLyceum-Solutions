import { Header } from "../Header/Header"
import { Main } from "../Main/Main"

export const Layout = (props) => {
    return <>
        <Header/>
        <Main>
            <>{ props.children }</>
        </Main>
    </>
}