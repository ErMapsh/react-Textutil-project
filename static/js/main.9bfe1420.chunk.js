(this.webpackJsonpmyreactapp=this.webpackJsonpmyreactapp||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),o=c(4),s=c.n(o),l=(c(9),c(2)),r=c(0);function i(e){var t={color:"white"};return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-dark px-3"),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsxs)("a",{className:"navbar-brand nav-link",href:"#",style:t,children:[" ",e.title," "]}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{href:"#",className:"nav-link active","aria-current":"page",style:t,children:"Home"})})}),Object(r.jsxs)("div",{className:"btn-group mx-3",role:"group","aria-label":"Basic mixed styles example",children:[Object(r.jsx)("button",{type:"button",className:"btn btn-danger",onClick:e.red,style:{cursor:"pointer"},children:"Red"}),Object(r.jsx)("button",{type:"button",className:"btn btn-warning",onClick:e.yellow,style:{cursor:"pointer"},children:"Yellow"}),Object(r.jsx)("button",{type:"button",className:"btn btn-success",onClick:e.green,style:{cursor:"pointer"},children:"Green"})]}),Object(r.jsxs)("div",{className:"form-check form-switch text-\n            // ".concat("light"===e.mode?"dark":"light","\n            "),children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",idname:"flexSwitchCheckDefault",onClick:e.togglemode,style:{cursor:"pointer"}}),Object(r.jsx)("label",{className:"form-check-label",forhtml:"flexSwitchCheckDefault",style:t,children:"Enable ".concat(e.mode," Mode")})]})]})]})})}function b(e){var t=Object(n.useState)(""),c=Object(l.a)(t,2),a=c[0],o=c[1];return Object(r.jsxs)("div",{className:"bg-".concat(e.mode),style:{color:e.bodyfontcolor},children:[Object(r.jsxs)("div",{className:"container py-3",children:[Object(r.jsx)("h1",{children:e.heading}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",style:{backgroundColor:"dark"===e.mode?"white":"#bdbdbd"},rows:10,value:a,onChange:function(e){console.log("On Change"),o(e.target.value)}})}),Object(r.jsx)("button",{className:"btn btn-".concat(e.buttoncolor," mx-2 my-1"),onClick:function(t){var c=a.toUpperCase();o(c),e.showAlert("Converted to uppercase","success"),console.log("Uppercase was Clicked ".concat(a)),console.log(t)},children:"Convert to Uppercase"}),Object(r.jsx)("button",{className:"btn btn-".concat(e.buttoncolor," mx-2 my-1"),onClick:function(t){o("You have clicked on handleUpClick");var c=a.toLowerCase();o(c),e.showAlert("Converted to lowercase","success")},children:"Convert to Lowercase"}),Object(r.jsx)("button",{className:"btn btn-".concat(e.buttoncolor," mx-2 my-1"),onClick:function(t){o("You have clicked on handleUpClick");o(""),e.showAlert("Cleared Text","success")},children:"Clear Text"}),Object(r.jsx)("button",{className:"btn btn-".concat(e.buttoncolor," mx-2 my-1"),onClick:function(){navigator.clipboard.writeText(a),e.showAlert("Copied Text","success")},children:"Copy To click board"}),Object(r.jsx)("button",{className:"btn btn-".concat(e.buttoncolor," mx-2 my-1"),onClick:function(){var t=a.split(/[ ]+/);o(t.join(" ")),e.showAlert("Remove Extra spaces","success")},children:"Remove Extra Spaces"}),Object(r.jsxs)("button",{className:"btn btn-".concat(e.buttoncolor," mx-2 my-1"),onClick:function(){var t=a.split("").reverse().join("");o(t),e.showAlert("Reverse The string","success")},children:["Reverse The String"," "]})]}),Object(r.jsxs)("div",{className:"container my-3",children:[Object(r.jsx)("h2",{children:"Preview:"}),Object(r.jsx)("p",{children:a.length>0?a:"Enter Your text to preview"}),Object(r.jsx)("h2",{children:"What we copy:"}),Object(r.jsx)("p",{children:a.length>0?a:"Enter Your text to see, what we copeid"}),Object(r.jsx)("h4",{children:"Your Text Summary:"}),Object(r.jsxs)("p",{children:[a.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",a.length," characters"]}),Object(r.jsxs)("p",{children:["We can read ",a.split(/\s+/).filter((function(e){return 0!==e.length})).length," words in",.008*a.split(/\s+/).filter((function(e){return 0!==e.length})).length," Minutes"]})]})]})}function d(e){return Object(r.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(r.jsxs)("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(r.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type),":"]})," ",e.alert.msg]})})}i.defaultProps={title:"This is default title",about:"This is default about"};var u=function(){var e=Object(n.useState)("light"),t=Object(l.a)(e,2),c=t[0],a=t[1],o=Object(n.useState)(null),s=Object(l.a)(o,2),u=s[0],h=s[1],j=Object(n.useState)("primary"),m=Object(l.a)(j,2),x=m[0],p=m[1],g=Object(n.useState)("black"),v=Object(l.a)(g,2),O=v[0],f=v[1],y=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),2e3)};return Object(r.jsxs)("div",{children:[Object(r.jsx)(i,{title:"TextUtils",about:"Disabled1",togglemode:function(){"light"===c?(a("dark"),f("white"),document.body.style.background="#352164",y("Dark Mode\u2764 Enable","success"),p("light"),document.title="TextUtils-Dark Mode\u2764"):(a("light"),f("black"),document.body.style.background="white",y("Light Mode Enable","success"),p("primary"))},green:function(){a("Green"),document.body.style.background="#198754",f("white"),y("Green mode Enable","success"),p("secondary")},red:function(){a("Red"),document.body.style.background="#dc3545",f("black"),y("Red mode Enable","success"),p("warning")},yellow:function(){a("Yellow"),document.body.style.background="#ffc107",f("black"),y("Yellow mode Enable","success"),p("danger")},mode:c}),Object(r.jsx)(d,{alert:u,showAlert:y}),Object(r.jsx)(b,{heading:"Enter Text to Analyze Below",showAlert:y,buttoncolor:x,bodyfontcolor:O})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,12)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),o(e),s(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),h()},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.9bfe1420.chunk.js.map