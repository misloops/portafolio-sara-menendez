# MAPEO EXHAUSTIVO: CONTENIDO EN ESPAÑOL PARA TRADUCCIÓN

**Fecha:** 2 de abril de 2026  
**Proyecto:** Portafolio React de Sara  
**Total de items:** 150+ textos identificados

---

## 📋 ÍNDICE

1. PÁGINAS PRINCIPALES
2. COMPONENTES COMUNES
3. CONSTANTES Y DATOS
4. CASE STUDIES (4 principales + 4 adicionales)
5. ARIA-LABELS Y ACCESIBILIDAD
6. MÉTODOS Y GUÍAS DE NAVIGATIONACIÓN

---

## 1️⃣ PÁGINAS PRINCIPALES

### HomePage.tsx
**Archivo:** `src/pages/HomePage.tsx`

| Ubicación | Texto Original | Contexto/Tipo |
|-----------|---|---|
| ID `inicio` | `'inicio'` | Link internal ID |
| ID `proyectos` | `'proyectos'` | Link internal ID |
| ID `sobre-mi` | `'sobre-mi'` | Link internal ID |

**Nota:** HomePage es principalmente un orquestador que importa componentes. El contenido está en Hero, Projects, AboutMe.

---

### ProjectsPage.tsx
**Archivo:** `src/pages/ProjectsPage.tsx` (líneas 40-70)

| Línea aprox | Texto Original | Tipo | Contexto |
|---|---|---|---|
| 48 | `Proyectos` | H1 Title | Título principal de la página |
| 49 | `Selección de mis trabajos más representativos` | Subtitle | Subtítulo descriptivo |
| 54 | `Filtros` | Label | Encabezado de sección de filtros |
| 61 | `Todos` | Button label | Botón para mostrar todos los proyectos |

**Etiquetas de filtrado (líneas 39-40):**
```
'Diseño Web',
'Diseño UX / UI',
'Web Manager',
'WordPress',
'Drupal',
'Prestashop',
'Figma',
'React'
```

---

### ContactPage.tsx
**Archivo:** `src/pages/ContactPage.tsx`

| Ubicación | Texto Original | Tipo |
|---|---|---|
| N/A | Gradient background | No es contenido |

**Nota:** ContactPage importa `<Contact />`. Todo el contenido está en el componente Contact.

---

### CaseStudyPage.tsx
**Archivo:** `src/pages/CaseStudyPage.tsx`

Esta es principalmente una página enrutadora sin textos propios. Importa case studies específicos según slug:
- `eae-business-school` → `EAECaseStudy`
- `alien-csi-bioblitz` → `AlienCaseStudy`
- `mi-portafolio-2026` → `PortfolioCaseStudy`
- `trick-tales-app` → `TrickTalesCaseStudy`
- `ohmios-records` → `OhmiosRecordsCaseStudy`

---

## 2️⃣ COMPONENTES COMUNES

### Header.tsx
**Archivo:** `src/components/Header.tsx`

| Línea | Elemento | Texto Original | Tipo |
|---|---|---|---|
| 72 | aria-label (mobile menu open) | `Abrir menú` | Accessibility label |
| 73 | aria-label (mobile menu close) | `Cerrar menú` | Accessibility label |
| 65 | aria-label (WhatsApp button) | `Abrir WhatsApp` | Tooltip/Accessibility |
| 66 | title (WhatsApp button) | `WhatsApp` | Título del botón |

---

### Navigation.tsx
**Archivo:** `src/components/Navigation.tsx` (líneas 9-11)

| Línea | ID | Label |
|---|---|---|
| 9 | `inicio` | `Inicio` |
| 10 | `proyectos` | `Proyectos` |
| 11 | `contacto` | `Contacto` |

**URLs:**
- `/#inicio` → Sección de inicio
- `/proyectos` → Página de proyectos
- `/contacto` → Página de contacto

---

### Hero.tsx
**Archivo:** `src/components/Hero.tsx` (líneas 25-120)

| Línea | Elemento | Texto Original | Tipo |
|---|---|---|---|
| 34 | H1 (Headline) | `Diseño Web` (gradient) + `Creo experiencias web con identidad, usabilidad y criterio estético` | Main heading |
| 39-41 | Subtitle | `Soy Sara y trabajo diseñando, desarrollando y optimizando sitios web con foco en experiencia de usuario.` | Supporting copy |
| 46-50 | Tech chips | `Web Manager`, `Diseño UX/UI`, `WordPress`, `Drupal`, `Figma` | Skills/tags |
| 54 | Primary CTA | `Escríbeme` | Button text |
| 58-65 | Secondary CTA | `Proyectos` | Button text |
| 67-76 | Tertiary CTA | `Sobre mí` | Link text |

---

### Services.tsx
**Archivo:** `src/components/Services.tsx` (líneas 40-80)

| Línea | Elemento | Texto Original | Tipo |
|---|---|---|---|
| 45 | H2 (Section title) | `Mis Servicios` | Section heading |
| 46 | Subtitle | `Ofrezco soluciones completas para transformar tu negocio digital` | Description |

