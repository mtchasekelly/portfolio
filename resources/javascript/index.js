function welcomeMessage() {
    const message = document.getElementById('welcomeMessage');
    if (message.style.display === 'none') {
        message.style.display = 'block';
        message.style.marginTop = '0';
    } else {
        message.style.display = 'none';
    }
}

