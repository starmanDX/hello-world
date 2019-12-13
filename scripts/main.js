let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/beer.jpg') {
      myImage.setAttribute ('src','images/beer2.jpg');
      myImage.setAttribute ('alt', 'Cheers');
    } else {
      myImage.setAttribute ('src','images/beer.jpg');
      myImage.setAttribute ('alt', 'A glass of beer.');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Beer is cool, ' + myName + "!";
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Beer is cool ' + storedName + "!";
  }

  myButton.onclick = function() {
    setUserName();
  }