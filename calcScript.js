const calculate = document.getElementById("calculate");
const returnContainer = document.getElementById('returnContainer');
const inputField = document.getElementById('inputField');
const clear = document.getElementById('remove');


calculate.addEventListener('click', function() {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');

    if (document.getElementById("takeout").checked) {
      paragraph.innerText = Math.round(inputField.value * .10) + '$';
   } else if (document.getElementById("dineIn").checked) {
      paragraph.innerText = Math.round(inputField.value * .15) + '$';
   
   } else if (document.getElementById('superiorService').checked) {
      paragraph.innerText = Math.round(inputField.value * .20) + '$';
   } 
    
 var checkRadio = document.querySelector( 
    'input[name="percentage"]:checked'); 
  
if(checkRadio != null) { 
   paragraph.innerText;
} 
else { 
    paragraph.innerText
        = "Please select a tip percentage."; 
} 
   
      returnContainer.appendChild(paragraph);
      inputField.value ="";
      
});

clear.addEventListener('click', function() { 
    
  while (returnContainer.firstChild) {
    returnContainer.removeChild(returnContainer.firstChild);
    inputField.value = "";
  }

});

inputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('calculate').click();
    }
})


