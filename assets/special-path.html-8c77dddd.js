import{_ as r,r as s,o as l,c as i,b as d,a as o,w as c,d as t,e as a}from"./app-5a7fdd32.js";const n={},h=d("h1",{id:"windows-下的特殊路径",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#windows-下的特殊路径","aria-hidden":"true"},"#"),t(" Windows 下的特殊路径")],-1),P={class:"table-of-contents"},A=a('<h2 id="_1-shell-快捷方式" tabindex="-1"><a class="header-anchor" href="#_1-shell-快捷方式" aria-hidden="true">#</a> 1. Shell 快捷方式</h2><p>Shell 快捷方式定义在注册表 <code>HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\FolderDescriptions\\</code> 下，用于将一些特定文件夹的路径映射到一个特定的描述符上，这样可以通过 Shell 快捷方式来访问这些文件夹。</p><p>Shell 快捷方式的注册表项的 <code>Name</code> 字段表示该快捷方式的描述符，使用 <code>shell:Name</code> 的方式可以访问该快捷方式对应的文件夹。</p><p>常见的 Shell 快捷方式如下。</p><table><thead><tr><th>表示</th><th>真实路径</th><th>说明</th></tr></thead><tbody><tr><td><code>shell:Fonts</code></td><td><code>C:\\Windows\\Fonts</code></td><td>字体文件夹</td></tr><tr><td><code>shell:Common Desktop</code></td><td><code>C:\\Users\\Public\\Desktop</code></td><td>公共桌面</td></tr><tr><td><code>shell:AccountPictures</code></td><td><code>%APPDATA%\\Microsoft\\Windows\\AccountPictures</code></td><td>用户头像</td></tr><tr><td><code>shell:AddNewProgramsFolder</code></td><td><code>控制面板\\所有控制面板项\\获得程序</code></td><td>获得程序</td></tr><tr><td><code>shell:Administrative Tools</code></td><td><code>%APPDATA%\\Microsoft\\Windows\\Start Menu\\Programs\\Administrative Tools</code></td><td>Windows 管理工具</td></tr><tr><td><code>shell:AppData</code></td><td><code>%APPDATA%</code></td><td>App 数据保存位置</td></tr><tr><td><code>shell:Application Shortcuts</code></td><td><code>%LOCALAPPDATA%\\Microsoft\\Windows\\Application Shortcuts</code></td><td>应用程序快捷方式</td></tr><tr><td><code>shell:AppsFolder</code></td><td>-</td><td>全部应用</td></tr><tr><td><code>shell:AppUpdatesFolder</code></td><td>-</td><td>已安装更新</td></tr><tr><td><code>shell:Cache</code></td><td><code>%USERPROFILE%\\AppData\\Local\\Microsoft\\Windows\\INetCache</code></td><td>IE 缓存文件夹</td></tr><tr><td><code>shell:Games</code></td><td></td><td>游戏</td></tr><tr><td><code>shell:History</code></td><td><code>%USERPROFILE%\\AppData\\Local\\Microsoft\\Windows\\History</code></td><td>IE 浏览历史</td></tr><tr><td><code>shell:HomeGroupFolder</code></td><td></td><td>家庭组</td></tr><tr><td><code>shell:ImplicitAppShortcuts</code></td><td><code>%APPDATA%\\Microsoft\\Internet Explorer\\Quick Launch\\User Pinned\\ImplicitAppShortcuts</code></td><td></td></tr><tr><td><code>shell:Libraries</code></td><td></td><td>Windows 库</td></tr><tr><td><code>shell:Links</code></td><td><code>%USERPROFILE%\\Links</code></td><td>链接文件夹</td></tr><tr><td><code>shell:Local AppData</code></td><td><code>%USERPROFILE%\\AppData\\Local</code></td><td></td></tr><tr><td><code>shell:LocalAppDataLow</code></td><td><code>%USERPROFILE%\\AppData\\LocalLow</code></td><td></td></tr><tr><td><code>shell:MusicLibrary</code></td><td></td><td>音乐库</td></tr><tr><td><code>shell:My Music</code></td><td></td><td>音乐</td></tr><tr><td><code>shell:My Pictures</code></td><td></td><td>图片</td></tr><tr><td><code>shell:My Video</code></td><td></td><td>视频</td></tr><tr><td><code>shell:NetHood</code></td><td><code>%APPDATA%\\Microsoft\\Windows\\Network Shortcuts</code></td><td></td></tr><tr><td><code>shell:NetworkPlacesFolder</code></td><td></td><td>网络</td></tr><tr><td><code>shell:Personal</code></td><td></td><td>文档</td></tr><tr><td><code>shell:PicturesLibrary</code></td><td></td><td>图片库</td></tr><tr><td><code>shell:PrintersFolder</code></td><td><code>所有控制面板项\\打印机</code></td><td></td></tr><tr><td><code>shell:PrintHood</code></td><td><code>%APPDATA%\\Microsoft\\Windows\\Printer Shortcuts</code></td><td></td></tr><tr><td><code>shell:Profile</code></td><td></td><td>用户配置文件夹</td></tr><tr><td><code>shell:ProgramFiles</code></td><td><code>C:\\Program Files</code></td><td></td></tr><tr><td><code>shell:ProgramFilesCommon</code></td><td><code>C:\\Program Files\\Common Files</code></td><td></td></tr><tr><td><code>shell:ProgramFilesCommonX86</code></td><td><code>C:\\Program Files (x86)\\Common Files</code></td><td></td></tr><tr><td><code>shell:ProgramFilesX86</code></td><td><code>C:\\Program Files (x86)</code></td><td></td></tr><tr><td><code>shell:Programs</code></td><td><code>%APPDATA%\\Microsoft\\Windows\\Start Menu\\Programs</code></td><td></td></tr><tr><td><code>shell:Public</code></td><td><code>C:\\Users\\Public</code></td><td>公共</td></tr><tr><td><code>shell:PublicAccountPictures</code></td><td><code>C:\\Users\\Public\\AccountPictures</code></td><td>公共用户头像</td></tr><tr><td><code>shell:PublicGameTasks</code></td><td><code>C:\\ProgramData\\Microsoft\\Windows\\GameExplorer</code></td><td>公共游戏</td></tr><tr><td><code>shell:PublicLibraries</code></td><td><code>C:\\Users\\Public\\Libraries</code></td><td>公共库</td></tr><tr><td><code>shell:Quick Launch</code></td><td><code>%APPDATA%\\Microsoft\\Internet Explorer\\Quick Launch</code></td><td>快速启动</td></tr><tr><td><code>shell:Recent</code></td><td><code>%APPDATA%\\Microsoft\\Windows\\Recent</code></td><td>最近使用的项目</td></tr><tr><td><code>shell:RecycleBinFolder</code></td><td></td><td>回收站</td></tr><tr><td><code>shell:ResourceDir</code></td><td><code>C:\\Windows\\Resources</code></td><td></td></tr><tr><td><code>shell:Ringtones</code></td><td><code>%USERPROFILE%\\AppData\\Local\\Microsoft\\Windows\\Ringtones</code></td><td></td></tr><tr><td><code>shell:Roaming Tiles</code></td><td><code>%USERPROFILE%\\AppData\\Local\\Microsoft\\Windows\\RoamingTiles</code></td><td></td></tr><tr><td><code>shell:SavedGames</code></td><td></td><td>保存的游戏</td></tr><tr><td><code>shell:Searches</code></td><td></td><td>保存的搜索</td></tr><tr><td><code>shell:SearchHomeFolder</code></td><td>-</td><td>Windows 搜索</td></tr><tr><td><code>shell:SendTo</code></td><td><code>%APPDATA%\\Microsoft\\Windows\\SendTo</code></td><td>发送到文件夹</td></tr><tr><td><code>shell:Start Menu</code></td><td><code>%APPDATA%\\Microsoft\\Windows\\Start Menu</code></td><td>开始菜单</td></tr><tr><td><code>shell:Startup</code></td><td><code>%APPDATA%\\Microsoft\\Windows\\Start Menu\\Programs\\Startup</code></td><td>当前用户「启动」文件夹</td></tr><tr><td><code>shell:SyncCenterFolder</code></td><td><code>控制面板\\所有控制面板项\\同步中心</code></td><td>同步中心</td></tr><tr><td><code>shell:SyncResultsFolder</code></td><td><code>控制面板\\所有控制面板项\\同步中心\\同步结果</code></td><td>同步结果</td></tr><tr><td><code>shell:SyncSetupFolder</code></td><td><code>控制面板\\所有控制面板项\\同步中心\\同步设置</code></td><td>同步设置</td></tr><tr><td><code>shell:System</code></td><td><code>C:\\Windows\\System32</code></td><td>默认系统库</td></tr><tr><td><code>shell:SystemCertificates</code></td><td><code>%APPDATA%\\Microsoft\\SystemCertificates</code></td><td>系统证书</td></tr><tr><td><code>shell:SystemX86</code></td><td><code>C:\\Windows\\SysWOW64</code></td><td>32 位系统库</td></tr><tr><td><code>shell:Templates</code></td><td><code>%APPDATA%\\Microsoft\\Windows\\Templates</code></td><td>系统模板</td></tr><tr><td><code>shell:User Pinned</code></td><td><code>%APPDATA%\\Microsoft\\Internet Explorer\\Quick Launch\\User Pinned</code></td><td>任务栏和开始菜单的固定项</td></tr><tr><td><code>shell:UserProfiles</code></td><td><code>C:\\Users</code></td><td>用户</td></tr><tr><td><code>shell:UsersFilesFolder</code></td><td></td><td>当前用户配置文件夹</td></tr><tr><td><code>shell:UsersLibrariesFolder</code></td><td></td><td>用户库</td></tr><tr><td><code>shell:VideosLibrary</code></td><td></td><td>视频库</td></tr><tr><td><code>shell:Fonts</code></td><td><code>C:\\Windows\\Font</code></td><td>字体</td></tr><tr><td><code>shell:Windows</code></td><td><code>C:\\Windows</code></td><td>Windows</td></tr></tbody></table><h2 id="_2-环境变量" tabindex="-1"><a class="header-anchor" href="#_2-环境变量" aria-hidden="true">#</a> 2. 环境变量</h2><p>一些环境变量确定了快捷方式的位置，例如 <code>%APPDATA%</code>、<code>%USERPROFILE%</code> 等。</p><table><thead><tr><th>变量</th><th>路径</th></tr></thead><tbody><tr><td><code>%APPDATA%</code></td><td><code>C:\\Users\\&lt;用户名&gt;\\AppData\\Roaming</code></td></tr><tr><td><code>%ALLUSERSPROFILE%</code></td><td><code>C:\\ProgramData</code></td></tr><tr><td><code>%APPDATA%</code></td><td><code>C:\\Users\\&lt;用户名&gt;\\AppData\\Roaming</code></td></tr><tr><td><code>%COMMONPROGRAMFILES%</code></td><td><code>C:\\Program Files\\Common Files</code></td></tr><tr><td><code>%COMMONPROGRAMFILES(x86)%</code></td><td><code>C:\\Program Files (x86)\\Common Files</code></td></tr><tr><td><code>%COMSPEC%</code></td><td><code>C:\\Windows\\System32\\cmd.exe</code></td></tr><tr><td><code>%HOMEDRIVE%</code>、<code>%SystemDrive%</code></td><td><code>C:\\</code></td></tr><tr><td><code>%HOMEPATH%</code></td><td><code>C:\\Users\\&lt;用户名&gt;</code></td></tr><tr><td><code>%LOCALAPPDATA%</code></td><td><code>C:\\Users\\&lt;用户名&gt;\\AppData\\Local</code></td></tr><tr><td><code>%PROGRAMDATA%</code></td><td><code>C:\\ProgramData</code></td></tr><tr><td><code>%PROGRAMFILES%</code></td><td><code>C:\\Program Files</code></td></tr><tr><td><code>%PROGRAMFILES(x86)%</code></td><td><code>C:\\Program Files (x86)</code></td></tr><tr><td><code>%PUBLIC%</code></td><td><code>C:\\UsersPublic</code></td></tr><tr><td><code>%SystemRoot%</code></td><td><code>C:\\Windows</code></td></tr><tr><td><code>%TEMP%</code>、<code>%TMP%</code></td><td><code>C:\\Users\\&lt;用户名&gt;\\AppData\\LocalTemp</code></td></tr><tr><td><code>%USERPROFILE%</code></td><td><code>C:\\Users\\&lt;用户名&gt;</code></td></tr><tr><td><code>%WINDIR%</code></td><td><code>C:\\Window</code></td></tr></tbody></table>',8);function p(m,u){const e=s("router-link");return l(),i("div",null,[h,d("nav",P,[d("ul",null,[d("li",null,[o(e,{to:"#_1-shell-快捷方式"},{default:c(()=>[t("1. Shell 快捷方式")]),_:1})]),d("li",null,[o(e,{to:"#_2-环境变量"},{default:c(()=>[t("2. 环境变量")]),_:1})])])]),A])}const S=r(n,[["render",p],["__file","special-path.html.vue"]]);export{S as default};
