const calculate = document.getElementById("calculate");
const returnContainer = document.getElementById('returnContainer');
const inputField = document.getElementById('inputField');
const clear = document.getElementById('remove');


calculate.addEventListener('click', function() {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
      paragraph.innerText = Math.round(inputField.value * .15) + '$';
      returnContainer.appendChild(paragraph);
      inputField.value ="";
      
});

clear.addEventListener('click', function() { 
    
  while (returnContainer.firstChild) {
    returnContainer.removeChild(returnContainer.firstChild);
    inputField.value = "";
  }

});



if (document.getElementById("takeout").checked) {
  return paragraph.innerText = Math.round(inputField.value * .10) + '$';
} else if (document.getElementById("dineIn").checked) {
  return  paragraph.innerText = Math.round(inputField.value * .15) + '$';

} else if (document.getElementById('superiorService').checked) {
  return paragraph.innerText = Math.round(inputField.value * .20) + '$';
}
