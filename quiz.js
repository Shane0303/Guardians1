// Define the quiz questions and options
const questions = [
    {
        question: "Question 1: Which color do you prefer?",
        options: ["Red", "Blue", "Green", "Yellow"]
    },
    // Add more questions here...
    {
        question: "Question 10: Which season do you like the most?",
        options: ["Spring", "Summer", "Autumn", "Winter"]
    }
];

// Define the categories based on the answer ranges
const categories = [
    { name: "Category 1", range: [0, 20] },
    { name: "Category 2", range: [21, 50] },
    { name: "Category 3", range: [51, 100] }
];

let userAnswers = [];

// Function to display the questions and options
function displayQuizQuestions() {
    const quizContainer = document.getElementById("quizContainer");
    quizContainer.innerHTML = ""; // Clear previous content

    questions.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.innerHTML = `<p>${q.question}</p>`;

        q.options.forEach((option, optionIndex) => {
            const optionElement = document.createElement("input");
            optionElement.type = "radio";
            optionElement.name = `question${index}`;
            optionElement.value = optionIndex;
            optionElement.id = `q${index}_option${optionIndex}`; // Add unique id for each option

            const labelElement = document.createElement("label");
            labelElement.setAttribute("for", `q${index}_option${optionIndex}`);
            labelElement.innerText = option;

            questionElement.appendChild(optionElement);
            questionElement.appendChild(labelElement);

            questionElement.appendChild(document.createElement("br"));
        });

        quizContainer.appendChild(questionElement);
    });

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.addEventListener("click", calculateResult);
    quizContainer.appendChild(submitButton);
}

// Function to calculate the result and redirect to index.html
function calculateResult(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    userAnswers = [];
    const quizForm = document.getElementById("quizForm");
    if (!quizForm) {
        console.error("Form element not found");
        return;
    }

    // Check if the form contains any form elements
    if (quizForm.elements.length === 0) {
        console.error("Form has no form elements");
        return;
    }

    questions.forEach((_, index) => {
        const selectedOption = quizForm.elements[`question${index}`].value;
        userAnswers.push(parseInt(selectedOption));
    });

    const totalScore = userAnswers.reduce((acc, cur) => acc + cur, 0);
    let resultCategory = "Unknown";

    // Determine the result category based on the total score
    categories.forEach(category => {
        if (totalScore >= category.range[0] && totalScore <= category.range[1]) {
            resultCategory = category.name;
        }
    });

    alert(`Your result category is: ${resultCategory}`);

    // Redirect to index.html after displaying the result alert
    window.location.href = "./index.html";
}

// Event listener for the "Submit" button
document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quizForm");
    const submitButton = document.getElementById("submitButton");

    if (submitButton) {
        // Use the 'submit' event on the form instead of 'click' event on the button
        quizForm.addEventListener('submit', calculateResult);
    }

    displayQuizQuestions();
});
