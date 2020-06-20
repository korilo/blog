(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{356:function(t,a,s){"use strict";s.r(a);var v=s(33),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"块盒浮动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#块盒浮动"}},[t._v("#")]),t._v(" 块盒浮动")]),t._v(" "),s("p",[s("strong",[t._v("浮动的盒子都是块盒")])]),t._v(" "),s("p",[t._v("如果元素原来不是块盒，将会强制转换成块盒")]),t._v(" "),s("p",[t._v("强制转换：display: block")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"浮动元素包含块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浮动元素包含块"}},[t._v("#")]),t._v(" 浮动元素包含块")]),t._v(" "),s("p",[t._v("浮动元素的包含块和文档流的一样，也为父元素的内容盒content")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"盒子auto含义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#盒子auto含义"}},[t._v("#")]),t._v(" 盒子auto含义")]),t._v(" "),s("h3",{attrs:{id:"width-auto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#width-auto"}},[t._v("#")]),t._v(" width: auto")]),t._v(" "),s("hr"),t._v(" "),s("p",[s("strong",[t._v("文档流")]),t._v("：块级元素的width默认值是auto(填充剩余空间)")]),t._v(" "),s("p",[s("strong",[t._v("浮动后")]),t._v("：width的默认值虽然还是auto，但却变成内容撑开，与文档流里height的auto意义一样")]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"height-auto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#height-auto"}},[t._v("#")]),t._v(" height: auto")]),t._v(" "),s("hr"),t._v(" "),s("p",[s("strong",[t._v("浮动后")]),t._v("：height的auto与文档流里一致，由内容撑开")]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"margin-auto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#margin-auto"}},[t._v("#")]),t._v(" margin: auto")]),t._v(" "),s("hr"),t._v(" "),s("p",[s("strong",[t._v("文档流中")]),t._v("：水平方向margin设置为auto时会填充剩余空间，优先级低于width")]),t._v(" "),s("p",[s("strong",[t._v("浮动后")]),t._v("：水平方向margin设置为auto时与设置成0等效")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"浮动盒子位置规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浮动盒子位置规则"}},[t._v("#")]),t._v(" 浮动盒子位置规则")]),t._v(" "),s("ol",[s("li",[t._v("左浮动的盒子向上向左排列")]),t._v(" "),s("li",[t._v("右浮动的盒子向上向右排列")]),t._v(" "),s("li",[t._v("浮动盒子的顶边不得高于上一个盒子顶边")]),t._v(" "),s("li",[t._v("若剩余空间无法放下浮动的盒子，则该盒子向下移动，直到具备足够的空间能容纳盒子，再根据左（右）浮动向左向右移动")])]),t._v(" "),s("p",[s("strong",[t._v("注意")]),t._v("：当浮动盒子的width没有设置或为auto时，盒子的宽度由内容撑开，当剩余空间小于撑开后的宽度时，盒子向下移动，在新的一行显示。若撑开后的宽度还是大于页面宽度，浮动盒子的内容才进行换行")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"匿名行盒"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#匿名行盒"}},[t._v("#")]),t._v(" 匿名行盒")]),t._v(" "),s("ul",[s("li",[t._v("浮动盒子的排列规则：\n"),s("ul",[s("li",[t._v("浮动盒子不会超过前一个文档流块盒")]),t._v(" "),s("li",[t._v("行盒在排列时会避开浮动盒子")])])])]),t._v(" "),s("p",[t._v("利用第二个规则，可以实现文字环绕图片的效果")]),t._v(" "),s("p",[s("strong",[t._v("提问")]),t._v("：p标签是块盒，为什么文字会避开浮动图片")]),t._v(" "),s("p",[s("strong",[t._v("原因")]),t._v("：浏览器会自动在文字外生成一个"),s("strong",[t._v("匿名行盒")]),t._v("来保存文字内容，p标签是块盒，实际上并没有避开浮动元素，而是被覆盖，而文字内容被匿名行盒包裹，最终产生了只有文字避开了浮动元素的效果")]),t._v(" "),s("h2",{attrs:{id:"高度塌陷"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高度塌陷"}},[t._v("#")]),t._v(" 高度塌陷")]),t._v(" "),s("p",[t._v("高度塌陷的根源：")]),t._v(" "),s("p",[t._v("文档流盒子的自动高度，在计算时，不会考虑浮动盒子内容")]),t._v(" "),s("p",[t._v("解决方法：")]),t._v(" "),s("ol",[s("li",[t._v("清除浮动")])]),t._v(" "),s("p",[s("strong",[t._v("注意")]),t._v("：清除浮动不是说不浮动，是让块盒不无视浮动盒子。"),s("strong",[t._v("注意清除浮动的对象")])]),t._v(" "),s("ul",[s("li",[t._v("clear属性\n"),s("ul",[s("li",[t._v("left: 清除左浮动，该元素必须出现在前面所有左浮动盒子的下方")]),t._v(" "),s("li",[t._v("right: 清除右浮动，该元素必须出现在前面所有右浮动盒子的下方")]),t._v(" "),s("li",[t._v("both: 清除所有浮动，该元素必须考虑浮动盒子的位置")])])])]),t._v(" "),s("p",[s("strong",[t._v("能够解决高度塌陷的原因：")])]),t._v(" "),s("p",[t._v("文档流中，在父盒子的末尾插入一个空盒子，对其清除浮动，该盒子就会考虑浮动盒子的位置，从而显示在浮动盒子下方，而父盒子计算到该空盒子的位置，就撑开了父盒子")]),t._v(" "),s("p",[t._v("一般利用css伪元素来实现相同的功能：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clearfix::after")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" both"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("注意")]),t._v("：该类应该给父容器")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("开启BFC")])]),t._v(" "),s("p",[t._v("设置overflow: hidden")])])}),[],!1,null,null,null);a.default=_.exports}}]);