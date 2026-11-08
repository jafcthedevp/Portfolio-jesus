# Jesús Flores · Portfolio

Next.js, React y TypeScript. Diseño adaptado del [Brutalist Void Portfolio Template de rajoninternet](https://v0.app/templates/brutalist-void-portfolio-template-0brPGNpjNkt): Playfair Display, Geist Mono, esfera WebGL, Framer Motion, Lenis y galería editorial.

Contenido y PDF actualizados con el CV de Jesús Flores. Las imágenes de la galería son diagramas conceptuales de arquitectura, no capturas de productos de clientes.

## Desarrollo

Node.js 20.19 o superior y pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Abrir http://localhost:3000.

```sh
pnpm typecheck
pnpm build
pnpm start
pnpm audit
```

## Estructura

- `src/components/void/`: diseño adaptado de v0.
- `src/app/page.tsx`: composición principal.
- `src/app/globals.css`: tema Tailwind CSS 4.
- `public/CVJesusFlores.pdf`: CV actualizado.
- `public/project-*.svg`: diagramas conceptuales de cada experiencia.

## Seguridad

Se usa pnpm y su lockfile. Se actualizaron Next.js, React y Sharp. `pnpm-workspace.yaml` fija versiones corregidas de PostCSS y minimatch y permite únicamente el script de instalación revisado de Sharp. Se retiraron imagemin e imagemin-webp porque el convertidor existente usa Sharp.

Última auditoría: 0 vulnerabilidades conocidas. Repetir `pnpm audit` al actualizar dependencias.

El sitio incluye navegación móvil, foco visible, alternativa si falla WebGL y ajustes para movimiento reducido y pantallas táctiles.
