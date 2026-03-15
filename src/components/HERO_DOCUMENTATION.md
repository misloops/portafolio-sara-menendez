# Hero Component Documentation

## Overview
El componente **Hero** es la sección principal de aterrizaje en la página de inicio. Presenta el nombre de la marca, propuesta de valor, descripción de servicios, skills/tecnologías y botones de acción. Utiliza la estructura de diseño de christinamday.com adaptada a Sara Menéndez.

---

## Visual Structure

```
┌─────────────────────────────────────────────────────┐
│ HERO SECTION                                        │
├─────────────────────────────────────────────────────┤
│                                                     │
│  [Gap: pt-32 lg:pt-40 vertical]                    │
│                                                     │
│  ┌─ Category Label ──────────────────────────────┐  │
│  │ text-sm, uppercase, tracking-widest, dark/60 │  │
│  │ "Diseño Web" / "WEB MANAGER" / etc           │  │
│  └───────────────────────────────────────────────┘  │
│  [Gap: lg:gap-8]                                   │
│                                                     │
│  ┌─ Main Headline (serif) ───────────────────────┐  │
│  │ text-5xl md:text-6xl lg:text-7xl             │  │
│  │ font-serif, font-normal                       │  │
│  │ leading-[1.02]                                │  │
│  │                                               │  │
│  │ "Diseño Web"                                  │  │
│  │ Estructura, estrategia y desarrollo con      │  │
│  │ criterio                                      │  │
│  └───────────────────────────────────────────────┘  │
│  [Gap: lg:gap-6]                                   │
│                                                     │
│  ┌─ Subtitle (italic, highlighting) ────────────┐  │
│  │ class: heading-subtitle                       │  │
│  │ 32px, italic, Gilroy font                     │  │
│  │ "Hola, soy Sara. Diseño interfaces..."       │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  ┌─ Body Description ────────────────────────────┐  │
│  │ text-lg md:text-xl                            │  │
│  │ leading-[1.6]                                 │  │
│  │ text-dark/75                                  │  │
│  │ max-w-3xl                                     │  │
│  │                                               │  │
│  │ "Trabajo con marcas y negocios que necesitan  │  │
│  │ claridad visual, arquitectura sólida..."      │  │
│  └───────────────────────────────────────────────┘  │
│  [Gap: pt-2 lg:pt-4]                               │
│                                                     │
│  ┌─ Skills Chips ────────────────────────────────┐  │
│  │ flex flex-wrap gap-2 lg:gap-3                 │  │
│  │ ┌──────────┐ ┌──────────┐ ┌──────────┐       │  │
│  │ │ Drupal   │ │ UX/UI    │ │ React    │ ...  │  │
│  │ └──────────┘ └──────────┘ └──────────┘       │  │
│  │                                               │  │
│  │ Styling: getChipClasses() utility             │  │
│  │ - bg-chip (#eef1ee)                           │  │
│  │ - border-chip (#d5dbd4)                       │  │
│  │ - rounded, padding, text-sm                   │  │
│  └───────────────────────────────────────────────┘  │
│  [Gap: pt-2 lg:pt-4]                               │
│                                                     │
│  ┌─ Action Buttons ──────────────────────────────┐  │
│  │ flex flex-col sm:flex-row gap-2 lg:gap-10    │  │
│  │                                               │  │
│  │ ├─ Primary: "Escríbeme" (white bg)           │  │
│  │ │  px-4 py-2 lg:px-6 lg:py-3                 │  │
│  │ │  rounded-xl, border-2                      │  │
│  │ │  hover: bg-[#9C7C9C] text-white            │  │
│  │ │                                             │  │
│  │ └─ Secondary: "Ver proyectos" (transparent)  │  │
│  │    px-6 py-2 lg:px-8 lg:py-3                 │  │
│  │    font-semibold, text-dark                  │  │
│  │    hover: underline/opacity change           │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  [Gap: pb-16 lg:pb-24]                            │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Component Structure (Code)

### Location
`src/components/Hero.tsx`

### Props
```typescript
interface HeroProps {
  onActionClick?: (action: string) => void;
}
```

**onActionClick**: Callback function triggered when action buttons are clicked.

### Sections

#### 1. **Container Section**
```jsx
<section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-4 lg:px-6 bg-transparent overflow-hidden">
```
- **Padding**: `pt-32` mobile, `pt-40` desktop
- **Background**: `bg-transparent` (inherits parent gradient)
- **Responsive**: Adjusts padding for mobile/desktop

#### 2. **Inner Wrapper**
```jsx
<div className="relative z-10 max-w-6xl mx-auto">
```
- **Z-index**: Ensures content stays above any potential overlays
- **Max-width**: `max-w-6xl` for content constraint
- **Center alignment**: `mx-auto`

#### 3. **Category Label**
```jsx
<p className="text-sm font-semibold uppercase tracking-widest text-dark/60">
```
- **Font size**: `text-sm` (14px)
- **Weight**: Semibold (600)
- **Transform**: Uppercase
- **Letter spacing**: `tracking-widest`
- **Color**: Dark with 60% opacity

**Examples**:
- Home: "Diseño Web"
- Case Studies: "WEB MANAGER", "UX Research", etc.

#### 4. **Main Headline**
```jsx
<h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.02] text-dark">
```
- **Font**: `font-serif` (DM Serif Display)
- **Size**: 
  - Mobile: `text-5xl` (48px)
  - Tablet: `text-6xl` (60px)
  - Desktop: `text-7xl` (84px)
- **Weight**: `font-normal` (not bold)
- **Line height**: `leading-[1.02]` (tight)

**Examples**:
- "Diseño Web"
- "EAE Barcelona School Business"

#### 5. **Italic Subtitle**
```jsx
<p className="heading-subtitle">
```
- **CSS Class**: `heading-subtitle` (custom from `index.css`)
- **Font size**: 32px
- **Font style**: Italic
- **Font**: Gilroy

**Examples**:
- "Hola, soy Sara. Diseño interfaces..."
- "Web corporativa educativa."

#### 6. **Body Description**
```jsx
<p className="text-lg md:text-xl leading-[1.6] text-dark/75 max-w-3xl">
```
- **Font size**: `text-lg` (18px) → `text-xl` (20px) desktop
- **Line height**: `leading-[1.6]` (generous spacing)
- **Color**: Dark with 75% opacity
- **Max width**: `max-w-3xl` (48rem)

**Purpose**: Supporting copy explaining services/value proposition.

#### 7. **Skills Chips**
```jsx
<div className="flex flex-wrap gap-2 lg:gap-3 pt-2 lg:pt-4">
  {['Drupal', 'Diseño UX/UI', 'Web Manager', 'WordPress', 'Figma', 'React'].map((skill) => (
    <span className={getChipClasses()}>
      {skill}
    </span>
  ))}
