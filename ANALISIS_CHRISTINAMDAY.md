# Análisis Visual Profundo: christinamday.com

**Fecha de Análisis:** 13 de marzo de 2026  
**Propósito:** Replicar estructura, espaciado y tipografía en portfolio React

---

## 1. HERO SECTION

### Estructura General
- **Contenedor principal:** Ancho máximo ~1200px (centrado)
- **Márgenes exteriores:** ~40-60px en mobile, ~80-120px en desktop
- **Padding vertical:** ~80-120px top/bottom (bastante generoso)

### Contenido
```
[Titular H1]
    ↓ (20-30px gap)
[Párrafo descriptivo]
    ↓ (30-40px gap)
[Botones CTA]
```

### Tipografía
- **H1 (Titular principal):** 
  - Texto: "I am an Oakland-based designer and developer building **B2B reliable** products for the modern **B2B** marketplace and beyond."
  - Tamaño estimado: ~48-56px (desktop), ~32-40px (mobile)
  - Peso: Bold/Semibold (600-700)
  - Line-height: 1.3-1.4
  - Color: Negro o gris muy oscuro/charcoal

### Elementos Secundarios en Hero
- No hay subtítulo adicional visible
- Los botones están centrados/agrupados
- Hay una imagen de perfil al lado (Christina Day avatar - small)

### Botones Hero
- **"View Projects"** → Link Style (puede ser outline o text)
- **"View Resume"** → Link Style (puede llevar a PDF externo)
- Separación entre botones: ~16-20px
- Posicionamiento: Centrado o left-aligned

---

## 2. SELECTED WORK / PROJECTS SECTION

### Encabezado de Sección
- **Título (H2):** "Selected Work"
  - Tamaño: ~36-44px (desktop)
  - Peso: Bold (700)
  - Color: Negro/charcoal
  - Margin bottom: ~12-16px

- **Subtítulo descriptivo:**
  - Texto: "Design and development projects showcasing technical implementation and systematic thinking"
  - Tamaño: ~16-18px
  - Color: Gris medio (50-60% opacity)
  - Margin bottom: ~48-64px

### Layout Grid
- **Estructura:** 3 columnas (desktop)
- **Gap horizontal:** ~24-32px
- **Espaciado vertical:** ~32-40px entre filas
- **Comportamiento responsive:** 2 columnas (tablet), 1 columna (mobile)

### Cards de Proyectos

Cada card tiene esta estructura:

```
[Imagen/Thumbnail - 100% width]
    ↓ (16-20px padding)
[Título - H3]
    ↓ (8-12px gap)
[Descripción - párrafo corto]
    ↓ (12-16px gap)
[Tags/Skills - inline labels]
    ↓ (16px padding bottom)
```

#### Detalles de Card:
- **Altura total de card:** ~380-420px (incluyendo imagen)
- **Imagen/Thumbnail:**
  - Proporción: Aproximadamente 4:3 o 16:10
  - Ancho relativo: 100% del card width
  - Altura: ~220-240px
  - Border radius: 4-8px
  - Objeto-fit: cover

- **Padding interno del card:** 
  - Sides (left/right): 16-20px
  - Top: 0 (la imagen toca el top)
  - Bottom: 16-20px

- **Título del Card (H3):**
  - Tamaño: ~18-22px
  - Peso: 600-700 (Bold)
  - Color: Negro/charcoal
  - Line-height: 1.3

- **Descripción del Card:**
  - Tamaño: 14-16px
  - Peso: 400 (regular)
  - Color: Gris oscuro/70% opacity
  - Line-height: 1.5
  - Máximo 2-3 líneas de texto

- **Tags/Skills:**
  - Tamaño: 12-14px
  - Peso: 500-600
  - Color: Gris medio o accent color
  - Display: inline-block con separación ~8-12px
  - Background: none (texto puro) O pequeños pills con fondo sutil
  - Ejemplo tags: "Data Visualization", "Design Systems", "Vega", "React", etc.