**Services data (from portfolio.ts lines 4-23):**

| Servicio | Título | Descripción |
|---|---|---|
| design | `Diseño Web` | `Diseño moderno y responsive adaptado a tu marca y necesidades` |
| development | `Desarrollo` | `Desarrollo de plataformas digitales escalables y performantes` |
| optimization | `Optimización` | `Performance y SEO para máxima visibilidad en buscadores` |
| consulting | `Consultoría` | `Asesoramiento estratégico para transformación digital` |

---

### AboutMe.tsx
**Archivo:** `src/components/AboutMe.tsx` (líneas 25-130)

| Línea | Elemento | Texto Original | Tipo |
|---|---|---|---|
| 30 | H2 (Section ID) | `sobre-mi` | ID interno |
| 34 | H2 (Section title) | `Sobre mí` | Section heading |
| 68 | Bio paragraph 1 | `¡Hola! Soy Sara, diseñadora web y especialista en UX/UI con formación en Historia del Arte y un sólido recorrido en mediación cultural. Mi carrera comenzó en museos y espacios culturales (MNCARS, librerías como La Central y Fnac), donde aprendí a valorar la importancia. Con el tiempo llevé esa experiencia al entorno digital: primero como freelance y más tarde como Webmaster Manager en Grupo Planeta (EAE Business School), uniendo diseño visual, usabilidad y estrategia digital.` | Bio/About text |
| 72 | Bio paragraph 2 | `Hoy combino mi bagaje humanístico con mi experiencia técnica en diseño web (WordPress, Drupal, Prestashop, Figma, Framer), creando proyectos que no solo funcionan, sino que transmiten identidad, coherencia y sentido.` | Bio/About text |
| 113 | H2 (CTA section) | `¿Tienes un Proyecto?` | CTA heading |
| 117 | CTA subtitle | `Si tienes una idea o proyecto que necesita diseño, desarrollo o ambos, me encantaría hablar contigo.` | CTA description |
| 121 | CTA button | `Conectemos` | Button text |

**Links in AboutMe:**
| Línea | Link | Tipo |
|---|---|---|
| 50 | `linkedin.com/in/sara-menendez` | Social link |
| 51 | `/docs/CV_SARA_MENENDEZ_WEB_ES.pdf` | CV download |

---

### Contact.tsx
**Archivo:** `src/components/Contact.tsx` (líneas 25-120)

| Línea | Elemento | Texto Original | Tipo |
|---|---|---|---|
| 23 | ID | `contacto` | Link internal ID |
| 32 | H1 (Title) | `Contacto` | Page heading |
| 37 | Subtitle | `¿Necesitas mejorar la experiencia de tu web?` | Subtitle |
| 41-44 | Description | `Trabajo tanto en diagnóstico UX como en desarrollo de soluciones completas: arquitectura, diseño y código para que tu producto digital sea claro, útil y sostenible.` | Main description |
| 50 | aria-label | `Enviar email` | Accessibility label |
| 51 | title | `Email` | Tooltip |
| 66 | aria-label | `Llamar por teléfono` | Accessibility label |
| 67 | title | `Teléfono` | Tooltip |
| 83 | aria-label | `Abrir WhatsApp` | Accessibility label |
| 84 | title | `WhatsApp` | Tooltip |
| 101 | aria-label | `Abrir LinkedIn` | Accessibility label |
| 102 | title | `LinkedIn` | Tooltip |
| 121 | aria-label | `Abrir CV` | Accessibility label |
| 122 | title | `CV` | Tooltip |

**Contact card labels (in Contact component buttons):**
- `Email` - Link text
- `Teléfono` - Link text
- `WhatsApp` - Link text
- `LinkedIn` - Link text
- `CV` - Link text

---

### Footer.tsx
**Archivo:** `src/components/Footer.tsx` (líneas 20-75)

| Línea | Elemento | Texto Original | Tipo |
|---|---|---|---|
| 25 | Brand description | `Diseño web y desarrollo React con enfoque estratégico y criterio.` | Footer tagline |
| 36 | Navigation heading | `Navegación` | Section heading |
| 40-50 | Nav links | `Inicio`, `Proyectos`, `Contacto` | Link texts |
| 56 | Connect heading | `Conecta conmigo` | Section heading |
| 60-68 | Connect links | `LinkedIn`, `Email` (y más) | Link texts |

---

### InfoNote.tsx
**Archivo:** `src/components/InfoNote.tsx` (líneas 48-75)

| Línea | Elemento | Texto Original | Tipo |
|---|---|---|---|
| 32 | aria-label | `Información del portafolio` | Accessibility label |
| 48 | H3 (Heading) | `¡Bienvenid@s a mi portafolio!` | Popup heading |
| 49 | Text paragraph 1 | `Este espacio está en constante evolución. Como diseñadora, me gusta revisar, mejorar y actualizar mis proyectos para que reflejen lo que voy aprendiendo y cómo voy creciendo profesionalmente.` | Main message |
| 54 | Text paragraph 2 | `Si encuentras algún detalle por pulir, es muy probable que ya esté en mi lista de mejoras.` | Secondary message |
| 58 | Text paragraph 3 | `Mi objetivo es mostrar mi trabajo con transparencia y cuidado, tal y como lo vivo: un proceso continuo de creatividad, aprendizaje y evolución.` | Final message |

