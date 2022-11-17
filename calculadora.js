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
          
        case "=": // extraer a una funcion calcOperation()

        const operacion = inputDisplay.value;                 

        if (operacion.includes('+')) {

          const sumandos = operacion.split('+');
          const result = sumandos.reduce( (acumulado, actual) => Number(acumulado) + Number(actual));

          inputDisplay.value = result;
          display.value = `${operacion} = ${result}`;
        }      

          break;

        default:
          inputDisplay.value = inputDisplay.value + this.value;      
          break;
      }
      
    }

  
  }
  