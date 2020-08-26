(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{341:function(a,t,s){"use strict";s.r(t);var e=s(33),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"aware接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aware接口"}},[a._v("#")]),a._v(" Aware接口")]),a._v(" "),s("p",[a._v("首先声明这种 "),s("code",[a._v("Aware")]),a._v(" 接口是从 "),s("code",[a._v("Spring")]),a._v(" 中借鉴(抄袭)的 😂😂😂😂😂😂。")]),a._v(" "),s("p",[a._v("所以你要是知道 "),s("code",[a._v("Spring")]),a._v(" 中的诸如 "),s("code",[a._v("ApplicationContextAware")]),a._v("、"),s("code",[a._v("EnvironmentAware")]),a._v(" 等就几乎没必要看本小节了。")]),a._v(" "),s("h2",{attrs:{id:"为什么会提供？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么会提供？"}},[a._v("#")]),a._v(" 为什么会提供？")]),a._v(" "),s("p",[a._v("在用注解解析映射请求报文到实体类的时候，字段长度等的计算可能会依赖于消息头中的一些属性。")]),a._v(" "),s("p",[a._v("所以在基于注解的实体类映射时，你可以给实体类实现这些接口以自动注入一些其他信息。")]),a._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),s("p",[a._v("目前为止，这些Aware接口只能在 "),s("RouterLink",{attrs:{to:"/jt-808/guide/annotation-based-dev/req-msg-mapping.html"}},[a._v("基于注解处理请求消息映射")]),a._v(" 时用于 "),s("code",[a._v("请求体消息实体类")]),a._v(" 中。")],1)]),a._v(" "),s("h2",{attrs:{id:"requestmsgheaderaware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requestmsgheaderaware"}},[a._v("#")]),a._v(" RequestMsgHeaderAware")]),a._v(" "),s("p",[a._v("每次消息处理时为实体类注入 "),s("code",[a._v("RequestMsgHeader")]),a._v(" 实例。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RequestMsgHeaderAware")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setRequestMsgHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RequestMsgHeader")]),a._v(" header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"requestmsgmetadataaware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requestmsgmetadataaware"}},[a._v("#")]),a._v(" RequestMsgMetadataAware")]),a._v(" "),s("p",[a._v("每次消息处理时为实体类注入 "),s("code",[a._v("RequestMsgMetadata")]),a._v(" 实例。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RequestMsgMetadataAware")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setRequestMsgMetadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RequestMsgMetadata")]),a._v(" metadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"bytesencoderaware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bytesencoderaware"}},[a._v("#")]),a._v(" BytesEncoderAware")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),s("p",[a._v("有关 "),s("code",[a._v("BytesEncoder")]),a._v(" 的内容，"),s("RouterLink",{attrs:{to:"/jt-808/guide/customization/escape-config.html"}},[a._v("请移步此处")]),a._v("。")],1)]),a._v(" "),s("ul",[s("li",[s("code",[a._v("MsgHandler")]),a._v(" 中可以实现该接口以注入 "),s("code",[a._v("BytesEncoder")]),a._v(" 给处理器实例。")]),a._v(" "),s("li",[a._v("当然如果是自定义的 "),s("code",[a._v("MsgHandler")]),a._v("（接口实现类），完全可以使用 "),s("code",[a._v("Spring")]),a._v(" 的依赖注入的方式来使用 "),s("code",[a._v("BytesEncoder")]),a._v(" 实例。")]),a._v(" "),s("li",[a._v("内置的 "),s("code",[a._v("MsgHandler")]),a._v(" 都实现了该接口。")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BytesEncoderAware")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setBytesEncoder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BytesEncoder")]),a._v(" bytesEncoder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);