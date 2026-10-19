# Cuento de Caceria: Creacion de Hoja

## Proposito

Esta web existe para facilitar la creacion de personajes para *Cuento de Caceria*. Su objetivo es reunir en un solo lugar la informacion que normalmente tendria que consultarse por separado durante la preparacion de una partida: el arquetipo, el oficio, las habilidades, los rasgos, la fobia, las maldiciones y el trasfondo del Cazador.

La herramienta funciona como apoyo para organizar la hoja y tener sus datos a mano. La guia del juego sigue siendo necesaria para consultar el significado completo de las habilidades, condiciones y reglas.

## Como funciona

1. La portada introduce la web y permite acceder a la creacion de personaje.
2. En el formulario se elige un arquetipo. Sus descripciones, rasgos, habilidades, peculiaridades, limites y valores iniciales se cargan automaticamente.
3. Se selecciona un oficio para cargar su descripcion, rutas de habilidades, hazanas y equipamiento. Tambien se pueden anadir habilidades y equipo al personaje.
4. Se completan los rasgos adicionales, la fobia y su efecto narrativo.
5. De forma opcional, se puede anadir una maldicion y un vicio.
6. Por ultimo, se identifican el personaje y el jugador, y se escribe el cuento de origen.

Las opciones y sus datos se encuentran en archivos JavaScript independientes. Los scripts escuchan los cambios de los selectores y actualizan los campos relacionados sin necesidad de un servidor.

## Estructura principal

- `index.html`: portada de la web.
- `inicio.css`: estilos y transiciones de la portada.
- `inicio.js`: animacion de nieve, transicion inicial y navegacion hacia el formulario.
- `creador.html`: formulario completo de creacion de la hoja.
- `arquetipos.js`: arquetipos y datos que se cargan en el formulario.
- `oficios.js`: oficios, habilidades, hazanas y equipamiento.
- `fobias.js`: fobias y sus descripciones o efectos.
- `maldiciones.js`: maldiciones y sus efectos, penalizaciones y condiciones.
- `documentacion/`: material de referencia del juego.

## Uso local

No requiere instalacion de dependencias ni un servidor para probar el flujo basico. Abre `index.html` en un navegador y pulsa **Empezar**. Desde la portada puedes entrar en **Crear personaje**.

Tambien puedes abrir directamente `creador.html` para acceder al formulario.

## Estado actual

La aplicacion es una interfaz estatica del lado del cliente. Los botones **Guardar hoja** y **Limpiar formulario** pertenecen al formulario, pero actualmente no existe un backend ni una exportacion persistente implementada; los datos se mantienen mientras la pagina permanezca abierta.
