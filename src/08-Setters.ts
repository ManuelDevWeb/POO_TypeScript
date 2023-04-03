// Forma controlada de modificar a los atributos privados de la clase desde fuera de la clase

type TypeDate = 'days' | 'months' | 'years';

export class MyDate {
  // Forma corta de crear el constructor de la clase, sin definir propiedades y sin asignarlas (Tenemos que ser explicito con los accesos)
  constructor(
    // A las propiedades privadas se les agrega un guion bajo al inicio del nombre
    public year: number = 1993,
    private _month: number = 7,
    private _day: number = 9
  ) {}

  // Metodo para imprimir la fecha
  printFormat(): string {
    const day = this.addPadding(this._day);

    return `Date -> ${day}/${this._month}/${this.year}`;
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
      this._month += amount;
    }

    if (type === 'years') {
      this.year += amount;
    }
  }

  // Metodo para acceder al atributo day desde fuera de la clase
  get day() {
    return this._day;
  }

  // Metodo para acceder al atributo month desde fuera de la clase
  get month() {
    return this._month;
  }

  // Metodo para validar si el año es bisiesto, podemos usar el metodo get para acceder a el como si fuera un atributo
  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;

    return this.year % 4 === 0;
  }

  // Metodo para modificar el atributo day desde fuera de la clase
  set month(newValue:number) {
    if(newValue < 1 || newValue > 12) {
      throw new Error('Invalid month');
    }

    this._month = newValue;
  }
}

const myDate1 = new MyDate(2022, 10, 1);

console.log(myDate1.month);

myDate1.month = 12;

console.log(myDate1.month);

myDate1.month = 13;

console.log(myDate1.month);
