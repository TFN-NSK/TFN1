// console.log(2024)
// console.log(20+'22');
// console.log('Hello TFN Novosibirsk');
// console.log('Good '+'day');
// alert('Привет посетитель')
// var a = 10; // устаревший способ создания переменной var
// console.log(a);
// let b = 20 // современный способ создания изменяемой переменной let
// console.log(b);
// const c = 30// современный способ создания не изменяемой переменной const
// console.log(c);
// a = 500
// console.log(a);
// b = 9000
// console.log(b);

// Числовой
// infinity математическая бесконечность больше любого числа
// console.log(Infinity);

// NaN вычислительная ошибка
// console.log(NaN);
// console.log('stroka'/20);
// console.log('stroka '+20);
// исключение 
// console.log((NaN **0));

// Bigint просто добавляем в конце букву n и снимаем ограничения для числа
// console.log(15465486745454645456n);

// Строковый

// let str1 = 'jojo'
// let str2 = "jojo 2"
// let str3 = `Anime ${2 +2 * 100} ${str1}`

// console.log(str1);
// console.log(str2);
// console.log(str3);

// bulean логический

// let check = true
// let offcheck = false
// console.log(check);
// console.log(offcheck);
// console.log(4 > 1);
// console.log(4 < 1);

// NULL
// console.log(null);

// typeof

// console.log(typeof undefined);
// console.log(typeof 2);
// console.log(typeof 10n);
// console.log(typeof 'cat');
// console.log(typeof true);


// document.getElementById('first').innerHTML = 'Hello TFN'
// console.log(1);
// console.log(2);
// console.log(3);

// console.log(12 + ' декабрь');
// console.log('Добро'+ ' пожаловать'+' на'+' курс'+' Евгения');
// alert('20.03.2024')
// document.getElementById('first').innerHTML = 'Hello World'
// document.getElementById('first').innerHTML = 666
// document.getElementById('first').innerHTML = 'anime'

// let a = 'Evgenia'
// a = 123
// console.log(a);

// document.querySelector('#one').innerHTML = 666
// document.querySelector('p').innerHTML = 'Складская техника'

// let inp = document.querySelector('.text')
// let btn = document.querySelector('.btn')
// let div = document.querySelector('.qwe')



// btn.onclick = function(){
//     console.log('da');
//     let e = inp.value
//     div.innerHTML = e
//     inp.value = ''
// }

// let a = prompt('Сколько у тебя денег?')
// // console.log(a);

// if(a>100){
//     alert('yes')
// }
// else{
//     console.log('no')
// }

//lesson 4
// let a = prompt('В каком году вышел ходячий замок?')

// if(a<2004){
//     console.log('Рано');
// }
// else if (a>2005) {
//     console.log('Поздно')
// }
// else{
//     console.log('Верно');
// }
// let a = 10

// if (a==5){
//     console.log(1);
// }
// else if (a>6){
//     console.log(2);
// }
// else if (a>7) {
//     console.log(5);
// }
// else{
//     console.log(3);
// }

//? Тернарный оператор

// let day = prompt('Сколько дней в неделе?')
// let week;
// if(day == 7){
//     week = true;
// }
// else{
//     week = false;
// }
// console.log(week);

//            if      (    ) else  
// let week = day ==7 ? true        : false

// console.log(week);

// let number = 3;

// if(number > 0){
//     console.log('Число положительное');
// }
// else if(number < 0){
//     console.log('Число отрицательное');
// }
// else{
//     console.log('Число равно 0');
// }
// let age = 22;
// if(age>18){
//     console.log('доступ разрешен');
// }
// else{
//     console.log('доступ запрещен');
// }

// +
// -
// *
// /
// % Взятие остатка
// ** Возведение в степень

// console.log(2**2);
// let num = 20
// if (num % 2 ==0){
//     console.log('Число четное');
// }
// console.log(8**5);
// console.log(201%5);

// >
// <
// ==
// ===
// >=
// <=
// !=

// console.log(10!=10);
// console.log('qwe'>='qwe');
// console.log(true == 1);

// операторы ИЛИ ||

// True || True = TRUE
// False || True = TRUE
// TRUE || FALSE = TRUE
// FALSE || FALSE = FALSE

// let a = 10
// let b = 5
// if(a > 20 || b > 3){
//     console.log(555);
// }

// Оператор И &&

// True && ture = true
// false && true = false
// True && false = false
// False && false = false

