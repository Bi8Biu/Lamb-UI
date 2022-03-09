var E=Object.defineProperty;var d=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var m=(e,s,a)=>s in e?E(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,_=(e,s)=>{for(var a in s||(s={}))B.call(s,a)&&m(e,a,s[a]);if(d)for(var a of d(s))v.call(s,a)&&m(e,a,s[a]);return e};import{_ as F,c as b,b as y,w as g,d as t,e as n,a as x,r as h,o as C,V as f}from"./app.ef179bae.js";const j={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:s,createElementVNode:a,openBlock:l,createElementBlock:p}=f,r={class:"myContainer"};function u(o,k){const c=e("lb-selector");return l(),p("div",null,[a("div",r,[s(c,{data:o.selectorData,selected:o.selected,placeholder:"\u8BF7\u9009\u62E9\u6846\u67B6",class:"selectorBox"},null,8,["data","selected"])])])}return _({render:u},{setup(){const o=[{id:1,value:"Vue.js"},{id:1,value:"React.js"},{id:1,value:"Angular.js"},{id:1,value:"jQuery.js"}];function k(c){alert(c)}return{selectorData:o,selected:k}}})}()}},T='{"title":"Selector \u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[],"relativePath":"document/components/Selector/index.md"}',D=t("br",null,null,-1),V=t("br",null,null,-1),A=t("h1",{id:"selector-\u9009\u62E9\u5668",tabindex:"-1"},[n("Selector \u9009\u62E9\u5668 "),t("a",{class:"header-anchor",href:"#selector-\u9009\u62E9\u5668","aria-hidden":"true"},"#")],-1),N=t("p",null,"\u5F53\u9009\u9879\u8FC7\u591A\u65F6\uFF0C\u4F7F\u7528\u4E0B\u62C9\u83DC\u5355\u5C55\u793A\u5E76\u9009\u62E9\u5185\u5BB9",-1),w=t("ul",null,[t("li",null,"\u53EF\u4EE5\u6839\u636E\u8F93\u5165\u6846\u5185\u5BB9\u8FDB\u884C\u9009\u9879\u7B5B\u9009"),t("li",null,"\u53EF\u4EE5\u4F7F\u7528\u4E0A\u4E0B\u65B9\u5411\u952E\u79FB\u52A8\u9009\u62E9\u5149\u6807"),t("li",null,"\u53EF\u4EE5\u4F7F\u7528\u56DE\u8F66\u9009\u5B9A")],-1),q=t("br",null,null,-1),S=t("br",null,null,-1),$=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("myContainer"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("lb-selector")]),n(` 
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("selectorData"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":selected"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("selected"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u8BF7\u9009\u62E9\u6846\u67B6"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("selectorBox"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("lb-selector")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token keyword"},"const"),n(" selectorData "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n(`
            `),t("span",{class:"token punctuation"},"{"),n(`
                `),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token literal-property property"},"value"),t("span",{class:"token operator"},":"),t("span",{class:"token string"},"'Vue.js'"),n(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token punctuation"},"{"),n(`
                `),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token literal-property property"},"value"),t("span",{class:"token operator"},":"),t("span",{class:"token string"},"'React.js'"),n(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token punctuation"},"{"),n(`
                `),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token literal-property property"},"value"),t("span",{class:"token operator"},":"),t("span",{class:"token string"},"'Angular.js'"),n(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token punctuation"},"{"),n(`
                `),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token literal-property property"},"value"),t("span",{class:"token operator"},":"),t("span",{class:"token string"},"'jQuery.js'"),n(`
            `),t("span",{class:"token punctuation"},"}"),n(`
        `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
        `),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token function"},"selected"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"value"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token function"},"alert"),t("span",{class:"token punctuation"},"("),n("value"),t("span",{class:"token punctuation"},")"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
        `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
            selectorData`),t("span",{class:"token punctuation"},","),n(`
            selected
        `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),n(),t("span",{class:"token attr-name"},"scoped"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".myContainer"),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),n("30px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token selector"},".myContainer .selectorBox"),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token property"},"position"),t("span",{class:"token punctuation"},":"),n("absolute"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token property"},"z-index"),t("span",{class:"token punctuation"},":"),n("2"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),Q=x('<br><br><h1 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h1><br><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th style="text-align:center;">\u662F\u5426\u5FC5\u987B</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>data</td><td>\u4E0B\u62C9\u5217\u8868\u9009\u9879</td><td>Array&lt;object&gt;</td><td style="text-align:center;">\u5FC5\u987B</td><td style="text-align:center;">\u2014</td></tr><tr><td>getValue</td><td>\u9009\u9879\u9009\u62E9\u56DE\u8C03\u51FD\u6570\uFF0C\u63A5\u6536\u9009\u62E9\u7684\u503C</td><td>Function</td><td style="text-align:center;">\u5FC5\u987B</td><td style="text-align:center;">\u2014</td></tr><tr><td>placeholder</td><td>\u8F93\u5165\u6846\u63D0\u793A\u6587\u672C</td><td>String</td><td style="text-align:center;">\u53EF\u9009</td><td style="text-align:center;">\u8BF7\u9009\u62E9</td></tr></tbody></table><br><br>',7);function R(e,s,a,l,p,r){const u=h("render-demo-0"),i=h("demo");return C(),b("div",null,[D,V,A,N,w,q,S,y(i,{sourceCode:`<template>
<div class="myContainer">
    <lb-selector 
    :data="selectorData"
    :selected="selected"
    placeholder="\u8BF7\u9009\u62E9\u6846\u67B6"
    class="selectorBox"
    ></lb-selector>
</div>
</template>

<script>
export default{
    setup(){
        const selectorData = [
            {
                id:1,
                value:'Vue.js'
            },
            {
                id:1,
                value:'React.js'
            },
            {
                id:1,
                value:'Angular.js'
            },
            {
                id:1,
                value:'jQuery.js'
            }
        ];
        function selected(value){
            alert(value)
        }
        return {
            selectorData,
            selected
        }
    }
}
<\/script>
<style scoped>
.myContainer{
    height:30px;
}
.myContainer .selectorBox{
    position:absolute;
    z-index:2;
}
</style>
`},{highlight:g(()=>[$]),default:g(()=>[y(u)]),_:1}),Q])}var G=F(j,[["render",R]]);export{T as __pageData,G as default};
