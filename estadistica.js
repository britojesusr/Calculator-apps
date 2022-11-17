const opcEstadistics = document.querySelector('#opcEstadistics');
const btnCalcEstadistics = document.querySelector('#btnCalcEstadistics');
const btnResetCalc = document.querySelector('#btnResetCalc');

function calcPromedio (lista) {

  if(lista.length >= 1) {
  
      const total = lista.reduce((suma, sumandos) => suma + sumandos);
  
      const promedio = total / lista.length;
  
      return promedio;      
  }
  
  else {
      console.log("Ingresa una lista de valores valida para calcular un promedio");
  }
      
  }

function calcularLaMediana (lista) {

  lista.sort((a,b) => a - b )

    if ( lista.length % 2 !==0) {

        let x = Math.floor( lista.length / 2 );

        let mediana = lista[x];

        return mediana;
    }

    else {

        let x = lista.length / 2;

        let mediana = ( lista[x-1] + lista[x] ) / 2;

        return mediana;
        
    }
}

function calcModa (lista) {
    
  const objFindModa = {}; 
  // Crea un objeto con los elementos de la lista, donde key = elemento, value = numero de veces que se repite  
  for (let i = 0; i < lista.length; i++ ) {
      
      let keyFindModa = lista[i];
      
      if(keyFindModa in objFindModa) {
          
          objFindModa[keyFindModa] += 1;
      
      } else {          
          objFindModa[keyFindModa] = 1;
      }
  }

  const arrFindModa = Object.entries(objFindModa);
  // Crea un array bidimensional con las propiedades del objeto [key][value]
  
  const arrFindModaOrder = arrFindModa.sort( ( a, b ) => b[1] - a[1] );
  // ordena el array de mayor a menor por la segunda posiciòn del arreglo bidimensional [1] ò [value] que en este caso es el numero de veces que se repite el elemento 

  const arrayModa = arrFindModaOrder.filter( ( a => a[1] == arrFindModaOrder[0][1]  )  );
  // evalua si existe mas de 1 elemento con el mismo valor del que mas veces se repite 

  if ( arrayModa.length == 1) { // para el caso de 1 moda
    
    const result = `${arrayModa[0][0]} rep ${arrayModa[0][1]}`;

    return result
  }

  else if ( arrayModa.length == 2) { // para el caso bimodal
    
    const result =`${arrayModa[0][0]}-${arrayModa[1][0]} rep ${arrayModa[0][1]}`;
    
    return result;
  }

  else if ( arrayModa.length > 2) { // para el caso multimodal

    const list = [] ;
    
    for (let i = 0; i < arrayModa.length; i ++) {

      list.push(arrayModa[i][0]);        
    }

    const result = `${list.join('-')} rep ${arrayModa[0][1]}`;
   
    return result;   

  }
     
}

function ordernarMenorMayor (lista) {

  lista.sort( (a , b ) => a -b );
  
  console.log(lista);
}

function eliminarCaracteresLista (entrada) {

  const lista = entrada.split('-');

  const listNumber = lista.map( item => Number(item));
  
  return listNumber;
}

function calcEstadistica() {
  
  const lista = eliminarCaracteresLista(inputDisplay.value);
  const opc = opcEstadistics.value;
  
  switch (opc) {
    
    case '1':
      result = calcPromedio(lista);
      display.value = result;
      inputDisplay.value= ""; 
      break;
    case '2':
      result = calcularLaMediana(lista);
      display.value = result;
      inputDisplay.value= "";    
      break;
    case '3':
      result = calcModa(lista);
      display.value = result;
      inputDisplay.value= "";      
      break;
  }
}

function resetCalc() {
  display.value = 0;
  inputDisplay.value= "";
}


btnCalcEstadistics.addEventListener('click', calcEstadistica);
btnResetCalc.addEventListener('click', resetCalc);

