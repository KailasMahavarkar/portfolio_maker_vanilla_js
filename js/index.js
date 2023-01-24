// const themes = {
//     "aqua": {
//         primary: "#09ecf3",
//         "primary-content": "#005355",
//         secondary: "#966fb3",
//         accent: "#ffe999",
//         neutral: "#3b8ac4",
//         "base-100": "#345da7",
//         "info": "#2563eb",
//         "success": "#16a34a",
//         "warning": "#d97706",
//         "error": "#dc2626",
//     },
//     "black": {
//         primary: "#343232",
//         secondary: "#343232",
//         accent: "#343232",
//         "base-100": "#000000",
//         "base-200": "#0D0D0D",
//         "base-300": "#1A1919",
//         neutral: "#272626",
//         "neutral-focus": "#343232",
//         info: "#0000ff",
//         success: "#008000",
//         warning: "#ffff00",
//         error: "#ff0000",
//         "--rounded-box": "0",
//         "--rounded-btn": "0",
//         "--rounded-badge": "0",
//         "--animation-btn": "0",
//         "--animation-input": "0",
//         "--btn-text-case": "lowercase",
//         "--btn-focus-scale": "1",
//         "--tab-radius": "0",
//     },
//     "bumblebee": {
//         primary: "#e0a82e",
//         "primary-content": "#181830",
//         secondary: "#f9d72f",
//         "secondary-content": "#181830",
//         accent: "#181830",
//         neutral: "#181830",
//         "base-100": "#ffffff",
//     },
//     "cmyk": {
//         primary: "#45AEEE",
//         secondary: "#E8488A",
//         accent: "#FFF232",
//         neutral: "#1a1a1a",
//         "base-100": "#ffffff",
//         info: "#4AA8C0",
//         success: "#823290",
//         warning: "#EE8133",
//         error: "#E93F33",
//     },
//     "corporate": {
//         primary: "#4b6bfb",
//         secondary: "#7b92b2",
//         accent: "#67cba0",
//         neutral: "#181a2a",
//         "neutral-content": "#edf2f7",
//         "base-100": "#ffffff",
//         "base-content": "#181a2a",
//         "--rounded-box": "0.25rem",
//         "--rounded-btn": ".125rem",
//         "--rounded-badge": ".125rem",
//         "--animation-btn": "0",
//         "--animation-input": "0",
//         "--btn-focus-scale": "1",
//     },
//     "cupcake": {
//         primary: "#65c3c8",
//         secondary: "#ef9fbc",
//         accent: "#eeaf3a",
//         neutral: "#291334",
//         "base-100": "#faf7f5",
//         "base-200": "#efeae6",
//         "base-300": "#e7e2df",
//         "base-content": "#291334",
//         "--rounded-btn": "1.9rem",
//         "--tab-border": "2px",
//         "--tab-radius": ".5rem",
//     },
//     "cyberpunk": {
//         fontFamily: "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
//         primary: "#ff7598",
//         secondary: "#75d1f0",
//         accent: "#c07eec",
//         neutral: "#423f00",
//         "neutral-content": "#ffee00",
//         "base-100": "#ffee00",
//         "--rounded-box": "0",
//         "--rounded-btn": "0",
//         "--rounded-badge": "0",
//         "--tab-radius": "0",
//     },
//     "dark": {
//         primary: "#661AE6",
//         "primary-content": "#ffffff",
//         secondary: "#D926AA",
//         "secondary-content": "#ffffff",
//         accent: "#1FB2A5",
//         "accent-content": "#ffffff",
//         neutral: "#191D24",
//         "neutral-focus": "#111318",
//         "neutral-content": "#A6ADBB",
//         "base-100": "#2A303C",
//         "base-200": "#242933",
//         "base-300": "#20252E",
//         "base-content": "#A6ADBB",
//     },
//     "dracula": {
//         primary: "#ff79c6",
//         secondary: "#bd93f9",
//         accent: "#ffb86c",
//         neutral: "#414558",
//         "base-100": "#282a36",
//         "base-content": "#f8f8f2",
//         info: "#8be9fd",
//         success: "#50fa7b",
//         warning: "#f1fa8c",
//         error: "#ff5555",
//     },
//     "emerald": {
//         primary: "#66cc8a",
//         "primary-content": "#223D30",
//         secondary: "#377cfb",
//         "secondary-content": "#f9fafb",
//         accent: "#ea5234",
//         "accent-content": "#f9fafb",
//         neutral: "#333c4d",
//         "neutral-content": "#f9fafb",
//         "base-100": "#ffffff",
//         "base-content": "#333c4d",
//         "--animation-btn": "0",
//         "--animation-input": "0",
//         "--btn-focus-scale": "1",
//     },
//     "fantasy": {
//         primary: "#6e0b75",
//         secondary: "#007ebd",
//         accent: "#f8860d",
//         neutral: "#1f2937",
//         "base-100": "#ffffff",
//         "base-content": "#1f2937",
//     },
//     "forest": {
//         primary: "#1eb854",
//         "primary-content": "#c2ffd7",
//         secondary: "#1fd65f",
//         accent: "#d99330",
//         neutral: "#110e0e",
//         "base-100": "#171212",
//         "--rounded-btn": "1.9rem",
//     },
//     "garden": {
//         primary: "#5c7f67",
//         secondary: "#ecf4e7",
//         "secondary-content": "#24331a",
//         accent: "#fae5e5",
//         "accent-content": "#322020",
//         neutral: "#5d5656",
//         "neutral-content": "#e9e7e7",
//         "base-100": "#e9e7e7",
//         "base-content": "#100f0f",
//     },
//     "halloween": {
//         primary: "#f28c18",
//         "primary-content": "#131616",
//         secondary: "#6d3a9c",
//         accent: "#51a800",
//         neutral: "#1b1d1d",
//         "base-100": "#212121",
//         info: "#2563eb",
//         success: "#16a34a",
//         warning: "#d97706",
//         error: "#dc2626",
//     },
//     "light": {
//         primary: "#570df8",
//         "primary-content": "#ffffff",
//         secondary: "#f000b8",
//         "secondary-content": "#ffffff",
//         accent: "#37cdbe",
//         "accent-content": "#163835",
//         neutral: "#3d4451",
//         "neutral-content": "#ffffff",
//         "base-100": "#ffffff",
//         "base-200": "#F2F2F2",
//         "base-300": "#E5E6E6",
//         "base-content": "#1f2937",
//     },
//     "lofi": {
//         "primary": "#0D0D0D",
//         "primary-content": "#ffffff",
//         "secondary": "#1A1919",
//         "secondary-content": "#ffffff",
//         "accent": "#262626",
//         "accent-content": "#ffffff",
//         "neutral": "#000000",
//         "neutral-content": "#ffffff",
//         "base-100": "#ffffff",
//         "base-200": "#F2F2F2",
//         "base-300": "#E6E5E5",
//         "base-content": "#000000",
//         "info": "#0070F3",
//         "info-content": "#ffffff",
//         "success": "#21CC51",
//         "success-content": "#ffffff",
//         "warning": "#FF6154",
//         "warning-content": "#ffffff",
//         "error": "#DE1C8D",
//         "error-content": "#ffffff",
//         "--rounded-box": "0.25rem",
//         "--rounded-btn": "0.125rem",
//         "--rounded-badge": "0.125rem",
//         "--animation-btn": "0",
//         "--animation-input": "0",
//         "--btn-focus-scale": "1",
//         "--tab-radius": "0",
//     },
//     "luxury": {
//         primary: "#ffffff",
//         secondary: "#152747",
//         accent: "#513448",
//         neutral: "#171618",
//         "neutral-content": "#dca54c",
//         "base-100": "#09090b",
//         "base-200": "#171618",
//         "base-300": "#2e2d2f",
//         "base-content": "#dca54c",
//         info: "#66c6ff",
//         success: "#87d039",
//         warning: "#e2d562",
//         error: "#ff6f6f",
//     },
//     "pastel": {
//         primary: "#d1c1d7",
//         secondary: "#f6cbd1",
//         accent: "#b4e9d6",
//         neutral: "#70acc7",
//         "base-100": "#ffffff",
//         "base-200": "#f9fafb",
//         "base-300": "#d1d5db",
//         "--rounded-btn": "1.9rem",
//     },
//     "retro": {
//         primary: "#ef9995",
//         "primary-content": "#282425",
//         secondary: "#a4cbb4",
//         "secondary-content": "#282425",
//         accent: "#ebdc99",
//         "accent-content": "#282425",
//         neutral: "#7d7259",
//         "neutral-content": "#e4d8b4",
//         "base-100": "#e4d8b4",
//         "base-200": "#d2c59d",
//         "base-300": "#c6b386",
//         "base-content": "#282425",
//         "info": "#2563eb",
//         "success": "#16a34a",
//         "warning": "#d97706",
//         "error": "#dc2626",
//         "--rounded-box": "0.4rem",
//         "--rounded-btn": "0.4rem",
//         "--rounded-badge": "0.4rem",
//     },
//     "synthwave": {
//         primary: "#e779c1",
//         secondary: "#58c7f3",
//         accent: "#f3cc30",
//         neutral: "#20134e",
//         "neutral-content": "#f9f7fd",
//         "base-100": "#2d1b69",
//         "base-content": "#f9f7fd",
//         info: "#53c0f3",
//         "info-content": "#201047",
//         success: "#71ead2",
//         "success-content": "#201047",
//         warning: "#f3cc30",
//         "warning-content": "#201047",
//         error: "#e24056",
//         "error-content": "#f9f7fd",
//     },
//     "valentine": {
//         primary: "#e96d7b",
//         secondary: "#a991f7",
//         accent: "#88dbdd",
//         neutral: "#af4670",
//         "neutral-content": "#f0d6e8",
//         "base-100": "#f0d6e8",
//         "base-content": "#632c3b",
//         "info": "#2563eb",
//         "success": "#16a34a",
//         "warning": "#d97706",
//         "error": "#dc2626",
//         "--rounded-btn": "1.9rem",
//     },
//     "wireframe": {
//         fontFamily: 'Chalkboard,comic sans ms,"sanssecondaryerif"',
//         primary: "#b8b8b8",
//         secondary: "#b8b8b8",
//         accent: "#b8b8b8",
//         neutral: "#ebebeb",
//         "base-100": "#ffffff",
//         "base-200": "#eeeeee",
//         "base-300": "#dddddd",
//         info: "#0000ff",
//         success: "#008000",
//         warning: "#a6a659",
//         error: "#ff0000",
//         "--rounded-box": "0.2rem",
//         "--rounded-btn": "0.2rem",
//         "--rounded-badge": "0.2rem",
//         "--tab-radius": "0.2rem",
//     },
//     "autumn": {
//         primary: "#8C0327",
//         secondary: "#D85251",
//         accent: "#D59B6A",
//         neutral: "#826A5C",
//         "base-100": "#f1f1f1",
//         info: "#42ADBB",
//         success: "#499380",
//         warning: "#E97F14",
//         error: "#DF1A2F",
//     },
//     "business": {
//         primary: "#1C4E80",
//         secondary: "#7C909A",
//         accent: "#EA6947",
//         neutral: "#23282E",
//         "base-100": "#202020",
//         info: "#0091D5",
//         success: "#6BB187",
//         warning: "#DBAE59",
//         error: "#AC3E31",
//         "--rounded-box": "0.25rem",
//         "--rounded-btn": ".125rem",
//         "--rounded-badge": ".125rem",
//     },
//     "acid": {
//         primary: "#FF00F4",
//         secondary: "#FF7400",
//         accent: "#CBFD03",
//         neutral: "#191A3F",
//         "base-100": "#fafafa",
//         info: "#3194F6",
//         success: "#5FC992",
//         warning: "#F7DE2D",
//         error: "#E60300",
//         "--rounded-box": "1.25rem",
//         "--rounded-btn": "1rem",
//         "--rounded-badge": "1rem",
//     },
//     "lemonade": {
//         primary: "#519903",
//         secondary: "#E9E92E",
//         accent: "#F7F9CA",
//         neutral: "#191A3F",
//         "base-100": "#ffffff",
//         info: "#C8E1E7",
//         success: "#DEF29F",
//         warning: "#F7E589",
//         error: "#F2B6B5",
//     },
//     "night": {
//         "primary": "#38bdf8",
//         "secondary": "#818CF8",
//         "accent": "#F471B5",
//         "neutral": "#1E293B",
//         "neutral-focus": "#273449",
//         "base-100": "#0F172A",
//         "info": "#0CA5E9",
//         "success": "#2DD4BF",
//         "warning": "#F4BF50",
//         "error": "#FB7085",
//     },
//     "coffee": {
//         "primary": "#DB924B",
//         "secondary": "#263E3F",
//         "accent": "#10576D",
//         "neutral": "#120C12",
//         "base-100": "#20161F",
//         "base-content": "#756E63",
//         "info": "#8DCAC1",
//         "success": "#9DB787",
//         "warning": "#FFD25F",
//         "error": "#FC9581",
//     },
//     "winter": {
//         "primary": "#047AFF",
//         "secondary": "#463AA2",
//         "accent": "#C148AC",
//         "neutral": "#021431",
//         "base-100": "#ffffff",
//         "base-200": "#F2F7FF",
//         "base-300": "#E3E9F4",
//         "base-content": "#394E6A",
//         "info": "#93E7FB",
//         "success": "#81CFD1",
//         "warning": "#EFD7BB",
//         "error": "#E58B8B",
//     },
// }

