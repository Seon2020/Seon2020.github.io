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
//Store location of calculate button in element
var submitAge = document.getElementById('submit');
//Add event listener to calculate button to listen for click event
submitAge.addEventListener('click', calculateAge);

// Create function to convert human age to cat age
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
    catAge.value = 24;
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

//Create array of cat breeds and their abouts
const arrayOfCatBreeds = [
  {'breed' : 'Siamese',
  'about' : 'These cats are known to have blue eyes and be extremely vocal\. They tend to be very affectionate and playful as well\!'
  },
  {'breed' : 'Persian',
  'about' : 'These beauties with smushed faces have long fur coats and come in many colors\. They need lots of grooming and checkups at the vet\!'
  },
  {'breed' : 'Maine Coon',
  'about' : 'This is the official cat of Maine\. These cats have long coats and make excellent hunters\!'
  },
  {'breed' : 'Ragdoll',
  'about' : 'This breed gets their name from how they tend to go limp when picked up\! They have long coats and have loyalty reminiscent of dogs\!'
  },
  {'breed' : 'Bengal',
  'about' : 'These cats have markings that\'d make you think they belong in a jungle\! They are very talkative and need to be played with often\.'
  },
  {'breed' : 'Abyssinian',
  'about' : 'These cats boast a red\/orange coat and are often known for their intelligence and curiosity\.'
  },
  {'breed' : 'Oriental Shorthair',
  'about' : 'These cats usually have green eyes and have coats that can come in many different colors\. They are known for being very athletic\!'
  },
  {'breed' : 'Sphynx',
  'about' : 'These social and active cats are known for having no fur\! They are said to act a lot like dogs\.'
  },
  {'breed' : 'Devon Rex',
  'about' : 'These cats are known for having very large ears and a wavy coat\! They are also extremely playful\.'
  },
  {'breed' : 'American Shorthair',
  'about' : 'This American breed is very intelligent and typically has a round face\. They usually have short ears as well\.'
  },
  {'breed' : 'Scottish Fold',
  'about' : 'These cats are known for having folded ears\! They also tend to be very adaptable to new environments\.'
  },
  {'breed' : 'Exotic',
  'about' : 'This breed is very similar to Persians, but they require less grooming. They are known to be very easy\-going\.'
  },
  {'breed': 'British Shorthair',
  'about' : 'These cats are known to have dense coats and be very affectionate with their owners\!'
  },
  {'breed' : 'Russian Blue',
  'about' : 'These cats are known for having dense gray coats and being extremely loyal to their owners\.'
  },
];

//Store location of generate button in element
var generate = document.getElementById('generate');
//Add event listener to generate button to listen for click event
generate.addEventListener('click', generateBreed);

//Function called when generate button is clicked
function generateBreed() {
  //store the p elements in variables 
  var breedContent = document.getElementById('breed');
  var aboutContent = document.getElementById('aboutBreed');
  //Remove the hidden class so content can appear when user clicks generate
  breedContent.classList.remove('hidden');
  aboutContent.classList.remove('hidden');
  //Store random number multiplied by array length in variable
  const random = Number.parseInt(Math.random()*arrayOfCatBreeds.length);
  //Get p element with id of breed and set text content
  document.querySelector('#breed').textContent = `${arrayOfCatBreeds[random].breed}:`;
  //Get p element with id of aboutBreed and set text content
  document.querySelector('#aboutBreed').textContent = `${arrayOfCatBreeds[random].about}`;
}

//Store ul in a variable 
var list = document.getElementById('breedList');
//Store the add button in a variable
var addBreed = document.getElementById('addBreed');
//Add an event listener to the add button to listen for click event
addBreed.addEventListener('click', addBreedToList);

//define addBreedToList function
function addBreedToList() {
  //Create new li element
  var item = document.createElement('li');
  //Store the text input in a variable
  var textInput = document.getElementById('favoriteBreeds');
  //if nothing was typed in, initiate alert 
  if (textInput.value === ""){
    alert("Please enter a breed name to add to the list.");
  //else, append the li element to the ul
  } else {
  list.appendChild(item);
  //Set the value of the li to what the user has entered
  item.innerHTML = textInput.value;
  }
  //add text input value to listOfCatA
  listOfCatA.push(textInput.value);
  //Set item in local storage as string.
  localStorage.setItem('listCat',JSON.stringify(listOfCatA));
  //Set text input value back to blank for next entry
  textInput.value = "";
}

//Store the clear button in a variable
var clear = document.getElementById('delete');
//Add event listener to the clear button to listen for click event
clear.addEventListener('click', clearBreeds);

//define the clearBreeds function
function clearBreeds() {
  //Store all li elements in a variable
  var item = document.getElementsByTagName('li');
  //while there are more than 0 items in the listm remove the first li child
  while(item.length > 0) {
    list.removeChild(item[0]);
  }
  //Clear the LS when the clear button was clicked
  localStorage.setItem('listCat', '');
  //reload to make the clear immedietly permanent 
  location.reload();
}

//get item from local storage and store in 1stStr
let lstStr=localStorage.getItem('listCat');
//declare listOfCatA array
let listOfCatA=[];
//if 1stStr is not equal to null
if(lstStr!=null) {
  //set listOfCatA equal to 1stStr (after using JSON parse method)
  listOfCatA=JSON.parse(lstStr);
  //If length of array is greater than 0
  if(listOfCatA.length > 0) {
    //for each item, initiate function
    listOfCatA.forEach(function(key){
      //create the li
      var item = document.createElement('li');
      //append li to ul
      list.appendChild(item);
      //Set the value of the li to what the user had entered
      item.innerHTML = key;
    })
  }
}
