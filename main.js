let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '“First, solve the problem. Then, write the code.” – John Johnson',
    '“Java is to JavaScript what car is to Carpet.” – Chris Heilmann',
    '“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler',
    '“ Code is like humor. When you have to explain it, it’s bad.” – Cory House',
    '“Optimism is an occupational hazard of programming: feedback is the treatment. “ Kent Beck',
    '“Simplicity is the soul of efficiency.” – Austin Freeman',
    '“Before software can be reusable it first has to be usable.” – Ralph Johnson',
    '“It’s harder to read code than to write it.” — Joel Spolsky',
    '"Deleted code is debugged code". - Jeff Sickel'
];

btn.addEventListener('click', function(){

    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
});