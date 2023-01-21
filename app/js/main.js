var btnMenu = document.getElementById('icone-menu');
var menu = document.getElementById('menu');
btnMenu.addEventListener('click', () => {
  menu.classList.toggle('menu')
  console.log('clicou')
})