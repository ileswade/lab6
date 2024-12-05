// Variables for model and duration
const $modelText = $('#model-text');
const $durationText = $('#duration-text');

// Recalculate function
function recalculate() {
    const price = $modelText.text() === "Model XYZ" ? 100 : 213;
    $('#calculated-cost').text((parseInt($durationText.text()) * price).toFixed(2));
}

// Model button logic
$('#model-button').click(() => {
    $modelText.text($modelText.text() === "Model XYZ" ? "Model CPRG" : "Model XYZ");
    recalculate();
});

// Duration button logic
$('#duration-button').click(() => {
    let days;
    while (isNaN(days = parseInt(prompt("Enter the number of days:")))) {
        alert("Please enter a valid integer number of days");
    }
    $durationText.text(days);
    recalculate();
});