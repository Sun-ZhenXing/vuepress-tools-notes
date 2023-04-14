import{_ as i,M as r,p as d,q as h,R as e,N as n,V as o,t,a1 as s}from"./framework-546207d5.js";const u="/vuepress-tools-notes/assets/docker-logo-svgrepo-com-fcd3f222.svg",_={},p=e("h1",{id:"开始使用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#开始使用","aria-hidden":"true"},"#"),t(" 开始使用")],-1),k={class:"table-of-contents"},f=e("h2",{id:"_1-docker-介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-docker-介绍","aria-hidden":"true"},"#"),t(" 1. Docker 介绍")],-1),m=e("div",{style:{"text-align":"center"}},[e("p",null,[e("img",{src:u,alt:"",loading:"lazy"})])],-1),b=e("p",null,"Docker 是一个开源的应用容器引擎，基于 并遵从 Apache 2.0 协议开源。",-1),D=e("p",null,"Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。",-1),g=e("p",null,"容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 APP），更重要的是容器性能开销极低。",-1),x=e("p",null,"相关链接：",-1),v={href:"http://www.docker.com",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/docker/docker",target:"_blank",rel:"noopener noreferrer"},C=s('<h2 id="_2-docker-的应用场景" tabindex="-1"><a class="header-anchor" href="#_2-docker-的应用场景" aria-hidden="true">#</a> 2. Docker 的应用场景</h2><p>通过利用 Docker 的方法来快速交付，测试和部署代码，可以大大减少编写代码和在生产环境中运行代码之间的延迟：</p><ul><li>Web 应用的自动化打包和发布</li><li>自动化测试和持续集成、发布</li><li>在服务型环境中部署和调整数据库或其他的后台应用</li><li>从头编译或者扩展现有的 OpenShift 或 Cloud Foundry 平台来搭建自己的 PaaS 环境</li></ul><h3 id="_2-1-快速、一致地交付应用程序" tabindex="-1"><a class="header-anchor" href="#_2-1-快速、一致地交付应用程序" aria-hidden="true">#</a> 2.1 快速、一致地交付应用程序</h3><p>Docker 允许开发人员使用您提供的应用程序或服务的本地容器在标准化环境中工作，从而简化了开发的生命周期。</p><p>容器非常适合持续集成和持续交付（CI / CD）工作流程，请考虑以下示例方案：</p><ul><li>您的开发人员在本地编写代码，并使用 Docker 容器与同事共享他们的工作</li><li>他们使用 Docker 将其应用程序推送到测试环境中，并执行自动或手动测试</li><li>当开发人员发现错误时，他们可以在开发环境中对其进行修复，然后将其重新部署到测试环境中，以进行测试和验证</li><li>测试完成后，将修补程序推送给生产环境，就像将更新的镜像推送到生产环境一样简单</li></ul><h3 id="_2-2-响应式部署和扩展" tabindex="-1"><a class="header-anchor" href="#_2-2-响应式部署和扩展" aria-hidden="true">#</a> 2.2 响应式部署和扩展</h3><p>Docker 是基于容器的平台，允许高度可移植的工作负载。Docker 容器可以在开发人员的本机上，数据中心的物理或虚拟机上，云服务上或混合环境中运行。</p><p>Docker 的可移植性和轻量级的特性，还可以使您轻松地完成动态管理的工作负担，并根据业务需求指示，实时扩展或拆除应用程序和服务。</p><h3 id="_2-3-在同一硬件上运行更多工作负载" tabindex="-1"><a class="header-anchor" href="#_2-3-在同一硬件上运行更多工作负载" aria-hidden="true">#</a> 2.3 在同一硬件上运行更多工作负载</h3><p>Docker 轻巧快速。它为基于虚拟机管理程序的虚拟机提供了可行、经济、高效的替代方案，因此您可以利用更多的计算能力来实现业务目标。Docker 非常适合于高密度环境以及中小型部署，而您可以用更少的资源做更多的事情。</p><h2 id="_3-使用镜像" tabindex="-1"><a class="header-anchor" href="#_3-使用镜像" aria-hidden="true">#</a> 3. 使用镜像</h2>',13),L=s(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 拉取最新的的 Ubuntu 镜像</span>
<span class="token function">docker</span> pull ubuntu:latest

<span class="token comment"># 查看镜像</span>
<span class="token function">docker</span> images

<span class="token comment"># 使用镜像创建容器，并运行</span>
<span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">--name</span> ubuntu-test ubuntu
</code></pre></div>`,1);function N(V,P){const a=r("router-link"),l=r("ExternalLinkIcon"),c=r("RouterLink");return d(),h("div",null,[p,e("nav",k,[e("ul",null,[e("li",null,[n(a,{to:"#_1-docker-介绍"},{default:o(()=>[t("1. Docker 介绍")]),_:1})]),e("li",null,[n(a,{to:"#_2-docker-的应用场景"},{default:o(()=>[t("2. Docker 的应用场景")]),_:1}),e("ul",null,[e("li",null,[n(a,{to:"#_2-1-快速、一致地交付应用程序"},{default:o(()=>[t("2.1 快速、一致地交付应用程序")]),_:1})]),e("li",null,[n(a,{to:"#_2-2-响应式部署和扩展"},{default:o(()=>[t("2.2 响应式部署和扩展")]),_:1})]),e("li",null,[n(a,{to:"#_2-3-在同一硬件上运行更多工作负载"},{default:o(()=>[t("2.3 在同一硬件上运行更多工作负载")]),_:1})])])]),e("li",null,[n(a,{to:"#_3-使用镜像"},{default:o(()=>[t("3. 使用镜像")]),_:1})])])]),f,m,b,D,g,x,e("ol",null,[e("li",null,[t("Docker 官网："),e("a",v,[t("http://www.docker.com"),n(l)])]),e("li",null,[t("Github Docker 源码："),e("a",w,[t("https://github.com/docker/docker"),n(l)])])]),C,e("p",null,[t("如果没有安装 Docker，请 "),n(c,{to:"/docker/docker-tutorial/install-docker.html"},{default:o(()=>[t("安装 Docker")]),_:1}),t("，安装后尝试下面的命令。")]),L])}const y=i(_,[["render",N],["__file","get-started.html.vue"]]);export{y as default};