---
title: Vim
description: Vim
---

# Vim

[[TOC]]

## 编译安装 Vim

克隆仓库：

```bash
git clone https://github.com/vim/vim.git --depth 1
```

编译代码，并安装：

```bash
cd vim/src

# 如果之前编译过，清空构建
# make distclean

make
sudo make install
```
