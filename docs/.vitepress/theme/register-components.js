/*
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-03 20:27:04
 * @LastEditTime: 2022-03-09 16:07:56
 * @FilePath: \Lamb-UI for Docs\docs\.vitepress\theme\register-components.js
 */
import Link from '../components/Link/index.vue'
import Selector from '../components/Selector/index.vue'
import TreeMenu from '../components/TreeMenu/index.vue'
import Button from '../components/Button/index.vue'
import Carousel from '../components/Carousel/index.vue'
import Stars from '../components/Stars/index.vue'
import Magnifier from '../components/Magnifier/index.vue'




import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
export function registerComponents(app) {
    app.component(Link.name, Link)
    app.component(Selector.name, Selector)
    app.component(Button.name, Button)
    app.component(TreeMenu.name, TreeMenu)
    app.component(Carousel.name, Carousel)
    app.component(Stars.name, Stars)
    app.component(Magnifier.name, Magnifier)

    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
}