const projects = [
    {
        title: "Pastekey.io",
        info: `Pastekey.io is a web application that allows you to paste text and save it to a database. All private paste are encrypted by AES-256 encryption, It doesn't store your password or even your password hash in database.`,
        website: "https://pastekey.io",
        github: "",
        apidoc: "",
        imageurl: {
            light: "https://i.imgur.com/FYjmYoy.jpeg",
            dark: "https://i.imgur.com/EChbKi1.jpeg",
        },
        techstack: ["NextJS", "Redis", "MongoDB", "AWS", "CI/CD", "JWT"],
    },
    {
        title: "DynoPictures.com",
        info: "Dynopictures.com is portfolio website made for Rahul Dyno an business enthusiast, it showcases his work and projects.",
        website: "https://dynopictures.com",
        github: "http://github.com/KailasMahavarkar/",
        apidoc: "",
        imageurl: {
            light: "https://i.imgur.com/HPjiNIk.jpeg",
            dark: "https://i.imgur.com/HPjiNIk.jpeg",
        },
        techstack: ["NextJS", "ReactJS"],
    },
    {
        title: "Anandpal",
        info: "Ecommerce + Blogging App made for motivational speaker & doctor Mr Anand & Mrs Pallavi",
        website: "https://orkait-anandpal.netlify.com",
        github: "http://github.com/KailasMahavarkar/",
        apidoc: "",
        imageurl: {
            light: "https://i.imgur.com/vK8kli2.jpeg",
            dark: "https://i.imgur.com/vK8kli2.jpeg",
        },
        techstack: ["EditorJS CMS", "ReactJS", "Redis", "MongoDB", "CI/CD"],
    },
    {
        title: "Resume Score Analyzer",
        info: "Scan any IT resume and rank it (KNN + SVM + XGBOOST)",
        website: "https://orka-resumescanner.netlify.com",
        github: "https://github.com/KailasMahavarkar/ResumeScannerML",
        apidoc: "",
        imageurl: {
            light: "https://i.imgur.com/76XZ2tu.jpeg",
            dark: "https://i.imgur.com/76XZ2tu.jpeg",
        },
        techstack: ["Machine Learning"],
    },
    {
        title: "BuildYourPC",
        info: "Build your own PC is a webapp aims to reduce the time spent on building a PC, it provides you with a list of components and you can build your own PC",
        website: "https://buildyourpc.netlify.com",
        github: "https://github.com/KailasMahavarkar/BuildYourPC",
        apidoc: "",
        imageurl: {
            light: "https://i.imgur.com/76XZ2tu.jpeg",
            dark: "https://i.imgur.com/76XZ2tu.jpeg",
        },
        techstack: ["Django", "SQL"],
    },
];


