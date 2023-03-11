const quotes = [
    {
        quote: "That some achieve great success, is proof to all that others can achieve it as well.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Many people flounder about in life because they do not have a purpose, an objective toward which to work.",
        author:"George Halas",
    },
    {
        quote: "You may never know what results come of your action, but if you do nothing there will be no result.",
        author:"Mahtma Gandhi",
    },
    {
        quote: "Refuse to be average. Let your heart soar as high as it will.",
        author:"Aiden Wilson Tozer",
    },
    {
        quote: "To follow, without halt, one aim: that's the secret of success.",
        author:"Anna Pavlove",
    },
    {
        quote: "The first step toward change is awareness. The second step is acceptance.",
        author:"Nathaniel Branden",
    },
]
const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todatsQuote = quotes[Math.floor(Math.random() * quotes.length) ] ;

quote.innerText = todatsQuote.quote;
author.innerText = todatsQuote.author;