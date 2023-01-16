---
title: Git 高级
description: Git 高级
---

# Git 高级

## 1. 忽略文件

有些时候，你必须把某些文件放到 Git 工作目录中，但又不能提交它们，比如保存了数据库密码的配置文件。

在 Git 工作区的根目录下创建一个 `.gitignore` 文件，然后把要忽略的文件名填进去，Git 就会自动忽略这些文件。

::: info 最佳实践

各种常用的 `.gitignore` 文件在 [GitHub](https://github.com/github/gitignore) 可以参考，可以根据工程性质直接复制它们。另外有很多工程初始化就加上了这个文件，例如 Vue 项目创建时。

:::

忽略文件的原则是：
1. 忽略操作系统自动生成的文件，比如缩略图等
2. 忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库，比如 Java 编译产生的 `.class` 文件
3. 忽略你自己的带有敏感信息的配置文件，比如存放口令的配置文件

可以使用通配符确定文件或文件夹的名称：

```gitignore
# Windows 下自动生成
Thumbs.db
ehthumbs.db
Desktop.ini

# Mac 下自动生成
.DS_Store

# 编译目标
dist

# 编译中间结果
*.py[cdo]

# 其他配置文件和二进制文件
*.so
*.egg
*.egg-info

# 秘钥等信息
secret_key.key
```

如果你的文件被 `.gitignore` 忽略了，可以使用下面的命令强制加入，这不是推荐做法：

```bash
git add -f Application.class
```

使用 `git check-ignore` 检查规则是否有错误：

```bash
git check-ignore
```

如果不希望使用强制添加，又希望有例外情况使用 `!` 加入即可：

```gitignore
!.gitignore
!Application.class
```

## 2. 放弃提交

放弃上一次提交：

```bash
git reset --soft HEAD^
# 或者可以
git reset --soft HEAD~1
```

放弃若干次提交，`~` 后的数字代表你想放弃的次数：

```bash
git reset --soft HEAD~2
```

::: details 放弃提交示例

放弃提交，保留 Add：

```bash
git reset --soft HEAD^
```

暂存修改：

```bash
git stash
```

签出历史提交：

```bash
git checkout <commit_id>
```

最后恢复工作进度：

```bash
git stash pop
```

:::

## 3. 高级克隆

### 3.1 指定克隆深度

`--depth` 选项用于指定克隆深度，即保留之前多少次提交，一般克隆项目只用于测试或部署而不需要开发，就不需要保留历史，因为克隆历史需要占用大量网络资源，也会占用不必要的空间：

```bash
git clone --depth 1 https://github.com/python/cpython.git
```

### 3.2 指定分支

`--branch` 用于指定分支，如果只需要单个分支也可以使用 `--single-branch` 选项，默认将选择 `origin` 分支。

## 4. 指定标签

可以给某个提交号加标签，即将 tag 绑定到 commit 上：

```bash
git tag -a v1.2 9fceb02 -m "Release v1.2"
```

打上 tag 后需要将 tag 上传到远程仓库：

```bash
git push origin v1.2
```

如果需要上传全部的 tag，可以一次性上传全部：

```bash
git push origin --tags
```
