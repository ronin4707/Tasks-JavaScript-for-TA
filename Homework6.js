/*
HOMEWORK6

1. На HTML-сторінці є елемент div:
    <body>	
	<div id="test">First</div>
  </body>	
Потрібно змінити вміст елемента із First на Last. Доступіться до елемента div хоча б 2 способами.	

a)
*/

let firstToSecond = document.getElementById("test").innerHTML = "Second";

/*
b)
*/


let firstToSecond = document.querySelector("div").innerHTML = "Second";

/*
2. На сторінці є елемент зображення:
     <body>
		   <img class="image" src="dog.jpg">
     </body>
Потрібно змінити зображення dog.jpg на cat.jpg.
Виведіть в модальному вікні вміст тегу img з новим зображенням.

a)
*/


let image = document.querySelector("img");
image.setAttribute('src', "cat.jpg");
console.log(image.getAttribute('src'));

/*
3. 
       <body>
	<h2>Article header</h2>      
      <div id="text">
        <p>First paragraph</p>
        <p>Second paragraph</p>
        <p>Third paragraph</p>
      </div>
	<p>Another text</p>
    </body>
На вказаній HTML-сторінці необхідно отримати всі елементи всередині тега div по селектору (використати метод document.querySelectorAll). І вивести їх вміст із вказанням номеру абзацу в такому форматі:
Selector text 0: First paragraph
Selector text 1: Second paragraph
Selector text 2: Third paragraph

a)
*/


let bodyElements = document.querySelectorAll("p");
for (let i = 0; i < bodyElements.length - 1; i += 1) {
   console.log("Selector text " + i + ": " + bodyElements[i].innerText); 
}


/*
4. На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
	1) першого елемента списку
	2) останнього елемента списку
	3) другого елемента списку
	4) четвертого елемента списку
	5) третього елемента списку
Зробіть завдання 2 різними способами.	
Приклад:
•	1
•	2
•	3
•	4
•	5
Результат виводу: 1, 5, 2, 4, 3

a)
*/

let el1 = document.querySelector('ul').childNodes[1];
console.log(el1.innerText);

let el5 = document.querySelector('ul').childNodes[9];
console.log(el5.innerText);

let el2 = document.querySelector('ul').childNodes[3];
console.log(el2.innerText);

let el4 = document.querySelector('ul').childNodes[7];
console.log(el4.innerText);

let el3 = document.querySelector('ul').childNodes[5];
console.log(el3.innerText);

/*
b)	
*/
/*
let el1 = document.querySelectorAll('li')[0];
console.log(el1.innerText);

let el5 = document.querySelectorAll('li')[4];
console.log(el5.innerText);

let el2 = document.querySelectorAll('li')[1];
console.log(el2.innerText);

let el4 = document.querySelectorAll('li')[3];
console.log(el4.innerText);

let el3 = document.querySelectorAll('li')[2];
console.log(el3.innerText);


/*
5. Для сторінки
		  <body>
		       <h1>I'am a big header!!!</h1>
        <div id="myDiv">
            <p>First paragraph</p>
            <p>Second paragraph</p>
            <p>Third paragraph</p>
            <p>Fourth paragraph</p>
        </div>
        <ul id="myList">
            <li>Make</li>
            <li>me</li>
            <li>horizontal!</li>
        </ul>
        <span>Make me invisible, please!</span>
	    </body>
Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано нижче:

a)

*/

let el6 = document.querySelector('h1');
el6.style.backgroundColor = "#00FF00";

let el7 = document.querySelector('div').childNodes[1];
el7.style.fontWeight = "bold";

let el8 = document.querySelector('div').childNodes[3];
el8.style.color = "#ff0000";

let el9 = document.querySelector('div').childNodes[5];
el9.style.textDecoration = "underline";

let el10 = document.querySelector('div').childNodes[7];
el10.style.fontStyle = "italic";

let el11 = document.querySelector('span');
el11.style.display = 'none';

let el12 = document.getElementById("myList").childNodes[1];
let el14 = document.getElementById("myList").childNodes[3];
let el16 = document.getElementById("myList").childNodes[5];
el12.style.display = 'inline';
el14.style.display = 'inline';
el16.style.display = 'inline';

let el13 = document.getElementById("myList").childNodes[2];
let el15 = document.getElementById("myList").childNodes[4];
el13.remove();
el15.remove();


/*
6. Задано HTML-сторінку:
    <body>
<input type="text" id="input1" value="Text1">
<input type="text" id="input2" value="Text2">
  </body>
1)	Користувач почергово вводить 2 повідомлення (використати prompt()). 1-е повідомлення записується в 1-ий <input>, 2-ге – в 2-ий.
2)	Поміняти значення 1-го і 2-го інпутів місцями.

a)
*/

let input1 = prompt("Your first message:"); 

let item1 = document.getElementById("input1");
item1.setAttribute("value", input1);

let input2 = prompt("Your second message:"); 

let item2 = document.getElementById("input2");
item2.setAttribute("value", input2);

item1.setAttribute("value", input2);
item2.setAttribute("value", input1);


/*
7. Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
		<body>
		  <main class="mainClass check item"> 	
		        <div id="myDiv">
           <p>First paragraph</p>           
         </div>
       </main> 
	    </body>
a)
*/


let bodyOne = document.body;
let mainOne = document.createElement("main");
let divOne = document.createElement("div");
let pOne = document.createElement("p");
bodyOne.prepend(mainOne);
mainOne.prepend(divOne);
divOne.prepend(pOne);
pOne.innerHTML = "First paragraph";
mainOne.className = "mainClass check item";
divOne.id = "myDiv";
console.log(document.body);


