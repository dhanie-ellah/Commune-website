const links = document.getElementById('links')
const menu = document.getElementById('menuBtn')

menu.addEventListener('click', () => {
     if (links.style.display == 'none') {
          links.style.display = 'block'
     } else {
          links.style.display = 'none'
     }
})

const form = document.getElementById('form')
form.addEventListener('submit', (event) => {
     event.preventDefault()

     let formValue = document.getElementById('email').value
     let errorMessage = document.getElementById('error')
     if (formValue == '') {
          errorMessage.innerHTML = 'Please enter your email address'
          errorMessage.style.color = 'red'
          errorMessage.style.fontSize = '10px'
     }
})