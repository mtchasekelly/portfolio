function welcomeMessage() {
    const message = document.getElementById('welcomeMessage');
    if (message.style.display === 'none') {
        message.style.display = 'block';
        message.style.marginTop = '0';
        message.style.border = '2px solid black';
        message.style.width = '205px';
        message.style.textAlign = 'center';
    } else {
        message.style.display = 'none';
    }
}

