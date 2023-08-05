// Define the quiz questions and options
const questions = [
    {
        question: "Question 1: What does the word 'cat' spell backwards?",
        options: ["tac", "act", "cta", "tca"],
        values: [1, 0, 0, 0]
    },
    {
        question: "Question 2: Identify the word that does not rhyme with 'bat'",
        options: ["mat", "cat", "rat", "dog"],
        values: [0, 0, 0, 1]
    },
    {
        question: "Question 3: What is the first letter of the word 'elephant'?",
        options: ["L", "E", "P", "H"],
        values: [0, 1, 0, 0]
    },
    {
        question: "Question 4: Which number comes next in the sequence? 2, 4, 6, 8, __",
        options: ["10", "9", "12", "14"],
        values: [1, 0, 0, 0]
    },
    {
        question: "Question 5: Which word is spelled correctly?",
        options: ["Acces", "Acess", "Access", "Accsess"],
        values: [0, 0, 1, 0]
    },
    {
        question: "Question 6: Identify the correctly spelled number:",
        options: ["Twelwe", "Twelve", "Twelv", "Twelfe"],
        values: [0, 1, 0, 0]
    },
    {
        question: "Which word means the opposite of 'small'?",
        options: ["Little", "Tiny", "Big", "Miniature"],
        values: [0, 0, 1, 0]
    },
    {
        question: "Question 8: Choose the correctly spelled color:",
        options: ["Rred", "Greeen", "Blluee", "Yellow"],
        values: [0, 0, 0, 1]
    },
    {
        question: "Question 9: Arrange the letters to form a meaningful word: R E A D",
        options: ["DAER", "DERA", "ARDE", "DEAR"],
        values: [0, 0, 0, 1]
    },
    {
        question: "Question 10: What is the missing letter in the sequence? A, C, E, G, __, K?",
        options: ["F", "I", "J", "H"],
        values: [0, 1, 0, 0]
    }
];

// Define the categories based on the answer ranges
const categories = [
    { name: "High Dyslexia", range: [0, 3] },
    { name: "Average Dyslexia", range: [4, 6] },
    { name: "Low Dyslexia", range: [7, 10] }
];

let userAnswers = [];

// Function to display the questions and options
// Function to display the questions and options
function displayQuizQuestions() {
    const quizContainer = document.getElementById("quizContainer");
    quizContainer.innerHTML = ""; // Clear previous content

    // Add the heading element
    const headingElement = document.createElement("h2");
    headingElement.innerText = "Test for Dyslexia";
    quizContainer.appendChild(headingElement);

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

    // Create and append the submit button dynamically
    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.classList.add("submit-button"); // Add the "submit-button" class
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

    const totalScore = userAnswers.reduce((acc, cur, index) => acc + questions[index].values[cur], 0);
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
