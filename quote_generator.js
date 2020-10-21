var quotes = [{
    quote: "Don’t gain the world and lose your soul, wisdom is better than silver or gold",
    source: "Bob Marley",

},
{
    quote: "Lighten up, just enjoy life, smile more, laugh more, and don’t get so worked up about things",
    source: "Kenneth Branagh",

},
{
    quote: "Don’t cry because it’s over, smile because it happened",
    source: "Ludwig Jacobowski",

},
{
    quote: "Do stuff. Be clenched, curious. Not waiting for inspiration’s shove or society’s kiss on your forehead. Pay attention. It’s all about paying attention. Attention is vitality. It connects you with others. It makes you eager. Stay eager",
    source: "Susan Sontag",

}];

function getRandomQuote(array) {
  var quoteIndex = Math.floor(Math.random() * quotes.length);  
  for (var i = 0; i < array.length; i++) {
    var randomQuote = array[quoteIndex];
  } 
  return randomQuote;
}

  for (var i = 0; i < array.length; i++) { 
// array.length rather than the actual quotes variable makes this function a little bit more flexible

    var randomQuote = array[quoteIndex]; 
    // Random quote variable with the index set to your random number variable 
  } 
  return randomQuote; // Returns random quote variable 
}

// Passes quotes array as an argument and stores result of function in variable
var result = getRandomQuote(quotes); 


console.log(result);