// let a = 10
// let b = 5
// if(a > 1 && b > 3){
//     console.log(555);
// }

// Оператор отрицания (всегда выводит противоположные значения) !
// console.log(!false);

//ДЗ задача 1

// let a = 10
// let b = 7
// if(a + b > 15){
//     console.log('Yes');
// }
// else if (a + b <= 15) {
//     console.log('NO');
// }
// else{
//     console.log('NO');
// }

// ДЗ задача 2

// let a = 5
// let b = '5'
// if(a == b){
//     console.log('равны');
//     console.log(true);
// }
// else{
//     console.log(false);
// }

//for
// while


// 1 служебное слово для цикла
// 2 условие по аналогии с if, пока истинно, то тело цикла будет выполняться
// 3 тело цикла
// 3.1 это счетчик
// 1  полный проход цикла называется итерацией/ (итерация цикла)     2

// 1я итерация а=0
// 2я итерация а=1
// 3я итерация а=2
// 4я итерация а=3 и 3<3 выдает false и цикл прерывается
// let a = 0
// // 1     2
// while (a < 3) {
//     //3
//     console.log(a);
//     //
//     a+=1
// }
// Цикл до вайл (выполяется один раз несмотря на условия цикла)
//  let a = 10
 
//  do{
//     console.log(a);
//     a++
//  }while (a<10)
    
//Цикл for (необходимо называть переменную i)
//переменная   условие счетчик или шаг
// for(let i = 0;  i < 3;   i++){
//     console.log(i);
// }
// начало let i = 0
// условие i < 3
// счетчик i++
    
// break всегда прерывает цикл или функцию
// continue прерывает текущий цикл
// let i = 0
// for(let i = 100; i > 0; i--){
//     console.log(i);
// }

// ДЗ к 5му уроку
//Задача 1
// let i = 0
// for(let i = 1; i <= 50; i++){
//     console.log(i);
// }

// Задача 2
// let i = 0
// for(let i = 50; i >= 25; i--){
//     console.log(i);
// }

// Задача 3
// let i = 0
// for(let i = 2500; i <= 3000; i++){
//     if(i % 2 - 1 == 0){
//         console.log(i);
//     }
// }

// макет конструкции swith case
// switch(x){
//     case 'значение 1': // аналог if(x === 'значение 1')
//     ....
//     [break]
//     case 'значение 2': // аналог if(x === 'значение 2')
//     ....
//     [break]

//     default: // аналог else
//     ....
// }

// let a = 5 + 5;

// switch(a){
//     case 5:
//         alert(1)
//     case 10:
//         alert(2)
//         break
//     case 15:
//         alert(3)
//         break
//     default:
//         alert(4)    
// }

// // 
// let a ='1'
// let b = 0;
// console.log(typeof +a);

// switch(+a){
//     case b + 1:
//         alert('Выполнится, т.к.значение +а будет числовым что равно числовой единице')
//     break
//     default:
//         alert('Это не выполнится')
// }    
// Это группировка кейсов
// let a = 10

// switch(a){
//     case 12:
//         alert ('правильно')
//     break
//     case 5: // группируем два кейса
//     case 10:
//         alert('не правильно')
//         alert('Может тебе взять курс по матану')
//     break

//     default:
//         alert('результат кривой')
// }

// Проверка на равенство

// let arg = prompt('Введте число')

// switch(arg){
//     case '0':
//     case '1':
//         alert('Один или ноль')
//     break

//     case '2':
//         alert('Два')
//         break

//     case 3:   //всегда должно быть в таком же формате, т.е. '3'
//         alert('Никогда не выполнится')
//         break
//     default:
//         alert('Значение не известно')

// }

// Оператор нулевого слияния ??

// let firstname = null
// let lastname = null
// let nickname = 'Evgeniya123'

// // покажет первое определенное значение
// alert(firstname?? lastname?? nickname?? 'Anonim')

// оператор или возвращает первое истинное значение
// alert(firstname || lastname || nickname || 'Anonim')

// оператор или возвращает первое истинное значение
// оператор ?? возвращает первое значение, которое определено

// ДЗ к 6му уроку

// Задача 3

// let firstname = null
// let lastname = 'Isaeva'
// let nickname = 'Evgeniya123'

// alert(firstname ?? lastname?? nickname?? 'Anonim')

// Задача 2

// let arg = prompt('Введте число')

// switch(arg){
//     case '1':
//     case '2':
//     case '3':
//         alert('Зима')
//     break

