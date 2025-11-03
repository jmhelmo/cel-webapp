function doGet(e) {
  // 1. Carga el archivo 'index.html' (que contiene toda la lógica de tu app)
  //    como una plantilla.
  var htmlTemplate = HtmlService.createTemplateFromFile('index');
  
  // 2. Evalúa la plantilla (la procesa).
  var htmlOutput = htmlTemplate.evaluate();
  
  // 3. Establece el título que aparecerá en la pestaña del navegador.
  htmlOutput.setTitle('Guía del Animador CEL');
  
  // 4. AÑADE EL METATAG DE VIEWPORT (importante para móviles)
  htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
  
  // 5. ¡LA SOLUCIÓN!
  //    Establece el modo de sandbox a IFRAME.
  //    Esto permite que la app cargue scripts externos (Tailwind, Google Fonts)
  //    e imágenes (Unsplash) de forma segura.
  htmlOutput.setSandboxMode(HtmlService.SandboxMode.IFRAME);
  
  // 6. Sirve el HTML al usuario.
  return htmlOutput;
}
