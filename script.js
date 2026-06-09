/* ============================================================
   Luthfiano Alzaky — Portfolio interactions
   ============================================================ */
(function () {
  "use strict";

  const root = document.documentElement;

  /* ---------- Language toggle (EN / ID) ---------- */
  const langBtns = document.querySelectorAll(".lang-toggle__btn");
  const STORE_KEY = "la-portfolio-lang";

  function setLang(lang) {
    const next = lang === "id" ? "id" : "en";
    root.classList.remove("lang-en", "lang-id");
    root.classList.add("lang-" + next);
    root.setAttribute("lang", next);
    langBtns.forEach((b) => b.classList.toggle("is-active", b.dataset.lang === next));
    try { localStorage.setItem(STORE_KEY, next); } catch (e) {}
  }

  langBtns.forEach((btn) =>
    btn.addEventListener("click", () => setLang(btn.dataset.lang))
  );

  // Restore saved preference (default stays EN from the HTML class)
  try {
    const saved = localStorage.getItem(STORE_KEY);
    if (saved) setLang(saved);
  } catch (e) {}

  /* ---------- Mobile nav ---------- */
  const burger = document.getElementById("navBurger");
  const navLinks = document.getElementById("navLinks");

  function closeMenu() {
    navLinks.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  }

  burger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

  /* ---------- Nav shadow on scroll ---------- */
  const nav = document.getElementById("nav");
  const toTop = document.getElementById("toTop");

  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle("is-scrolled", y > 8);
    toTop.classList.toggle("is-visible", y > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-in"));
  }

  /* ---------- Scrollspy (active nav link) ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const linkMap = {};
  document.querySelectorAll(".nav__links a").forEach((a) => {
    linkMap[a.getAttribute("href").slice(1)] = a;
  });

  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = linkMap[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            Object.values(linkMap).forEach((l) => l.classList.remove("is-active"));
            link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
