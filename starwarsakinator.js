let contenido = document.getElementById('content');
let display = document.getElementById('texto');
let displayDiv = document.querySelector('#texto div');
let cont = document.getElementById('cont');
let seguir = document.querySelector('#cont button');
let img = document.createElement('img');

let opci;

let addText = function (texto) { 
    let text = document.createElement('p');
    text.innerHTML = texto;
    displayDiv.append(text);
}

let boton = function (texto) {
    let btn = document.createElement('button');
    let br = document.createElement('br');
    btn.innerHTML = texto;
    displayDiv.append(br);
    displayDiv.append(btn);
}

let changeImg = function (ubicacion) { 
    let img = document.createElement('img');
    let source = document.createElement('source');
    contenido.innerHTML = '';
    img.setAttribute('src',ubicacion);
    contenido.append(img);
}


/*
 let opciones = function () {
    intentos++;
    if (intentos <= 5) {
        addText('VIDEOS:');  
        boton('Personaje');
        boton('Lugar');
        boton('Arma');
        opci = document.querySelectorAll('#texto div button');
        for (const opc of opci) {
            opc.addEventListener('click', function(event) {
                sound2.play();
                let selec = opc.innerHTML;
                displayDiv.innerHTML = '';
                switch(selec) {
                    case 'Personaje':
                        sPersonaje();
                        break;
                    case 'Lugar':
                        sLugar();
                        break;
                    case 'Arma':
                        sArma();
                        break;
                    default:
                  }
            });
        }      
    }
}

*/


