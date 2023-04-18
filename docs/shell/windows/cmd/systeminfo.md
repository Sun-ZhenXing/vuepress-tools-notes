# 系统信息

[[TOC]]

## 1. 查看系统概述信息

```bash
systeminfo
```

可以输出为表格、列表或者 CSV 的格式，为了程序读取方便，可以使用 CSV 格式输出。

为了防止乱码，可以先设置编码为 UTF-8。

```bash
chcp 65001
systeminfo /fo csv > systeminfo.csv
```

## 2. 查看系统详细信息

::: warning 过时信息

在 Windows 10 21H1 及以后的系统中，`wmic` 被声明为过时的命令，不再推荐使用。可以使用 PowerShell for WMI 替代。

查看 PowerShell for WMI 的可用命令：

```powershell
Get-Command -Noun WMI*
```

:::

`wmic` 是 Windows Management Instrumentation Command-line 的缩写，是一个命令行工具，可以用来获取系统信息。`wmic` 不支持 UTF-8 编码。

下面是一些常用的命令。

获取系统信息：

```bash
wmic os
```

获取 CPU 核心数：

```bash
wmic cpu get NumberOfCores
```

获取 CPU 逻辑处理器数：

```bash
wmic cpu get NumberOfLogicalProcessors
```

获取内存信息：

```bash
wmic memorychip get capacity
```
