# winget 支持安装软件列表

[[TOC]]

## 编程语言

```bash
# Oracle JDK / OpenJDK
winget install Oracle.JDK.17
# Python 3.11
winget install Python.Python.3.11
# GoLang
winget install GoLang.Go
# Rust
winget install Rustlang.Rust.MSVC
# Rustup
winget install Rustlang.Rustup
# NVM (Node.js Version Manager)
winget install CoreyButler.NVMforWindows
# Deno
winget install DenoLand.Deno
# Ruby 3.2
winget install RubyInstallerTeam.Ruby.3.2
# Lua 5.4
winget install DEVCOM.Lua
```

> [!TIP]
> 目前 MinGW-w64 [不支持使用 winget 安装](https://github.com/microsoft/winget-pkgs/issues/122962)，Chocolatey 可以安装 MinGW，Chocolatey 安装方法见下文。
>
> ```bash
> choco install mingw --accept-license -y
> ```

## 命令行工具

```bash
# Chocolatey
winget install Chocolatey.Chocolatey
# 7z
winget install 7zip.7zip
# Git
winget install Git.Git
# CMake
winget install Kitware.CMake
```

## 开发软件

```bash
# Docker Desktop
winget install Docker.DockerDesktop
# Windows Terminal
winget install Microsoft.WindowsTerminal
# Visual Studio Code
winget install Microsoft.VisualStudioCode
# Visual Studio 2022
winget install Microsoft.VisualStudio.2022.Community
# Everything
winget install voidtools.Everything
# Apifox
winget install Apifox.Apifox
# DevToys
winget install 9PGCV4V3BK4W
# Office 365
winget install 9WZDNCRD29V9
# Navicat
winget install PremiumSoft.NavicatPremium
# JetBrains IDEA
winget install JetBrains.IntelliJIDEA.Ultimate
# JetBrains WebStorm
winget install JetBrains.WebStorm
```

## 计算机管理工具

```bash
# PowerToys
winget install Microsoft.PowerToys
# 微软电脑管家
winget install 9PM860492SZD
# TreeSize Free
winget install JAMSoftware.TreeSize.Free
```

## 浏览器

```bash
# Google Chrome
winget install Google.Chrome
# Mozilla Firefox
winget install Mozilla.Firefox
# Microsoft Edge
winget install Microsoft.Edge
# Microsoft EdgeDriver，用于 Selenium 等的测试
winget install Microsoft.EdgeDriver
# Chromium
winget install Hibbiki.Chromium
# 夸克浏览器
winget install Alibaba.Quark
```

## 常用软件

```bash
# 微信
winget install Tencent.WeChat
# 微信输入法
winget install Tencent.WeType
# 企业微信
winget install Tencent.WeCom
# 微信开发者工具
winget install Tencent.WeixinDevTools
# TIM
winget install Tencent.TIM
# 腾讯文档
winget install Tencent.TencentDocs
# 飞书
winget install ByteDance.Feishu
# 抖音
winget install ByteDance.Douyin
# 西瓜视频
winget install ByteDance.XiguaVideo
# 剪映专业版
winget install ByteDance.JianyingPro
# 金山文档
winget install Kingsoft.KDocs
# 石墨文档
winget install shimo.shimo
# 腾讯会议
winget install Tencent.TencentMeeting
```

## 爬虫工具

```bash
winget install Telerik.Fiddler.Classic
```
