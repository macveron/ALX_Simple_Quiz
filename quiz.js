// Function to check the user's answer
function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer using document.querySelector
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Select the feedback element where we'll display the result
    const feedback = document.getElementById('feedback');

    // Check if an answer is selected by the user
    if (userAnswer) {
        // Compare the user's answer value to the correct answer
        if (userAnswer.value === correctAnswer) {
            // If the answer is correct, show success message
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";  // Optional: Change the text color to green for correct answers
        } else {
            // If the answer is incorrect, show error message
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";  // Optional: Change the text color to red for incorrect answers
        }
    } else {
        // If no answer is selected, prompt the user to choose an option
        feedback.textContent = "Please select an answer!";
        feedback.style.color = "orange";  // Optional: Change the text color to orange for no selection
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
