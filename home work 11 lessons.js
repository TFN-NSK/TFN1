let a = new Set()
a.add('e')
a.add('r')
a.add('i')
a.add('k')
a.add('t')
a.add('h')
a.add('e')
a.add('b')
a.add('e')
a.add('s')
a.add('t')
console.log(a);

let btn = document.querySelector('.btn')
let qwe = document.querySelector('.qwe')
let b = document.querySelector('.input.value')


btn.onclick = function one(){
    console.log(a.has('r')); 
}

// let c = [1,2,3,4,5,6,7,8,9,10]
// console.log(c);

// btn.onclick = function two(){
//     for (let key of c){
//         console.log(key);
//     }
// }
    