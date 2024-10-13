// Function to check the answer
function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4";
    
    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Select the feedback element where we'll display the result
    const feedback = document.getElementById('feedback');
    
    // Check if an answer is selected by the user
    if (userAnswer) {
        // Compare the user's answer value to the correct answer
        if (userAnswer.value === correctAnswer) {
            // If the answer is correct, show success message
            feedback.textContent = "Correct! Well done.";
        } else {
            // If the answer is incorrect, show error message
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected, prompt the user to choose an option
        feedback.textContent = "Please select an answer!";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
