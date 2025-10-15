function guardarDatosPer(){
    let selectNombre = document.getElementById("nombre").value;
let selectsexo = document.getElementById("sexo").value;
let selectedad = parseInt(document.getElementById("edad").value);
let selectaltura = parseInt(document.getElementById("altura").value);
let resultname = document.getElementById("sum-nombre");
let resultsex = document.getElementById("sum-sexo");
let resultage = document.getElementById("sum-edad");
let resultheight = document.getElementById("sum-altura");
let seccion1Div = document.getElementById("sec-basicos")
let seccion2Div = document.getElementById("sec-stats")


    if (selectNombre === ""){
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (isNaN(selectedad) || selectedad < 0 || selectedad > 120){
        alert("Por favor, ingresa una edad válida entre 0 y 120.");
        return;
    }
    if (selectsexo === ""){
        alert("Por favor, selecciona un sexo.");
        return;
    }
    if (isNaN(selectaltura) || selectaltura < 30 || selectaltura > 250){
        alert("Por favor, ingresa una altura válida entre 50 y 250 cm.");
        return;
    }


    alert("Datos guardados correctamente.");

    personaje.nombre = selectNombre
    personaje.sexo = selectsexo
    personaje.edad = selectedad
    personaje.altura = selectaltura

    resultname.innerHTML = personaje.nombre;
    resultsex.innerHTML = personaje.sexo;
    resultage.innerHTML = personaje.edad + " años";
    resultheight.innerHTML = personaje.altura + " cm";

    seccion1Div.innerHTML = ""

    seccion2Div.innerHTML = `
    <fieldset class="fieldset">
          <legend>Arquetipo</legend>
          <div class="grid-3">
            <div>
              <label for="clase">Clase</label>
              
              <select name="" id="SelectClas">
                  <option value="Shinobi">Shinobi</option>
                  <option value="Samurai">Samurai</option>
                  <option value="Monje">Monje</option>
              </select>
              <input type="button" value="Seleccionar" class="step-btn" onclick="guardarclase()"/>
            </div>
            <div id="espacioraza">
              
            </div>
            <div id="espacioarma">
              
              </div>
            </div>
          </div>
          <div id=btnsiguiente> </div>
          
        </fieldset>
        
        <div id="tablaDeStats"></div>`
}