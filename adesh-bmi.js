let calculateBMI = (weight,height) => {
    let  massIndex = (weight / height )/2
    return massIndex
}
let bmi = calculateBMI()


let interpretBMI = (bmi) => {
    if (bmi < 18.5){
        console.log('Under weight')
    } else if (bmi && bmi < 25) {
        console.log('Normal Weight')
    } else if (bmi <= 30) {
        console.log("Obese") 
    }
    return bmi
}


console.log(calculateBMI(90,1.91))
console.log(interpretBMI(calculateBMI()))


