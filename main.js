var preguntaUno = document.getElementById('uno');
var preguntaDos = document.getElementById('dos');
var preguntaTres = document.getElementById('tres');
var preguntaCuatro = document.getElementById('cuatro');
var preguntaCinco = document.getElementById('cinco');
var preguntaSeis = document.getElementById('seis');
var preguntaSiete = document.getElementById('siete');

var antartida = document.getElementById('antartida');
var madagascar = document.getElementById('madagascar');
var poloNorte = document.getElementById('polonorte');
var poloSur = document.getElementById('polosur');

var danBrown = document.getElementById('danbrown');
var gabrielGarcia = document.getElementById('gabrielgarcia');
var cervantes = document.getElementById('cervantes');
var homero = document.getElementById('homero');

var nilo = document.getElementById('nilo');
var amazonas = document.getElementById('amazonas');
var danubio = document.getElementById('danubio');
var ganges = document.getElementById('ganges');

var grecia = document.getElementById('grecia');
var roma = document.getElementById('roma');
var egipto = document.getElementById('egipto');
var latinoamerica = document.getElementById('latinoamerica');

var a208 = document.getElementById('a208');
var a107 = document.getElementById('a107');
var a206 = document.getElementById('a206');
var a220 = document.getElementById('a220');

var a1939 = document.getElementById('a1939');
var a1958 = document.getElementById('a1958');
var a1949 = document.getElementById('a1949');
var a1945 = document.getElementById('a1945');

var a1492 = document.getElementById('a1492');
var a1392 = document.getElementById('a1392');
var a1812 = document.getElementById('a1812');
var a1785 = document.getElementById('a1785');

var correcto = document.querySelectorAll('#correcto');
var incorrecto = document.querySelectorAll('#incorrecto');

var puntaje =0;



antartida.addEventListener("click", function(e){
    e.preventDefault();
    antartida.style.background = "green";
    correcto[0].style.display = "block";
    puntaje++;
    setTimeout(function(){
        preguntaUno.style.display = "none";
        preguntaDos.style.display = "block";
    }, 1000);
})


madagascar.addEventListener("click", function(e){
    e.preventDefault();
    madagascar.style.background = "red";
    incorrecto[0].style.display = "block";
    setTimeout(function(){
        preguntaUno.style.display = "none";
        preguntaDos.style.display = "block";
    }, 1000);
})



poloNorte.addEventListener("click", function(e){
    e.preventDefault();
    poloNorte.style.background = "red";
    incorrecto[0].style.display = "block";
    setTimeout(function(){
        preguntaUno.style.display = "none";
        preguntaDos.style.display = "block";
    }, 1000);
})


poloSur.addEventListener("click", function(e){
    e.preventDefault();
    poloSur.style.background = "red";
    incorrecto[0].style.display = "block";
    setTimeout(function(){
        preguntaUno.style.display = "none";
        preguntaDos.style.display = "block";
    }, 1000);
})


homero.addEventListener("click", function(e){
    e.preventDefault();
    homero.style.background = "green";
    correcto[1].style.display = "block";
    puntaje++;
    setTimeout(function(){
        preguntaDos.style.display = "none";
        preguntaTres.style.display = "block";
    }, 1000);
})

cervantes.addEventListener("click", function(e){
    e.preventDefault();
    cervantes.style.background = "red";
    incorrecto[1].style.display = "block";
    setTimeout(function(){
        preguntaDos.style.display = "none";
        preguntaTres.style.display = "block";
    }, 1000);
})

gabrielGarcia.addEventListener("click", function(e){
    e.preventDefault();
    gabrielGarcia.style.background = "red";
    incorrecto[1].style.display = "block";
    setTimeout(function(){
        preguntaDos.style.display = "none";
        preguntaTres.style.display = "block";
    }, 1000);
})

danBrown.addEventListener("click", function(e){
    e.preventDefault();
    danBrown.style.background = "red";
    incorrecto[1].style.display = "block";
    setTimeout(function(){
        preguntaDos.style.display = "none";
        preguntaTres.style.display = "block";
    }, 1000);
})


amazonas.addEventListener("click", function(e){
    e.preventDefault();
    amazonas.style.background = "green";
    correcto[2].style.display = "block";
    puntaje++;
    setTimeout(function(){
        preguntaTres.style.display = "none";
        preguntaCuatro.style.display = "block";
    }, 1000);
})

nilo.addEventListener("click", function(e){
    e.preventDefault();
    nilo.style.background = "red";
    incorrecto[2].style.display = "block";
    setTimeout(function(){
        preguntaTres.style.display = "none";
        preguntaCuatro.style.display = "block";
    }, 1000);
})

danubio.addEventListener("click", function(e){
    e.preventDefault();
    danubio.style.background = "red";
    incorrecto[2].style.display = "block";
    setTimeout(function(){
        preguntaTres.style.display = "none";
        preguntaCuatro.style.display = "block";
    }, 1000);
})

