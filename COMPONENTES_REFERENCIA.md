# 📖 Referencia Rápida de Componentes

## Import Rápidos

```tsx
// Button
import Button from './components/Button';

// Header
import Header from './components/Header';

// Hero
import Hero from './components/Hero';

// Logo
import Logo from './components/Logo';

// Navigation
import Navigation from './components/Navigation';

// NavLink
import NavLink from './components/NavLink';

// WhatsApp Button
import WhatsAppButton from './components/WhatsAppButton';
```

---

## Ejemplos de Uso

### Button Component

#### Primary Button (Verde)
```tsx
<Button 
  text="Enviar" 
  variant="primary" 
  size="md"
  onClick={() => console.log('Enviado')}
/>
```

#### Secondary Button (Gris)
```tsx
<Button 
  text="Cancelar"
  variant="secondary"
  size="md"
/>
```

#### Outline Button (Borde)
```tsx
<Button 
  text="Más información"
  variant="outline"
  size="lg"
/>
```

#### Button con Icon
```tsx
<Button 
  text={
    <span className="flex items-center gap-2">
      Descargar CV
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
      </svg>
    </span>
  }
  variant="primary"
/>
```

---

### Header Component

```tsx
<Header 
  onNavigate={(section) => {
    console.log(`Usuario navegó a: ${section}`);
    // Scroll to section, API call, etc.
  }} 
/>
```

---

### Hero Component

```tsx
<Hero 
  onActionClick={(action) => {
    if (action === 'servicios') {
      // Scroll a servicios o navegación
    } else if (action === 'contacto') {
      // Abrir formulario de contacto
    }
  }}
/>
```

---

### Logo Component

```tsx
// Standalone
<Logo />

// Inside Header
<Header /> {/* Ya incluye Logo */}
```

---

### Navigation Component

```tsx
// Standalone
<Navigation 
  onNavigate={(section) => console.log(section)}
/>

// Inside Header
<Header /> {/* Ya incluye Navigation */}
```

---

### NavLink Component

```tsx
<NavLink 
  href="#servicios"
  label="Servicios"
  onClick={() => console.log('Clicked Servicios')}
/>
```

---

### WhatsApp Button Component

```tsx
// Default (España)
<WhatsAppButton />

// Custom number
<WhatsAppButton 
  phoneNumber="+34600000000"
  label="Contactar por WhatsApp"
/>
```

---

## Props Reference

### Button Props
```typescript
type ButtonProps = {
  text: string | ReactNode;           // Contenido (requerido)
  variant?: 'primary' | 'secondary' | 'outline';  // Estilo (default: 'primary')
  size?: 'sm' | 'md' | 'lg';          // Tamaño (default: 'md')
  onClick?: () => void;                // Handler de clic
  icon?: ReactNode;                    // Icon opcional
};
```

### Header Props
```typescript
type HeaderProps = {
  onNavigate?: (section: string) => void;
};
```

### Hero Props
```typescript
type HeroProps = {
  onActionClick?: (action: string) => void;
};
```

### NavLink Props
```typescript
type NavLinkProps = {
  href: string;                        // URL del link (requerido)
  label: string;                       // Texto del link (requerido)
  onClick?: () => void;                // Handler personalizado
};
```

### Navigation Props
```typescript
type NavigationProps = {
  onNavigate?: (section: string) => void;
};
```

### WhatsAppButton Props
```typescript
type WhatsAppButtonProps = {
  phoneNumber?: string;                // Número (default: '+34123456789')
  label?: string;                      // Texto (default: 'Escribeme')
};
```

---

## Colores en Uso

### Verde (Primary - CTA Buttons)
- `bg-green-500` - Background
- `hover:bg-green-600` - Hover
- `text-white` - Texto

### Gris (Secondary)
- `bg-gray-200` - Background
- `text-gray-700` - Texto
- `hover:bg-gray-300` - Hover

### Naranja (Accent)
- `text-orange-400` - Para destacar elementos

### Púrpura (Highlight)
- `text-purple-300` - Para énfasis en títulos

### Grises Neutros
- `bg-gray-50` - Fondo claro
- `bg-gray-100` - Fondo Header
- `text-gray-900` - Texto oscuro

---

## Tamaños y Espaciado

### Font Sizes
- Títulos: `text-5xl` (84px) a `text-6xl` (96px)
- Subtítulos: `text-lg` (18px)
- Body: `text-base` (16px)
- Small: `text-sm` (14px)

### Padding/Margin
- Components: `px-6 py-3` a `px-8 py-4`
- Sections: `py-24` (96px)
- Gaps: `gap-4`, `gap-6`, `gap-8`, `gap-12`

### Border Radius
- Buttons: `rounded-lg` (8px)
- WhatsApp Button: `rounded-full`
- Cards: `rounded-lg` (8px)

---

## Responsive Breakpoints

```tsx
// Mobile first approach
className="text-sm md:text-base lg:text-lg"

// Grid responsive
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Hidden en algunos breakpoints
className="hidden lg:flex"  // Mostrar solo en desktop
className="lg:hidden"       // Ocultar en desktop
```

---

## Validación de TypeScript

Todos los componentes están completamente tipados con TypeScript:

```tsx
// ✅ Correcto
<Button text="Click" variant="primary" size="lg" />

// ❌ Error - variant inválida
<Button text="Click" variant="invalid" />

// ❌ Error - size inválida
<Button text="Click" size="xlarge" />
```

---

## States y Transiciones

### Hover States
```tsx
className="hover:bg-green-600 transition-colors duration-200"
className="hover:shadow-lg transition-shadow"
className="hover:text-orange-400 transition-colors"
```

### Active States
```tsx
className="active:scale-95"
className="active:opacity-90"
```

### Focus States (para accesibilidad)
```tsx
className="focus:outline-none focus:ring-2 focus:ring-green-500"
```

---

## Animaciones

### Blur effect (decorativo)
```tsx
<div className="w-80 h-80 bg-gradient-to-br from-purple-200 to-purple-100 rounded-lg opacity-50"></div>
```

### Gradients
```tsx
className="bg-gradient-to-br from-purple-200 to-purple-100"
```

---

## Debugging

### Ver qué está pasando
```tsx
// En componentes
const handleNavigation = (section: string) => {
  console.log(`Navegando a: ${section}`);
};

const handleActionClick = (action: string) => {
  console.log(`Acción ejecutada: ${action}`);
};
```

### React DevTools
- Instalar React DevTools extension
- Inspeccionar component tree
- Ver props en tiempo real

---

## Performance Tips

### Evitar renders innecesarios
```tsx
// Usar useCallback para handlers
const handleClick = useCallback(() => {
  // ...
}, []);
```

### Memoización
```tsx
export default memo(Button);
```

### Lazy Loading (para el futuro)
```tsx
const HeavyComponent = lazy(() => import('./HeavyComponent'));
```

---

**Última actualización:** 11 de marzo de 2026  
**Versión:** 1.0
