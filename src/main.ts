import { createApp } from "vue";
import App from "./App.vue";

import { osInfo } from "./utils/osinfo";
import { info } from "@tauri-apps/plugin-log";
import { initTheme } from "./utils/theme";


async function setup() {
  // 初始化主题
  await initTheme();

  // 挂载应用
  createApp(App).mount("#app");

  info(`os info: ${osInfo.platform}, ${osInfo.arch}, ${osInfo.version}`);
}


setup();