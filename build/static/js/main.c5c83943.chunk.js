(this["webpackJsonprecepie-book"]=this["webpackJsonprecepie-book"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c.n(n),s=c(19),r=c.n(s),a=(c(28),c(29),c(10)),o=c(3),l=c(5),j=c(23),d=[{id:1126180942,title:"Chicken Strogonoff",category:"lunch/dinner",price:15.99,img:"https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/chicken-&-other-poultry-dishes/strogonoff-de-frango/main-header.jpg",desc:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed ",ingredients:["4 boneless chicken breasts, diced","1 teaspoon garlic powder","1 cup soy sauce","1/2 cup water"],steps:[1,2,3],prepTime:"15 min",cookTime:"30 min",spicy:3,servings:4},{id:6466699393,title:"Chicken Teryaki",category:"lunch/dinner",price:13.99,img:"https://www.eatwell101.com/wp-content/uploads/2020/10/Instant-Pot-Chicken-Teriyaki-recipe-3.jpg",desc:"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats ",ingredients:["4 boneless chicken breasts, diced","1 teaspoon garlic powder","1 cup soy sauce","1/2 cup water","2/3 cup honey","1/2 cup rice vinegar","3 tablespoons corn starch + 3 tablespoons cold water"],steps:[1,2,3],prepTime:"15 min",cookTime:"30 min",spicy:0,servings:4},{id:901239263,title:"Cheesy pasta",category:"lunch/dinner",price:6.99,img:"https://receitatodahora.com.br/wp-content/uploads/2017/08/macarrao-de-panela-de-pressao-simples.jpg",desc:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",ingredients:["500g corkscrew pasta","1 teaspoon garlic powder","1 cup soy sauce"],steps:[1,2,3],prepTime:"15 min",cookTime:"30 min",spicy:0,servings:4},{id:901212339263,title:"Hamburger",category:"lunch/dinner",price:6.99,img:"https://makeyourmeals.com/wp-content/uploads/2019/03/air-fryer-hamburger-735x490.jpg",desc:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",ingredients:["500g ground beef","1 teaspoon garlic powder","1 cup soy sauce"],steps:[1,2,3],prepTime:"15 min",cookTime:"30 min",spicy:0,servings:4},{id:98761239263,title:"Potato wedges",category:"side",price:6.99,img:"https://healthyfitnessmeals.com/wp-content/uploads/2020/05/instagram-In-Stream_Square___Baked-potato-wedges-4.jpg",desc:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",ingredients:["4 potatoes","1 teaspoon garlic powder","1 cup soy sauce"],steps:[1,2,3],prepTime:"15 min",cookTime:"30 min",spicy:0,servings:4}],p=c(1),b=function(e){var t=e.img;return Object(p.jsxs)("div",{className:"recepie-img",children:[" ",Object(p.jsx)("img",{src:t,alt:""})," "]})},u=c(16),h=c(20),m=function(e){var t=e.recepie,c=i.a.useState(!1),n=Object(l.a)(c,2),s=n[0],r=n[1],a=[];i.a.useEffect((function(){0!==t.spicy&&(r(!0),o())}),[t.id]);var o=function(){for(var e=0;e<t.spicy;e++)a.push(e)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"title",children:Object(p.jsx)("h1",{children:t.title})}),Object(p.jsxs)("div",{className:"recepie-information",children:[Object(p.jsxs)("h3",{children:[Object(p.jsx)(u.a,{})," Prep: ",t.prepTime]}),Object(p.jsxs)("h3",{children:[Object(p.jsx)(u.a,{})," Cook: ",t.cookTime]}),s?Object(p.jsxs)("h3",{children:[Object(p.jsx)(h.a,{})," ",t.spicy]}):null,Object(p.jsxs)("h3",{children:["Servings: ",t.servings]})]})]})},g=function(e){var t=e.recepie;return Object(p.jsxs)("section",{className:"recepie-info",children:[Object(p.jsx)(m,{recepie:t}),Object(p.jsx)(a.b,{to:"/recepie/".concat(t.id),className:"btn-blue",children:"Full Recepie"})]})},O=function(e){var t=e.recepie;return Object(p.jsxs)("div",{className:"recepie",children:[Object(p.jsx)(b,{img:t.img}),Object(p.jsx)(g,{recepie:t})]})},f=function(e){var t=e.recepies;return t.length<1?Object(p.jsx)("h1",{children:"Nothing to see here"}):Object(p.jsxs)("div",{className:"recepies",children:[t?null:Object(p.jsx)("h1",{children:"No recepies found"}),t.map((function(e){return Object(p.jsx)(O,{recepie:e},e.id)}))]})},x=function(e){var t=e.categories,c=e.ingredients,n=e.filterItems,i=e.categoryBtn,s=e.ingredientBtn;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"btn-container",children:t.map((function(e,t){return Object(p.jsx)("button",{className:"".concat(t===i&&"active-btn"," filter-btn"),onClick:function(){n(e,t,void 0)},children:e},t)}))}),Object(p.jsx)("div",{className:"btn-container",children:c.map((function(e,t){return Object(p.jsx)("button",{className:"".concat(t===s&&"active-btn"," filter-btn"),onClick:function(){n(void 0,t,e)},children:e},t)}))})]})};var v=function(){return Object(p.jsx)("div",{className:"spacer",children:" "})},y=["all"].concat(Object(j.a)(new Set(d.map((function(e){return e.category})))));var w=function(){var e=Object(n.useState)(y),t=Object(l.a)(e,2),c=t[0],i=(t[1],Object(n.useState)(d)),s=Object(l.a)(i,2),r=s[0],a=s[1],o=Object(n.useState)(0),j=Object(l.a)(o,2),b=j[0],u=j[1],h=Object(n.useState)(null),m=Object(l.a)(h,2),g=m[0],O=m[1],w=Object(n.useState)(["chicken","beef","pork","pasta","potato"]),k=Object(l.a)(w,2),N=k[0],S=(k[1],Object(n.useState)(!0)),T=Object(l.a)(S,2),C=T[0],F=T[1],B=Object(n.useState)(-1),I=Object(l.a)(B,2),P=I[0],E=I[1];return Object(p.jsxs)("main",{children:[Object(p.jsxs)("section",{className:"menu section",children:[Object(p.jsxs)("div",{className:"title",children:[Object(p.jsx)("h2",{children:"Menu"}),Object(p.jsx)("div",{className:"underline"})]}),Object(p.jsx)(x,{categories:c,ingredients:N,filterItems:function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(F("all"===e),console.log(e),(!C&&y.indexOf(e)===P||!C&&N.indexOf(c)===P)&&(e="all"),"all"===e)return a(d),u(0),O(null),void E(-1);var n=[];"undefined"!==typeof c?(d.forEach((function(e){e.ingredients.forEach((function(t){t.includes(c)&&n.push(e)}))})),O(t),u(null)):(n=d.filter((function(t){return t.category===e})),u(t),O(null)),E(t),a(n)},categoryBtn:b,ingredientBtn:g}),Object(p.jsx)(f,{recepies:r})]}),Object(p.jsx)(v,{})]})},k=function(e){var t=e.text;return Object(p.jsxs)("div",{className:"division-lable",children:[Object(p.jsxs)("h3",{children:[t,": "]}),Object(p.jsx)("div",{className:"line"})]})},N=function(e){var t=e.items;return Object(p.jsx)("div",{className:"items-list",children:t.map((function(e){return Object(p.jsx)("p",{children:e})}))})},S=function(e){var t=e.recepie,c=i.a.useState(t.ingredients),n=Object(l.a)(c,2),s=n[0];n[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(k,{text:"Ingredients"}),Object(p.jsx)(N,{items:s})]})},T=function(e){var t=e.recepie,c=i.a.useState(t.steps),n=Object(l.a)(c,2),s=n[0];n[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(k,{text:"Steps"}),Object(p.jsx)(N,{items:s})]})},C=function(){var e=Object(o.f)().id,t=Object(n.useState)({}),c=Object(l.a)(t,2),i=c[0],s=c[1],r=Object(n.useState)(!1),a=Object(l.a)(r,2),j=a[0],u=a[1];return Object(n.useEffect)((function(){d.map((function(t){t.id==e&&(s(t),u(!0))}))}),[e]),j?Object(p.jsxs)("main",{children:[Object(p.jsxs)("section",{className:"menu section",children:[Object(p.jsxs)("div",{className:"single-recepie",children:[Object(p.jsx)(b,{img:i.img}),Object(p.jsx)("div",{className:"recepie-info",children:Object(p.jsx)(m,{recepie:i})})]}),Object(p.jsxs)("div",{className:"ingredients",children:[Object(p.jsx)(S,{recepie:i}),Object(p.jsx)(T,{recepie:i})]})]}),Object(p.jsx)(v,{})]}):Object(p.jsx)("h2",{children:"No recepie found"})};var F=function(){return Object(p.jsx)(a.a,{children:Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/",children:Object(p.jsx)(w,{})}),Object(p.jsx)(o.a,{path:"/recepie/:id",children:Object(p.jsx)(C,{})})]})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root")),B()}},[[36,1,2]]]);
//# sourceMappingURL=main.c5c83943.chunk.js.map