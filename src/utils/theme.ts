import { ref, watch } from "vue";
import { store } from "./store";
import { info } from "@tauri-apps/plugin-log";
import { getCurrentWindow } from "@tauri-apps/api/window";
import type { Theme } from "@tauri-apps/api/window";

// `null` => follow system theme
export type AppTheme = Theme | null;

// app theme config
export const appTheme = ref<AppTheme>(null);
// real theme of the app
export const windowTheme = ref<AppTheme>(null);

/**
 * **make sure call this only once**
 */
export async function initTheme() {
  // 初始化os主题状态
  windowTheme.value = await getCurrentWindow().theme();
  
  // 读取用户保存的配置
  const savedTheme = await store.get<AppTheme>("theme");
  const useTheme = savedTheme ?? null; // 没有则为跟随系统
  
  await setAppTheme(useTheme);
  
  // 监听系统主题
  await getCurrentWindow().onThemeChanged(({ payload: theme }) => {
    info("system theme changed: " + theme);
    windowTheme.value = theme;
  });
  
  watch(appTheme, async (theme) => {
    // store theme
    info(`saving theme cfg: ${theme}`);
    await store.set("theme", theme);
    await store.save();
  });
}

/**
 * Set theme of the App.
 * @param theme 
 */
export async function setAppTheme(theme: AppTheme) {
  // sync window theme
  await getCurrentWindow().setTheme(theme);
  appTheme.value = theme;
  
  info("set app theme: " + theme);
}
