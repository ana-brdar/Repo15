// Only change code below this line
const milili = [10, 25, 4];
function myArr(mili) {
    'use strict';
    milili[0] = 4;
    milili[1] = 10;
    milili[2] = 25;
    return mili;
}
// Using mili = [4, 10, 25] would be invalid
console.log(myArr(milili));
// Only change code above this line
module.exports = myArr;