// let previousActiveID = '';
// let activeID = '';

const findAndSync = (name) => {
    if (localStorage.getItem(name)) {
        const element = document.getElementById(name);
        if (element) {
            element.value = localStorage.getItem(name);
        }
    }
}

const findAndSyncCheckbox = (name) => {
    const element = document.getElementById(name);

    // get value from local storage
    const value = localStorage.getItem(name);

    if (element && value) {
        element.checked = JSON.parse(value);
    }

}

const loadTheme = () => {
    window.onload = () => {
        // check if theme key exists in local storage
        if (localStorage.getItem('theme')) {
            // set active element
            activeID = localStorage.getItem('theme');
            document.documentElement.setAttribute('data-theme', activeID);
            document.getElementById(activeID)?.classList.add('selected');
        }
    }
}

const loadEffect = () => {
    window.onload = () => {
        // check if theme key exists in local storage
        if (localStorage.getItem('theme')) {
            // set active element
            activeID = localStorage.getItem('theme');
            document.documentElement.setAttribute('data-theme', activeID);
            document.getElementById(activeID)?.classList.add('selected');
        }

        // check if navbar key exists in local storage
        if (localStorage.getItem('navbar')) {
            // set active element
            activeID = localStorage.getItem('navbar');
            document.getElementById(activeID)?.classList.add('selected');
        }

        // check if logotext key exists in local storage
        if (localStorage.getItem('logotext')) {
            const logoInput = document.getElementById('logoInput');
            const logoH2List = document.getElementsByClassName('logo')

            if (logoInput) {
                logoInput.value = localStorage.getItem('logotext');
                // loop through logo h2 elements and set text
                for (let i = 0; i < logoH2List.length; i++) {
                    logoH2List[i].innerText = localStorage.getItem('logotext');
                }
            }
        }

        // check if footer key exists in local storage
        if (localStorage.getItem('footer')) {
            // set active element
            activeID = localStorage.getItem('footer');
            document.getElementById(activeID)?.classList.add('selected');
        }

        // // herotoggle button is on
        // const heroToggleCheckbox = document.getElementById('heroBorderToggle');

        // if (heroToggleCheckbox) {
        //     heroToggleCheckbox.checked = false;
        // }
        findAndSync('heroInfo')
        findAndSync('heroTitle')



        // const heroContactRoundToggle = document.getElementById('heroContactRoundToggle');


        // if (heroContactRoundToggle) {
        //     heroContactRoundToggle.checked = JSON.parse(localStorage.getItem('heroContactRoundToggle')) || false;
        // }

        // if (heroButton) {
        //     heroButton.classList.add('button-round');
        // }


        // // get footer text
        // const multiFooterTexts = document.getElementsByClassName('footertext')
        // const logotext = localStorage.getItem('logotext');

        // // loop through footer text elements and set text
        // for (let i = 0; i < multiFooterTexts.length; i++) {
        //     multiFooterTexts[i].innerText += " " + logotext
        // }

    }
}

