</> javascript

document.getElementById('food-planner-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input values
    const name = document.getElementById('name').value;
    const dietType = document.getElementById('diet-type').value;
    const mealPreferences = document.getElementById('meal-preferences').value;

    // Create a summary
    const summary = `
        Name: ${name} <br>
        Diet Type: ${dietType} <br>
        Meal Preferences: ${mealPreferences}
    `;

    // Display summary
    document.getElementById('summary').innerHTML = summary;
    document.getElementById('user-data').classList.remove('hidden');
    
    // Reset the form
    document.getElementById('food-planner-form').reset();
});
