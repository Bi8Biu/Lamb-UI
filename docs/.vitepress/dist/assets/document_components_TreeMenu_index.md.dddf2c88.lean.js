var m=Object.defineProperty;var r=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var i=(e,s,a)=>s in e?m(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,k=(e,s)=>{for(var a in s||(s={}))D.call(s,a)&&i(e,a,s[a]);if(r)for(var a of r(s))g.call(s,a)&&i(e,a,s[a]);return e};import{_,c as E,b as d,w as h,d as n,e as t,a as b,r as y,o as F,V as x}from"./app.ef179bae.js";const B={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:s,openBlock:a,createElementBlock:c}=x;function l(o,u){const p=e("lb-treeMenu");return a(),c("div",null,[s(p,{menu:o.menuData,choose:o.chooseMenu,class:"selectorBox"},null,8,["menu","choose"])])}return k({render:l},{setup(){const o=[{id:"1",title:"\u83DC\u53551",children:[{id:"1.1",title:"\u83DC\u53551-1"},{id:"1.2",title:"\u83DC\u53551-2"}]},{id:"2",title:"\u83DC\u53552",children:[{id:"2.1",title:"\u83DC\u53552-1"},{id:"2.2",title:"\u83DC\u53552-2",children:[{id:"2.2.1",title:"\u83DC\u53552-2-1"}]}]},{id:"3",title:"\u83DC\u53553"},{id:"4",title:"\u83DC\u53554"}];function u(p){alert(p.title)}return{menuData:o,chooseMenu:u}}})}()}},S='{"title":"TreeMenu \u65E0\u9650\u7EA7\u83DC\u5355","description":"","frontmatter":{},"headers":[],"relativePath":"document/components/TreeMenu/index.md"}',f=n("br",null,null,-1),M=n("br",null,null,-1),A=n("h1",{id:"treemenu-\u65E0\u9650\u7EA7\u83DC\u5355",tabindex:"-1"},[t("TreeMenu \u65E0\u9650\u7EA7\u83DC\u5355 "),n("a",{class:"header-anchor",href:"#treemenu-\u65E0\u9650\u7EA7\u83DC\u5355","aria-hidden":"true"},"#")],-1),v=n("p",null,"\u5F53\u83DC\u5355\u9879\u4E0E\u83DC\u5355\u5B50\u9879\u6570\u91CF\u4E0D\u786E\u5B9A\u65F6\uFF0C\u4F7F\u7528\u65E0\u9650\u7EA7\u83DC\u5355\u5C55\u793A\u4E0E\u9009\u62E9\u83DC\u5355\u9879",-1),V=n("ul",null,[n("li",null,"\u5C42\u7EA7\u7ED3\u6784\u5C55\u793A\u4FE1\u606F"),n("li",null,"\u4F7F\u7528\u9012\u5F52\u601D\u60F3\uFF0C\u53EF\u5C55\u793A\u65E0\u9650\u7EA7")],-1),w=n("br",null,null,-1),N=n("br",null,null,-1),T=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("lb-treeMenu")]),t(` 
    `),n("span",{class:"token attr-name"},":menu"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("menuData"),n("span",{class:"token punctuation"},'"')]),t(` 
    `),n("span",{class:"token attr-name"},":choose"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("chooseMenu"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("selectorBox"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("lb-treeMenu")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" menuData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"1"'),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"\u83DC\u53551"'),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                  `),n("span",{class:"token punctuation"},"{"),t(`
                    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"1.1"'),n("span",{class:"token punctuation"},","),t(`
                    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"\u83DC\u53551-1"'),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token punctuation"},"{"),t(`
                    `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"1.2"'),n("span",{class:"token punctuation"},","),t(`
                    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"\u83DC\u53551-2"'),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"\u83DC\u53552"'),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"2.1"'),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"\u83DC\u53552-1"'),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"2.2"'),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"\u83DC\u53552-2"'),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                      `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"2.2.1"'),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"\u83DC\u53552-2-1"'),n("span",{class:"token punctuation"},","),t(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"3"'),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"\u83DC\u53553"'),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"4"'),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"\u83DC\u53554"'),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

        `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"chooseMenu"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),t("item"),n("span",{class:"token punctuation"},"."),t("title"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
        
        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
            menuData`),n("span",{class:"token punctuation"},","),t(`
            chooseMenu
        `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`)])])],-1),$=b('<br><br><h1 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h1><br><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u662F\u5426\u5FC5\u987B</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>menu</td><td>\u83DC\u5355\u6570\u636E</td><td style="text-align:center;">Array&lt;object&gt;</td><td style="text-align:center;">\u5FC5\u987B</td><td style="text-align:center;">\u2014</td></tr><tr><td>choose</td><td>\u70B9\u51FB\u83DC\u5355\u9879\u56DE\u8C03\uFF0C\u63A5\u6536\u83DC\u5355\u9879\u5BF9\u8C61</td><td style="text-align:center;">Function</td><td style="text-align:center;">\u5FC5\u987B</td><td style="text-align:center;">\u2014</td></tr></tbody></table><br><br>',7);function q(e,s,a,c,l,C){const o=y("render-demo-0"),u=y("demo");return F(),E("div",null,[f,M,A,v,V,w,N,d(u,{sourceCode:`<template>
    <lb-treeMenu 
    :menu="menuData" 
    :choose="chooseMenu"
    class="selectorBox"
    >
    </lb-treeMenu>
</template>

<script>
export default{
    setup(){
        const menuData = [
            {
                id: "1",
                title: "\u83DC\u53551",
                children: [
                  {
                    id: "1.1",
                    title: "\u83DC\u53551-1",
                  },
                  {
                    id: "1.2",
                    title: "\u83DC\u53551-2",
                  },
                ],
            },
            {
              id: "2",
              title: "\u83DC\u53552",
              children: [
                {
                  id: "2.1",
                  title: "\u83DC\u53552-1",
                },
                {
                  id: "2.2",
                  title: "\u83DC\u53552-2",
                  children: [
                    {
                      id: "2.2.1",
                      title: "\u83DC\u53552-2-1",
                    },
                  ],
                },
              ],
            },
          {
            id: "3",
            title: "\u83DC\u53553",
          },
          {
            id: "4",
            title: "\u83DC\u53554",
          },
        ];

        function chooseMenu(item) {
        alert(item.title);
        };
        
        return {
            menuData,
            chooseMenu
        }
    }
}
<\/script>

`},{highlight:h(()=>[T]),default:h(()=>[d(o)]),_:1}),$])}var z=_(B,[["render",q]]);export{S as __pageData,z as default};
