# Cuentos de Cacería: Creación de Hoja

![Propuesta 1: portada y logo](static/images/propuesta%201_compressed_page-0001.jpg)

## Propósito

**Cuentos de Cacería: Creación de Hoja** es una herramienta web diseñada para facilitar la creación y personalización de personajes para *Cuentos de Cacería*. Su objetivo es reunir en un solo lugar la información necesaria para preparar un personaje, evitando tener que completar manualmente cada apartado de la hoja desde cero.

La aplicación permite organizar los datos del Cazador, consultar las opciones disponibles durante su creación y trasladar la información a una ficha visual que puede personalizarse y exportarse como imagen.

La herramienta funciona como apoyo para la preparación de partidas. La guía del juego sigue siendo necesaria para consultar el significado completo de las habilidades, condiciones y reglas.

## ¿Cómo funciona?

1. La portada presenta la ambientación visual del proyecto y permite acceder al creador de personajes.
2. El usuario puede elegir entre crear un personaje manualmente o generar uno aleatorio.
3. En el formulario se selecciona un arquetipo. Sus descripciones, rasgos, habilidades, peculiaridades, límites y valores iniciales se cargan automáticamente.
4. Se selecciona un oficio para cargar su descripción, rutas de habilidades, hazañas y equipamiento. También se pueden añadir habilidades y equipo al personaje.
5. Se completan los rasgos adicionales, la fobia y su efecto narrativo.
6. De forma opcional, se pueden añadir una maldición y un vicio, además de personalizar otros campos disponibles.
7. Por último, se identifica al personaje y al jugador, y se escriben los cuentos de origen.
8. Al guardar la hoja, los datos se trasladan a una ficha RPG dinámica, donde se puede completar y editar la información, incorporar un retrato y exportar el resultado como PNG o JPG.

La generación aleatoria permite seleccionar automáticamente un arquetipo, un oficio y una fobia, agilizando el inicio de la creación del personaje. El usuario puede continuar personalizando los campos antes de guardar la hoja.

Las opciones y sus datos se encuentran organizados en archivos JavaScript independientes. Estos scripts reaccionan a los cambios de los selectores y actualizan los campos relacionados sin necesidad de un servidor para el flujo básico.

## Características principales

- **Creador de personajes por pasos:** organiza la información en secciones para facilitar su cumplimentación.
- **Generación aleatoria:** selecciona automáticamente algunas características iniciales del personaje.
- **Datos dinámicos:** carga información relacionada con el arquetipo, el oficio y otras opciones seleccionadas.
- **Personalización:** permite completar la identidad del Cazador, sus rasgos, habilidades, equipo, trasfondo y otros apartados.
- **Ficha RPG editable:** ofrece una presentación visual de la información del personaje mediante campos que se pueden modificar.
- **Incorporación de retratos:** permite añadir una imagen para representar al personaje en su ficha.
- **Exportación de la ficha:** permite descargar el resultado como imagen PNG o JPG.
- **Dados animados en 3D:** incluye una experiencia visual con movimiento y rebotes, acompañada de ajustes para limitar la duración de la animación.
- **Ambientación visual:** utiliza fondos, efectos de iluminación, transiciones y animaciones para reforzar la atmósfera de fantasía oscura.
- **Diseño adaptable:** incorpora ajustes de presentación para computadoras y dispositivos móviles.
- **Separación de archivos:** distribuye los estilos, la lógica y los datos en archivos independientes para facilitar su mantenimiento.

## Propuestas visuales

La portada utiliza una de las propuestas visuales desarrolladas para el proyecto. La siguiente imagen muestra una vista de la propuesta 003:

![Propuesta 003](static/images/propuesta%201_compressed_page-0003.jpg)

La interfaz combina una estética de fantasía oscura con elementos relacionados con los cuentos, los cazadores y el ambiente del juego. Se han incorporado efectos visuales y ajustes específicos para mejorar la presentación tanto en pantallas grandes como en dispositivos móviles.

**Nota:** todavía falta incorporar varias imágenes representativas en distintas secciones de la web. Estas imágenes se añadirán posteriormente para completar la presentación visual y reforzar la ambientación del proyecto.

## Acceso a la web

El proyecto está publicado mediante **GitHub Pages**, por lo que puedes acceder a la aplicación directamente desde tu navegador sin necesidad de descargar archivos ni instalar dependencias.

Puedes visitar la página web para explorar su ambientación, acceder al creador de personajes y probar sus funcionalidades disponibles.

**Enlace a la web:** https://angelferrer200444-oss.github.io/Cuento-de-Caceria---Creacion-de-Hoja/

> **Nota:** algunas funciones pueden depender de la configuración del navegador y de las rutas de los archivos del proyecto.


## Estructura principal

- `index.html`: portada de la web y punto de entrada para GitHub Pages.
- `templates/`: páginas HTML de la aplicación, incluido el creador de personajes.
- `static/css/`: hojas de estilo de la interfaz, los formularios y los componentes visuales.
- `static/js/`: lógica de la portada, generación de personajes, datos de arquetipos, oficios, fobias y otros elementos interactivos.
- `static/images/`: imágenes de portada, versiones para móviles y propuestas visuales.
- `pre-creator/`: pantalla previa desde la que se puede acceder a la creación manual o aleatoria de personajes.
- `dados20/`: página relacionada con los dados animados en 3D.
- `ficha_rpg_dinamica/`: ficha de personaje editable con opciones de exportación.
- `fondo/`: página dedicada a una experiencia visual de ambientación.
- `documentacion/`: material de referencia del juego.

## Uso local

El proyecto no requiere instalar dependencias para probar el flujo básico de las páginas estáticas.

1. Descarga o clona el repositorio.
2. Abre `index.html` en un navegador.
3. Pulsa **Empezar** para acceder a las opciones de creación.
4. Selecciona la creación manual o la generación aleatoria de un personaje.
5. Completa los campos disponibles y guarda la hoja para continuar en la ficha dinámica.

También puedes abrir directamente `templates/creador.html` para acceder al formulario de creación de personajes.

Algunas funciones, como la navegación entre páginas, el almacenamiento local y la exportación de imágenes, dependen del navegador y de la configuración de los archivos del proyecto.

## Estado actual

El proyecto se encuentra **prácticamente terminado**, con las principales páginas, herramientas interactivas y funciones de creación de personajes implementadas.

La aplicación utiliza principalmente tecnologías del lado del cliente, como HTML, CSS y JavaScript, por lo que el flujo básico no requiere un backend.

Al guardar la hoja, los datos se conservan temporalmente mediante el almacenamiento local del navegador y se utilizan para abrir `ficha_rpg_dinamica/index.html` con la información del personaje. Desde allí se puede editar el contenido, añadir un retrato y exportar la ficha como PNG o JPG.

Aunque las funciones principales están implementadas, quedan pendientes algunas imágenes representativas y posibles ajustes visuales menores.

## Contacto y consultas

Si tienes alguna duda, sugerencia o comentario sobre el proyecto, **estoy a la orden**. Puedes ponerte en contacto conmigo para consultar cualquier aspecto relacionado con su funcionamiento, estructura o desarrollo.

¡Gracias por visitar **Cuentos de Cacería: Creación de Hoja**!

