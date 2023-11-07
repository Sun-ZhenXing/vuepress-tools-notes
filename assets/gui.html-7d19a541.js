import{_ as u,r as c,o as d,c as D,b as s,a as e,w as a,d as n,f as h,e as i}from"./app-67a46ebf.js";const y={},m=s("h1",{id:"docker-使用-gui-应用",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#docker-使用-gui-应用","aria-hidden":"true"},"#"),n(" Docker 使用 GUI 应用")],-1),b={class:"table-of-contents"},_=i('<h2 id="1-docker-如何使用-gui-应用" tabindex="-1"><a class="header-anchor" href="#1-docker-如何使用-gui-应用" aria-hidden="true">#</a> 1. Docker 如何使用 GUI 应用</h2><p>Linux 环境下的桌面应用程序通常使用 X11 或 Wayland 作为显示服务器。Docker 容器默认只能运行命令行应用程序，因此需要额外的配置才能运行 GUI 应用程序。</p><p>有一些技术可以让 Docker 容器运行 GUI 应用程序，例如 VNC、X11、Wayland 等。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p>',3),v=s("li",null,"使用 X11 服务器，让远程 X11 应用运行在本地 X11 服务器上",-1),k=s("li",null,"使用 SSH X11 Forwarding 技术，让远程 X11 应用运行在本地 X11 服务器上",-1),f=s("li",null,"使用 VNC 虚拟桌面",-1),g=s("li",null,"使用远程桌面协议 RDP 等",-1),C={href:"https://github.com/mviereck/x11docker",target:"_blank",rel:"noopener noreferrer"},E=i(`<p>本文介绍最简单的方式，也就是使 Docker 内的 X11 应用共享到本地 X11 服务器上。</p><h2 id="2-使用-x11-服务器" tabindex="-1"><a class="header-anchor" href="#2-使用-x11-服务器" aria-hidden="true">#</a> 2. 使用 X11 服务器</h2><p>以 Ubuntu 22.04 为例，安装 X11 服务器：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">sudo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">apt</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">x11-xserver-utils</span></span>
<span class="line"></span></code></pre></div><p>宿主开放 X11 服务器的权限：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">xhost</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">+</span></span>
<span class="line"></span></code></pre></div><p>WSL2 现在支持在 Windows 上运行 Linux GUI 应用程序（X11 和 Wayland），提供了完全集成的桌面体验，因此此方法也适用于 Windows。注意，这种方法仅适用于 WSL2，不支持 WSL1。<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p>`,7),x={href:"https://sourceforge.net/projects/vcxsrv/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://dev.to/darksmile92/run-gui-app-in-linux-docker-container-on-windows-host-4kde",target:"_blank",rel:"noopener noreferrer"},w=s("p",null,"通过实际测试，发现使用 VcXsrv 比较卡顿，运行一些大的应用程序会长时间无响应。而 WSL2 直接运行更快速，但稳定性不高。",-1),X=s("h2",{id:"3-创建一个番茄钟容器",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#3-创建一个番茄钟容器","aria-hidden":"true"},"#"),n(" 3. 创建一个番茄钟容器")],-1),N=s("p",null,"中国大陆建议使用清华源构建镜像。",-1),I=s("div",{class:"language-docker line-numbers-mode","data-ext":"docker"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"FROM"),s("span",{style:{color:"#D4D4D4"}}," ubuntu:22.04")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"ARG"),s("span",{style:{color:"#D4D4D4"}}," DEBIAN_FRONTEND=noninteractive")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"RUN"),s("span",{style:{color:"#D4D4D4"}}," apt update && \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    apt upgrade -y && \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    apt install gnome-shell-pomodoro -y && \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    apt clean")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"CMD"),s("span",{style:{color:"#D4D4D4"}}," ["),s("span",{style:{color:"#CE9178"}},'"gnome-pomodoro"'),s("span",{style:{color:"#D4D4D4"}},"]")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),U=s("div",{class:"language-docker line-numbers-mode","data-ext":"docker"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"FROM"),s("span",{style:{color:"#D4D4D4"}}," ubuntu:22.04")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"ARG"),s("span",{style:{color:"#D4D4D4"}}," DEBIAN_FRONTEND=noninteractive")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"ENV"),s("span",{style:{color:"#D4D4D4"}}," TZ=Asia/Shanghai")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"RUN"),s("span",{style:{color:"#D4D4D4"}}," echo "),s("span",{style:{color:"#CE9178"}},'"deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse"'),s("span",{style:{color:"#D4D4D4"}}," > /etc/apt/sources.list && \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    echo "),s("span",{style:{color:"#CE9178"}},'"deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse"'),s("span",{style:{color:"#D4D4D4"}}," >> /etc/apt/sources.list && \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    echo "),s("span",{style:{color:"#CE9178"}},'"deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse"'),s("span",{style:{color:"#D4D4D4"}}," >> /etc/apt/sources.list && \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    echo "),s("span",{style:{color:"#CE9178"}},'"deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse"'),s("span",{style:{color:"#D4D4D4"}}," >> /etc/apt/sources.list && \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    apt update && \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    apt upgrade -y && \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    apt install gnome-shell-pomodoro -y && \\")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    apt clean")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"CMD"),s("span",{style:{color:"#D4D4D4"}}," ["),s("span",{style:{color:"#CE9178"}},'"gnome-pomodoro"'),s("span",{style:{color:"#D4D4D4"}},"]")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),L=i(`<p>下面构建镜像：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">build</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-t</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">pomodoro</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">.</span></span>
<span class="line"></span></code></pre></div><p>运行容器：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">run</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-it</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">--rm</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">-v</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">/etc/localtime:/etc/localtime:ro</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">-v</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">/tmp/.X11-unix:/tmp/.X11-unix</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">-e</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">DISPLAY=unix</span><span style="color:#9CDCFE;">$DISPLAY</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">--name</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">pomodoro</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">pomodoro</span></span>
<span class="line"></span></code></pre></div><p>运行后，会弹出一个番茄钟的窗口。</p>`,5),G=s("hr",{class:"footnotes-sep"},null,-1),R={class:"footnotes"},S={class:"footnotes-list"},B={id:"footnote1",class:"footnote-item"},W={href:"https://www.cnblogs.com/larva-zhh/p/10531824.html",target:"_blank",rel:"noopener noreferrer"},V=s("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),j={id:"footnote2",class:"footnote-item"},F={href:"https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/gui-apps",target:"_blank",rel:"noopener noreferrer"},T=s("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1);function M(O,P){const o=c("router-link"),l=c("ExternalLinkIcon"),p=c("CodeTabs");return d(),D("div",null,[m,s("nav",b,[s("ul",null,[s("li",null,[e(o,{to:"#1-docker-如何使用-gui-应用"},{default:a(()=>[n("1. Docker 如何使用 GUI 应用")]),_:1})]),s("li",null,[e(o,{to:"#2-使用-x11-服务器"},{default:a(()=>[n("2. 使用 X11 服务器")]),_:1})]),s("li",null,[e(o,{to:"#3-创建一个番茄钟容器"},{default:a(()=>[n("3. 创建一个番茄钟容器")]),_:1})])])]),_,s("ul",null,[v,k,f,g,s("li",null,[n("使用 "),s("a",C,[n("X11 Docker"),e(l)]),n("，这是一个专门用于运行 GUI 应用的 Docker 技术")])]),E,s("p",null,[n("在此之前，我们通常使用 "),s("a",x,[n("VcXsrv"),e(l)]),n(" 等 Windows 下的 X11 服务器来运行 Linux GUI 应用程序。如果想了解更多可以阅读 "),s("a",A,[n("Run GUI app in linux docker container on windows host"),e(l)]),n(" 这篇文章。")]),w,X,N,e(p,{id:"71",data:[{id:"官方源"},{id:"清华源"}]},{title0:a(({value:t,isActive:r})=>[n("官方源")]),title1:a(({value:t,isActive:r})=>[n("清华源")]),tab0:a(({value:t,isActive:r})=>[I]),tab1:a(({value:t,isActive:r})=>[U]),_:1}),L,h(` 
## 4. 安装完整的 Ubuntu 桌面

如果需要完整的 Ubuntu 桌面，可以使用下面的 Dockerfile：

\`\`\`dockerfile
FROM ubuntu:22.04

ARG DEBIAN_FRONTEND=noninteractive

ENV TZ=Asia/Shanghai

RUN echo "deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse" > /etc/apt/sources.list && \\
    echo "deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse" >> /etc/apt/sources.list && \\
    echo "deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse" >> /etc/apt/sources.list && \\
    echo "deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse" >> /etc/apt/sources.list && \\
    apt update && \\
    apt upgrade -y && \\
    apt install ubuntu-desktop -y && \\
    apt clean

CMD ["gnome-session"]
\`\`\`

构建并运行容器：

\`\`\`bash
docker build -t ubuntu-desktop .
docker run -it \\
  -v /etc/localtime:/etc/localtime:ro \\
  -v /tmp/.X11-unix:/tmp/.X11-unix \\
  -e DISPLAY=unix$DISPLAY \\
  --name ubuntu-desktop \\
  ubuntu-desktop \\
  bash
\`\`\` `),G,s("section",R,[s("ol",S,[s("li",B,[s("p",null,[n("在 Docker for Windows 中运行 GUI 程序，"),s("a",W,[n("https://www.cnblogs.com/larva-zhh/p/10531824.html"),e(l)]),n(),V])]),s("li",j,[s("p",null,[n("在适用于 Linux 的 Windows 子系统上运行 Linux GUI 应用，微软，"),s("a",F,[n("https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/gui-apps"),e(l)]),n(),T])])])])])}const Y=u(y,[["render",M],["__file","gui.html.vue"]]);export{Y as default};
