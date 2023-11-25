var peso;
var opcion;
var peso_tierra = 5.97;
var peso_marte = 6.42;
var peso_jupiter = 1.898;
var resultado;

opcion = prompt("Escoge una opcion: (1, 2)");
/*
//con switch
switch(opcion){
    case "1":
        peso = prompt("Dame tu peso: ");
        resultado = peso * peso_marte / peso_tierra;
        alert("Su peso es: "+resultado);
        break;
    case "2":
        peso = prompt("Dame tu peso: ");
        resultado = peso * peso_jupiter / peso_tierra;
        alert("Su peso es: "+resultado);
        break;     
    
    default:
        alert("No existe esa opcion");
        break;
}
*/

//con else if
if (opcion == "1"){
    peso = prompt("Dame tu peso: ");
    resultado = peso * peso_marte / peso_tierra;
    alert("Su peso es: "+resultado);
} else if(opcion == "2"){
        peso = prompt("Dame tu peso: ");
        resultado = peso * peso_jupiter / peso_tierra;
        alert("Su peso es: "+resultado);
}else{
        alert("No existe esa opcion");
}