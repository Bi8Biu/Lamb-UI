/*
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-03 17:28:38
 * @LastEditTime: 2022-03-03 17:35:16
 * @FilePath: \Lamb-UI\module\shims-vue.d.ts
 */
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const Component: DefineComponent<{}, {}, any>;
    export default Component;
}
