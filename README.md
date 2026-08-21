# Berrueta Inmobiliaria — Sitio web

Rediseño moderno, responsivo (mobile-first) y semántico del sitio de Berrueta Inmobiliaria.

## Estructura

```
index.html          Página principal (HTML5 semántico)
css/styles.css      Hoja de estilos (tokens de diseño, mobile-first)
js/main.js          Interacciones: menú móvil, header sticky, tabs del buscador
assets/img/         Fuentes de las imágenes (logo PNG transparente, favicons, badges)
Berrueta/           Copia guardada del sitio anterior (solo referencia; se puede eliminar)
```

## Notas

- **Tipografías**: Poppins (títulos) e Inter (texto), vía Google Fonts.
- **Logo y favicon**: PNG con fondo transparente generados a partir del logo original (`berrueta_h.jpg`). Están incrustados como data URIs (`data:image/png;base64,…`) dentro de `index.html`, de modo que el sitio no depende de archivos de imagen externos. Si se prefiere servirlos como archivos, basta con decodificarlos a `assets/img/*.png` y actualizar los atributos `src`/`href`.
- **Imágenes de propiedades**: el snapshot original no incluía las fotos (cargaban desde un CDN externo), por lo que las tarjetas usan placeholders con degradado. Para usar fotos reales, reemplazar el bloque `.card__media` de cada tarjeta por una etiqueta `<img>` con la foto correspondiente.
- **Buscador**: la interfaz está lista; el formulario apunta a berruetainmob.com.ar. Al integrar un backend propio, ajustar el atributo `action` y los `name` de los campos.

## Desarrollo local

No requiere build. Servir la carpeta con cualquier servidor estático, por ejemplo:

```
python3 -m http.server 8000
```
