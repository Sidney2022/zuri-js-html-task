
const form = document.getElementById('form')
const username = document.querySelector('#username')
const country = document.querySelector('#country')
const height = document.querySelector('#height')
const view1 = document.querySelector('#view1')
const view2 = document.querySelector('#view2')
const view3 = document.querySelector('#view3')


// method1
form.addEventListener('submit', (evt) => {
       evt.preventDefault();
       view1.innerHTML = ` My name is ${username.value}`
       view2.innerHTML = `I am from ${country.value}`
       view3.innerHTML = `I am ${height.value}ft tall`
   });


//    method2
// username = 'Sidney'
// country = 'Nigeria'
// height = '7ft'
// view1.innerHTML = ` My name is ${username.value}`
// view2.innerHTML = `I am from ${country.value}`
// view3.innerHTML = `I am ${height.value} tall`