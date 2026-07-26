/* =========================================================
   Nákupko — main.js
   Přepínání světlého/tmavého režimu, mobilní menu,
   FAQ akordeon, animace při scrollu, rok v patičce.
   Bez knihoven, bez cookies (jen localStorage pro téma).
   ========================================================= */

(function () {
  "use strict";

  /* ---------- Téma (light / dark) ---------- */
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("nakupko-theme"); } catch (e) {}
  if (saved === "light" || saved === "dark") {
    root.setAttribute("data-theme", saved);
  }

  function currentTheme() {
    var attr = root.getAttribute("data-theme");
    if (attr) return attr;
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark" : "light";
  }

  function setToggleIcon(btn) {
    if (!btn) return;
    btn.textContent = currentTheme() === "dark" ? "☀︎" : "☾︎";
    btn.setAttribute(
      "aria-label",
      currentTheme() === "dark" ? "Přepnout na světlý režim" : "Přepnout na tmavý režim"
    );
  }

  var toggle = document.querySelector(".theme-toggle");
  setToggleIcon(toggle);
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("nakupko-theme", next); } catch (e) {}
      setToggleIcon(toggle);
    });
  }

  /* ---------- Mobilní menu ---------- */
  var menuBtn = document.querySelector(".menu-toggle");
  var navLinks = document.querySelector(".nav-links");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") navLinks.classList.remove("open");
    });
  }

  /* ---------- FAQ akordeon ---------- */
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var q = item.querySelector(".faq-q");
    if (!q) return;
    q.setAttribute("aria-expanded", "false");
    q.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      faqItems.forEach(function (other) {
        other.classList.remove("open");
        var oq = other.querySelector(".faq-q");
        if (oq) oq.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        q.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------- Animace při scrollu ---------- */
  var reveal = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && reveal.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveal.forEach(function (el) { io.observe(el); });
  } else {
    reveal.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Rok v patičce ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
