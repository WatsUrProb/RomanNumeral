//the elements
const numberInput= document.getElementById('number');
const convertButton= document.getElementById('convert-btn');
const result= document.getElementById('output');
const section= document.getElementById('animation-box');
const resetButton= document.getElementById('trial-btn');
//we shall split the roman numerals into sperates strings before joining them together
let romanArray=[];
//Object for the simple numbers
let simpleNumbers={
}

let digitArr=[1,4,5,9,10,40,50,90,100,400,500,900,1000].reverse();
let romanNumerals=["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"].reverse();

//main function
function convertHTML(){
  let inputValue =parseInt(numberInput.value);
console.log(inputValue)
if(!inputValue){
  result.innerHTML="Please enter a valid number!";
   reset();
  return
}else if(inputValue>3999){
   result.innerHTML="Please enter a number less than or equal to 3999";
   reset()
   return
}
else if(inputValue<0){
   result.innerHTML="Please enter a number greater than or equal to 1";
      reset()
   return
}else{
  myFunction(inputValue);
let fullRoman=romanArray.join("")
result.innerHTML =`<strong>${fullRoman}</strong`;
}
reset()
}
convertButton.addEventListener("click",convertHTML);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    convertHTML();
    return;
  }
});




//main recussion Function
function myFunction(newInput){
  if(newInput<=0){return}
 
  let index=digitArr.findIndex(element=>element<=newInput)
let biggestNo= digitArr[index]
let newRoman = romanNumerals[index];
romanArray.push(newRoman);
let newNumber= newInput-biggestNo;
;
 const remainderOrNone = (newInput-biggestNo)=== 0 ? "":` Remainder is ${newInput-biggestNo}.
 `;
setTimeout(() => {
    section.innerHTML += `<p class="animation">${biggestNo} is removed from ${newInput}.${remainderOrNone} Hence, ${newRoman} is added! </p>`; // Append the Roman numeral to section
  }, 0);
myFunction(newNumber)

}
//reset Function
function reset(){
 numberInput.value="";
  romanArray=[];
  section.innerHTML=""
  
  }
  resetButton.addEventListener("click",reset)








  
