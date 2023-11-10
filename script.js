const sun = document.querySelector('.sun');
const planets = document.querySelectorAll('.planet');

let angle = 0;
const orbitRadius = 150;

function movePlanets() {
  angle += 0.01;

  planets.forEach((planet, index) => {
    const x = orbitRadius * Math.cos(angle * (index + 1));
    const y = orbitRadius * Math.sin(angle * (index + 1));

    planet.style.transform = `translate(${x}px, ${y}px)`;
  });

  requestAnimationFrame(movePlanets);
}

movePlanets();
