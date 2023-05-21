let operator = "";
let firstOp = 0;
// display values on form
let result = document.querySelector('.display');
function display(value) {
    result.value += value;
} 




function clear() {
    result.value = "";
}

// Clear button
document.querySelector('#clear')
.addEventListener('click', ()=>{
    clear();
})


// backspace
document.querySelector('#del').
addEventListener('click', ()=>{
    let output = result.value;
    result.value = output.slice(0, -1);
})


// equal
document.querySelector('#division')
.addEventListener('click', ()=>{
    firstOp = result.value;
    operator = "/";
    clear();
})


