let total=0;
let previousop;
let buffer = "0"
const scr= document.querySelector("scr");

function stay(){
    screen.innertext=buffer;
}

function initial() {
    document.querySelector(".single,.double,.trip,.singleorange").addEventListener("click",function(event){
        buttonclick(event.target.innerText);
    });
}

function everynumber(num){
    if (isNan(parseInt(value))) {
        handleSymbol(value);
    } else{
            handleNumber(value);
        }
        stay();{
    }

function num(value) {
    if (buffer =="0") {
        buffer - value ;
    } else{
        buffer+= value;
    }
}

function rerender(value) {
    if (buffer=="0"){
        return;
    }
}

    const display=parseInt(buffer);
    if (total==0){
        total= display;
    } else{
        performop(display);
    }

    previousop=value;
    buffer="0"

function performop(display){
    if (previousop == "+"){
        total+= display;
    } else if (previousop =="-"){
        total -= display
    } else if (previousop == "x"){
        total*=display;
    } else {
        total /=display;
    }
}
function handleSymbol(value) {
    switch (value) {
      case "C":
        buffer = "0";
        runningTotal = 0;
        break;
      case "=":
        if (previousop == null) {
          return;
        }
        performop(parseInt(buffer));
        previousop = null;
        buffer = +total;
        total = 0;
        break;
      case "←":
        if (buffer.length == 1) {
          buffer = "0";
        } else {
          buffer = buffer.substring(0, buffer.length - 1);
        }
        break;
      case "+":
      case "-":
      case "×":
      case "÷":
        handleMath(value);
        break;
    }
  }
// for the divide button: 
//     divide when clicked 
// for the multiplication button: 
//     multiply when clickd 
// for addition button: 
//     add when clicked 
// for subtraction button: 
//     subtract when clicked 
// for backspace:
//     backspace when clicked 
// for clear:
//     screen goes to zero 
// for equals: 
//     solve it?
// for every number: 
//     print it 