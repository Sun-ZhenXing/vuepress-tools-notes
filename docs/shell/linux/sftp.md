# SFTP

[[TOC]]

## 1. SFTP 简介

*@TODO* 在计算机网络中增加 *应用层协议 FTP*，然后引用至此。

SFTP 是 Secure File Transfer Protocol 的缩写，也就是安全的文件传输协议。除了 SFTP 外还有一种安全的 FTP 协议 FTPS，这是 FTP 协议的衍生，必须要安装指定的客户端和服务端软件才能传输。

如果说 FTPS 是在 FTP 协议上增加了一层 SSL，那么 SFTP 就是是基于 SSH 的协议，与 FTP 完全不同。SFTP 只需要安装 SSH 客户端即可传输，且只单个连接并且只占用 SSH 数据通道，不需要其他端口。[^1]

[^1]: 科普！一文详解 FTP、FTPS 与 SFTP 的原理，知乎，<https://zhuanlan.zhihu.com/p/266255133>

## 2. 使用 SFTP 命令

如果你能够使用 SSH 连接一台主机，那么你可以使用 SFTP 命令来管理主机上的文件了。

`sftp` 命令的语法如下：

```bash
sftp user_name@remote_server_address[:path]
```

其中有一些常用的附加参数：

- `-B`: buffer_size，制定传输 buffer 的大小，更大的 buffer 会消耗更多的内存，默认为 32768 bytes
- `-P`: port，制定连接的端口号
- `-R`: num_requests，制定一次连接的请求数，可以略微提升传输速度，但是会增加内存的使用量

和 Shell 类似，SFTP 解释器中预置了常用的命令，但是只有基本的文件管理命令。

输入 `?` 或 `help` 查看帮助命令。

常见命令如下，不过注意这些命令并不是 Shell 命令，和 Shell 命令不完全一致：

| 命令                            | 功能                       |
| ------------------------------- | -------------------------- |
| `bye`                           | 退出                       |
| `cd path`                       | 进入目录                   |
| `chgrp grp path`                | 修改目录 `path` 组为 `grp` |
| `chmod mode path`               | 修改权限                   |
| `chown own path`                | 修改所有者                 |
| `df [-hi] [path]`               | 查看磁盘或目录信息         |
| `exit`                          | 退出                       |
| `get [-afPpRr] remote [local]`  | 下载文件                   |
| `reget [-fPpRr] remote [local]` | 从断点继续下载文件         |
| `reput [-fPpRr] [local] remote` | 从断点继续上传文件         |
| `help`                          | 帮助                       |
| `lcd path`                      | 切换本地目录               |
| `lls [ls-options [path]]`       | 列出本地目录的内容         |
| `lmkdir path`                   | 本地创建文件夹             |
| `ln [-s] oldpath newpath`       | 链接文件                   |
| `lpwd`                          | 查看当前本地目录位置       |
| `ls [-1afhlnrSt] [path]`        | 列出目录内容               |
| `lumask umask`                  | 设置本地权限掩码           |
| `mkdir path`                    | 创建文件夹                 |
| `progress`                      | 切换进度表的显示           |
| `put [-afPpRr] local [remote]`  | 上传文件                   |
| `pwd`                           | 查看当前目录位置           |
| `quit`                          | 退出                       |
| `rename oldpath newpath`        | 重命名文件                 |
| `rm path`                       | 删除路径                   |
| `rmdir path`                    | 删除目录                   |
| `symlink oldpath newpath`       | 符号链接                   |
| `version`                       | 查看 SFTP版本              |
| `!command`                      | 执行一个命令               |
| `!`                             | 切换到本地终端             |
| `?`                             | 帮助                       |

::: tip SFTP 定制脚本

如果需要自动化地连接 SFTP，建议使用 Python 生态下的 [Paramiko](https://blog.alexsun.top/vuepress-python-notes/pypi-package/utils/paramiko.html) 等第三方库来实现。

:::
