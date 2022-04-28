
// Called when page loads
function onLoad() {
    showProjects('game', gameList);
    showProjects('web', webList);
    showProjects('app', appList);
    showProjects('music', musicList);

    showSkills('lang', langList);
    showSkills('tech', techList); 
}

// These manage the SkillBox
function showSkillBox() {
    skillBox.style.display='flex';
}

function hideSkillBox() {
    skillBox.style.display='none';
}

// These manage the AboutBox
function showAboutBox() {
    aboutBox.style.display='flex';
}

function hideAboutBox() {
    aboutBox.style.display='none';
}

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

// Adds the skills to the correspondant table, table ID must be type-table
function showSkills(type, list) {
    let table = document.getElementById(type + '-table');

    let fullMugIco = '<ion-icon name="cafe"></ion-icon>';
    let emptyMugIco = '<ion-icon name="cafe-outline"></ion-icon>';

    for (let i = 0;  i < list.length; i++) {
        table.innerHTML += `
        <tr>
            <th>${ list[i].name }</th>
            <td>
                <div class='wrapper'>
                ${ fullMugIco.repeat(list[i].value) }${ emptyMugIco.repeat(5 - list[i].value) }
                </div>
            </td>
        </tr>`;
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

// Here goes the lists with skills
let langList = [
    new Skill('HTML', 4),
    new Skill('CSS', 3),
    new Skill('JS', 4),
    new Skill('Python', 4),
    new Skill('Markdown', 5),
    new Skill('C#', 3)
]

let techList = [
    new Skill('Angular', 2),
    new Skill('Unity', 3),
    new Skill('Git/Github', 4),
    new Skill('.NET', 3)
]

// Usable variables
let skillBox = document.getElementById('skill-box');
let aboutBox = document.getElementById('about-box');