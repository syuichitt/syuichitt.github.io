(this["webpackJsonpreact-music"]=this["webpackJsonpreact-music"]||[]).push([[5],{163:function(n,e,t){"use strict";var a,i=t(0),r=t.n(i),l=t(40),c=t(12),o=t(13).a.div(a||(a=Object(c.a)(["\n  .album-image {\n    position: relative;\n    width: ",";\n    height: ",";\n    overflow: hidden;\n    margin-top: 15px;\n\n    img {\n      width: ",";\n      height: ",";\n    }\n\n    .cover {\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      background-position: 0 ",";\n      text-indent: -9999px;\n    }\n  }\n\n  .album-info {\n    font-size: 12px;\n    width: ",";\n    .name {\n      color: #000;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n    }\n\n    .artist {\n      color: #666;\n    }\n  }\n"])),(function(n){return n.width}),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.bgp}),(function(n){return n.size}));e.a=Object(i.memo)((function(n){var e=n.info,t=n.size,a=n.width,i=n.bgp;return r.a.createElement(o,{size:t,width:a,bgp:i},r.a.createElement("div",{className:"album-image"},r.a.createElement("img",{src:Object(l.e)(e.picUrl,150),alt:""}),r.a.createElement("div",{className:"cover sprite_covor"},e.name)),r.a.createElement("div",{className:"album-info"},r.a.createElement("div",{className:"name"},e.name),r.a.createElement("div",{className:"artist"},e.artist.name)))}))},166:function(n,e,t){"use strict";var a,i=t(0),r=t.n(i),l=t(40),c=t(12),o=t(13).a.div(a||(a=Object(c.a)(["\n  width: 140px;\n  margin: 20px "," 20px 0;\n\n  .cover-top {\n    position: relative;\n\n    &>img {\n      width: 140px;\n      height: 140px;\n    }\n    \n      .info {\n        width:100%;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 0 10px;\n        position: absolute;\n        bottom: 0;\n        background-position: 0 -537px;\n        color: #ccc;\n        height: 27px;\n\n        .erji {\n          margin-right: 5px;\n          display: inline-block;\n          width: 14px;\n          height: 11px;\n          background-position: 0 -24px;\n        }\n\n        .play {\n          display: inline-block;\n          width: 16px;\n          height: 17px;\n          background-position: 0 0;\n        }\n      }\n    \n  }\n\n  .cover-bottom {\n    font-size: 14px;\n    color: #000;\n    margin-top: 5px;\n  }\n\n  .cover-source {\n    color: #666;\n  }\n"])),(function(n){return n.right||0}));e.a=Object(i.memo)((function(n){var e=n.info,t=n.right;return r.a.createElement(o,{right:t},r.a.createElement("div",{className:"cover-top"},r.a.createElement("img",{src:Object(l.e)(e.picUrl||e.coverImgUrl,140),alt:""}),r.a.createElement("div",{className:"info sprite_covor"},r.a.createElement("span",null,r.a.createElement("i",{className:"sprite_icon erji"}),Object(l.c)(e.playCount)),r.a.createElement("i",{className:"sprite_icon play"}))),r.a.createElement("div",{className:"cover-bottom text-nowrap"},e.name),r.a.createElement("div",{className:"cover-source"},"by ",e.copywriter||e.creator.nickname))}))},173:function(n,e,t){n.exports=t.p+"static/media/download.90d71224.png"},174:function(n,e){n.exports="data:image/png;base64,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"},187:function(n,e){n.exports="data:image/png;base64,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"},199:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(41),l=t(19),c=t(45),o=t(42);var m,p,s,u,d,b,f=function(){return function(n){Object(o.a)({url:"/banner"}).then((function(e){n(function(n){return{type:c.f,banners:n.banners}}(e))}))}},g=function(){return function(n){Object(o.a)({url:"/personalized"}).then((function(e){n(function(n){return{type:c.a,recommends:n.result}}(e))}))}},h=function(){return function(n){var e,t;(e=10,t=0,Object(o.a)({url:"/top/album",params:{limit:e,offset:t}})).then((function(e){n(function(n){return{type:c.b,newAlbum:n.albums}}(e))}))}},x=function(n){return function(e){(function(n){return Object(o.a)({url:"/top/list",params:{idx:n}})})(n).then((function(t){switch(n){case 0:e(function(n){return{type:c.c,topNewList:n.playlist}}(t));break;case 2:e(function(n){return{type:c.d,topOriginList:n.playlist}}(t));break;case 3:e(function(n){return{type:c.g,topUpList:n.playlist}}(t));break;default:console.log("\u5176\u4ed6\u6570\u636e\u5904\u7406")}}))}},J=function(){return function(n){var e,t;(e=5,t=5001,Object(o.a)({url:"/artist/list",params:{cat:t,limit:e}})).then((function(e){n(function(n){return{type:c.e,settleSings:n.artists}}(e))}))}},W=t(204),k=t(12),v=t(13),E=v.a.div(m||(m=Object(k.a)(["\n  background: url(",") center center;\n  background-size: 6000px;\n  .banner {\n    height: 270px;\n    background-color: red;\n\n    display: flex;\n    position: relative;\n  }\n"])),(function(n){return n.bgImage})),V=v.a.div(p||(p=Object(k.a)(["\n  width: 730px;\n\n  .banner-item {\n    height: 270px;\n    .image {\n      width: 100%;\n    }\n  }\n"]))),w=v.a.a.attrs({href:"https://music.163.com/#/download",target:"_blank"})(s||(s=Object(k.a)(["\n  width: 254px;\n  height: 270px;\n  background: url(",");\n"])),t(173)),S=v.a.div(u||(u=Object(k.a)(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n\n  .btn {\n    position: absolute;\n    width: 37px;\n    height: 63px;\n    background-image: url(",");\n    background-color: transparent;\n    cursor: pointer;\n\n    &:hover {\n      background-color: rgba(0, 0, 0, .1);\n    }\n  }\n\n  .left {\n    left: -68px;\n    background-position: 0 -360px;\n  }\n\n  .right {\n    right: -68px;\n    background-position: 0 -508px;\n  }\n"])),t(174)),q=Object(a.memo)((function(){var n=Object(a.useState)(0),e=Object(r.a)(n,2),t=e[0],c=e[1],o=Object(l.c)(),m=Object(l.d)((function(n){return{banners:n.getIn(["recommend","topBanners"])}}),l.b),p=Object(a.useRef)();Object(a.useEffect)((function(){o(f())}),[o]);void 0===m.banners&&alert("\u7531\u4e8egithub page\u5f3a\u5236\u4f7f\u7528https\u534f\u8bae\uff0c\u4f46\u662f\u672c\u9879\u76ee\u540e\u7aef\u63a5\u53e3\u53ea\u80fd\u7528http\u8bf7\u6c42\uff0c\u9700\u8981\u60a8\u5728\u6d4f\u89c8\u5668\u4e2d\u5141\u8bb8\u8bbf\u95ee\u4e0d\u5b89\u5168\u5185\u5bb9\uff0c\u914d\u7f6e\u5982\u4e0b\uff1a \u8bbe\u7f6e->\u9690\u79c1\u8bbe\u7f6e\u548c\u5b89\u5168\u6027->\u5141\u8bb8\u8bbf\u95ee\u4e0d\u5b89\u5168\u5185\u5bb9");var s=m.banners[t]&&m.banners[t].imageUrl+"?imageView&blur=40x20";return i.a.createElement(E,{bgImage:s},i.a.createElement("div",{className:"banner wrap-v2"},i.a.createElement(V,null,i.a.createElement(W.a,{autoplay:!0,effect:"fade",beforeChange:function(n,e){c(e)},ref:p},m.banners.map((function(n,e){return i.a.createElement("div",{className:"banner-item",key:n.imageUrl},i.a.createElement("img",{className:"image",src:n.imageUrl,alt:n.typeTitle}))})))),i.a.createElement(w,null),i.a.createElement(S,{className:"control"},i.a.createElement("button",{className:"btn left",onClick:function(n){return p.current.prev()}}),i.a.createElement("button",{className:"btn right",onClick:function(n){return p.current.next()}}))))})),N=t(10),O=v.a.div(d||(d=Object(k.a)(["\n  .recommend-list {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n  }\n"]))),Y=t(46),j=v.a.div(b||(b=Object(k.a)(['\n  height: 33px;\n  border-bottom: 2px solid #C10D0C;\n  padding: 0 10px 4px 34px;\n  background-position: -225px -156px;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  .left {\n    display: flex;\n    align-items: center;\n\n    .title {\n      font-size: 20px;\n      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;\n      margin-right: 20px;\n    }\n\n    .keyword {\n      display: flex;\n\n      .item {\n        .divider {\n          margin: 0 15px;\n          color: #ccc;\n        }\n      }\n    }\n  }\n\n  .right {\n    display: flex;\n    align-items: center;\n    .icon {\n      display: inline-block;\n      width: 12px;\n      height: 12px;\n      margin-left: 4px;\n      background-position: 0 -240px;\n    }\n  }\n']))),Z=Object(a.memo)((function(n){var e=n.title,t=n.keywords,a=n.moreLink,r=n.keywordClick;return i.a.createElement(j,{className:"sprite_02"},i.a.createElement("div",{className:"left"},i.a.createElement("h3",{className:"title"},e),i.a.createElement("div",{className:"keyword"},t.map((function(n,e){return i.a.createElement("div",{className:"item",key:n},i.a.createElement("span",{className:"link",onClick:function(e){return r(n)}},n),i.a.createElement("span",{className:"divider"},"|"))})))),i.a.createElement("div",{className:"right"},i.a.createElement(Y.b,{to:a},"\u66f4\u591a"),i.a.createElement("i",{className:"icon sprite_02"})))}));Z.defaultProps={keywords:[]};var y,U,K,X,G,C=Z,A=t(166),M=Object(a.memo)((function(){var n=Object(l.d)((function(n){return{recommends:n.getIn(["recommend","hotRecommends"])}}),l.b),e=Object(l.c)(),t=Object(N.g)();Object(a.useEffect)((function(){e(g())}),[e]);var r=Object(a.useCallback)((function(n){t.push({pathname:"/discover/songs",cat:n})}),[t]);return i.a.createElement(O,null,i.a.createElement(C,{title:"\u70ed\u95e8\u63a8\u8350",keywords:["\u534e\u8bed","\u6d41\u884c","\u6447\u6eda","\u6c11\u8c23","\u7535\u5b50"],moreLink:"/discover/songs",keywordClick:r}),i.a.createElement("div",{className:"recommend-list"},n.recommends.slice(0,8).map((function(n,e){return i.a.createElement(A.a,{info:n,key:n.id})}))))})),L=t(163),R=v.a.div(y||(y=Object(k.a)(["\n  margin-top: 50px;\n\n  .content {\n    height: 186px;\n    background-color: #f5f5f5;\n    border: 1px solid #d3d3d3;\n    margin: 20px 0 37px;\n    display: flex;\n    align-items: center;\n\n    .arrow {\n      width: 30px;\n      height: 17px;\n      cursor: pointer;\n    }\n\n    .arrow-left {\n      background-position: -260px -75px;\n    }\n\n    .arrow-right {\n      background-position: -300px -75px;\n    }\n\n    .album {\n      width: 640px;\n      height: 150px;\n\n      .ant-carousel .slick-slide {\n        height: 150px;\n        overflow: hidden;\n      }\n\n      .page {\n        display: flex !important;\n        justify-content: space-between;\n      }\n    }\n  }\n"]))),z=Object(a.memo)((function(n){var e=Object(l.d)((function(n){return{newAlbum:n.getIn(["recommend","newAlbum"])}}),l.b),t=Object(l.c)(),r=Object(a.useRef)();return Object(a.useEffect)((function(){t(h())}),[t]),i.a.createElement(R,null,i.a.createElement(C,{title:"\u65b0\u789f\u4e0a\u67b6",moreLink:"/discover/album"}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"arrow arrow-left sprite_02",onClick:function(n){return r.current.prev()}}),i.a.createElement("div",{className:"album"},i.a.createElement(W.a,{ref:r,dots:!1},[0,1].map((function(n){return i.a.createElement("div",{key:n,className:"page"},e.newAlbum.slice(5*n,5*(n+1)).map((function(n){return i.a.createElement(L.a,{key:n.id,info:n,size:"100px",width:"118px",bgp:"-570px"})})))})))),i.a.createElement("div",{className:"arrow arrow-right sprite_02",onClick:function(n){return r.current.next()}})))})),T=t(40),D=t(100),I=v.a.div(U||(U=Object(k.a)(["\n  flex: 1;\n\n  .header {\n    height: 100px;\n    display: flex;\n\n    margin: 20px 0 0 20px;\n\n    .image {\n      width: 80px;\n      height: 80px;\n      position: relative;\n    }\n\n    .info {\n      margin: 5px 0 0 10px;\n\n      a {\n        font-size: 14px;\n        color: #333;\n        font-weight: 700;\n      }\n\n      .btn {\n        display: inline-block;\n        width: 22px;\n        height: 22px;\n        margin: 8px 10px 0 0;\n        cursor: pointer;\n      }\n\n      .play {\n        background-position: -267px -205px;\n      }\n\n      .favor {\n        background-position: -300px -205px;\n      }\n    }\n  }\n\n  .list {\n    .list-item {\n      position: relative;\n      display: flex;\n      align-items: center;\n      height: 32px;\n\n      :nth-child(-n+3) .rank {\n        color: #c10d0c;\n      }\n\n      .rank {\n        width: 35px;\n        text-align: center;\n        margin-left: 10px;\n        font-size: 16px;\n      }\n\n      .info {\n        color: #000;\n        width: 170px;\n        height: 17px;\n        line-height: 17px;\n        display: flex;\n        justify-content: space-between;\n\n        .name {\n          flex: 1;\n        }\n\n        .operate {\n          display: flex;\n          align-items: center;\n          display: none;\n          width: 82px;\n\n          .btn {\n            width: 17px;\n            height: 17px;\n            margin-left: 8px;\n            cursor: pointer;\n          }\n\n          .play {\n            background-position: -267px -268px;\n          }\n\n          .addto {\n            position: relative;\n            top: 2px;\n            background-position: 0 -700px;\n          }\n\n          .favor {\n            background-position: -297px -268px;\n          }\n        }\n      }\n\n      \n\n      &:hover {\n        .operate {\n          display: block;\n        }\n      }\n    }\n  }\n\n  .footer {\n    height: 32px;\n    display: flex;\n    align-items: center;\n    margin-right: 32px;\n    justify-content: flex-end;\n\n    a {\n      color: #000;\n    }\n  }\n"]))),F=Object(a.memo)((function(n){var e=n.info,t=e.tracks,a=void 0===t?[]:t,r=Object(l.c)();return i.a.createElement(I,null,i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"image"},i.a.createElement("img",{src:Object(T.e)(e.coverImgUrl,80),alt:""}),i.a.createElement("a",{href:"/todo",className:"image_cover"},"ranking")),i.a.createElement("div",{className:"info"},i.a.createElement("a",{href:"/todo"},e.name),i.a.createElement("div",null,i.a.createElement("button",{className:"btn play sprite_02"}),i.a.createElement("button",{className:"btn favor sprite_02"})))),i.a.createElement("div",{className:"list"},a.slice(0,10).map((function(n,e){return i.a.createElement("div",{key:n.id,className:"list-item"},i.a.createElement("div",{className:"rank"},e+1),i.a.createElement("div",{className:"info"},i.a.createElement("span",{className:"name text-nowrap"},n.name),i.a.createElement("div",{className:"operate"},i.a.createElement("button",{className:"btn sprite_02 play",onClick:function(e){return function(n){r(Object(D.a)(n.id))}(n)}}),i.a.createElement("button",{className:"btn sprite_icon2 addto"}),i.a.createElement("button",{className:"btn sprite_02 favor"}))))}))),i.a.createElement("div",{className:"footer"},i.a.createElement("a",{href:"/todo"},"\u67e5\u770b\u5168\u90e8 >")))})),H=v.a.div(K||(K=Object(k.a)(["\n  .tops {\n    margin: 30px 0;\n    display: flex;\n    background-image: url(",");\n    height: 472px;\n  }\n"])),t(187)),B=Object(a.memo)((function(){var n=Object(l.c)(),e=Object(l.d)((function(n){return{topUpList:n.getIn(["recommend","topUpList"]),topNewList:n.getIn(["recommend","topNewList"]),topOriginList:n.getIn(["recommend","topOriginList"])}}),l.b);return Object(a.useEffect)((function(){n(x(0)),n(x(2)),n(x(3))}),[n]),i.a.createElement(H,null,i.a.createElement(C,{title:"\u699c\u5355",moreLink:"/discover/ranking"}),i.a.createElement("div",{className:"tops"},i.a.createElement(F,{info:e.topUpList}),i.a.createElement(F,{info:e.topNewList}),i.a.createElement(F,{info:e.topOriginList})))})),P=v.a.div(X||(X=Object(k.a)(["\n  height: 126px;\n  background-position: 0 0;\n  padding: 16px 22px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  p {\n    line-height: 25px;\n  }\n\n  a {\n    margin-top: 10px;\n    display: block;\n    width: 100px;\n    height: 31px;\n    line-height: 31px;\n    text-align: center;\n    color: #fff;\n    text-decoration: none;\n    background-position: 0 -195px;\n    text-shadow: 0 1px 0 #8a060b;\n\n    :hover {\n      background-position: -110px -195px;\n    }\n  }\n"]))),Q=Object(a.memo)((function(){return i.a.createElement(P,{className:"sprite_02"},i.a.createElement("p",null,"\u767b\u5f55\u7f51\u6613\u4e91\u97f3\u4e50\uff0c\u53ef\u4ee5\u4eab\u53d7\u65e0\u9650\u6536\u85cf\u7684\u4e50\u8da3\uff0c\u5e76\u4e14\u65e0\u9650\u540c\u6b65\u5230\u624b\u673a"),i.a.createElement("a",{href:"/login",className:"sprite_02"},"\u7528\u6237\u767b\u5f55"))})),_=v.a.div(G||(G=Object(k.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #ccc;\n\n  h3 {\n    font-size: 12px;\n  }\n"]))),$=Object(a.memo)((function(n){var e=n.title,t=n.more,a=n.action;return i.a.createElement(_,null,i.a.createElement("h3",null,e),i.a.createElement("span",{className:"link",onClick:a},t))}));$.defaultProps={};var nn,en,tn,an,rn,ln,cn=$,on=v.a.div(nn||(nn=Object(k.a)(["\n  padding: 20px;\n\n  .singer-list {\n    .item {\n      display: flex;\n      height: 62px;\n      margin-top: 14px;\n      background-color: #fafafa;\n      text-decoration: none;\n      cursor:pointer;\n\n      :hover {\n        background-color: #f4f4f4;\n      }\n\n      img {\n        width: 62px;\n        height: 62px;\n      }\n\n      .info {\n        margin: 8px 0 0 10px;\n        .title {\n          color: #333;\n          font-size: 14px;\n          font-weight: 700;\n        }\n\n        .name {\n          margin-top: 5px;\n        }\n      }\n    }\n  }\n\n  .apply-for {\n    margin-top: 12px;\n    a {\n      color: #333;\n      font-weight: 700;\n      text-align: center;\n      display: block;\n      height: 31px;\n      line-height: 31px;\n      border-radius: 4px;\n      background-color: #fafafa;\n      border: 1px solid #c3c3c3;\n      text-decoration: none;\n    }\n  }\n"]))),mn=Object(a.memo)((function(){var n=Object(l.c)(),e=Object(N.g)(),t=Object(l.d)((function(n){return{settleSings:n.getIn(["recommend","settleSings"])}}),l.b);Object(a.useEffect)((function(){n(J())}),[n]);var r=Object(a.useCallback)((function(n){e.push({pathname:"/discover/artist"})}),[e]);return i.a.createElement(on,null,i.a.createElement(cn,{title:"\u63a8\u8350\u6b4c\u624b",more:"\u67e5\u770b\u5168\u90e8>",action:r}),i.a.createElement("div",{className:"singer-list"},t.settleSings.map((function(n,e){return i.a.createElement("div",{key:n.id,className:"item"},i.a.createElement("img",{src:Object(T.e)(n.img1v1Url,62),alt:""}),i.a.createElement("div",{className:"info"},i.a.createElement("div",{className:"title"},n.alias.join("")||n.name),i.a.createElement("div",{className:"name"},n.name)))}))),i.a.createElement("div",{className:"apply-for"},i.a.createElement("span",{className:"link"},"\u7533\u8bf7\u6210\u4e3a\u7f51\u6613\u97f3\u4e50\u4eba")))})),pn=t(54),sn=v.a.div(en||(en=Object(k.a)(["\n  padding: 20px;\n\n  .radio-list {\n    margin-top: 20px;\n\n    .item {\n      display: flex;\n      margin-bottom: 10px;\n      width: 210px;\n      cursor:pointer;\n      :hover {\n        background-color: #f4f4f4;\n      }\n      img {\n        width: 40px;\n        height: 40px;\n      }\n\n      .info {\n        width: 160px;\n        margin-left: 8px;\n        .name {\n          color: #000;\n          font-weight: 700;\n          margin-top: 3px;\n        }\n\n        .position {\n          color: #666;\n        }\n      }\n    }\n  }\n"]))),un=Object(a.memo)((function(){return i.a.createElement(sn,null,i.a.createElement(cn,{title:"\u70ed\u95e8\u4e3b\u64ad"}),i.a.createElement("div",{className:"radio-list"},pn.f.map((function(n,e){return i.a.createElement("div",{className:"item",key:n.picUrl},i.a.createElement("img",{src:n.picUrl,alt:""}),i.a.createElement("div",{className:"info"},i.a.createElement("div",{className:"name"},n.name),i.a.createElement("div",{className:"position text-nowrap"},n.position)))}))))})),dn=v.a.div(tn||(tn=Object(k.a)(["\n\n"]))),bn=v.a.div(an||(an=Object(k.a)(["\n  background-color: #fff;\n  display: flex;\n"]))),fn=v.a.div(rn||(rn=Object(k.a)(["\n  padding: 20px;\n  width: 729px;\n"]))),gn=v.a.div(ln||(ln=Object(k.a)(["\n  width: 250px;\n  border: 1px solid #d3d3d3;\n  border-width: 0 1px;\n"])));e.default=Object(a.memo)((function(){return i.a.createElement(dn,null,i.a.createElement(q,null),i.a.createElement(bn,{className:"wrap-v2"},i.a.createElement(fn,null,i.a.createElement(M,null),i.a.createElement(z,null),i.a.createElement(B,null)),i.a.createElement(gn,null,i.a.createElement(Q,null),i.a.createElement(mn,null),i.a.createElement(un,null))))}))}}]);
//# sourceMappingURL=5.e877207d.chunk.js.map