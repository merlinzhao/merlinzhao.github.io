(function(t){function e(e){for(var n,s,c=e[0],o=e[1],l=e[2],d=0,p=[];d<c.length;d++)s=c[d],a[s]&&p.push(a[s][0]),a[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,c=1;c<i.length;c++){var o=i[c];0!==a[o]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},a={app:0},r=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/merlinzhao/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("64a9"),a=i.n(n);a.a},"0abf":function(t,e,i){},"13ae":function(t,e,i){"use strict";var n=i("f70f"),a=i.n(n);a.a},"16b4":function(t,e,i){},1752:function(t,e,i){t.exports=i.p+"img/sample.34053d1d.png"},"28f8":function(t,e,i){},4620:function(t,e,i){"use strict";var n=i("d523"),a=i.n(n);a.a},"46f4":function(t,e,i){"use strict";var n=i("0abf"),a=i.n(n);a.a},"4cce":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view"),i("link",{attrs:{rel:"stylesheet",href:"https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"}}),i("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.2.0/css/all.css",integrity:"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",crossorigin:"anonymous"}}),i("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Lato&display=swap",rel:"stylesheet"}})],1)},r=[],s={name:"app",components:{}},c=s,o=(i("034f"),i("2877")),l=Object(o["a"])(c,a,r,!1,null,null,null),u=l.exports,d=(i("16b4"),i("8c4f")),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),i("about-me"),i("welcome")],1)},f=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"intro"},[i("div",{staticClass:"center"},[i("p",{staticClass:"MERLIN"},[t._v("MERLIN")])]),i("p",{staticStyle:{"font-size":"27pt",color:"#bbb",transform:"translateY(-35px)"}},[t._v("Hello 👋 Thanks for visiting my personal website!")]),i("div",{staticStyle:{height:"5%"}})])}],v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"background"},[i("div",{staticClass:"projectRowOut"},[i("div",{staticClass:"projectRow",staticStyle:{cursor:"pointer",color:"white"},on:{click:function(e){return t.nav("projects")}}},[i("p",{staticClass:"headingThree projectThree projectCenter2"},[t._v("VIEW MY")]),i("p",{staticClass:"headingThree projectThree projectCenter"},[t._v("PROJECTS & EXPERIENCE")])])]),t._m(0)])},h=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gitRow"},[i("div",{staticClass:"col-6 gitRowLeft",staticStyle:{cursor:"pointer",color:"white"},attrs:{onclick:"window.open('http://www.github.com/merlinzhao')"}},[i("p",{staticClass:"regText regGitText gitCenter2"},[t._v("www.github.com/merlinzhao")]),i("p",{staticClass:"headingThree projectThree gitCenter1"},[i("i",{staticClass:"fab fa-github"}),t._v(" GITHUB\n      ")])]),i("div",{staticClass:"col-6 gitRowRight",staticStyle:{cursor:"pointer",color:"white"},attrs:{onclick:"window.open('https://www.linkedin.com/in/merlinzhao/')"}},[i("div",{staticClass:"linked2"},[i("p",{staticClass:"regText regGitText linkedCenter2"},[t._v("www.linkedin.com/in/merlinzhao")]),i("p",{staticClass:"headingThree projectThree linkedCenter1"},[i("i",{staticClass:"fab fa-linkedin"}),t._v(" LINKEDIN\n        ")])])])])}],g={data:function(){return{currentTime:"",selectFas:"",greeting:"여보세요",greetingArr:["여보세요","hello","hola","こんにちは","bonjour","你好"],greetingIndex:0,testNum:0}},mounted:function(){var t=this;this.currentTime=new Date,setInterval(function(){t.greetingIndex<5?t.greetingIndex++:t.greetingIndex=0,t.greeting=t.greetingArr[t.greetingIndex]},800)},methods:{overProject:function(){this.projectCenter.style.transform="translateX(100px)"},outProject:function(){this.projectCenter.style.transform="translateX(0px)"},nav:function(t){this.$router.push({path:t})}}},m=g,C=(i("46f4"),Object(o["a"])(m,v,h,!1,null,"5ee7ac44",null)),y=C.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"background"},[i("div",{staticClass:"projectRowOut"},[i("div",{staticClass:"projectRow",staticStyle:{cursor:"pointer",color:"white"},on:{click:function(e){return t.nav("projects")}}},[i("p",{staticClass:"headingThree projectThree projectCenter"},[t._v("MADE BY MERLIN.")])])]),i("div",{staticClass:"center row"},[i("div",{staticClass:"col cardPadding"},[i("projectCard",{staticStyle:{transform:"translateY(-50px)"},attrs:{projectTitle:"Project1",bodyText:"BAE JOOHUYN KANG SEULGI SON SEUNGWAN PARK SOOYOUNG KIM YERIM RED DEU BEL BET UM PAH UM PAH",icons:["A","B","D"]}})],1),i("div",{staticClass:"col cardPadding"},[i("projectCard",{staticStyle:{transform:"translateY(-50px)"},attrs:{projectTitle:"Project1",bodyText:"des1 des1",icons:["A","B","D"]}})],1),i("div",{staticClass:"col cardPadding"},[i("projectCard",{staticStyle:{transform:"translateY(-50px)"},attrs:{projectTitle:"Project1",bodyText:"des1 des1",icons:["A","E","D"]}})],1)])])},_=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"projectCard"},[n("div",{staticClass:"imageRow",style:{backgroundImage:"url("+i("7584")("./"+t.imgURL)+")"}}),n("div",{staticClass:"textRow"},[n("p",{staticClass:"headingThree"},[t._v(t._s(t.projectTitle))]),n("p",{staticClass:"regText"},[t._v(t._s(t.bodyText))])]),n("div",{staticClass:"iconRow"},[n("div",{staticClass:"col-9 leftCol"},t._l(t.icons,function(e){return n("div",{key:e},["A"===e?n("i",{staticClass:"devicon-bootstrap-plain colored",staticStyle:{"margin-right":"5px"}}):t._e(),"B"===e?n("i",{staticClass:"devicon-python-plain colored",staticStyle:{"margin-right":"5px"}}):t._e(),"C"===e?n("i",{staticClass:"devicon-nodejs-plain colored",staticStyle:{"margin-right":"5px"}}):t._e(),"D"===e?n("i",{staticClass:"devicon-javascript-plain colored",staticStyle:{"margin-right":"5px"}}):t._e(),"E"===e?n("i",{staticClass:"devicon-swift-plain colored",staticStyle:{"margin-right":"5px"}}):t._e(),"F"===e?n("i",{staticClass:"devicon-vuejs-plain colored",staticStyle:{"margin-right":"5px"}}):t._e(),"G"===e?n("i",{staticClass:"devicon-css3-plain colored",staticStyle:{"margin-right":"5px"}}):t._e(),"H"===e?n("i",{staticClass:"devicon-html5-plain colored",staticStyle:{"margin-right":"5px"}}):t._e(),"I"===e?n("i",{staticClass:"devicon-android-plain colored",staticStyle:{"margin-right":"5px"}}):t._e()])}),0),t._m(0)])])},j=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-3 rightCol",staticStyle:{"font-size":"2.5em"}},[i("i",{staticClass:"fab fa-github githubLogo"})])}],x={data:function(){return{}},props:{imgURL:{type:String,default:"kang.jpg"},icons:{type:Array,default:[]},projectTitle:{type:String,default:"Title Unavailable"},bodyText:{type:String,default:"Description Unavailable"}}},T=x,S=(i("97e0"),Object(o["a"])(T,w,j,!1,null,"f509c8f0",null)),E=S.exports,O={name:"projects",date:function(){return{col:"col-2"}},components:{projectCard:E}},k=O,R=(i("13ae"),Object(o["a"])(k,b,_,!1,null,"2be3aedc",null)),I=R.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"landing"},[i("div",{staticClass:"row firstRow"},[i("div",{staticClass:"col-6 leftCol"},[i("div",{staticStyle:{height:"15%",width:"100%"}}),i("div",{staticClass:"nameBG"},[i("p",{staticClass:"headingThree"},[t._v("HELLO! I'M")]),i("p",{staticClass:"headingOne"},[t._v("MERLIN.")])]),i("div",{staticStyle:{height:"5%",width:"100%"}}),i("p",{staticClass:"headingThree",staticStyle:{opacity:"0.9",color:"#333"}},[t._v("software developer")]),i("p",{staticClass:"headingThree",staticStyle:{opacity:"0.9",color:"#333"}},[t._v("graphic designer")]),i("p",{staticClass:"headingThree",staticStyle:{opacity:"0.9",color:"#333"}},[t._v("chipotle lover")]),i("p",{staticClass:"headingThree",staticStyle:{opacity:"0.9",color:"#888"}},[t._v("\n        unfortunately, not a real wizard\n        "),i("i",{staticClass:"far fa-sad-tear"})])]),i("div",{staticClass:"col-6 rightCol"})]),i("div",{staticClass:"row secondRow"})])}],N=(i("4620"),{}),L=Object(o["a"])(N,P,M,!1,null,"78e6e079",null),A=L.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"background"},[i("div",{staticClass:"absolute"}),i("div",{staticClass:"aboutCenter"})])}],D={},G=D,z=(i("a3d3"),Object(o["a"])(G,U,$,!1,null,"452e8124",null)),B=z.exports,Y=(i("5118"),{name:"mainView",components:{welcome:y,projects:I,landing:A,aboutMe:B},mounted:function(){document.querySelector(".intro")}}),H=Y,F=(i("6d7d"),Object(o["a"])(H,p,f,!1,null,"00c2699a",null)),J=F.exports;n["a"].use(d["a"]),n["a"].config.productionTip=!1;var K=[{path:"/",component:J},{path:"/projects",name:"Projects",component:I}],W=new d["a"]({routes:K,mode:"history"});new n["a"]({el:"#app",router:W,render:function(t){return t(u)}}).$mount("#app")},"5c5b":function(t,e,i){},"64a9":function(t,e,i){},"6d7d":function(t,e,i){"use strict";var n=i("5c5b"),a=i.n(n);a.a},7584:function(t,e,i){var n={"./kang.jpg":"a8d6","./sample.png":"1752"};function a(t){var e=r(t);return i(e)}function r(t){var e=n[t];if(!(e+1)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return e}a.keys=function(){return Object.keys(n)},a.resolve=r,t.exports=a,a.id="7584"},"97e0":function(t,e,i){"use strict";var n=i("4cce"),a=i.n(n);a.a},a3d3:function(t,e,i){"use strict";var n=i("28f8"),a=i.n(n);a.a},a8d6:function(t,e,i){t.exports=i.p+"img/kang.04387fce.jpg"},d523:function(t,e,i){},f70f:function(t,e,i){}});
//# sourceMappingURL=app.0d9f1b98.js.map