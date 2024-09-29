// var generateQuote = document.getElementById("generate");

// localStorage.setItem(
//   "_1stQuote",
//   `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”<br />
// ― Marilyn Monroe`
// );
// localStorage.setItem(
//   "_2ndQuote",
//   `“Be yourself; everyone else is already taken.”<br />
//   ― Oscar Wilde`
// );
// localStorage.setItem(
//   "_3rdQuote",
//   `“So many books, so little time.”<br />
// ― Frank Zappa`
// );
// localStorage.setItem(
//   "_4thQuote",
//   `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”<br />
// ― Albert Einstein`
// );
// localStorage.setItem(
//   "_5thQuote",
//   `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”<br />
// ― Bernard M. Baruch`
// );
// localStorage.setItem(
//   "_6thQuote",
//   `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”<br />
// ― Dr. Seuss`
// );
// localStorage.setItem(
//   "_7thQuote",
//   `“You only live once, but if you do it right, once is enough.”<br />
// ― Mae West`
// );
// localStorage.setItem(
//   "_8thQuote",
//   `“Be the change that you wish to see in the world.”<br />
// ― Mahatma Gandhi`
// );
// localStorage.setItem(
//   "_9thQuote",
//   `“In three words I can sum up everything I've learned about life: it goes on.”<br />
// ― Robert Frost`
// );
// localStorage.setItem(
//   "_10thQuote",
//   `“Don’t walk in front of me… I may not follow
// Don’t walk behind me… I may not lead
// Walk beside me… just be my friend”<br />
// ― Albert Camus`
// );
// var quoteList = [
//   localStorage.getItem("_1stQuote"),
//   localStorage.getItem("_2ndQuote"),
//   localStorage.getItem("_3rdQuote"),
//   localStorage.getItem("_4thQuote"),
//   localStorage.getItem("_5thQuote"),
//   localStorage.getItem("_6thQuote"),
//   localStorage.getItem("_7thQuote"),
//   localStorage.getItem("_8thQuote"),
//   localStorage.getItem("_9thQuote"),
//   localStorage.getItem("_10thQuote"),
// ];

// function Generate() {
//   cartona = "";

//   var i = Math.floor(Math.random() * quoteList.length);

//   if (i != i) {
//     cartona += `<div><h2>${quoteList[i]}</h2></div>`;
//   } else {
//     i++;
//     cartona += `<div><h2>${quoteList[i]}</h2></div>`;
//   }
//   generateQuote.innerHTML = cartona;
// }
// localStorage.clear();

var quote = document.getElementById("quote");
var arthor = document.getElementById("auther");
var quoteList = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    auther: "― Oscar Wilde",
  },
  {
    quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    auther: "― Marilyn Monroe",
  },
  {
    quote: "“So many books, so little time.”",
    auther: "― Frank Zappa",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    auther: "― Albert Einstein",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    auther: "― Marcus Tullius Cicero",
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    auther: "― Bernard M. Baruch",
  },
];
var lastIndex ;
function Generate() {
  do {
    var i = Math.floor(Math.random() * quoteList.length);
  } while (lastIndex === i);

  quote.innerHTML = quoteList[i].quote;
  auther.innerHTML = quoteList[i].auther;
  lastIndex = i;
  console.log(i);

  //   else {
  //     i != i;
  //     quote.innerHTML = quoteList[i].quote;
  //     auther.innerHTML = quoteList[i].auther;
  //     console.log(i);
  //   }
}
