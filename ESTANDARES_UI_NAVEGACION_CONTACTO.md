# Estandares UI, Navegacion y Contacto

## Regla Global de Fondo

- El fondo global del sitio es el gradiente principal:
  - `linear-gradient(120deg, #f2e8f0 0%, #ede6eb 8%, #e8dce8 10%, #d4c4d4 24%, #b8d4c0 45%, #a8d8b0 70%, #b0deb8 85%, #f0e8f0 100%)`
- Debe aplicarse en wrappers de pagina con `backgroundAttachment: 'fixed'`.
- Las secciones deben usar `bg-transparent` (o translucidios para cards), evitando bloques de fondo blanco plano.

## Case Studies

### Hero

- Mantener estructura estandar de hero:
  - label/rol
  - titulo
  - subtitulo (`heading-subtitle`)
  - texto de contexto
  - chips

### Cover

- Debe ir justo despues del hero, en seccion propia.

### Navegacion final obligatoria

- Al final de cada case study debe existir paginador con:
  - enlace para volver (`/proyectos`)
  - enlace al siguiente case study con su nombre visible
- Componente base: `src/components/case-study/CaseStudyPager.tsx`.

## Contacto (Hero tipificado)

- Titulo: `Contacto`.
- Subtitulo: pregunta de necesidad web.
- Texto de apoyo en body, sin botones CTA.
- En lugar de chips: fila de iconos/enlaces.

### Iconos/enlaces actuales

- Sobre: `/#sobre-mi`
- Telefono: `tel:+34625977711`
- WhatsApp: `https://wa.me/34625977711`
- LinkedIn: `https://linkedin.com/in/sara-menendez`

### Interaccion de iconos

- Hover igual al patron de icono de WhatsApp en header:
  - fondo suave al pasar (`hover:bg-[#e3e8e3]`)
  - transicion corta y limpia

## Enlaces de contacto canonicos

- Email: `sara.m.pumariega@gmail.com`
- WhatsApp: `+34 625 97 77 11` / `https://wa.me/34625977711`
