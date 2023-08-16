    //==================Objeto: info gastos=======================
    const gasto = {
        nombre: "",
        tipoGasto: "",
        incluirPropina: "",
        montoGasto: 0,
        cantidadPersonas: 0,
        montoPropina: 0,
      
            //==================Método:Pedir los datos al usuario=======================

        pedirDatos: function() {
          this.nombre = document.getElementById("nombre").value;
          this.tipoGasto = document.getElementById("tipoGasto").value;
          this.incluirPropina = document.getElementById("incluirPropina").value;
          this.montoGasto = parseFloat(document.getElementById("montoGasto").value);
          this.cantidadPersonas = parseInt(document.getElementById("cantidadPersonas").value);
        },
    
        //   do {
        //     this.montoGasto = parseFloat(prompt("Ingrese el monto del gasto:"));
        //   } while (isNaN(this.montoGasto) || this.montoGasto <= 0);
      
        //   do {
        //     this.cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas:"));
        //   } while (isNaN(this.cantidadPersonas) || this.cantidadPersonas < 1);
        // },
      
                    //==================Método:Calcular el monto de la propina si es necesario=======================

        calcularPropina: function() {
          if (this.incluirPropina === "si") {
            // Calcular el 10% del monto del gasto
            this.montoPropina = this.montoGasto * 0.1;
          }
        },
      
       //================== Calcular el gasto total incluyendo la propina==================
        calcularGastoTotal: function() {
          return this.montoGasto + this.montoPropina;
        },
      
        //================== Método: Calcular el dinero que debe pagar cada persona==================
        calcularPagoPorPersona: function() {
          const gastoTotal = this.calcularGastoTotal();
          return (gastoTotal / this.cantidadPersonas).toFixed(2);
        },
      
        //================== Método: mostrar el resultado en la consola ==================
        mostrarResultado: function() {
          const pagoPorPersona = this.calcularPagoPorPersona();
          console.log(this.nombre + ", cada persona debe pagar $" + pagoPorPersona + " por " + this.tipoGasto);
        }
      };
      
      //================== Función de orden superior:ejecutar las funciones en orden==================
      function calcularYMostrarGasto() {
        gasto.pedirDatos();
        gasto.calcularPropina();
        gasto.mostrarResultado();
      }
      

//================== Guardar los datos del gasto en JSON ==================
function guardarDatos(gasto) {
  const datos = JSON.stringify(gasto);
  localStorage.setItem("gasto", datos);
}

//================== Leer los datos del gasto de JSON ==================
function leerDatos() {
  const datos = localStorage.getItem("gasto");
  if (datos) {
    return JSON.parse(datos);
  } else {
    return null;
  }
}

// Mostrar el resultado en la consola
// function mostrarResultado(gasto) {
//   const pagoPorPersona = gasto.calcularPagoPorPersona();
//   console.log(gasto.nombre + ", cada persona debe pagar $" + pagoPorPersona + " por " + gasto.tipoGasto);


// Mostrar el resultado en HTML
function mostrarResultado() {
const pagoPorPersona = this.calcularPagoPorPersona();
const h3Resultado = document.createElement("h3");
h3Resultado.textContent = "${this.nombre}, cada persona debe pagar $${pagoPorPersona} por ${this.tipoGasto}";
document.resultado.appendChild(h3Resultado);
}
// ==================Ejecutar la función principal==================
calcularYMostrarGasto();

    //==================DOM: botón calcular =======================


const botonCalcular = document.getElementById("calcular");
botonCalcular.style.backgroundColor = "#a4ac86";
botonCalcular.style.color = "white";
botonCalcular.style.fontSize = "16px";
botonCalcular.style.fontWeight = "bold";
botonCalcular.style.borderRadius = "5px";
botonCalcular.style.cursor = "pointer";

