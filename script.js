let button = document.getElementById('btn');
button.addEventListener('click', () => {
   const weight = parseInt(document.getElementById('weight').value);
   const height = parseInt(document.getElementById('height').value);
   const result = document.getElementById('output');
   let weight_status=false, height_status=false;

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Weight not valid';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Height not valid';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(weight_status && height_status){
        const bmi = (weight/(height/100)**2).toFixed(1);

        if(bmi < 18.5){
            result.innerHTML =  'Your BMI is ' + bmi + ' which means You are Underweight';
        }else if(bmi >= 18.5 && bmi < 24.9){
            result.innerHTML = 'Your BMI is ' + bmi + ' which means You are Normal Weight';
        }else if(bmi >= 25 && bmi < 29.9){
            result.innerHTML = 'Your BMI is ' + bmi + ' which means You are Overweight';
        }else{
            result.innerHTML = 'Your BMI is ' + bmi + ' which means You are Obesity';
        }
    }else{
        alert('Calculator Error');
        result.innerHTML = '';
    }
});
