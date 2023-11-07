/*
*Tipos de js:
*Numberstring
*Boolean
*Null
*Undefined
*Object
*Function

*Tipos de ts:
*Unknown
*Never
*Arrays
*Tuplas
*Enums

*Tipos inferidos

*/

let extincionDinosaurios: number = 76_000_000;
let dinosaurioFavorito = "t-rex";
let extinto = true;

/*Tipado inferido.No hace falta indicar que tipo de variable es, siempre y cuando se esten inicializado
si no se inicializa, automaticamente la tomo como tipo "any" y es algo que se debe evitar.
A "any", se le puede asignar cualquier tipo de dato y luego reasignarle otro de diferente tipo;
lo cual elimina el proposito de usar typescript*/

//Con funciones:

function resultado(config: any) {
  return config;
}

// Ejemplo con array:

// Inferido de typescript:

// let colores = [ 'rojo','celeste', 'verde', 'amarillo']

/*De no usar el inferido, se escribiria así
let */
let colores: string[] = ["rojo", "celeste", "verde", "amarillo"];
/*Al apoyar el cursor sobre el nombre de la variable, se nos indica que tipo de dato es*/
let numeros: number[] = [1, 2, 3, 4];
let checks: boolean[] = [];
let numeros2: Array<number> = [];

/* Funcionalidades de typescript.

('.map' sirve para iterar los elementos de un arreglo y aplicarles una funcion).
En las sugerencias, usando como ejemplo la variable 'colores' las sugerencias son para metodos de string,ya que es de tipo string.
Si cambiamos 'colores' por 'numeros', las sugerencias som para metodos que tienen los numeros
 
animales.map (x => x.) los autocompletados sugieren metodos segun el tipo de dato */

/* Tuplas, son tipos de datos que no se encuentran en javascript pero que typescript las implenta,
las tuplas son variables que contienen un 'set' de algo que se encuentran ordenado */

let tupla = [1, "amarillo"]; // si posicionamos el cursor sobre el nombre de la variable, nos va a indicar que es un arreglo la misma va a contener strings y numbers

// Para indicar q es una tupla
let tupla2: [number, string] = [1, "amarillo"];

// Si al final, agregamos un tercer valor, va a dar error, porque solo nos permite guardar los datos que esten definidos.

let tupla3: [number, string[]] = [1, ["verde", "rojo"]]; //Ejemplo de tupla que primero tiene un dato numérico y después un arreglo de string

/*Enums= tipo ennumerado, lista de constantes que podemos referenciar en cualquier momento: podemos usarla por ejemplo para
-representar estados, 
-tallas, 
-un estado esta cargando (iniciando, exito, fracaso)

Ejemplos: */

const chica = "s";
const mediana = "m";
const grande = "l";
const extragrande = "xl";

/*Con Enums si posicionamos el cursor sobre los elementos, nos indicara la posición */
//                0       1     2       3
enum Talla {
  Chica,
  Mediana,
  Grande,
  ExtraGrande,
}
/* Si no quisieramos que empezara en cero, deberiamos escribirlo asi chica=2,
de esa forma el segundo pasaría a ser 3 y el siguiente 4...*/

// Definir una constante de uno de esos valores

const variable1 = Talla.Grande;

const enum LoadingState {
  "Idle",
  "Loading",
  "Success",
  "Error",
}

const estado = LoadingState.Success;

/* AGREGAR CONST ANTES DE ENUM, si se crea como constante sera mas optimizado.
Solo va a definir las constante a medida que las vallamos definiendo o asignando a otras variables*/

//OBJETOS

const objeto: {
  //aca agregamos las propiedades que queremos que el objeto tenga
  readonly id: number;
  nombre?: string; //para poner una propiedad opcional, colocamos signo de pregunta
  talla: Talla;
} = { id: 1, nombre: "caracol", talla: Talla.Mediana };

/*
Luego podemos cambiar los valores.
En caso de no querer cambiar el valor, podemos poner readonly ('solo lectura').
Podemos poner arrays, objetos, etc.

-Para definir ese objeto en otro lado:
*/

type Direccion = {
  numero: number;
  calle: string;
  pais: string;
};

type Persona = {
  readonly id: number;
  nombre: string;
  talla: Talla;
  direccion: Direccion;
};
const objeto2: Persona = {
  id: 1,
  nombre: "Miriam",
  talla: Talla.Mediana,
  direccion: {
    numero: 1,
    calle: "Siempre viva",
    pais: "Argentina",
  },
};

//Arreglo del objeto persona, dentro de arr solo van a exisitir elementos de persona; un arreglo que solo va a tener objetos.

const arr: Persona[] = [];
