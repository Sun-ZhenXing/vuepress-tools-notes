# 使用 GPU 加速 FFmpeg 视频处理

[[TOC]]

## 1. 可用的加速设备

使用下面的命令查看计算机上可用的加速设备：

```bash
ffmpeg -hwaccels
```

常见的加速设备：

| 设备名称  | 说明                                                 |
| --------- | ---------------------------------------------------- |
| `cuda`    | NVIDIA GPU 支持的 CUDA                               |
| `dxva2`   | Windows 支持的 DirectX Video Acceleration 2.0        |
| `d3d11va` | Windows 支持的 Direct 3D 11 Video API                |
| `qsv`     | Intel GPU 支持的快速视频同步技术（Quick Sync Video） |
| `opencl`  | 异构平台计算框架 OpenCL                              |
| `vulkan`  | 跨平台图形接口 Vulkan                                |
