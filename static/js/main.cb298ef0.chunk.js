(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,,,,,,,,,,function(n,e,t){},function(n,e,t){},function(n,e,t){},,function(n,e,t){},function(n,e,t){},function(n,e,t){"use strict";t.r(e);var c=t(1),i=t.n(c),r=t(7),a=t.n(r),l=(t(12),t(13),t(6)),s=t(2),u=(t(14),t(0));var o=function(n){var e=n.highlight?"highlight":"";return Object(u.jsx)("button",{className:"square ".concat(e),onClick:n.clickHandler,children:n.value})};t(16);var j=function(n){var e=n.squares,t=n.onSquareClick,c=n.line,i=Object(s.a)(c,3),r=i[0],a=i[1],l=i[2];return Object(u.jsx)("div",{className:"board",children:e.map((function(n,e){return Object(u.jsx)(o,{value:n,clickHandler:function(){return t(e)},highlight:e===r||e===a||e===l},e)}))})};t(17);var b=function(n){var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;for(t=0;t<e.length;t++){var c=Object(s.a)(e[t],3),i=c[0],r=c[1],a=c[2];if(n[i]&&n[i]===n[r]&&n[i]===n[a])return{winner:n[i],line:e[t]}}return t===e.length&&-1===n.findIndex((function(n){return null===n}))?{winner:"DRAW",line:[]}:{winner:"",line:[]}};var h=function(){var n=Object(c.useState)([Array(9).fill(null)]),e=Object(s.a)(n,2),t=e[0],i=e[1],r=Object(c.useState)(!0),a=Object(s.a)(r,2),o=a[0],h=a[1],O=Object(c.useState)(0),f=Object(s.a)(O,2),d=f[0],v=f[1],g=b(t[d]),x=g.winner,p=g.line;return Object(u.jsxs)("div",{className:"game",children:[Object(u.jsx)("h1",{children:x?"DRAW"===x?"It is a DRAW":"Winner is ".concat(x):"Next player: ".concat(o?"X":"O")}),Object(u.jsx)(j,{squares:t[d],onSquareClick:function(n){var e=t.slice(0,d+1),c=Object(l.a)(e[d]);x||c[n]||(c[n]=o?"X":"O",i([].concat(Object(l.a)(e),[c])),v(e.length),h(!o))},line:p}),Object(u.jsx)("ul",{children:t.map((function(n,e){return Object(u.jsx)("li",{children:Object(u.jsx)("span",{className:"stepLink",onClick:function(){return function(n){v(n),h(n%2===0)}(e)},children:e?"Go to step #".concat(e):"Restart game"})},e)}))})]})};var O=function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)("h1",{style:{color:"Brown"},children:"Tic Tac Toe Game"}),Object(u.jsx)("br",{}),Object(u.jsx)(h,{})]})},f=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(e){var t=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;t(n),c(n),i(n),r(n),a(n)}))};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.cb298ef0.chunk.js.map