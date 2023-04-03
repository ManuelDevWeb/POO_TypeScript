type TypeDate = 'days' | 'months' | 'years';

// Con los atributos privados solo se pueden acceder desde la clase, y no se pueden modificar desde fuera de la clase
export class MyDate {
  // Para que un atributo sea privado se antepone el modificador private
  year: number;
  month: number;
  private day: number;

  // Constructor, se ejecuta cuando se crea una instancia de la clase
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  // Metodo para imprimir la fecha
  printFormat(): string {
    const day=this.addPadding(this.day);

    return `Date -> ${day}/${this.month}/${this.year}`;
  }

  // Metodo para agregar ceros a la izquierda, es privado y solo se puede acceder desde la clase
  private addPadding(value:number):string{
    if(value < 10){
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

  getDay(){
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
