/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById("nav__menu"),
  navToggle = document.getElementById("nav__toggle"),
  navClose = document.getElementById("nav__close");

//   Menu Show-------------
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show__menu");
  });
}

// Menu Hide-------------
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  //when we click on each nav-link, we remove the show menu........
  navMenu.classList.remove("show__menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  //When the scroll is greater than 50 viewport height, add the blur background using blur__header class to the header........

  this.scrollY >= 50
    ? header.classList.add("blur__header")
    : header.classList.remove("blur__header");
};
window.addEventListener("scroll", blurHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scroll__Up = document.getElementById("scroll__up");
  //when the scroll is higher than 350vh , add the class show__scroll

  this.scrollY >= 350
    ? scroll__Up.classList.add("show__scroll")
    : scroll__Up.classList.remove("show__scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active__link");
    } else {
      sectionClass.classList.remove("active__link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  opacity: 1,
  scale: 1.1,
  duration: 2500,
  delay: 200,
  // reset: true //Animation Repeat
});

sr.reveal(".home__data, .about__img, .about__data, .visit__data");

sr.reveal(".home__image, .footer__img-1, .footer__img-2", {
  rotate: { z: -15 },
});

sr.reveal(".home__bread, .about__bread", { rotate: { z: 15 } });

sr.reveal(".home__footer", { scale: 1, origin: "bottom" });

sr.reveal(".new__card:nth-child(1) img", { rotate: { z: -30 }, distance: 0 });

sr.reveal(".new__card:nth-child(2) img", {
  rotate: { z: 15 },
  distance: 0,
  delay: 600,
});

sr.reveal(".new__card:nth-child(3) img", {
  rotate: { z: -30 },
  distance: 0,
  delay: 900,
});

sr.reveal(".favourite__card img", {
  interval: 300,
  rotate: { z: 15 },
  distance: 0,
});


sr.reveal(".footer__container", { scale: 1 });