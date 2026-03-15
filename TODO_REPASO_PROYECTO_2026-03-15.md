# To Do List - Repaso General del Proyecto

Fecha: 2026-03-15

## 1) Cosas que faltan

- Completar contenido real de los case studies placeholder:
  - `MiseEnSceneCaseStudy.tsx`
  - `OhmiosCaseStudy.tsx`
  - `Portfolio2025CaseStudy.tsx`
- Reemplazar placeholders visuales restantes en `EAECaseStudy.tsx` (bloque de `Imagen 1..4`) por capturas finales.
- Revisar y definir orden editorial definitivo de case studies (el paginador ya existe, falta decidir secuencia final cerrada de portfolio).
- Validar si se mantiene seccion de "workflow en construccion" y "lecciones en construccion" en `PortfolioCaseStudy.tsx` o se sustituye por contenido final.
- Confirmar si se agrega icono de Email en la pagina de contacto (ahora sigue la especificacion pedida: Sobre, Telefono, WhatsApp, LinkedIn).

## 2) Cosas a mejorar

- Uniformar textos de case studies para evitar mezcla de tono ES/EN en algunos bloques historicos.
- Revisar microtipografia:
  - line-height en bloques largos de case study.
  - consistencia de uppercase en labels de hero.
- Optimizar performance de imagenes grandes de case studies:
  - conversion a WebP/AVIF donde sea posible.
  - tamaños responsive por breakpoint.
- Añadir tests de navegacion basicos (routing + links de contacto) para evitar regresiones.
- Revisar accesibilidad:
  - contraste en chips/cards translucidios.
  - estados focus visibles en todos los enlaces de iconos.
- Corregir warning de fonts en build (`Gilroy-Bold.ttf` no resuelto en build time).

## Checklist de navegacion revisada

- Rutas principales existen:
  - `/`
  - `/proyectos`
  - `/contacto`
  - `/proyectos/:slug`
- Email principal: `mailto:sara.m.pumariega@gmail.com`.
- WhatsApp principal: `https://wa.me/34625977711`.
- LinkedIn en footer/contacto: `https://linkedin.com/in/sara-menendez`.
- Se agrego paginador al final de case studies dedicados para volver y avanzar.
