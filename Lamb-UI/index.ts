/*
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-03 17:25:12
 * @LastEditTime: 2022-03-06 10:58:06
 * @FilePath: \Lamb-UI\Lamb-UI\index.ts
 */
// 引入组件
// import Button from './Button/index.vue';
import lbSelector from './Selector/index.vue';
import lbTreeMenu from './TreeMenu/index.vue';
import lbLink from './Link/index.vue';
import LbButton from './Button/index.vue';
import LbCarousel from './Carousel/index.vue';



// 所有组件
const Components = [lbSelector, lbTreeMenu, lbLink, LbButton, LbCarousel];

// 分别暴露组件，用于按需引入
export const Selector = {
    install: (Vue: any) => Vue.component(lbSelector.name, lbSelector)
};
export const TreeMenu = {
    install: (Vue: any) => Vue.component(lbTreeMenu.name, lbTreeMenu)
};

// 默认暴露，用于全部引入
export default {
    install: function (Vue: any): void {
        Components.forEach(component => {
            Vue.component(component.name, component)
        });
    }
}


