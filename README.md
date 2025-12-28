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

## PostgreSQL (local con Docker)
Recomendado para desarrollo: te evita instalar Postgres en Windows y te deja el entorno reproducible.

1) Levanta la base:

```bash
npm run db:up
```

2) Crea tu archivo de variables de entorno del server:

- Copia `server/.env.example` a `server/.env`

### Varios entornos (LOCAL / DEV / PRO)
En el backend, lo más escalable suele ser:
- **Producción**: variables de entorno del proveedor (no usar archivos `.env` en el repo/servidor).
- **Local/Dev**: archivos `.env` ignorados por git, y versionar solo `*.example`.

Soportado en este proyecto:
- `APP_ENV=local|dev|pro`
- Archivos opcionales: `server/.env`, `server/.env.local`, `server/.env.dev`, `server/.env.pro`

Nota: las variables ya definidas en el entorno (por ejemplo en un hosting) tienen prioridad sobre archivos.

3) Arranca el proyecto:

```bash
npm run dev
```

4) Verifica la conexión a la DB:

- http://localhost:4000/health/db

## Scripts útiles
- `npm run dev:client`: levanta solo el frontend
- `npm run dev:server`: levanta solo el backend
- `npm run build`: build de client + server

## Notas
- Si ves `Cannot GET /` en el server, es normal: no hay ruta `GET /`. Usa `/health`.
- No subas `node_modules/` al repo (está ignorado por `.gitignore`).
