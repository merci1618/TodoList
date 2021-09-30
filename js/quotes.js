const quotes = [
     {
         quote: "There is no reason not to follow your heart.",
         author: "Steve Jobs",
     },
     {
         quote: "Time is money",
         author: "Benhamin Franklin",
     },
     {
        quote: "If you want to be happy, be",
        author: "Leo Tolstoy",
    },
    {
        quote: "Life is a journey not a destination.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "It is kind of fun to do the improssible.",
        author: "Walt Disney",
    },
    {
        quote: "There are better starters than me but I'm strong finisher.",
        author: "Usain Bolt",
    },
    {
        quote: "Tough time never last, but tough people do.",
        author: "Robert H. Schuller",
    },
    {
        quote: "I've failed over and over and over again in my life and that is why I am succed.",
        author: "Michale Jodan",
    },
    {
        quote: "If you don't get out the box you've been raised in, you won't understand how much bigger the world is.",
        author: "Angelina Jolie",
    },
    {
        quote: "Grind Hard, Shine Hard.",
        author: "Dwayne Johnson",
    },
 ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;



