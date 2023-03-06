// Ellipse

function ellipseArea(){
    
    const ellipseFirstInput = getAreavalue("ellipse-first-input-value");

    const ellipseSecondInput = getAreavalue("ellipse-second-input-value");
   
    const ellipseDimention = 3.1416 * ellipseFirstInput * ellipseSecondInput;

    const ellipseTotal = document.getElementById("ellipse-total");
    ellipseTotal.innerText = ellipseDimention.toFixed(2);
}
document.getElementById("ellipse-calculate-btn").addEventListener("click", function () {

    ellipseArea();
   
})

changeBackgroundOnHover('ellipse');