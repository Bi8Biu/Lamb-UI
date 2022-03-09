/*
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-03 19:51:31
 * @LastEditTime: 2022-03-03 20:25:54
 * @FilePath: \Lamb-UI for Docs\docs\.vitepress\theme\index.js
 */

// 使用vitepress-theme-demoblock主题，并注册组件(包含主题中默认的组件)。
import Theme from 'vitepress/dist/client/theme-default'
// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 插件的主题
import { registerComponents } from './register-components.js'

export default {
    ...Theme,
    enhanceApp({ app }) {
        registerComponents(app)
    }
}
