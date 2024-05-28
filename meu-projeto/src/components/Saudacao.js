function Saudacao({nome}){

    function gerarSaudacao(algumNome){
        return `Olá, ${algumNome}. Tudo bem?`
    }
    return(
        <>
         {nome ?(
            <p>{gerarSaudacao(nome)}</p>
         ):(
            <p>Ainda não temos um nome</p>
         )}
        </>

    )
}

export default Saudacao