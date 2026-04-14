import { darkTheme, GlobalTheme } from "naive-ui";
import { computed, ref, watch } from "vue";
import { store } from "./store";
import { info } from "@tauri-apps/plugin-log";
import { getCurrentWindow } from '@tauri-apps/api/window';

// `null` => follow system theme
export type Theme = "dark" | "light" | null;

export const appTheme = ref<Theme>(null);

{
  // load theme cfg from store
  const _theme = await store.get<Theme>("theme");
  appTheme.value = (_theme === undefined) ? null : _theme;
}


export async function setAppTheme(theme: Theme) {
  appTheme.value = theme;
  // sync window theme
  await getCurrentWindow().setTheme(theme);
}

// 监听系统主题
export async function watchOsTheme() {
  const win = getCurrentWindow()
  windowTheme.value = await win.theme()
  return win.onThemeChanged(({ payload }) => {
    windowTheme.value = payload
  })
}


const unlisten = await getCurrentWindow().onThemeChanged(({ payload: theme }) => {
  console.log('New theme: ' + theme);
  info('New theme: ' + theme);
  windowTheme.value = theme;
});

const windowTheme = ref(await getCurrentWindow().theme());

export const naiveUITheme = computed<GlobalTheme | null>(() => {
  const current = appTheme.value === null ? windowTheme.value : appTheme.value
  return current === 'dark' ? darkTheme : null
});


watch(appTheme, async (newVal) => {
  // store theme
  info(`saving theme cfg: ${newVal}`);
  await store.set("theme", newVal);
  await store.save();
});