  // Mostrar la imagen de fallback si el video no se carga en un tiempo razonable
  document.getElementById('preloadVideo').addEventListener('error', function() {
    document.getElementById('preloadVideo').style.display = 'none';
    document.getElementById('fallbackImage').style.display = 'block';
    document.body.style.overflow = 'auto'; // Permitir scroll de nuevo
  });

  // Ocultar el video cuando termine y mostrar el contenido de la página
  document.getElementById('preloadVideo').addEventListener('ended', function() {
    this.style.display = 'none';
    document.getElementById('fallbackImage').style.display = 'none';
    document.body.style.overflow = 'auto'; // Permitir scroll de nuevo
  });
  
  // Asegúrate de permitir scroll si el usuario cierra el video manualmente o si ocurre algún problema
  window.addEventListener('load', function() {
    document.getElementById('preloadVideo').addEventListener('play', function() {
      document.body.style.overflow = 'hidden'; // Deshabilitar scroll mientras el video se reproduce
    });

    document.getElementById('preloadVideo').addEventListener('pause', function() {
      document.body.style.overflow = 'auto'; // Habilitar scroll si el video se pausa
    });
  });