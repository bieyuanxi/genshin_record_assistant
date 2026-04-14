<script setup lang="ts">
import { darkTheme, GlobalTheme, NButton, NSpace, NCard } from "naive-ui";
import { ref } from "vue";

import { Theme, appTheme } from "./utils/theme";

async function setTheme(newTheme: Theme) {
  appTheme.value = newTheme
}

</script>

<template>
    <n-space>
        <n-card>
            <n-button @click="setTheme('dark')">
                深色
            </n-button>
            <n-button @click="setTheme('light')">
                浅色
            </n-button>
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
