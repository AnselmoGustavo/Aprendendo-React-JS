import Frase from "./Frase"

function SayMyName(props){
    return(
        <div>
            <Frase/>
            <p>Fala ai {props.nome}, suave?</p>
        </div>
    )
}

export default SayMyName