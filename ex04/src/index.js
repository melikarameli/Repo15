// Only change code below this line
// Using mili = [4, 10, 25] would be invalid
const milili = [10, 25, 4];
function myArr(mili) {
    "use strict";
    let milili = mili;
    mili = [4, 10, 25];
    return mili;
}
console.log(myArr());
// Only change code above this line
module.exports = myArr;