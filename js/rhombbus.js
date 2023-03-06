// Rhombus

function rhombusArea(){
    
    const rhombusFirstInput = getAreavalue("rhombus-first-input-value");

    const rhombusSecondInput = getAreavalue("rhombus-second-input-value");
   
    const rhombusDimention = 0.5 * rhombusFirstInput * rhombusSecondInput;

    const rhombusTotal = document.getElementById("rhombus-total");
    rhombusTotal.innerText = rhombusDimention.toFixed(2);
}
document.getElementById("rhombus-calculate-btn").addEventListener("click", function () {


    rhombusArea();
})
changeBackgroundOnHover('rhombus');