//     case '4':
//     case '5':
//     case '6':
//         alert('Весна')
//     break
    
//     case '7':
//     case '8':
//     case '9':
//         alert('Лето')
//     break

//     case '10':
//     case '11':
//     case '12':
//         alert('Осень')
//     break
//     default:
//         alert('Значение не известно')

// }

// Задача 1

//  let b = prompt('введите число')

//  switch(b){
//         case '11':
//             alert ('мало')
//         break
//         case '17':
//             alert ('много')
//         break
//         case '15':
//             alert ('верно')
//         break
//     default:
//             alert('не подходит значение')
//         }
// let a = 15 + 5
// switch(a){
//     case '20':
//         alert ('правильно')
//         break

//     default:
//         alert('неправильно')
// }

// Функции
// Первый вариант вызова функции
// function one(){ 
//     //в фигурных скобках пишется тело функции
//     console.log('Наша первая функция');
//     // alert(123)
//     // let a = prompt('Сколько тебе лет?')
// }
// one()

// 2 вариант вызова функции это вызов по клику
// let btn = document.querySelector('.btn')

// function one(){
//     // console.log('Функция вызвана по клику');
//     let qwe = document.querySelector('.qwe')
//     let age = prompt('Сколько тебе лет?')
//     if(age < 18){
//        qwe.innerHTML = '<h1>Ты не достиг определенного возраста</h1>'
       
//     }else{
//         qwe.innerHTML = '<h1>Welcome</h1>'
//     }
// }
// btn.onclick = one

// function borsch(){
    //....некий ряд команд
//     Поставить кострюлю
//     Воды налить
//     Включить плиту
//     Положить мясо
//     Нарезать капусту
//     Нарезать картошку
// }

// function one(){
//     console.log('func');
//     return 666
// }

// let a = 8;
// let b = 9;

// function multiply(){
//     console.log(a * b);
//     return a * b
// }
// console.log(multiply() * 9);

// let a = prompt('Ваше имя?')
// function one(Tim){
//     let qwe = document.querySelector('.qwe')
//     qwe.innerHTML = 'Привет (Jeny)'
// }

// one(a)

// function one(x,y){
//     return x * y * 2
// }
// console.log(one(2,3));

// Анонимные функции
// let btn = document.querySelector('.btn')

// btn.onclick = function(){
//     console.log('Эта функция у нас анонимная');
// // }

//  функция declaration

// function one(){
// console.log(123);
// }
// one()

// функция expression

// let a = function(){
//     console.log(2);
// }
// a()

// // Стрелочная функция
// let b = () =>{
//     console.log(3);
// }
// b()

// Домашняя работа урок 7
//Задача 1
// let btn = document.querySelector('.btn')

// function one(){
//     let qwe = document.querySelector('.qwe')
//     let A = prompt('{Какая грузоподъемность тебе нужна?}')
//     if(A < 10){
//        qwe.innerHTML = '<h1>Позвони нам по телефону</h1>'
       
//     }else{
//         qwe.innerHTML = '<h1>Мы позвоним тебе</h1>'
//     }
//     }
// btn.onclick = one

// Задача 2
// let asd = document.querySelector('.asd')
// let a = input.value

// let btn = document.querySelector('.btn1')
// function one(){
    
// }
// btn.onclick = one
// let asd = document.querySelector('.asd')

// function calculate(op){
// let num1 = parseFloat(document.querySelector('.text1').value)
// let num2 = parseFloat(document.querySelector('.text2').value)
//     console.log(num1);
//     console.log(num2);
//     let resalt
//     switch(op){
//         case "+":
//             resalt = num1 + num2
//             console.log(resalt);
//             break
//         case"-":
//         resalt = num1 - num2
//         break
//         case"*":
//         resalt = num1 * num2
//         break
//         case"/":
//         if(num1 == 0){
//             alert("на ноль делить нельзя")
//             break
//         }
//         else{resalt = num1 / num2
//         break}  
//     }
//     asd.innerHTML = resalt
//     console.log(resalt);
//     }
    
// Lesson 8
// DOM

// const one = document.querySelector('.one')
// one.style.color = 'red'
// //CamelCase

// one.style.paddingLeft = '150px'
// console.log(one.style);
// one.classList.add('black')
// one.classList.add('textt')
// one.classList.remove('black')

// let btn = document.querySelector('.btn')
// let bodyy = document.querySelector('body')
// btn.onclick = function(){
//     this.classList.toggle('black')
//     bodyy.classList.toggle('bodyy')
// }
// const one = document.querySelector('.one')
// one.setAttribute('data-num, 6')

