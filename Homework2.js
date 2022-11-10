/*
HOMEWORK2

Task1

1.	Є такий код:
2.	Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у.
let x = 1;
let y = 2;

let res1 = // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"
*/

let x = 1;
let y = 2;
let res1 = x + '' + y;

console.log(res1);
console.log(typeof res1);

/*
let res2 = // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"
*/

let x = 1;
let y = 2;
let res2 = (typeof x == 'number') + '' + y;

console.log(res2);
console.log(typeof res2);

/*
let res3 = // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"
*/

let x = 1;
let y = 2;
let res3 = x < y;

console.log(res3);
console.log(typeof res3);

/*
let res4 = // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"
*/


let x = 1;
let y = 2;
let res4 = (y/(x - x))/(y/(x - x));
let res5 = (y - (x + x))/(y - (x + x)); 
let res6 = (y - y)/(x - x)
let res7 = -(y/(x - x))/-(y/(x - x));

console.log(res4);
console.log(typeof res4);

console.log(res5);
console.log(typeof res5);

console.log(res6);
console.log(typeof res6);

console.log(res7);
console.log(typeof res7);

/*
__________________________________

Task2

2. Користувач вводить число (використовуйте prompt ()). Необхідно перевірити чи є введене число
	a) парним додатним;
	b) кратним числу 7.
Результат перевірки вивести в консоль.
а)
*/

let input = prompt("What is your number?");
input = input * 1
if ((isNaN(input)) == true) {
console.log("Please enter a number in digits. Example: 12445");
}
else if (typeof input === 'number' && input %2 == 0 && input %7 == 0){
 console.log("Number is divided on 2 and 7 without the rest");
}
else if (typeof input === 'number' && input %2 == 0){
 console.log("Number is divided on 2 without the rest");
}
else if (typeof input === 'number' && input %7 == 0){
 console.log("Number is divided on 7 without the rest");
}   
else {
console.log("Number is NOT divided on 2 or 7 without the rest");
}

/* 
b)
*/

let c = prompt("What is your number?");
let input = c * 1
if (typeof input === 'number' && input %2 == 0){
 result = (input %7 == 0) ?  "Number is divided on 2 and 7 without the rest" : "Number is divided on 2 without the rest";
console.log(result);
}
else if (typeof input === 'number' && input %7 == 0){
 console.log("Number is divided on 7 without the rest");
}   
else  if (isNaN(input) == false){
console.log("Number is NOT divided on 2 or 7 without the rest");
}
else {
console.log("Please enter a number in digits. Example: 12445");
}

/*
_____________________________________________________________

Task3

3. Створіть порожній масив;
1) У перший елемент масиву запишіть будь-яке число;
2) У другий елемент масиву запишіть будь-який рядок;
3) У третій елемент масиву запишіть будь-яке логічне значення;
4) У четвертий елемент масиву запишіть значення null;
5) Виведіть на екран число елементів, яке зберігається в масиві;
6) Запитайте у користувача ввести будь-яке значення і запишіть це значення в п'ятий елемент масиву;
7) Виведіть на екран п'ятий елемент масиву.
8) Видаліть 1-ий елемент масиву і виведіть масив на екран.
a)
*/

const arr = [];
arr[0] = 0;
arr[1] = "String";
arr[2] = 2 > 1;
arr[3] = null;
alert(arr.length);
arr[4] = prompt("Print some number:");
alert(arr[4]);
arr.shift();
console.log(arr);

/*
______________________________________________________

Task4
4. Напишіть програму, яка об’єднує всі наявні елементи масиву в стрічку і розділяє їх символом “*”.
Початковий масив:
let cities = ["Rome", "Lviv", "Warsaw"]; 
Результат:
"Rome*Lviv*Warsaw"
a)
*/

let cities = ["Rome", "Lviv", "Warsaw"];
let i = 0;
let text = "";
while (cities[i]) {
  text += cities[i] + "*";
  i++;
}
console.log(text.slice(0,16));

/*
b)
*/

let cities = ["Rome", "Lviv", "Warsaw"];
let i = 0;
let text = "";
do {
  text += cities[i] + "*";
  i++;
}
while (cities[i]) 
console.log(text.slice(0,16));

/*
c)
*/

