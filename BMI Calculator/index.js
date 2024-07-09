const form = document.querySelector('form');
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);
    const results = document.querySelector("#results");

    if(height==='' || height< 0 || isNaN(height)){
        results.innerHTML = `Give a proper height ${height}`
    }
    else if(weight==='' || weight< 0 || isNaN(weight)){
        results.innerHTML = `Give a proper weight ${weight}`
    }
    else{
        const bmi = (weight/((height * height) / 10000)).toFixed(2);
        // results.innerHTML = `<span> ${bmi} </span>`;
        if(bmi<18.6){
            results.innerHTML = `you'r under-weight: ${bmi}`;
        }
        else if(bmi>18.6 && bmi< 24.9){
            results.innerHTML = `you'r normal: ${bmi}`;
        }
        else{
            results.innerHTML = `Start focus on ur health: ${bmi}`;
        }
    }

})