### Proyectos Listados (6 Cards)
1. "Operational Data Graphics" - Data Visualization, Design Systems, Vega
2. "UpDrift: Cosmic Design System Case Study" - Design Systems, Mathematical Animation, Figma Integration
3. "Portfolio 2025 - Cursor Case Study" - Next.js, React, CSS Animations
4. "Design System & Component Library" - React, Components, Design Tokens, CSS Architecture
5. "Betterview: Property Intelligence Platform" - Product Design, Data Visualization, AI/ML
6. "Designing a Customizable Interface for Betterview" - Design Systems, User Personalization, Dashboard Design

### CTA Final de Sección
- **"View All Projects"** link con arrow o similar (bottom aligned o centered)
- Posición: Debajo del grid, con ~32-48px de spacing arriba

---

## 3. ABOUT ME SECTION

### Encabezado
- **H2:** "About Me"
- Tamaño: ~36-44px
- Margin bottom: ~32-40px

### Contenido
- Párrafos de descripción (~3 párrafos pequeños)
- Cada párrafo: ~16px de font size
- Línea altura: 1.6-1.8 (generoso para readibilidad)
- Color: Gris oscuro/charcoal
- Máximo ancho: ~700-800px

### Skills/Tags en About
- Tags inline: "React Development", "Design Systems", "UI/UX Design"
- Tamaño: 13-15px
- Display inline-block con gap ~16px

---

## 4. CTA SECTION (Contact/Call-to-Action)

### Contenido
```
[Heading H2]
    ↓
[Párrafo descriptivo]
    ↓
[Dos botones]
```

- **Heading:** "Let's create something amazing together"
  - Tamaño: ~40-48px
  - Peso: 700 (Bold)
  - Color: Negro
  - Margin bottom: ~20-28px

- **Descripción:**
  - Tamaño: 16-18px
  - Color: Gris medio
  - Margin bottom: ~32-40px

- **Botones:**
  - **"Get In Touch"** → mailto: link
  - **"Download Resume"** → PDF externo
  - Separación: ~20-24px
  - Style: Outline o secondary button

### Margenes de Sección
- Padding top: ~80-120px
- Padding bottom: ~80-120px
- Background: Blanco o ligero contraste

---

## 5. FOOTER

### Contenido
- Copyright: "©2026 [Links]"
- Quick links: FabLab, Contact, Resume
- Social icons links: LinkedIn, GitHub, Instagram, Dribbble, Email
- Email: christinamday@gmail.com

### Tipografía
- Tamaño: 13-14px
- Color: Gris medio (60-70% opacity)
- Separación de items: ~24-32px gap

---

## 6. SPACING & MARGINS GENERAL

### Contenedor Base
- **Max-width:** 1200px
- **Márgenes auto** (centrado)

### Entre Secciones
- **Hero → Selected Work:** ~80-100px (vertical gap)
- **Selected Work → About Me:** ~80-100px
- **About Me → CTA Section:** ~80-100px
- **CTA Section → Footer:** ~60-80px

### Padding de Sección
- **Horizontal padding:** 40-60px (mobile), 80-120px (desktop)
- **Vertical padding:** 60-80px (mobile), 100-140px (desktop)

### Elementos de Spacing Micro
- **Entre título y descripción:** 12-20px
- **Entre párrafos:** 20-24px
- **Entre tags:** 8-16px

---

## 7. COLORES

