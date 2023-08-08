function consultaEndereco  () {
    let cep = document.querySelector('#cep').value

    if (cep.length !== 8) {
        alert('CEP inválido!')
        return
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url).then(function(response) {
        response.json().then(function(data) {
            console.log(data)
            mostrarEndereco(data)
        })
    })
}

function mostrarEndereco(dados) {
    let resultado = document.querySelector('#res')

    if (dados.erro) {
        resultado.innerHTML = 'Não foi possível localizar o endereço!'
    } else {
        resultado.innerHTML = `<strong><p>Endereço:</strong> ${dados.logradouro}</p>
                               <p><strong>Complemento:</strong> ${dados.complemento}</p>
                               <p><strong>Bairro:</strong> ${dados.bairro}</p>
                               <p><strong>Cidade:</strong> ${dados.localidade} - ${dados.uf}</p>`        
    }

}