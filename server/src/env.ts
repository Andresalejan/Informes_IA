import fs from "fs";
import path from "path";
import dotenv from "dotenv";

export type AppEnv = "local" | "dev" | "pro";

function loadIfExists(filePath: string): void {
  if (!fs.existsSync(filePath)) return;
  dotenv.config({ path: filePath, override: false });
}

export function loadEnv(): { appEnv: AppEnv } {
  const baseDir = path.resolve(__dirname, "..");

  // 1) Base defaults
  loadIfExists(path.join(baseDir, ".env"));

  // 2) Optional environment-specific overrides (without overriding already-set vars)
  const appEnvRaw = (process.env.APP_ENV ?? "local").toLowerCase();
  const appEnv: AppEnv =
    appEnvRaw === "dev" ? "dev" : appEnvRaw === "pro" ? "pro" : "local";

  loadIfExists(path.join(baseDir, `.env.${appEnv}`));
  loadIfExists(path.join(baseDir, `.env.${appEnv}.local`));

  return { appEnv };
}