let cities = ["Rome", "Lviv", "Warsaw"];
let text = "";
for (let i = 0; i < cities.length; i++)
    {text += cities[i] + "*";
}
console.log(text.slice(0,16));

/*
d)
*/

let cities = ["Rome", "Lviv", "Warsaw"];
let text = "";
for (let i in cities) { 
    text += cities[i] + "*";
}
console.log(text.slice(0,16));

/*
_____________________________________________________________

Task5

5. Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести “Ви ще надто молоді”, 

а)
*/

let isAdult = prompt("What is your age? Are you already 18?");

isAdult = isAdult * 1
if (typeof isAdult === 'number' && isAdult <= 18){
    console.log("Ви ще надто молоді. Вам лише " + isAdult + " роки/ів.");
} 
else if (typeof isAdult === 'number' && isAdult > 18) {
    console.log("Ви досягли повнолітнього віку. Вам вже " + isAdult + " роки/ів.");
}
else {
    console.log("Введіть, будь ласка, цифрове значення. Наприклад: 34.");
}

/*
b)
*/

let x = prompt("What is your age? Are you already 18?");
let isAdult = x * 1
result = (isAdult > 18) ? "Ви досягли повнолітнього віку." : 'Ви ще надто молоді';
console.log(result);

/*
_____________________________________________________________

Task 6
6. Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
Необхідно 
	a) визначити і вивести в консоль площу трикутника 
	b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).  
a)
*/

let a = prompt("What is legth of the first side?");
let b = prompt("What is legth of the second side?");
let c = prompt("What is legth of the third side?");

a *= 1
b *= 1
c *= 1

    let q = a + b + c;
    let t = (q/2);    
    let w = t - a;
    let r = t - b;
    let y = t - c;
    let k = ((t*w*r*y)**(1/2));
    let square = Number.parseFloat(k).toFixed(3);

if (isNaN(a) == true || isNaN(b) == true || isNaN(c) == true){
    console.log("'Incorrect data");
}
else if (a < 0 || b < 0  || c < 0 ){
     console.log("'Incorrect data");
}
    else if ((a + b) <= c || (a + c) <= b || (c + b) <= a){
     console.log("Incorrect data - entered side lengthes ca not compose a triangular.");
}
        
else if (c > b && c > a && ((a * b * (1/2)) == k)){
     console.log("It's a right triangular with the square of " + square + " squere meters.");
}

else if (b > c && b > a && ((a* c * (1/2)) == k)){
     console.log("It's a right triangular with the square of " + square + " squere meters.");
}
else if (a > b && a > c && ((c* b * (1/2)) == k)){
     console.log("It's a right triangular with the square of " + square + " squere meters.");
}
else {
    console.log("The triangular has the squere of " + square + " squere meters.");
}

/*
__________________________________________________________________________

Task7

7. Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.

a)
*/

let d = new Date();
let time = d.getHours();
console.log(time);

switch (time) {
  case 5:
    console.log( 'Доброго ранку' );
    break;
  case 6:
    console.log( 'Доброго ранку' );
    break;
  case 7:
    console.log( 'Доброго ранку' );
    break;
  case 8:
    console.log( 'Доброго ранку' );
    break;
  case 9:
    console.log( 'Доброго ранку' );
    break;
  case 10:
    console.log( 'Доброго ранку' );
    break;
  case 11:
    console.log( 'Доброго ранку' );
    break;      
  case 12:
    console.log( 'Доброго дня' );
    break;
  case 13:
    console.log( 'Доброго дня' );
    break;
  case 14:
    console.log( 'Доброго дня' );
    break;
  case 15:
    console.log( 'Доброго дня' );
    break;
  case 16:
    console.log( 'Доброго дня' );
    break;
  case 17:
    console.log( 'Доброго дня' );
    break;
  case 18:
    console.log( 'Доброго вечора' );
    break;
  case 19:
    console.log( 'Доброго вечора' );
    break;
  case 20:
    console.log( 'Доброго вечора' );
    break;
  case 21:
    console.log( 'Доброго вечора' );
    break;
  case 22:
    console.log( 'Доброго вечора' );
    break;
  case 23:
    console.log( 'Доброго вечора' );
    break;
  default:
    console.log( 'Доброї ночі' );
}
