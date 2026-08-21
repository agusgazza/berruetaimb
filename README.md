# Berrueta Inmobiliaria — Sitio web

Rediseño premium, responsivo (mobile-first) y semántico del sitio de Berrueta Inmobiliaria: estética editorial oscura con tipografía serif, acentos dorados y hero inmersivo a pantalla completa.

## Estructura

```
index.html            Inicio: hero inmersivo con buscador, destacadas, sucursales
propiedades.html      Catálogo con filtros (Venta / Alquiler / Oportunidades / Apto crédito)
tasaciones.html       Proceso de tasación en 3 pasos y CTAs
nosotros.html         Historia, valores y matrículas
contacto.html         Sucursales, horarios y formulario de consulta
css/styles.css        Sistema de diseño (tokens, mobile-first)
js/main.js            Header sticky, menú móvil, revelado al scroll, filtros
assets/img/           Logo PNG transparente, emblema, favicons, badges de colegios
assets/img/photos/    Imágenes ambientales generadas (ver nota)
Berrueta/             Copia guardada del sitio anterior (solo referencia; se puede eliminar)
```

## Notas

- **Tipografías**: Cormorant Garamond (títulos) y Jost (interfaz), vía Google Fonts.
- **Logo y favicon**: PNG con fondo transparente generados desde el logo original; el header usa el emblema + wordmark en texto para máxima nitidez.
- **Imágenes**: el sitio no contaba con fotos de las propiedades (el snapshot original las cargaba desde un CDN externo), por lo que `assets/img/photos/` contiene imágenes ambientales desenfocadas generadas proceduralmente. Para usar fotografía real basta con reemplazar `hero.jpg`, `banner.jpg` y `prop-01.jpg` … `prop-12.jpg` por fotos propias (idealmente 1920px de ancho para hero/banner y 900×620 para las tarjetas) — no hace falta tocar el código.
- **Buscador y "Ver más"**: apuntan al catálogo en línea de berruetainmob.com.ar. Al integrar un backend propio, ajustar el `action` del formulario y los enlaces de las tarjetas.
- **Formulario de contacto**: usa `mailto:` (sin backend). Para envío real, conectar un servicio tipo Formspree o un endpoint propio.

## Desarrollo local

No requiere build. Servir la carpeta con cualquier servidor estático:

```
python3 -m http.server 8000
```
