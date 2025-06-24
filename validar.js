document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("miFormulario");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let ok = true;

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const edad = parseInt(document.getElementById("edad").value);

    document.getElementById("errorNombre").textContent = nombre ? "" : "Nombre requerido";
    document.getElementById("errorEmail").textContent = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Email inválido";
    document.getElementById("errorEdad").textContent = edad >= 18 && edad <= 99 ? "" : "Edad debe ser entre 18 y 99";

    if (nombre && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && edad >= 18 && edad <= 99) {
      alert("Formulario válido. Enviando datos...");
    }
  });
});
