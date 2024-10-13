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
        // Compare the user's answer to the correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct!";
            feedback.style.color = "green"; // Add a green color for correct feedback
        } else {
            feedback.textContent = "Incorrect, try again.";
            feedback.style.color = "red"; // Add a red color for incorrect feedback
        }
    } else {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange"; // Add an orange color for no selection
    }
}