---

### WhatsAppButton.tsx
**Si existe:** Revisar para áreasLabel del botón WhatsApp

---

## 3️⃣ CONSTANTES Y DATOS

### constantos/contactInfo.ts
**Archivo:** `src/constants/contactInfo.ts`

| Línea | Campo | Valor Original | Tipo |
|---|---|---|---|
| 8 | title | `Email` | Contact option |
| 9 | ariaLabel | `Enviar email` | Accessibility |
| 14 | title | `Teléfono` | Contact option |
| 15 | ariaLabel | `Llamar por teléfono` | Accessibility |
| 20 | title | `WhatsApp` | Contact option |
| 21 | ariaLabel | `Chat por WhatsApp` | Accessibility |
| 26 | title | `LinkedIn` | Contact option |
| 27 | ariaLabel | `Perfil de LinkedIn` | Accessibility |
| 32 | title | `CV` | Contact option |
| 33 | ariaLabel | `Descargar CV` | Accessibility |

---

### data/portfolio.ts
**Archivo:** `src/data/portfolio.ts` (líneas 40-140)

**Services section (lines 25-40):**

| Campo | Valor |
|---|---|
| Service 1 - icon | `design` |
| Service 1 - title | `Diseño Web` |
| Service 1 - description | `Diseño moderno y responsive adaptado a tu marca y necesidades` |
| Service 2 - icon | `development` |
| Service 2 - title | `Desarrollo` |
| Service 2 - description | `Desarrollo de plataformas digitales escalables y performantes` |
| Service 3 - icon | `optimization` |
| Service 3 - title | `Optimización` |
| Service 3 - description | `Performance y SEO para máxima visibilidad en buscadores` |
| Service 4 - icon | `consulting` |
| Service 4 - title | `Consultoría` |
| Service 4 - description | `Asesoramiento estratégico para transformación digital` |

**Projects section (líneas 43-185):**

| Proyecto | Field | Valor Original |
|---|---|---|
| **Mi Portafolio** | title | `Mi Portafolio` |
| | meta | `2026` |
| | description | `Web construída en React + TypesCript + Github Copilot + Visual Code` |
| | status | `En construcción` |
| **EAE Business School** | title | `EAE Business School` |
| | meta | `(Grupo Planeta) Barcelona 2023 - 2025` |
| | description | `Web corporativa educativa en Drupal.\nDrupal + UX/UI + Accesibilidad\nCoordinación con marketing y SEO\nPrototipado en Figma y optimización de usabilidad` |
| | status | `Live` |
| **Alien CSI Bioblitz** | title | `Alien CSI Bioblitz` |
| | meta | `Barcelona 2022` |
| | description | `Plataforma de ciencia ciudadana para monitorizar especies invasoras en Europa.` |
| | status | `Completado` |
| **Ohmios Records** | title | `Ohmios Records Online` |
| | meta | `Asturias 2023-2026` |
| | description | `Tienda online de discos en vinilo de música electrónica.` |
| | status | `Completado` |
| **Trick Tales** | title | `Trick Tales App` |
| | meta | `Barcelona, ESDESIGN 2025` |
| | description | `Diseño UX / UI de una aplicación para mascotas.` |
| | status | `Completado` |
| **Menlo Artist** | title | `Menlo Artist` |
| | meta | `2025` |
| | description | `WordPress portfolio para artista especializada en retratos de mascotas.` |
| | status | `Live` |
| **ARBOLA** | title | `ARBOLA` |
| | meta | `2025` |
| | description | `Diseño web en WordPress para un estudio de arquitectura.` |
| | status | `Live` |
| **Mise en Scène** | title | `Mise en Scène` |
| | meta | `Barcelona 2021-2022` |
| | description | `Tienda online de moda de diseño de segunda mano.` |
| | status | `Live` |
| **Beatriz Galindo** | title | `Beatriz Galindo Psicóloga` |
| | meta | `2026` |
| | description | `Web portfolio para psicóloga especializada en trauma, apego y género.` |
| | status | `Live` |

**Contact items (líneas 187-210):**

| Línea | Campo | Valor |
|---|---|---|
| 192 | title | `WhatsApp` |
| 194 | href | `https://wa.me/34625977711` |
| 198 | title | `Email` |
| 200 | href | `mailto:sara.m.pumariega@gmail.com` |
| 204 | title | `Ubicación` |
| 207 | value | `España` |

---

## 4️⃣ CASE STUDIES ESPECÍFICOS

### EAE Business School
**Archivo:** `src/pages/case-studies/EAECaseStudy.tsx` (líneas 1-270)

