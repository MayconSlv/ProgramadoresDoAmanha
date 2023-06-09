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

const tbody = document.querySelector('#tbody')

window.onload = () => {
  const storageFuncionarios = localStorage.getItem('funcionarios')

  if (localStorage.funcionarios) {
    funcionarios = JSON.parse(storageFuncionarios)
  }

  for (let i in funcionarios) {
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td>${funcionarios[i].nome}</td>
      <td>${funcionarios[i].cargo}</td>
      <td>${funcionarios[i].salario}</td>
      <td>${funcionarios[i].telefone}</td>
    `
    tbody.appendChild(tr)
  }
}

function criarFuncionario(funcionario) {
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

registerButton.addEventListener('click', (event) => {
  event.preventDefault()

  const fullName = document.querySelector('#name')
  const role = document.querySelector('#role')
  const salario = document.querySelector('#salario')
  const tel = document.querySelector('#tel')

  const nameRegex = /^[a-zA-ZáâãéêíóôõúçÁÂÉÊÍÓÔÕÚÇ ,.'-]+$/u
  const telRegex =
    /^(1[1-9]|[4689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/

  const verifyMessage = document.querySelectorAll('.verify')

  function setError(index, text) {
    verifyMessage[index].classList.add('error')
    verifyMessage[index].textContent = text
  }

  function removeError(index, text) {
    verifyMessage[index].classList.remove('error')
    verifyMessage[index].textContent = text
  }

  if (fullName.value === '' || !nameRegex.test(fullName.value)) {
    setError(0, 'Evite utilizar caracteres especiais !@#$&')
    return
  } else if (role.value === '' || !nameRegex.test(role.value)) {
    setError(1, 'Evite utilizar caracteres especiais !@#$&')
  } else if (salario.value === '') {
    setError(2, 'Não deixe o campo vazio')
  } else if (tel.value === '' || !telRegex.test(tel.value)) {
    setError(3, 'Número inválido, verifique se está correto')
    return
  } else {
    removeError(0, 'Escreva seu nome')
    removeError(1, 'Escreva o cargo')
    removeError(2, 'Escreva o salário')
    removeError(3, 'Escreva o telefone')

    const formatedSalary = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(salario.value)

    const formatedTel = (tel) => {
      tel = `(${tel.substr(0, 2)}) ${tel.substr(2, 5)}-${tel.substr(7, 11)}`
      return tel
    }

    const funcionario = {
      nome: fullName.value,
      cargo: role.value,
      salario: formatedSalary,
      telefone: formatedTel(tel.value),
    }

    funcionarios.push(funcionario)
    criarFuncionario(funcionarios)

    localStorage.setItem('funcionarios', JSON.stringify(funcionarios))

    fullName.value = ''
    role.value = ''
    salario.value = ''
    tel.value = ''

    modal.classList.add('hide')
    fade.classList.add('hide')
  }
})
