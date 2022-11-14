/* HOMEWORK 3

1. Заданий масив з елементами [2, 3, 4, 5]. За допомогою циклу for знайдіть добуток елементів цього масиву. Також реалізуйте завдання через while.

a)
*/

var arr1 = [1, 2, 3, 4];
var total = 0;
for (let i in arr1) {
  total += arr1[i];
}

/*
b)
*/

let arr2 = [1,2,3,4];
let result = 0;
for (let i = 0; i < arr2.length; i++) {
 result += arr2[i];
   }
   console.log(result);


/*
c)
*/

let arr3 = [1,2,3,4];
let result = 0;
let i = 0;
while(i < arr3.length){
 result += arr3[i];
i++;   
}
   console.log(result);


/*
2. Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15. Для кожної ітерації він перевірятиме, чи є поточне число парним чи непарним,
і відображатиме повідомлення на екрані.
Sample Output: 
"0 is even" 
"1 is odd" 
"2 is even" 

a)
*/

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
for (i = 0; i < arr.length; i+=1) {
  if (arr[i] %2 == 0){
      console.log(arr[i] + " is even");
    
}
    else{
        console.log(arr[i] + " is odd");
    }
}

/*
b)
*/

for (i = 1; i < 16; i+=1) {
  if (i %2 === 0){
      console.log(i + " is even");
    
}
    else{
        console.log(i + " is odd");
    }
}

/*
3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.

Sample Output:
randArray(5);  // [399,310,232,379,40]


a)
*/

function getRandomInt(max) {
return Math.round(Math.random() * max);
    }

function count(m){
let numbers = [];
for(let i = 0; i < m; i++){
let m = getRandomInt(500);
 numbers[i] = m;    
}
console.log(numbers);
}
count(5);

/*
4. Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b. Функція працює тільки з цілими числами. Реалізувати інтерфейс введення чисел a, b з клавіатури.

Sample Output:
raiseToDegree(3, 4);  // 81

a)
*/

function raiseToDegree(a, b){
a = prompt("Enter the digit that has to be raised to degree:");
b = prompt("Enter the degree to wich the digit has to be raised:");
a = a * 1;
b *= 1;

if (Number.isInteger(a) && Number.isInteger(b)){    
let c = a**b; 
alert("The number " + a + " raised to the degree " + b + " equals " + c);
}
    else{
        alert("The first or second number is not an integer");
    }
}
console.log(raiseToDegree());

/*
b)
*/

function quoter(n, d) {
n = prompt("Enter the digit that has to be raised to degree:");
d = prompt("Enter the degree to wich the digit has to be raised:");
n = n * 1;
d *= 1;
  if (n == 0 || d == 0) {
     return 0;
  }         
  else if (Number.isInteger(n) && Number.isInteger(d)){ 
       let sum = 1;
       {for (let i = 0; i < d; i++){
    sum = sum * n;
 }
       return sum; 
       }
   }
    else{
     console.log("The first or second number is not an integer");
  }
}
console.log(quoter());

/*
c)
*/

(function (n, d) {
n = prompt("Enter the digit that has to be raised to degree:");
d = prompt("Enter the degree to wich the digit has to be raised:");
n = n * 1;
d = d * 1;
    let res = 1;
   for (let i = 1; i <= d; i++) {
      res *= n;
   }
    if ((Number.isInteger(n) == true) && (Number.isInteger(d) == true)){
    console.log("The number " + n + " raised to a degree " + d + " equals " + res);
    }
       else if (n == 0 && d == 0){
   console.log("The number " + n + " raised to a degree " + d + " equals " + "0");
    }
      else if (n == 0 || d == 0){
   console.log("The number " + n + " raised to a degree " + d + " equals " + "0");
    }
      else if (isNaN(n) || isNaN(d)){
        console.log("One or two of the entered values are not numbers. Enter digits in the form like: 4");}
}());

/*
d)
*/

function sum(n) {
    
    n *= 1;

    let res = 1;
    if (Number.isInteger(n)){
    return function() {
        return res = res * n;
    }
    };
 }
 let c = sum(5);
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());

/*
e)
*/

function sum(n) {
    
    n *= 1;

    let res = 1;

    
    return function() {
        if (Number.isInteger(n)){
        return res = res * n;
    };
    }
 }
 let c = sum(5);

function count(m){
    if (Number.isInteger(m)){
    while (m !== 0){
        
console.log(c());
        m--;        
    }
}
}
console.log(count(5));

/*
5. Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість числових аргументів і повертати той, який має найменше значення. Порада: для розв’язку можете скористатися спеціальним масивом arguments.
Sample Output:
findMin(12, 14, 4, -4, 0.2); // => -4

a)
*/


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
        }
    
    function findMin(){
    let numbers = [];
    for(let i = 0; i < 500; i++){
    let m = getRandomInt(2500);
     numbers[i] = m;    
    }
    for(i = 0; i < numbers.length; i++){
         for(let k = i + 1; k < numbers.length; k++){
     if(numbers[i] <= numbers[k]){
        numbers[k] = numbers[i];
    }
    else {
        numbers[k] = numbers[k];
    }
         }
        }
        console.log(numbers);
        console.log(numbers[499]);
    
    }

    console.log(findMin());

/*
b)
*/

function findMin() {

   for (let i = 0; i < arguments.length; i++) {
         for(let k = i + 1; k < arguments.length; k++){
     if(arguments[i] <= arguments[k]){
        arguments[k] = arguments[i];
    }
    else {
        arguments[k] = arguments[k];
    }
         }
        }
            console.log(arguments[arguments.length - 1]);
   }
   console.log(findMin(2,3,1,2,1,6,-4,0,9,-99,-2,2));

/*
6. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
Sample Output:
findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true
*/


let barr = [1,2,3,4,5,22,21,23,1];

function findUnique(arr){
for(let k = 0; k < arr.length; k++){ 
    for(let i =  (k + 1); i < arr.length; i++){
        if(arr[k] === arr[i]){ 
             return false;
        }    
 }
}
    return true;
        }
findUnique(barr);


/*
7. Напишіть функцію, яка повертає останній елемент масиву. Функція може приймати 2 параметра: 1-ий масив, 2-ий числовий параметр, що відповідає кількості 'х' останніх елементів масиву, які треба вивести.

Sample Output:
console.log(lastElem([3, 4, 10, -5]));      // -5
console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]

a)
*/


function lastElements(arguments, d){

     if(d === undefined){            
       console.log(arguments[arguments.length-1]); 

     }
         else if(d >= arguments.length){
        for(i = arguments.length - 1; i >= 0; i-=1){
       console.log(arguments[i]); 
    }
     }
    else if(arguments.length == 1){ 
        console.log(arguments[0]);
    }  
   else if(d < arguments.length){        
for(i = arguments.length - 1; i >= (arguments.length - d); i-=1){ 
    console.log(arguments[i]);
}
}
}
    lastElements([1,2,3,4,5,6,7,8,9,0,111,22222,33333,444,2221134],123456);


/*
8. Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву кожного слова рядка в верхній регістр.

Input string: 'i love java script' 
Output string: 'I Love Java Script'
*/

function upperCase(text){

    let a = text.split(" ").map(word => {
    return word[0].toUpperCase() + word.slice(1);
})
    return a.join(" ");
    }
    
    upperCase('i love java script');
