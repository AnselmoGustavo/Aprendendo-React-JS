import Item from "./Item"

function List(){
    return(
        <div>
            <>
                <h1>Minha Lista</h1>
                <ul>
                    <Item marca="Ferrari" ano={1985}/>
                    <Item marca="Fiat" ano={1964}/>
                    <Item marca="Renault"/>
                    <Item/>
                </ul>
            </>
        </div>
    )
}

export default List