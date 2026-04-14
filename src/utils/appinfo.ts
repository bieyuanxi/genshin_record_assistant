import { getVersion, getName } from "@tauri-apps/api/app";

export const appInfo = await getAppInfo();

async function getAppInfo() {
  const version = await getVersion();
  const name = await getName();

  return { version, name };
}
