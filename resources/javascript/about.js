function funFact() {
    const funFact = document.getElementById('funFact');
        if (funFact.style.display === 'none') {

            funFact.style.display = 'block';
            funFact.style.fontSize = '16px';
            funFact.style.fontFamily = 'Poppins, Tahoma, Geneva, sans-serif';   
            funFact.style.width = '350px';
            funFact.style.borderTop = '1px solid #FFF';
            funFact.style.borderLeft = '1px solid #FFF';
            funFact.style.borderRight = '5.5px solid gray';
            funFact.style.borderBottom = '5.5px solid gray';
            funFact.style.backgroundColor = 'white';
            funFact.style.textAlign = 'center';

        } else {
            funFact.style.display = 'none';
        }
    }

