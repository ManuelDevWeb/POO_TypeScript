type TypeDate = 'days' | 'months' | 'years';

// Si dejamos los atributos publicos, desde afuera se pueden modificar y esto es un problema de seguridad
export class MyDate {
  // Por defecto en TypeScript todos los atributos y metodos son publicos, pero tambien podemos especificar la palabra reservada public
  year: number;
  month: number;
  day: number;

  // Constructor, se ejecuta cuando se crea una instancia de la clase
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  // Metodo para imprimir la fecha
  printFormat(): string {
    return `Date -> ${this.day}/${this.month}/${this.year}`;
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
}

const myDate = new MyDate(2022, 10, 10);
console.log(myDate.day);
myDate.day = 20;
console.log(myDate.day);
