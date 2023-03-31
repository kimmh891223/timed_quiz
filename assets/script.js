// Declaring Variables

var viewHighscoreEl = document.querySelector("#highscoreTab");
var viewHighscoreCont = document.querySelector(".highscoreTabContainer")
var timerEl = document.querySelector("#timerTab");
var timerCont = document.querySelector(".timerTabContainer")
var titleEl = document.querySelector("#mainTitle");
var titleCont = document.querySelector(".mainTitleContiner")
var instructionEl = document.querySelector("#instruction");
var instructionCont = document.querySelector(".instruction")
var startButtonEl = document.querySelector("#startButton");
var time = document.querySelector("#time");
var highscoreRecord = document.querySelector("#highscoreRecord");
var tryAgain = document.querySelector("#tryAgain");
var correct = document.querySelector("#correct");
var wrong = document.querySelector("#wrong");

// Created Element Variables

var ulEl = document.createElement("ul");
var liEl11 = document.createElement("li");
var liEl12 = document.createElement("li");
var liEl13 = document.createElement("li");
var liEl14 = document.createElement("li");
var liEl21 = document.createElement("li");
var liEl22 = document.createElement("li");
var liEl23 = document.createElement("li");
var liEl24 = document.createElement("li");
var liEl31 = document.createElement("li");
var liEl32 = document.createElement("li");
var liEl33 = document.createElement("li");
var liEl34 = document.createElement("li");
var liEl41 = document.createElement("li");
var liEl42 = document.createElement("li");
var liEl43 = document.createElement("li");
var liEl44 = document.createElement("li");
var liEl51 = document.createElement("li");
var liEl52 = document.createElement("li");
var liEl53 = document.createElement("li");
var liEl54 = document.createElement("li");

var tryAgainContainer = document.createElement("div");
var enterNameContainer = document.createElement("div");
var recordContainer = document.createElement("div");
var result = document.createElement("p");
var enterName = document.createElement("p");
var save = document.createElement("p");
var input1 = document.createElement("input");



// Timer + Time Out

