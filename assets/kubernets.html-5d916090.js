import{_ as a,r as o,o as i,c,b as e,a as n,w as s,d as t,e as u}from"./app-bd1d9ffa.js";const d={},k=e("h1",{id:"kubernets",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kubernets","aria-hidden":"true"},"#"),t(" Kubernets")],-1),_={class:"table-of-contents"},p=e("em",null,"5分钟带你快速了解 Docker 和 k8s",-1),h={href:"https://juejin.cn/post/6913568633813729294",target:"_blank",rel:"noopener noreferrer"},b=u('<p>本文 <strong>并不会</strong> 详细介绍 Kubernetes 的详细功能，仅仅是介绍其作用。</p><h2 id="_1-kubernets-是什么" tabindex="-1"><a class="header-anchor" href="#_1-kubernets-是什么" aria-hidden="true">#</a> 1. Kubernets 是什么</h2><p>k8s 作为容器编排解决方案变得越来越流行。</p><div class="hint-container info"><p class="hint-container-title">k8s 又是什么？</p><p>k8s 是 Kubernets 的缩写，<code>8</code> 代表中间的八个字符。</p></div><p>尽管 Docker 为容器化的应用程序提供了开放标准，但随着容器越来越多出现了一系列新问题：</p><ul><li>如何协调和调度这些容器？</li><li>如何在升级应用程序时不会中断服务？</li><li>如何监视应用程序的运行状况？</li><li>如何批量重新启动容器里的程序？</li></ul><p>解决这些问题需要容器编排技术，可以将众多机器抽象，对外呈现出一台超大机器。现在业界比较流行的有：k8s、Mesos、Docker Swarm 等。</p><p>在业务发展初期只有几个微服务，这时用 Docker 就足够了，但随着业务规模逐渐扩大，容器越来越多，运维人员的工作越来越复杂，这个时候就需要编排系统解救运维人员。</p><p>一个成熟的容器编排系统需要具备以下能力：</p><ul><li>处理大量的容器和用户</li><li>负载均衡</li><li>鉴权和安全性</li><li>管理服务通信</li><li>多平台部署</li></ul><h2 id="_2-kubernetes-组成结构" tabindex="-1"><a class="header-anchor" href="#_2-kubernetes-组成结构" aria-hidden="true">#</a> 2. Kubernetes 组成结构</h2><p>k8s 由众多组件组成，组件间通过 API 互相通信，归纳起来主要分为三个部分：</p><ol><li>Controller Manager，即控制平面，用于调度程序以及节点状态检测</li><li>Nodes，构成了 Kubernetes 集群的集体计算能力，实际部署容器运行的地方</li><li>Pods，Kubernetes 集群中资源的最小单位</li></ol><h2 id="_3-kubernetes-与-docker" tabindex="-1"><a class="header-anchor" href="#_3-kubernetes-与-docker" aria-hidden="true">#</a> 3. Kubernetes 与 Docker</h2><p>Docker 和 k8s 在业界非常流行，都已经是事实上的标准。</p><p>Docker 是用于构建、分发、运行容器的平台和工具。而 k8s 实际上是一个使用 Docker 容器进行编排的系统，主要围绕 pods 进行工作。Pods 是 k8s 生态中最小的调度单位，可以包含一个或多个容器。</p><p>Docker 和 k8s 是根本上不同的技术，两者可以很好的协同工作。</p>',17);function f(m,x){const r=o("router-link"),l=o("ExternalLinkIcon");return i(),c("div",null,[k,e("nav",_,[e("ul",null,[e("li",null,[n(r,{to:"#_1-kubernets-是什么"},{default:s(()=>[t("1. Kubernets 是什么")]),_:1})]),e("li",null,[n(r,{to:"#_2-kubernetes-组成结构"},{default:s(()=>[t("2. Kubernetes 组成结构")]),_:1})]),e("li",null,[n(r,{to:"#_3-kubernetes-与-docker"},{default:s(()=>[t("3. Kubernetes 与 Docker")]),_:1})])])]),e("p",null,[t("本文参考自："),p,t("，知乎，"),e("a",h,[t("https://juejin.cn/post/6913568633813729294"),n(l)]),t("。")]),b])}const D=a(d,[["render",f],["__file","kubernets.html.vue"]]);export{D as default};
