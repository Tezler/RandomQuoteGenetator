// autoGenerateQuote runs the printQuote function at 30 second intervals.
// quotes copy is a splice of the original object array - used for preventing repeating.
// randomNumber contains the number generated within the function getRandomQuote
// quoteOutput stores the values that are going to be returned in getRandomQuote and printed.
// bgColor contains the color that the background will change to once the printQuote function is activated.
var autoGenerateQuote = window.setInterval(printQuote, 30000);
var quotesCopy = quotes.slice(0, quotes.length);
var randomNumber;
var quoteOutput;
var backgroundColor = ['red','blue','green','purple','orange', 'DarkRed', 'DarkOrange','BlueViolet', 'Indigo', 'MediumBlue'];
var bgColor;

// event listener to respond to "Show another quote" button clicks.
// when user clicks anywhere on the button, the "printQuote" function is called.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// runs the printQuote function on page load.
document.getElementById("body").addEventListener("load", printQuote, true);

// Prints a quote to the page & changes background color by calling the gerRandomQuote function and returning the value.
// added log to confirm that quotes are not repeating(project requirement) and a reset for the autoGenerateQuote interval.
function printQuote() {
  var grabQuote = getRandomQuote();
  quoteOutput = '<p class="quote">' + grabQuote[0].quote + '</p>';
  quoteOutput += '<p class="source">' + grabQuote[0].source + '<span class="citation">' + grabQuote[0].citation + '</span>' + '<span class="year">' + grabQuote[0].year + '</span></p>';
  quoteOutput += '<p><span class="tags">' + grabQuote[0].tags + '</span></p>';
  bgColor = backgroundColor[getRandomNumber(backgroundColor.length)];
  document.getElementById('quote-box').innerHTML = quoteOutput;
  document.getElementById("body").style.backgroundColor = getRandomColor();
  document.getElementById("loadQuote").style.backgroundColor = document.getElementById("body").style.backgroundColor;
  clearInterval(autoGenerateQuote);
  autoGenerateQuote = window.setInterval(printQuote, 30000);
  console.log(quoteOutput);
}

// Generates a random number then returns the value.
function getRandomNumber(prop) {
  randomNumber = Math.floor((Math.random() * prop) + 0);
  return randomNumber;
}

// Generates a random color then returns it for printQuote to use for background color.
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/*Splices an object from the original object array, stores it in a new variable then returns it
for printQuote to use. Added a check to refill the new object onces it becomes empty*/
function getRandomQuote() {
  if (quotesCopy.length == 0) {
    quotesCopy = quotes.slice(0, quotes.length);
  }
    getRandomNumber(quotesCopy.length);
      var container = quotesCopy.splice(randomNumber,1);
    return container;
}
