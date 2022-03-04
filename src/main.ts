/*
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-02-28 20:48:08
 * @LastEditTime: 2022-03-04 18:19:57
 * @FilePath: \Lamb-UI\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import LambUI from '../Lamb-UI'
// import { Selector } from '../Lamb-UI'

const app = createApp(App)
app.use(store);
app.use(LambUI);
app.mount('#app');