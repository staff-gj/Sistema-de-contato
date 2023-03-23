function salvar() {
    var nome = document.getElementById('nome').value
    var numero = document.getElementById('numero').value
    var nome2 = document.getElementById('nome2')
    var numero2 = document.getElementById('numero2')
    var id = document.getElementById('id').value

    nome2.innerHTML = 'Nome: '+ nome
    numero2.innerHTML = 'Número: '+ numero

    var resultado = document.getElementById('resultado')
    var novoResultado = document.createElement('div')
    novoResultado.className = 'add'
    novoResultado.innerHTML ='Id: '+ id + ', Nome: '+ nome + ', Número: '+ numero

    // Cria o botão de apagar
    var botaoApagar = document.createElement('button')
    botaoApagar.innerHTML = 'Apagar'

    // Adiciona o evento de clique para removê-lo
    botaoApagar.addEventListener('click', function() {
        resultado.removeChild(novoResultado)
        nome2.innerHTML = 'Nome: '
        numero2.innerHTML = 'Número: '
    })

    // Adiciona o botão de apagar na div criada
    novoResultado.appendChild(botaoApagar)

    resultado.appendChild(novoResultado)
}
