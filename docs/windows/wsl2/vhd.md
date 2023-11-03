# 虚拟磁盘管理

本文全部基于 `.vhdx` 文件。

[[TOC]]

## 1. 压缩虚拟磁盘

虚拟磁盘文件不会自动释放空间，如果你删除了很多文件，则需要手动压缩磁盘文件。

`.vhdx` 文件压缩：

```bash
# 关闭 WSL
wsl --shutdown

# 磁盘管理
diskpart
```

在磁盘管理中进行如下操作：

```bash
# 选择磁盘文件
select vdisk file="...\ext4.vhdx"

# 压缩虚拟磁盘文件
compact vdisk

# 卸载虚拟磁盘，如出错可忽略
detach vdisk

# 退出
exit
```

## 2. 卸载虚拟磁盘

`.vhdx` 文件卸载：

1. 设备管理器：卸载虚拟磁盘驱动器
2. 磁盘管理器：刷新/分离 VHD
