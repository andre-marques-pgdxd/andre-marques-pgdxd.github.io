// Mostrar o botão após fazer scroll
window.addEventListener("scroll", function () {
  scrollFunction()
});


function scrollFunction() {
  const scrollToTopButton = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

// Voltar ao topo quando clicado
function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
}
