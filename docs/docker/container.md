# 容器技术

[[TOC]]

## 其他容器技术

- `chroot`：Linux 命令，将程序运行环境切换到指定目录
- [systemd-nspawn](https://www.linux.org/docs/man1/systemd-nspawn.html)：systemd 提供的容器技术，类似于 `chroot`，但是提供了更多的功能

下面我们从 [清华 Ubuntu Base 镜像](https://mirrors.tuna.tsinghua.edu.cn/ubuntu-cdimage/ubuntu-base/releases/) 下载官方的 Ubuntu Base 镜像，然后使用 `systemd-nspawn` 进行容器化。

## Android 容器/虚拟化

- Anbox：基于 Linux 的安卓容器
- Waydroid：安卓容器
- Android-x86：运行于 x86 架构的安卓
- AVD (Android Virtual Device)：Android Studio 附带模拟器，基于 qemu
- qemu：开源全平台虚拟化解决方案
- Bliss OS：基于 Android-x86 的安卓系统
- ARChon：在 Chrome 中直接运行 apk

参考文章：

- [Linux 开源 Android 手游模拟器解决方案：Android-x86 QEMU 虚拟机 + QtScrcpy](https://zhuanlan.zhihu.com/p/578600170)
