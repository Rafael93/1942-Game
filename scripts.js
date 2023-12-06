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
    let actualPosition = [
      parseInt(hero.style.right),
      parseInt(hero.style.bottom),
    ];
    switch (e.code) {
      case "ArrowLeft":
        if (actualPosition[0] < 910) {
          actualPosition[0] += 10;
          hero.style.right = actualPosition[0] + "px";
        }
        break;
      case "ArrowRight":
        if (actualPosition[0] > 90) {
          actualPosition[0] -= 10;
          hero.style.right = actualPosition[0] + "px";
        }
        break;
      case "ArrowUp":
        if (actualPosition[1] < 800) {
          actualPosition[1] += 10;
          hero.style.bottom = actualPosition[1] + "px";
        }
        break;
      case "ArrowDown":
        if (actualPosition[1] > 60) {
          actualPosition[1] -= 10;
          hero.style.bottom = actualPosition[1] + "px";
        }
        break;
      case "Space":
        let projectile = document.createElement("div");
        projectile.classList.add("projectile");
        projectile.style.right = actualPosition[0] + 48 + "px";
        projectile.style.bottom = actualPosition[1] + 94 + "px";
        gameZone.appendChild(projectile);
        moveProjectile(projectile);
        break;
    }
  });
};

const moveProjectile = (projectile) => {
  let positionY = parseInt(projectile.style.bottom);
  let intervalID = setInterval(() => {
    positionY += 10;
    projectile.style.bottom = positionY + "px";
    if (positionY > 895) {
      clearInterval(intervalID);
      projectile.remove();
    }
  }, 100);
};
