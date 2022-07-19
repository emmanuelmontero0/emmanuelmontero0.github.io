/*
    ==============================================
        Aqui se reciben los datos de los select 
    ==============================================
*/
var dia = document.getElementById("day");
var month = document.getElementById("month");
var boton = document.getElementById("button");
var result = document.getElementById("resultText");
var boxResult = document.getElementById("result");
var imgResult = document.getElementById("resultImg")
var resultElement = document.getElementById("resultElement")
var paragraphResult = document.getElementById("resultParagraph")

const SIGNOS = ["Acuario", "Piscis", "Aries", "Tauro", "Geminis", "Cancer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio"];

boton.addEventListener("click", calc);


function writeBody(signo, boxInnert) {
    console.log(`Tu signo es: ${signo}`);
    boxInnert.innerText = `Tu signo es: ${signo}`;
    imgResult.innerHTML = `<img src="img/${signo.toLowerCase()}.jpg" alt="imagen de ${signo}">`

    for (let i = 0; i < zodiaco.length; i++) {

        if (zodiaco[i].nombre == signo) {
            resultElement.innerHTML = `<p>El elemento es: ${zodiaco[i].element} </p>`
            paragraphResult.innerHTML = `<p>${zodiaco[i].personality}<p>`
        }
    }
}
/*
=============================================
  Esta es la fuciion que da los resultados
=============================================
*/

function calc() {
    // Aqui se reciben los valores del select 
    let day = parseInt(dia.value);
    let mes = month.value.toLowerCase();

    // Acuario
    if (day <= 31 && day >= 20 && mes === "enero") {
        writeBody(SIGNOS[0], result);

    } else if (day >= 1 && day <= 19 && mes === "febrero") {
        writeBody(SIGNOS[0], result);
    }
    // Picis 
    else if (day >= 20 && day <= 31 && mes == "febrero") {
        writeBody(SIGNOS[1], result);

    } else if (day <= 20 && day >= 1 && mes == "marzo") {
        writeBody(SIGNOS[1], result);
    }
    // Aries 
    else if (day >= 21 && day <= 31 && mes == "marzo") {
        writeBody(SIGNOS[2], result);
    } else if (day <= 20 && day >= 1 && mes == "abril") {
        writeBody(SIGNOS[2], result);
    }
    // Tauro 
    else if (day >= 21 && day <= 31 && mes == "abril") {
        writeBody(SIGNOS[3], result);
    } else if (day >= 1 && day <= 21 && mes == "mayo") {
        writeBody(SIGNOS[3], result);
    }
    // Geminis
    else if (day >= 22 && day <= 31 && mes === "mayo") {
        writeBody(SIGNOS[4], result);
    } else if (day <= 21 && day >= 1 && mes == "junio") {
        writeBody(SIGNOS[4], result);
    }
    //Cancer
    else if (day >= 22 && day <= 31 && mes == "junio") {
        writeBody(SIGNOS[5], result);
    } else if (day <= 23 && day >= 1 && mes == "julio") {
        writeBody(SIGNOS[5], result);
    }
    //Leo 
    else if (day >= 24 && day <= 31) {
        writeBody(SIGNOS[6], result);
    } else if (day <= 23 && day >= 1 && mes == "agosto") {
        writeBody(SIGNOS[6], result);
    }
    // Virgo
    else if (day >= 24 && day <= 31 && mes == "agosto") {
        writeBody(SIGNOS[7], result);
    } else if (day >= 1 && day && day <= 22 && mes == "septiembre") {
        writeBody(SIGNOS[7], result);
    }
    // Libra
    else if (day >= 23 && day <= 31 && mes == "septiembre") {
        writeBody(SIGNOS[8], result);
    } else if (day >= 1 && day <= 22 && mes == "octubre") {
        writeBody(SIGNOS[8], result);

    }
    // Escorpio
    else if (day >= 23 && day <= 31 && mes == "octubre") {
        writeBody(SIGNOS[9], result);
    } else if (day >= 1 && day <= 22 && mes == "noviembre") {
        writeBody(SIGNOS[9], result);
    }
    // Sagitario 
    else if (day >= 23 && day <= 31 && mes == "noviembre") {
        writeBody(SIGNOS[10], result);
    } else if (day >= 1 && day <= 21 && mes == "diciembre") {
        writeBody(SIGNOS[10], result);
    }
    // Capriconio 
    else if (day >= 22 && day <= 31 && mes == "diciembre") {
        writeBody(SIGNOS[11], result);
    } else if (day >= 1 && day <= 19 && mes == "enero") {
        writeBody(SIGNOS[11], result);
    }
    // Falso
    else {
        console.log("No se aun");
        result.innerText = `Inserte su fecha de nacimiento.`
    }
}