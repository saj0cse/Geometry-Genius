
// Triangle
document.getElementById('Triangle').addEventListener('click', function(){
   const triangleBase = getInputById('triangle-base');
   const triangleHeight = getInputById('triangle-height');
   const area = 0.5 * triangleBase * triangleHeight;
   textDisplay (area);
});
// Rectangle
document.getElementById('Rectangle').addEventListener('click', function(){
   const rectangleWidth = getInputById('rectangle-width');
   const rectangleHeight = getInputById('rectangle-height');
   const area = rectangleWidth * rectangleHeight;
   textDisplay (area);
});
// Parallelogram
document.getElementById('Parallelogram').addEventListener('click', function(){
   const parallelogramBase = getInputById('parallelogram-base');
   const parallelogramHeight = getInputById('parallelogram-height');
   const area = parallelogramBase * parallelogramHeight;
   textDisplay (area);
});
// Rhombus
document.getElementById('Rhombus').addEventListener('click', function(){
   const rhombusDOne = getInputById('rhombus-d1');
   const rhombusDTwo = getInputById('rhombus-d2');
   const area = 0.5 * rhombusDOne * rhombusDTwo;
   textDisplay (area);
});
// Pentagon
document.getElementById('Pentagon').addEventListener('click', function(){
   const pentagonBase = getInputById('pentagon-base');
   const pentagonHeight = getInputById('pentagon-height');
   const area = 0.5 * pentagonBase * pentagonHeight;
   textDisplay (area);
});
// Ellipse
document.getElementById('Ellipse').addEventListener('click', function(){
   const ellipseA = getInputById('ellipse-a');
   const ellipseB = getInputById('ellipse-b');
   const area = 3.1416 * ellipseA * ellipseB;
   textDisplay (area);
});





















// code reuse function 
function getInputById(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
};

function textDisplay(result){
    const getButton = document.getElementById('text-display');
    const setResult = getButton.innerText = result;
    return setResult;
};