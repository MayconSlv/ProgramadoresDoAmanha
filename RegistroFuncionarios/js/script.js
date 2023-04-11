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
