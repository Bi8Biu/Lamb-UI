/*
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-02-28 20:48:08
 * @LastEditTime: 2022-03-06 22:13:06
 * @FilePath: \Lamb-UI\src\shims-vue.d.ts
 */
/* eslint-disable */
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
declare module '*.js'
