let game_field = document.querySelector('#game-field');
// let emptyDiv = document.createElement('div');
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

/*let cars = function() {
  this.specification = {
    size: 32,
    number: 32512
  }; //отделяем запятой след объект, а последний не ставим ничего
}; // Констрактор

let audi = new cars();
audi.specification.size = 50;

console.log(audi.specification);


let bmw = new cars();

console.log(bmw.specification);

audi = new cars();

console.log(audi.specification); */

figureManager.game_field = game_field;

figureManager.createFigureThree(7, 14, 3)
figureManager.resetObject();
figureManager.figureFall(0);

/*
figureManager.createFigureThree(7, 11, 4)
figureManager.createFigureFour(7, 3, 4)
figureManager.createFigureFive(3, 8, 4)
figureManager.createFigureSix(3, 4, 4)
figureManager.createFigureSeven(3, 16, 4)*/

/*let second_game_field = document.querySelector('#second-game-field');
figureManager.game_field = second_game_field;
console.log(second_game_field);
figureManager.createFigureOne(5, 2, 1)
figureManager.createFigureTwo(7, 14, 1)
figureManager.createFigureThree(5, 13, 1)
figureManager.createFigureFour(5, 5, 1)
figureManager.createFigureFive(6, 11, 1)
figureManager.createFigureSix(5, 7, 1)
figureManager.createFigureSeven(5, 17, 1)*/
