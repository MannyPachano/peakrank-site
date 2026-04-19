(function () {
  var btn = document.querySelector(".hamburger");
  var nav = document.querySelector(".nav-links");
  if (!btn || !nav) return;

  btn.addEventListener("click", function () {
    document.body.classList.toggle("nav-open");
    var open = document.body.classList.contains("nav-open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      document.body.classList.remove("nav-open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
})();
