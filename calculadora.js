const calculatorApp = document.querySelector('#calculatorApp');
const navApp = document.querySelector('#navApp');
const title = document.querySelector('#title');
const arrowToggle = document.querySelector('.arrow-toggle');
const iconMoon = document.querySelector('.icon-moon');
const iconSun = document.querySelector('.icon-sun');

const iconsWindow = document.querySelectorAll('.icons-window');
const display = document.querySelector('#display');
const inputDisplay = document.querySelector('#inputDisplay');
const divBtnInput = document.querySelector('.btn-inputs');
const btnInputs = document.querySelectorAll('.btn');

function darkMode() {

  calculatorApp.style.backgroundColor='#383838';
  navApp.style.backgroundColor='#2F2F2F';
  title.style.color='#FFFFFF';
  arrowToggle.setAttribute('src', './assets/arrow-symbolic-dark.svg');
  iconMoon.classList.add('inactive');
  iconSun.classList.remove('inactive');

  iconsWindow.forEach( element => element.classList.toggle('inactive'));

  display.style.backgroundColor='#3E3E3E';
  display.style.color='#FFF';
  display.style.borderBottom="1px solid #383838";

  inputDisplay.style.backgroundColor='#404040';
  inputDisplay.style.color='#FFF';
  inputDisplay.style.borderBottom="1px solid #383838";

  for (let i = 0; i < btnInputs.length; i++) {

    if(i == 22) {

      btnInputs[22].style.backgroundColor = "#6DB442";
      btnInputs[22].style.border="1px solid #383838";
    }
    
    else {

    btnInputs[i].style.backgroundColor = "#454545";
    btnInputs[i].style.color="#FFFFFF";
    btnInputs[i].style.border="1px solid #383838";
    }
  }
}

function lightMode() {

  calculatorApp.style.backgroundColor='#F0F0F0';
  navApp.style.backgroundColor='#D9D9D9';
  title.style.color='#6E7375';
  arrowToggle.setAttribute('src', './assets/arrow-symbolic-light.svg');
  iconSun.classList.add('inactive');
  iconMoon.classList.remove('inactive');
  iconsWindow.forEach( element => element.classList.toggle('inactive'));

  display.style.backgroundColor='#F8F8F8';
  display.style.color='#6E7375';
  display.style.borderBottom="1px solid #C0C0C0";

  inputDisplay.style.backgroundColor='#FFF';
  inputDisplay.style.color='#000';
  inputDisplay.style.borderBottom="1px solid #C0C0C0";

  for (let i = 0; i < btnInputs.length; i++) {

    if(i == 22) {

      btnInputs[22].style.backgroundColor = "#6DB442";
      btnInputs[22].style.border="1px solid #C0C0C0";
    }
    
    else {

    btnInputs[i].style.backgroundColor = "#FFFFFF";
    btnInputs[i].style.color="#404040";
    btnInputs[i].style.border="1px solid #C0C0C0";
    }
  }
}

iconMoon.addEventListener('click', darkMode);
iconSun.addEventListener('click', lightMode);
