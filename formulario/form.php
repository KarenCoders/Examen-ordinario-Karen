<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Formulario</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <div class="contenedor">
    <h1>Registro de Usuario</h1>

    <form id="miFormulario" method="post" action="">
      <label>Nombre:
        <input type="text" name="nombre" id="nombre" required>
        <span class="error" id="errorNombre"></span>
      </label>

      <label>Email:
        <input type="email" name="email" id="email" required>
        <span class="error" id="errorEmail"></span>
      </label>

      <label>Edad:
        <input type="number" name="edad" id="edad" required>
        <span class="error" id="errorEdad"></span>
      </label>

      <button type="submit">Enviar</button>
    </form>
  </div>

  <script src="validar.js"></script>
</body>
</html>
