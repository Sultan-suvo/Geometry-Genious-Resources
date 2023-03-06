// pentagon

function pentagonArea(){
    
    const pentagonFirstInput = getAreavalue("pentagon-first-input-value");

    const pentagonSecondInput = getAreavalue("pentagon-second-input-value");
   
    const pentagonDimention = 0.5 * pentagonFirstInput * pentagonSecondInput;

    const pentagonTotal = document.getElementById("pentagon-total");
    pentagonTotal.innerText = pentagonDimention.toFixed(2);
}
document.getElementById("pentagon-calculate-btn").addEventListener("click", function () {

    pentagonArea();
   
})

changeBackgroundOnHover('pentagonField');