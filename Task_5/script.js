let current = 0;
let score = 0;
let questions = [];
let selectedAnswer = [];

fetch("questions.json")
  .then((res) => res.json())
  .then((data) => {
    questions = data;
    showQuestion();
  });

const quizBox = document.getElementById("quiz");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result");

function showQuestion() {
  const ques = questions[current];
  quizBox.innerHTML = `
    <h2>${ques.question}</h2>
    <br />
    ${ques.options
      .map(
        (opt) => `
      <label>
        <input type="radio" name="option" value="${opt}" />
        ${opt}
      </label><br>
    `
      )
      .join("")}
  `;
}

nextBtn.onclick = () => {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    return alert("Please select an option!");
  }
  if (selected.value === questions[current].answer) {
    score++;
  }
  selectedAnswer.push(selected.value);
  current++;
  current < questions.length ? showQuestion() : showResult();
};

function showResult() {
  quizBox.classList.add("hidden");
  nextBtn.classList.add("hidden");
  resultBox.classList.remove("hidden");
  let index = 0;
  resultBox.innerHTML = `
    <h2>Your score: ${score}/${questions.length}</h2>
    <br />
    ${questions
      .map(
        (q, i) => `
      <p><strong>Q${i + 1}:</strong> ${q.question}<br>
       <em>Answer:</em> ${q.answer} <br>
       <em>Your Answer:</em> ${selectedAnswer[index++]}
       </p>
      <br />
      `
      )
      .join("")}
  `;
}
