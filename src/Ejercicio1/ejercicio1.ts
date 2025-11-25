class Persona{
    nombre: string = ""
    edad: number = 0

    constructor(nombre:string , edad:number){
        this.edad = edad
        this.nombre = nombre
    }
    saludar (){
        console.log("Hola soy " + this.nombre)
    }

}
let Lista : Persona[]= [
    new Persona("Diego",23),
    new Persona("Diego",23),
    new Persona("Diego",23)
]

console.log(Lista)
