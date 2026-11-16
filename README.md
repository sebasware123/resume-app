# Sebastián Barona — Portfolio

Portfolio personal desarrollado con Next.js y exportación estática. La compilación genera el sitio listo para publicar en `out/`.

## Desarrollo

```bash
npm install
npm run dev
```

## Compilar y previsualizar

```bash
npm run build
npm run preview
```

`npm run preview` sirve el contenido estático generado en `out/` y requiere `serve` vía `npx`.

Para publicar el sitio bajo una subruta, define `NEXT_PUBLIC_BASE_PATH` antes de compilar. Por ejemplo, en PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = "/Resume-Nextjs"
npm run build
```

## Scripts

- `npm run dev`: inicia el servidor de desarrollo.
- `npm run build`: genera la exportación estática en `out/`.
- `npm run preview`: sirve localmente los archivos de `out/`.

## Créditos y licencia del template

El diseño y el código base provienen del equipo de [GetNextJSTemplates](https://getnextjstemplates.com/) y se distribuyeron mediante [ThemeWagon](https://themewagon.com/) bajo licencia MIT. Conserva los avisos de copyright y licencia aplicables al redistribuir el proyecto.
