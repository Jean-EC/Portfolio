window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

const divIDs = ["apropos", "Bienvenue", "contact"];

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  divIDs.forEach((divID) => {
    const maDiv = document.querySelector(`#${divID}`);
    if (maDiv) {
      const divMiddle =
        maDiv.getBoundingClientRect().top + maDiv.offsetHeight / 2;
      if (divMiddle <= window.innerHeight && divMiddle >= 0) {
        const nomDeLaDiv = divID.charAt(0).toUpperCase() + divID.slice(1);
        document.querySelector(
          ".navbar-brand p"
        ).textContent = `[${nomDeLaDiv}@Portfolio ~]$`;
      }
    }
  });
});


//Competences deroulantes pour un texte court
const skillLinks = document.querySelectorAll('.skill-link');

skillLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('data-target');

        const targetText = document.getElementById(targetId);

        const skillTexts = document.querySelectorAll('.skill-text');

        skillTexts.forEach((text) => {
            text.style.display = 'none';
        });

        if (targetText) {
            targetText.style.display = 'block';
        }
    });
});

//Gestion des inputs dans le terminal
const terminalForm = document.querySelector('.terminal-form');
const terminalInput = document.querySelector('.terminal-input');

terminalForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const command = terminalInput.value.toLowerCase().trim();
  //Obligation d'utilisation de "cd (argument)" pour pouvoir ajouter des commandes plus tard (ls , exit etc viendront apres)
  if (command.startsWith('cd ')) {
    const targetSectionId = command.substring(3);
    const targetSection = document.getElementById(targetSectionId);
    //Scroll jusqu'a la section demandee si elle est sur la page
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    } else {
     //Log pour debug
      console.log(`"${targetSectionId}" n'a pas été trouvé dans le terminal.`);
    }
    //Vider la ligne apres une commande
    terminalInput.value = '';
  }
});


//On/Off du terminal
const terminalToggle = document.querySelector('.terminal-toggle');
const terminalContainer = document.querySelector('.terminal-container');
terminalToggle.addEventListener('click', () => {
  terminalContainer.classList.toggle('open');
});
const closeTerminalButton = document.querySelector('.close-terminal');
closeTerminalButton.addEventListener('click', () => {
  terminalContainer.classList.remove('open');
});
