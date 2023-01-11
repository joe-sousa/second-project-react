function Saudacao({ nome }) {
    function gerarSaudacao(nomePessoa) {
        return `Olá! ${nomePessoa} tudo bem?`
    }

    return (
        <>
            {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
    )
}

export default Saudacao