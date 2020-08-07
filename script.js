let game_field = document.querySelector('#game-field');

/* let z = 10;

console.log(++z); Меняет всю переменную и в дальнейшем в функции перед числом Z
console.log(z);
console.log(z++); Добавляет + после числа Z */

/*let n = 4;
let n = 'Hello world';
let n = false;
console.log(!n); Будет true
let n = true;
console.log(!n); Будет false
let n = [[3,3,3] 3, 4] - Масив
*/
/*let cars = {
  audi: {
    size: 32,
    number: 32512
  }, //отделяем запятой след объект, а последний не ставим ничего
  bmw: 3054,
  getColor: function (color) {
    return "This is color" + color;
  }
}; Объект
console.log(cars.getColor("white"));
*/

let cars = function() {
  this.specification = {
    size: 32,
    number: 32512
  }; //отделяем запятой след объект, а последний не ставим ничего
}; // Прототип

let audi = new cars();
audi.specification.size = 50;

console.log(audi.specification);


let bmw = new cars();

console.log(bmw.specification);

audi = new cars();

console.log(audi.specification);

figureManager.createFigureOne(1, 1, 1)
figureManager.createFigureTwo(7, 14, 3)
figureManager.createFigureThree(7, 11, 4)
figureManager.createFigureFour(7, 3, 4)
figureManager.createFigureFive(3, 8, 4)
figureManager.createFigureSix(3, 4, 4)
figureManager.createFigureSeven(3, 16, 4)
