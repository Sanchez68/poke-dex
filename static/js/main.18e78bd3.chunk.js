(this["webpackJsonppoke-dex"]=this["webpackJsonppoke-dex"]||[]).push([[0],{16:function(e,n,t){e.exports={BodyMain:"Body_BodyMain__1ftvu",PokeInfoMain:"Body_PokeInfoMain__25Lsm",PokesDeskMain:"Body_PokesDeskMain__34mJc"}},34:function(e,n,t){e.exports={headerMain:"Header_headerMain__2ZIK8"}},35:function(e,n,t){e.exports={loadMore:"PokesDesk_loadMore__3IelP"}},44:function(e,n,t){},45:function(e,n,t){},71:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t.n(o),r=t(10),i=t.n(r),s=(t(44),t(12)),a=t(13),u=t(15),j=t(14),d=(t(45),t(6)),p=t(34),b=t.n(p),O=t(1),h=function(){return Object(O.jsx)("header",{children:Object(O.jsx)("div",{className:b.a.headerMain,children:Object(O.jsx)("p",{children:"PokeDex"})})})},l=Object(d.b)((function(){}),{})((function(){return Object(O.jsx)(h,{})})),f=t(16),k=t.n(f),m=t(35),x=t.n(m),v=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"PokeDe"}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:x.a.loadMore,children:"Load More"})})]})},P=Object(d.b)((function(){}),{})((function(){return Object(O.jsx)("div",{children:Object(O.jsx)(v,{})})})),g=function(e){return Object(O.jsx)("div",{children:e.pokemons.map((function(e){return Object(O.jsx)("div",{children:Object(O.jsx)("div",{children:e.name})},e.id)}))})},M=t(20),y=t.n(M),_=t(36),I=t(23),L=t(37).create({baseURL:"https://pokeapi.co/api/v2/",headers:{}}),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;return L.get("pokemon/?offset=".concat(e,"&limit=").concat(n)).then((function(e){return e.data}))},B="SET_POKEMONS",D={pokemons:[],currentPage:1,pageLimit:12},w=function(e){return{type:B,pokemons:e}},C=function(e){Object(u.a)(t,e);var n=Object(j.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(a.a)(t,[{key:"componentDidMount",value:function(){this.props.requestPokemons(this.props.currentPage,this.props.pageLimit)}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)(g,{pageLimit:this.props.pageLimit,currentPage:this.props.currentPage,pokemons:this.props.pokemons})})}}]),t}(c.a.Component),E=Object(d.b)((function(e){return{pokemons:e.pokeInfo.pokemons,pageLimit:e.pokeInfo.pageLimit,currentPage:e.pokeInfo.currentPage,totalPokeCount:e.pokeInfo.totalPokeCount}}),{setPokemons:w,requestPokemons:function(e,n){return function(){var t=Object(_.a)(y.a.mark((function t(o){var c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e,n);case 2:c=t.sent,o(w(c.results));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(C),J=function(e){return Object(O.jsxs)("div",{className:k.a.BodyMain,children:[Object(O.jsx)("div",{className:k.a.PokesDeskMain,children:Object(O.jsx)(P,{})}),Object(O.jsx)("div",{className:k.a.PokeInfoMain,children:Object(O.jsx)(E,{})})]})},q=Object(d.b)((function(){}),{})((function(){return Object(O.jsx)("div",{children:Object(O.jsx)(J,{})})})),K=function(e){Object(u.a)(t,e);var n=Object(j.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("div",{className:"header",children:Object(O.jsx)(l,{})}),Object(O.jsx)("div",{className:"body",children:Object(O.jsx)(q,{})})]})}}]),t}(c.a.Component),S=t(8),A=t(38),H=Object(S.c)({pokeInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case B:return Object(I.a)(Object(I.a)({},e),{},{pokemons:n.pokemons});default:return e}}}),R=Object(S.d)(H,Object(S.a)(A.a)),T=t(39);i.a.render(Object(O.jsx)(T.a,{children:Object(O.jsx)(d.a,{store:R,children:Object(O.jsx)(K,{})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.18e78bd3.chunk.js.map