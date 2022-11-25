let time = 0;

//Shows the game when a dificulty is chosen
const showGame = () => {
  var element = document.querySelector(".game");
  element.classList.remove("hide");
};

// hides the difficulty page
const hideMenu = () => {
  var element = document.querySelector(".bg");
  element.classList.add("hide");
};

//Selects easy difficulty
const setEasy = () => {
  bgm = new Audio("../12220034_GAME/audioAssets/easy.mp3");
  time = 2000;
};

// Selects Medium difficulty
const setMid = () => {
  bgm = new Audio("../12220034_GAME/audioAssets/medium.mp3");
  time = 1000;
};

//Selects Insane difficulty
const setHrd = () => {
  bgm = new Audio("../12220034_GAME/audioAssets/BGM.mp3");
  time = 500;
};

//Function to hide some boxes when game is not started
function none() {
  restart.style.display = none;
  lives.style.display = none;
  highscore.style.display = none;
  score.style.display = none;
}

//Randomly spawns enemy at set interval inside the game window
function enemy_pos(time) {
  setInterval(() => {
    const randTop = Math.random() * (containerHeight + 500);
    const randLeft = Math.random() * (containerWidth + 1000);

    enemy.style.position = "absolute";
    enemy.style.top = randTop + "px";
    enemy.style.right = randLeft + "px";
  }, time);
}
