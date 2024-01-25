//Variables
let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 1; //la variable ayudará para decir cuantas veces se ha intentado llegar al número
let palabraVeces = 'vez'; //esta variable es para la ayuda en cuanto a escribir bien (gramaticalmente)
                    //cuando se vaya a usar en singular o plural


//loops y variables
// != -> Diferente a 
//identaciones, respetar el inicio y final de cada cosa (if,while,etc)
while (numeroUsuario != numeroSecreto) { //MIENTRAS el numero de usuario sea diferente al número secreto
                                         //seguira el código funcionando
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos = intentos + 1;
        palabraVeces = 'veces';
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}

/**
  extensión, que no es sólo para eso, la realidad es que las extensiones en Visual Studio son complementos, 
  son plugins que nos permiten mejorar la usabilidad, poder trabajar de forma más amena, 
  más práctica y para evitar que cometamos errores.
 */
