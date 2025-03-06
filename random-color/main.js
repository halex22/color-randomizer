import {randomColorArray, rgbToHex} from "./utils.js";

function randomColorHex() {
    const rgbArray = randomColorArray();
    const hexString = rgbToHex(rgbArray);
    return hexString.toUpperCase();
}

function randomColorRgb() {
    const rgbArray = randomColorArray();
    const rgbString = `rgb(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]})`;
    return rgbString;
}

function randomColorObj() {
    const rgbArray = randomColorArray();
    const rgbObj = {r: rgbArray[0], g: rgbArray[1], b: rgbArray[2]};
    return rgbObj;
}
// console.log(randomColorArray());
// console.log(randomColorHex());
// console.log(randomColorRgb());
// console.log(randomColorObj());

export { randomColorArray, randomColorObj, randomColorRgb, randomColorHex };