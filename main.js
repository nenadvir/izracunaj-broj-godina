

function izracunajGodine(){

    console.clear();

    const satiEkspert= 10000;

    const satiPocetniik= 2000;

    const radnoVreme = 8;

    let razlikaSati = satiEkspert - satiPocetniik;

    console.log(razlikaSati);

    brojSatiDnevno= document.getElementById('unos').value;

    // console.log(document.getElementById('unos'));

    brojDanaZaPocetnika= satiPocetniik / brojSatiDnevno;

    console.log(brojDanaZaPocetnika);

    brojDanaDoEksperta = razlikaSati / radnoVreme + brojDanaZaPocetnika;

    console.log(brojDanaDoEksperta);

    brojGodina = (brojDanaZaPocetnika / 365 );

    brojGodina = brojGodina.toFixed(2);

    brojGodinaDoEksperta = (brojDanaDoEksperta / 365);

    brojGodinaDoEksperta = brojGodinaDoEksperta.toFixed(2);

    // console.log('broj godina ucenja do pocetnika je ', brojGodina);

    // console.log('broj godina ucenja do eksperta je ', brojGodinaDoEksperta);

    document.getElementById('brojGodina').innerText = 'broj godina ucenja do pocetnika je ' + brojGodina;

    document.getElementById('brojGodinaDoEksperta').innerText = 'broj godina ucenja do eksperta je ' + brojGodinaDoEksperta;
}

const dugme = document.getElementById('dugme');


// dugme.onclick = izracunajGodine;

dugme.addEventListener('click', izracunajGodine); 
