/* Berrueta Inmobiliaria — interacciones de la interfaz */
(function () {
  "use strict";

  var header = document.querySelector(".header");
  var toggle = document.querySelector(".header__toggle");
  var nav = document.querySelector(".nav");

  /* Sombra del header al hacer scroll */
  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Menú móvil */
  function closeMenu() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú");
  }

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  });

  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  /* Tabs del buscador (Venta / Alquiler / Temporal) */
  var tabs = document.querySelectorAll(".search__tab");
  var operacion = document.querySelector('.search input[name="operacion"]');

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) {
        t.classList.remove("is-active");
        t.setAttribute("aria-pressed", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-pressed", "true");
      if (operacion) operacion.value = tab.dataset.value;
    });
  });
})();
