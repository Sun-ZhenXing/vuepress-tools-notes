# 示例：Qt Designer

[[TOC]]

## 1. 安装 Qt Designer

本文在 Docker 内安装 Qt Designer，以便在 Docker 内开发 Qt 6 应用程序。

```bash
docker run -it \
  -v /etc/localtime:/etc/localtime:ro \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  -e DISPLAY=unix$DISPLAY \
  --name py-ui \
  python:3.10-bookworm \
  /bin/bash
```

执行上述命令将创建一个交互式终端，下面在此容器的终端内执行。

```bash
# 更新源，可选
sed -i 's/deb.debian.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apt/sources.list.d/debian.sources

# 更新软件包
apt update
apt upgrade -y

# 更新 pip 和 pypi 源，可选
python -m pip install -i https://pypi.tuna.tsinghua.edu.cn/simple/ --upgrade pip
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple/

# 安装 PySide6
pip install PySide6

# 安装 Qt Designer
apt install designer-qt6 -y
apt install libxcb-cursor0 -y

# 运行 Qt Designer
pyside6-designer
```

此时应该可以看到 Qt Designer 的界面了。

如果出现错误，可以尝试调试 Qt Designer：

```bash
QT_DEBUG_PLUGINS=1 pyside6-designer
```

如果出现库缺失，尝试安装缺失的库即可。

## 2. 测试 PySide6 程序

现在创建 `main.py`：

```python
import sys

from PySide6.QtWidgets import QApplication, QMainWindow

if __name__ == '__main__':
    app = QApplication(sys.argv)

    window = QMainWindow()
    window.show()

    sys.exit(app.exec())
```

然后运行：

```bash
python main.py
```

这时 Docker 内的 Qt 窗体已经能正确展示在桌面上了。
