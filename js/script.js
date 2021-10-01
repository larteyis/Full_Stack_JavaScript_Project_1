/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


  //Creating a "quote" array and adding data to "quote" object
const quotes =[
  {quote: "Keep smiling, because life is a beautiful thing and there's so much to smile about.", source: "Marilyn Monroe", citation: "Movie", year: "1958"},
  {quote: "Life is a long lesson in humility.", source: "James M. Barrie" },
  {quote: "In three words I can sum up everything I've learned about life: it goes on.", source: "Robert Frost"},
  {quote: "Life is made of ever so many partings welded together.", source: "Charles Dickens"},
  {quote: "Life is trying things to see if they work.", source: "Ray Bradbury"}
];

//console.log(quotes); // Test data array


// Creating a "getRandomQuote" function
function getRandomQuote (arr) {
  var random = Math.floor(Math.random() * quotes.length); // generate random numbers based on the length of quotes
  for (var i = 0; i < arr.length; i++) { 
  var randomQuotes = arr[random];  
} // loop randomQuotes
  return randomQuotes; 
}
//console.log(getRandomQuote(quotes)); //Test function 


// Create a "printQuote" function
function printQuote () {
  let outputRandomQuote = (getRandomQuote(quotes));//call "getRandomQuote" function
  
  let html = `<p class="quote"> ${outputRandomQuote.quote} </p>
  <p class="source"> ${outputRandomQuote.source}`; //html string to store variables
  
  if (outputRandomQuote["citation"]) {
    html += `<span class="citation"> ${outputRandomQuote.citation} </span>`;//html string to check for "citation"
  };
  if (outputRandomQuote["year"]) { 
    html += `<span class="year"> ${outputRandomQuote.year} </span>`;//html string to check for "year"
    } 
    `</p>`;
    document.getElementById("quote-box").innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);