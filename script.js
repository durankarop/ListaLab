const TEXTO = document.getElementById('contenedor-listas')
const NAME = document.getElementById('name')
const DOCTOR = document.getElementById('doctor')

function armarLista() {
    // Para hemograma
    if (form1.hg.checked == true) {
            hemograma = document.getElementById('hg').value;
    } else {
            hemograma = " ";
    }
    // Para eritro
    if (form1.vsg.checked == true) {
            eritro = document.getElementById('vsg').value;
    } else {
            eritro = " ";
    }
    // Para glucemia
    if (form1.glc.checked == true) {
            glucemia = document.getElementById('glc').value;
    } else {
            glucemia = " ";
    }
    // Para uremia
    if (form1.ure.checked == true) {
            uremia = document.getElementById('ure').value;
    } else {
            uremia = " ";
    }
    // Para creatinina
    if (form1.crea.checked == true) {
            creatinina = document.getElementById('crea').value;
    } else {
            creatinina = " ";
    }
    // Para uricemia
    if (form1.uric.checked == true) {
            uricemia = document.getElementById('uric').value;
    } else {
            uricemia = " ";
    }
    // Para hepatograma
    if (form1.hepato.checked == true) {
            hepatograma = document.getElementById('hepato').value;
    } else {
            hepatograma = " ";
    }        
        // Para Perfil lipidico
    if (form1.perfil.checked == true) {
            perfil = document.getElementById('perfil').value;
    } else {
            perfil = " ";
    }
    // Para Colesterol
    if (form1.cole.checked == true) {
            cole = document.getElementById('cole').value;
    } else {
            cole = " ";
    }
    // Para hdl
    if (form1.hdl.checked == true) {
            hdl = document.getElementById('hdl').value;
    } else {
            hdl = " ";
    }
    // Para ldl
    if (form1.ldl.checked == true) {
            ldl = document.getElementById('ldl').value;
    } else {
            ldl = " ";
    }
    // Para Triglicéridos
    if (form1.tg.checked == true) {
            trig= document.getElementById('tg').value;
    } else {
            trig = " ";
    }
    // Para Ionograma
    if (form1.iono.checked == true) {
            ionograma = document.getElementById('iono').value;
    } else {
            ionograma = " ";
    }
    // Para LDH
    if (form1.ldh.checked == true) {
            ldh = document.getElementById('ldh').value;
    } else {
            ldh = " ";
    }
    // Para Calcio
    if (form1.ca.checked == true) {
            calcio = document.getElementById('calcio').value;
    } else {
            calcio = " ";
    }
    // Para Fosforo
    if (form1.fosf.checked == true) {
            fosforo = document.getElementById('fosf').value;
    } else {
            fosf = " ";
    }
    

    TEXTO.innerHTML += "<p id='contenedor-listas_subtitulo'>" + NAME.value + " " + "(" + DOCTOR.value + ")" + "</p>" + "<p id='contenedor-listas_p'>" + hemograma + eritro + glucemia + uremia + creatinina + uricemia + hepatograma + cole + hdl + ldl + trig + perfil + ionograma + ldh + calcio + fosf + "</p>" + "<p>" /*+ "<hr>"*/ + "</p>";
    // let reset = document.getElementById("table").reset()
}

// function reset() {
//         document.getElementById('form1').reset();
// }

// function imprimir() {
//         TEXTO.print()
// }
      