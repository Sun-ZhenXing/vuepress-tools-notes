# 迁移 Docker 的位置

如果你需要在不同的盘或路径中迁移 WSL2 内的 Docker，你可以参考下面的步骤。

退出 Docker Desktop，并确保所有 WSL2 容器已经关闭：

```bash
wsl --list -v
```

创建文件夹 `D:\wsl\docker-data\` 作为存放导出文件的路径，然后导出容器 `docker-desktop-data`：

```bash
wsl --export docker-desktop-data "D:\wsl\docker-data\docker-desktop-data.tar"
```

注销容器：

```bash
wsl --unregister docker-desktop-data
```

导入容器到其他位置（例如 `D:\wsl\docker\docker-desktop-data`）：

```bash
wsl --import docker-desktop-data D:\wsl\docker\docker-desktop-data "D:\wsl\docker-data\docker-desktop-data.tar" --version 2
```

同理迁移另一个容器：

```bash
wsl --export docker-desktop "D:\wsl\docker-data\docker-desktop.tar"
wsl --unregister docker-desktop
wsl --import docker-desktop D:\wsl\docker\docker-desktop "D:\wsl\docker-data\docker-desktop.tar" --version 2
```

现在启动 Docker Desktop 即可使用。
