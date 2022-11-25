// Selecting from html
const cursor = document.querySelector(".cursor");
const bullethole = document.querySelector(".bullethole");
const startBtn = document.querySelector(".startButton");
const container = document.querySelector(".gameContainer");
const lives = document.querySelector(".lives");
const restart = document.querySelector(".restart");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const start = document.querySelector(".start");
const controls = document.querySelector(".controls");
const control = document.querySelector(".control");

// Getting heiight and width of container
const containerHeight = container.offsetHeight;
const containerWidth = container.offsetWidth;

// Adding sound effect and bgm
const shootAudio = new Audio("../12220034_GAME/audioAssets/shoot.mp3");
// let bgm = new Audio("BGM.mp3");

// Creating enemy image using js
const enemy = document.createElement("img");
enemy.setAttribute("class", "enemy");
enemy.setAttribute("src", "../12220034_Game/imageAssets/enemy.jpeg");

// tracks cursor movement
window.addEventListener("mousemove", (e) => {
  //   console.log(e);
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});

//Keys to toggle bgm on and off
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "m":
      bgm.pause();
      break;

    case "p":
      bgm.play();
      break;
  }
});

//calling Function to hide some boxes when game is not started

// variables that change
let points = 0;
let tries = 4;
let hscore = 0;



//function that starts the game
const gameStart = () => {
  bgm.play();
  container.appendChild(enemy); //appends the enemy image to the html
  startBtn.style.display = "none";
  score.style.display = "flex";
  score.innerHTML = "Score:" + points;
  lives.style.display = "flex";
  lives.innerHTML = "Lives:" + tries;
  enemy_pos(time); //function that randomly generates the enemy on the screen
  spawn = enemy_pos(time);

  //display the bullethole when clicked
  window.addEventListener("click", (e) => {
    // console.log(e)
    shootAudio.play();
    bullethole.style.top = e.pageY + "px";
    bullethole.style.left = e.pageX + "px";

    if (e.target === enemy) {
      points++;
      score.innerHTML = "Score:" + points; //displays scores
    } else if (tries <= 0) {
      restart.style.display = "block";

      if (points > hscore) {
        highscore.style.display = "flex";
        highscore.innerHTML = "Highscore:" + points; //displays highscores
      }
      restart.innerHTML = "Retry?";
      clearInterval(spawn); //stops spawning enemy
      enemy.style.display = "none"; //hides the enemy
      bgm.pause();
    } else {
      tries--;
      lives.innerHTML = "Lives: " + tries;
    }
  });
};

//function to start the game again
const again = () => {
  enemy.style.display = "block";
  points = 0;
  score.innerHTML = "Score:" + points;
  tries = 4;
  restart.style.display = "none";
  bgm.play();
};
