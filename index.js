// Add event listener for keydown events
document.addEventListener('keydown', function(event) {
    const key = event.key.toUpperCase(); // Convert to uppercase for consistency

    // Get all buttons with the class name 'keyButton'
    const buttons = document.querySelectorAll('.btn');

    // Loop through each button and check if the text content matches the pressed key
    buttons.forEach(function(button) {
        if (button.textContent.trim().toUpperCase() === key) {
            // Add the flash class to the button
            button.classList.add('flash');

            // Remove the flash class after a short delay
            setTimeout(function() {
                button.classList.remove('flash');
            }, 100); // Adjust timing as needed
        } 
    });
});


document.addEventListener('keydown', function(event) {
    const key = event.key.toUpperCase(); // Convert to uppercase for consistency

    // Get all buttons with the class name 'keyButton'
    const buttons = document.querySelectorAll('.btnNum');

    // Loop through each button and check if the text content matches the pressed key
    buttons.forEach(function(button) {
        if (button.textContent.trim().toUpperCase() === key) {
            // Add the flash class to the button
            button.classList.add('flash');

            // Remove the flash class after a short delay
            setTimeout(function() {
                button.classList.remove('flash');
            }, 100); // Adjust timing as needed
        } 
    });
});

document.addEventListener('keydown', function(event) {
    const key = event.key.toUpperCase(); // Convert to uppercase for consistency

    // Get all buttons with the class name 'keyButton'
    const buttons = document.querySelectorAll('.btnNum2');

    // Loop through each button and check if the text content matches the pressed key
    buttons.forEach(function(button) {
        if (button.textContent.trim().toUpperCase() === key) {
            // Add the flash class to the button
            button.classList.add('flash');

            // Remove the flash class after a short delay
            setTimeout(function() {
                button.classList.remove('flash');
            }, 100); // Adjust timing as needed
        } 
    });
});

document.addEventListener('keydown', function(event) {
    const key = event.key.toUpperCase(); // Convert to uppercase for consistency

    // Get all buttons with the class name 'keyButton'
    const buttons = document.querySelectorAll('.btnNum3');

    // Loop through each button and check if the text content matches the pressed key
    buttons.forEach(function(button) {
        if (button.textContent.trim().toUpperCase() === key) {
            // Add the flash class to the button
            button.classList.add('flash');

            // Remove the flash class after a short delay
            setTimeout(function() {
                button.classList.remove('flash');
            }, 100); // Adjust timing as needed
        } 
    });
});

// Select the button using its ID
const button = document.getElementById('space');

// Function to make the button flash
function flashButton() {
    button.classList.add('flash');
    setTimeout(() => {
        button.classList.remove('flash');
    }, 100);
}

// Add event listener for the 'keydown' event
window.addEventListener('keydown', (event) => {
    if (event.key === ' ') { // Check if the spacebar was pressed
        flashButton();
    }
});








   


    