# InformesIA (monorepo)

Monorepo con:
- `client/`: React + Vite
- `server/`: Node.js + Express + TypeScript

## Requisitos
- Node.js `>= 22.12` (recomendado: el de `.nvmrc`)

## Instalación
Desde la raíz:

```bash
npm install
```

## Desarrollo (front + back)
Desde la raíz:

```bash
npm run dev
```

- Client: http://localhost:5173/
- Server: http://localhost:4000/health

## Scripts útiles
- `npm run dev:client`: levanta solo el frontend
- `npm run dev:server`: levanta solo el backend
- `npm run build`: build de client + server

## Notas
- Si ves `Cannot GET /` en el server, es normal: no hay ruta `GET /`. Usa `/health`.
- No subas `node_modules/` al repo (está ignorado por `.gitignore`).
