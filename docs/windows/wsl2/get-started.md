# 开始使用 WSL2

[[TOC]]

## 1. 准备

需要 CPU 开启虚拟化，如果没有开启，可以在 BIOS 中开启。可以搜索 *你的电脑型号 + BIOS* 来了解如何进入 BIOS 设置。

如果你是新版本 Windows，直接安装即可：

```bash
wsl --install
```

如果是旧版本，需要先启用 WSL2 功能，然后再安装。可以使用管理员运行下面的命令：

```bash
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

重启后安装，如果有其他问题可参考 [官方文档：手动安装 WSL](https://learn.microsoft.com/zh-cn/windows/wsl/install-manual)。

## 2. 安装

如果系统支持，可以尝试命令安装：

```bash
wsl --install
```

也可以到商店中下载任意一个 Linux 发行版即可，如 Ubuntu、Debian、Kali 等。

安装后运行即可，第一次运行可能会要求输入用户名和密码。

如果提示内核版本过低等问题，可以直接更新内核：

```bash
wsl --update
```

其他有关 WSL2 的问题可以参考帮助命令：

```bash
wsl --help
```

进入默认 Linux 系统：

```bash
wsl
```