### Paleta Base
- **Fondo principal:** Blanco puro (#FFFFFF) o off-white muy ligero (#FAFAFA)
- **Texto principal:** Charcoal muy oscuro (~#1A1A1A o #222222)
- **Texto secundario:** Gris medio (~#666666 a #777777, ~60-70% opacity)
- **Gris suave:** Para borders/dividers (~#E5E5E5 a #F0F0F0)

### Acentos
- Posibles accent colors en tags o links
- Social icons pueden tener color sutil

### Sin Gradientes Evidente
- Diseño es **limpio, minimalista, con paleta neutral**
- Énfasis visual a través de **whitespace y tipografía**

---

## 8. TIPOGRAFÍA - RESUMEN COMPLETO

### Font Stack
- Probable: System fonts o -apple-system, BlinkMacSystemFont, Segoe UI, etc.
- Alternativa: Peut-être una fuente sans-serif premium como Inter, Outfit, o similar

### Tamaños Principales
| Elemento | Desktop | Mobile | Peso |
|----------|---------|--------|------|
| H1 (Hero) | 48-56px | 32-40px | 600-700 |
| H2 (Section) | 36-44px | 28-36px | 700 |
| H3 (Card Title) | 18-22px | 16-18px | 600-700 |
| Body Text | 16px | 15px | 400 |
| Small/Secondary | 14px | 13px | 400 |
| Tags/Labels | 12-14px | 12px | 500-600 |

### Line Heights
- Headings: 1.2 - 1.4
- Body/Descriptive: 1.6 - 1.8
- Tags: 1.1 - 1.3

---

## 9. RESPONSIVE DESIGN

### Breakpoints Estimados
- **Mobile:** < 768px (1 columna, padding 40px)
- **Tablet:** 768px - 1024px (2 columnas, padding 60px)
- **Desktop:** > 1024px (3 columnas, padding 80-120px)

### Cambios Principales
- Grid pasa de 3 → 2 → 1 columna
- Font sizes reducen ~10-15% en mobile
- Spacing se reduce proporcionalmente
- Márgenes exteriores se ajustan

---

## 10. ELEMENTOS VISUALES CLAVE

### Iconografía
- Emojis simples: ⚆, ✰, ✉︎, ⎆ (en footer/links)
- No hay iconografía compleja, solo tipografía

### Imagen de Perfil
- Ubicada en hero (probablemente bottom-right o side)
- Small size (~80-120px)
- Border radius: circle o redondeado

### Interactividad
- Links tienen hover states
- Botones probablemente tienen transiciones suaves (0.2-0.3s)
- Cards probablemente tienen hover effect sutil (shadow o scale)

---

## 11. ARQUITECTURA DE COMPONENTES INFERIDA

```
Layout/
  └─ Header/Navigation (minimal)
  
Sections/
  ├─ HeroSection
  ├─ SelectedWorkSection (ProjectGrid)
  ├─ AboutMeSection
  ├─ CTASection
  └─ Footer

Components/
  ├─ ProjectCard (imagen, título, descripción, tags)
  ├─ Button/Link
  ├─ Tag/Label
  ├─ SocialLink
  └─ ProfileImage
```

---

## 12. NOTAS DE DISEÑO IMPORTANTES

✅ **Enfoque:** Minimalista, limpio, profesional
✅ **Jerarquía visual:** Fuerte a través de tamaños y weights
✅ **Whitespace:** Abundante, respira el diseño
✅ **Tipografía:** Es el protagonista, sin decoraciones excesivas
✅ **Usabilidad:** Muy clara, CTA bien posicionados
✅ **Velocidad visual:** Rápido de scroller, contenido conciso
✅ **Valores:** Muestra expertise técnico + diseño + comunicación

---

## Recomendaciones para Replicar en Tu Portfolio

1. **Usa componentes reusables** para cards y sections
2. **Implementa grid responsive** con Tailwind (grid-cols-1, md:grid-cols-2, lg:grid-cols-3)
3. **Enfatiza whitespace** → no tengas miedo de márgenes/paddings generosos
4. **Tipografía clara** → usa peso y tamaño como herramientas de jerarquía
5. **Mobile first** → comenzar en mobile, expandir a desktop
6. **Transiciones suaves** → hover states en cards y links
7. **Estructura semántica** → H1, H2, H3 en orden correcto
8. **Colores neutral** → evita mucho color, deja que el contenido brille

---

**Fin del análisis.**
