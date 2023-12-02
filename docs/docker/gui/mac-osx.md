# Docker 安装 Mac OS

[[TOC]]

## 1. 准备条件

下面的操作需要在 Linux 系统中进行，如果你的系统是 Windows，可以使用 WSL2 或者虚拟机。

由于 Mac OS 系统较大，安装需要足够大的空间，建议准备 30 GB 以上的空间用于存放软件。

> 在 WSL2 中，下面的准备可以跳过，目前 WSL2 已经默认支持了 X11 和 KVM。

需要支持硬件虚拟化（使用 KVM），查看：

```bash
grep -Eoc '(vmx|svm)' /proc/cpuinfo
```

安装 KVM 管理软件（以 Debian/Ubuntu 为例，其他系统参见 [GitHub 项目主页文档](https://github.com/sickcodes/Docker-OSX)）：

```bash
sudo apt install qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils virtinst virt-manager
```

查看 KVM 是否安装成功：

```bash
sudo systemctl is-active libvirtd
```

如果返回 `active`，则表示安装成功。

## 2. Docker 安装 Mac OS

可以先拉取合适的镜像：

```bash
docker pull sickcodes/docker-osx:latest
```

默认拉取的镜像是 Catalina (Mac OS 10.x)，当前可供选择的镜像如下：

| 镜像                            | 版本                   |
| ------------------------------- | ---------------------- |
| `sickcodes/docker-osx:big-sur`  | Big Sur (Mac OS 11.x)  |
| `sickcodes/docker-osx:monterey` | Monterey (Mac OS 12.x) |
| `sickcodes/docker-osx:ventura`  | Ventura (Mac OS 13.x)  |

详情见 [GitHub 项目主页](https://github.com/sickcodes/Docker-OSX)。

使用下面的命令可以启动 Mac OS：

```bash
docker run -it \
    --device /dev/kvm \
    --name docker-osx \
    -p 50922:10022 \
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    -e DISPLAY=$DISPLAY \
    sickcodes/docker-osx:latest
```

此时会弹出一个窗口，等待一段时间后，会进入 Mac OS 的安装界面。

## 3. 初始化 Mac OS

在 QEMU 中，使用 `Ctrl + Alt + F` 可以切换显示全屏。

第一次进入后需要使用 **Disk Utility** 对磁盘进行格式化，然后安装系统。

点击 **Erase** 进行格式化，将第一块磁盘（最大的一块）格式化为 **APFS**（或其他 Mac OS 支持的磁盘格式），然后退出磁盘工具，选择 **Reinstall macOS**，然后选择刚刚格式化的磁盘进行安装。

等待 20 分钟左右，就可以进入 Mac OS 系统了。

## 4. 安装软件

第一次使用开发工具，需要安装 Xcode Command Line Tools：

```bash
xcode-select --install
```

使用清华镜像安装 Oh My Zsh：[^1]

[^1]: ohmyzsh Git，清华大学开源软件镜像站，<https://mirrors.tuna.tsinghua.edu.cn/help/ohmyzsh.git/>

```bash
git clone https://mirrors.tuna.tsinghua.edu.cn/git/ohmyzsh.git
cd ohmyzsh/tools
REMOTE=https://mirrors.tuna.tsinghua.edu.cn/git/ohmyzsh.git sh install.sh
```

下面安装 Homebrew：[^2]

[^2]: Homebrew / Linuxbrew 镜像使用帮助，清华大学开源软件镜像站，<https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/>

在 `~/.zshrc` 中添加下面的代码：

```bash
export HOMEBREW_API_DOMAIN="https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles/api"
export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles"
export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"
export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git"
export HOMEBREW_PIP_INDEX_URL="https://pypi.tuna.tsinghua.edu.cn/simple"
```

然后刷新：

```bash
source ~/.zshrc
```

然后使用镜像安装 Homebrew：

```bash
git clone --depth=1 https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/install.git brew-install
/bin/bash brew-install/install.sh
rm -rf brew-install
```

执行更新，测试安装是否成功：

```bash
brew update
```
