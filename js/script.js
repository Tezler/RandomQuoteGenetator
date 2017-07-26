//Variables containing various bits of information
// randomNumber contains the number generated within the function getRandomQuote
// quoteString and sourceString containg the line of text that is going to be printed.
// bgColor contains the color that the background will change to once the printQuote function is activated.
var intervalID = window.setInterval(printQuote, 30000)
var maxNumber = quotes.length;
var previousNumbers = [];
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
  var quoteOutput = '<p class="quote">' + quoteString + '<span class = "tags"></span></p>';
  quoteOutput += '<p class="source">' + sourceString + '</p>';
  document.getElementById('quote-box').innerHTML = quoteOutput;
  document.getElementById("body").style.backgroundColor = bgColor;
  document.getElementById("loadQuote").style.backgroundColor = bgColor;
  console.log(quoteOutput);
}

// function that generates a random number and adds a check to see if that number has been displayed already.
//If it has not been displayed, it pushes the value. If it has,
// it generates more random numbers until we get one that hasn't.
// once the length of the outputted messages reach the number of quotes it resets so that the random script keeps running.
function getRandomQuote() {
  if (previousNumbers.length != maxNumber) {
    do {
    randomNumber = Math.floor((Math.random() * maxNumber) + 0);
  }
  while (previousNumbers.indexOf(randomNumber) > -1);
  previousNumbers.push(randomNumber);
  console.log(randomNumber);
} else if (previousNumbers.length = 4) {
  previousNumbers = [];
}
  bgColor = backgroundColor[randomNumber];
  quoteString = quotes[randomNumber].quote;
  sourceString = quotes[randomNumber].source;
}
