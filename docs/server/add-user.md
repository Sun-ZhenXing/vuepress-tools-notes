# 添加用户

[[TOC]]

## 1. Debian/Ubuntu 系统

下面以添加 `admin` 用户为例。

```bash
# 在 root 用户下执行
useradd -r -m -s /bin/bash admin

# 如果没有提示设置密码，可以设置密码
passwd admin

# 添加到 sudo 组
usermod -aG sudo admin

# 切换到 admin 用户
su admin
```
