export const Main = (props) => {
    return <main className='main'>
        <div className='container'>
            <div className="main__inner">{ props.children }</div>
        </div>
    </main>
}