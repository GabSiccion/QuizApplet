var output = document.getElementById("output");

function CheckAnswer(clicked_value) {
	output.innerHTML = clicked_value;
}

const questions = [
	{
		question: "Which of the programming languages is made by James Gosling?",
		a: "Java",
		b: "C#",
		c: "JavaScript",
		d: "HTML",
		correct: "a",
		category: "web development",
	},
	{
		question:
			"Which of these programming languages is considered as a back-end programming language?",
		a: "HTML",
		b: "CSS",
		c: "Sass",
		d: "PHP",
		correct: "d",
		category: "web development",
	},
	{
		question: "What does HTML stand for?",
		a: "Hyper Terminal Markup Language",
		b: "Hypertext Markup Language",
		c: "High Tracing Marketing Language",
		d: "Helicopter Terminal Maintenance Language",
		correct: "b",
		category: "web development",
	},
	{
		question: "Which of the programming languages is made by James Gosling?",
		a: "Java",
		b: "C#",
		c: "JavaScript",
		d: "HTML",
		correct: "a",
		category: "Networking",
	},
	{
		question:
			"Which of these programming languages is considered as a back-end programming language?",
		a: "HTML",
		b: "CSS",
		c: "Sass",
		d: "PHP",
		correct: "d",
		category: "Networking",
	},
	{
		question: "What does HTML stand for?",
		a: "Hyper Terminal Markup Language",
		b: "Hypertext Markup Language",
		c: "High Tracing Marketing Language",
		d: "Helicopter Terminal Maintenance Language",
		correct: "b",
		category: "Networking ",
	},
];
