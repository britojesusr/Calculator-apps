for ( let btn of btnInputs ) {

  btn.addEventListener('click', writerNumber);
}


  function writerNumber() {

    if (this.click) {

      switch (this.value) {

        case "←":  //Borrar ultimo caracter        
          const inputValue = inputDisplay.value; 
          const long = inputValue.length-1;
          const newInputValue = inputValue.slice(0, long);
          inputDisplay.value = newInputValue;
          break;

        case "C": //Borrar inputdisplay
          inputDisplay.value ="";
          display.value ="0";

          break;
          
        case "=": //

        const operacion = inputDisplay.value;                 

        if (operacion.includes('+')) {

          const ubc = operacion.indexOf('+');
          oprnd1 = Number(operacion.slice(0, ubc));
          oprnd2 = Number(operacion.slice(ubc+1));
          result = oprnd1 + oprnd2;

          display.value = result;
          inputDisplay.value = result;
        }      

          break;

        default:
          inputDisplay.value = inputDisplay.value + this.value;      
          break;
      }
      
    }

  
  }
  