// Function to check the answer
function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4";
    
    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Select the feedback element where we'll display the result
    const feedback = document.getElementById('feedback');
    
    // Check if the user selected an answer
    if (userAnswer) {
        // Compare user's answer with correct answer
        if (userAnswer.value === correctAnswer) {
            // If correct, display success feedback
            feedback.textContent = "Correct! Well done.";
        } else {
            // If incorrect, display error feedback
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected, ask the user to select an answer
        feedback.textContent = "Please select an answer!";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
