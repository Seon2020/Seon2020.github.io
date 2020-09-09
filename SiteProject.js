/* Convert human age to cat age.
Cat Years:
1 human year = 15 cat years
2 human years = 24 cat years (+9 for second year)
Each additional human year is 4 cat years
Reference:
https://www.almanac.com/content/cat-age-chart-cat-years-human-years
*/
//Store element that holds the cat age output in a variable
var catAge = document.getElementById('catAge');
//Store text input where user enters age in a variable
var age = document.getElementById('age');
//Store form element in a variable
var form = document.getElementById('form');
//Add event listener to form element to listen for submit event
form.addEventListener('submit', calculateAge);

//Create function to convert human age to cat age
function calculateAge() {
  //Log a message to console 
  console.log('Calculating...');
  //If input is less than 1, empty, or NaN, populate alert 
  if(age.value <= 0.99 || age.value == "" || isNaN(age.value)) {
    alert("Please input a number that is 1 or greater.");
  //If age entered is 1, display cat age of 15
  } else if (age.value == 1) {
    catAge.value = 15;
  /*If age is greater than 1 but less than 2, add 15 after subtracting it by 1 and multiplying by 9 (this allows the converter to accurately convert numbers w/ decimals)*/ 
  } else if (age.value > 1 && age.value < 2){
    catAge.value = 15 + ((age.value-1) * 9);
  //If age entered is 2, display cat age of 24
  } else if (age.value == 2) {
    catAge.value = 24
  /*If age is greater than 2, add 24 after subtracting it by 2 and multiplying by 4 (again, this allows decimal inputs)*/
  } else if (age.value > 2){
    catAge.value = (24) + ((age.value - 2) * 4);
  }
  //Set input and output in local storage 
  window.localStorage.setItem('catAge', catAge.value);
  window.localStorage.setItem('age', age.value);
}

//Get input and output from local storage
  age.value = localStorage.getItem('age');
  catAge.value = localStorage.getItem('catAge');

