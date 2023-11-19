/*
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!";
alert("Test alert");
*/

/*
the example below creates an alert when you click the footer.
document.querySelector("footer").addEventListener("click", function() {
    alert("you clicked me!");
});
*/

/*
// example below alternates between two images
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc !== "images/ruby-on-couch.jpg") {
    myImage.setAttribute("src", "images/ruby-on-couch.jpg");
  } else {
    myImage.setAttribute("src", "images/fake-logo.png");
  }
};
*/

const gobbledegook = prompt("Please enter some gobbledegook:");
// below -- localStorage is an API I can call to store data in the browswer to retrieve later
localStorage.setItem("gobbledegook", gobbledegook);
