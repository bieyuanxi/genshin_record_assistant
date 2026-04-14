import {
  platform as getPlatform,
  version as getVersion,
  arch as getArch,
} from "@tauri-apps/plugin-os";

export const osInfo = await getOSInfo();

export async function getOSInfo() {
  const platform = getPlatform();
  const version = getVersion();
  const arch = getArch();

  return { platform, version, arch };
}
