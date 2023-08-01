    //==================Objeto: info gastos=======================
const gasto = {
    nombre: "",
    tipoGasto: "",
    incluirPropina: "",
    montoGasto: 0,
    cantidadPersonas: 0,
    montoPropina: 0,
  
    // Pedir los datos al usuario (método)
    pedirDatos: function() {
      this.nombre = prompt("Ingrese su nombre:");
      this.tipoGasto = prompt("Ingrese el tipo de gasto (super, comida, transporte):");
      this.incluirPropina = prompt("¿Desea incluir propina? (Sí/No)").toLowerCase();
  
      do {
        this.montoGasto = parseFloat(prompt("Ingrese el monto del gasto:"));
      } while (isNaN(this.montoGasto) || this.montoGasto <= 0);
  
      do {
        this.cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas:"));
      } while (isNaN(this.cantidadPersonas) || this.cantidadPersonas < 1);
    },
  
    // Calcular el monto de la propina si es necesario (método)
    calcularPropina: function() {
      if (this.incluirPropina === "si") {
        // Calcular el 10% del monto del gasto
        this.montoPropina = this.montoGasto * 0.1;
      }
    },
  
    // Método para calcular el gasto total incluyendo la propina
    calcularGastoTotal: function() {
      return this.montoGasto + this.montoPropina;
    },
  
    // Método para calcular el dinero que debe pagar cada persona
    calcularPagoPorPersona: function() {
      const gastoTotal = this.calcularGastoTotal();
      return (gastoTotal / this.cantidadPersonas).toFixed(2);
    },
  
    // Método para mostrar el resultado en la consola
    mostrarResultado: function() {
      const pagoPorPersona = this.calcularPagoPorPersona();
      console.log(this.nombre + ", cada persona debe pagar $" + pagoPorPersona + " por " + this.tipoGasto);
    }
  };
  
  // Función de orden superior para ejecutar las funciones en orden
  function calcularYMostrarGasto() {
    gasto.pedirDatos();
    gasto.calcularPropina();
    gasto.mostrarResultado();
  }
  
  // Ejecutar la función principal
  calcularYMostrarGasto();