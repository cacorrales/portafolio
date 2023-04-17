function encriptar() {
    const texto = document.getElementById("texto").value.toLowerCase();
    const textoEncriptado = texto
      .replaceAll("a", "ai")
      .replaceAll("e", "enter")
      .replaceAll("i", "ines")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");
    document.getElementById("textoEncriptado").textContent = textoEncriptado;
  }
  
  function desencriptar() {
    const textoEncriptado = document.getElementById("textoEncriptado").textContent.toLowerCase();
    const textoDesencriptado = textoEncriptado
      .replaceAll("ai", "a")
      .replaceAll("enter", "e")
      .replaceAll("ines", "i")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
    document.getElementById("textoDesencriptado").textContent = textoDesencriptado;
  }