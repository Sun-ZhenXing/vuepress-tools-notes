# 开始使用 WSL2

[[TOC]]

## 1. 准备

需要 CPU 开启虚拟化，如果没有开启，可以在 BIOS 中开启。可以搜索 *你的电脑型号 + BIOS* 来了解如何进入 BIOS 设置。

如果你是新版本 Windows，直接安装即可：

```bash
wsl --install
```

需要先更新内核才能使用，这将直接将 WSL2 升级到最新版本：

```bash
wsl --update
```

如果是旧版本，需要先启用 WSL2 功能，然后再安装。可以使用管理员运行下面的命令：

```bash
dism /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
dism /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

重启后安装，如果有其他问题可参考 [官方文档：手动安装 WSL](https://learn.microsoft.com/zh-cn/windows/wsl/install-manual)。

## 2. 安装

如果系统已经安装了 WSL2，可以尝试命令安装 Linux 发行版，默认为 Ubuntu：

```bash
wsl --install
```

如果提示内核版本过低等问题，可以直接更新内核：

```bash
wsl --update
```

也可以到商店中下载任意一个 Linux 发行版即可，如 Ubuntu、Debian、Kali 等。

例如下载 Ubuntu 22.04 LTS：

```bash
wsl --install Ubuntu-22.04
```

安装后运行即可，第一次运行可能会要求输入用户名和密码，确保用户名只能是小写英文加数字，密码输入后无反馈，输入两遍确认。

其他有关 WSL2 的问题可以参考帮助命令：

```bash
wsl --help
```

进入默认 Linux 系统：

```bash
wsl
```

也可以设置其他系统为默认系统：

```bash
wsl --set-default Ubuntu-22.04
```
