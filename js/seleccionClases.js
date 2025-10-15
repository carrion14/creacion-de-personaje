


let resultclass = document.getElementById("sum-clase")
let resultraza = document.getElementById("sum-raza")
let resultarma = document.getElementById("sum-arma")

function guardarclase() {;

    let selectClase = document.getElementById("SelectClas").value;
    let espacioRaza = document.getElementById("espacioraza")
    let espacioArma = document.getElementById("espacioarma")


    switch (selectClase) {
        case "Shinobi":
            personaje.clase = clases[0].nombre
            personaje.razas = clases[0].razas
            personaje.armas = clases[0].armas
            personaje.stats = clases[0].stats
            personaje.habilidad = clases[0].habilidad
            break;
        case "Samurai":
            personaje.clase = clases[1].nombre
            personaje.razas = clases[1].razas
            personaje.armas = clases[1].armas
            personaje.stats = clases[1].stats
            personaje.habilidad = clases[1].habilidad
            break;
        case "Monje":
            personaje.clase = clases[2].nombre
            personaje.razas = clases[2].razas
            personaje.armas = clases[2].armas
            personaje.stats = clases[2].stats
            break;
        default:
            break;
    }

    espacioRaza.innerHTML = `
    <label for="raza">Raza</label>
              <div id="">
                <select name="" id="razas">
                  
                </select>
              </div>`


    espacioArma.innerHTML = `
    <label for="raza">Armas</label>
              <div id="">
                <select name="" id="armas">
                  
                </select>
              </div>`


    for (let i = 0; i < personaje.razas.length; i++) {
        let opcionesrazas = document.getElementById("razas");
        opcionesrazas.innerHTML += `<option value="${personaje.razas[i]}">${personaje.razas[i]}</option>`
    }
    for (let i = 0; i < personaje.armas.length; i++) {
        let opcionesrazas = document.getElementById("armas");
        opcionesrazas.innerHTML += `<option value="${personaje.armas[i]}">${personaje.armas[i]}</option>`
    }

    let botonSiguiente = document.getElementById("btnsiguiente");

    botonSiguiente.innerHTML = `<input type="button" value="Siguiente" class="step-btn" onclick="guardarDatosraza()"/>`

    
    for (let i =0; i < personaje.stats.length; i++){
        let statsDiv = document.getElementById("tablaDeStats")
        statsDiv.innerHTML = `
        <fieldset class="fieldset">
          <legend>Atributos</legend>
          <div class="grid-3">
            <div>
              <label for="fuerza">Fuerza</label>
              <p>${personaje.stats[0]}</p>
            </div>
            <div>
              <label for="Aguilidad">Destreza</label>
              <p>${personaje.stats[1]}</p>
            </div>
            <div>
              <label for="inteligencia">Inteligencia</label>
              <p>${personaje.stats[2]}</p>
            </div>
          </div>
          <div class="grid-3">
            <div>
              <label for="Resistencia">Fe</label>
              <p>${personaje.stats[3]}</p>
            </div>
            <div>
              <label for="Magia">Vigor</label>
              <p>${personaje.stats[4]}</p>
            </div>
            
          </div>
        </fieldset>`
        
    }
    
    
}

function guardarDatosraza() {
        let selectRaza = document.getElementById("razas").value;
        let selectArma = document.getElementById("armas").value;
        let seccion2Div = document.getElementById("sec-stats");

        personaje.razas = selectRaza
        personaje.armas = selectArma

        resultclass.innerHTML = `${personaje.clase}`
        resultraza.innerHTML = `${personaje.razas}`
        resultarma.innerHTML = `${personaje.armas}`

        alert("Arquetipos guardados correctamente.");

        seccion2Div.innerHTML = `
        <fieldset class="fieldset">
          <legend>Habilidades y equipo</legend>
          <div id="optionHabilidad">
            <label for="habilidades">Habilidad (principal)</label>
            <select id="habilidades">
                  
            </select>

            <input type="button" value="Siguiente" class="step-btn" onclick="guardarhabilidad()"/>
            <div id="espacioHabilidad"></div>
          </div>  
        </fieldset>
        `

        for(let i = 0; i < personaje.habilidad.length; i++){
        let opcionesHabilidad = document.getElementById("habilidades");
        opcionesHabilidad.innerHTML += `<option value="${personaje.habilidad[i]}">${personaje.habilidad[i]}</option>`
    }
    }


