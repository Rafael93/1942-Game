const gameZone = document.querySelector(".game-zone");

const startGame = () => {
  document.querySelector("#start-btn").style.display = "none";
  document.querySelector("#game-title").style.fontSize = "20px";
  spawnHero();
  spawnEnemy();
};

const spawnHero = () => {
  const hero = document.createElement("img");
  const initialPos = [500, 70];
  hero.className = "hero";
  hero.src = "img/hero.gif";
  hero.style.right = initialPos[0] + "px";
  hero.style.bottom = initialPos[1] + "px";
  gameZone.appendChild(hero);
  moveHero(hero);
};

const spawnEnemy = () => {
  const enemy = document.createElement("div");
  enemy.className = "enemy";
  gameZone.appendChild(enemy);
};

const moveHero = (hero) => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      let actualPosition = parseInt(hero.style.right);
      if (actualPosition < 910) {
        actualPosition += 10;
        hero.style.right = actualPosition + "px";
      }
    }
    if (e.key === "ArrowRight") {
      let actualPosition = parseInt(hero.style.right);
      if (actualPosition > 90) {
        actualPosition -= 10;
        hero.style.right = actualPosition + "px";
      }
    }
    if (e.key === "ArrowUp") {
      let actualPosition = parseInt(hero.style.bottom);
      if (actualPosition < 800) {
        actualPosition += 10;
        hero.style.bottom = actualPosition + "px";
      }
    }
    if (e.key === "ArrowDown") {
      let actualPosition = parseInt(hero.style.bottom);
      if (actualPosition > 60) {
        actualPosition -= 10;
        hero.style.bottom = actualPosition + "px";
      }
    }
  });
};
