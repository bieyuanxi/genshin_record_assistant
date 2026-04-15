<script setup lang="ts">
import { NButton, NSpace, NCard } from "naive-ui";


import { setAppTheme } from "./utils/theme";



</script>

<template>
    <n-space>
        <n-card>
            <n-button @click="setAppTheme('dark')">
                深色
            </n-button>
            <n-button @click="setAppTheme('light')">
                浅色
            </n-button>
            <n-button @click="setAppTheme(null)">
                跟随系统
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
