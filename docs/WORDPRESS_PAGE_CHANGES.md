Resumen de cambios — Página WordPress

Resumen corto
- Fecha: 2026-07-06
- Commit: eb3310f (push a `main`) — mensaje: "chore: WordPress page — layout and heading fixes"
- Objetivo: ajustar layout del hero (dos cards), asegurar alineado y evitar solapamiento; dividir/tocar temporalmente el `h1` según peticiones; añadir página de contacto EN y pequeños ajustes EN.

Archivos modificados (principales)
- [src/pages/WordPressPage.tsx](src/pages/WordPressPage.tsx#L1-L400): ajustes de layout del hero, grid, cards, y cambios de título (división y posteriores restauraciones). Se removió cualquier override inline de tipografía para respetar `font-serif`.
- [src/pages/WordPressPageEn.tsx](src/pages/WordPressPageEn.tsx#L1-L400): agregado/ajustes para la versión inglesa, incluye `useEffect(() => setLanguage('en'))` y copy en inglés.
- [src/pages/ContactPageEn.tsx](src/pages/ContactPageEn.tsx#L1-L200): nueva página de contacto en inglés (creada durante el trabajo).
- [src/data/portfolio.ts](src/data/portfolio.ts#L1-L400): añadidos `description_en` / `tags_en` para algunos proyectos destacados.
- [src/components/Navigation.tsx](src/components/Navigation.tsx#L1-L200): ajustes para que los enlaces apunten a variantes EN cuando `language === 'en'`.
- [src/components/Footer.tsx](src/components/Footer.tsx#L1-L200): enlaces de contacto adaptados a idioma.
- translation_audit.txt (en el repo): salida parcial de un intento de auditoría de traducciones (no automatizada).

Qué se hizo y por qué
- Hero: se dividió el bloque hero en dos cards centradas, se ajustó `max-w` y grid para asegurar separación mínima (gap-10 = 40px) y evitar solapamiento con la sección siguiente.
- Cards: se retiraron alturas fijas cuando causaban overflow; se añadió `break-words` y `box-border` para evitar que el texto saliera de las cards.
- Título: el `h1` fue temporalmente dividido en dos líneas a petición (y restaurado a una línea). Se eliminó el `style` inline forzando fuente; la tipografía de headings queda controlada por `font-serif` (Tailwind: `DM Serif Display`).
- Inglés: se añadió `WordPressPageEn` y `ContactPageEn`, y se añadieron campos `_en` en `portfolio` para que proyectos destacados muestren texto en inglés cuando la página EN esté activa.

Cómo verificar localmente
1. Ejecuta dev server:

```bash
npm run dev
```

2. Abrir:
- Versión ES: http://localhost:5173/wordpress
- Versión EN: http://localhost:5173/wordpress-en

3. Verifica:
- El `h1` en la versión ES usa `font-serif` (DM Serif Display) — inspecciona con DevTools la cascada de CSS.
- Las dos cards del hero están centradas y tienen gap >= 40px.
- La versión EN muestra copy en inglés; además, navegar a `/contacto-en` abre la página de contacto en inglés.

Cómo revertir cambios (si es necesario)
- Revertir el commit específico:

```bash
git revert eb3310f
# o para reset completo (local):
# git reset --hard d1736c5
# git push --force origin main
```

- Para revertir sólo un archivo concreto:

```bash
git checkout HEAD~1 -- src/pages/WordPressPage.tsx
git commit -m "revert: restore WordPressPage.tsx previous state"
git push
```

Notas finales
- La auditoría completa de traducciones no se integró automáticamente; hay una `translation_audit.txt` con salida parcial. Se recomienda un plan de trabajo para centralizar copy (migrar a `src/constants/translations.ts` y usar `t()` desde `LanguageContext`).
- Si quieres, puedo crear un PR que documente estos cambios y proponga la siguiente tarea (centralizar copy o terminar la auditoría).

---
Si quieres que guarde este documento en otra ruta o que genere además un `CHANGELOG.md` con más detalle (lista de diffs), dímelo y lo añado.