// const elementSelectHandler = (event) => {
//     previousActiveID = activeID;
//     activeID = event?.target?.id;

//     if (previousActiveID) {
//         document.getElementById(previousActiveID)?.classList.remove('selected');
//     }

//     if (activeID) {
//         // set clicked element as active
//         const activeElement = document.getElementById(activeID);

//         const themeList = ['light', 'dark', 'night', 'retro'];
//         const navbarList = ['navbar-type-1', 'navbar-type-2', 'navbar-type-3', 'navbar-type-4']
//         const footerList = ['footer-type-1', 'footer-type-2', 'footer-type-3', 'footer-type-4']

//         if (themeList.includes(activeID)) {
//             localStorage.setItem('theme', activeID);
//             document.documentElement.setAttribute('data-theme', activeID);
//         }

//         if (navbarList.includes(activeID)) {
//             localStorage.setItem('navbar', activeID);
//         }

//         if (footerList.includes(activeID)) {
//             localStorage.setItem('footer', activeID);
//         }

//         if (activeElement) {
//             activeElement.classList.add('selected');
//         }

//     }
// }

// // find all navbar elements
// // add event listener to each navbar element
const repeatEL = (className) => {
    const itemList = document.getElementsByClassName(className);
    for (let i = 0; i < itemList.length; i++) {
        itemList[i].addEventListener('click', elementSelectHandler);
    }
}

