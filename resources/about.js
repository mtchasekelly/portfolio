function funFact() {
    const funFact = document.getElementById('funFact');
        if (funFact.style.display === 'none') {

            funFact.style.display = 'block';
            funFact.style.fontSize = '16px';
            funFact.style.fontFamily = 'Poppins, Tahoma, Geneva, sans-serif';   
            funFact.style.width = '350px';
            funFact.style.border = '3px solid gray';
            funFact.style.backgroundColor = 'skyblue';
            funFact.style.textAlign = 'center';

        } else {
            funFact.style.display = 'none';
        }
    }

