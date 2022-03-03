/*
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-02-28 17:22:16
 * @LastEditTime: 2022-03-01 21:02:05
 * @FilePath: \Lamb-UI\src\components\Selector\directives\focus.ts
 */
export default {
    created(el: HTMLElement) {
        const input = el.querySelector('input') as HTMLInputElement;
        const icon = el.querySelector('.input-icon') as HTMLElement;
        const placeholder = el.querySelector('.placeholder') as HTMLElement;
        const menu = el.querySelector('.selector-item-group') as HTMLElement;

        input.addEventListener("focus", function () {
            icon.className = 'iconfont icon-shangla input-icon';
            placeholder.style.display = 'none';
            menu.style.display = "block";
            icon.removeEventListener("click", getFocus);
        });
        input.addEventListener("blur", function () {
            setTimeout(() => {
                icon.className = 'iconfont icon-xiala input-icon';
                if (this.value.length === 0) {
                    placeholder.style.display = 'block';
                }
                menu.style.display = "none";
                icon.addEventListener("click", getFocus);
            }, 150);
        });
        function getFocus() {
            input.focus();
        }
        icon.addEventListener("click", getFocus);
        placeholder.addEventListener("click", getFocus);
    },
}