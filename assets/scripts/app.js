const defaultAnswer = "test";
// const rightAnswerWindow = alert(`Вы правы! Это действительно ${rightAnswer}`);
// const wrongAnswerWindow = alert(`Ошибаетесь! Это ${rightAnswer}`);

const getUserInput = function (rightAnswer = defaultAnswer) {
  const userInput = inputUserAnswer.value;
  if (userInput === rightAnswer) {
    alert(`Вы правы! Это действительно ${rightAnswer}`);
  } else {
    alert(`Ошибаетесь! Это ${rightAnswer}`);
  }
  return userInput;
};

// function LogAnswer() {
//   outputResult(getUserInput);
// }

sendBtn.addEventListener("click", getUserInput);


