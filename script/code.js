let cnt = 0;
let num = 0;
let operator = "";
let results = document.querySelector('#output');


// display values on form
let result = document.querySelector('.show');
function display(value) {
    result.value += value;
} 


//clear everything on form

function clear() {
    result.value = "";
}
document.querySelector('#clear').addEventListener('click', ()=>{
    clear();
})


// backspace
document.querySelector('#del').addEventListener('click', ()=>{
    let output = result.value;
    result.value = output.slice(0, -1);
})





//Division
document.querySelector('#equal').addEventListener('click', ()=>{
    let num2 = result.value;
    switch(operator){
        case '/':
            result.value = 
            eval(`${num}/${num2}`).toFixed(2)
        break;
    }
})



document.querySelector('#division').addEventListener('click', ()=>{
    num = result.value;
    operator = "/";
    clear();
})

//Addition

document.querySelector('#equal').addEventListener('click', ()=>{
    let num2 = result.value;
    switch(operator){
        case '+':
            result.value = 
            eval(`${num}+${num2}`).toFixed(2)
            break;
        }
})



document.querySelector('#addition').addEventListener('click', ()=>{
    num = result.value;
    operator = "+";
    clear();
})




//Subtraction

document.querySelector('#equal').addEventListener('click', ()=>{
    let num2 = result.value;
    switch(operator){
        case '-':
            result.value = 
            eval(`${num}-${num2}`).toFixed(2)
        break;
    }
})



document.querySelector('#subtraction').addEventListener('click', ()=>{
    num = result.value;
    operator = "-";
    clear();
})



//Multiplication

document.querySelector('#equal').addEventListener('click', ()=>{
    let num2 = result.value;
    switch(operator){
        case '*':
            result.value = 
            eval(`${num}*${num2}`).toFixed(2)
            break;
        }
    })
    
    
    
document.querySelector('#multiplication').addEventListener('click', ()=>{
        num = result.value;
        operator = "*";
        clear();
    })
    

// modulus

document.querySelector('#equal').addEventListener('click', ()=>{
    let num2 = result.value;
    switch(operator){
        case '%':
            result.value = 
            eval(`${num}/100`).toFixed(2)
            break;
        }
    })
    
    
    
document.querySelector('#mod').addEventListener('click', ()=>{
    num = result.value;
    operator = "%";
    clear();
})

// document.querySelector('#dot').addEventListener('click', ()=>{
//     if (cnt>=1){
//     document.querySelector('#dot').disabled = true;
//     }else {
//         display('.');
//     }
//     cnt++;

// })