function guardarhabilidad(){
  let selectHabilidad = document.getElementById("habilidades").value;
  let espacioHabilidad = document.getElementById("espacioHabilidad");



  espacioHabilidad.innerHTML += `
  <label for="objetos">Habilidad (secundaria)</label>
              
              <select id="habilidades2">
                    
              </select>
  <input type="button" value="Enviar" class="step-btn" onclick="enviarhabilidad()"/>`

  let arrayHbilidadesrest = personaje.habilidad.filter(hab => hab !== selectHabilidad);

  for(let i = 0; i<arrayHbilidadesrest.length; i++){
    let opcionesHabilidad2 = document.getElementById("habilidades2");
    opcionesHabilidad2.innerHTML += `<option value="${arrayHbilidadesrest[i]}">${arrayHbilidadesrest[i]}</option>`
  }


}

function enviarhabilidad(){
  let seccion2Div = document.getElementById("sec-stats");
  let seccion3Div = document.getElementById("sec-mundo");
  let resulthabilidad = document.getElementById("sum-habilidades");

  let selectHabilidad1 = document.getElementById("habilidades").value;
  let selectHabilidad2 = document.getElementById("habilidades2").value;

  personaje.habilidad = selectHabilidad1 + ", " + selectHabilidad2

  resulthabilidad.innerHTML = `<span class="pill">${personaje.habilidad}</span>`

  alert("Habilidades guardadas correctamente.");

  


  seccion2Div.innerHTML = ""

  seccion3Div.innerHTML = `
  <fieldset class="fieldset">
          <legend>Dificultad & Zona</legend>
          <div class="grid-2">
            <div>
              <label for="dificultad">Dificultad</label>
              <select id="dificultad">
                <option value="">Selecciona…</option>
                <option value="Fácil">Fácil</option>
                <option value="Normal">Normal</option>
                <option value="Difícil">Difícil</option>
                <option value="inmortal">inmortal</option>
              </select>
            </div>
            <div>
              <label for="zona">Zona de inicio</label>
              <select id="zona">
                <option value="">Selecciona…</option>
                <option value="Murallas del Abismo">Murallas del Abismo</option>
                <option value="Templo Caído">Templo Caído</option>
                <option value="Valle de Ceniza">Valle de Ceniza</option>
                <option value="Puerto de Sombras">Puerto de Sombras</option>
              </select>
            </div>
          </div>
        </fieldset>
        <input type="button" value="Enviar" class="step-btn" onclick="enviarDificultad()"/>`

  
}

function enviarDificultad(){
  let selectDificultad = document.getElementById("dificultad").value;
  let selectZona = document.getElementById("zona").value;
  let resultDificultad = document.getElementById("sum-dificultad");
  let resultZona = document.getElementById("sum-zona");
  let seccion3Div = document.getElementById("sec-mundo");

  if (selectDificultad === "" ){
    alert("Por favor, selecciona una dificultad.");
    return;
  }
  if (selectZona === ""){
    alert("Por favor, selecciona una zona de inicio.");
    return;
  }

  personaje.dificultad = selectDificultad
  personaje.zona = selectZona

  resultDificultad.innerHTML = personaje.dificultad
  resultZona.innerHTML = personaje.zona

  alert("Dificultad y zona guardadas correctamente. ¡Personaje creado con éxito!");

  seccion3Div.innerHTML = `
  <div class="fieldset">
          <legend style="display:block; margin-bottom:8px; color:var(--muted); font-size:20px;">Confirmación</legend>
          <legend style="display:block; margin-bottom:8px; color:var(--muted); font-size:12px;">¿confirmas que esta correcta la informacion?</legend>
          <p> ${personaje.nombre}</p>
          <p> ${personaje.sexo}</p>
          <p> ${personaje.edad}</p>
          <p> ${personaje.altura}</p>
          <p> ${personaje.clase}</p>
          <p> ${personaje.razas}</p>
          <p> ${personaje.armas}</p>
          <p> ${personaje.stats}</p>
          <p> ${personaje.habilidad}</p>
          <p> ${personaje.dificultad}</p>
          <p> ${personaje.zona}</p>
          
          <a href="final.html">
            <button type="button" class="step-btn" style="justify-content:center" >Confirmar</button>
          </a>
          <button type="button" class="step-btn" style="justify-content:center" onclick="tejodes()">Editar</button>
        </div>`
}

function tejodes(){
  alert("recarga la pagina y vuelve a empezar")
}