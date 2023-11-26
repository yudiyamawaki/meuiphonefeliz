
// Função para rolagem suave ao clicar em links
// script.js

// Função para rolagem suave ao clicar em links
function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  }
  
  // Adicione um ouvinte de eventos para cada link do menu
  document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("nav ul li a");
    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        var target = link.getAttribute("href");
        smoothScroll(target, 1000); // Tempo de duração da rolagem em milissegundos (1000ms = 1s)
      });
    });
  });
  