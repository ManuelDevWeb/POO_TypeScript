// Básicamente, es la forma de heredar propiedades y métodos.
// Es similar a como funciona una propiedad o método privado, pero nos permite realizar herencia.

// Clase Animal
export class Animal {
  // Forma corta de crear el constructor de la clase, sin definir propiedades y sin asignarlas (Tenemos que ser explicito con los accesos)
  // Protected es un privado, pero que permite que las clases que hereden de esta clase puedan acceder a sus propiedades y metodos
  constructor(protected name: string) {}

  move() {
    console.log('Moving...');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  // Metodo protected, solo puede ser accedido por la clase padre y las clases que hereden de esta clase
  protected doSomething(){
    console.log('Doing something...');
  }
}

// Clase Perro que extiende de la clase Animal
export class Dog extends Animal {
  // Tenemos acceso a los atributos y metodos de la clase padre

  // Forma corta de crear el constructor de la clase, sin definir propiedades y sin asignarlas (Tenemos que ser explicito con los accesos)
  constructor(
    // Nombre ya esta definido en la clase padre, por lo que no debemos ser explicitos con el acceso
    name: string,
    public owner: string
  ) {
    super(name);
  }

  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log('Woof!' + this.name);
    }
    // Ejecutando funcion del padre (Lo llamo con this ya que en la clase actual no tenemos otro nombre con la misma clase. Pero tambien
    // podriamos llamarlo con super)
    this.doSomething();
  }

  // Polimorfismo, es reescribir el método que adopta otro comportamiento en la clase hija. La funcion padre sigue funcionando igual y la debemos llamar con super()
  move() {
    console.log('Moving as a dog...');
    super.move();
  }
}



const dog1 = new Dog('Logan', 'Manuel');

// console.log(dog1.name);
dog1.woof(3);
dog1.move();
