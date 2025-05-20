const colorPicker = document.querySelector(".color-picker");
const colorInfo = document.querySelector(".color-info");
const result = document.querySelector(".container");

colorPicker.addEventListener('input', colorChange);

function colorChange(){
    let selectedColor = colorPicker.value;
    result.style.backgroundColor = selectedColor;
    colorInfo.textContent = colorPicker.value;
}

result.style.backgroundColor = colorPicker.value;