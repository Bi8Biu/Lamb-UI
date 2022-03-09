/*
 * @Explain: xxx
 * @Author: SuperLy
 * @LastEditors: SuperLy
 * @Date: 2022-03-03 19:51:31
 * @LastEditTime: 2022-03-09 16:16:27
 * @FilePath: \Lamb-UI for Docs\docs\.vitepress\config.js
 */
module.exports = {
    title: 'Lamb UI',
    description: '一套基于 Vue3.0 的 UI 桌面端组件库',
    lang: 'en-US',
    base: '/LambUI/',
    head: [
        ['link', {
            rel: 'icon',
            href: `/LambUI/favicon.ico`
        }]
    ],
    themeConfig: {
        // 展示搜索框
        algolia: {
            appKey: '',
            indexName: '',
            searchParameters: {
                faeFilters: ['tags:guide,api']
            }
        },
        nav: [
            {
                text: '介绍',
                link: '/document/about/',
            },
            {
                text: '组件',
                link: '/document/components/',
            },
            {
                text: 'GitHub',
                link: 'https://github.com/SuperLy1999/Lamb-UI',
            },
        ],
        sidebar: {
            '/': [
                {
                    text: "介绍",
                    link: '/document/about/'
                },
                {
                    text: "更新日志",
                    link: "/document/updateLog/"
                },
                {
                    text: "安装",
                    link: "/document/install/"
                },
                {
                    text: "快速上手",
                    link: "/document/quickLearn/"
                },
                {
                    text: "组件",
                    link: "/document/components/",
                    children: [
                        {
                            text: "Link 链接",
                            link: "/document/components/Link/"
                        },
                        {
                            text: "Button 按钮",
                            link: "/document/components/Button/"
                        },
                        {
                            text: "Selector 下拉列表",
                            link: "/document/components/Selector/"
                        },
                        {
                            text: "TreeMenu 无限级菜单",
                            link: "/document/components/TreeMenu/"
                        },
                        {
                            text: "Carousel 轮播图",
                            link: "/document/components/Carousel/"
                        },
                        {
                            text: "Stars 五星好评",
                            link: "/document/components/Stars/"
                        },
                        {
                            text: "Magnifier 放大镜",
                            link: "/document/components/Magnifier/"
                        },
                    ],
                }
            ],
        }
    },
    markdown: {
        config: (md) => {
            const {
                demoBlockPlugin
            } = require('vitepress-theme-demoblock')
            md.use(demoBlockPlugin)
        },
        lineNumbers: false
    }
}
