(this.webpackJsonphome=this.webpackJsonphome||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(8),o=n.n(a),s=n(10),r=n(7),d=n(9),l=n.n(d),j=(n(15),n(0));var b=function(e){var t=e.notes,n=e.onAddNote,i=e.onDeleteNote,c=e.activeNote,a=e.setActiveNote,o=t.sort((function(e,t){return t.lastModified-e.lastModified}));return Object(j.jsxs)("div",{className:"app-sidebar",children:[Object(j.jsx)("div",{children:' Put Comment "Main" here"'}),Object(j.jsxs)("div",{className:"app-sidebar-header",children:[Object(j.jsx)("h1",{children:"Comments"}),Object(j.jsx)("button",{onClick:n,children:"Add"})]}),Object(j.jsx)("div",{className:"app-sidebar-notes",children:o.map((function(e,t){var n=e.id,o=e.title,s=e.body,r=e.lastModified;return Object(j.jsxs)("div",{className:"app-sidebar-note ".concat(n===c&&"active"),onClick:function(){return a(n)},children:[Object(j.jsxs)("div",{className:"sidebar-note-title",children:[Object(j.jsx)("strong",{children:o}),Object(j.jsx)("button",{onClick:function(e){return i(n)},children:"Delete"})]}),Object(j.jsx)("p",{children:s&&s.substr(0,100)+"..."}),Object(j.jsxs)("small",{className:"note-meta",children:["Last Modified"," ",new Date(r).toLocaleDateString("en-GB",{hour:"2-digit",minute:"2-digit"})]})]})}))})]})},u=n(3),v=n(6),O=function(e){var t=e.activeNote,n=e.onUpdateNote,i=function(e,i){var c;n(Object(v.a)(Object(v.a)({},t),{},(c={},Object(u.a)(c,e,i),Object(u.a)(c,"lastModified",Date.now()),c)))};return t?Object(j.jsxs)("div",{className:"app-main",children:[Object(j.jsxs)("div",{className:"app-main-note-edit",children:[Object(j.jsx)("input",{type:"text",id:"title",placeholder:"Note Title",value:t.title,onChange:function(e){return i("title",e.target.value)},autoFocus:!0}),Object(j.jsx)("textarea",{id:"body",placeholder:"Write your note here...",value:t.body,onChange:function(e){return i("body",e.target.value)}})]}),Object(j.jsxs)("div",{className:"app-main-note-preview",children:[Object(j.jsx)("h1",{className:"preview-title",children:t.title}),Object(j.jsx)("p",{className:"markdown-preview",children:t.body})]})]}):Object(j.jsx)("div",{className:"no-active-note",children:"No Active Note"})};var h=function(){var e=Object(i.useState)(localStorage.notes?JSON.parse(localStorage.notes):[]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),o=Object(r.a)(a,2),d=o[0],u=o[1];return Object(i.useEffect)((function(){localStorage.setItem("notes",JSON.stringify(n))}),[n]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{notes:n,onAddNote:function(){var e={id:l()(),title:"Untitled Note",body:"",lastModified:Date.now()};c([e].concat(Object(s.a)(n))),u(e.id)},onDeleteNote:function(e){c(n.filter((function(t){return t.id!==e})))},activeNote:d,setActiveNote:u}),Object(j.jsx)(O,{activeNote:n.find((function(e){return e.id===d})),onUpdateNote:function(e){var t=n.map((function(t){return t.id===e.id?e:t}));c(t)}})]})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.56a7a84e.chunk.js.map