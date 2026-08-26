(function () {
  var btn = document.querySelector(".hamburger");
  var nav = document.querySelector(".nav-links");
  if (!btn || !nav) return;

  function setOpen(open) {
    document.body.classList.toggle("nav-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function close(returnFocus) {
    if (!document.body.classList.contains("nav-open")) return;
    setOpen(false);
    // Focus would otherwise be left behind the closed overlay with nothing on
    // screen showing where it is.
    if (returnFocus) btn.focus();
  }

  btn.addEventListener("click", function () {
    setOpen(!document.body.classList.contains("nav-open"));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      close(false);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close(true);
  });

  // Leaving the mobile breakpoint with the overlay open would otherwise strand
  // body.nav-open, which locks scrolling on desktop.
  var wide = window.matchMedia("(min-width: 961px)");
  var onChange = function (e) {
    if (e.matches) close(false);
  };
  if (wide.addEventListener) wide.addEventListener("change", onChange);
  else if (wide.addListener) wide.addListener(onChange);
})();
