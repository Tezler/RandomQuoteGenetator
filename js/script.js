//Variables containing various bits of information
// randomNumber contains the number generated within the function getRandomQuote
// quoteString and sourceString containg the line of text that is going to be printed.
// bgColor contains the color that the background will change to once the printQuote function is activated.
var intervalID = window.setInterval(printQuote, 30000)
var randomNumber;
var quoteString;
var sourceString;
var bgColor;

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// function that prints the quote to the document.
/* first executes getRandomNumber then uses the values generated
to put together the lines of html that are going to be printed.*/
function printQuote() {
  getRandomQuote();
  var quoteOutput = '<p class="quote">' + quoteString + '</p>';
  quoteOutput += '<p class="source">' + sourceString + '</p>';
  document.getElementById('quote-box').innerHTML = quoteOutput;
  document.getElementById("body").style.backgroundColor = bgColor;
  console.log(quoteOutput);
}

// function that generates a random quote
// first generates a random number between 1 & 5 since we have 5 quotes.
// second it takes the number generated and selects that number within the array
function getRandomQuote() {
  randomNumber = Math.floor((Math.random() * 5) + 0);
  bgColor = backgroundColor[randomNumber];
  quoteString = quotes[randomNumber];
  quoteString = quoteString.quote;
  sourceString = quotes[randomNumber];
  sourceString = sourceString.source;
}
