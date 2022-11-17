const calculatorApps = document.querySelector('#calculatorApps');
const navApp = document.querySelector('#navApp');
const title = document.querySelector('#title');
const arrowToggle = document.querySelector('.arrow-toggle');
const menuToggleApp = document.querySelector('.menuToggleApp');
const apps = document.querySelectorAll('input[name="apps"]');

const iconMoon = document.querySelector('.icon-moon');
const iconSun = document.querySelector('.icon-sun');
const iconsWindow = document.querySelectorAll('.icons-window');
const divCaclEstadistics = document.querySelector('.cacl-estadistics');
const containerMsjEstadistics = document.querySelector('.containerMsjEstadistics');
const msjCalcEstadistics = document.querySelector('#msjCalcEstadistics');

const display = document.querySelector('#display');
const inputDisplay = document.querySelector('#inputDisplay');
const divBtnInput = document.querySelector('.btn-inputs');
const btnInputs = document.querySelectorAll('.btn');

function darkMode() {

  calculatorApps.style.backgroundColor='#383838';
  calculatorApps.style.border='1px solid #252525';
  navApp.style.backgroundColor='#2F2F2F';
  title.style.color='#FFFFFF';
  arrowToggle.setAttribute('src', './assets/arrow-symbolic-dark.svg');
  iconMoon.classList.add('inactive');
  iconSun.classList.remove('inactive');

  iconsWindow.forEach( element => element.classList.toggle('inactive'));

  menuToggleApp.style.backgroundColor='#2F2F2F';
  menuToggleApp.style.color='#FFFFFF';
  menuToggleApp.style.border='1px solid #252525';
  menuToggleApp.style.borderTop='none';

  display.style.backgroundColor='#3E3E3E';
  display.style.color='#FFF';
  display.style.borderBottom='1px solid #383838';

  inputDisplay.style.backgroundColor='#404040';
  inputDisplay.style.color='#FFF';
  inputDisplay.style.borderBottom='1px solid #383838';

  for (let i = 0; i < btnInputs.length; i++) {

    if(i == 5) {

      btnInputs[5].style.backgroundColor = '#DC2D2D';
      btnInputs[5].style.border='1px solid #252525';
    }

    else if (i == 22) {

      btnInputs[22].style.backgroundColor = '#6DB442';
      btnInputs[22].style.border='1px solid #252525';
    }
    
    else {

    btnInputs[i].style.backgroundColor = '#454545';
    btnInputs[i].style.color='#FFFFFF';
    btnInputs[i].style.border='1px solid #252525';
    }
  }

  divCaclEstadistics.style.backgroundColor = '#3E3E3E';
  msjCalcEstadistics.style.color = '#FFFFFF';

  

}

function lightMode() {

  calculatorApps.style.backgroundColor='#F0F0F0';
  calculatorApps.style.border='1px solid #C0C0C0';
  navApp.style.backgroundColor='#D9D9D9';
  title.style.color='#6E7375';
  arrowToggle.setAttribute('src', './assets/arrow-symbolic-light.svg');
  iconSun.classList.add('inactive');
  iconMoon.classList.remove('inactive');
  iconsWindow.forEach( element => element.classList.toggle('inactive'));

  menuToggleApp.style.backgroundColor='#D9D9D9';
  menuToggleApp.style.color='#6E7375';
  menuToggleApp.style.border='1px solid #C0C0C0';
  menuToggleApp.style.borderTop='none';

  display.style.backgroundColor='#F8F8F8';
  display.style.color='#6E7375';
  display.style.borderBottom='1px solid #C0C0C0';

  inputDisplay.style.backgroundColor='#FFF';
  inputDisplay.style.color='#000';
  inputDisplay.style.borderBottom='1px solid #C0C0C0';

  for (let i = 0; i < btnInputs.length; i++) {

    if(i == 5) {

      btnInputs[5].style.backgroundColor = '#DC2D2D';
      btnInputs[5].style.border='1px solid #C0C0C0';
    }

    else if(i == 22) {

      btnInputs[22].style.backgroundColor = '#6DB442';
      btnInputs[22].style.border='1px solid #C0C0C0';
    }
    
    else {

    btnInputs[i].style.backgroundColor = '#FFFFFF';
    btnInputs[i].style.color='#404040';
    btnInputs[i].style.border='1px solid #C0C0C0';
    }
  }
  divCaclEstadistics.style.backgroundColor = '#F8F8F8';
  msjCalcEstadistics.style.color = '#6E7375';


}

function toggleApps () {
  
  arrowToggle.classList.toggle('rotate');
  menuToggleApp.classList.toggle('inactive');
}

function changeApps() {

  if(this.checked) {

    if(this.value==1) {
      
      title.innerText="Calculadora";
      menuToggleApp.classList.add('inactive');
      arrowToggle.classList.remove('rotate');
      
      divCaclEstadistics.classList.add('inactive');
      containerMsjEstadistics.classList.add('inactive');
      divBtnInput.classList.remove('inactive');     
    }

    else if(this.value==2) {
      
      title.innerText="Estadistica Bàsica";
      menuToggleApp.classList.add('inactive');
      arrowToggle.classList.remove('rotate');
      
      divBtnInput.classList.add('inactive');
      divCaclEstadistics.classList.remove('inactive');
      containerMsjEstadistics.classList.remove('inactive');

      
    }
  }

}

for ( let radioButton of apps ) {  // Change App 

  radioButton.addEventListener('change', changeApps);
}

arrowToggle.addEventListener('click', toggleApps);
iconMoon.addEventListener('click', darkMode);
iconSun.addEventListener('click', lightMode);
