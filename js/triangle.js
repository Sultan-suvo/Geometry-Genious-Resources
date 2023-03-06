// triangle
function calculateTriangleArea() {
    const triangleFirstInput = getAreavalue("triangle-first-input-value");

    if (isNaN(triangleFirstInput)) {
        alert("please enter a valid number for the first-input");
        return;
    }  
    if (triangleFirstInput <= 0) {
        alert("you enter negative value ! try positive value");
        return;
    }
    
    const triangleSecondInput = getAreavalue("triangle-second-input-value")

    if (isNaN(triangleSecondInput)) {
        alert("please enter a valid number for the second-input");
        return;
    }
    
    if (triangleSecondInput <= 0) {
        alert("you enter negative value ! try positive value");
        return;
    }
    const triangleDimention = 0.5*  triangleFirstInput * triangleSecondInput;

    const triangleTotal = document.getElementById("triangle-total");
    console.log(triangleDimention);
    triangleTotal.innerText = triangleDimention.toFixed(2);


}

document.getElementById("triangle-calculate-btn").addEventListener("click", function () {
   calculateTriangleArea();
   
})
changeBackgroundOnHover('triangleField');
