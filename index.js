document.addEventListener("DOMContentLoaded", () => {
    const languageSwitch = document.getElementById("language-switch");
    const elementsToTranslate = document.querySelectorAll("[data-lang]");

    // Text translations
    const translations = {
        en: {
            "nav-welcome": "{Welcome}",
            "nav-about": "{About}",
            "nav-portfolio": "{Portfolio}",
            "welcome-message": "Welcome to my website!",
            "about-title": "{About Me!}",
            "about-text": "Hi! I'm Felipe, a passionate developer with a keen interest in creating IT solutions. I enjoy solving problems, learning new technologies, and collaborating on innovative projects.",
            "portfolio-title": "{My Portfolio}",
            "portfolio-intro": "In this space I show you some of my projects.",
            "project-title-1": "Project Title 1",
            "project-desc-1": "A brief description of the project goes here.",
            "project-link-1": "View Project",
            "project-title-2": "Project Title 2",
            "project-desc-2": "A brief description of the project goes here.",
            "project-link-2": "View Project",
        },
        es: {
            "nav-welcome": "{Bienvenido}",
            "nav-about": "{Sobre mí}",
            "nav-portfolio": "{Portafolio}",
            "welcome-message": "¡Bienvenido a mi sitio web!",
            "about-title": "{¡Sobre Mí!}",
            "about-text": "¡Hola! Soy Felipe, un desarrollador apasionado con gran interés en crear soluciones tecnológicas. Me encanta resolver problemas, aprender nuevas tecnologías y colaborar en proyectos innovadores.",
            "portfolio-title": "Mi Portafolio}",
            "portfolio-intro": "En este espacio te muestro algunos de mis proyectos.",
            "project-title-1": "Título del Proyecto 1",
            "project-desc-1": "Una breve descripción del proyecto va aquí.",
            "project-link-1": "Ver Proyecto",
            "project-title-2": "Título del Proyecto 2",
            "project-desc-2": "Una breve descripción del proyecto va aquí.",
            "project-link-2": "Ver Proyecto",
        },
    };

    let currentLanguage = "en"; // Default language

    // Switch language function
    function switchLanguage() {
        currentLanguage = currentLanguage === "en" ? "es" : "en";
        languageSwitch.textContent = currentLanguage === "en" ? "Español" : "English";

        elementsToTranslate.forEach((el) => {
            const key = el.getAttribute("data-lang");
            if (translations[currentLanguage][key]) {
                el.textContent = translations[currentLanguage][key];
            }
        });
    }

    // Add event listener to the language switch button
    languageSwitch.addEventListener("click", switchLanguage);
});
