# 🎨 Componentes Sugeridos para Futuras Fases

## Fase 2: Secciones Principales

### 1. Services Component
```tsx
// components/sections/Services.tsx
type Service = {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  link?: string;
};

// Servicios sugeridos:
// - Diseño web
// - Desarrollo frontend
// - Desarrollo backend
// - Consultoría digital
```

### 2. Projects Component
```tsx
// components/sections/Projects.tsx
type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
};
```

### 3. Contact Component
```tsx
// components/sections/Contact.tsx
// - Formulario de contacto
// - Información de contacto
// - Links a redes sociales
```

### 4. Footer Component
```tsx
// components/Footer.tsx
// - Copyright
// - Links útiles
// - Redes sociales
```

---

## Fase 3: Componentes Comunes

### 1. Container
```tsx
type ContainerProps = {
  children: ReactNode;
  className?: string;
  narrow?: boolean; // Para contenedores estrechos
};
```

### 2. Section
```tsx
type SectionProps = {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
};
```

### 3. Card
```tsx
type CardProps = {
  children: ReactNode;
  variant?: 'elevated' | 'outlined';
  className?: string;
};
```

---

## Fase 4: Hooks Personalizados

### 1. useScrollTo
```tsx
// hooks/useScrollTo.ts
// Scroll suave a secciones
const { scrollTo } = useScrollTo();
scrollTo('servicios'); // Scroll a elemento con id="servicios"
```

### 2. useNavigation
```tsx
// hooks/useNavigation.ts
// Manejo de navegación y estados
const { active, navigate } = useNavigation();
```

### 3. useInView
```tsx
// hooks/useInView.ts
// Detectar cuando un elemento entra en vista
const { ref, isInView } = useInView();
```

---

## Fase 5: Mejoras UX/Optimización

### 1. Mobile Menu
```tsx
// components/MobileMenu.tsx
// - Hamburger menu para móvil
// - Transiciones suaves
```

### 2. Search Component
```tsx
// components/Search.tsx
// - Búsqueda de proyectos
// - Autocompletado
```

### 3. Animations
```tsx
// - Framer Motion integration
// - Page transitions
// - Scroll animations
```

### 4. Dark Mode
```tsx
// - Context API para tema
// - Toggle theme button
// - Sistema de colores dual
```

---

## Stack Tecnológico Recomendado

### Librerías Adicionales
```json
{
  "framer-motion": "^11.0.0",    // Animaciones
  "react-router-dom": "^6.0.0",  // Enrutamiento
  "zustand": "^4.0.0",           // State management
  "react-hook-form": "^7.0.0",   // Manejo de formularios
  "zod": "^3.0.0"                // Validación
}
```

### Dev Dependencies
```json
{
  "@hookform/resolvers": "^3.0.0",
  "classnames": "^2.0.0",
  "clsx": "^2.0.0"
}
```

---

## Guía de Implementación Gradual

### Week 1 (Completado ✅)
- [x] Estructura base de componentes
- [x] Header y navegación
- [x] Hero section
- [x] Button system

### Week 2 (Próximo)
- [ ] Services section con cards
- [ ] Projects showcase
- [ ] Contact form básico
- [ ] Footer

### Week 3
- [ ] Mobile responsive
- [ ] Mobile menu
- [ ] Dark mode
- [ ] Animaciones

### Week 4
- [ ] SEO optimización
- [ ] Performance tuning
- [ ] Tests unitarios
- [ ] Deploy

---

## Notas de Desarrollo

### TailwindCSS Tips
```tsx
// Responsive design
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Pseudo-classes
className="hover:bg-green-600 active:scale-95"

// Dark mode
className="dark:bg-gray-900 dark:text-white"

// Animations
className="transition-all duration-300 ease-in-out"
```

### Performance
- Usar React.memo para componentes que reciben props complejas
- Code splitting con React.lazy
- Image optimization
- Lazy loading de secciones

### Accesibilidad
- ARIA labels adecuados
- Semantic HTML
- Contrast ratios suficientes
- Teclado navigation

---

## Checklist de Validación

- [ ] Responsive en mobile, tablet, desktop
- [ ] Accesible (WCAG 2.1)
- [ ] Performance > 90 en Lighthouse
- [ ] SEO optimizado (meta tags, schema)
- [ ] Cross-browser compatible
- [ ] Tests unitarios pasados
- [ ] TypeScript sin errores
- [ ] Code bien documentado

---

**Última actualización:** 11 de marzo de 2026
