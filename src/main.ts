import { createApp } from "vue";
import App from "./App.vue";

import { osInfo } from "./utils/osinfo";
import { info } from "@tauri-apps/plugin-log";

info(`os info: ${osInfo.platform}, ${osInfo.arch}, ${osInfo.version}`);

createApp(App).mount("#app");
