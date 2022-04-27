
// Copies mail to clipboard and calls showCopyMessage function
function copyMailToClipboard() {
    navigator.clipboard.writeText('nicolas.donoso.ge@outlook.com')
    showCopyMessage();
}

// Shows copy message on mouse position
function showCopyMessage() {
    let message = document.getElementById("copy-message");
    message.parentElement.removeChild(message);
    document.body.appendChild(message);

    let e = window.event;

    let posX = e.clientX;
    let posY = e.clientY;

    message.style.top = posY + 'px';
    message.style.left = posX + 'px';
    
    message.style.display = "block";
}

// Adds the project to the correspondant section, section ID must be type-section
function showProjects(type, list) {
    let section = document.getElementById(type + '-section');

    for (let i = 0; i < list.length; i++) {
        section.innerHTML += `<a href="${list[i].link}" target="_blank">${list[i].name}</a>`;

        if (i != list.length - 1) {
            section.innerHTML += ' - ';
        }
    }
}

// Here goes the lists with projects
let gameList = [
    new Project('The Loreseeker', 'https://ldjam.com/events/ludum-dare/48/the-loreseeker'),
    new Project('Dual Hell', 'https://jocrod.itch.io/dual-hell')
]

let webList = [
    new Project('Pagina Personal', 'https://github.com/Sir-Floppa/sir-floppa.github.io')
]

let appList = [
    new Project('KanMark I', 'https://github.com/Sir-Floppa/KanMark-I')
]

let musicList = [
    new Project('VS Screwy OST', 'https://www.youtube.com/playlist?list=PLEj465H0RF8Xp-5qaTQ-xTuKtt6K0BQ17')
]