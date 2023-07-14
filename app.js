'use script'
const one=document.querySelector('.one')
const zero=document.querySelector('.zero')
const two=document.querySelector('.two')
const three=document.querySelector('.three')
const four=document.querySelector('.four')
const five=document.querySelector('.five')
const six=document.querySelector('.six')
const seven=document.querySelector('.seven')
const eight=document.querySelector('.eight')
const nine=document.querySelector('.nine')

one.addEventListener('click',()=>{
    appendValue('1')
})
two.addEventListener('click',()=>{
    appendValue('2')
})
three.addEventListener('click',()=>{
    appendValue('3')
})
four.addEventListener('click',()=>{
    appendValue('4')
})
zero.addEventListener('click',()=>{
    appendValue('0')
})
five.addEventListener('click',()=>{
    appendValue('5')
})
six.addEventListener('click',()=>{
    appendValue('6')
})
seven.addEventListener('click',()=>{
    appendValue('7')
})
eight.addEventListener('click',()=>{
    appendValue('8')
})
nine.addEventListener('click',()=>{
    appendValue('9')
})

let expression=''

let appendValue=(value)=> {
    expression += value;
    document.getElementById('display').value = expression;
  }
