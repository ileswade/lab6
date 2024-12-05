
const model_text = document.getElementById("model-text");
const duration_text = document.getElementById("duration-text");



function recalculate() {
    const total = document.getElementById("calculated-cost");

    let price = 0;
    if (model_text.innerText=="Model XYZ") 
        price = 100;
    else
        price = 213;
    total.innerText = (parseInt(duration_text.innerText) * price).toFixed(2);
}


const modelButton = document.getElementById("model-button");

function changeModel() {

    if (model_text.innerText=="Model XYZ") 
        model_text.innerText = "Model CPRG";
    else
        model_text.innerText = "Model XYZ";
    recalculate()
}

modelButton.addEventListener("click", changeModel)


const modelDuration = document.getElementById("duration-button");

function changeDuration() {
    let days
    

    while (isNaN(days = parseInt(prompt("Enter the number of days:")))) {
        alert("Please enter a valid integer number of days");
    }

    duration_text.innerText =  days 
    recalculate()
}

modelDuration.addEventListener("click",changeDuration);




