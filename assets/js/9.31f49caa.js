(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{365:function(t,e,s){"use strict";s.r(e);var r=s(42),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"快速上手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[t._v("#")]),t._v(" 快速上手")]),t._v(" "),s("p",[t._v("开始之前，鄙人希望您能认识到以下几点")]),t._v(" "),s("p",[t._v("1.我是Hexo用户【或者Hugo、vuepress**|**Typecho和Wordpress用户请点击右上角×】")]),t._v(" "),s("p",[t._v("2.我已经实现了"),s("a",{attrs:{href:"https://hexo.io/zh-cn/docs/github-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("集成部署"),s("OutboundLink")],1),t._v(" 【GithubAction、Vercel、Travis-CI**|**依旧是通过本机上传生成静态网页的用户请点击右上角×】")]),t._v(" "),s("p",[t._v("3.我的源代码部署在Github上【Gitlab以后有可能会支持**|**Coding永远不支持】")]),t._v(" "),s("p",[t._v("4.HexoPlusPlus诞生的意义就是为了解决文件存储在Github上不方便更改的问题，并不是Hexo生成器，所以还是需要集成部署来生成静态文件。")]),t._v(" "),s("h2",{attrs:{id:"部署代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署代码"}},[t._v("#")]),t._v(" 部署代码")]),t._v(" "),s("p",[t._v("先下载，你可以直接从"),s("a",{attrs:{href:"https://raw.githubusercontent.com/HexoPlusPlus/HexoPlusPlus/main/dist/index.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),s("OutboundLink")],1),t._v(" 上下载，也可以用"),s("a",{attrs:{href:"https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@main/dist/index.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSdelivr"),s("OutboundLink")],1),t._v(" 加速下载，复制里面的内容。")]),t._v(" "),s("p",[t._v("进入"),s("a",{attrs:{href:"https://cloudflare.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("CloudFlare"),s("OutboundLink")],1),t._v(",注册账户，开通workers不再阐述。")]),t._v(" "),s("p",[t._v("点击KV选项，进入并创建一个KV桶，命名空间名称随意")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HexoPlusPlus/docs@master/docs/img/2.png",alt:""}})]),t._v(" "),s("p",[t._v("新建一个Worker，将获得的源代码直接复制到里头，修改左上角三级域名【可选】，点击保存并部署。\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HexoPlusPlus/docs@master/docs/img/1.png",alt:""}}),t._v("\n返回，先配置变量，"),s("code",[t._v("hpp_username")]),t._v("和"),s("code",[t._v("hpp_password")]),t._v("，这将分别为你的登录用户名和密码.")]),t._v(" "),s("blockquote",[s("p",[t._v("强烈建议两者加密保护安全。")])]),t._v(" "),s("blockquote",[s("p",[t._v("0.1.3版本及以上支持了多用户登录，多个用户名和密码请用英文符号"),s("code",[t._v(",")]),t._v("分割，并且一一对应")])]),t._v(" "),s("blockquote",[s("p",[t._v("例如：")])]),t._v(" "),s("blockquote",[s("p",[t._v("hpp_username：A,B,C")])]),t._v(" "),s("blockquote",[s("p",[t._v("hpp_password：A'sPassword,B'sPassword,C'sPassword")])]),t._v(" "),s("p",[t._v("再划到底下-KV 命名空间绑定-编辑变量-新增变量绑定-变量名称：KVNAME【此处不可更改】，KV命名空间：您之前写的空间名字，如图所示")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HexoPlusPlus/docs@master/docs/img/5.png",alt:""}})]),t._v(" "),s("p",[t._v("绑定域名【可选】")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HexoPlusPlus/docs@master/docs/img/11.png",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("此处域名后面必须加"),s("code",[t._v("/*")])])]),t._v(" "),s("blockquote",[s("p",[t._v("如果你直接将HPP绑定在博客以下，并且您的博客是由CloudFlare作为CDN的，那么请将绑定路由设置为"),s("code",[t._v("youdomain/hpp/*")])])]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("p",[t._v("直接进入域名会得到错误页面，请在后面加上"),s("code",[t._v("/hpp/admin/login")]),t._v("再登录。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HexoPlusPlus/docs@master/docs/img/3.png",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HexoPlusPlus/docs@master/docs/img/4.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"域名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#域名"}},[t._v("#")]),t._v(" "),s("code",[t._v("域名")])]),t._v(" "),s("p",[t._v("指HexoPlusPlus绑定的域名，可以是上一步自定义的域名，也可以是CloudFlare分配的三级域名")]),t._v(" "),s("h3",{attrs:{id:"头像地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#头像地址"}},[t._v("#")]),t._v(" "),s("code",[t._v("头像地址")])]),t._v(" "),s("p",[s("s",[t._v("就是头像地址呗")])]),t._v(" "),s("h3",{attrs:{id:"标题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标题"}},[t._v("#")]),t._v(" "),s("code",[t._v("标题")])]),t._v(" "),s("p",[s("s",[t._v("同上")])]),t._v(" "),s("h3",{attrs:{id:"跨域请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨域请求"}},[t._v("#")]),t._v(" "),s("code",[t._v("跨域请求")])]),t._v(" "),s("p",[t._v("默认为"),s("code",[t._v("*")]),t._v("，如果担心盗链，可以将其设置为博客域名")]),t._v(" "),s("h3",{attrs:{id:"github文档-图片仓库token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github文档-图片仓库token"}},[t._v("#")]),t._v(" "),s("code",[t._v("Github文档/图片仓库Token")])]),t._v(" "),s("p",[t._v("获得Token的用户至少能够修改github上存储文档/图片的Token，至少具有写入权和读取权，留空则导致文档功能无法使用.\n"),s("a",{attrs:{href:"https://github.com/settings/tokens/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("Token获取"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"github文档-图片仓库用户名-、github文档-图片仓库仓库名-、github文档-图片仓库路径、github文档-图片仓库分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github文档-图片仓库用户名-、github文档-图片仓库仓库名-、github文档-图片仓库路径、github文档-图片仓库分支"}},[t._v("#")]),t._v(" "),s("code",[t._v("Github文档/图片仓库用户名")]),t._v(" 、"),s("code",[t._v("Github文档/图片仓库仓库名")]),t._v(" 、"),s("code",[t._v("Github文档/图片仓库路径")]),t._v("、"),s("code",[t._v("Github文档/图片仓库分支")])]),t._v(" "),s("p",[t._v("如果我存储文档的Github完整路径是"),s("code",[t._v("https://github.com/ChenYFan/blog/tree/master/source/_posts")]),t._v("，那么以上配置分别为"),s("code",[t._v("ChenYFan")]),t._v("、"),s("code",[t._v("blog")]),t._v("、"),s("code",[t._v("/source/_posts/")]),t._v("、"),s("code",[t._v("master")]),t._v(".")]),t._v(" "),s("p",[t._v("这一切的前提都是您愿意将图片和文件存储在Github上。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("请注意！！！路径前后必须带"),s("code",[t._v("/")]),t._v("。")])])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("如果存在"),s("code",[t._v("abc")]),t._v("文件夹下,那么路径为"),s("code",[t._v("/abc/")]),t._v(",若存在根目录下,则为"),s("code",[t._v("/")])])])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("这个地方大小写敏感！点名表扬Lete")])])]),t._v(" "),s("h3",{attrs:{id:"global-api-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-api-key"}},[t._v("#")]),t._v(" "),s("code",[t._v("Global API Key")])]),t._v(" "),s("p",[t._v("CloudFlare的Global API Key，用于修改Worker代码以实现自动更新，在"),s("a",{attrs:{href:"https://dash.cloudflare.com/profile/api-tokens",target:"_blank",rel:"noopener noreferrer"}},[t._v("API 密钥"),s("OutboundLink")],1),t._v("获取")]),t._v(" "),s("blockquote",[s("p",[t._v("注意！这地方不是"),s("strong",[t._v("API 令牌")]),t._v("，而是"),s("strong",[t._v("API 密钥")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HexoPlusPlus/docs@master/docs/img/16.png",alt:""}})]),t._v(" "),s("p",[t._v("点击查看，输入密码，复制即可")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Global API Key是您账户中权限最高的token，请不要泄露")])])]),t._v(" "),s("h3",{attrs:{id:"目标workers名称"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目标workers名称"}},[t._v("#")]),t._v(" "),s("code",[t._v("目标Workers名称")])]),t._v(" "),s("p",[t._v("在"),s("a",{attrs:{href:"#%E9%83%A8%E7%BD%B2%E4%BB%A3%E7%A0%81"}},[t._v("部署代码")]),t._v("这一步中填写的三级域名名称，文档中的例子是"),s("code",[t._v("white-feather-f3eb")])]),t._v(" "),s("h3",{attrs:{id:"workers账户id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#workers账户id"}},[t._v("#")]),t._v(" "),s("code",[t._v("Workers账户ID")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HexoPlusPlus/docs@master/docs/img/17.png",alt:""}})]),t._v(" "),s("p",[t._v("Worker界面中的账户ID")]),t._v(" "),s("h3",{attrs:{id:"账户登录邮箱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#账户登录邮箱"}},[t._v("#")]),t._v(" "),s("code",[t._v("账户登录邮箱")])]),t._v(" "),s("p",[t._v("指您CloudFlare登陆时所需的邮箱")]),t._v(" "),s("h3",{attrs:{id:"是否自动签到"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#是否自动签到"}},[t._v("#")]),t._v(" "),s("code",[t._v("是否自动签到")])]),t._v(" "),s("p",[t._v("指自动记录博主最近登录时间，开启会大量损耗KV写入限额，"),s("strong",[t._v("不建议开启")]),t._v("。")]),t._v(" "),s("p",[t._v("填写完毕，提交即可！现在，你将进入主页。"),s("RouterLink",{attrs:{to:"/faq/#a2"}},[t._v("刷新之后还停留在配置页面？")])],1)])}),[],!1,null,null,null);e.default=o.exports}}]);