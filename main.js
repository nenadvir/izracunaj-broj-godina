

function izracunajGodine() {

    console.clear();

    const satiPocetniik = 2000;

    const satiEkspert = 10000;

    const radnoVreme = 8;

    let razlikaSati = satiEkspert - satiPocetniik;

    console.log('razlikaSati = ' ,razlikaSati);

    brojSatiDnevno = document.getElementById('unos').value;

   

    ukupnoDanaDoPocetnika = satiPocetniik / brojSatiDnevno;

    console.log('brojDanaZaPocetnika=', ukupnoDanaDoPocetnika);

    ukupnoDanaDoEksperta = razlikaSati / radnoVreme + ukupnoDanaDoPocetnika;

    console.log('brojDanaDoEksperta=', ukupnoDanaDoEksperta);


    let godineDoPocetnika = Math.floor(ukupnoDanaDoPocetnika / 365);

    let meseciDoPocetnika = Math.floor((ukupnoDanaDoPocetnika % 365) / 30);

    let daniDoPocetnika = (ukupnoDanaDoPocetnika % 365) % 30;

   

    let godinaDoEksperta = Math.floor(ukupnoDanaDoEksperta / 365);

    let meseciDoEksperta = Math.floor((ukupnoDanaDoEksperta % 365) / 30);

    let daniDoEksperta = (ukupnoDanaDoEksperta % 365) % 30;


    

    
    document.getElementById('brojGodina').innerText = 'vreme ucenja do pocetnika je ' + godineDoPocetnika + ' godine ' + meseciDoPocetnika + ' meseci ' + daniDoPocetnika + " dana"; 

    document.getElementById('brojGodinaDoEksperta').innerText = 'vreme ucenja do eksperta je ' + godinaDoEksperta + ' godine ' + meseciDoEksperta + ' meseci ' + daniDoEksperta + " dana"; 
}

function brojDanaUGodine(ukupnoDana) {
    const uGodiniBrojDana = 365;
    


    





}


const dugme = document.getElementById('dugme');


// dugme.onclick = izracunajGodine;

dugme.addEventListener('click', izracunajGodine); 