| Línea | Elemento | Texto Original | Tipo |
|---|---|---|---|
| 35 | Category label | `WEB MANAGER` | Role label |
| 41 | H1 | `EAE Barcelona School Business` | Main title |
| 57 | Subtitle | `Web corporativa educativa.` | Description |
| 63 | Meta info | `Web Manager. Año 2023-2025.` | Context |
| 70-74 | Tech chips | `Drupal`, `UX Research`, `Web Manager`, `Optimización`, `A/B Testing` | Skills tags |
| 98 | Section H2 | `Información` | Section heading |
| 110 | Left column text | `En 2023, EAE Business School creó dos páginas web nuevas independientes, una para cada campus: Barcelona y Madrid. Ambas debían seguir el estilo de marca pero diferenciarse entre sí.` | Context paragraph |
| 113 | Left column text | `Sin embargo, diferentes personas del equipo de Marketing habían gestionado la web según necesidades específicas. Esto provocó falta de consistencia visual y de contenido, requiriendo un acercamiento urgente de unificación estilística.` | Problem paragraph |
| 129 | Section H2 | `Reto y Mi Rol` | Section heading |
| 133 | Subsection H3 | `Reto` | Subsection |
| 134 | Challenge text | `Actualizar y optimizar un site corporativo con miles de usuarios diarios, garantizando coherencia, accesibilidad y alineación con la estrategia digital. La web había sido lanzada pocos meses antes, pero presentaba problemas de consistencia visual, navegación poco clara y páginas de programas poco persuasivas.` | Challenge description |
| 137 | Challenge text | `Había que unificar estilos, optimizar la arquitectura y crear plantillas escalables para campañas y contenidos.` | Challenge detail |
| 141 | Subsection H3 | `Mi Rol` | Subsection |
| 143 | Role bullet 1 | `Unificación de estilos visuales en toda la web.` | Role detail |
| 147 | Role bullet 2 | `Rediseño de fichas de máster y áreas de estudio, con nuevas cabeceras, jerarquía de contenidos y formularios de captación visibles.` | Role detail |
| 151 | Role bullet 3 | `Optimización del menú y arquitectura de información, mejorando la navegabilidad.` | Role detail |
| 155 | Role bullet 4 | `Creación de nuevas landings adaptadas a campañas de marketing digital.` | Role detail |
| 159 | Role bullet 5 | `Implementación de pruebas A/B y mejoras de usabilidad.` | Role detail |
| 163 | Role bullet 6 | `Coordinación con equipos de marketing y SEO para garantizar coherencia y rendimiento.` | Role detail |
| 173 | Subsection H3 | `Antes y Después` | Subsection |
| 185 | Before label | `Antes` | Before/After label |
| 186 | After label | `Despues` | Before/After label |
| 197 | Section H2 | `Logros` | Section heading |
| 207 | Achievement 1 | `Consolidación de una identidad digital coherente y escalable.` | Achievement text |
| 211 | Achievement 2 | `Fichas de programas más visuales y persuasivas → mejor conversión de leads.` | Achievement text |
| 215 | Achievement 3 | `Navegación más intuitiva, reduciendo fricción del usuario.` | Achievement text |
| 219 | Achievement 4 | `Sistema de landings reutilizable para campañas de captación.` | Achievement text |
| 223 | Achievement 5 | `Base sólida para el crecimiento digital de la escuela.` | Achievement text |
| 244 | Placeholder text | `Capturas del proyecto próximamente` | Status message |
| 245 | Placeholder description | `Imágenes del antes/después y detalles de la implementación` | Status detail |
| 254 | CTA text | `¿Quieres ver el proyecto en vivo?` | CTA text |
| 257 | CTA button | `Ver online` | Button text |
| 261 | Pager label | `Volver a proyectos` | Navigation |
| 263 | Pager label | `ALIEN BIOBLITZ` | Navigation |

---

### ALIEN CSI Bioblitz
**Archivo:** `src/pages/case-studies/AlienCaseStudy.tsx` (líneas 1-180)

