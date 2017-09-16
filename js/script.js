// autoGenerateQuote runs the printQuote function at 30 second intervals.
// quotes copy is a splice of the original object array - used for preventing repeating.
// randomNumber contains the number generated within the function getRandomQuote
// quoteOutput stores the values that are going to be returned in getRandomQuote and printed.
// bgColor contains the color that the background will change to once the printQuote function is activated.
var autoGenerateQuote = window.setInterval(printQuote, 30000);
var quotesCopy = quotes.slice(0, quotes.length);
var randomNumber;
var quoteOutput;
var bgColor;

// event listener to respond to "Show another quote" button clicks.
// when user clicks anywhere on the button, the "printQuote" function is called.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Prints a quote to the page & changes background color by calling the gerRandomQuote function and returning the value.
// added log to confirm that quotes are not repeating and a reset for the autoGenerateQuote interval.
function printQuote() {
  document.getElementById('quote-box').innerHTML = getRandomQuote();
  document.getElementById("body").style.backgroundColor = bgColor;
  document.getElementById("loadQuote").style.backgroundColor = bgColor;
  clearInterval(autoGenerateQuote);
  autoGenerateQuote = window.setInterval(printQuote, 30000);
  console.log(quoteOutput);
}

// Generates a random number then returns the value.
function getRandomNumber(prop) {
  randomNumber = Math.floor((Math.random() * prop) + 0);
  return randomNumber;
}

// Generates a random quote and organizes it into a displayable output before returning the value
// it pulls a random value from quoteCopy - added a check to refill it once it becomes empty
function getRandomQuote() {
  if (quotesCopy.length == 0) {
    quotesCopy = quotes.slice(0, quotes.length);
  }
    getRandomNumber(quotesCopy.length);
      var container = quotesCopy.splice(randomNumber,1);
      quoteOutput = '<p class="quote">' + container[0].quote + '</p>';
      quoteOutput += '<p class="source">' + container[0].source + '<span class="citation">' + container[0].citation + '</span>' + '<span class="year">' + container[0].year + '</span></p>';
      quoteOutput += '<p><span class="tags">' + container[0].tags + '</span></p>';
      bgColor = backgroundColor[getRandomNumber(backgroundColor.length)];
    return quoteOutput;
}
