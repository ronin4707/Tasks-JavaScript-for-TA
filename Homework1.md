HOMEWORK1

TASK1
1.   Напишіть скріпт всередині HTML-документу, який виводить на екран ваше імя за допомогою функції alert().

a)
<button onclick="alert('My name is Illia!')">Get to know my name</button>

TASK2

2.  Напишіть скріпт в зовнішньому файлі, який виводить в консоль ваше прізвище.    
      Підключіть створений файл до HTML-документу.
a)	

1. JS файл із кодом:
document.querySelector('p').inerHTML = console.log('My name is Illia.');

  2.  HTML-документ з:
- з полем з селектором ”p”

<p>First paragraph</p>
<script src="/javascript/hello.js"></script>

TASK3

3. a) оголосіть дві змінні;
    b) запишіть у змінні будь-які значення;
    c) виведіть на екран значення змінних;
    d) скопіюйте значення однієї змінної в іншу;
    e) виведіть на екран значення змінних.
a)
let x = " /do you need to automate your testing/ ";
let y = " /how much/ ";
alert(x+y);
x = y;
alert(x+y);

TASK4

4. Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. Значення кожної властивості повинно відповідати відповідному примітивному типу даних.
	
a)
const user = {
   firstName: "Alex", 
   age: 28,
   isMarried: true,
   hasDegree: undefined,
   hasChildren: null,
};

console.log("User First Name is: " + user.firstName + ". Type of user.firstName: " + typeof user.firstName);
console.log("User's age is: " + user.age + ". Type of user.age: " + typeof user.age);
console.log("User is married (true/false): " + user.isMarried + ". Type of user.isMarried: " + typeof user.isMarried);
console.log("User has Degree: " + user.hasDegree + ". Type of user.hasDegree: " + typeof user.hasDegree);
console.log("User has children: " + user.hasChildren + ". Type of user.hasChildren: " + typeof user.hasChildren);

TASK5

5. Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль.

а.	

let isAdult = confirm("Are you 18 years old?");

if(isAdult == true){
console.log("Yes, the user is 18 years old");
}
else {
    console.log("No, the user is not 18 years old");
}

b.

function age(){
let isAdult = confirm("Are you 18 years old?");
if(isAdult == true){
console.log("Yes, the user is 18 years old");
}
else {
    console.log("No, the user is not 18 years old");
}
}
console.log(age());

c.
let isAdult = confirm("Are you 18 years old?");
age = (isAdult == true) ? console.log("Yes, the user is 18 years old") : console.log("No, the user is not 18 years old");


TASK6

6. В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних:
	- ваше ім’я
	- ваше прізвище
	- навчальна група
	- ваш рік народження.
Присвойте змінним відповідні значення. 
Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. 
Визначте тип кожної змінної.
Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.
	
a) 
let myName;
let surname;
let groupName;
let birthDate;

myName = 'Illia';
surname = undefined;
groupName = true;
birthDate = 1986;

let isMarried = null;

console.log("Name: " + myName+ ' - type of name: ' + typeof myName);
console.log("Surname: " + surname+ ' - type of surame: ' + typeof surname);
console.log("Group Name: " + groupName+ ' - type of group name: ' + typeof groupName);
console.log("Birthdate: " + birthDate+ ' - type of datebirth: ' + typeof birthDate);
console.log("Marriage state: " + isMarried+ ' - type of marriage state: ' + typeof isMarried);

let person = [];
person[0] = myName;
person[1] = surname;
person[2] = groupName;
person[3] = birthDate;
person[4] = isMarried;

for(let i = 0; i < person.length; i++){
    if(typeof person[i] == 'number'){
        console.log(person[i]);
    }
}

for(let i = 0; i < person.length; i++){
    if(typeof person[i] == 'boolean'){
        console.log(person[i]);
    }
}

for(let i = 0; i < person.length; i++){
    if(typeof person[i] == 'string'){
        console.log(person[i]);
    }
}


b)
let name;
let surname;
let groupName;
let birthDate;

name = 'Illia';
lsurname = undefined;
groupName = true;
birthDate = 1986;

let isMarried = null;

console.log("Name: " + name + ' - type of name: ' + typeof name);
console.log("Surname: " + surname+ ' - type of surame: ' + typeof surname);
console.log("Group Name: " + groupName+ ' - type of group name: ' + typeof groupName);
console.log("Birthdate: " + birthDate+ ' - type of datebirth: ' + typeof birthDate);
console.log("Marriage state: " + isMarried+ ' - type of marriage state: ' + typeof isMarried);


(typeof name == 'number') ? console.log(name) : console.log();
(typeof surname == 'number') ? console.log(surname) : console.log();
(typeof groupName == 'number') ? console.log(groupName) : console.log();
(typeof birthDate == 'number') ? console.log(birthDate) : console.log();
(typeof isMarried == 'number') ? console.log(isMarried) : console.log();

(typeof name == 'boolean') ? console.log(name) : console.log();
(typeof surname == 'boolean') ? console.log(surname) : console.log();
(typeof groupName == 'boolean') ? console.log(groupName) : console.log();
(typeof birthDate == 'boolean') ? console.log(birthDate) : console.log();
(typeof isMarried == 'boolean') ? console.log(isMarried) : console.log();

