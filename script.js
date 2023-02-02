// Objeto Document
// Métodos
// Propiedad: innerHTML
// Template String
document.getElementById("idheader").innerHTML = `
<nav class="nav-logo">
    <a href = "index.html">
      <img class="logo" src = "logos-sinfondo-definitivo.png" alt="logo-restaurant">
    </a>
    <a class="nav-link" href="index.html">Inicio </a>
    <a class="nav-link" href="quienessomos.html">¿Quienes Somos? </a>
    <a class="nav-link" href="menu.html">Menú</a>
    <a class="nav-link" href="especialidadesaYfechas.html">Especiales</a>
  </nav>

    <h2 class="encabezado"><i class="fa-solid fa-utensils"></i> CAFETERÍA - PIZZERÍA - RESTAURANT <i class="fa-solid fa-utensils"></i></h2>
    <h4 class="direccion"><i class="fa-solid fa-location-dot"></i> Av. Belgrano 3383, Almagro, CABA </h4>
    <h1 id="Bienvenido">Bienvenido a Cuñados</h1>
`
document.getElementById("idfooter").innerHTML = `
    <div>
      <p id="contacto">Contacto y redes:</p>
      <i id="facebook-icon"class="fa-brands fa-facebook"></i>
      <a id ="facebook" class="links" href="https://www.facebook.com/profile.php?id=100063704076501" target="_blank">Facebook</a><br>
      <i id ="instagram-icon" class="fa-brands fa-instagram"></i>
      <a id ="instagram" class="links" href="https://instagram.com/cunadosrestaurante?igshid=YmMyMTA2M2Y=" target="_blank">Instagram</a><br>
      <i id ="tel-icon" class="fa-solid fa-phone"></i>
      <a id="tel">Tel: 4865-0745/4889-9298</a>
    </div>
  
    <h6 ><a id ="nosotros" class="links" href="quienessomos.html">Acerca de nosotros</a></h6>
`