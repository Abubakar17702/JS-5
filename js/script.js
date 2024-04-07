// Original Text
let originalText =
  "I love my country Pakistan. <br/> I love my city Faisalabad. <br/> I love my Homeland. ";
   document.getElementById("originalStat").innerHTML = originalText;

// Cities
let cities = [
  "Faisalabad",
  "Lahore",
  "Karachi",
  "Islamabad",
  "Burewala",
  "Shiekupura",
  " Kashmir",
];

// output empty
function outputEmpty(){
document.getElementById("output").innerHTML = ""
}

// input empty
function inputEmpty(){
document.getElementById("inputType").value = ""
}
// Main Function
function clearAll(){
  outputEmpty()
  inputEmpty()
}


// input function
function getInput(){
  return document.getElementById("inputType").value 
}


// LowerCase
function LowerCase() {
  clearAll();
  let lowerText = originalText.toLowerCase();
  document.getElementById("output").innerHTML = lowerText;
}

// UpperrCase
function UpperCase() {
  clearAll();
  let UpperText = originalText.toUpperCase();
  document.getElementById("output").innerHTML = UpperText;
}

// Capitalize
function capitalText() {
  clearAll();
  // let Capitalize = originalText
  let Capitalize ='<span style="text-transform: capitalize;"> ' + originalText + '</span>';
  // document.getElementById("output").style.textTransform = "Capitalize";
  document.getElementById("output").innerHTML = Capitalize;
}

// Better Formating
function betterFormat(){
  let betterFormat = getInput()
  if(!betterFormat){
    alert("Please Enter Your Name")
    return
  }
  format = betterFormat.toLowerCase()
  document.getElementById("output").style.textTransform = "Capitalize"
  document.getElementById("output").innerHTML = format
}

// Print All Cities
function printCities(){
  clearAll();
  for(let i=0; i< cities.length; i++){
  document.getElementById("output").innerHTML +=  cities[i] + "<br/>"
}
}

// Add City
function addCity(){
 let cityName = getInput();
if(!cityName){
alert("Please Enter City Name")
return
}
let city = cityName.toLowerCase()
cities.push(city)
document.getElementById("output").innerHTML =  '<span style="color: green;"> "'+city+'" </span> is added in the list'
document.getElementById("output").style.textTransform= "capitalize"
}