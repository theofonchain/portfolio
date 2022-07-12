// this script allow to switch between english and french
const switchButton = document.getElementById("language_switch");
let elementTagToSwitch = ["h2", "h3", "h4", "p", "li"]
let tempp = [];
let elementsToSwitch = [];
let isPageInEnglish = false;
let textInEnglish = []
let textInFrench = []
                 
textInFrench = [
"Développeur, administrateur systèmes et réseaux",
"Présentation",
"Compétences",
"Projets",
"",
"Développement",
"Systèmes",
"Réseaux",
"Sites internet",
"Jeux vidéos",
"Maîtrise avancée",
"Maîtrise intermédiaire",
"Maîtrise basique",
"Maîtrise intermédiaire",
"Maîtrise basique",
"Maîtrise intermédiaire",
"Maîtrise basique",
"",
"Jeu d'Échecs",
"",
"Bienvenue sur mon portfolio. Je m'appelle Théo Fonchain, je suis étudiant en 1ère année de cycle ingénieur en apprentissage à EPITA avec une spécialité en Cybersécurité et Systèmes. J'ai formé un contrat d'apprentissage avec l'entreprise Pierre & Vacances, en tant qu'Ingénieur Système Windows.",
"Toutes les informations sensibles ont été cachées. Vous pouvez cliquer sur une image pour l'agrandir.",
"",
"Ce site internet est toujours en ligne, et va être mis à jour. Les deux dernières images représentent la dernière version du site. Il est utilisé pour promouvoir une activité.",
"",
"Ce site internet n'est plus en ligne. Il était utilisé pour promouvoir une association.",
"",
"Ce jeu est en cours de développement. Le gif donne une impression de lag mais le jeu est bien stable à 60fps sur mobile. Les méchaniques de jeu marchent très bien, la plupart du travail restant concerne l'UI (l'interface utilisateur) et les graphismes.",
"",
"Ce jeu est un projet de groupe, où nous devions réaliser un jeu en Java. Nous avons choisi de faire un jeu d'échecs.",
"",
"Ce jeu est un projet de groupe, où nous devions utiliser PHP, SQL and JavaScript. Nous avons décidé de faire un jeu simple où l'on doit esquiver des obstacles. Nous stockons les scores dans une base de données MySql gratutie et on les affiche dans un tableau.",
"N'hésitez pas à me contacter. Vous pouvez m'envoyer un mail sur mon adresse personnelle theofonchain@protonmail.com ou bien sur mon adresse professionnelle theo.fonchain@epita.fr.",
"<a href='#présentation'>Présentation</a>",
"<a href='#compétences'>Compétences</a>",
"<a href='#projets'>Projets</a>",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"Modèle OSI",
"Routeurs et commutateurs CISCO",
"",
"",
"",
"",
"",
"Pare-feux",
""
];

textInEnglish = [
"Developer, systems and network administrator",
"Presentation",
"Skills",
"Projects",
"",
"Development",
"Systems",
"Networks",
"Websites",
"Video games",
"Advanced mastery",
"Intermediate mastery",
"Basic mastery",
"Intermediate mastery",
"Basic mastery",
"Intermediate mastery",
"Basic mastery",
"",
"Chess game",
"",
"Welcome to my portfolio. My name is Théo Fonchain, I am a student in the 1st year of an engineering cycle at EPITA with a specialty in Cybersecurity and Systems. I formed an apprenticeship contract with the company Pierre & Vacances, as a Windows System Engineer.",
"All sensitive information has been hidden. You may click on an image to enlarge it.",
"",
"This website is still online, and will be updated. The last two images represent the latest version of the site. It is used to promote an activity.",
"",
"This website is no longer online. It was used to promote an association.",
"",
"This game is under development. The gif gives an impression of lag but the game is very stable at 60fps on mobile. The game mechanics are working very well, most of the remaining work is on the UI (user interface) and graphics.",
"",
"This game is a group project, where we had to make a game in Java. We chose to make a game of chess.",
"",
"This game is a group project, where we had to use PHP, SQL and JavaScript. We decided to make a simple game where you have to dodge obstacles. We store the scores in a free MySql database and display them in a table.",
"Do not hesitate to contact me. You can send me an email on my personal address theofonchain@protonmail.com or on my professional address theo.fonchain@epita.fr.",
"<a href='#présentation'>Presentation</a>",
"<a href='#compétences'>Skills</a>",
"<a href='#projets'>Projects</a>",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"OSI model",
"CISCO routers and switches",
"",
"",
"",
"",
"",
"Firewall",
""
];

for (let y = 0; y < elementTagToSwitch.length; y++) {
    tempp.push(document.getElementsByTagName(elementTagToSwitch[y]));
}


for (let z = 0; z < tempp.length; z++) {
    for (let y = 0; y < tempp[z].length; y++) {
        // run console.log(tempp[z][y].innerText); to see all elements
        elementsToSwitch.push(tempp[z][y]);
    }
}

function SwitchLanguages(){
    isPageInEnglish = !isPageInEnglish;
    for (let i = 0; i < elementsToSwitch.length; i++) {
        if (isPageInEnglish){
            if (textInEnglish[i] != null && textInEnglish[i] !== ""){
                elementsToSwitch[i].innerHTML = textInEnglish[i];
            }
        }
        else{
            if (textInFrench[i] != null && textInFrench[i] !== ""){
                elementsToSwitch[i].innerHTML = textInFrench[i];
            }
        }
    }
}

switchButton.addEventListener("click", SwitchLanguages);