(typeof name == 'string') ? console.log(name) : console.log();
(typeof surname == 'string') ? console.log(surname) : console.log();
(typeof groupName == 'string') ? console.log(groupName) : console.log();
(typeof birthDate == 'string') ? console.log(birthDate) : console.log();
(typeof isMarried == 'string') ? console.log(isMarried) : console.log();

c)
let name;
let surname;
let groupName;
let birthDate;

name = 'Illia';
lsurname = undefined;
groupName = true;
birthDate = 1986;

let isMarried = null;

console.log("Name: " + name + ' - type of name: ' + typeof name);
console.log("Surname: " + surname+ ' - type of surame: ' + typeof surname);
console.log("Group Name: " + groupName+ ' - type of group name: ' + typeof groupName);
console.log("Birthdate: " + birthDate+ ' - type of datebirth: ' + typeof birthDate);
console.log("Marriage state: " + isMarried+ ' - type of marriage state: ' + typeof isMarried);


if (typeof name == 'number') {
    console.log(name);
}
else if (typeof surname == 'number'){
    console.log(surname);
}
else if (typeof groupName == 'number'){
    console.log(groupName);
}
else if (typeof birthDate == 'number'){
    console.log(birthDate);
}
else if (typeof isMarried == 'number'){
    console.log(isMarried);
}
else {
    console.log("___");
}    
if (typeof name == 'boolean') {
    console.log(name);
}
else if (typeof surname == 'boolean'){
    console.log(surname);
}
else if (typeof groupName == 'boolean'){
    console.log(groupName);
}
else if (typeof birthDate == 'boolean'){
    console.log(birthDate);
}
else if(typeof isMarried == 'boolean'){
    console.log(isMarried);
}
else {
    console.log("___");
}
if (typeof name == 'string') {
    console.log(name);
}
else if (typeof surname == 'string'){
    console.log(surname);
}
else if (typeof groupName == 'string'){
    console.log(groupName);
}
else if (typeof birthDate == 'string'){
    console.log(birthDate);
}
else if(typeof isMarried == 'string'){
    console.log(isMarried);
}
else {
    console.log("___");
}

b)
let name;
let surname;
let groupName;
let birthDate;

name = 'Illia';
surname = undefined;
groupName = true;
birthDate = 1986;

let isMarried = null;

console.log("Name: " + name + ' - type of name: ' + typeof name);
console.log("Surname: " + surname+ ' - type of surame: ' + typeof surname);
console.log("Group Name: " + groupName+ ' - type of group name: ' + typeof groupName);
console.log("Birthdate: " + birthDate+ ' - type of datebirth: ' + typeof birthDate);
console.log("Marriage state: " + isMarried+ ' - type of marriage state: ' + typeof isMarried);


if (typeof name === 'number') {
    console.log(name);
}
else {
    console.log();
}

if (typeof surname === 'number') {
    console.log(surname);
}
else {
    console.log();
}
if (typeof groupName === 'number') {
    console.log(groupName);
}
else {
    console.log();
}
if (typeof birthDate === 'number') {
    console.log(birthDate);
}
else {
    console.log();
}
if (typeof isMarried === 'number') {
    console.log(isMarried);
}
else {
    console.log();
}
if (typeof name === 'boolean') {
    console.log(name);
}
else {
    console.log();
}

if (typeof surname === 'boolean') {
    console.log(surname);
}
else {
    console.log();
}
if (typeof groupName === 'boolean') {
    console.log(groupName);
}
else {
    console.log();
}
if (typeof birthDate === 'boolean') {
    console.log(birthDate);
}
else {
    console.log();
}
if (typeof isMarried === 'boolean') {
    console.log(isMarried);
}
else {
    console.log();
}
if (typeof name === 'string') {
    console.log(name);
}
else {
    console.log();
}
if (typeof surname === 'string') {
    console.log(surname);
}
else {
    console.log();
}
if (typeof groupName === 'string') {
    console.log(groupName);
}
else {
    console.log();
}
if (typeof birthDate === 'string') {
    console.log(birthDate);
}
else {
    console.log();
}
if (typeof isMarried === 'string') {
    console.log(isMarried);
}
else {
    console.log();
}

TASK7

7. За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача логін, емейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.

a)
let login = prompt("What is your login?");
let email = prompt("What is your email?");
let password = prompt("What is your password?");

alert("Dear " + login + ", your email is " + email + ", your password is " + password);

TASK8

8. Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран.

a)
let d = new Date();
let month = d.getMonth();
let day = d.getDate();
let time = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();

let secodsInHour = seconds + (minutes * 60);
let secondsInDay = secodsInHour + (time * (60 * 60));
let secondsInMonth = (day - 1) * (24*60*60) + secondsInDay;                                    
let secondsInYear = (month * 30 * 24 *60 * 60) + secondsInMonth

console.log(month + " month/s");
console.log(day + " day/s");
console.log(time + " hour/s");
console.log(minutes + " minute/s");

console.log("There are " + secodsInHour + " seconds in the current hour");
console.log("There are " + secondsInDay + " seconds in the current day");
console.log("There are " + secondsInMonth + " seconds in the current year");
console.log("There are " + secondsInYear + " seconds in the current year");

document.write("There are " + secodsInHour + " seconds in the current hour" + "<br>");
document.write("There are " + secondsInDay + " seconds in the current day"+ "<br>");
document.write("There are " + secondsInMonth + " seconds in the current year"+ "<br>");
document.write("There are " + secondsInYear + " seconds in the current year"+ "<br>");
