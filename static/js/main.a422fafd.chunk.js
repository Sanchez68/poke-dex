(this["webpackJsonppoke-dex"]=this["webpackJsonppoke-dex"]||[]).push([[0],{19:function(e,n,t){e.exports={BodyMain:"Body_BodyMain__1ftvu",PokeInfoMain:"Body_PokeInfoMain__25Lsm",PokesDeskMain:"Body_PokesDeskMain__34mJc"}},36:function(e,n,t){e.exports={headerMain:"Header_headerMain__2ZIK8"}},37:function(e,n,t){e.exports={loadMore:"PokesDesk_loadMore__3IelP"}},39:function(e,n){},46:function(e,n,t){},47:function(e,n,t){},73:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),o=t(13),a=t.n(o),i=(t(46),t(47),t(6)),s=t(36),u=t.n(s),j=t(1),p=function(){return Object(j.jsx)("header",{children:Object(j.jsx)("div",{className:u.a.headerMain,children:Object(j.jsx)("p",{children:"PokeDex"})})})},d=Object(i.b)((function(){}),{})((function(){return Object(j.jsx)(p,{})})),f=t(19),b=t.n(f),O=t(15),h=t(16),l=t(18),k=t(17),x=t(37),m=t.n(x),v=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[e.pokemons.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:["   ",e.id]})})},e.id)})),"                    "]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:m.a.loadMore,onClick:function(){e.requestLoadMore(e.next)},children:"Load More"})})]})},_=t(7),g=t.n(_),P=t(12),M=t(41),y=t(9),L=t(23),w=L.create({baseURL:"https://pokeapi.co/api/v2/",headers:{}}),N={getPokemons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;return w.get("pokemon/?limit=".concat(e)).then((function(e){return e.data}))},getUrlData:function(e){return L.get(e).then((function(e){return e.data}))}},D="SET_POKEMONS",E="SET_NEW_POKEMONS",I="TOGGLE_IS_FETCHING",S={pokemons:[],pageLimit:12,isFetching:!0},B=function(e){return{type:D,pokemons:e}},T=function(e){return{type:I,isFetching:e}},C=function(e){return function(){var n=Object(P.a)(g.a.mark((function n(t){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Promise.all(e.map(function(){var e=Object(P.a)(g.a.mark((function e(n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getUrlData(n.url);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},F=function(e){Object(l.a)(t,e);var n=Object(k.a)(t);function t(){return Object(O.a)(this,t),n.apply(this,arguments)}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.requestPokemons(this.props.pageLimit)}},{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)(v,{pageLimit:this.props.pageLimit,pokemons:this.props.pokemons})})}}]),t}(c.a.Component),q=Object(i.b)((function(e){return{pokemons:e.pokeDeskLeft.pokemons,pageLimit:e.pokeDeskLeft.pageLimit,currentPage:e.pokeDeskLeft.currentPage}}),{setPokemons:B,requestPokemons:function(e){return function(){var n=Object(P.a)(g.a.mark((function n(t){var r,c;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(T(!0)),n.next=3,N.getPokemons(e);case 3:return r=n.sent,n.next=6,t(C(r.results));case 6:c=n.sent,t(B(c)),t(T(!1));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},requestLoadMore:function(e){return function(){var n=Object(P.a)(g.a.mark((function n(t){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,N.getNewPokemons(e);case 2:n.sent;case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(F),R=function(e){return Object(j.jsx)("div",{children:"pokeInfo"})},U=function(e){Object(l.a)(t,e);var n=Object(k.a)(t);function t(){return Object(O.a)(this,t),n.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)(R,{})})}}]),t}(c.a.Component),G=Object(i.b)((function(e){return{}}),{})(U),J=function(e){return Object(j.jsxs)("div",{className:b.a.BodyMain,children:[Object(j.jsx)("div",{className:b.a.PokesDeskMain,children:Object(j.jsx)(q,{})}),Object(j.jsx)("div",{className:b.a.PokeInfoMain,children:Object(j.jsx)(G,{})})]})},K=Object(i.b)((function(e){return{}}),{})((function(e){return Object(j.jsx)("div",{children:Object(j.jsx)(J,{})})}));var H=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"header",children:Object(j.jsx)(d,{})}),Object(j.jsx)("div",{className:"body",children:Object(j.jsx)(K,{})})]})},X=t(8),A=t(38),V=t(39),W=Object(X.c)({pokeInfoRight:V.pokeInfoReducer,pokeDeskLeft:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case D:return Object(y.a)(Object(y.a)({},e),{},{pokemons:n.pokemons});case E:return Object(y.a)(Object(y.a)({},e),{},{newPokemons:Object(M.a)(n.pokemons),nextPage:n.nextPage});case I:return Object(y.a)(Object(y.a)({},e),{},{isFetching:n.isFetching});default:return e}}}),Z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.d,z=Object(X.e)(W,Z(Object(X.a)(A.a))),Q=t(40);a.a.render(Object(j.jsx)(Q.a,{children:Object(j.jsx)(i.a,{store:z,children:Object(j.jsx)(H,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.a422fafd.chunk.js.map