</div>
```
- **Layout**: Flexbox with wrap
- **Gap**: `gap-2` mobile, `gap-3` desktop
- **Styling**: Uses `getChipClasses()` utility

**Chip Styling** (from `utils/classNames.ts`):
```css
bg-[#eef1ee]           /* chip background */
border border-[#d5dbd4] /* soft border */
rounded-md              /* rounded corners */
px-3 py-1.5             /* internal padding */
text-sm                 /* small font */
text-dark/70            /* dark text, 70% opacity */
font-medium             /* medium weight */
```

#### 8. **Action Buttons**
```jsx
<div className="flex flex-col sm:flex-row gap-2 lg:gap-10 pt-2 lg:pt-4 items-center">
```

**Primary Button** ("Escríbeme"):
```jsx
<a href="mailto:sara.m.pumariega@gmail.com" className="...">
  Escríbeme
</a>
```
- **Background**: White (`bg-white`)
- **Text color**: Dark (`text-[#302e2e]`)
- **Border**: 2px dark border
- **Padding**: `px-4 py-2` mobile, `px-6 py-3` desktop
- **Hover**: Background → `#9C7C9C`, text → white
- **Transition**: `transition-all duration-200 ease-out`

**Secondary Button** ("Ver proyectos"):
```jsx
<a href="/#proyectos" className="...">
  Ver proyectos →
</a>
```
- **Background**: Transparent
- **Text color**: Dark
- **Border**: None
- **Font**: Semibold
- **Hover**: Opacity change or underline effect

---

## Color Palette

| Token | Color | Usage |
|-------|-------|-------|
| `text-dark` | #302e2e | Headlines, primary text |
| `text-dark/60` | #302e2e 60% | Category labels |
| `text-dark/75` | #302e2e 75% | Body descriptions |
| `bg-white` | #FFFFFF | Button backgrounds |
| Primary hover | #9C7C9C | Button hover states |
| Chip bg | #eef1ee | Skill badges |
| Chip border | #d5dbd4 | Skill badge borders |

---

## Typography

| Element | Font | Size | Weight | Style |
|---------|------|------|--------|-------|
| Category | DM Sans | 14px | Semibold (600) | Uppercase |
| Headline | DM Serif Display | 48-84px | Normal (400) | — |
| Subtitle | Gilroy | 32px | — | Italic |
| Body | Gilroy | 18-20px | — | — |
| Chips | Gilroy | 14px | Medium (500) | — |

---

## Responsive Behavior

### Mobile (`<640px`)
- Category: Normal size
- Headline: `text-5xl` (48px)
- Subtitle: Full width
- Buttons: Stacked vertically
- Chips: Compact layout

### Tablet (`640px - 1024px`)
- Headline: `text-6xl` (60px)
- Subtitle: Full width
- Buttons: Side-by-side
- Chips: Wrapped layout

### Desktop (`>1024px`)
- Headline: `text-7xl` (84px)
- Subtitle: Optimized width
- Full spacing and gaps
- All elements at max proportion

---

## Usage Examples

### Home Page (HomePage.tsx)
```jsx
<Hero onActionClick={handleHeroAction} />
```

### Case Study Pages (e.g., EAECaseStudy.tsx)
```jsx
<section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-4 lg:px-6 bg-transparent overflow-hidden">
  <div className="relative z-10 max-w-6xl mx-auto">
    {/* Category */}
    <p className="text-sm font-semibold uppercase tracking-widest text-dark/60">
      WEB MANAGER
    </p>
    
    {/* Title */}
    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.02] text-dark">
      EAE Barcelona School Business
    </h1>
    
    {/* Subtitle */}
    <p className="heading-subtitle">
      Web corporativa educativa.
    </p>
    
    {/* Description */}
    <p className="text-lg md:text-xl leading-[1.6] text-dark/75 max-w-3xl">
      Web Manager. Año 2023-2025.
    </p>
    
    {/* Chips */}
    <div className="flex flex-wrap gap-2 lg:gap-3 pt-2 lg:pt-4">
      {['Drupal', 'UX Research', 'Web Manager', 'Optimización', 'A/B Testing'].map((skill) => (
        <span key={skill} className={getChipClasses()}>
          {skill}
        </span>
      ))}
    </div>
  </div>
</section>
```

---

## Key Design Decisions

✅ **Serif for Headlines**: DM Serif Display provides sophistication and clarity
✅ **Generous Spacing**: Large gaps between sections for visual breathing room
✅ **Color Hierarchy**: Dark primary text with tinted body copy (75% opacity)
✅ **Flexible Structure**: Works for both home hero and case study heroes
✅ **Responsive**: Degrades gracefully across devices
✅ **Accessibility**: Semantic HTML, sufficient contrast ratios

---

## Integration Notes

- **Background**: Hero inherits parent gradient background (no isolated background)
- **Header**: Positioned above Header component which is `fixed` at `z-50`
- **Footer**: Followed by content sections or footer
- **Grid System**: Uses Tailwind's responsive grid (5xl → 6xl → 7xl text scaling)
- **Utility Functions**: `getChipClasses()` from `utils/classNames.ts`

---

## Future Enhancements

- [ ] Add animated gradient background option
- [ ] Support for hero image/video background
- [ ] Animation entrance effects
- [ ] Dark mode variant support
- [ ] Dynamic chip filtering/selection

