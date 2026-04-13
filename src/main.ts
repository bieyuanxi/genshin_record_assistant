import { createApp } from "vue";
import App from "./App.vue";

import { print_os_info as log_osinfo } from "./utils/osinfo"

log_osinfo();

createApp(App).mount("#app");