let main = function () { 
  var actual, ans, archivo, conta, cont2, conti, database, extras, filas, nuevo, resuls;
  database = [["Qui Gon Jin", "ssss"], ["Mace Windu", "sssnss"], ["Anakin", "sssnsn"], ["Yoda", "sssnn"], ["Luke Skywalker", "ssns"], ["Kit Fisto", "ssnn"], ["Darth Sidious", "snsss"], ["General Grievous", "snssns"], ["Darth Vader", "snssnns"], ["Conde Dooku", "snssnnn"], ["Darth Maul", "snsn"], ["Leia Organa", "snn"], ["Han Solo", "nss"], ["Boba Fett", "nsns"], ["Lando Calrissian", "nsnn"], ["C-3PO", "nnss"], ["R2-D2", "nnsn"], ["Chewbacca", "nnns"], ["Jabba the Hutt", "nnnn"]];
  conti = "y";
    changeImg('images/vader.jpg');
    display.style.display = 'block';
    cont.style.display = 'block';


  while (conti !== "n") {
    fetch('extras.txt')
    .then(res => res.text())
    .then(content => {
      let extras= content.split(/\n/);
      extras.forEach(line => console.log(line));
    });

    extras = [];
    conta = 0;
    cont2 = 0;
    filas = [];
/*
    for (var line, _pj_c = 0, _pj_a = archivo.readlines(), _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
      line = _pj_a[_pj_c];

      if (conta === 0) {
        filas.append(line.replace("\n", ""));
        conta = 1;
      } else {
        filas.append(line.replace("\n", ""));
        extras.append(filas);
        conta = 0;
        filas = [];
      }
    }
*/

  class nodo {
    constructor() {
        this.dato = null
        this.der = null    
        this.izq = null            
    }
  }


    function match_db(answers) {
      for (var i = 0, _pj_a = database.length; i < _pj_a; i += 1) {
        if (answers === database[i][1]) {
          return database[i][0];
        }
      }
    }

    function match_extras(answers) {
      for (var i = 0, _pj_a = extras.length; i < _pj_a; i += 1) {
        if (answers === extras[i][1]) {
          return extras[i][0];
        }
      }

      return null;
    }

    let raiz = new nodo();
    raiz.dato = "Tu personaje es sintiente a la fuerza?";
    raiz.izq = new nodo();
    raiz.izq.dato = "Tu personaje es un jedi?";
    raiz.izq.izq = new nodo();
    raiz.izq.izq.dato = "Tu personaje aparece en el episodio 1?";
    raiz.izq.izq.izq = new nodo();
    raiz.izq.izq.izq.dato = "Tu personaje tiene cabello largo?";
    raiz.izq.izq.izq.izq = new nodo();
    raiz.izq.izq.izq.der = new nodo();
    raiz.izq.izq.izq.der.dato = "Tu personaje es humano?";
    raiz.izq.izq.izq.der.izq = new nodo();
    raiz.izq.izq.izq.der.izq.dato = "Tu personaje tiene un lightsaber morado?";
    raiz.izq.izq.izq.der.der = new nodo();
    raiz.izq.izq.izq.der.izq.izq = new nodo();
    raiz.izq.izq.izq.der.izq.der = new nodo();
    raiz.izq.izq.der = new nodo();
    raiz.izq.izq.der.dato = "Tu personaje es hijo de Anakin Skywalker?";
    raiz.izq.izq.der.izq = new nodo();
    raiz.izq.izq.der.der = new nodo();
    raiz.izq.der = new nodo();
    raiz.izq.der.dato = "Tu personaje es un SITH?";
    raiz.izq.der.der = new nodo();
    raiz.izq.der.izq = new nodo();
    raiz.izq.der.izq.dato = "Tu personaje aparece en el episodio 3?";
    raiz.izq.der.izq.der = new nodo();
    raiz.izq.der.izq.izq = new nodo();
    raiz.izq.der.izq.izq.dato = "Tu personaje es parte del senado?";
    raiz.izq.der.izq.izq.izq = new nodo();
    raiz.izq.der.izq.izq.der = new nodo();
    raiz.izq.der.izq.izq.der.dato = "Tu personaje usa 4 sables de luz?";
    raiz.izq.der.izq.izq.der.izq = new nodo();
    raiz.izq.der.izq.izq.der.der = new nodo();
    raiz.izq.der.izq.izq.der.der.dato = "Tu personaje aparece en el episodio 4?";
    raiz.izq.der.izq.izq.der.der.izq = new nodo();
    raiz.izq.der.izq.izq.der.der.der = new nodo();
    raiz.der = new nodo();
    raiz.der.dato = "Tu personaje es un contrabandista?";
    raiz.der.izq = new nodo();
    raiz.der.izq.dato = "Tu personaje pilota el Halcon Milenario?";
    raiz.der.izq.izq = new nodo();
    raiz.der.izq.der = new nodo();
    raiz.der.izq.der.dato = "Tu personaje usa casco?";
    raiz.der.izq.der.izq = new nodo();
    raiz.der.izq.der.der = new nodo();
    raiz.der.der = new nodo();
    raiz.der.der.dato = "Tu personaje es un androide?";
    raiz.der.der.izq = new nodo();
    raiz.der.der.izq.dato = "Tu personaje domina seis millones de formas de comunicacion?";
    raiz.der.der.izq.izq = new nodo();
    raiz.der.der.izq.der = new nodo();
    raiz.der.der.der = new nodo();
    raiz.der.der.der.dato = "Tu personaje es un Wokke?";
    raiz.der.der.der.izq = new nodo();
    raiz.der.der.der.der = new nodo();
    console.log("STAR WARS Adivina Quien");
    resuls = "";
    actual = raiz;









    while (actual.izq !== null) {
      addText(` ${actual.dato} (s,n) `);
      //ans = input(actual.dato + "(s,n)");



      boton('SI');
      boton('NO');
      opci = document.querySelectorAll('#texto div button');
      for (const opc of opci) {
          opc.addEventListener('click', function(event) {
              let selec = opc.innerHTML;
              displayDiv.innerHTML = '';
              switch(selec) {
                  case 'SI':
                      ans = "s"
                      break;
                  case 'NO':
                      ans = "n"
                      break;
                  default:
                }
          });
      }      

      resuls += ans;

      if (ans === "s") {
        actual = actual.izq;
      } else {
        if (ans === "n") {
          actual = actual.der;
        }
      }






    }

      displayDiv.innerHTML = '';
      display.style.display = 'block';

      addText(` Tu personaje es ${match_db(resuls)} `);
      //ans = input("Tu personaje es " + match_db(resuls) + "?(s,n)");

      boton('SI');
      boton('NO');
      opci = document.querySelectorAll('#texto div button');
      for (const opc of opci) {
          opc.addEventListener('click', function(event) {
              let selec = opc.innerHTML;
              displayDiv.innerHTML = '';
              switch(selec) {
                  case 'SI':
                      ans = "s"
                      break;
                  case 'NO':
                      ans = "n"
                      break;
                  default:
                }
          });
      } 



    if (ans === "s") {
      addText(` Personaje adivinado `);
      //console.log("Personaje adivinado");
    } else {
      if (ans === "n") {
        while (ans === "n") {
          resuls += ans;

          if (match_extras(resuls) === null) {
              addText(` Cual era tu personaje? `);
              nuevo="ahsokada";
            //nuevo = input("Cual era tu personaje?");
            archivo.write(nuevo + "\n" + resuls + "\n");
            ans = "s";
          } else {
            ans = input("Tu personaje es " + match_extras(resuls) + "?(s,n)");
          }
        }
      }
    }

    archivo.close();
  }


}


changeImg('images/inicio.jpg');
window.onclick = function () { main(); this.onclick=null }










