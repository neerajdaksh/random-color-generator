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
    const hexValue = "0123456789abcdef";

    let hexCode = "#";
    for (let i = 0; i <= 5; i++) {
        hexCode += hexValue[generateRandomNumber(hexValue.length)];
    }
    hexColorCode.innerHTML = hexCode;
    hexColorContainer.style.backgroundColor = `${hexCode}`;
    hexColorBtn.style.color = `${hexCode}`;
};

// hex color copy function
function copyHexColorClipboard() {
    navigator.clipboard.writeText(hexColorCode.textContent);
    alert("Hex Color is Copied To Clipboard");
}

hexCodeCopyBtn.addEventListener("click", copyHexColorClipboard);

// rgb color generator
const rgbBtn = document.querySelector(".rgb-btn");
const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");
const rgbColorCode = document.querySelector(".rgb-color-code");
const rgbColorContainer = document.querySelector(".rgb-color-container");
const rbgCopyBtn = document.querySelector(".rgb-copy-btn");
// rgb color generate function
function rgbColorGenerator() {
    let red = getRedInputRange.value;
    let green = getGreenInputRange.value;
    let blue = getBlueInputRange.value;

    rgbColorCode.innerHTML = `rgb(${red}, ${green}, ${blue})`;
    rgbColorContainer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    rgbBtn.style.color = `rgb(${red}, ${green}, ${blue})`;
}
rgbBtn.addEventListener("click", rgbColorGenerator);

// copy rgb color function
function copyRgbColorClipboard() {
    navigator.clipboard.writeText(rgbColorCode.textContent);
    alert("RGB Color is Copied To Clipboard");
}

rbgCopyBtn.addEventListener("click", copyRgbColorClipboard);
