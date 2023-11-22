 const form = document.querySelector(`form`);
//  console.log(form);
form.addEventListener('submit',function(event){
    event.preventDefault();

    const height = parseInt(document.querySelector(`#height`).value);
    const weight = parseInt(document.querySelector(`#weight`).value);
    const result = document.querySelector(`#results`);

    if(height === `` || height <0 || isNaN(height))
     {
        result.innerHTML = `Please give a valid input! ${height}`;
     }
     else if(weight === `` || weight <0 || isNaN(weight))
     {
        result.innerHTML = `Please give a valid input! ${weight}`;
     }
     else{
        const bmi = (weight/(height*height)/10000).toFixed(2);
        let value;
        if(bmi<18.6)
        {
            value = `Under weight`;
        }
        else if(bmi>=18.6 && bmi <= 24.9)
        {
            value = `Normal range`;
        }
        else{
            value = `Overweight`;
        }
        result.innerHTML = `<span>${bmi}</span><br><span>${value}</span>`;
     }
});