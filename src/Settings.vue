<script setup lang="ts">
import { NButton, NSpace, NCard, NRadioGroup, NRadioButton } from "naive-ui";

import { setAppTheme, appTheme } from "./utils/theme";

import type { Theme } from "@tauri-apps/api/window";
import { computed } from "vue";

type ThemeTpye = Theme | "system";

type ThemeOption = {
    value: ThemeTpye;
    label: string;
};

const theme = computed(() => {
    return null === appTheme.value ? "system" : appTheme.value;
});

const themeOptions: ThemeOption[] = [
    {
        value: "dark",
        label: "深色",
    },
    {
        value: "light",
        label: "浅色",
    },
    {
        value: "system",
        label: "跟随系统",
    },
];
</script>

<template>
    <n-space>
        <n-card>
            <n-radio-group
                :value="theme"
                @update:value="
                    (v: ThemeTpye) => setAppTheme(v === 'system' ? null : v)
                "
                name="theme_options"
            >
                <n-radio-button
                    v-for="theme in themeOptions"
                    :key="theme.value"
                    :value="theme.value"
                    :disabled="false"
                    :label="theme.label"
                />
            </n-radio-group>
        </n-card>
        <n-button>Default</n-button>
        <n-button type="tertiary"> Tertiary </n-button>
        <n-button type="primary"> Primary </n-button>
        <n-button type="info"> Info </n-button>
        <n-button type="success"> Success </n-button>
        <n-button type="warning"> Warning </n-button>
        <n-button type="error"> Error </n-button>
    </n-space>
</template>
