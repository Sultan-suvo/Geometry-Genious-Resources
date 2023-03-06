// common 
function getAreavalue(inputField){

    const getInputField = document.getElementById(inputField);
    const inputFieldValueString = getInputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    getInputField.value='';

    return inputFieldValue;
}

// blog js
document.getElementById("blog").addEventListener("click", function(){
    window.location.href='blog.html'
})


// Background Color Changer 
function changeBackgroundOnHover(elementId) {
    const element = document.getElementById(elementId);
  
    element.addEventListener('mouseover', function () {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      element.style.backgroundColor = '#' + randomColor;
    });
  }