// Static son las Propiedades o metodos que pertenece a la clase y no a los objetos
class MyMath{
  static readonly PI=3.1416;

  static max(...numbers:number[]){
    return numbers.sort((a,b)=>b-a)[0];
  }
}

// const myMath = new MyMath();
// console.log(myMath.PI);

console.log(MyMath.PI);
console.log(MyMath.max(1,2,3,4,5,6,7,8,9,10));
