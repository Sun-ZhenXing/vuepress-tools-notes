# Windows 下的特殊路径

[[TOC]]

## 1. Shell 快捷方式

Shell 快捷方式定义在注册表 `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\FolderDescriptions\` 下，用于将一些特定文件夹的路径映射到一个特定的描述符上，这样可以通过 Shell 快捷方式来访问这些文件夹。

Shell 快捷方式的注册表项的 `Name` 字段表示该快捷方式的描述符，使用 `shell:Name` 的方式可以访问该快捷方式对应的文件夹。

常见的 Shell 快捷方式如下。

| 表示                          | 真实路径                                                                              | 说明                     |
| ----------------------------- | ------------------------------------------------------------------------------------- | ------------------------ |
| `shell:Fonts`                 | `C:\Windows\Fonts`                                                                    | 字体文件夹               |
| `shell:Common Desktop`        | `C:\Users\Public\Desktop`                                                             | 公共桌面                 |
| `shell:AccountPictures`       | `%APPDATA%\Microsoft\Windows\AccountPictures`                                         | 用户头像                 |
| `shell:AddNewProgramsFolder`  | `控制面板\所有控制面板项\获得程序`                                                    | 获得程序                 |
| `shell:Administrative Tools`  | `%APPDATA%\Microsoft\Windows\Start Menu\Programs\Administrative Tools`                | Windows 管理工具         |
| `shell:AppData`               | `%APPDATA%`                                                                           | App 数据保存位置         |
| `shell:Application Shortcuts` | `%LOCALAPPDATA%\Microsoft\Windows\Application Shortcuts`                              | 应用程序快捷方式         |
| `shell:AppsFolder`            | -                                                                                     | 全部应用                 |
| `shell:AppUpdatesFolder`      | -                                                                                     | 已安装更新               |
| `shell:Cache`                 | `%USERPROFILE%\AppData\Local\Microsoft\Windows\INetCache`                             | IE 缓存文件夹            |
| `shell:Games`                 |                                                                                       | 游戏                     |
| `shell:History`               | `%USERPROFILE%\AppData\Local\Microsoft\Windows\History`                               | IE 浏览历史              |
| `shell:HomeGroupFolder`       |                                                                                       | 家庭组                   |
| `shell:ImplicitAppShortcuts`  | `%APPDATA%\Microsoft\Internet Explorer\Quick Launch\User Pinned\ImplicitAppShortcuts` |                          |
| `shell:Libraries`             |                                                                                       | Windows 库               |
| `shell:Links`                 | `%USERPROFILE%\Links`                                                                 | 链接文件夹               |
| `shell:Local AppData`         | `%USERPROFILE%\AppData\Local`                                                         |                          |
| `shell:LocalAppDataLow`       | `%USERPROFILE%\AppData\LocalLow`                                                      |                          |
| `shell:MusicLibrary`          |                                                                                       | 音乐库                   |
| `shell:My Music`              |                                                                                       | 音乐                     |
| `shell:My Pictures`           |                                                                                       | 图片                     |
| `shell:My Video`              |                                                                                       | 视频                     |
| `shell:NetHood`               | `%APPDATA%\Microsoft\Windows\Network Shortcuts`                                       |                          |
| `shell:NetworkPlacesFolder`   |                                                                                       | 网络                     |
| `shell:Personal`              |                                                                                       | 文档                     |
| `shell:PicturesLibrary`       |                                                                                       | 图片库                   |
| `shell:PrintersFolder`        | `所有控制面板项\打印机`                                                               |                          |
| `shell:PrintHood`             | `%APPDATA%\Microsoft\Windows\Printer Shortcuts`                                       |                          |
| `shell:Profile`               |                                                                                       | 用户配置文件夹           |
| `shell:ProgramFiles`          | `C:\Program Files`                                                                    |                          |
| `shell:ProgramFilesCommon`    | `C:\Program Files\Common Files`                                                       |                          |
| `shell:ProgramFilesCommonX86` | `C:\Program Files (x86)\Common Files`                                                 |                          |
| `shell:ProgramFilesX86`       | `C:\Program Files (x86)`                                                              |                          |
| `shell:Programs`              | `%APPDATA%\Microsoft\Windows\Start Menu\Programs`                                     |                          |
| `shell:Public`                | `C:\Users\Public`                                                                     | 公共                     |
| `shell:PublicAccountPictures` | `C:\Users\Public\AccountPictures`                                                     | 公共用户头像             |
| `shell:PublicGameTasks`       | `C:\ProgramData\Microsoft\Windows\GameExplorer`                                       | 公共游戏                 |
| `shell:PublicLibraries`       | `C:\Users\Public\Libraries`                                                           | 公共库                   |
| `shell:Quick Launch`          | `%APPDATA%\Microsoft\Internet Explorer\Quick Launch`                                  | 快速启动                 |
| `shell:Recent`                | `%APPDATA%\Microsoft\Windows\Recent`                                                  | 最近使用的项目           |
| `shell:RecycleBinFolder`      |                                                                                       | 回收站                   |
| `shell:ResourceDir`           | `C:\Windows\Resources`                                                                |                          |
| `shell:Ringtones`             | `%USERPROFILE%\AppData\Local\Microsoft\Windows\Ringtones`                             |                          |
| `shell:Roaming Tiles`         | `%USERPROFILE%\AppData\Local\Microsoft\Windows\RoamingTiles`                          |                          |
| `shell:SavedGames`            |                                                                                       | 保存的游戏               |
| `shell:Searches`              |                                                                                       | 保存的搜索               |
| `shell:SearchHomeFolder`      | -                                                                                     | Windows 搜索             |
| `shell:SendTo`                | `%APPDATA%\Microsoft\Windows\SendTo`                                                  | 发送到文件夹             |
| `shell:Start Menu`            | `%APPDATA%\Microsoft\Windows\Start Menu`                                              | 开始菜单                 |
| `shell:Startup`               | `%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup`                             | 当前用户「启动」文件夹   |
| `shell:SyncCenterFolder`      | `控制面板\所有控制面板项\同步中心`                                                    | 同步中心                 |
| `shell:SyncResultsFolder`     | `控制面板\所有控制面板项\同步中心\同步结果`                                           | 同步结果                 |
| `shell:SyncSetupFolder`       | `控制面板\所有控制面板项\同步中心\同步设置`                                           | 同步设置                 |
| `shell:System`                | `C:\Windows\System32`                                                                 | 默认系统库               |
| `shell:SystemCertificates`    | `%APPDATA%\Microsoft\SystemCertificates`                                              | 系统证书                 |
| `shell:SystemX86`             | `C:\Windows\SysWOW64`                                                                 | 32 位系统库              |
| `shell:Templates`             | `%APPDATA%\Microsoft\Windows\Templates`                                               | 系统模板                 |
| `shell:User Pinned`           | `%APPDATA%\Microsoft\Internet Explorer\Quick Launch\User Pinned`                      | 任务栏和开始菜单的固定项 |
| `shell:UserProfiles`          | `C:\Users`                                                                            | 用户                     |
| `shell:UsersFilesFolder`      |                                                                                       | 当前用户配置文件夹       |
| `shell:UsersLibrariesFolder`  |                                                                                       | 用户库                   |
| `shell:VideosLibrary`         |                                                                                       | 视频库                   |
| `shell:Fonts`                 | `C:\Windows\Font`                                                                     | 字体                     |
| `shell:Windows`               | `C:\Windows`                                                                          | Windows                  |

## 2. 环境变量

一些环境变量确定了快捷方式的位置，例如 `%APPDATA%`、`%USERPROFILE%` 等。

| 变量                           | 路径                                  |
| ------------------------------ | ------------------------------------- |
| `%APPDATA%`                    | `C:\Users\<用户名>\AppData\Roaming`   |
| `%ALLUSERSPROFILE%`            | `C:\ProgramData`                      |
| `%APPDATA%`                    | `C:\Users\<用户名>\AppData\Roaming`   |
| `%COMMONPROGRAMFILES%`         | `C:\Program Files\Common Files`       |
| `%COMMONPROGRAMFILES(x86)%`    | `C:\Program Files (x86)\Common Files` |
| `%COMSPEC%`                    | `C:\Windows\System32\cmd.exe`         |
| `%HOMEDRIVE%`、`%SystemDrive%` | `C:\`                                 |
| `%HOMEPATH%`                   | `C:\Users\<用户名>`                   |
| `%LOCALAPPDATA%`               | `C:\Users\<用户名>\AppData\Local`     |
| `%PROGRAMDATA%`                | `C:\ProgramData`                      |
| `%PROGRAMFILES%`               | `C:\Program Files`                    |
| `%PROGRAMFILES(x86)%`          | `C:\Program Files (x86)`              |
| `%PUBLIC%`                     | `C:\UsersPublic`                      |
| `%SystemRoot%`                 | `C:\Windows`                          |
| `%TEMP%`、`%TMP%`              | `C:\Users\<用户名>\AppData\LocalTemp` |
| `%USERPROFILE%`                | `C:\Users\<用户名>`                   |
| `%WINDIR%`                     | `C:\Window`                           |
