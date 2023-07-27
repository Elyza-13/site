// Questions that will be asked
const Questions = [{
	q: "Qual dos rappers mencionados foi assassinado?",
	a: [{ text: "Mano Brown", isCorrect: false },
	{ text: "Emicida", isCorrect: false },
	{ text: "Sabotage", isCorrect: true },
	{ text: "Djonga", isCorrect: false }
	]

},
{
	q: "Qual faz parte do grupo Racionais MC’s?",
	a: [{ text: "Sabotage", isCorrect: false, isSelected: false },
	{ text: "Djonga", isCorrect: false },
	{ text: "Emicida", isCorrect: false },
	{ text: "Mano Brown", isCorrect: true }
	]

},
{
	q: "Qual das rappers mencionadas é LGBTQIA+",
	a: [{ text: "Linn da Quebrada", isCorrect: true },
	{ text: "Tasha ou Tracie", isCorrect: false },
	{ text: "Negra Li", isCorrect: false },
	{ text: "Flora Matos", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `Voce fez ${score} de ${Questions.length} pontos`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