ganges.addEventListener("click", function(e){
    e.preventDefault();
    ganges.style.background = "red";
    incorrecto[2].style.display = "block";
    setTimeout(function(){
        preguntaTres.style.display = "none";
        preguntaCuatro.style.display = "block";
    }, 1000);
})


grecia.addEventListener("click", function(e){
    e.preventDefault();
    grecia.style.background = "green";
    correcto[3].style.display = "block";
    puntaje++;
    setTimeout(function(){
        preguntaCuatro.style.display = "none";
        preguntaCinco.style.display = "block";
    }, 1000);
})

roma.addEventListener("click", function(e){
    e.preventDefault();
    roma.style.background = "red";
    incorrecto[3].style.display = "block";
    setTimeout(function(){
        preguntaCuatro.style.display = "none";
        preguntaCinco.style.display = "block";
    }, 1000);
})

egipto.addEventListener("click", function(e){
    e.preventDefault();
    egipto.style.background = "red";
    incorrecto[3].style.display = "block";
    setTimeout(function(){
        preguntaCuatro.style.display = "none";
        preguntaCinco.style.display = "block";
    }, 1000);
})

latinoamerica.addEventListener("click", function(e){
    e.preventDefault();
    latinoamerica.style.background = "red";
    incorrecto[3].style.display = "block";
    setTimeout(function(){
        preguntaCuatro.style.display = "none";
        preguntaCinco.style.display = "block";
    }, 1000);
})


a206.addEventListener("click", function(e){
    e.preventDefault();
    a206.style.background = "green";
    correcto[4].style.display = "block";
    puntaje++;
    setTimeout(function(){
        preguntaCinco.style.display = "none";
        preguntaSeis.style.display = "block";
    }, 1000);
})

a208.addEventListener("click", function(e){
    e.preventDefault();
    a208.style.background = "red";
    incorrecto[4].style.display = "block";
    setTimeout(function(){
        preguntaCinco.style.display = "none";
        preguntaSeis.style.display = "block";
    }, 1000);
})

a107.addEventListener("click", function(e){
    e.preventDefault();
    a107.style.background = "red";
    incorrecto[4].style.display = "block";
    setTimeout(function(){
        preguntaCinco.style.display = "none";
        preguntaSeis.style.display = "block";
    }, 1000);
})

a220.addEventListener("click", function(e){
    e.preventDefault();
    a220.style.background = "red";
    incorrecto[4].style.display = "block";
    setTimeout(function(){
        preguntaCinco.style.display = "none";
        preguntaSeis.style.display = "block";
    }, 1000);
})


a1945.addEventListener("click", function(e){
    e.preventDefault();
    a1945.style.background = "green";
    correcto[5].style.display = "block";
    puntaje++;
    setTimeout(function(){
        preguntaSeis.style.display = "none";
        preguntaSiete.style.display = "block";
    }, 1000);
})

a1939.addEventListener("click", function(e){
    e.preventDefault();
    a1939.style.background = "red";
    incorrecto[5].style.display = "block";
    setTimeout(function(){
        preguntaSeis.style.display = "none";
        preguntaSiete.style.display = "block";
    }, 1000);
})

a1958.addEventListener("click", function(e){
    e.preventDefault();
    a1958.style.background = "red";
    incorrecto[5].style.display = "block";
    setTimeout(function(){
        preguntaSeis.style.display = "none";
        preguntaSiete.style.display = "block";
    }, 1000);
})

a1949.addEventListener("click", function(e){
    e.preventDefault();
    a1949.style.background = "red";
    incorrecto[5].style.display = "block";
    setTimeout(function(){
        preguntaSeis.style.display = "none";
        preguntaSiete.style.display = "block";
    }, 1000);
})


a1492.addEventListener("click", function(e){
    e.preventDefault();
    a1492.style.background = "green";
    correcto[6].style.display = "block";
    puntaje++;
    setTimeout(function(){
        document.write('<h1> Tu puntaje es ' + puntaje + '</h1>')
    }, 1000);
})

a1392.addEventListener("click", function(e){
    e.preventDefault();
    a1392.style.background = "red";
    incorrecto[6].style.display = "block";
    setTimeout(function(){
        document.write('<h1> Tu puntaje es ' + puntaje + '</h1>')
    }, 1000);
})

a1812.addEventListener("click", function(e){
    e.preventDefault();
    a1812.style.background = "red";
    incorrecto[6].style.display = "block";
    setTimeout(function(){
        document.write('<h1> Tu puntaje es ' + puntaje + '</h1>')
    }, 1000);
})

a1785.addEventListener("click", function(e){
    e.preventDefault();
    a1785.style.background = "red";
    incorrecto[6].style.display = "block";
    setTimeout(function(){
        document.write('<h1> Tu puntaje es ' + puntaje + '</h1>')
    }, 1000);
})