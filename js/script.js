// randomNumber contains the number generated within the function getRandomQuote
// quoteString, tagString and sourceString contain the values that printQuote will organize into a string.
// bgColor contains the color that the background will change to once the printQuote function is activated.
// autoGenerateQuote runs the printQuote function at 30 second intervals
var autoGenerateQuote = window.setInterval(printQuote, 30000);
var quotesCopy = quotes.slice(0, quotes.length);
var randomNumber;
var quoteString;
var sourceString;
var tagString;
var bgColor;

// event listener to responds when "Show another quote" button is clicked
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// this function calls getRandomQuote and grabes the values generated from the program.
// puts together a string using the values then prints them to the document.
// log is to make sure the quotes are not repeated until the loop has run fully.
function printQuote() {
  getRandomQuote();
  var quoteOutput = '<p class="quote">' + quoteString + '<span class = "tags"></span></p>';
  quoteOutput += '<p class="source">' + sourceString + '</p>';
  quoteOutput += '<p class="tags">' + '[' + tagString + ']' + '</p>';
  document.getElementById('quote-box').innerHTML = quoteOutput;
  document.getElementById("body").style.backgroundColor = bgColor;
  document.getElementById("loadQuote").style.backgroundColor = bgColor;
  clearTimeout(autoGenerateQuote);
  console.log(quoteOutput);
}


// function that generates a random number
function getRandomNumber(prop) {
  randomNumber = Math.floor((Math.random() * prop) + 0);
  return randomNumber;
}

// Function that Generates a random quote
// slices the original object array to a new one
// each time the loop runs it splices an item from the new object
// the spliced items are grabbed and pushed to the appropriate values
// added a check that refills the sliced object array once its empty
// reruns the program once the object array has been refilled
// each time the program is ran, it clears the autoGenerateQuote interval
function getRandomQuote() {
  if (quotesCopy.length == 0) {
    quotesCopy = quotes.slice(0, quotes.length);
    console.log("the object array has been refilled.")
    getRandomQuote();
  } else {
    getRandomNumber(quotesCopy.length);
    var container = quotesCopy.splice(randomNumber,1);
    tagString = container[0].tags;
    sourceString = container[0].source;
    quoteString = container[0].quote;
    bgColor = backgroundColor[getRandomNumber(backgroundColor.length)];
  }
}
