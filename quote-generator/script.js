// Get quotes from an API
// try catches allow us to attempt to complete a fetch request, if it fails, we can catch the error information and do something with it.

// In a production website we could pass this as an alert function.
// Or any other UI I have created to show the users any issue with functinality.

// We have an empty array here because this will be filled with our data from the API
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


let apiQuotes = [];

function newQuote() {
const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
 // Check if author field is blank and replace with 'unknown';
  if(!quote.author) {
    authorText.textContent = 'unknown';
  } else {
    authorText.textContent = quote.author;
  }



 quoteText.textContent = quote.text;
}

async function getQuotes() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    // This constant will not populate until there is some data fetched.
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error)  {

  }
}

// // on lOad
// newQuote();
getQuotes();