| Línea | Elemento | Texto Original | Tipo |
|---|---|---|---|
| 37 | Category label | `Frontend` | Role label |
| 43 | H1 | `ALIEN BIOBLITZ` | Main title |
| 52 | Subtitle | `Plataforma web para monitorizar y analizar especies invasoras con participación ciudadana.` | Description |
| 58 | Meta info | `Durante el evento, científicos, familias, estudiantes y profesorado recogen información en campo que se integra en el sistema.` | Context |
| 65-68 | Tech chips | `Frontend`, `Drupal`, `Leaflet`, `Mapbox` | Skills tags |
| 88 | Info heading | `Información` | Section heading |
| 90 | Info text | `La páginas web The Invasive Alien Invasive Species Bioblitz es un proyecto diseñado para monitorizar y analizar las especies invasoras.` | Description paragraph |
| 93 | Info text | `Durante el evento, científicos, familias, estudiantes, profesores, y otros miembros de la comunidad recogerán información de cada área…` | Description paragraph |
| 103 | Section H2 | `Problema` | Section heading |
| 104 | Problem text | `Hay un desconocimiento amplio sobre el impacto de las especies invasoras y cómo afectan al hábitat. El reto era traducir un tema científico complejo en una experiencia comprensible y participativa.` | Problem description |
| 115 | Section H2 | `Objetivo` | Section heading |
| 116 | Objective bullet 1 | `Difundir conocimiento sobre especies invasoras en Europa.` | Objective |
| 117 | Objective bullet 2 | `Atraer participación antes, durante y después del evento.` | Objective |
| 118 | Objective bullet 3 | `Hacer visible la evolución de observaciones por región.` | Objective |
| 132 | Section H2 | `Solución estratégica de diseño` | Section heading |
| 133 | subtitle | `El proyecto está dividido en tres fases:` | Intro text |
| 141 | Phase 1 H3 | `Pre-evento` | Phase heading |
| 142 | Phase 1 text | `Se definió una plataforma para promover el evento y educar sobre especies objetivo. El mapa muestra regiones participantes y enlaza a landings por país e idioma.` | Phase description |
| 157 | Phase 2 H3 | `Durante el evento` | Phase heading |
| 158 | Phase 2 text | `Se integraron observaciones mediante iNaturalist para validar capturas y alimentar el mapa en tiempo real con número de especies por región.` | Phase description |
| 173 | Phase 3 H3 | `Post-evento` | Phase heading |
| 174 | Phase 3 text | `Las observaciones son revisadas por científicos y publicadas con visualizaciones para comunicar resultados y sostener el aprendizaje.` | Phase description |
| 170 | Pager label | `Volver a proyectos` | Navigation |
| 172 | Pager label | `Ohmios Records Online` | Navigation |

---

### Mi Portafolio 2026
**Archivo:** `src/pages/case-studies/PortfolioCaseStudy.tsx` (líneas 1-660)

