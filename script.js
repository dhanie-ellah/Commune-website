const links = document.getElementById('links')
const menu = document.getElementById('menuBtn')

menu.addEventListener('click', () => {
     if (links.style.display == 'none') {
          links.style.display = 'block'
     } else {
          links.style.display = 'none'
     }
})