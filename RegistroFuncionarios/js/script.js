// função aparecer e sumir o modal

const openModal = document.querySelector('#openModal')
const registerButton = document.querySelector('#register')
const modal = document.querySelector('#modal')
const fade = document.querySelector('#fade')

const toggleModal = () => {
  modal.classList.toggle('hide')
  fade.classList.toggle('hide')
}

;[openModal, registerButton, fade].forEach((el) => {
  el.addEventListener('click', () => toggleModal())
})

//funçao armazenar os valores dos inputs

let funcionarios = []

function criarFuncionario(funcionario) {
  const tbody = document.querySelector('#tbody')
  const tr = document.createElement('tr')

  tbody.appendChild(tr)

  for (let i in funcionario) {
    return (tr.innerHTML = `
      <td>${funcionario[i].nome}</td>
      <td>${funcionario[i].cargo}</td>
      <td>${funcionario[i].salario}</td>
      <td>${funcionario[i].telefone}</td>
    `)
  }
}

function registrarFuncionario() {
  const name = document.querySelector('#name')
  const role = document.querySelector('#role')
  const salario = document.querySelector('#salario')
  const tel = document.querySelector('#tel')

  const funcionario = {
    nome: name.value,
    cargo: role.value,
    salario: salario.value,
    telefone: tel.value,
  }

  funcionarios.push(funcionario)
  criarFuncionario(funcionarios)
}
