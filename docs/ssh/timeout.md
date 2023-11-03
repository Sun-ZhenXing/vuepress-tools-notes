# 超时配置

[[TOC]]

在命令行设置：

```bash
ssh -o ServerAliveInterval=10 -o ServerAliveCountMax=3 root@10.0.0.1
```

这表示服务器每 10 秒发送一次请求，如果连续 3 次请求都没有响应则断开连接。

或者在 `~/.ssh/config` 中设置：

```properties
Host *
  ServerAliveInterval 10
  ServerAliveCountMax 3
```

在全局设置 `/etc/ssh/ssh_config` 中设置：

```properties
Host *
  ServerAliveInterval 10
  ServerAliveCountMax 3
```

如果是服务端可以设置 `/etc/ssh/sshd_config` 文件。
