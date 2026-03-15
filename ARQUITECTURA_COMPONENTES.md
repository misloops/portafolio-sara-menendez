# 📋 Arquitectura de Componentes - Portfolio Sara Menéndez

## 1. Análisis de Secciones Principales

### Header/Navbar
- Logo con nombre de la marca
- Navegación con 4 enlaces principales
- Botón de WhatsApp

### Hero Section
- Subtítulo destacado
- Título principal con énfasis
- Descripción del servicio
- Dos botones de CTA (Call-To-Action)

---

## 2. Jerarquía de Componentes (Component Tree)

```
App
├── Header
│   ├── Logo
│   ├── Navigation
│   │   └── NavLink (×4)
│   └── WhatsAppButton
└── Hero
    ├── HeroTitle
    ├── HeroSubtitle
    ├── HeroDescription
    └── HeroActions
        ├── Button (Servicios)
        └── Button (Contacto)
```

---

## 3. Estructura de Carpetas Recomendada

```
src/
├── components/
│   ├── Button.tsx              # Componente botón reutilizable
│   ├── Header.tsx              # Componente header principal
│   ├── Hero.tsx                # Componente hero section
│   ├── Logo.tsx                # Componente logo
│   ├── Navigation.tsx           # Componente navegación
│   ├── NavLink.tsx             # Componente link de navegación
│   ├── WhatsAppButton.tsx      # Botón WhatsApp con icon
│   │
│   ├── sections/               # (Futuro) Secciones adicionales
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   │
│   ├── common/                 # Componentes comunes reutilizables
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   └── Grid.tsx
│   │
│   └── ui/                     # Componentes UI primitivos
│       ├── Card.tsx
│       ├── Badge.tsx
│       └── Divider.tsx
│
├── hooks/                      # Hooks personalizados
│   ├── useNavigation.ts
│   └── useScrollTo.ts
│
├── lib/                        # Utilidades y helpers
│   ├── constants.ts
│   └── utils.ts
│
├── styles/                     # Estilos globales
│   └── globals.css
│
├── types/                      # TypeScript types globales
│   └── index.ts
│
├── App.tsx                    # Componente raíz
├── main.tsx                   # Punto de entrada
├── index.css                  # Estilos globales
└── assets/
    └── fonts.css
```

---

## 4. Descripción de Componentes

### Button.tsx
**Propósito:** Componente botón reutilizable con múltiples variantes
- **Props:**
  - `text` (string | ReactNode): Contenido del botón
  - `variant` ('primary' | 'secondary' | 'outline'): Estilo
  - `size` ('sm' | 'md' | 'lg'): Tamaño
  - `onClick` (function): Manejador de clic
  - `icon` (ReactNode): Icon opcional

### Header.tsx
**Propósito:** Barra de navegación principal
- **Componentes hijos:** Logo, Navigation, WhatsAppButton
- **Props:**
  - `onNavigate` (function): Callback cuando se navega

### Hero.tsx
**Propósito:** Sección destacada principal
- **Contenido:** Título, subtítulo, descripción, botones de acción
- **Props:**
  - `onActionClick` (function): Callback para botones

### Logo.tsx
**Propósito:** Logo y nombre de marca
- **Mostrado en:** Header

### Navigation.tsx
**Propósito:** Menú de navegación
- **Items:** Inicio, Servicios, Proyectos, Contacto
- **Usa:** NavLink para cada elemento

### NavLink.tsx
**Propósito:** Link individual de navegación
- **Props:**
  - `href` (string): URL del link
  - `label` (string): Texto del link
  - `onClick` (function): Handler personalizado

### WhatsAppButton.tsx
**Propósito:** Botón WhatsApp con ícono
- **Props:**
  - `phoneNumber` (string): Número para WhatsApp
  - `label` (string): Texto del botón

---

## 5. Estilos con TailwindCSS

### Paleta de Colores Utilizada
- **Primary (Verde):** `bg-green-500`, `hover:bg-green-600`
- **Secondary (Gris):** `bg-gray-200`, `text-gray-700`
- **Accent (Naranja):** `text-orange-400`
- **Highlight (Púrpura):** `text-purple-300`
- **Background:** `bg-gray-100`, `bg-gray-50`

### Tipografía
- **Títulos:** `text-5xl lg:text-6xl font-bold`
- **Subtítulos:** `text-lg font-medium`
- **Párrafos:** `text-base lg:text-lg`
- **Labels:** `font-semibold`

### Espaciado
- **Padding Header:** `py-5 px-6`
- **Padding Secciones:** `py-24`
- **Gap entre elementos:** `gap-4` a `gap-12`

---

## 6. Próximas Mejoras Sugeridas

### Componentes a Crear
- [ ] `Services.tsx` - Sección de servicios
- [ ] `Projects.tsx` - Portafolio de proyectos
- [ ] `Contact.tsx` - Formulario de contacto
- [ ] `Footer.tsx` - Pie de página
- [ ] `Card.tsx` - Componente card reutilizable
- [ ] `Container.tsx` - Contenedor con max-width

### Hooks Personalizados
- [ ] `useNavigation()` - Manejo de navegación
- [ ] `useScrollTo()` - Scroll suave a secciones
- [ ] `useMobileMenu()` - Toggle de menú mobile

### Características Avanzadas
- [ ] Dark mode con Context API
- [ ] Animaciones con Framer Motion
- [ ] Responsive design mejorado
- [ ] SEO optimización
- [ ] Performance optimization

---

## 7. Cómo Usar los Componentes

### Header
```tsx
<Header onNavigate={(section) => console.log(section)} />
```

### Hero
```tsx
<Hero onActionClick={(action) => console.log(action)} />
```

### Button
```tsx
<Button 
  text="Click me" 
  variant="primary" 
  size="lg"
  onClick={() => console.log('Clicked')}
/>
```

---

## 8. Configuración TailwindCSS (Vigente)

Ya está configurado en `tailwind.config.ts` con:
- Theme extendido
- Colores personalizados
- Plugins necesarios
- PostCSS configurado

---

**Creado:** 11 de marzo de 2026  
**Proyecto:** Portfolio Sara Menéndez
**Framework:** React 19 + TypeScript + TailwindCSS4
