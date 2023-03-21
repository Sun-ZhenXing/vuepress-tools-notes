# 云服务器创建 swap 分区

[[TOC]]

## 1. Debian/Ubuntu 系统

许多云服务器提供商默认不提供 swap 分区，需要自行创建。

```bash
sudo su

dd if=/dev/zero of=/var/swap bs=1024 count=4096000
mkswap /var/swap
chmod 0600 /var/swap
swapon /var/swap
echo "/var/swap swap swap defaults 0 0" >> /etc/fstab
```
