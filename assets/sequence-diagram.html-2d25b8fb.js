import{_ as s,M as l,p as r,q as h,R as e,N as a,V as i,t,a1 as d}from"./framework-546207d5.js";const u={},g=e("h1",{id:"时序图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#时序图","aria-hidden":"true"},"#"),t(" 时序图")],-1),_={class:"table-of-contents"},m=d('<h2 id="_1-时序图介绍" tabindex="-1"><a class="header-anchor" href="#_1-时序图介绍" aria-hidden="true">#</a> 1. 时序图介绍</h2><p><strong>时序图</strong>（Sequence Diagram）又名序列图、循序图，是一种 UML 交互图。它通过描述对象之间发送消息的时间顺序显示多个对象之间的动态协作。它可以表示用例的行为顺序，当执行一个用例行为时，其中的每条消息对应一个类操作或状态机中引起转换的触发事件。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p>',2),x=d(`<p>时序图中包括如下元素：角色，对象，生命线，控制焦点和消息。</p><ol><li><strong>角色</strong>（Actor）：系统角色，可以是人或者其他系统，子系统。</li><li><strong>对象</strong>（Object）：对象是类的实例，以一个矩形表示，位于时序图的顶部的对象是类角色。对象有三种状态：激活、运行（存在）和销毁，对象一般命名方式如下： <ol><li>包含对象名和类名</li><li>只显示类名不显示对象名，即为一个匿名对象</li><li>只显示对象名不显示类名</li></ol></li><li><strong>生命线</strong>（Lifeline）：生命线代表时序图中的对象在一段时期内的存在。时序图中每个对象和底部中心都有一条垂直的虚线，这就是对象的生命线，对象间的消息存在于两条虚线间。</li><li><strong>控制焦点</strong>（Activation）：控制焦点代表时序图中的对象执行一项操作的时期，在时序图中每条生命线上的窄矩形代表活动期。</li><li><strong>消息</strong>（Message）：消息是定义交互和协作中交换信息的类，用于对实体间的通信内容建模，信息用于在实体间传递信息。允许实体请求其他的服务，类角色通过发送和接受信息进行通信。</li></ol><h2 id="_2-mermaid-时序图语法" tabindex="-1"><a class="header-anchor" href="#_2-mermaid-时序图语法" aria-hidden="true">#</a> 2. Mermaid 时序图语法</h2><div class="hint-container info"><p class="hint-container-title">关键字</p><p>如果节点使用 <code>end</code> 命名可能导致绘图中断，因此，应该尽可能使用引号（<code>&quot;&quot;</code>）或括号（<code>[] {} ()</code>）来包裹 <code>end</code> 这个词。</p></div><h3 id="_2-1-参与者" tabindex="-1"><a class="header-anchor" href="#_2-1-参与者" aria-hidden="true">#</a> 2.1 参与者</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>sequenceDiagram
    Alice-&gt;&gt;John: Hello John, how are you?
    John--&gt;&gt;Alice: Great!
    Alice-)John: See you later!
</code></pre></div>`,6),p=e("p",null,"参与者（Participants）一般是对象，可以隐式定义，如上面的例子。默认按照图表源文本中的出现顺序呈现的。如果需要定义顺序可用用下面的语法：",-1),v=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`sequenceDiagram
    participant Alice
    participant Bob
    Alice->>Bob: Hi Bob
    Bob->>Alice: Hi Alice
`)])],-1),J=e("h3",{id:"_2-2-角色",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-2-角色","aria-hidden":"true"},"#"),t(" 2.2 角色")],-1),A=e("p",null,[t("如果你特别想使用角色（Actor）符号而不是矩形，你可以通过使用角色语句（"),e("code",null,"actor .."),t("）来实现，如下图所示。")],-1),b=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`sequenceDiagram
    actor Alice
    actor Bob
    Alice->>Bob: Hi Bob
    Bob->>Alice: Hi Alice
`)])],-1),f=e("h3",{id:"_2-3-别名",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-3-别名","aria-hidden":"true"},"#"),t(" 2.3 别名")],-1),w=e("p",null,[t("别名语句（"),e("code",null,".. as .."),t("）可以用简短标志表示一个标签。")],-1),S=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`sequenceDiagram
    participant A as Alice
    participant J as John
    A->>J: Hello John, how are you?
    J->>A: Great!
`)])],-1),B=d(`<h3 id="_2-4-组" tabindex="-1"><a class="header-anchor" href="#_2-4-组" aria-hidden="true">#</a> 2.4 组</h3><p>组的语法是</p><div class="language-text" data-ext="text"><pre class="language-text"><code>box [color] [title]
    ...
end
</code></pre></div><p>其中 <code>color</code> 可以是 <code>transparent</code> 或 <code>rgb(33,66,99)</code> 所表示的演示，也可以使用 CSS 的关键字颜色。如果 <code>title</code> 的内容和颜色名称冲突可以使用 <code>transparent</code> 表示无颜色。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sequenceDiagram
    box Purple Alice &amp; John
    participant A
    participant J
    end
    box Another Group
    participant B
    participant C
    end
    A-&gt;&gt;J: Hello John, how are you?
    J-&gt;&gt;A: Great!
    A-&gt;&gt;B: Hello Bob, how is Charly ?
    B-&gt;&gt;C: Hello Charly, how are you?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),y=d(`<h3 id="_2-5-消息" tabindex="-1"><a class="header-anchor" href="#_2-5-消息" aria-hidden="true">#</a> 2.5 消息</h3><p>消息的语法如下：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>[Actor][Arrow][Actor]: Message text
</code></pre></div><table><thead><tr><th>箭头</th><th>描述</th></tr></thead><tbody><tr><td><code>-&gt;</code></td><td>无箭头的实线</td></tr><tr><td><code>--&gt;</code></td><td>无箭头的虚线</td></tr><tr><td><code>-&gt;&gt;</code></td><td>带箭头的实线</td></tr><tr><td><code>--&gt;&gt;</code></td><td>带箭头的虚线</td></tr><tr><td><code>-x</code></td><td>末端有十字的实线</td></tr><tr><td><code>--x</code></td><td>末端有十字的虚线</td></tr><tr><td><code>-)</code></td><td>末端有开放箭头的实线（异步）</td></tr><tr><td><code>--)</code></td><td>末端有开放箭头的虚线（异步）</td></tr></tbody></table><div class="language-text" data-ext="text"><pre class="language-text"><code>sequenceDiagram
    Alice-&gt;&gt;John: Hello John, how are you?
    activate John
    John--&gt;&gt;Alice: Great!
    deactivate John
</code></pre></div>`,5),E=e("p",null,[t("为了简化 "),e("code",null,"activate .."),t(" 语句，可以使用 "),e("code",null,"+"),t(" / "),e("code",null,"-"),t(" 来表示消息的开始结束。")],-1),C=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`sequenceDiagram
    Alice->>+John: Hello John, how are you?
    John-->>-Alice: Great!
`)])],-1),z=e("p",null,"消息可以叠加：",-1),F=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`sequenceDiagram
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    John-->>-Alice: I feel great!
`)])],-1),I=e("hr",{class:"footnotes-sep"},null,-1),M={class:"footnotes"},T={class:"footnotes-list"},U={id:"footnote1",class:"footnote-item"},k={href:"https://baike.baidu.com/item/%E6%97%B6%E5%BA%8F%E5%9B%BE/3659178",target:"_blank",rel:"noopener noreferrer"},q=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function L(Q,H){const n=l("router-link"),o=l("Mermaid"),c=l("ExternalLinkIcon");return r(),h("div",null,[g,e("nav",_,[e("ul",null,[e("li",null,[a(n,{to:"#_1-时序图介绍"},{default:i(()=>[t("1. 时序图介绍")]),_:1})]),e("li",null,[a(n,{to:"#_2-mermaid-时序图语法"},{default:i(()=>[t("2. Mermaid 时序图语法")]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#_2-1-参与者"},{default:i(()=>[t("2.1 参与者")]),_:1})]),e("li",null,[a(n,{to:"#_2-2-角色"},{default:i(()=>[t("2.2 角色")]),_:1})]),e("li",null,[a(n,{to:"#_2-3-别名"},{default:i(()=>[t("2.3 别名")]),_:1})]),e("li",null,[a(n,{to:"#_2-4-组"},{default:i(()=>[t("2.4 组")]),_:1})]),e("li",null,[a(n,{to:"#_2-5-消息"},{default:i(()=>[t("2.5 消息")]),_:1})])])])])]),m,a(o,{id:"mermaid-12",code:"eJwrTi0sTc1LTnXJTEwvSszlUgACx5zM5FRdOzuv/Iw8KwWP1JycfAUQW0chI79cIbEoVaEyv9QerBQkrAtUCtZipeBelJpYoohkiCbEjOBUsB6FnMSS1CJFLgCSZSQ5"}),x,a(o,{id:"mermaid-72",code:"eJwrTi0sTc1LTnXJTEwvSszlUgACx5zM5FRdOzuv/Iw8KwWP1JycfAUQW0chI79cIbEoVaEyv9QerBQkrAtUCtZipeBelJpYoohkiCbEjOBUsB6FnMSS1CJFLgCSZSQ5"}),p,v,a(o,{id:"mermaid-77",code:"eJwrTi0sTc1LTnXJTEwvSszlUgCCgsSikszkzILEvBIFx5zM5FQMUaf8JLAYWFbXzg7It1LwyISLA2mgKFgWLA4xBQB2PSEr"}),J,A,b,a(o,{id:"mermaid-85",code:"eJwrTi0sTc1LTnXJTEwvSszlUgCCxOSS/CIFx5zM5FQkvlN+EpgHFte1swPyrRQ8MuHiQBooCpYFi0P0AwCS9Rwf"}),f,w,S,a(o,{id:"mermaid-93",code:"eJxlyksKgCAUheF5qzjNawMNCiEo3MVFLimYmg+i3WdOO8Pz/Ymvwk7xauiIdHaoCxSzUSaQyxCgBGGN4h/Jj6TXrokY51lO2Nla394B2t+gyHh8WVojayMmbJEp990LlJUlYA=="}),B,a(o,{id:"mermaid-105",code:"eJxtjsEOwiAQRO9+xXrxpD/QQw3URMPJX6B1IyTI4hai/XuRpk00zHFm3uyO+EzoBzxZfWf92EBWT2+4Jg4OQTg7IOxAkfEl+ypojnawQfsIouqq4qK/rXvCUzTIcGZKocrIqtv9LIlD26oGLugclZ/2YOgFmhEmSsfSUbkjmnwIddyulFwoSf0M2RE6o9lNMHMyt7qlNSd/6x/qalWZ"}),y,a(o,{id:"mermaid-192",code:"eJwrTi0sTc1LTnXJTEwvSszlUgACx5zM5FRdOzuv/Iw8KwWP1JycfAUQW0chI79cIbEoVaEyv9QerDQxuSSzLLEkFSwPFgExdIGawYZYKbgXpSaWKIJlUlJRVQMAiG8mfA=="}),E,C,a(o,{id:"mermaid-197",code:"eJwrTi0sTc1LTnXJTEwvSszlUgACx5zM5FRdOzttr/yMPCsFj9ScnHwFEFtHISO/XCGxKFWhMr/UHqwWJKyra6cL1mOl4F6UmliiyAUAuqAauQ=="}),z,F,a(o,{id:"mermaid-202",code:"eJxtzD0KhDAQhuHeU3zWay6whcvCFqu3GMKnCcQEoyLe3vy0TjUwzzsb14Ne82dljrI0SPN1VlP1/WsMxr/xp3MBee9gwgmJxBWOz5OtSovPAoYSsbDKfFJJqpKkt7bGHYYSFJyq9lEPmEiHOVL2trkBNf43JA=="}),I,e("section",M,[e("ol",T,[e("li",U,[e("p",null,[t("时序图，百度百科，"),e("a",k,[t("https://baike.baidu.com/item/时序图/3659178"),a(c)]),t(),q])])])])])}const W=s(u,[["render",L],["__file","sequence-diagram.html.vue"]]);export{W as default};
