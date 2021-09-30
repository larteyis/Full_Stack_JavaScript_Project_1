/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes =[
  {quote: "Keep smiling, because life is a beautiful thing and there's so much to smile about.", source: "Marilyn Monroe", citation: "Movie", year: "1958"},
  {quote: "Life is a long lesson in humility.", source: "James M. Barrie" },
  {quote: "In three words I can sum up everything I've learned about life: it goes on.", source: "Robert Frost"},
  {quote: "Life is made of ever so many partings welded together.", source: "Charles Dickens"},
  {quote: "Life is trying things to see if they work.", source: "Ray Bradbury"}
];

//console.log(quotes);




/***
 * `getRandomQuote` function
***/
function getRandomQuote (arr) {
        var random = Math.floor(Math.random() * quotes.length);
        for (var i = 0; i < arr.length; i++) {
        var randomQuotes = arr[random];  
  }
        return randomQuotes;
}

//console.log(getRandomQuote(quotes));

/***
 * `printQuote` function
***/


function printQuote () {
  let outputRandomQuote = (getRandomQuote(quotes));
  let html = `<p class="quote"> ${outputRandomQuote.quote} </p>
  <p class="source"> ${outputRandomQuote.source}; 
  
  if ("citation" in quotes) {
    html += <span class="citation"> ${outputRandomQuote.citation} </span>;
  };
  if ("year" in quotes) { 
    html += <span class="year"> ${outputRandomQuote.year} </span>;
    } 
    </p>`;
    document.getElementById("quote-box").innerHTML = html;
}

printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);