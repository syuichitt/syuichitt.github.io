(this["webpackJsonpreact-music"]=this["webpackJsonpreact-music"]||[]).push([[8],{160:function(n,e,t){"use strict";var a,r=t(0),i=t.n(r),c=t(12),o=t(13).a.div(a||(a=Object(c.a)(['\n  display: flex;\n  padding-bottom: 5px;\n  border-bottom: 2px solid #c20c0c;\n  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;\n  font-size: 24px;\n'])));e.a=Object(r.memo)((function(n){var e=n.title,t=n.rightSlot;return i.a.createElement(o,null,i.a.createElement("div",{className:"title"},e),i.a.createElement("div",{className:"right"},t))}))},161:function(n,e,t){"use strict";var a,r=t(0),i=t.n(r),c=t(201),o=t(12),l=t(13).a.div(a||(a=Object(o.a)(["\n  .pagination {\n    margin: 30px 0;\n    text-align: center;\n\n    .control {\n      width: 69px;\n      height: 24px;\n      line-height: 22px;\n      text-align: center;\n      border: 1px solid #ccc;\n      border-radius: 2px;\n      margin: 0 5px;\n      color: #333;\n\n      &:disabled {\n        color: #999;\n      }\n    }\n\n    .ant-pagination-item {\n      border: 1px solid #ccc !important;\n      margin: 0 5px;\n      border-radius: 3px;\n\n      a {\n        font-size: 12px;\n      }\n\n      &.ant-pagination-item-active {\n        background-color: #c20c0c;\n        border-color: #A2161B;\n        a {\n          color: #fff;\n        }\n      }\n    }\n  }\n"])));e.a=Object(r.memo)((function(n){var e=n.currentPage,t=n.total,a=n.onPageChange;return i.a.createElement(l,null,i.a.createElement(c.a,{className:"pagination",size:"small",current:e,defaultCurrent:1,total:t,pageSize:35,showSizeChanger:!1,itemRender:function(n,e,t){return"prev"===e?i.a.createElement("button",{className:"control prev"}," < \u4e0a\u4e00\u9875"):"next"===e?i.a.createElement("button",{className:"control next"},"\u4e0a\u4e00\u9875 >"):t},onChange:a}))}))},203:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(19),c=t(4),o=t.n(c),l=t(42);var d,s,m,u,p,f,g,b,x=t(56),j=function(n){return{type:x.a,currentId:n}},h=function(){return function(n){Object(l.a)({url:"/dj/catelist"}).then((function(e){n(function(n){return{type:x.c,categories:n.categories}}(e));var t=e.categories[0].id;n(j(t))}))}},E=function(n){return function(e){var t;(t=n,Object(l.a)({url:"/dj/recommend/type",params:{type:t}})).then((function(n){e(function(n){return{type:x.d,recommends:n.djRadios}}(n))}))}},v=function(n,e){return function(t){(function(n,e,t){return Object(l.a)({url:"/dj/radio/hot",params:{cateId:n,limit:e,offset:t}})})(n,30,e).then((function(n){t(function(n){return{type:x.b,radios:n.djRadios}}(n))}))}},O=t(12),y=t(13),w=y.a.div(d||(d=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  margin: 0 -40px;\n"]))),N=y.a.div(s||(s=Object(O.a)(["\n  \n  flex: 1;\n  width: 900px;\n\n  .category-page {\n    display: flex !important;\n    flex-wrap: wrap;\n    padding-left: 50px;\n    padding-bottom: 20px;\n\n    .category-item {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      margin: 10px;\n      width: 70px;\n      height: 70px;\n      font-size: 12px;\n      cursor: pointer;\n      border-radius: 5px;\n      text-align: center;\n      border: 2px solid transparent;\n\n      :hover {\n        background-color: #eee;\n      }\n\n      &.active {\n        color: #C20C0C;\n        border: 2px solid #d35757;\n\n        .image {\n          background-position: -48px 0;\n        }\n      }\n    }\n  }\n"]))),k=y.a.div(m||(m=Object(O.a)(["\n  width: 48px;\n  height: 48px;\n  background-image: url(",");\n"])),(function(n){return n.imgUrl})),I=Object(a.memo)((function(){var n=Object(i.c)(),e=Object(i.d)((function(n){return{categories:n.getIn(["djradio","categories"]),currentId:n.getIn(["djradio","currentId"])}}),i.b),t=e.categories,c=e.currentId;return Object(a.useEffect)((function(){n(h())}),[n]),r.a.createElement(w,null,r.a.createElement(N,null,r.a.createElement("div",{className:"category-page"},t.map((function(e,t){return r.a.createElement("div",{key:e.id,onClick:function(t){return n(j(e.id))},className:o()("category-item",{active:c===e.id})},r.a.createElement(k,{className:"image",imgUrl:e.picWebUrl}),r.a.createElement("span",null,e.name))})))))})),C=t(160),z=t(40),S=y.a.div(u||(u=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 150px;\n  \n  span{\n    text-align:center;\n  }\n  .name {\n    font-size: 14px;\n    color: #333;\n    margin: 5px 0;\n    text-align:center;\n  }\n\n  img {\n    width: 150px;\n    height: 150px;\n  }\n\n  .description {\n    color: #666;\n  }\n"]))),U=Object(a.memo)((function(n){var e=n.info;return r.a.createElement(S,null,r.a.createElement("img",{src:Object(z.e)(e.picUrl,150),alt:""}),r.a.createElement("span",{href:"/#",className:"text-nowrap name"},e.name),r.a.createElement("span",{className:"text-nowrap description"},e.desc))})),P=y.a.div(p||(p=Object(O.a)(["\n  .radio-list {\n    margin: 20px 0 40px;\n    display: flex;\n    justify-content: space-between;\n  }\n"]))),R=Object(a.memo)((function(){var n=Object(i.d)((function(n){return{currentId:n.getIn(["djradio","currentId"]),recommends:n.getIn(["djradio","recommends"])}}),i.b),e=n.currentId,t=n.recommends,c=Object(i.c)();return Object(a.useEffect)((function(){0!==e&&c(E(e))}),[c,e]),r.a.createElement(P,null,r.a.createElement(C.a,{title:"\u4f18\u79c0\u65b0\u7535\u53f0"}),r.a.createElement("div",{className:"radio-list"},t.slice(0,5).map((function(n){return r.a.createElement(U,{info:n,key:n.id})}))))})),A=t(41),J=y.a.div(f||(f=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  width: 48%;\n  padding: 20px 0;\n  border-bottom: 1px solid #e7e7e7;\n\n  img {\n    width: 120px;\n    height: 120px;\n  }\n\n  .info {\n    margin-left: 20px;\n\n    .nickname {\n      margin-top: 15px;\n      color: #000;\n      display:flex;\n      \n      i.left {\n        display: inline-block;\n        width: 14px;\n        height: 15px;\n        margin-right: 2px;\n        background-position: -50px -300px;\n      }\n    }\n\n    .count {\n      color: #666;\n      margin-top: 5px;\n      .subscribe {\n        margin-left: 10px;\n      }\n    }\n  }\n"]))),_=Object(a.memo)((function(n){var e=n.radio;return r.a.createElement(J,null,r.a.createElement("img",{src:Object(z.e)(e.picUrl,120),alt:""}),r.a.createElement("div",{className:"info"},r.a.createElement("h2",{className:"title"},e.name),r.a.createElement("div",{className:"nickname sprite_icon2"},r.a.createElement("i",{className:"sprite_icon2 left"}),e.dj.nickname),r.a.createElement("div",{className:"count"},r.a.createElement("span",{className:"phase"},"\u5171",e.programCount,"\u671f"),r.a.createElement("span",{className:"subscribe"},"\u8ba2\u9605",e.subCount,"\u6b21"))))})),B=t(161),H=y.a.div(g||(g=Object(O.a)(["\n  .ranking-list {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n  }\n"]))),M=Object(a.memo)((function(){var n=Object(a.useState)(1),e=Object(A.a)(n,2),t=e[0],c=e[1],o=Object(i.d)((function(n){return{currentId:n.getIn(["djradio","currentId"]),radios:n.getIn(["djradio","radios"])}}),i.b),l=o.currentId,d=o.radios,s=Object(i.c)();Object(a.useEffect)((function(){0!==l&&s(v(l,0))}),[s,l]);return r.a.createElement(H,null,r.a.createElement(C.a,{title:"\u7535\u53f0\u6392\u884c\u699c"}),r.a.createElement("div",{className:"ranking-list"},d.map((function(n,e){return r.a.createElement(_,{key:n.id,radio:n})}))),r.a.createElement(B.a,{currentPage:t,total:1e3,pageSize:30,onPageChange:function(n,e){c(n),s(v(l,30*n))}}))})),W=y.a.div(b||(b=Object(O.a)(["\n  border: 1px solid #d3d3d3;\n  border-width: 0 1px;\n  background-color: #fff;\n  padding: 40px;\n"])));e.default=Object(a.memo)((function(){return r.a.createElement(W,{className:"wrap-v2"},r.a.createElement(I,null),r.a.createElement(R,null),r.a.createElement(M,null))}))}}]);
//# sourceMappingURL=8.f5119532.chunk.js.map