      
      
      
      // BUSCADOR DE AUTOS
      // Array de objetos para almacenar los autos

const autos = [
    {
        marca: 'Ford',
        modelo: 'Fiesta',
        precio: 150000,
        km: 200,
        color: 'Azul',
        cuotas: 12,
        anio: 2019,
        patente: 'APL123',
        vendido: false
    },
    {
        marca: 'Toyota',
        modelo: 'Corolla',
        precio: 100000,
        km: 0,
        color: 'Blanco',
        cuotas: 14,
        anio: 2019,
        patente: 'JJK116',
        vendido: true
    },
    {
        marca: 'Citroen',
        modelo: 'Cellize',
        precio: 150000,
        km: 200,
        color: 'Gris',
        cuotas: 12,
        anio: 2019,
        patente: 'LXPJ29',
        vendido: false
    },
    {
        marca: 'Gonxer',
        modelo: 'Tomando Como Rey',
        precio: 100000,
        km: 0,
        color: 'Gay',
        cuotas: 14,
        anio: 2019,
        patente: 'ACM1PT',
        vendido: true
    }
];

function buscarAuto(patente) {
    let idx = autos.findIndex(x => x.patente == patente.toUpperCase());
    return idx != -1 ? autos[idx] : false;
}

document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault(); // evita que la página se recargue al enviar el formulario

    let patente = document.getElementById('patente').value;
    let auto = buscarAuto(patente);

    if (auto) {
        let html = 
        `<p>El auto con patente ${patente} es un ${auto.marca} ${auto.modelo} del año ${auto.anio}</p>
          <p>Precio: ${auto.precio}</p>
          <p>Kilómetros recorridos: ${auto.km}</p>
          <p>Color: ${auto.color}</p>
          <p>Cuotas: ${auto.cuotas}</p>
          <p>Vendido: ${auto.vendido ? 'Sí' : 'No'}</p>
        `;
        document.getElementById('resultado').innerHTML = html;
    } else {
        document.getElementById('resultado').innerHTML = `<p>No se encontró ningún auto con la patente ${patente}</p>`;
    }
});



/* let entrada = prompt("Ingrese su nombre")
let salida = entrada +" "+"ingresada";
alert(salida); */


/* alert("Bienvenido a Quelle, Valores Pintura.")
alert("Ingresa el tipo de vehiculo : auto, camioneta o moto.")

let marca = prompt("ingresa tipo de vehiculo")

switch(marca) {
    case "auto":
        alert("El precio de reparacion es un valor normal");
        break;
    case "moto":
        alert("El precio de reparacion es un valor bajo");
        break;
    case "camioneta":
        alert("El precio de reparacion es un valor alto");
        break;
    default:
        alert("No Existe Tipo de Vehiculo");
        break;
}

alert("Ingresa la altura y ancho de la pieza para saber el valor de la pintura")

let altura = parseFloat(prompt("Ingrese la Altura de la pieza:"));
let ancho = parseFloat(prompt("Ingrese la Anchura de la pieza:"));
let area = (ancho * altura)

console.log(area.toFixed(2) + " " + "cm")

if (area <= 1000)   {
    alert( "El valor de la pintura es bajo, valor neto es $" + area );
} else if (area <= 5000) {
    alert("El valor de la pintura es normal, valor neto es $" + area );
} else if (area <= 10000) {
    alert("El valor de la pintura es alto, valor neto es $" + area)
} else {
    alert("Debe ingresar datos");
}

function MostrarResultado ()
      {
        let conIva = "El valor de la pintura para su pieza es de $ " + (area * 1.19).toFixed(2) +" c/iva";
        alert (conIva);
        
      }	

      MostrarResultado (); */
      // FIN DE CODIGO PARA CALCULAR PINTURA



      
       
           
      
    