var array = [true, 10, false, "codigo", "herramientas", 7];

//cual de los dos elementos de texto es mayor

/*de los valores booleanos, determinar los operadores necesarios para obtener un 
resultado true y otro resultado false*/

var num1 = array[1];
var num2 = array[5];

resultado1 = num1 > num2;
resultado2 = num1 < num2;

/*Determinar las operaciones basicas con los dos elementos numericos*/

var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;


alert("El elemento de texto mayor es: "+array[4]+"\n"+
"\n----Booleanos----"+
"\n10 > 7 = "+resultado1+
"\n10 < 7 = "+resultado2+"\n"+
"\n--Operaciones basicas--"+
"\nLa suma es: "+ suma + 
"\nLa resta es: "+ resta+ 
"\nLa multiplicacion es: "+ multiplicacion+
"\nLa division es: "+division);