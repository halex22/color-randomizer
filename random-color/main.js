
/**
 * 
 * @param {'rgb' | 'hex'} outputType - 
 */
// function randomColor(outputType) {}


function randomCOlorArray(){}

function randomColorHex(){}

function randomCOlorRGB(){}

function randomColorObj(){}


/**
 * 
 * @param {string} r 
 * @param {string} g 
 * @param {string} b 
 * @returns 
 */
function rgbToHex(r, g, b) {
  const red = r.toString(16).padStart(2, '0');
  const green = g.toString(16).padStart(2, '0'); 
  const blue = b.toString(16).padStart(2, '0');
  return `#${red}${green}${blue}`;
}


export {
  randomCOlorRGB,
  randomColorHex,
  randomColorObj
}