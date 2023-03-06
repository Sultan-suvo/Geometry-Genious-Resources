// parallelogrem
function calculateParallelogrenArea() {
    const parallelogremFirstInput = getAreavalue("parallelogrem-first-input-value");

    if (isNaN(parallelogremFirstInput)) {
        alert("please enter a valid number for the first-input");
        return;
    }
    if (parallelogremFirstInput <= 0) {
        alert("you enter negative value ! try positive value");
        return;
    }
    const parallelogremSecondInput = getAreavalue("parallelogrem-second-input-value")

    if (isNaN(parallelogremSecondInput)) {
        alert("please enter a valid number for the second-input");
        return;
    }
    
    if (parallelogremSecondInput <= 0) {
        alert("you enter negative value ! try positive value");
        return;
    }
    const parallelogremDimention = parallelogremFirstInput * parallelogremSecondInput;
    
    const paralelelogremTotal = document.getElementById("parallelogram-total");
    paralelelogremTotal.innerText = parallelogremDimention.toFixed(2);
}

document.getElementById("parallelogrem-calculate-btn").addEventListener("click",function(){
    calculateParallelogrenArea()
})

changeBackgroundOnHover('parallelogramField');