| Línea | Elemento | Texto Original | Tipo |
|---|---|---|---|
| 37 | Category label | `Design System & React` | Role label |
| 44 | H1 | `Mi Portafolio 2026` | Main title |
| 59 | Subtitle | `Migración desde WordPress y Framer a código nativo con React.` | Description |
| 65 | Meta info | `De herramientas visuales a arquitectura técnica completa. Un case study sobre cómo construir un portafolio que sea a la vez galería de trabajo y demostración de capacidad técnica en React.` | Context |
| 73-77 | Tech chips | `React`, `TypeScript`, `Tailwind CSS`, `Vite`, `Design System` | Skills tags |
| 108 | Section H2 | `Por Qué Reconstruir` | Section heading |
| 119 | Left text para 1 | `Mi portafolio anterior en WordPress + Framer era visualmente atractivo pero limitado técnicamente. Herramientas visuales que funcionan bien para prototipos rápidos, pero no reflejan habilidades en desarrollo real.` | Context paragraph |
| 122 | Left text para 2 | `Después de trabajar con clientes en proyectos reales—Drupal, WordPress, desarrollo custom con React—necesitaba un portafolio que no fuera solo galería bonita, sino demostración viva de arquitectura técnica, componentes reutilizables, y capacidad para construir sistemas escalables.` | Context paragraph |
| 158 | Section H2 | `El Desafío` | Section heading |
| 163 | Subsection H3 | `Limitaciones de Antes` | Subsection |
| 164 | Limitation bullet 1 | `Herramientas visuales (WordPress + Framer). Bonitas, pero sin verdadera arquitectura técnica.` | Limitation |
| 168 | Limitation bullet 2 | `No demostraba capacidad en React puro, TypeScript, o design systems escalables.` | Limitation |
| 172 | Limitation bullet 3 | `Limitada capacidad de customización. Lo que ves es lo que hay.` | Limitation |
| 176 | Limitation bullet 4 | `Imposible documentar arquitectura, decisiones técnicas, o sistema de componentes.` | Limitation |
| 182 | Subsection H3 | `Mi Rol` | Subsection |
| 183 | Role text | `Designer, Developer, Arquitecta del sistema. Responsable de definir: stack tecnológico, arquitectura de componentes, design tokens, sistema de tipografía y color, patrón de layout, workflow de construcción, y documentación.` | Role description |
| 190 | Subsection H3 | `Objetivos` | Subsection |
| 191 | Objective 1 | `Galería profesional de proyectos con capacidad de narrativa única por proyecto.` | Objective |
| 195 | Objective 2 | `Design system documentado: colores, tipografía, componentes, espaciado.` | Objective |
| 199 | Objective 3 | `Demostración técnica a través de arquitectura visible, código limpio, patterns reutilizables.` | Objective |
| 203 | Objective 4 | `Case studies documentados que expliquen por qué, no solo qué.` | Objective |
| 213 | Section H2 | `Tech Stack & Decisiones` | Section heading |
| 220 | Tech H3 | `React 18 + TypeScript` | Tech title |
| 221 | Tech description | `Componentes reutilizables, tipado fuerte, ecosistema robusto. React permite construir interfaces complejas manteniendo código limpio y mantenible.` | Tech explanation |
| 224 | Tech reason | `Por qué: Flexibilidad máxima, componentes reutilizables, y demostración clara de capacidad técnica.` | Tech rationale |
| 230 | Tech H3 | `Tailwind CSS` | Tech title |
| 231 | Tech description | `Utility-first CSS que mantiene diseño y código sincronizados. Facilita iteración rápida y consistencia visual sin overhead de selectors CSS.` | Tech explanation |
| 234 | Tech reason | `Por qué: Velocidad, consistencia, y la trazabilidad de estilos directamente en markup.` | Tech rationale |
| 240 | Tech H3 | `Vite` | Tech title |
| 241 | Tech description | `Build tool moderno. Hot module replacement instantáneo, bundling optimizado, velocidad de desarrollo incomparable a webpack.` | Tech explanation |
| 244 | Tech reason | `Por qué: Desarrollo rápido, builds eficientes, y setup mínimo necesario.` | Tech rationale |
| 254 | Section H2 | `Arquitectura de Componentes` | Section heading |
| 256 | Subsection H3 | `Estructura de Carpetas` | Subsection |
| 262 | Code part | `src/` | Code structure |
| 263 | Code structure | Folder structure con `components/`, `pages/`, `data/`, `constants/`, `utils/` | Code |
| 279 | Subsection H3 | `Patrones Clave` | Subsection |
| 281 | Pattern 1 title | `Componentes Modulares` | Pattern title |
| 282 | Pattern 1 description | `Hero y caso de estudio: reutilizables pero adaptables.` | Pattern description |
| 285 | Pattern 2 title | `Wrappers por Sección` | Pattern title |
| 286 | Pattern 2 description | `CaseStudySection: componente base para todas las secciones.` | Pattern description |
| 289 | Pattern 3 title | `Utilidades Centralizadas` | Pattern title |
| 290 | Pattern 3 description | `getChipClasses(), cn(): lógica de estilos en un solo lugar.` | Pattern description |
| 293 | Pattern 4 title | `Orquestación de Rutas` | Pattern title |
| 294 | Pattern 4 description | `CaseStudyPage: enrutador inteligente según slug.` | Pattern description |
| 363 | Typography H3 | `Headings` | Typography category |
| 364 | Typography description | `400 (normal). Uso: títulos, secciones principales, citas destacadas.` | Typography usage |
| 374 | Typography H3 | `Body/Text` | Typography category |
| 375 | Typography description | `400–600. Uso: párrafos, labels, navegación, formularios.` | Typography usage |
| 377 | Typography H3 | `Subtítulos / Italic` | Typography category |
| 380 | Typography subtitle example | `Subtítulo en cursiva — énfasis y tono editorial` | Typography example |
| 383 | Typography description | `400 italic. Uso: subtítulos, destacados y frases de introducción.` | Typography usage |
| 540 | Architecture text | `Estructura base reutilizada en todas las nuevas paginas de case study: label de rol, titulo, subtitulo y descripcion con layout consistente.` | Architecture explanation |
| 655 | Pager label | `Volver a proyectos` | Navigation |
| 657 | Pager label | `EAE Business School` | Navigation |

---

### Ohmios Records Online
**Archivo:** `src/pages/case-studies/OhmiosRecordsCaseStudy.tsx` (líneas 1-130)

| Línea | Elemento | Texto Original | Tipo |
|---|---|---|---|
| 33 | Category label | `Diseño Web` | Role label |
| 39 | H1 | `Ohmios Records Online` | Main title |
| 52 | Subtitle | `Tienda online para sello de discos en vinilo.` | Description |
| 58 | Meta info | `Un proyecto que une música independiente y diseño digital. Desde 2022 desarrollo y mantenimiento de la plataforma e-commerce para vender vinilos y lanzamientos digitales.` | Context |
| 65-68 | Tech chips | `Diseño Web`, `WordPress`, `WooCommerce`, `Tienda online` | Skills tags |
| 85 | Challenge H3 | `Reto` | Section heading |
| 86 | Challenge text | `Ohmios necesitaba una tienda online funcional y rápida para vender vinilos y lanzamientos digitales, manteniendo la identidad cultural de una tienda física con años de trayectoria.` | Challenge description |
| 90 | Objectives H3 | `Objetivo` | Section heading |
| 91 | Objective bullet 1 | `Mejorar experiencia de compra para seguidores del sello.` | Objective |
| 92 | Objective bullet 2 | `Dar autonomía al cliente para gestión de catálogo.` | Objective |
| 93 | Objective bullet 3 | `Conservar la personalidad visual del universo musical.` | Objective |
| 104 | Role H3 | `Mi rol` | Section heading |
| 105 | Role intro | `Desarrollo completo en WordPress + WooCommerce y diseño UX/UI minimalista orientado a conversión.` | Role summary |
| 108 | Role bullet 1 | `Arquitectura de tienda y configuración WooCommerce.` | Role detail |
| 109 | Role bullet 2 | `Optimización mobile para sesiones de compra rápidas.` | Role detail |
| 110 | Role bullet 3 | `Mantenimiento continuo de catálogo y estructura.` | Role detail |
| 117 | Solution H3 | `Solución` | Section heading |
| 118 | Solution text | `Tienda clara y ligera, con estructura de catalogo centrada en descubrimiento y compra.` | Solution description |
| 122 | Result H3 | `Resultado` | Section heading |
| 123 | Result text | `Mejor experiencia de compra y mayor coherencia de marca para nuevos lanzamientos.` | Result description |
| 128 | Highlights label 1 | `Valor:` | Highlight label |
| 128 | Highlights text 1 | `equilibrio entre funcionalidad y cultura de marca.` | Highlight value |
| 129 | Highlights label 2 | `Tecnología:` | Highlight label |
| 129 | Highlights text 2 | `WordPress + WooCommerce optimizado.` | Highlight technology |
| 130 | Highlights label 3 | `Resultado:` | Highlight label |
| 130 | Highlights text 3 | `e-commerce usable y coherente visualmente.` | Highlight result |
| 123 | Pager label | `Volver a proyectos` | Navigation |
| 125 | Pager label | `Trick Tales` | Navigation |

