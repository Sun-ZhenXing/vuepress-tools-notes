import{_ as o,r,o as s,c as a,b as e,d as t,a as i,e as c}from"./app-990f6815.js";const n={},h=e("h1",{id:"github-搜索技巧",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#github-搜索技巧","aria-hidden":"true"},"#"),t(" GitHub 搜索技巧")],-1),l={href:"https://docs.github.com/articles/about-searching-on-github/",target:"_blank",rel:"noopener noreferrer"},u=c('<p>提示：按 <code>S</code> 可以快速搜索。</p><h2 id="_1-基础搜索" tabindex="-1"><a class="header-anchor" href="#_1-基础搜索" aria-hidden="true">#</a> 1. 基础搜索</h2><table><thead><tr><th>This search</th><th>Finds repositories with…</th></tr></thead><tbody><tr><td><code>cat stars:&gt;100</code></td><td>Find cat repositories with greater than 100 stars.</td></tr><tr><td><code>user:defunkt</code></td><td>Get all repositories from the user defunkt.</td></tr><tr><td><code>tom location:&quot;San Francisco, CA&quot;</code></td><td>Find all tom users in <code>&quot;San Francisco, CA&quot;</code>.</td></tr><tr><td><code>join extension:coffee</code></td><td>Find all instances of join in code with coffee extension.</td></tr><tr><td><code>NOT cat</code></td><td>Excludes all results containing cat.</td></tr></tbody></table><h2 id="_2-仓库搜索" tabindex="-1"><a class="header-anchor" href="#_2-仓库搜索" aria-hidden="true">#</a> 2. 仓库搜索</h2><p>仓库搜索可以查看你在 GitHub 上可以访问的项目，你还可以过滤结果。</p><table><thead><tr><th>This search</th><th>Finds repositories with…</th></tr></thead><tbody><tr><td><code>cat stars:&gt;100</code></td><td>Find cat repositories with greater than 100 stars.</td></tr><tr><td><code>user:defunkt</code></td><td>Get all repositories from the user defunkt.</td></tr><tr><td><code>pugs pushed:&gt;2013-01-28</code></td><td>Pugs repositories pushed to since Jan 28, 2013.</td></tr><tr><td><code>node.js forks:&lt;200</code></td><td>Find all node.js repositories with less than 200 forks.</td></tr><tr><td><code>jquery size:1024..4089</code></td><td>Find jquery repositories between the sizes 1024 and 4089 kB.</td></tr><tr><td><code>gitx fork:true</code></td><td>Repository search includes forks of gitx.</td></tr><tr><td><code>gitx fork:only</code></td><td>Repository search returns only forks of gitx.</td></tr></tbody></table><h2 id="_3-代码搜索" tabindex="-1"><a class="header-anchor" href="#_3-代码搜索" aria-hidden="true">#</a> 3. 代码搜索</h2><p>代码搜索查看 GitHub 上的文件，你也可以过滤结果。</p><table><thead><tr><th>This search</th><th>Finds repositories with…</th></tr></thead><tbody><tr><td><code>install repo:charles/privaterepo</code></td><td>Find all instances of install in code from the repository charles/privaterepo.</td></tr><tr><td><code>shogun user:heroku</code></td><td>Find references to shogun from all public heroku repositories.</td></tr><tr><td><code>join extension:coffee</code></td><td>Find all instances of join in code with coffee extension.</td></tr><tr><td><code>system size:&gt;1000</code></td><td>Find all instances of system in code of file size greater than 1000kbs.</td></tr><tr><td><code>examples path:/docs/</code></td><td>Find all examples in the path /docs/.</td></tr><tr><td><code>replace fork:true</code></td><td>Search replace in the source code of forks.</td></tr></tbody></table><h2 id="_4-问题搜索" tabindex="-1"><a class="header-anchor" href="#_4-问题搜索" aria-hidden="true">#</a> 4. 问题搜索</h2><p>问题搜索可以查看 GitHub 上的问题和拉动请求，你还可以过滤结果。</p><table><thead><tr><th>This search</th><th>Finds issues…</th></tr></thead><tbody><tr><td><code>encoding user:heroku</code></td><td>Encoding issues across the Heroku organization.</td></tr><tr><td><code>cat is:open</code></td><td>Find cat issues that are open.</td></tr><tr><td><code>strange comments:&gt;42</code></td><td>Issues with more than 42 comments.</td></tr><tr><td><code>hard label:bug</code></td><td>Hard issues labeled as a bug.</td></tr><tr><td><code>author:mojombo</code></td><td>All issues authored by mojombo.</td></tr><tr><td><code>mentions:tpope</code></td><td>All issues mentioning tpope.</td></tr><tr><td><code>assignee:rtomayko</code></td><td>All issues assigned to rtomayko.</td></tr><tr><td><code>exception created:&gt;2012-12-31</code></td><td>Created since the beginning of 2013.</td></tr><tr><td><code>exception updated:&lt;2013-01-01</code></td><td>Last updated before 2013.</td></tr></tbody></table><h2 id="_5-用户搜索" tabindex="-1"><a class="header-anchor" href="#_5-用户搜索" aria-hidden="true">#</a> 5. 用户搜索</h2><p>用户搜索可以找到在 GitHub 上有账户的用户，你还可以过滤结果。</p><table><thead><tr><th>This search</th><th>Finds repositories with…</th></tr></thead><tbody><tr><td><code>fullname:&quot;Linus Torvalds&quot;</code></td><td>Find users with the full name &quot;Linus Torvalds&quot;.</td></tr><tr><td><code>tom location:&quot;San Francisco, CA&quot;</code></td><td>Find all tom users in &quot;San Francisco, CA&quot;.</td></tr><tr><td><code>chris followers:100..200</code></td><td>Find all chris users with followers between 100 and 200.</td></tr><tr><td><code>ryan repos:&gt;10</code></td><td>Find all ryan users with more than 10 repositories.</td></tr></tbody></table>',15);function p(f,b){const d=r("ExternalLinkIcon");return s(),a("div",null,[h,e("p",null,[t("GitHub 的搜索支持各种不同的操作，下面是一些常见搜索的快速技巧。如需更多信息，请访问 "),e("a",l,[t("搜索帮助"),i(d)]),t("。")]),u])}const g=o(n,[["render",p],["__file","search.html.vue"]]);export{g as default};