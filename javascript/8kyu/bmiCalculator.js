// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let x = height * height;
    let bmiValue =(weight/x);
    var returnThis;
    if (bmiValue<=18.5){
        returnThis = "Underweight";
    }else if(bmiValue <= 25.0){
        returnThis = "Normal"
    }else if(bmiValue <= 30.0){
        returnThis = "Overweight"
    }else if(bmiValue > 30.0){
        returnThis = "Obese"
    }
    return returnThis;
  }