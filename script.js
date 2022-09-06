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
     let Message = document.getElementById('error')
     if (formValue == '') {
          Message.innerHTML = 'Please enter your email address'
          Message.style.color = 'red'
          Message.style.fontSize = '10px'
     } else if (formValue != '') {
          Message.innerHTML = 'You have been added to the waitlist'
          Message.style.color = 'green'
          Message.style.fontSize = '10px'
     }
})