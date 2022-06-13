desenhaForca();

function limpaBoneco(){
    pincel.clearRect(120,77.8,180,180);
}

function desenhaBoneco() {
    if (chances == 1) {//cabeça
        pincel.strokeStyle = '#0A3871';
        pincel.beginPath();
        pincel.arc(177, 110, 30, 0, 2 * 3.14);
        pincel.lineWidth = 4;
        pincel.stroke();
    } else if (chances == 2) {//corpo
        pincel.strokeStyle = '#0A3871';
        pincel.moveTo(177, 140);
        pincel.lineTo(177, 220);
        pincel.lineWidth = 4;
        pincel.stroke();
    } else if (chances == 3) {//braço esquerdo
        pincel.strokeStyle = '#0A3871';
        pincel.moveTo(177, 150);
        pincel.lineTo(140, 190);
        pincel.lineWidth = 4;
        pincel.stroke();
    } else if (chances == 4) {//braço direito
        pincel.strokeStyle = '#0A3871';
        pincel.moveTo(177, 150);
        pincel.lineTo(215, 190);
        pincel.lineWidth = 4;
        pincel.stroke();
    } else if (chances == 5) {//perna esquerda
        pincel.strokeStyle = '#0A3871';
        pincel.moveTo(177, 220);
        pincel.lineTo(150, 250);
        pincel.lineWidth = 4;
        pincel.stroke();
    } else if (chances == 6) {//perna direita
        pincel.strokeStyle = '#0A3871';
        pincel.moveTo(177, 220);
        pincel.lineTo(205, 250);
        pincel.lineWidth = 4;
        pincel.stroke();
    }
}

function desenhaForca() {
    //solo
    pincel.strokeStyle = '#0A3871';
    pincel.moveTo(10, 290);
    pincel.lineTo(290, 290);
    pincel.lineWidth = 4;
    pincel.stroke();
    //traço lateral
    pincel.strokeStyle = '#0A3871';
    pincel.moveTo(80, 290);
    pincel.lineTo(80, 50);
    pincel.lineWidth = 4;
    pincel.stroke();
    //traço superior
    pincel.strokeStyle = '#0A3871';
    pincel.moveTo(78, 50);
    pincel.lineTo(179, 50);
    pincel.lineWidth = 4;
    pincel.stroke();
    //corda
    pincel.strokeStyle = '#0A3871';
    pincel.moveTo(177, 50);
    pincel.lineTo(177, 80);
    pincel.lineWidth = 4;
    pincel.stroke();
}