// // -------START MAIN----------
loadEffect();
// // -------END MAIN---------


// repeatEL('theme');
// repeatEL('navbar');
// repeatEL('footer');


// listen for hero-id change
// const hero = document.getElementById('hero');
// const heroTitle = document.getElementById('heroTitle')
// const heroInfo = document.getElementById('heroInfo')
// const heroBorder = document.getElementById('heroBorderToggle')
// const heroContactRoundToggle = document.getElementById('heroContactRoundToggle')



// listen for logoInput change
// document.getElementById('logoInput')?.addEventListener('keyup', () => {
//     // find all classes [logo]
//     const logoList = document.getElementsByClassName('logo');
//     const newlogoValue = document.getElementById('logoInput').value;


//     localStorage.setItem('logotext', newlogoValue);
//     for (let i = 0; i < logoList.length; i++) {

//         logoList[i].innerHTML = String(newlogoValue).substring(0, 20);
//     }
// })

// const syncHeroCode = () => {
//     // add herocode to localstorage
//     localStorage.setItem('heroCode', document.getElementById('hero').innerHTML);
// }

// heroTitle.addEventListener('keyup', () => {
//     const computed = String(heroTitle.value).substring(0, 20);
//     heroTitle.setAttribute("value", computed);
//     localStorage.setItem('heroTitle', computed);
//     // add herocode to localstorage
//     syncHeroCode();
// })

