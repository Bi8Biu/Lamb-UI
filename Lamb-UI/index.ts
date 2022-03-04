/*
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-03 17:25:12
 * @LastEditTime: 2022-03-04 18:15:53
 * @FilePath: \Lamb-UI\Lamb-UI\index.ts
 */
// 引入组件
// import Button from './Button/index.vue';
import lbSelector from './Selector/index.vue';

// 所有组件
const Components = [lbSelector];

// 分别暴露组件，用于按需引入
export const Selector = {
    install: (Vue: any) => Vue.component(lbSelector.name, lbSelector)
};


// 默认暴露，用于全部引入
export default {
    install: function (Vue: any): void {
        Components.forEach(component => {
            Vue.component(component.name, component)
        });
    }
}


