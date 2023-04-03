// El constructur, es el metodo por el cual construimos la isntancia de la clase y enviamos los parametros
// que queremos que tenga el objeto

type TypeDate = 'days' | 'months' | 'years';

export class MyDate {
  // Forma corta de crear el constructor de la clase, sin definir propiedades y sin asignarlas (Tenemos que ser explicito con los accesos)
  constructor(
    public year: number=1993,
    public month: number=7,
    private day: number=9) {}

  // Metodo para imprimir la fecha
  printFormat(): string {
    const day = this.addPadding(this.day);

    return `Date -> ${day}/${this.month}/${this.year}`;
  }

  // Metodo para agregar ceros a la izquierda, es privado y solo se puede acceder desde la clase
  private addPadding(value: number): string {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  // Metodo para sumar dias, meses o años
  add(amount: number, type: TypeDate) {
    if (type === 'days') {
      this.day += amount;
    }

    if (type === 'months') {
      this.month += amount;
    }

    if (type === 'years') {
      this.year += amount;
    }
  }

  getDay() {
    return this.day;
  }
}

const myDate = new MyDate(2022, 10, 1);
console.log(myDate.printFormat());
console.log(myDate.month);
myDate.add(10, 'days');
console.log(myDate.printFormat());

// ❌ No se puede acceder al atributo day desde fuera de la clase
// console.log(myDate.day);
console.log(myDate.getDay());
