let quotes = [["hi my name is lakhan", "lakhan"], ["hi my name is mehaa", "mehaa"], ["hi my name is nishil", "nishil"]];

let currentQuote = '';
let currentAuthor = '';


function fetchQuote(){
    fetch('https://stoicquotesapi.com/v1/api/quotes/random')
        .then(response => response.json())
        .then((json) => {
            document.getElementById("actual-text").innerHTML = json.body;
            document.getElementById("actual-author").innerHTML = json.author;
            currentQuote = document.getElementById("actual-text").innerHTML = json.body;
            currentAuthor = document.getElementById("actual-author").innerHTML = json.author;
})
    
}

function chooseQuote() {
    fetchQuote();
}

function showQuote(){
    document.getElementByClass("left").style.color = "lightcoral";
    document.getElementByClass("right").style.color = "lightcoral";
}

function tweet() {
    let value = "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + currentQuote + '" ' + "- " + currentAuthor);
    document.getElementById("tweet-quote").setAttribute("href", value);
}

function goUp () {
    const para = document.createElement("i");
    para.className="fa-solid fa-heart";
    para.setAttribute("id","flow");
    document.getElementById("heart-group").appendChild(para);
}