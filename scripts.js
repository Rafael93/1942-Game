const gameZone = document.querySelector(".game-zone");

const startGame = () => {
  document.querySelector("#start-btn").style.display = "none";
  document.querySelector("#game-title").style.fontSize = "20px";
  spawnHero();
  spawnEnemy();
};

const spawnHero = () => {
  const hero = document.createElement("img");
  const initialPos = [100, 70];
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
    } else if (e.key === "ArrowRight") {
      let actualPosition = parseInt(hero.style.right);
      if (actualPosition > 90) {
        actualPosition -= 10;
        hero.style.right = actualPosition + "px";
      }
    } else if (e.key === "ArrowUp") {
      let actualPosition = parseInt(hero.style.bottom);
      if (actualPosition < 800) {
        actualPosition += 10;
        hero.style.bottom = actualPosition + "px";
      }
    } else if (e.key === "ArrowDown") {
      let actualPosition = parseInt(hero.style.bottom);
      if (actualPosition > 60) {
        actualPosition -= 10;
        hero.style.bottom = actualPosition + "px";
      }
    } else if (e.code === "Space") {
      let x = parseInt(hero.style.right);
      let y = parseInt(hero.style.bottom);
      let currentPosition = [x, y];
      console.log(currentPosition);
      let projectile = document.createElement("div");
      projectile.classList.add("projectile");
      projectile.style.right = currentPosition[0] + 48 + "px";
      projectile.style.bottom = currentPosition[1] + 94 + "px";
      gameZone.appendChild(projectile);
    }
  });
};
