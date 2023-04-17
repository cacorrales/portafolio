function validar() {
    var mensaje = document.getElementById("mensaje").value;
    if (!/^[a-z]+$/.test(mensaje)) {
      alert("Por favor, ingrese solo letras minúsculas.");
      return false;
    }
    return true;
  }

function encriptar() {
    if (!validar()) {
      return;
    }
    var mensaje = document.getElementById("mensaje").value;
    var resultado = "";
    for (var i = 0; i < mensaje.length; i++) {
      var letra = mensaje.charAt(i);
      if (letra === 'a') {
        resultado += 'ai';
      } else if (letra === 'e') {
        resultado += 'enter';
      } else if (letra === 'i') {
        resultado += 'ines';
      } else if (letra === 'o') {
        resultado += 'ober';
      } else if (letra === 'u') {
        resultado += 'ufat';
      } else {
        resultado += letra;
      }
    }
    document.getElementById("resultado").textContent = resultado;
  }

  function copiar() {
    var resultado = document.getElementById("resultado");
    var copia = resultado.textContent;
    navigator.clipboard.writeText(copia);
    alert("¡El texto encriptado ha sido copiado al portapapeles!");
  }
  
  function desencriptar() {
    var equivalencias = {
      'ai': 'a',
      'enter': 'e',
      'ines': 'i',
      'ober': 'o',
      'ufat': 'u'
    };
  
    var resultado = document.getElementById("encriptado").value;
    var desencriptado = resultado;
  
    for (var clave in equivalencias) {
      var valor = equivalencias[clave];
      var expresion = new RegExp(clave, 'g');
      desencriptado = desencriptado.replace(expresion, valor);
    }
  
    document.getElementById("desencriptado").value = desencriptado;
  }

  /*
  function desencriptar() {
    var resultado = document.getElementById("resultado").textContent;
    var desencriptado = "";
    for (var i = 0; i < resultado.length; i++) {
      var letra = resultado.charAt(i);
      if (letra === 'ai') {
        desencriptado += 'a';
      } else if (letra === 'enter') {
        desencriptado += 'e';
      } else if (letra === 'ines') {
        desencriptado += 'i';
      } else if (letra === 'ober') {
        desencriptado += 'o';
      } else if (letra === 'ufat') {
        desencriptado += 'u';
      } else {
        desencriptado += letra;
      }
    }
    document.getElementById("desencriptado").textContent = desencriptado;
  }
  */