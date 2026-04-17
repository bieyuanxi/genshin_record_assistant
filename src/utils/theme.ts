import { readonly, ref, watch } from "vue";
import { store } from "./store";
import { info } from "@tauri-apps/plugin-log";
import { getCurrentWindow } from "@tauri-apps/api/window";
import type { Theme } from "@tauri-apps/api/window";
import { setTheme } from '@tauri-apps/api/app';

// `null` => follow system theme
export type AppTheme = Theme | null;

// app theme config
const _appTheme = ref<AppTheme>(null);
export const appTheme = readonly(_appTheme);

// real theme of the app
const _windowTheme = ref<AppTheme>(null);
export const windowTheme = readonly(_windowTheme);

/**
 * **make sure call this only once**
 */
export async function initTheme() {
  // 监听系统主题
  await getCurrentWindow().onThemeChanged(({ payload: theme }) => {
    info("system theme changed: " + theme);
    _windowTheme.value = theme;
  });
  
  watch(appTheme, async (theme) => {
    info("set app theme: " + theme);
    
    // sync app theme
    await setTheme(theme);
    
    // store theme
    await store.set("theme", theme);
    await store.save();
    info(`saved theme cfg: ${theme}`);
  })
  
  // 读取配置
  const savedTheme = await store.get<AppTheme>("theme");
  const useTheme = savedTheme ?? null; // 没有则为跟随系统
  
  setAppTheme(useTheme);
  // 启动时同步窗口主题
  _windowTheme.value = await getCurrentWindow().theme();
}

/**
 * Set theme of the App.
 * @param theme 
 */
export function setAppTheme(theme: AppTheme) {
  _appTheme.value = theme;
}
