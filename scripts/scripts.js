/****************** YOUR NAME: 


The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE
const model_text = document.getElementById("model-text");
const duration_text = document.getElementById("duration-text");


/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE

function recalculate() {
    const total = document.getElementById("calculated-cost");

    let price = 0;
    if (model_text.innerText=="Model XYZ") 
        price = 100;
    else
        price = 213;
    total.innerText = (parseInt(duration_text.innerText) * price).toFixed(2);
}



/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE
const modelButton = document.getElementById("model-button");

function changeModel() {

    if (model_text.innerText=="Model XYZ") 
        model_text.innerText = "Model CPRG";
    else
        model_text.innerText = "Model XYZ";
    recalculate()
}

modelButton.addEventListener("click", changeModel)



/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE
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







// const tp = document.getElementById("iles");
// console.log(tp.innerText);
// // tp.innerText = "The cost to book Model CPRG for 1 days is $213.00."

// const tp = document.getElementById("model-text");
// tp.innerText = "Model CPRG";

// const days=document.getElementById("duration-text");
// days.innerText = "1";

// const total=document.getElementById("calculated-cost");
// total.innerText = "999.00";


// Locate the element to attach an event listen to


// Create the "What to do when the buttonis clicked" function


// Attach an event listener to the element
// Adding an eventlistener to list that the broweser is watching


// Locate the element to attach an event listen to


// Create the "What to do when the buttonis clicked" function


// Attach an event listener to the element
// Adding an eventlistener to list that the broweser is watching



