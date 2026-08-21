/* Berrueta Inmobiliaria — interacciones */
(function () {
  "use strict";

  var header = document.querySelector(".header");
  var toggle = document.querySelector(".header__toggle");
  var nav = document.querySelector(".nav");

  /* Header transparente sobre el hero, sólido al scrollear */
  if (header && !header.classList.contains("header--solid")) {
    var onScroll = function () {
      header.classList.toggle("is-solid", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* Menú móvil a pantalla completa */
  if (toggle && nav) {
    var closeMenu = function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú");
      document.body.style.overflow = "";
    };

    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      document.body.style.overflow = open ? "hidden" : "";
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* Revelado suave al entrar en pantalla */
  var revealed = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealed.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.1 });
    revealed.forEach(function (el) { io.observe(el); });
  } else {
    revealed.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Filtros del listado de propiedades */
  var chips = document.querySelectorAll(".filters__chip");
  var items = document.querySelectorAll("[data-operation]");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("is-active"); });
      chip.classList.add("is-active");
      var filter = chip.dataset.filter;
      items.forEach(function (item) {
        var show = filter === "todas" ||
          item.dataset.operation === filter ||
          (item.dataset.tags || "").split(" ").indexOf(filter) !== -1;
        item.style.display = show ? "" : "none";
      });
    });
  });
})();
