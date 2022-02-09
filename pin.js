function getPin(){
    //generate random pin
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4) {
        return pin ;
    }
    else { 
         getPin();
    }
        
    
}
function generatePin(){
   const pin = getPin();
   //Display random pin 
    document.getElementById('display-pin').value = pin;

}
//click on number & display it in input area
document.getElementById('key-pad').addEventListener('click',function(event){
const number =event.target.innerText;
const calcInput =document.getElementById('typed-number');
if(isNaN(number)){
    //checking 'number' is a vaild number.
    if(number=='C'){
        // press 'c' clear input field
        calcInput.value='';
    }
}
else{
//add press number to input field exiting number
const previouNumber=calcInput.value;
const newCalc =previouNumber + number;
calcInput.value = newCalc;
}
})
//verify pin
document.getElementById('submit-btn').addEventListener('click',function(){
 const pin = document.getElementById('display-pin').value; //get pin value
 const typedNumber=document.getElementById('typed-number').value; // get typed number value

 document.getElementById('notify-success').style.display="none"; //

 document.getElementById('notify-fail').style.display="none";//

 if(pin==typedNumber){
    //display notify success
    document.getElementById('notify-success').style.display="block";
 }
 else{
     //disply notify fail
    document.getElementById('notify-fail').style.display="block";
 }
})
   

