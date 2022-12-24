---
title: Git gitmoji 表情
description: Git gitmoji 表情
---

# gitmoji

提交时使用表情是个好主意。访问 [gitmoji.dev](https://gitmoji.dev/) 来查看更多内容。

```bash
git commit -m ":bug: Fix ..."
```

这样我们可以看到 `🐛 Fix ...` 这样的信息。各种不同表情的含义可以直接在上面的网站上看到。

## 扩展功能

可以安装 [`gitmoji-cli`](https://github.com/carloscuesta/gitmoji-cli) 来尝试更花哨的功能：

```bash
npm i -g gitmoji-cli
```

如果需要引用该项目的所有表情，可以：

```bash
npm i gitmojis
```

这样可以得到包含所有表情信息的数组：

```js
import { gitmojis } from 'gitmojis'

console.log(gitmojis)

[
  {
    emoji: '🎨',
    entity: '&#x1f3a8;',
    code: ':art:',
    description: 'Improve structure / format of the code.',
    name: 'art',
    semver: null
  },
  // ...
]
```
