// Challenge 1: Your age in days

function ageInDays() {
  var birthYear = prompt("What year you were born?");
  var ageInDayss = (2018 - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "You are " + ageInDayss + " days old"
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
  //   console.log(ageInDayss);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

// Challenge 2: Cat Generator
function generateCat() {
  var image = document.createElement("img");
  var div = document.getElementById("flex-cat-gen");
  image.src = "https://cdn2.thecatapi.com/images/ed5.gif";
  div.appendChild(image);
}