// let genre = document.querySelectorAll('.genre')
// let one = document.querySelector('.one')
// for(let i = 0; i< genre.leight; i++){
//     genre[i].onclick = function(){
//         let shop = document.querySelector('.shop').value
//         let price = this.getAttribute('data')
//        one.innerHTML = <h2>Цена ваших книг ${shop * price} рублей</h2>
//     }
// }
// Домашняя работа урок 8.
// Задача 1+2 
// const element = document.querySelector('.element')
// element.style.color = 'red'

// element.classList.add('text3')
// element.classList.add('black')
// element.classList.add('size')

// let button1 = document.querySelector('.button1')
// let black = document.querySelector('body')
// let size = document.querySelector('body')
// let text3 = document.querySelector('body')
// button1.onclick = function(op){
//         black.classList.add('black')
//         size.classList.add('size')
//         text3.classList.add('text3') 
//     }
// Задача 3
// const element = document.querySelector('.element')
// element.style.color = 'red'

// element.classList.add('text3')
// element.classList.add('black')
// element.classList.add('size')

// let button1 = document.querySelector('.button1')
// let black = document.querySelector('body')
// let size = document.querySelector('body')
// let text3 = document.querySelector('body')
// button1.onclick = function(op){
//         if (black.classList.remove('black')){
//             size.classList.add('size')
//             text3.classList.add('text3')
//         }
//         else if (size.classList.remove('size')){
//             text3.classList.add('text3')
//             black.classList.add('black')
//         }
//         else if (text3.classList.remove('text3')){
//             black.classList.add('black')
//             size.classList.add('size')
//         } 
//         else{text3.classList.add('text3');
//         black.classList.add('black'); size.classList.add('size')}

//     }

// 9 урок 
//Массивы

// let a = 'Роберт'
// let b = 'Братеон'
// let c = 60

//     //индексы 0      1        2
// let qwe = ['Роберт','Братеон',60,90,100,true]
// console.log(qwe[qwe.length-1]);

//массив с нулевым значением
// let e = []
// console.log(e);

// let a = [1,2,3,4,5,6,7,8]
// const b = ['a','b','c','d']

// console.log(a.lenght);
// a.push(9,10,12,13,14,)
// console.log(a.lenght);
// console.log(a);

// console.log(b);
// b.push('Evgesha')
// console.log(b);

// b.pop()
// b.splice(5,0,'Ничего себе это работает')
// console.log(b);

// let a = [1,2,3,4,5]

// let b = [
//     [1,2,3,],
//     [4,5,6],
//     [7,8,9]
// ]
// // console.log(b);
// // // console.log(b[0][0]);

// for(let i = 0; i<b.length; i++){
//     // console.log(b[i]);
//     let c = b[i] // c - массив [1,2,3]
//     for(let k = 0; c.length> k;k++){
//         console.log(c[k]);
//     }
// // }
// for(let i = 0; i<b.length; i++){
//         for(let j = 0; b[i].length> j;j++){
//             console.log(b[i][j]);
//         }
//     }
//Домашнее задание к 9-му уроку.

// Задача 1

// let button1 = document.querySelector('.button1')
// let resalt = [15,12,1984,'Isaeva','Evgenia',11,24,25,17,true]
// button1.onclick = function(){
//     resalt.innerHTML = (resalt[5])
//     console.log(resalt[5]);
// }
// Задача 2

// let btn5 = document.querySelector('.btn5')
// let resalt = [1,2,3,4,5,6,7,8,9,10]
// // console.log(resalt);

// btn5.onclick = function(){
//     resalt.splice(1,1)
//     console.log(resalt);
// }

//Задача 4

// let X = [
//         [1,2,3,],
//         [4,5,6],
//         [7,8,9]
//     ]
//     btn5.onclick = function(){
//         resalt = X.reverse()
//         console.log(resalt);
//         }
// Урок 10
let root =  document.querySelector('.root')
fetch('https://randomuser.me/api')
.then(function(response) {return response.json()})
.then(function(data){
    console.log(data);
    // console.log(data.results[0].name.first);
    // console.log(data.results[0].email);
    // console.log(data.results[0].phone);
   root.innerHTML +=`<img src = ${data.results[0].picture.large}>`
   root.innerHTML +=`<div>
   ${data.results[0].name.first} ${data.results[0].name.last}
   </div> `
})
