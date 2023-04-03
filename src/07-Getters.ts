// Forma controlada de acceder a los atributos privados de la clase desde fuera de la clase

type TypeDate = 'days' | 'months' | 'years';

export class MyDate {
  // Forma corta de crear el constructor de la clase, sin definir propiedades y sin asignarlas (Tenemos que ser explicito con los accesos)
  constructor(
    public year: number=1993,
    public month: number=7,
    // A las propiedades privadas se les agrega un guion bajo al inicio del nombre
    private _day: number=9) {}

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
      this._day += amount;
    }

    if (type === 'months') {
      this.month += amount;
    }

    if (type === 'years') {
      this.year += amount;
    }
  }

  // Metodo para acceder al atributo day desde fuera de la clase
  get day() {
    return this._day;
  }

  // Metodo para validar si el año es bisiesto, podemos usar el metodo get para acceder a el como si fuera un atributo
  get isLeapYear():boolean {
    if(this.year % 400 === 0) return true;
    if(this.year % 100 === 0) return false;

    return this.year % 4 === 0;
  }
}

const myDate1 = new MyDate(2022, 10, 1);
const myDate2= new MyDate(2021, 10, 1);
const myDate3 = new MyDate(2020, 10, 1);
const myDate4 = new MyDate(2019, 10, 1);

// Llamamos el metodo day desde fuera de la clase, pero se compoarta como si fuera un atributo
myDate1.day;

console.log(myDate1.day);
console.log(myDate1.isLeapYear);
console.log(myDate2.isLeapYear);
console.log(myDate3.isLeapYear);
console.log(myDate4.isLeapYear);


