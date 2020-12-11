//simple randome quote generator
//create a list of 5 quotes from anywhere you like
//There must be a function that selects randome quotes from the list to be printed to the console
//Create a program to log a random quote to the console

//Create a list of quotes
var quotes = [
  "Live, Laugh, Love.",
  "Make everyday a little less ordinary.",
  "Stay close to anything that makes you glad you're alive.",
  "expect nothing, appreciate everything",
  "You didn't come this far to only come this far"
];

//Generate a random number between 0 and the number of quotes
function genQuote(arr) {
  let rand = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML = quotes[rand];
};
//Create function that accepts a quote and prints it to the console
function addQuote() {
  let addInput = quotes;
  let add = document.getElementById("userinput").value;
  if(add == ""){
      alert("Please add a quote!");
  }
  else{
    addInput.push(add);
    document.getElementById("userinput").value = "";
  };

};