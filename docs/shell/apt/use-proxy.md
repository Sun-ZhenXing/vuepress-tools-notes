# apt 使用代理

::: warning

*@TODO* 需要更多的用法以解决各种不适用情况。

:::

## apt 代理

一次性使用：

```bash
sudo apt -o Acquire::socks::proxy="socks5://127.0.0.1:10808/" update
```

保存配置到文件：

```properties
Acquire::socks::proxy "socks5://127.0.0.1:1080/";
```

可保存到 `/etc/apt/apt.conf.d/` 下的任意文件即可。
