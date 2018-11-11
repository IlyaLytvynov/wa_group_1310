import './lesson_9.scss';
const buttons = document.querySelectorAll('.btn');

function btnToggler(btn, color) {
  let isActive = false;

  function toggleClass() {
    if(isActive === false) {
      btn.style.backgroundColor = color;
      isActive = true;
    } else {
      btn.style.backgroundColor = 'transparent';
      isActive = false;
    }
  }

  btn.onclick = toggleClass;
}

function generateColor() {
  const getRandValue = () => Math.round(Math.random() * (0 - 255) + 255);

  return `rgb(${getRandValue()}, ${getRandValue()}, ${getRandValue()})`;
}

for(let i = 0; i < buttons.length; i++) {
  console.log(buttons[i]);
  btnToggler(buttons[i], generateColor());
}

btnToggler(document.querySelector('.test'), generateColor());