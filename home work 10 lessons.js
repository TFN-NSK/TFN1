let root =  document.querySelector('.root')
console.log(root);

fetch('https://randomuser.me/api')
.then(function(response) {return response.json()})
.then(function(data){
    console.log(data);
    // console.log(data.results[0].name.first);
    // console.log(data.results[0].email);
    // console.log(data.results[0].phone);
   root.innerHTML +=`<img src = ${data.results[0].picture.large}>`
   root.innerHTML +=`<div>
   ${data.results[0].name.first} 
   ${data.results[0].name.last} 
   ${data.results[0].phone} 
   ${data.results[0].email}
   </div> `
})
fetch('https://randomuser.me/api')
.then(function(response) {return response.json()})
.then(function(data){
    console.log(data);
    // console.log(data.results[0].name.first);
    // console.log(data.results[0].email);
    // console.log(data.results[0].phone);
   root.innerHTML +=`<img src = ${data.results[0].picture.large}>`
   root.innerHTML +=`<div>
   ${data.results[0].name.first} 
   ${data.results[0].name.last} 
   ${data.results[0].phone} 
   ${data.results[0].email}
   </div> `
})
fetch('https://randomuser.me/api')
.then(function(response) {return response.json()})
.then(function(data){
    console.log(data);
    // console.log(data.results[0].name.first);
    // console.log(data.results[0].email);
    // console.log(data.results[0].phone);
   root.innerHTML +=`<img src = ${data.results[0].picture.large}>`
   root.innerHTML +=`<div>
   ${data.results[0].name.first} 
   ${data.results[0].name.last} 
   ${data.results[0].phone} 
   ${data.results[0].email}
   </div> `
})