function getInputFildValue(fileId) {
    const fild = document.getElementById(fileId);
    const fildValue = parseFloat(fild.value);
    fild.value = "";
    return fildValue;
}
function getElementValue(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.innerText);
    return elementValue;
}
function setTextElementVslue(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}