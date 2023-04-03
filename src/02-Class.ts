export class MyDate{
  year: number;
  month: number;
  day: number;

  // Constructor, se ejecuta cuando se crea una instancia de la clase
  constructor(year:number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const date1=new MyDate(2022, 10, 10);
console.log(date1);

const date2=new MyDate(2023, 10, 10);
console.log(date2);
