// Simple interaction: click the candle to "blow it out" (toggle flame/smoke)
document.addEventListener("DOMContentLoaded", function () {
  const candle = document.getElementById("candle");
  const audio= document.getElementById("myAudio");
  const deco1= document.getElementById("deco1");
  const deco2= document.getElementById("deco2");
  const deco3= document.getElementById("deco3");
  const deco4= document.getElementById("deco4");
  const deco5= document.getElementById("deco5");
  const deco6= document.getElementById("deco6");
  /*
    function createFirework() {
    const fireworks = document.querySelector('.fireworks');
  
    // Create 8 particles per firework
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('span');
      const angle = (i * 45) * (Math.PI / 180); // distribute in 360 degrees
      const distance = 80; // distance from center
      particle.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
      particle.style.setProperty('--y', `${Math.sin(angle) * distance}px`);
  
      // random color
      particle.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;
  
      // random position
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
  
      fireworks.appendChild(particle);
      console.log("Firework particle created");
  
      // Remove particle after animation
      setTimeout(() => particle.remove(), 1000);
    }
  }
  
  // Launch fireworks every 500ms
  setInterval(createFirework, 500);
  */

  if (!candle) return;

  candle.addEventListener("click", function () {
    var isOut = candle.classList.toggle("out");
    if (isOut) {
      const s1 = candle.querySelector(".smoke-1");
      const s2 = candle.querySelector(".smoke-2");
      if (s1) s1.getBoundingClientRect();
      if (s2) s2.getBoundingClientRect();

      deco1.style.backgroundImage= "url('img1.png')";
      deco1.style.backgroundSize= "cover";
      deco1.style.backgroundPosition= "centre";

      deco2.style.backgroundImage= "url('img2.png')";
      deco2.style.backgroundSize= "cover";
      deco2.style.backgroundPosition= "centre";

      deco3.style.backgroundImage= "url('img3.png')";
      deco3.style.backgroundSize= "cover";
      deco3.style.backgroundPosition= "centre";

      deco4.style.backgroundImage= "url('img4.png')";
      deco4.style.backgroundSize= "cover";
      deco4.style.backgroundPosition= "centre";

      deco5.style.backgroundImage= "url('img5.png')";
      deco5.style.backgroundSize= "cover";
      deco5.style.backgroundPosition= "centre";

      deco6.style.backgroundImage= "url('img6.png')";
      deco6.style.backgroundSize= "cover";
      deco6.style.backgroundPosition= "centre";


      audio.play();

      function createFirework() {
        const fireworks = document.querySelector('.fireworks');

        // Create 8 particles per firework
        for (let i = 0; i < 8; i++) {
          const particle = document.createElement('span');
          const angle = (i * 45) * (Math.PI / 180); // distribute in 360 degrees
          const distance = 80; // distance from center
          particle.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
          particle.style.setProperty('--y', `${Math.sin(angle) * distance}px`);

          // random color
          particle.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;

          // random position
          particle.style.left = `${Math.random() * 100}vw`;
          particle.style.top = `${Math.random() * 100}vh`;

          fireworks.appendChild(particle);

          // Remove particle after animation
          setTimeout(() => particle.remove(), 1000);
        }
      }

      // Launch fireworks every 500ms
      setInterval(createFirework, 500);


    }
  });

});