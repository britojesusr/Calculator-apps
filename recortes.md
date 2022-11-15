```JS
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

```
const operacion = inputDisplay.value;
          const operandos = [];
          const operadores = [];
          
          