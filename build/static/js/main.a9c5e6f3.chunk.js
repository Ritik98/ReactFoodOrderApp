(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2nY0W",summary:"CartItem_summary__2JaOJ",price:"CartItem_price__1GbLL",amount:"CartItem_amount__25zRu",actions:"CartItem_actions__2vR9E"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2m0RW",total:"Cart_total__1gSWL",actions:"Cart_actions__3BGid","button--alt":"Cart_button--alt__HYW9o",button:"Cart_button__1Qz0t"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__19ZsA",icon:"HeaderCartButton_icon__2jJXh",badge:"HeaderCartButton_badge__1zMIV",bump:"HeaderCartButton_bump__2_vBb"}},,function(e,t,n){e.exports={meal:"MealItem_meal__2hnuO",description:"MealItem_description__1h3cG",price:"MealItem_price__bqiat"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__12Het",modal:"Modal_modal__3uAXB","slide-down":"Modal_slide-down__xzwmr"}},,function(e,t,n){e.exports={header:"Header_header__ypSS7","main-image":"Header_main-image__kHLo2"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__1_cqI"}},function(e,t,n){e.exports={card:"Card_card__1FTrj"}},function(e,t,n){e.exports={input:"Input_input__1wCYI"}},function(e,t,n){e.exports={form:"MealItemForm_form__3torp"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__3oGep","meals-appear":"AvailableMeals_meals-appear__2cxyG"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),s=n.n(r),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},m=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),u=n(8),d=n.n(u),j=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(m).items,u=s.reduce((function(e,t){return e+t.amount}),0),j="".concat(d.a.button," ").concat(a?d.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(o.jsxs)("button",{className:j,onClick:e.onClick,children:[Object(o.jsx)("span",{className:d.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:d.a.badge,children:u})]})},b=n.p+"static/media/meals.2971f633.jpg",x=n(13),O=n.n(x),p=function(e){return Object(o.jsxs)(r.Fragment,{children:[Object(o.jsxs)("header",{className:O.a.header,children:[Object(o.jsx)("h1",{children:"ReactMeals"}),Object(o.jsx)(j,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:O.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},h=n(15),_=n.n(h),f=function(){return Object(o.jsxs)("section",{className:_.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(16),C=n.n(v),g=function(e){return Object(o.jsx)("div",{className:C.a.card,children:e.children})},A=n(2),N=n(17),y=n.n(N),I=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:y.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(A.a)({ref:t},e.input))]})})),w=n(18),M=n.n(w),H=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(o.jsxs)("form",{className:M.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(o.jsx)(I,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!a&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},k=n(10),B=n.n(k),S=function(e){var t=Object(r.useContext)(m),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:B.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:B.a.description,children:e.description}),Object(o.jsx)("div",{className:B.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(H,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},F=n(19),R=n.n(F),z=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],E=function(){var e=z.map((function(e){return Object(o.jsx)(S,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:R.a.meals,children:Object(o.jsx)(g,{children:Object(o.jsx)("ul",{children:e})})})},D=function(){return Object(o.jsxs)(r.Fragment,{children:[Object(o.jsx)(f,{}),Object(o.jsx)(E,{})]})},T=n(11),G=n.n(T),J=function(e){return Object(o.jsx)("div",{className:G.a.backdrop,onClick:e.onClose})},Y=function(e){return Object(o.jsx)("div",{className:G.a.modal,children:Object(o.jsx)("div",{className:G.a.content,children:e.children})})},L=document.getElementById("overlays"),P=function(e){return Object(o.jsxs)(r.Fragment,{children:[c.a.createPortal(Object(o.jsx)(J,{onClose:e.onClose}),L),c.a.createPortal(Object(o.jsx)(Y,{children:e.children}),L)]})},V=n(4),W=n.n(V),q=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:W.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:W.a.summary,children:[Object(o.jsx)("span",{className:W.a.price,children:t}),Object(o.jsxs)("span",{className:W.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:W.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},$=n(5),X=n.n($),Q=function(e){var t=Object(r.useContext)(m),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(A.a)(Object(A.a)({},e),{},{amount:1}))},s=Object(o.jsx)("ul",{className:X.a["cart-items"],children:t.items.map((function(e){return Object(o.jsx)(q,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(o.jsxs)(P,{onClose:e.onClose,children:[s,Object(o.jsxs)("div",{className:X.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:n})]}),Object(o.jsxs)("div",{className:X.a.actions,children:[Object(o.jsx)("button",{className:X.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(o.jsx)("button",{className:X.a.button,children:"Order"})]})]})},Z=n(14),K={items:[],totalAmount:0},U=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(A.a)(Object(A.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(Z.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],m=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var u=Object(A.a)(Object(A.a)({},l),{},{amount:l.amount-1});(s=Object(Z.a)(e.items))[o]=u}return{items:s,totalAmount:m}}return K},ee=function(e){var t=Object(r.useReducer)(U,K),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(o.jsx)(m.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(ee,{children:[n&&Object(o.jsx)(Q,{onClose:function(){a(!1)}}),Object(o.jsx)(p,{onShowCart:function(){a(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(D,{})})]})};c.a.render(Object(o.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.a9c5e6f3.chunk.js.map