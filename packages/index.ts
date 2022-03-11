/*
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-03 17:25:12
 * @LastEditTime: 2022-03-11 10:01:48
 * @FilePath: \soul-plus-master\packages\index.ts
 */

// 引入组件
import lbSelector from './Selector/index.vue';
import lbTreeMenu from './TreeMenu/index.vue';
import lbLink from './Link/index.vue';
import lbButton from './Button/index.vue';
import lbCarousel from './Carousel/index.vue';
import lbStars from './Stars/index.vue';
import lbMagnifier from './Magnifier/index.vue';


// 所有组件
const Components = [lbSelector, lbTreeMenu, lbLink, lbButton, lbCarousel, lbStars, lbMagnifier];
// 注册所有组件
const install = function (App) {
    Components.forEach(component => {
        App.component(component.name, component)
    });
}
// @ts-ignore
if (typeof window.Vue !== 'undefined') { // 这个判断条件这样写是因为Vue只有用script标签的方式导入才会挂载到window上，import的方式导入是挂载不到window上的，而是在当前的模块内
    // 当前全局window下有Vue实例的话，直接调用install把Vue传进去
    // 全局直接通过script引用的方式会默认调用install方法
    // @ts-ignore
    install(Vue)
}



// 默认暴露，用于完整引入
export default {
    install
}


