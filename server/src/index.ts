import express from "express";
import cors from "cors";
import { isDbConfigured, pingDb } from "./db";
import { loadEnv } from "./env";

const { appEnv } = loadEnv();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/health/db", async (_req, res) => {
  if (!isDbConfigured()) {
    return res.status(400).json({ ok: false, error: "DATABASE_URL is not set" });
  }

  try {
    await pingDb();
    return res.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return res.status(503).json({ ok: false, error: message });
  }
});

const port = Number(process.env.PORT ?? 4000);
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
  console.log(`ENV: APP_ENV=${appEnv}`);
  if (!isDbConfigured()) {
    console.log("DB: DATABASE_URL not set (skipping)");
  }
});
