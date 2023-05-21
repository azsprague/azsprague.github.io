let quotes = [
    "“A computer once beat me at chess, but it was no match for me at kick boxing.”— Emo Philips",
    "“Where is the ‘any’ key?”— Homer Simpson, in response to the message, “Press any key”",
    "“In a room full of top software designers, if two agree on the same thing, that’s a majority.— Bill Curtis",
    "“Looking at code you wrote more than two weeks ago is like looking at code you are seeing for the first time.”— Dan Hurvitz",
    "“Code generation, like drinking alcohol, is good in moderation.”— Alex Lowe",
    "“A program is never less than 90% complete, and never more than 95% complete.”— Terry Baker",
    "“I think it’s a new feature.  Don’t tell anyone it was an accident.”— Larry Wall",
    "“There are only two things wrong with C++:  The initial concept and the implementation.”— Bertrand Meyer",
    "“Perl: The only language that looks the same before and after RSA encryption.”— Keith Bostic",
    "“UNIX is simple.  It just takes a genius to understand its simplicity.”— Dennis Ritchie",
    "“Some people, when confronted with a problem, think ‘I know, I’ll use regular expressions.’  Now they have two problems.”— Jamie Zawinski",
    "“Being able to break security doesn’t make you a hacker anymore than being able to hotwire cars makes you an automotive engineer.”— Eric Raymond",
    "“In a software project team of 10, there are probably 3 people who produce enough defects to make them net negative producers.”— Gordon Schulmeyer",
    "“If you have a procedure with ten parameters, you probably missed some.”— Alan Perlis"
]

function newQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}