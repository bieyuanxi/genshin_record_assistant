import { getVersion, getName, getTauriVersion } from "@tauri-apps/api/app";

export const appInfo = await getAppInfo();

async function getAppInfo() {
  const version = await getVersion();
  const name = await getName();
  const tauriVersion = await getTauriVersion();

  return { version, name, tauriVersion };
}
