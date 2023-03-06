// rectangle
function calculateRectangleArea() {
    const rectangleFirstInput = getAreavalue("rectangle-first-input-value");

    if (isNaN(rectangleFirstInput)) {
        alert("please enter a valid number for the first-input");
        return;
    }
    if (rectangleFirstInput <= 0) {
        alert("you enter negative value ! try positive value");
        return;
    }
    

    const rectangleSecondInput = getAreavalue("rectangle-second-input-value")

    if (isNaN(rectangleSecondInput)) {
        alert("please enter a valid number for the second-input");
        return;
    }
    
    if (rectangleSecondInput <= 0) {
        alert("you enter negative value ! try positive value");
        return;
    }
    const rectangleDimention = rectangleFirstInput * rectangleSecondInput;

    const rectangleTotal = document.getElementById("rectangle-total");

    rectangleTotal.innerText = rectangleDimention.toFixed(2);


}

document.getElementById("rectangle-calculate-btn").addEventListener("click",function(){
        calculateRectangleArea()
})

changeBackgroundOnHover('rectangleField');