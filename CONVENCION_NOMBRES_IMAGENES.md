# Convención de nombres para imágenes de Case Studies

Propósito: definir un patrón claro y consistente para los assets de imágenes de cada case study, de modo que sea fácil localizar, referenciar y detectar imágenes faltantes.

Ubicación recomendada:
- `src/assets/projects/<slug>/` — assets usados por la app (optimizar y importar desde aquí)
- `public/assets/projects/<slug>/` — imágenes públicas que no requieren import dinámico

Formato de nombre (obligatorio):
- `SLUG_cover.jpg` — imagen principal del case study (hero / portada)
- `SLUG_1.jpg`, `SLUG_2.jpg`, ... — imágenes adicionales, enumeradas correlativamente

Ejemplos:
- `mi-portafolio_2026_cover.jpg`
- `mi-portafolio_2026_1.jpg`
- `alien-csi-bioblitz_cover.jpg`
- `alien-csi-bioblitz_1.jpg`

Buenas prácticas:
- Preferir WebP/AVIF para producción cuando sea posible; mantener también JPG/PNG originales si los necesitas para edición.
- Dimensiones sugeridas: portada >= 1200px de ancho; imágenes interiores >= 800px.
- Nombres en minúsculas y con guiones (`-`) para separar palabras en el slug.
- Mantener metadatos de imagen (alt, título) en el código o en el CMS/archivo de traducción.
- Añadir un `README.md` dentro de cada carpeta de proyecto si hay variantes (mobile/desktop) o assets alternativos.

Checklist para cada case study:
- [ ] `SLUG_cover.*` existe
- [ ] Imágenes adicionales (`SLUG_1.*`, `SLUG_2.*`) enumeradas y optimizadas
- [ ] Alt text definido en componente/translation

Si quieres, puedo:
- Insertar esta convención en `DOCUMENTACION_TECNICA_PORTFOLIO.md` o mantenerla como archivo independiente.
- Buscar case studies que tengan imágenes faltantes y listarlas.