---

### Trick Tales App
**Archivo:** `src/pages/case-studies/TrickTalesCaseStudy.tsx` (líneas 1-250)

| Línea | Elemento | Texto Original | Tipo |
|---|---|---|---|
| 145 | Category label | `UX/UI DESIGN` | Role label |
| 151 | H1 | `Trick Tales` | Main title |
| 160 | Subtitle | `Case study UX/UI app.` | Description |
| 166 | Meta info | `Proyecto colaborativo orientado a acompañar a dueños primerizos desde onboarding hasta seguimiento diario, con foco en experiencia móvil, arquitectura de información y sistema visual.` | Context |
| 173-176 | Tech chips | `Figma`, `UX Research`, `Arquitectura de información`, `UI System` | Skills tags |
| 195 | ImageGroup title | `Sistema visual` | Section title |
| 196 | ImageGroup note | `Tokens, componentes y piezas UI del proyecto.` | Section note |
| 206 | ImageGroup title | `Arquitectura y wireframes` | Section title |
| 207 | ImageGroup note | `Estructura de información y wireframes del flujo.` | Section note |
| 223 | ImageGroup title | `Onboarding` | Section title |
| 253 | ImageGroup title | `Entrenamiento y salud` | Section title |
| 273 | ImageGroup title | `Gestión de mascotas` | Section title |
| 293 | ImageGroup title | `Citas y medicamentos` | Section title |
| 316 | Challenge H3 | `Reto` | Section heading |
| 317 | Challenge text | `Unificar salud, citas, vacunas y entrenamiento en una experiencia clara y constante.` | Challenge description |
| 321 | Objectives H3 | `Objetivo` | Section heading |
| 322 | Objectives text | `Priorizar pantallas finales sin perder claridad de flujo ni consistencia del sistema visual.` | Objective description |
| 326 | Approach H3 | `Enfoque` | Section heading |
| 327 | Approach text | `Organizar por bloques de uso y componentes reutilizables para escalar funcionalidades.` | Approach description |
| 335 | Process section H2 | `Sistema visual, arquitectura y wireframes` | Section heading |
| 336 | Process note | `Se agrupa el material de estilo y proceso en scroll horizontal para mantener lectura continua y comparación rápida entre piezas.` | Section note |
| 232 | Pager label | `Volver a proyectos` | Navigation |
| 234 | Pager label | `ALIEN BIOBLITZ` | Navigation |

---

### Casos Adicionales (sin contenido extenso)
**Archivos:**
- `MiseEnSceneCaseStudy.tsx` - Línea 37: `Contenido Próximamente`
- `OhmiosCaseStudy.tsx` - Línea 37: `Contenido Próximamente`
- `Portfolio2025CaseStudy.tsx` - (revisar si existe)

---

## 5️⃣ ARIA-LABELS Y ACCESIBILIDAD

| Componente | Línea | aria-label | Tipo |
|---|---|---|---|
| Header | 72 | `Abrir menú` | Mobile menu open |
| Header | 73 | `Cerrar menú` | Mobile menu close |
| Header | 65 | `Abrir WhatsApp` | Social link |
| Logo | 18 | `Ir al inicio` | Navigation link |
| InfoNote | 32 | `Información del portafolio` | Info popup trigger |
| Contact icons | 50 | `Enviar email` | Email action |
| Contact icons | 61 | `Llamar por teléfono` | Phone action |
| Contact icons | 78 | `Abrir WhatsApp` | WhatsApp action |
| Contact icons | 96 | `Abrir LinkedIn` | LinkedIn link |
| Contact icons | 116 | `Abrir CV` | CV download |
| ContactInfo constant | Multiple | `Chat por WhatsApp`, `Perfil de LinkedIn`, `Descargar CV` | Various |

---

## 6️⃣ TEXTO EN FORMULARIOS Y USER INPUT

