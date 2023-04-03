// Herencia permite que las propiedades y métodos de una clase son heredadas
// por otra para evitar la redundancia de código en nuestro proyector.

// Clase Animal
export class Animal {
  // Forma corta de crear el constructor de la clase, sin definir propiedades y sin asignarlas (Tenemos que ser explicito con los accesos)
  constructor(public name: string) {}

  move() {
    console.log('Moving...');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

// Clase Perro que extiende de la clase Animal
export class Dog extends Animal{
  // Tenemos acceso a los atributos y metodos de la clase padre

  // Forma corta de crear el constructor de la clase, sin definir propiedades y sin asignarlas (Tenemos que ser explicito con los accesos)
  constructor(
    // Nombre ya esta definido en la clase padre, por lo que no debemos ser explicitos con el acceso
    name: string,
    public owner:string
  ){
    super(name);
  }

  woof(times:number):void{
    for(let i=0; i<times; i++){
      console.log('Woof!');
    }
  }
}

const animal1= new Animal('Kala');
console.log(animal1.greeting());
animal1.move();

const dog1 = new Dog('Logan', 'Manuel');
console.log(dog1.greeting());
console.log(dog1.name);
console.log(dog1.owner);
dog1.move();
dog1.woof(3);
