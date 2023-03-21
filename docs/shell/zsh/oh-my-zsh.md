# Oh-My-Zsh 指南

[[TOC]]

## 问题集合

更新失败：

```bash
omz update
```

出现无法连接 GitHub 的错误。原因是 [GitHub 已经不支持不安全的 Git 协议](https://github.blog/2021-09-01-improving-git-protocol-security-github/)，需要修改远程地址：

```bash
cd $ZSH
git remote set-url origin "https://github.com/ohmyzsh/ohmyzsh.git"
omz update
```
