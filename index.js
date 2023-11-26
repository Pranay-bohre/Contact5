function submitForm() {
    var submitButton = document.getElementById('Contact-Submit');

    // Toggle the visibility of the button text
    submitButton.innerText = '';
    
    // Add loading class to the button
    submitButton.classList.add('loading');

    // Simulate a delay (you can replace this with your actual form submission logic)
    setTimeout(function () {
        // Remove loading class after the delay
        submitButton.classList.remove('loading');
        submitButton.innerText = 'Submit';
    }, 3000); // Change 3000 to your desired delay in milliseconds
}
