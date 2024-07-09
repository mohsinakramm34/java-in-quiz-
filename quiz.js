var questions = [
    {
        id: 1,
        question: "Which among the following is not the Pillars of Islam?",
        options: {
            a: "Zakat",
            b: "Sawm",
            c: "Shahadah",
            d: "Sharia",

        },
        answer: "Sharia"
    },
    {
        id: 2,
        question: "What is the pulpit in a mosque called?",
        options: {
            a: "Minaret",
            b: "Mihrab",
            c: "Minbar",
            d: "Musalla",

        },
        answer: "Minbar"
    },
    {
        id: 3,
        question: "What tax does a non-Muslim subject pay under a Muslim ruler?",
        options: {
            a: "Kharaj",
            b: "Tithe",
            c: "Jizyah",
            d: "Leibzoll",

        },
        answer: "Jizyah"
    }
    ,
    {
        id: 4,
        question: "What is the religious leader of Islam called?",
        options: {
            a: "Imam",
            b: "Khalifah",
            c: "Mullah",
            d: "Allamah",

        },
        answer: "Imam"
    }
    ,
    {
        id: 5,
        question: "What tax does a non-Muslim subject pay under a Muslim ruler?",
        options: {
            a: "Kharaj",
            b: "Leibzoll",
            c: "Tithe",
            d: "Jizyah",

        },
        answer: "Jizyah"
    },
    {
        id: 6,
        question: "What were the first four major caliphs collectively called?",
        options: {
            a: "Rashidun",
            b: "Shah",
            c: "Shaykh al-Islām",
            d: "Emir",

        },
        answer: "Rashidun"
    },
    {
        id: 7,
        question: "What was the purpose of Prophet Muhammad''s Hijrah?",
        options: {
            a: "To propagate Islam",
            b: "To escape persecution",
            c: "To avoid murder",
            d: "To escape plague",

        },
        answer: "To escape persecution"
    }
]



// set user name or user email
var userName = document.getElementById("userName")
var userEmail = document.getElementById("userEmail")
userName.innerHTML = localStorage.getItem("name")
userEmail.innerHTML = localStorage.getItem("email")

var htmlQues = document.getElementById("htmlQues")
var htmlOptions = document.getElementById("htmlOptions")
var indexNum = 0
var nextQuesBtn = document.getElementById("nextQuesBtn")
var correctAnsCount = 0
var wrongAnsCount = 0

// counter
var currentCount = document.getElementById("currentCount")
var totalCount = document.getElementById("totalCount")
totalCount.innerHTML = questions.length

var resultontainer = document.getElementsByClassName("resultontainer")[0]
var correctAns = document.getElementById("correctAns")
var wrongAns = document.getElementById("wrongAns")





function startQuiz() {
    console.log("startQuiz", questions[indexNum].options)
    htmlQues.innerHTML = questions[indexNum].question

    htmlOptions.innerHTML = ""

    for (var key in questions[indexNum].options) {
        var option = questions[indexNum].options[key]
        htmlOptions.innerHTML += ` <li onclick="checkAnswer(this)" >${option}</li>`

    }


}

var quizContainer = document.getElementById("quizContainer")
function nextQues() {
    if (indexNum < questions.length - 1) {
        indexNum++
        currentCount.innerHTML++
        console.log("nextQues", indexNum)
        nextQuesBtn.className = "hide"
        startQuiz()
    } else {
        console.log("khatam tata bye bye")
        quizContainer.style.display = "none"
        resultontainer.className = "show"
        correctAns.innerHTML = correctAnsCount
        wrongAns.innerHTML = wrongAnsCount
    }
    console.log(correctAnsCount, "correctAnsCount")
    console.log(wrongAnsCount, "wrongAnsCount")
}



function checkAnswer(ele) {
    var liOptions = htmlOptions.getElementsByTagName("li")
    var isCheck = ele.innerHTML === questions[indexNum].answer
    if (isCheck) {
        console.log("correct!")
        ele.className = "correctAns"
        correctAnsCount++
    } else {
        console.log(" Incorrect!")
        ele.className = "wrongAns"
        wrongAnsCount++
        for (var li of liOptions) {
            if (li.innerHTML === questions[indexNum].answer) {
                li.className = "correctAns"
            }
        }

    }

    // console.log("htmlOptions", htmlOptions.getElementsByTagName("li"))
    for (var li of liOptions) {
        console.log(li)
        li.style.pointerEvents = "none"
        li.style.cursor = "no-drop !important"
    }

     nextQuesBtn.className = "show"
}


function startTimer(duration, displayElement, callback) {
    var timer = duration;
    var minutes, seconds;

    var intervalId= setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        displayElement.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(intervalId);
            if (callback && typeof callback === 'function') {
                callback();
        }
        }
    }, 1000);
}


var quizTimeInSeconds = 60; // 1 minute timer for the quiz
var display = document.getElementById('timer'); // Assuming there is an element with id 'timer' to display the timer
var quizContainer = document.getElementById("quizContainer")

startTimer(quizTimeInSeconds, display, function() {
    // Callback function to execute when timer runs out
    alert('Time is up!');
       if (alert){
           resultContainer.className = "show"
           correctAns.innerHTML = correctAnsCount
        wrongAns.innerHTML = wrongAnsCount
         quizContainer.style.display = "none"
        }
       

    }
)