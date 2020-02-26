const sendBtn = document.getElementById('send-answer');
const inputUserAnswer = document.getElementById('user-answer');

const userAnswerOutput = document.getElementById ("output-answer");

function outputResult (answer) {
    userAnswerOutput.textContent = answer;
}
