const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C++",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What is the correct HTML for adding a background color?",
    a: "<body bg='yellow'>",
    b: "<body style='background-color:yellow;'>",
    c: "<background>yellow</background>",
    d: "<body style='background-color:yellow'>",
    correct: "b",
    
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
},
{
    question: "Which of the following methods can be used to display data in some form using Javascript?",
    a: "document.write()",
    b: "window.print()",
    c: "console.log()",
    d: "All of the above",
    correct: "d",
},
{
    question: "Which of the following is not a reserved word in JavaScript?",
    a: "interface",
    b: "throws",
    c: "program",
    d: "short",
    correct: "c",
},
{
    question: "Which of the following is not a valid JavaScript variable name?",
    a: "2names",
    b: "_first_and_last_names",
    c: "FirstAndLast",
    d: "None of the above",
    correct: "a",

},
{
    question: "What keyword is used to check wheather a given property is valid or not?",
    a: "check",
    b: "validate",
    c: "assert",
    d:"in",
    correct: "d",
},
{
    question:"What does the ‘toLocateString()’ method do in JS?",
    a: "Returns a localised object representation",
    b: "Returns a localized string of an object",
    c: "Returns a parsed string",
    d: "none of the above",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hola!, you've scored ${correct} / ${total} </h3>
        <button  style=" color:red; border:none;border-radius:20px;background:blue;  "id="btn" onclick="location.reload()"> Play Again</button>
    </div>
`
}
loadQuestion(index);
