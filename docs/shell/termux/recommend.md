# 推荐阅读

[Termux 高级终端安装使用配置教程](https://www.sqlsec.com/2018/05/termux.html)，如果需要打印此文章可以将下面的 JS 脚本注入页面，用于优化样式。

::: details 打印样式优化

```js
document.head.insertAdjacentHTML('beforeend', `<style>
@media print {
    #page-header,
    #aside-content,
    #post-comment,
    #rightside,
    #footer,
    div.tag_share,
    div.post-reward,
    #pagination,
    div.relatedPosts,
    div.post-copyright,
    #post > hr {
        display: none !important;
    }

    figure {
        page-break-inside: avoid;
    }

    #post {
        width: 100%;
    }

    #content-inner {
        display: block;
        margin: 0;
        max-width: 100%;
        padding: 0;
    }

    code[class*="language-"] {
        white-space: pre-wrap;
    }
}
</style>`);
```

:::
