(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{179:function(e,v,a){"use strict";a.r(v);var t=a(0),r=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,v=e.$createElement,a=e._self._c||v;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue","aria-hidden":"true"}},[e._v("#")]),e._v(" vue")]),e._v(" "),a("h2",{attrs:{id:"生命周期钩子函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期钩子函数","aria-hidden":"true"}},[e._v("#")]),e._v(" 生命周期钩子函数")]),e._v(" "),a("p",[e._v("在 "),a("code",[e._v("beforeCreate")]),e._v(" 钩子函数调用的时候，是获取不到 "),a("code",[e._v("props")]),e._v(" 或者 "),a("code",[e._v("data")]),e._v(" 中的数据的，因为这些数据的初始化都在 "),a("code",[e._v("initState")]),e._v(" 中。")]),e._v(" "),a("p",[e._v("然后会执行 "),a("code",[e._v("created")]),e._v(" 钩子函数，在这一步的时候已经可以访问到之前不能访问到的数据，但是这时候组件还没被挂载，所以是看不到的。")]),e._v(" "),a("p",[e._v("接下来会先执行 "),a("code",[e._v("beforeMount")]),e._v(" 钩子函数，开始创建 "),a("code",[e._v("VDOM，最后执行")]),e._v(" "),a("code",[e._v("mounted")]),e._v(" 钩子，并将 "),a("code",[e._v("VDOM")]),e._v(" 渲染为真实 "),a("code",[e._v("DOM")]),e._v(" 并且渲染数据。组件中如果有子组件的话，会递归挂载子组件，只有当所有子组件全部挂载完毕，才会执行根组件的挂载钩子。")]),e._v(" "),a("p",[e._v("接下来是数据更新时会调用的钩子函数 "),a("code",[e._v("beforeUpdate")]),e._v(" 和 "),a("code",[e._v("updated")]),e._v(" ，这两个钩子函数没什么好说的，就是分别在数据更新前和更新后会调用。")]),e._v(" "),a("p",[e._v("另外还有 "),a("code",[e._v("keep-alive")]),e._v(" 独有的生命周期，分别为 "),a("code",[e._v("activated")]),e._v(" 和 "),a("code",[e._v("deactivated")]),e._v(" 。用 "),a("code",[e._v("keep-alive")]),e._v(" 包裹的组件在切换时不会进行销毁，而是缓存到内存中并执行 "),a("code",[e._v("deactivated")]),e._v(" 钩子函数，命中缓存渲染后会执行 "),a("code",[e._v("actived")]),e._v(" 钩子函数。")]),e._v(" "),a("p",[e._v("最后就是销毁组件的钩子函数 "),a("code",[e._v("beforeDestroy")]),e._v(" 和 "),a("code",[e._v("destroyed")]),e._v(" 。前者适合移除事件、定时器等等，否则可能会引起内存泄露的问题。然后进行一系列的销毁操作，如果有子组件的话，也会递归销毁子组件，所有子组件都销毁完毕后才会执行根组件的 "),a("code",[e._v("destroyed")]),e._v(" 钩子函数。")]),e._v(" "),a("h2",{attrs:{id:"组件中-data-什么时候可以使用对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件中-data-什么时候可以使用对象","aria-hidden":"true"}},[e._v("#")]),e._v(" 组件中 data 什么时候可以使用对象")]),e._v(" "),a("p",[e._v("组件复用时所有组件实例都会共享 "),a("code",[e._v("data")]),e._v(" ，如果 "),a("code",[e._v("data")]),e._v(" 是对象的话，就会造成一个组件修改 "),a("code",[e._v("data")]),e._v(" 以后会影响到其他所有组件，所以需要将 "),a("code",[e._v("data")]),e._v(" 写成函数，每次用到就调用一次函数获得新的数据。")]),e._v(" "),a("p",[e._v("当我们使用 "),a("code",[e._v("new Vue()")]),e._v(" 的方式的时候，无论我们将 "),a("code",[e._v("data")]),e._v(" 设置为对象还是函数都是可以的，因为 "),a("code",[e._v("new Vue()")]),e._v(" 的方式是生成一个根组件，该组件不会复用，也就不存在共享 "),a("code",[e._v("data")]),e._v(" 的情况了。")]),e._v(" "),a("h2",{attrs:{id:"keep-alive-实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive-实现原理","aria-hidden":"true"}},[e._v("#")]),e._v(" keep-alive 实现原理")]),e._v(" "),a("ul",[a("li",[e._v("首先，你要知道Vue.js内部将DOM节点抽象成了一个个的VNode节点。所以，keep-alive的缓存也是基于VNode节点的而不是直接存储DOM结构。")]),e._v(" "),a("li",[e._v("其实就是将需要缓存的VNode节点保存在this.cache中／在render时, 如果VNode的name符合在缓存条件（可以用include以及exclude控制），则会从this.cache中取出之前缓存的VNode实例进行渲染。")])]),e._v(" "),a("h2",{attrs:{id:"事件修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件修饰符","aria-hidden":"true"}},[e._v("#")]),e._v(" 事件修饰符")]),e._v(" "),a("ul",[a("li",[e._v("stop")]),e._v(" "),a("li",[e._v("prevent")]),e._v(" "),a("li",[e._v("capture")]),e._v(" "),a("li",[e._v("self")]),e._v(" "),a("li",[e._v("once")]),e._v(" "),a("li",[e._v("passive")]),e._v(" "),a("li",[e._v("once")]),e._v(" "),a("li",[e._v("async")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\x3c!-- 阻止单击事件继续传播 --\x3e\n<a v-on:click.stop="doThis"></a>\n\n\x3c!-- 提交事件不再重载页面 --\x3e\n<form v-on:submit.prevent="onSubmit"></form>\n\n\x3c!-- 修饰符可以串联 --\x3e\n<a v-on:click.stop.prevent="doThat"></a>\n\n\x3c!-- 只有修饰符 --\x3e\n<form v-on:submit.prevent></form>\n\n\x3c!-- 添加事件监听器时使用事件捕获模式 --\x3e\n\x3c!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 --\x3e\n<div v-on:click.capture="doThis">...</div>\n\n\x3c!-- 只当在 event.target 是当前元素自身时触发处理函数 --\x3e\n\x3c!-- 即事件不是从内部元素触发的 --\x3e\n<div v-on:click.self="doThat">...</div>\n\n\x3c!-- 点击事件将只会触发一次 --\x3e\n<a v-on:click.once="doThis"></a>\n')])])]),a("h2",{attrs:{id:"组件通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件通信","aria-hidden":"true"}},[e._v("#")]),e._v(" 组件通信")]),e._v(" "),a("h3",{attrs:{id:"父子组件通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父子组件通信","aria-hidden":"true"}},[e._v("#")]),e._v(" 父子组件通信")]),e._v(" "),a("p",[e._v("1.props: 父组件通过 "),a("code",[e._v("props")]),e._v(" 传递数据给子组件，子组件通过 "),a("code",[e._v("emit")]),e._v(" 发送事件传递数据给父组件，这两种方式是最常用的父子通信实现办法。")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("v-model")]),e._v(" , "),a("code",[e._v(".async")]),e._v(" 修饰符都是语法糖，原理还是子组件派发事件")])]),e._v(" "),a("h3",{attrs:{id:"兄弟组件通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#兄弟组件通信","aria-hidden":"true"}},[e._v("#")]),e._v(" 兄弟组件通信")]),e._v(" "),a("ol",[a("li",[e._v("vuex")]),e._v(" "),a("li",[e._v("eventBus")])]),e._v(" "),a("p",[e._v("eventBus的原理是引入一个新的vue实例，然后通过分别调用这个实例的事件触发和监听来实现通信和参数传递")]),e._v(" "),a("h3",{attrs:{id:"跨多层次组件通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨多层次组件通信","aria-hidden":"true"}},[e._v("#")]),e._v(" 跨多层次组件通信")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("provide / inject")])])]),e._v(" "),a("h2",{attrs:{id:"computed-和-watch-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed-和-watch-区别","aria-hidden":"true"}},[e._v("#")]),e._v(" computed 和 watch 区别")]),e._v(" "),a("ul",[a("li",[e._v("computed 是计算属性，依赖其他属性计算值，并且 computed 的值有缓存，只有当计算值变化才会返回内容。")]),e._v(" "),a("li",[e._v("watch 监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作。")])]),e._v(" "),a("p",[e._v("需要依赖别的属性来动态获得值的时候可以使用 computed，对于监听到值的变化需要做一些复杂业务逻辑的情况可以使用 watch。")]),e._v(" "),a("h2",{attrs:{id:"vue响应式原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue响应式原理","aria-hidden":"true"}},[e._v("#")]),e._v(" vue响应式原理")]),e._v(" "),a("p",[a("code",[e._v("Object.defineProperty()")]),e._v(" 来劫持各个属性的 "),a("code",[e._v("setter / getter")]),e._v(" ，在数据变动时发布消息给订阅者，触发相应的监听回调。")]),e._v(" "),a("h2",{attrs:{id:"什么是-mvvm，与-mvc-有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-mvvm，与-mvc-有什么区别","aria-hidden":"true"}},[e._v("#")]),e._v(" 什么是 MVVM，与 MVC 有什么区别")]),e._v(" "),a("h3",{attrs:{id:"mvvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvvm","aria-hidden":"true"}},[e._v("#")]),e._v(" MVVM")]),e._v(" "),a("p",[e._v("MVVM是Model-View-ViewModel的简写。即模型-视图-视图模型。【模型】指的是数据。【视图】指的是所看到的页面。【视图模型】mvvm模式的核心，它是连接view和model的桥梁。")]),e._v(" "),a("p",[e._v("在MVVM的框架下视图和模型是不能直接通信的。它们通过ViewModel来通信，ViewModel通常要实现一个observer观察者，当数据发生变化，ViewModel能够监听到数据的这种变化，然后通知到对应的视图做自动更新，而当用户操作视图，ViewModel也能监听到视图的变化，然后通知数据做改动")]),e._v(" "),a("h3",{attrs:{id:"mvc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvc","aria-hidden":"true"}},[e._v("#")]),e._v(" MVC")]),e._v(" "),a("p",[e._v("MVC是Model-View- Controller的简写。即模型-视图-控制器。M和V指的意思和MVVM中的M和V意思一样。C即Controller指的是页面业务逻辑。使用MVC的目的就是将M和V的代码分离。‘MVC是单向通信。也就是View跟Model，必须通过Controller来承上启下。")]),e._v(" "),a("h3",{attrs:{id:"mvc-和-mvvm-对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvc-和-mvvm-对比","aria-hidden":"true"}},[e._v("#")]),e._v(" MVC 和 MVVM 对比")]),e._v(" "),a("ul",[a("li",[e._v("MVC模式需要频繁的操作DOM，这样页面就有大量DOM绑定与监听类的操作。")]),e._v(" "),a("li",[e._v("MVVM通过 "),a("code",[e._v("数据双向绑定")]),e._v(" 让数据自动地双向同步，V修改数据自动同步M、M修改数据自动同步到V")])]),e._v(" "),a("h2",{attrs:{id:"v-model-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-model-原理","aria-hidden":"true"}},[e._v("#")]),e._v(" v-model 原理")]),e._v(" "),a("p",[a("code",[e._v("v-model")]),e._v(" 是语法糖， 默认会利用名为 value 的 prop 和名为 input 的事件，通过子组件派发事件，父组件监听事件，改变对应的值，然后传回给子组件。")]),e._v(" "),a("p",[a("code",[e._v("model")]),e._v(" 选项可以自定义需要绑定的变量名和事件名")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("model: {\n    prop: 'checked',\n    event: 'change'\n  }\n")])])]),a("h2",{attrs:{id:"nexttick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nexttick","aria-hidden":"true"}},[e._v("#")]),e._v(" $nextTick")]),e._v(" "),a("p",[a("code",[e._v("nextTick")]),e._v(" 可以让我们在下次 DOM 更新循环结束之后执行延迟回调，用于获得更新后的 DOM")]),e._v(" "),a("h2",{attrs:{id:"vue-router-知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-知识点","aria-hidden":"true"}},[e._v("#")]),e._v(" vue-router 知识点")]),e._v(" "),a("h3",{attrs:{id:"vue-router有哪几种导航钩子（-导航守卫-）？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router有哪几种导航钩子（-导航守卫-）？","aria-hidden":"true"}},[e._v("#")]),e._v(" vue-router有哪几种导航钩子（ 导航守卫 ）？")]),e._v(" "),a("ol",[a("li",[e._v("全局守卫： router.beforeEach")]),e._v(" "),a("li",[e._v("全局解析守卫： router.beforeResolve")]),e._v(" "),a("li",[e._v("全局后置钩子： router.afterEach")]),e._v(" "),a("li",[e._v("路由独享的守卫： beforeEnter")]),e._v(" "),a("li",[e._v("组件内的守卫： beforeRouteEnter、beforeRouteUpdate (2.2 新增)、beforeRouteLeave")])]),e._v(" "),a("h3",{attrs:{id:"hash-模式和-history-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash-模式和-history-模式","aria-hidden":"true"}},[e._v("#")]),e._v(" hash 模式和 history 模式")]),e._v(" "),a("h4",{attrs:{id:"hash-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash-模式","aria-hidden":"true"}},[e._v("#")]),e._v(" hash 模式")]),e._v(" "),a("p",[e._v("#后面 hash 值的变化，并不会导致浏览器向服务器发出请求，浏览器不发出请求，也就不会刷新页面。每次 hash 值的变化，会触发hashchange 这个事件，通过这个事件我们就可以知道 hash 值发生了哪些变化。然后我们便可以监听hashchange来实现更新页面部分内容的操作")]),e._v(" "),a("h4",{attrs:{id:"history-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#history-模式","aria-hidden":"true"}},[e._v("#")]),e._v(" history 模式")]),e._v(" "),a("p",[e._v("history模式则会将URL修改得就和正常请求后端的URL一样, 如后端没有配置对应/user/id的路由处理，则会返回404错误。")]),e._v(" "),a("blockquote",[a("p",[e._v("当用户刷新页面之类的操作时，浏览器会给服务器发送请求，所以这个实现需要服务器的支持，需要把所有路由都重定向到 "),a("code",[e._v("根页面")]),e._v(" 。")])])])}],!1,null,null,null);v.default=r.exports}}]);