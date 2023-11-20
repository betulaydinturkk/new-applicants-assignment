const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let displayValue = '0';
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;  // last vslue transfer 
let output = "";
updateDisplay();

function updateDisplay() {
display.value = displayValue;  // assign 0

}

debugger;
keys.addEventListener('click', function(e) {

    const element = e.target;  //click the button
    const value = element.value;
    if(!element.matches('button')) return;   // if isn't button do not click it
    
      switch(value){
          case '+':
          case '-':
          case '*':
          case '/':
          case '=':
    
          handleOperator(value);
          break;
    
          case '.': 
              inputDecimal();
              break;
          case 'del':
               del();
               break;
          case 'clear':
              clear();
              break;
          default:
    
          inputNumber(value);
    
      }
    
    updateDisplay();

});

debugger;
function handleOperator(nextOperator){   

    const value = parseFloat(displayValue);  // decimal

    if(operator && waitingForSecondValue){      // update when new operator is entered
        operator = nextOperator;
        return;
    }

    if(firstValue === null) {
        firstValue = value;

    }

    else if(operator) {

        const result = calculate(firstValue , value, operator);// value görünen değer
     
        displayValue = `${parseFloat(result.toFixed(7))}`;
        firstValue = result;
    }

    waitingForSecondValue = true;
    operator = nextOperator;

    console.log(displayValue, firstValue, operator, waitingForSecondValue);   // 20  10  +  false 

}

debugger;
function calculate(first, second, operator){  //all calculations

    if(operator === '+'){
        return first +  second;
    }
    else if(operator === '-'){
        return first - second;
    }
    else if(operator === '*'){
        return first * second;
    }
    else if(operator === '/'){
        return first / second;
    }
    return second;
  
}

debugger;
function inputNumber(num){

    if(waitingForSecondValue){    // when the second value entered ,first value delete
        displayValue = num;   
        waitingForSecondValue = false;
    }

    else {
         displayValue = displayValue === '0' ? num : displayValue + num;   // addition with 0
    }
    screen.num;
    console.log(displayValue, firstValue, operator, waitingForSecondValue);   // 20  10  +  false 
}                                                                             // if click the plus trun the f-true or new process


function inputDecimal(){      //calculation of decimal values
    if(!displayValue.includes('.')) {
        displayValue += '.';
    }
}

function clear(){   //button clear
    displayValue = '0';
}

function del(){   //button delete
    displayValue = displayValue.toString().slice(0,-1);
    screen.displayValue;
}


