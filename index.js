const hexColorBtn = document.querySelector(".hex-color-btn");
const hexCodeCopyBtn = document.querySelector(".hex-color-copy-btn");
const hexColorCode = document.querySelector(".hex-color-code");
const hexColorContainer = document.querySelector(".hex-color-container");


hexColorBtn.addEventListener("click", () => {
    generateHexColor();

});



// generate random number
function generateRandomNumber(length) {
    return Math.floor(Math.random() * length);
}




//generate hex color function
const generateHexColor = () => {
    const hexValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexCode = "#";
    for (let i = 0; i <= 5; i++) {
        hexCode += hexValue[generateRandomNumber(hexValue.length)];
    }
    hexColorCode.innerHTML = hexCode;
    hexColorContainer.style.backgroundColor = `${hexCode}`;
    hexColorBtn.style.color = `${hexCode}`;
};


// hex color copy function
function copyHexColor() {
    navigator.clipboard.writeText(hexColorCode.innerHTML);
}

hexCodeCopyBtn.addEventListener("click", copyHexColor);


