
function copyMailToClipboard() {
    navigator.clipboard.writeText('nicolas.donoso.ge@outlook.com')
    showCopyMessage();
}

function showCopyMessage() {
    let message = document.getElementById("copy-message");

    let e = window.event;

    let posX = e.clientX;
    let posY = e.clientY;

    message.style.top = posY + 'px';
    message.style.left = posX + 'px';
    
    message.style.display = "block";
}