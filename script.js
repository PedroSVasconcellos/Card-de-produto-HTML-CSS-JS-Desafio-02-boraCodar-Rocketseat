const btn = document.querySelector('#icon-360')
const body = document.querySelector('body')

btn.addEventListener('click', btnSwitch)

function btnSwitch() {
  body.classList.toggle('switch')
}