# Vue 基础开发模板

基于 Vue3 的基础开发模板

## 模板内容

- [x] ESLint
- [x] Element-Plus
    - [x] Auto import on-demand(按需导入)
    - [x] i18n(国际化)
- [x] store： pinia
- [x] vue hooks： VueUse
- [x] axios
- [x] unplugin-vue-components(组件按需导入)
- [x] unplugin-auto-import(API 按需导入)
    - [x] 全局工具函数
    - [x] vue api
- [x] normalize.css
- [x] sass
  - [x] atomic css style

## 为什么使用 pnpm?

- [pnpm为什么在npm/cnpm/tnpm/yarn等包管理器中脱颖而出 - node.js开发环境搭建、包管理器npm等相关教程 - 周陆军的个人网站](https://www.zhoulujun.cn/html/webfront/ECMAScript/nodejs/8782.html)

- [为什么 vue 源码以及生态仓库要迁移 pnpm? - TeqNG](https://www.teqng.com/2021/12/07/%E4%B8%BA%E4%BB%80%E4%B9%88-vue-%E6%BA%90%E7%A0%81%E4%BB%A5%E5%8F%8A%E7%94%9F%E6%80%81%E4%BB%93%E5%BA%93%E8%A6%81%E8%BF%81%E7%A7%BB-pnpm/)

## Element-Plus


## ESLint

- [antfu/eslint-config: Anthony's ESLint config presets](https://github.com/antfu/eslint-config)

非常全面的 ESLint 规则，包括 Vue/React/TypeScript/Json/Yaml 等，而且开发体验非常舒适。

## unplugin-vue-components

- [antfu/unplugin-vue-components: 📲 On-demand components auto importing for Vue](https://github.com/antfu/unplugin-vue-components)

按需导入组件，有很多设置好的 preset，比如：ElementPlusResolver，可以按需导入 Element-Plus 组件，也可以自定义导入组件。

## unplugin-auto-import

- [antfu/unplugin-auto-import: Auto import APIs on-demand for Vite, Webpack and Rollup](https://github.com/antfu/unplugin-auto-import)

ref/reactive 等 API 不用导入，可以直接使用。

## VueUse

- [antfu/vueuse: Collection of essential Vue Composition Utilities for Vue 2 and 3](https://github.com/antfu/vueuse)

非常强大的 vue hooks 库，大幅提高开发效率。

## pinia

- [Home | Pinia](https://pinia.vuejs.org/)

轻量级的状态管理库，比起 vuex 更契合 vue3 的 composition API，且使用更为简洁。

## normalize.css
