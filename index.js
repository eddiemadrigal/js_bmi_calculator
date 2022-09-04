// BMI = 194 / (67 * 67) * 703

function getBMI(weight, height) {
    let bmi = weight / (height * height) * 703
    return bmi.toFixed(1)
}

let result = getBMI(194, 67);
console.log("the bmi is: " + result);
