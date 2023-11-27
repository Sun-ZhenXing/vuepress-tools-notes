# 创建 swap 分区

[[TOC]]

许多云服务器提供商默认不提供 swap 分区，需要自行创建。

```bash
sudo su

# 4096000 = 4G，如果需要可以修改为其他数值
dd if=/dev/zero of=/var/swap bs=1024 count=4096000
mkswap /var/swap
chmod 0600 /var/swap
swapon /var/swap
echo "/var/swap swap swap defaults 0 0" >> /etc/fstab
```
