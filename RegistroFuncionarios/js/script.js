// função aparecer e sumir o modal

const openModal = document.querySelector('#openModal')
const registerButton = document.querySelector('#register')
const modal = document.querySelector('#modal')
const fade = document.querySelector('#fade')

const toggleModal = () => {
  modal.classList.toggle('hide')
  fade.classList.toggle('hide')
}

;[openModal, fade].forEach((el) => {
  el.addEventListener('click', () => toggleModal())
})

//funçao armazenar os valores dos inputs

var funcionarios = []

function criarFuncionario(funcionario) {
  const tbody = document.querySelector('#tbody')
  const tr = document.createElement('tr')

  tbody.appendChild(tr)

  for (let i in funcionario) {
    tr.innerHTML = `
      <td>${funcionario[i].nome}</td>
      <td>${funcionario[i].cargo}</td>
      <td>${funcionario[i].salario}</td>
      <td>${funcionario[i].telefone}</td>
    `
  }
}

function nameValidation(event) {
  const input = event.currentTarget
  const nameTest = regex.test(input.value)

  if (!nameTest) {
    registerButton.setAttribute('disabled', 'disabled')
  } else {
    registerButton.removeAttribute('disabled')
  }
}

registerButton.addEventListener('click', (event) => {
  event.preventDefault()

  const fullName = document.querySelector('#name')
  const role = document.querySelector('#role')
  const salario = document.querySelector('#salario')
  const tel = document.querySelector('#tel')

  const nameRegex = /^[a-zA-ZáâãéêíóôõúçÁÂÉÊÍÓÔÕÚÇ ,.'-]+$/u
  const telRegex =
    /^(1[1-9]|[4689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/

  if (fullName.value === '' || !nameRegex.test(fullName.value)) {
    alert('Preencha o nome')
    return
  } else if (role.value === '' || !nameRegex.test(role.value)) {
    alert('Nome invalido')
  } else if (tel.value === '' || !telRegex.test(tel.value)) {
    alert('Numero invalido')
    return
  } else {
    const funcionario = {
      nome: fullName.value,
      cargo: role.value,
      salario: salario.value,
      telefone: tel.value,
    }

    funcionarios.push(funcionario)
    criarFuncionario(funcionarios)

    fullName.value = ''
    role.value = ''
    salario.value = ''
    tel.value = ''

    modal.classList.add('hide')
    fade.classList.add('hide')
  }
})
