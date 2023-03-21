# 开始使用 GitHub Actions

## 1. Workflow

工作流是一个可配置的自动化过程，它将运行一个或多个作业。工作流由存储库的 YAML 文件定义，并在存储库中的事件触发时运行，也可以手动触发，或按定义的时间表触发。

我们可以创建 `.github/workflow/any_name.yml`，其中  `any_name.yml` 可以是任意名称的 YAML 文件，此文件指定了工作流要执行的任务。

## 2. 虚拟环境

GitHub 提供 Linux、Windows 和 MacOS 虚拟机来运行工作流，或者您可以在自己的数据中心或云基础架构中托管自己的自托管运行器。
