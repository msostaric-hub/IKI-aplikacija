let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"You only live once, but if you do it right, once is enough." - Mae West',
    '"I am so clever that sometimes I don\'t understand a single word of what I am saying." - Oscar Wilde',
    '"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.", Albert Einstein',
    '"The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.", Albert Einstein'
];

btn.addEventListener('click', function(){

    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
});