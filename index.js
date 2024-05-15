
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}


const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})
const headingText = "Olá, Meu Nome é Paulo";
const welcomeText = "Seja bem-vindo (Este projeto tem integração com o Vlibras 🧏‍♂️)";
const subtitleText = "Sou estudante do 9° periodo do curso de Ciências Da Computação na Universidade Federal Da Paraíba (UFPB)";
let headingIndex = 0;
let welcomeIndex = 0;
let subtitleIndex = 0;
let speed = 80; 
let apagar = 20;

function typeWriterHeading() {
  if (headingIndex < headingText.length) {
    document.getElementById("typewriter-heading").innerHTML += headingText.charAt(headingIndex);
    headingIndex++;
    setTimeout(typeWriterHeading, speed);
  } else {
    setTimeout(eraseText, speed);
  }
}

function eraseText() {
  if (welcomeIndex > 0) {
    const currentText = document.getElementById("typewriter").innerHTML;
    const newText = currentText.slice(0, -1);
    document.getElementById("typewriter").innerHTML = newText;
    welcomeIndex--;
    setTimeout(eraseText, apagar);
  } else {
    setTimeout(typeWriterSubtitle, apagar);
  }
}

function typeWriterWelcome() {
  if (welcomeIndex < welcomeText.length) {
    document.getElementById("typewriter").innerHTML += welcomeText.charAt(welcomeIndex);
    welcomeIndex++;
    setTimeout(typeWriterWelcome, speed);
  } else {
    document.getElementById("typewriter").innerHTML = welcomeText; 
  }
}

function typeWriterSubtitle() {
  if (subtitleIndex < subtitleText.length) {
    document.getElementById("typewriter").innerHTML += subtitleText.charAt(subtitleIndex);
    subtitleIndex++;
    setTimeout(typeWriterSubtitle, speed);
  } else {
    setTimeout(eraseSubtitle, speed); 
  }
}

function eraseSubtitle() {
  if (subtitleIndex > 0) {
    const currentText = document.getElementById("typewriter").innerHTML;
    const newText = currentText.slice(0, -1);
    document.getElementById("typewriter").innerHTML = newText;
    subtitleIndex--;
    setTimeout(eraseSubtitle, apagar);
  } else {
    subtitleIndex = 0; 
    setTimeout(typeWriterWelcome, apagar);
  }
}

window.addEventListener("load", function() {
  typeWriterHeading();
});