// heroInfo.addEventListener('keyup', () => {
//     // find all classes [logo]
//     const finalValue = String(heroInfo.value).substring(0, 350);
//     heroTitle.innerHTML = finalValue;


//     // add to local storage
//     localStorage.setItem('heroInfo', finalValue);


//     syncHeroCode();
// })





// const addProject = () => {
//     const project = document.createElement('div');
//     const projectSelector = document.getElementById('projectSelector');

//     // check if all fields are filled
//     if (!projectName?.value) {
//         // focus on project name
//         console.log('project name is empty')
//         projectName.focus();
//         return;
//     }

//     if (!projectLink?.value) {
//         // focus on project name
//         console.log('project link is empty')
//         projectLink.focus();
//         return;
//     }

//     if (!projectDescription?.value) {
//         // focus on project name
//         console.log('project description is empty')
//         projectDescription.focus();
//         return;
//     }

//     if (!projectImage?.value) {
//         // focus on project name
//         console.log('project image is empty')
//         projectImage?.focus();
//         return;
//     }

//     if (!projectGithub?.value) {
//         // focus on project name
//         console.log('project github is empty')
//         projectGithub?.focus();
//         return;
//     }

//     if (!projectTags?.value) {
//         // focus on project name
//         console.log('project tags is empty')
//         projectTags?.focus();
//         return;
//     }

//     const createTags = (tags) => {
//         const tagsList = tags.split(',');
//         let finalTags = '';
//         for (let i = 0; i < tagsList.length; i++) {
//             finalTags += `<span class="tag">${tagsList[i]}</span>`
//         }
//         return finalTags;
//     }

//     project.classList.add('project');
//     project.innerHTML = `
//     <div class="project__image">
//         <img width="100%" height="100%" src="${projectImage.value}" >
//     </div>
//     <div class="project__info">
//         <div class="project__title">
//             ${projectName.value}
//         </div>
//         <div class="project__tags">
//             ${createTags(projectTags.value)}
//         </div>
//         <div class="project__description">
//             ${projectDescription.value}
//         </div>
//         <div class="project__links">
//             <a href="${projectLink.value}">Check Live</a>
//             <a href="${projectGithub.value}">Check Source</a>
//         </div>
//     </div>`;

//     // set project id
//     project.id = `project-${projectGroup.childElementCount + 1}`;

//     projectGroup.appendChild(project);

//     // sync all projects to local storage
//     const projects = document.getElementById('projectgroup');
//     localStorage.setItem('projects', projects.innerHTML);


//     // add to project selector
//     const option = document.createElement('option');
//     option.value = project.id;
//     option.innerHTML = projectName.value;
//     projectSelector.appendChild(option);
// }


// // make selector to delete project
// const deleteProject = () => {
//     const projectSelector = document.getElementById('projectSelector');
//     const project = document.getElementById(projectSelector.value);
//     project.remove();

//     // sync all projects to local storage
//     const projects = document.getElementById('projectgroup');
//     localStorage.setItem('projects', projects.innerHTML);

// }




// const generateCode = () => {

//     const generateNavbar = () => {

//     }

//     const generateHero = () => {
//         console.log(hero.innerHTML)
//     }

//     generateHero();
// }


