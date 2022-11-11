function darkmode() {

  document.getElementById(calculatorApp);
  calculatorApp.style.backgroundColor='#383838';

  document.getElementById(navApp);
  navApp.style.backgroundColor='#2F2F2F';

  document.getElementById(title);
  title.style.color='#FFFFFF';

  document.getElementById(display);
  display.style.backgroundColor='#3E3E3E';
  display.style.color='#FFF';
  display.style.borderBottom="1px solid #383838";

  document.getElementById(inputDisplay);
  inputDisplay.style.backgroundColor='#404040';
  inputDisplay.style.color='#FFF';
  inputDisplay.style.borderBottom="1px solid #383838";


  const iconsLight = document.getElementsByClassName('icon-light');

  for (let i = 0; i < iconsLight.length; i++) {
    
    iconsLight[i].style.display = "none";
    
  }

  const iconsDark = document.getElementsByClassName('icon-dark');
  
  for (let i = 0; i < iconsDark.length; i++) {

    iconsDark[i].style.display = "block";

  }

  const btns = document.getElementsByClassName('btn');

  for (let i = 0; i < btns.length; i++) {

    if(i == 22) {

      btns[22].style.backgroundColor = "#6DB442";
      btns[22].style.border="1px solid #383838";
    }
    
    else {

    btns[i].style.backgroundColor = "#454545";
    btns[i].style.color="#FFFFFF";
    btns[i].style.border="1px solid #383838";

    }
    
  }

}

function lightmode() {

  document.getElementById(calculatorApp);
  calculatorApp.style.backgroundColor='#F0F0F0';

  document.getElementById(navApp);
  navApp.style.backgroundColor='#D9D9D9';

  document.getElementById(title);
  title.style.color='#6E7375';

  document.getElementById(display);
  display.style.backgroundColor='#F8F8F8';
  display.style.color='#6E7375';
  display.style.borderBottom="1px solid #C0C0C0";


  document.getElementById(inputDisplay);
  inputDisplay.style.backgroundColor='#FFFFFF';
  inputDisplay.style.color='#000';
  inputDisplay.style.borderBottom="1px solid #C0C0C0";

  
  const iconsDark = document.getElementsByClassName('icon-dark');
  
  for (let i = 0; i < iconsDark.length; i++) {
    
    iconsDark[i].style.display = "none";
    
  }
  
  const iconsLight = document.getElementsByClassName('icon-light');

  for (let i = 0; i < iconsLight.length; i++) {
    
    iconsLight[i].style.display = "block";
  
  }

  const btns = document.getElementsByClassName('btn');

  for (let i = 0; i < btns.length; i++) {

    if(i == 22) {

      btns[22].style.backgroundColor = "#6DB442";
      btns[i].style.border="1px solid #C0C0C0";        
    }
    
    else{
    btns[i].style.backgroundColor = "#FFFFFF";
    btns[i].style.color="#404040";
    btns[i].style.border="1px solid #C0C0C0";  
    }
  }
}

const btnsInput = document.querySelectorAll('.btn');