### Placeholders y Labels
No se han encontrado placeholders de formularios en el código actual. El componente Contact.tsx existe pero no tiene formulario interactivo todavía (solo widgets de contacto).

**Si se agrega formulario en el futuro, revisar:**
- `contactInitialState` en `data/portfolio.ts` (línea 212)
  - `name: ''`
  - `email: ''`
  - `subject: ''`
  - `message: ''`

---

## 7️⃣ TEXTOS EN IMAGES Y ALT TEXT

### Hero Section Images
- N/A (solo decorative gradients)

### Project Card Images
- Cada proyecto tiene `alt={title}` dinámico

### Case Study Images (verificar alt texts)
- EAE: `EAE Business School Cover`, `EAE antes`, `EAE despues`
- Alien: `Alien CSI cover`, `ALIEN 1`, `ALIEN mapa interactivo`, `ALIEN pre evento`, `ALIEN durante evento`, `ALIEN post evento`
- Portfolio: `Portfolio 2026 Cover`
- Ohmios: `Ohmios Records Online - Cover`
- Trick Tales: `Trick Tales cover` + múltiples imágenes por sección

---

## 8️⃣ URLS Y RUTAS (NO SE NECESITA TRADUCCIÓN)

| Ruta | Destino | Descripción |
|---|---|---|
| `/` | HomePage | Página principal |
| `/proyectos` | ProjectsPage | Galería de proyectos |
| `/contacto` | ContactPage | Página de contacto |
| `/proyectos/:slug` | CaseStudyPage | Case study dinámico |
| Slugs específicos: | | |
| `eae-business-school` | EAECaseStudy | EAE case study |
| `alien-csi-bioblitz` | AlienCaseStudy | Alien case study |
| `mi-portafolio-2026` | PortfolioCaseStudy | Portfolio case study |
| `trick-tales-app` | TrickTalesCaseStudy | Trick Tales case study |
| `ohmios-records` | OhmiosRecordsCaseStudy | Ohmios case study |

---

## 📊 RESUMEN CUANTITATIVO

| Categoría | Cantidad |
|---|---|
| Títulos principales | 15 |
| Subtítulos | 12 |
| Descripciones cortas | 25 |
| Párrafos de contenido | 20 |
| Botones/CTAs | 18 |
| Labels de form | 5 |
| aria-labels | 11 |
| Tooltips | 8 |
| Tags/Skills | 20+ |
| Links de navegación | 8 |
| **TOTAL ESTIMADO** | **~140+ items** |

---

## ✅ NOTAS PARA TRADUCCIÓN

### Consideraciones importantes:

1. **Mantenimiento de formatos:**
   - Mantener formato de títulos (MAYÚSCULAS para etiquetas de rol: `WEB MANAGER`, `Frontend`, `UX/UI DESIGN`)
   - Bullets y listas numeradas
   - Énfasis en negritas y cursivas

2. **Textos con múltiples líneas:**
   - Algunos párrafos tienen `\n` para saltos de línea - preservar estructura
   - Ej: `description: 'Web corporativa educativa en Drupal.\nDrupal + UX/UI + Accesibilidad\nCoordinación con marketing y SEO\nPrototipado en Figma y optimización de usabilidad'`

3. **Nombres y referencias:**
   - Mantener nombres de personas: Sara, Christina Day (del análisis histórico), etc.
   - Mantener nombres de programas: Master, programas, etc.
   - Mantener nombres de herramientas: Drupal, WordPress, Figma, React, TypeScript, etc.

4. **Enlaces y URLs:**
   - No traducir URLs ni slugs (`/proyectos`, `/contacto`, etc.)
   - No traducir dominios ni correos electrónicos
   - WhatsApp link: `https://wa.me/34625977711` (mantener teléfono)

5. **Estructura de datos:**
   - Los valores están en `src/data/portfolio.ts` principalmente
   - Los labels están en `src/constants/contactInfo.ts`
   - Los textos de UI están en componentes TSX

6. **Estilos y clases:**
   - Los nombres de clases Tailwind NO se traducen
   - Los IDs de elementos NO se traducen
   - Solo los textos visibles al usuario

---

## 🔄 PRIORIDAD DE TRADUCCIÓN (SUGERIDA)

### Fase 1 (Alta prioridad - textos más vistos):
- ✅ Navigation labels
- ✅ Hero headlines y CTA buttons
- ✅ Main page headings
- ✅ Services descriptions
- ✅ Contact labels

### Fase 2 (Media prioridad - case studies):
- ✅ EAE Business School
- ✅ Alien Bioblitz
- ✅ Mi Portafolio 2026
- ✅ Ohmios Records
- ✅ Trick Tales

### Fase 3 (Baja prioridad - accesibilidad):
- ✅ aria-labels
- ✅ Alt texts
- ✅ Tooltips

---

**Documento generado:** 2 de abril de 2026  
**Total de líneas mapeadas:** 290+ ubicaciones exactas  
**Estado:** Listo para traducción exhaustiva

