function dividirGasto() {
  // Pedir los datos al usuario
  //==================Variables tipo string=======================
  let nombre = prompt("Ingrese su nombre:");
  let tipoGasto = prompt("Ingrese el tipo de gasto (super, comida, transporte):");
  let incluirPropina = prompt("¿Desea incluir propina? (Sí/No)");
  
  //==================Variables tipo number=======================
  let montoGasto = 0
  let cantidadPersonas = 0
  let gastoTotal = 0
  let montoPropina = 0
  let pagoPorPersona = 0

  do {
      montoGasto = parseFloat(prompt("Ingrese un número en el monto del gasto:"))
  } while (isNaN(montoGasto) || montoGasto <= 0)

  do {
      cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas:"))
  } while (isNaN(cantidadPersonas) || cantidadPersonas < 1)

// Calcular el monto de la propina si es necesario
incluirPropina = incluirPropina.toLowerCase()
if (incluirPropina == "si"){
    // Calcular el 10% del monto del gasto
    montoPropina = montoGasto * 0.1;
}

  // Calcular el gasto total incluyendo la propina
  gastoTotal = montoGasto + montoPropina;

  // Calcular el dinero que debe pagar cada persona
  pagoPorPersona = gastoTotal / cantidadPersonas;

  // Mostrar el resultado en la consola
  console.log(nombre + ", cada persona debe pagar $" + pagoPorPersona + " por " + tipoGasto);
}

dividirGasto()