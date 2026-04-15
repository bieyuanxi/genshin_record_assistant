<script setup lang="ts">
import type { GlobalTheme } from "naive-ui";
import {
    darkTheme,
    NConfigProvider,
    NCard,
    NFlex,
    NLayout,
    NLayoutContent,
    NLayoutSider,
    NIcon,
    NMenu,
} from "naive-ui";

import { h, computed } from "vue";
import type { Component } from "vue";
import {
    BookOutline as BookIcon,
    PersonOutline as PersonIcon,
    WineOutline as WineIcon,
} from "@vicons/ionicons5";
import Settings from "./Settings.vue";
import About from "./About.vue";
import { windowTheme } from "./utils/theme";

function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) });
}

const naiveUITheme = computed<GlobalTheme | null>(() => {
    return windowTheme.value === "dark" ? darkTheme : null;
});

const menuOptions = [
    {
        label: "Settings",
        key: "settings",
        icon: renderIcon(BookIcon),
    },
    {
        label: "且听风吟",
        key: "hear-the-wind-sing",
        icon: renderIcon(BookIcon),
    },
    {
        label: "且听风吟",
        key: "hear-the-wind-sing",
        icon: renderIcon(BookIcon),
    },
    {
        label: "且听风吟",
        key: "hear-the-wind-sing",
        icon: renderIcon(BookIcon),
    },
    {
        label: "且听风吟",
        key: "hear-the-wind-sing",
        icon: renderIcon(BookIcon),
    },
    {
        label: "且听风吟",
        key: "hear-the-wind-sing",
        icon: renderIcon(BookIcon),
    },
    {
        label: "且听风吟",
        key: "hear-the-wind-sing",
        icon: renderIcon(BookIcon),
    },
    {
        label: "且听风吟",
        key: "hear-the-wind-sing",
        icon: renderIcon(BookIcon),
    },
    {
        label: "且听风吟",
        key: "hear-the-wind-sing",
        icon: renderIcon(BookIcon),
    },
    {
        label: "且听风吟",
        key: "hear-the-wind-sing",
        icon: renderIcon(BookIcon),
    },
    {
        label: "且听风吟",
        key: "hear-the-wind-sing",
        icon: renderIcon(BookIcon),
    },
    {
        label: "且听风吟",
        key: "hear-the-wind-sing",
        icon: renderIcon(BookIcon),
    },
    {
        label: "1973年的弹珠玩具",
        key: "pinball-1973",
        icon: renderIcon(BookIcon),
        disabled: true,
        children: [
            {
                label: "鼠",
                key: "rat",
            },
        ],
    },

    {
        label: "寻羊冒险记",
        key: "a-wild-sheep-chase",
        disabled: true,
        icon: renderIcon(BookIcon),
    },
    {
        label: "舞，舞，舞",
        key: "dance-dance-dance",
        icon: renderIcon(BookIcon),
        children: [
            {
                type: "group",
                label: "人物",
                key: "people",
                children: [
                    {
                        label: "叙事者",
                        key: "narrator",
                        icon: renderIcon(PersonIcon),
                    },
                    {
                        label: "羊男",
                        key: "sheep-man",
                        icon: renderIcon(PersonIcon),
                    },
                ],
            },
            {
                label: "饮品",
                key: "beverage",
                icon: renderIcon(WineIcon),
                children: [
                    {
                        label: "威士忌",
                        key: "whisky",
                    },
                ],
            },
            {
                label: "食物",
                key: "food",
                children: [
                    {
                        label: "三明治",
                        key: "sandwich",
                    },
                ],
            },
            {
                label: "过去增多，未来减少",
                key: "the-past-increases-the-future-recedes",
            },
        ],
    },
];
</script>

<template>
    <n-config-provider :theme="naiveUITheme">
        <main class="container">
            <n-layout has-sider>
                <!-- 左侧边栏 -->
                <n-layout-sider
                    bordered
                    show-trigger
                    collapse-mode="width"
                    :collapsed-width="64"
                    :width="240"
                    :native-scrollbar="false"
                >
                    <n-menu
                        :collapsed-width="64"
                        :collapsed-icon-size="22"
                        :options="menuOptions"
                    />
                </n-layout-sider>
                <n-layout>
                    <!-- <n-layout-header style="padding: 4px" bordered>
                        header
                    </n-layout-header> -->
                    <n-layout-content
                        content-style="padding: 0px; overflow: auto;"
                    >
                        <n-flex>
                            <n-card>
                                <Settings></Settings>
                                <About></About>
                            </n-card>
                        </n-flex>
                    </n-layout-content>
                    <!-- <n-layout-footer bordered style="padding: 4px" position="absolute">
                        footer
                    </n-layout-footer> -->
                </n-layout>
            </n-layout>
        </main>
    </n-config-provider>
</template>

<style scoped></style>
<style>
:root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    /*color: #0f0f0f;
    background-color: #f6f6f6;*/

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
}

.container {
    margin: 0;
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.row {
    display: flex;
    justify-content: center;
}

h1 {
    text-align: center;
}
</style>
