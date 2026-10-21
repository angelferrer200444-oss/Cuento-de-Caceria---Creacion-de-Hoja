# Cuentos de Caceria: Creacion de Hoja

![Propuesta 1: portada y logo](static/images/propuesta%201_compressed_page-0001.jpg)

## Proposito

Esta web existe para facilitar la creacion de personajes para *Cuentos de Caceria*. Su objetivo es reunir en un solo lugar la informacion que normalmente tendria que consultarse por separado durante la preparacion de una partida: el arquetipo, el oficio, las habilidades, los rasgos, la fobia, las maldiciones y el trasfondo del Cazador.

La herramienta funciona como apoyo para organizar la hoja y tener sus datos a mano. La guia del juego sigue siendo necesaria para consultar el significado completo de las habilidades, condiciones y reglas.

## Como funciona

1. La portada introduce la web y permite acceder a la creacion de personaje.
2. En el formulario se elige un arquetipo. Sus descripciones, rasgos, habilidades, peculiaridades, limites y valores iniciales se cargan automaticamente.
3. Se selecciona un oficio para cargar su descripcion, rutas de habilidades, hazanas y equipamiento. Tambien se pueden anadir habilidades y equipo al personaje.
4. Se completan los rasgos adicionales, la fobia y su efecto narrativo.
5. De forma opcional, se puede anadir una maldicion y un vicio.
6. Por ultimo, se identifican el personaje y el jugador, y se escriben los cuentos de origen.

Las opciones y sus datos se encuentran en archivos JavaScript independientes. Los scripts escuchan los cambios de los selectores y actualizan los campos relacionados sin necesidad de un servidor.

## Propuestas visuales

La portada actual utiliza la primera propuesta como imagen principal. Esta es una vista de la propuesta 003:

![Propuesta 003](static/images/propuesta%201_compressed_page-0003.jpg)

## Estructura principal

- `index.html`: portada de la web y punto de entrada para GitHub Pages.
- `templates/`: paginas HTML de la aplicacion.
- `static/css/`: estilos de la interfaz.
- `static/js/`: logica de la portada y datos del formulario.
- `static/images/`: imagenes de portada, movil y propuestas visuales.
- `documentacion/`: material de referencia del juego.

## Uso local

No requiere instalacion de dependencias ni un servidor para probar el flujo basico. Abre `index.html` en un navegador y pulsa **Empezar**. Desde la portada puedes entrar en **Crear personaje**.

Tambien puedes abrir directamente `templates/creador.html` para acceder al formulario.

## Estado actual

La aplicacion es una interfaz estatica del lado del cliente. Al pulsar **Guardar hoja**, los datos se guardan en el almacenamiento local del navegador y se abre `ficha_rpg_dinamica/index.html` con la ficha rellenada. Desde esa ficha se puede editar el contenido y exportarlo como PNG o JPG.
