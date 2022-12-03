/* let entrada = prompt("Ingrese su nombre")
let salida = entrada +" "+"ingresada";
alert(salida); */


alert("Bienvenido a Quelle, Valores Pintura.")
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

      MostrarResultado ();











