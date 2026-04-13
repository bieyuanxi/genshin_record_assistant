import { platform, version, arch } from '@tauri-apps/plugin-os';
import { info } from '@tauri-apps/plugin-log';


export function print_os_info() {
  info(`platform: ${platform()}, version: ${version()}, arch: ${arch()}`);
}

