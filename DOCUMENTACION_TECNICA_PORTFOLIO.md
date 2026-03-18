# Documentación Técnica Interna: Portfolio React

## Propósito
Este archivo centraliza buenas prácticas, patrones de componentes reutilizables, errores frecuentes y soluciones, para evitar problemas recurrentes y mantener el contexto técnico del proyecto.

---

## Patrones de Componentes Reutilizables
- Usar componentes como `Button`, `Card`, `ProjectCard`, `CaseStudySection` para evitar duplicación de lógica y estilos.
- Mantener props claras y tipadas (TypeScript).
- Separar lógica de presentación y datos.
- Documentar cada componente en su archivo con comentarios breves.

---

## Checklist de Revisión para Nuevos Componentes
- ¿Es reutilizable y modular?
- ¿Tiene tipado correcto?
- ¿Evita duplicación de código?
- ¿Cumple con los estándares de diseño y accesibilidad?
- ¿Está documentado?

---

## Errores Frecuentes y Soluciones
- **Fonts en build**: Revisar rutas y formatos, preferir fuentes en `/src/assets/fonts/` y usar `fonts.css`.
- **Imágenes de baja resolución**: Usar formatos WebP/AVIF, subir imágenes de al menos 1200px de ancho para desktop.
- **Props mal tipadas**: Revisar interfaces y types en `/src/types/`.
- **Accesibilidad**: Verificar contraste, estados focus, alt en imágenes.

---

## Sesiones y Contexto
- Registrar cada sesión con fecha y tareas clave.
- Documentar decisiones técnicas y cambios importantes.

---

## Cambios recientes (17/03/2026)

- Restauración completa de la página PortfolioCaseStudy.tsx a la versión original del main remoto para eliminar errores y bucles previos.
- Ajuste del espacio vertical entre elementos del contenedor de contenido de las cards de proyecto a 16px en desktop (`gap-4`).
- Actualización del copy en la sección hero de la home, usando solo el texto literal proporcionado por Sara.
- Eliminación del texto adicional en el hero según petición.
- Confirmación y ajuste de los espacios entre elementos en las cards de proyecto.
- Todos los cambios se ejecutaron siguiendo buenas prácticas: sin inventar copy, sin modificar el diseño original fuera de instrucciones, y protegiendo el código ante errores.

> Para futuras sesiones: documentar siempre cambios de copy, ajustes visuales y restauraciones importantes en este archivo.

---

## Sesión 18/03/2026: Ciclo de errores y solución en PortfolioCaseStudy

### Resumen cronológico
- Solicitud inicial: aplicar fondo #f2f7f4 solo a la página del case study de portafolio y reemplazar la imagen de la sección "Por Qué Reconstruir" por un placeholder sin texto.
- Restauración local de PortfolioCaseStudy.tsx a versión original (commit 9828cd9970cc6a02495ffc83c5f3efa267132871) usando git checkout.
- Primer intento de aplicar patch: error de contexto, no se modificó correctamente el fondo ni la imagen.
- Lectura manual del archivo y localización exacta de la sección a modificar.
- Segundo intento: se aplicó el fondo #f2f7f4 y se reemplazó la imagen por un div placeholder, sin texto.
- Verificación de errores: archivo sin errores tras el cambio.
- Confirmación por parte de Sara: el fondo se visualiza correctamente.

### Errores detectados
- Error de contexto en patch: el sistema intentó modificar regiones incorrectas por falta de contexto preciso.
- Repetición de restauraciones globales en vez de locales.
- Frustración del usuario por lentitud y errores de ejecución.

### Soluciones aplicadas
- Restauración local y precisa del archivo afectado.
- Documentación de instrucciones globales para asistentes IA en `/memories/instrucciones-ia.md`.
- Validación de cambios con verificación de errores.

### Decisiones técnicas
- Prohibido inventar copy o modificar diseño sin instrucciones explícitas.
- Documentar cada ciclo de errores y solución en este archivo.
- Priorizar restauraciones locales y validación JSX.

---

## Referencias
- Paleta y tipografía: ver `/memories/repo/tipografia-y-paleta-portfolio.md`
- Especificaciones de marca: ver `/memories/repo/sara-brand-specs.md`

---

*Actualizado: 17/03/2026*
---

> Añadir aquí cada error detectado, solución aplicada y decisión relevante para futuras sesiones.


- **Error persistente AboutMe.tsx**: Al añadir botones o iconos de contacto debajo de la imagen, surgen errores de cierre JSX y la estructura se rompe. Restaurar siempre desde el último commit si ocurre. Revisar estructura de divs y fragments antes de modificar.