startButtonEl.addEventListener("click", function(){
    var secondsLeft = 60;

    function setTime() {
        var timerInterval = setInterval(function() {
            secondsLeft--;
            time.textContent = secondsLeft;
            

            if(secondsLeft <= 0) {
                wrong.style.display = "none";
                correct.style.display = "none";
                clearInterval(timerInterval);
                liEl11.remove();
                liEl12.remove();
                liEl13.remove();
                liEl14.remove();
                liEl21.remove();
                liEl22.remove();
                liEl23.remove();
                liEl24.remove();
                liEl31.remove();
                liEl32.remove();
                liEl33.remove();
                liEl34.remove();
                liEl41.remove();
                liEl42.remove();
                liEl43.remove();
                liEl44.remove();
                liEl51.remove();
                liEl52.remove();
                liEl53.remove();
                liEl54.remove();
                titleEl.innerHTML = "High Scores";
                highscoreRecord.style.display = "block";
                tryAgain.style.display = "block";

            } else if (liEl54.addEventListener("click", function(){
                clearInterval(timerInterval);})) {
            }

        }, 1000);
    };
    setTime();

// Question 1

    startButtonEl.style.display = "none";
    viewHighscoreEl.style.display = "none";
    titleEl.innerHTML = "362 + 459 =";
    titleEl.setAttribute("style", "padding:10px 50px 10px")
    instructionEl.style.display = "none";
    instructionCont.append(ulEl);
    ulEl.setAttribute("style", "display:flex; flex-direction:column; align-items:center")
    ulEl.append(liEl11);
    liEl11.textContent = "721";
    liEl11.setAttribute("style", "position:relative; top:100px; font-size:30px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px")
    ulEl.append(liEl12);
    liEl12.textContent = "821"; // answer
    liEl12.setAttribute("style", "position:relative; top:100px; font-size:30px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px")
    ulEl.append(liEl13);
    liEl13.textContent = "831";
    liEl13.setAttribute("style", "position:relative; top:100px; font-size:30px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px")
    ulEl.append(liEl14);
    liEl14.textContent = "811";
    liEl14.setAttribute("style", "position:relative; top:100px; font-size:30px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px")

    liEl11.addEventListener("click", function(){
        secondsLeft-=5;
        wrong.style.display = "block";
        correct.style.display = "none";
    })

    liEl13.addEventListener("click", function(){
        secondsLeft-=5;
        wrong.style.display = "block";
        correct.style.display = "none";
    })
    
    liEl14.addEventListener("click", function(){
        secondsLeft-=5;
        wrong.style.display = "block";
        correct.style.display = "none";
    })

// Question 2

    liEl12.addEventListener("click", function(){
        startButtonEl.style.display = "none";
        wrong.style.display = "none";
        correct.style.display = "block";
        liEl11.remove();
        liEl12.remove();
        liEl13.remove();
        liEl14.remove();
    
        titleEl.innerHTML = "5592 + 4599 =";
        titleEl.setAttribute("style", "padding:10px 50px 10px")
        instructionEl.style.display = "none";
        instructionCont.append(ulEl);
        ulEl.append(liEl21);
        liEl21.textContent = "10,291";
        liEl21.setAttribute("style", "position:relative; top:100px; font-size:30px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px")
        ulEl.append(liEl22);
        liEl22.textContent = "11,191";
        liEl22.setAttribute("style", "position:relative; top:100px; font-size:30px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px")
        ulEl.append(liEl23);
        liEl23.textContent = "10,191"; // answer
        liEl23.setAttribute("style", "position:relative; top:100px; font-size:30px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px")
        ulEl.append(liEl24);
        liEl24.textContent = "10,201";
        liEl24.setAttribute("style", "position:relative; top:100px; font-size:30px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px")
    
    })

    liEl21.addEventListener("click", function(){
        secondsLeft-=5;
        wrong.style.display = "block";
        correct.style.display = "none";
    })

    liEl22.addEventListener("click", function(){
        secondsLeft-=5;
        wrong.style.display = "block";
        correct.style.display = "none";
    })
    
    liEl24.addEventListener("click", function(){
        secondsLeft-=5;
        wrong.style.display = "block";
        correct.style.display = "none";
    })

// Question 3

    liEl23.addEventListener("click", function(){
        startButtonEl.style.display = "none";
        wrong.style.display = "none";
        correct.style.display = "block";
        liEl21.remove();
        liEl22.remove();
        liEl23.remove();
        liEl24.remove();
    
        titleEl.innerHTML = "24 x 514 =";
        titleEl.setAttribute("style", "padding:10px 50px 10px")
        instructionEl.style.display = "none";
        instructionCont.append(ulEl);
        ulEl.append(liEl31);
        liEl31.textContent = "14,216";
        liEl31.setAttribute("style", "position:relative; top:100px; font-size:30px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px")
        ulEl.append(liEl32);
        liEl32.textContent = "12,436";
        liEl32.setAttribute("style", "position:relative; top:100px; font-size:30px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px")
        ulEl.append(liEl33);
        liEl33.textContent = "13,596";
        liEl33.setAttribute("style", "position:relative; top:100px; font-size:30px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px")
        ulEl.append(liEl34);
        liEl34.textContent = "12,336"; // answer
        liEl34.setAttribute("style", "position:relative; top:100px; font-size:30px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px")
    
    })

    liEl31.addEventListener("click", function(){
        secondsLeft-=5;
        wrong.style.display = "block";
        correct.style.display = "none";
    })

    liEl32.addEventListener("click", function(){
        secondsLeft-=5;
        wrong.style.display = "block";
        correct.style.display = "none";
    })
    
    liEl33.addEventListener("click", function(){
        secondsLeft-=5;
        wrong.style.display = "block";
        correct.style.display = "none";
    })

// Question 4

    liEl34.addEventListener("click", function(){
        startButtonEl.style.display = "none";
        wrong.style.display = "none";
        correct.style.display = "block";
        liEl31.remove();
        liEl32.remove();
        liEl33.remove();
        liEl34.remove();
    
        titleEl.innerHTML = "410201 - 4235 =";
        titleEl.setAttribute("style", "padding:10px 50px 10px")
        instructionEl.style.display = "none";
        instructionCont.append(ulEl);
        ulEl.append(liEl41);
        liEl41.textContent = "5,966"; // answer
        liEl41.setAttribute("style", "position:relative; top:100px; font-size:30px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px")
        ulEl.append(liEl42);
        liEl42.textContent = "5,976";
        liEl42.setAttribute("style", "position:relative; top:100px; font-size:30px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px")
        ulEl.append(liEl43);
        liEl43.textContent = "6,076";
        liEl43.setAttribute("style", "position:relative; top:100px; font-size:30px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px")
        ulEl.append(liEl44);
        liEl44.textContent = "6,056";
        liEl44.setAttribute("style", "position:relative; top:100px; font-size:30px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px")
    
    })

    liEl42.addEventListener("click", function(){
        secondsLeft-=5;
        wrong.style.display = "block";
        correct.style.display = "none";
    })

    liEl43.addEventListener("click", function(){
        secondsLeft-=5;
        wrong.style.display = "block";
        correct.style.display = "none";
    })
    
    liEl44.addEventListener("click", function(){
        secondsLeft-=5;
        wrong.style.display = "block";
        correct.style.display = "none";
    })

// Question 5

    liEl41.addEventListener("click", function(){
        startButtonEl.style.display = "none";
        wrong.style.display = "none";
        correct.style.display = "block";
        liEl41.remove();
        liEl42.remove();
        liEl43.remove();
        liEl44.remove();
    
        titleEl.innerHTML = "18,256 / 56 =";
        titleEl.setAttribute("style", "padding:10px 50px 10px")
        instructionEl.style.display = "none";
        instructionCont.append(ulEl);
        ulEl.append(liEl51);
        liEl51.textContent = "316";
        liEl51.setAttribute("style", "position:relative; top:100px; font-size:30px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px")
        ulEl.append(liEl52);
        liEl52.textContent = "386";
        liEl52.setAttribute("style", "position:relative; top:100px; font-size:30px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px")
        ulEl.append(liEl53);
        liEl53.textContent = "296";
        liEl53.setAttribute("style", "position:relative; top:100px; font-size:30px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px")
        ulEl.append(liEl54);
        liEl54.textContent = "326"; // answer
        liEl54.setAttribute("style", "position:relative; top:100px; font-size:30px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px")
    
    })

    liEl51.addEventListener("click", function(){
        secondsLeft-=5;
        wrong.style.display = "block";
        correct.style.display = "none";
    })

    liEl52.addEventListener("click", function(){
        secondsLeft-=5;
        wrong.style.display = "block";
        correct.style.display = "none";
    })
    
    liEl53.addEventListener("click", function(){
        secondsLeft-=5;
        wrong.style.display = "block";
        correct.style.display = "none";
    })

// Completion within Time

    liEl54.addEventListener("click", function(){
        wrong.style.display = "none";
        correct.style.display = "none";
        titleEl.innerHTML = "Contratulations! You Win!"
        liEl51.remove();
        liEl52.remove();
        liEl53.remove();
        liEl54.remove();
        timerEl.style.display = "none";
        instructionCont.append(enterNameContainer);
        enterNameContainer.setAttribute("style", "display:flex; flex-direction:column; align-items:center");
        enterNameContainer.append(result);
        result.setAttribute("style", "position:relative; top:100px; font-size:20px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px");
        result.textContent = "Your time is " + secondsLeft + " seconds";
        enterNameContainer.append(enterName);
        enterName.setAttribute("style", "position:relative; top:100px; font-size:20px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px");
        enterName.textContent = "Enter your name below and Click Save";
        enterNameContainer.append(input1);
        input1.setAttribute("style", "position:relative; text-align:center; top:100px; font-size:30px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px");
        input1.setAttribute("type", "text-area");
        enterNameContainer.append(save);
        save.setAttribute("style", "position:relative; text-align:center; top:100px; font-size:20px; font-weight:500; list-style:none; border:1px solid black; border-radius:40px; padding:5px 50px 5px; margin:10px; color:white; background-color:red");
        save.setAttribute("onmouseover", "this.style.scale='110%'; this.style.transition='1s'")
        save.setAttribute("onmouseout", "this. style.scale='100%'; this.style.transition='1s'")
        save.textContent = "Save";
        


        // Saving High Score to local storage and rendering it
        
        var records = [];

    
        console.log(records);

        function renderRecords() {
            for (var i = 0; i < records.length; i++) {
                var record = records[i];

                var liRecords = document.createElement("li");
                highscoreRecord.appendChild(liRecords);
                liRecords.textContent = record;
                liRecords.setAttribute("style","list-style:none; text-align:left")
                liRecords.setAttribute("data-index", i);
            }
        }

        function init() {
        
            var storedRecords = JSON.parse(localStorage.getItem("records"));
          
            if (storedRecords !== null) {
              records = storedRecords;
            }
          
          }

        function storeRecords() {
            localStorage.setItem("records", JSON.stringify(records));
            }

        save.addEventListener("click", function(event){
            event.preventDefault();

            var recordText = input1.value.trim();

            if (recordText === "") {
                return;
              }

            records.push("Name: " + recordText + " | " + secondsLeft + " seconds");
            input1.value = "";
            
            enterNameContainer.style.display = "none";
            titleEl.innerHTML = "High Scores";
            tryAgain.style.display = "block";
            highscoreRecord.style.display = "block";
            
            storeRecords();
            renderRecords();
        })

        init(); 
        
    })
    
})

// View Highscore Tab and rendering high scores from local storage

var records = [];

    
console.log(records);

function renderRecords() {
    for (var i = 0; i < records.length; i++) {
        var record = records[i];

        var liRecords = document.createElement("li");
        highscoreRecord.appendChild(liRecords);
        liRecords.textContent = record;
        liRecords.setAttribute("style","list-style:none; text-align:left")
        liRecords.setAttribute("data-index", i);
    }
}

function init() {

    var storedRecords = JSON.parse(localStorage.getItem("records"));
    
    if (storedRecords !== null) {
        records = storedRecords;
    }
}

init();

viewHighscoreEl.addEventListener("click", function(event){
    event.preventDefault();

    viewHighscoreEl.style.display = "none";
    timerEl.style.display = "none";
    instructionEl.style.display = "none";
    startButtonEl.style.display = "none";
    titleEl.innerHTML = "High Scores";
    highscoreRecord.style.display = "block";
    tryAgain.style.display = "block";
    
    renderRecords();   
})

