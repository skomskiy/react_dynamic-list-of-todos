(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(8),a=c.n(s),n=c(3),l=c(1),r=(c(14),c(15),c(2)),i=c(0),o={listTodos:[],check:null,user:null,checkTodo:null,filter:"all",filterBySearch:""},d=function(e,t){switch(t.type){case"RequestListTodos":return Object(r.a)(Object(r.a)({},e),{},{listTodos:t.list});case"CheckedUser":return Object(r.a)(Object(r.a)({},e),{},{check:t.userId});case"InfoUser":return Object(r.a)(Object(r.a)({},e),{},{user:t.user});case"CheckedTodo":return Object(r.a)(Object(r.a)({},e),{},{checkTodo:t.todo});case"TypeFilter":return Object(r.a)(Object(r.a)({},e),{},{filter:t.filter});case"SearchLine":return Object(r.a)(Object(r.a)({},e),{},{filterBySearch:t.filter});default:return e}},j=Object(l.createContext)([o,function(e){return e}]),h=function(e){var t=e.children,c=Object(l.useReducer)(d,o),s=Object(n.a)(c,2),a=s[0],r=s[1];return Object(i.jsx)(j.Provider,{value:[a,r],children:t})};function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var b=c(9),O=c(6),m=c.n(O),f=function(){var e=Object(l.useContext)(j),t=Object(n.a)(e,2),c=t[0],s=t[1],a=function(e){var t;s({type:"CheckedUser",userId:e}),(t=e,u("/users/".concat(t))).then((function(e){return s({type:"InfoUser",user:e})}))},r=function(e,t){return e?t.filter((function(e){return e.title.toLowerCase().includes(c.filterBySearch.toLowerCase())})):t},o=Object(l.useMemo)((function(){var e=Object(b.a)(c.listTodos);return"active"===c.filter?r(c.filterBySearch,e).filter((function(e){return!e.completed})):"completed"===c.filter?r(c.filterBySearch,e).filter((function(e){return e.completed})):r(c.filterBySearch,e)}),[c.filter,c.filterBySearch]);return Object(i.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("th",{children:"Title"}),Object(i.jsx)("th",{children:" "})]})}),Object(i.jsx)("tbody",{children:o.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"todo",className:m()("",{"has-background-info-light":c.checkTodo===e}),children:[Object(i.jsx)("td",{className:"is-vcentered",children:e.id}),Object(i.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(i.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("td",{className:"is-vcentered is-expanded",children:Object(i.jsx)("p",{className:m()("",{"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(i.jsx)("td",{className:"has-text-right is-vcentered",children:Object(i.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){s({type:"CheckedTodo",todo:e}),a(e.userId)}(e)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:m()("far",{"fa-eye-slash":c.checkTodo===e,"fa-eye":c.checkTodo!==e})})})})})]},e.id)}))})]})},x=function(){var e=Object(l.useContext)(j),t=Object(n.a)(e,2),c=t[0],s=t[1];return Object(i.jsxs)("form",{className:"field has-addons",children:[Object(i.jsx)("p",{className:"control",children:Object(i.jsx)("span",{className:"select",children:Object(i.jsxs)("select",{"data-cy":"statusSelect",value:c.filter,onChange:function(e){s({type:"TypeFilter",filter:e.target.value})},children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"active",children:"Active"}),Object(i.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(i.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(i.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c.filterBySearch,onChange:function(e){s({type:"SearchLine",filter:e.target.value})}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-magnifying-glass"})}),c.filterBySearch&&Object(i.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(i.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){s({type:"SearchLine",filter:""})}})})]})]})},p=(c(17),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),y=function(){var e,t,c,s=Object(l.useContext)(j),a=Object(n.a)(s,2),r=a[0],o=a[1];return Object(i.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(i.jsx)("div",{className:"modal-background"}),r.user?Object(i.jsxs)("div",{className:"modal-card",children:[Object(i.jsxs)("header",{className:"modal-card-head",children:[Object(i.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===(e=r.checkTodo)||void 0===e?void 0:e.id)}),Object(i.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){o({type:"CheckedUser",userId:null}),o({type:"InfoUser",user:null}),o({type:"CheckedTodo",todo:null})}})]}),Object(i.jsxs)("div",{className:"modal-card-body",children:[Object(i.jsx)("p",{className:"block","data-cy":"modal-title",children:null===(t=r.checkTodo)||void 0===t?void 0:t.title}),Object(i.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==(c=r.checkTodo)&&void 0!==c&&c.completed?Object(i.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(i.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(i.jsx)("a",{href:"mailto:Sincere@april.biz",children:r.user.name})]})]})]}):Object(i.jsx)(p,{})]})},v=function(){var e=Object(l.useContext)(j),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(!1),r=Object(n.a)(a,2),o=r[0],d=r[1];return Object(l.useEffect)((function(){d(!0),u("/todos").then((function(e){s({type:"RequestListTodos",list:e}),d(!1)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("h1",{className:"title",children:"Todos:"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)(x,{})}),Object(i.jsx)("div",{className:"block",children:o?Object(i.jsx)(p,{}):Object(i.jsx)(f,{})})]})})}),c.check&&Object(i.jsx)(y,{})]})};a.a.render(Object(i.jsx)(h,{children:Object(i.jsx)(v,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.79f24181.chunk.js.map