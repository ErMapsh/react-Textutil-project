(this.webpackJsonpmyreactapp=this.webpackJsonpmyreactapp||[]).push([[0],{19:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var c=a(1),o=a.n(c),n=a(12),s=a.n(n),l=(a(19),a(5)),r=a(6),i=a(0);function d(e){var t={color:"white"};return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-dark px-3"),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsxs)(r.b,{className:"navbar-brand nav-link",to:"/",style:t,children:[" ",e.title," "]}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link active ","aria-current":"page",to:"/",style:t,children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link",to:"/about",style:t,children:"About"})})]}),Object(i.jsxs)("div",{className:"btn-group mx-3",role:"group","aria-label":"Basic mixed styles example",children:[Object(i.jsx)("button",{type:"button",className:"btn btn-danger",onClick:e.red,style:{cursor:"pointer"},children:"Red"}),Object(i.jsx)("button",{type:"button",className:"btn btn-warning",onClick:e.yellow,style:{cursor:"pointer"},children:"Yellow"}),Object(i.jsx)("button",{type:"button",className:"btn btn-success",onClick:e.green,style:{cursor:"pointer"},children:"Green"})]}),Object(i.jsxs)("div",{className:"form-check form-switch text-\n            // ".concat("light"===e.mode?"dark":"light","\n            "),children:[Object(i.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",idname:"flexSwitchCheckDefault",onClick:e.togglemode,style:{cursor:"pointer"}}),Object(i.jsx)("label",{className:"form-check-label",forhtml:"flexSwitchCheckDefault",style:t,children:"Enable ".concat(e.mode," Mode")})]})]})]})})}function b(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),o=a[0],n=a[1];return Object(i.jsxs)("div",{className:"bg-".concat(e.mode),style:{color:e.bodyfontcolor},children:[Object(i.jsxs)("div",{className:"container py-3",children:[Object(i.jsx)("h1",{children:e.heading}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",style:{backgroundColor:"dark"===e.mode?"white":"#bdbdbd"},rows:10,value:o,onChange:function(e){console.log("On Change"),n(e.target.value)}})}),Object(i.jsx)("button",{className:"btn btn-".concat(e.buttoncolor," mx-2 my-1"),onClick:function(t){var a=o.toUpperCase();n(a),e.showAlert("Converted to uppercase","success"),console.log("Uppercase was Clicked ".concat(o)),console.log(t)},children:"Convert to Uppercase"}),Object(i.jsx)("button",{className:"btn btn-".concat(e.buttoncolor," mx-2 my-1"),onClick:function(t){n("You have clicked on handleUpClick");var a=o.toLowerCase();n(a),e.showAlert("Converted to lowercase","success")},children:"Convert to Lowercase"}),Object(i.jsx)("button",{className:"btn btn-".concat(e.buttoncolor," mx-2 my-1"),onClick:function(t){n("You have clicked on handleUpClick");n(""),e.showAlert("Cleared Text","success")},children:"Clear Text"}),Object(i.jsx)("button",{className:"btn btn-".concat(e.buttoncolor," mx-2 my-1"),onClick:function(){navigator.clipboard.writeText(o),e.showAlert("Copied Text","success")},children:"Copy To click board"}),Object(i.jsx)("button",{className:"btn btn-".concat(e.buttoncolor," mx-2 my-1"),onClick:function(){var t=o.split(/[ ]+/);n(t.join(" ")),e.showAlert("Remove Extra spaces","success")},children:"Remove Extra Spaces"}),Object(i.jsxs)("button",{className:"btn btn-".concat(e.buttoncolor," mx-2 my-1"),onClick:function(){var t=o.split("").reverse().join("");n(t),e.showAlert("Reverse The string","success")},children:["Reverse The String"," "]})]}),Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)("h2",{children:"Preview:"}),Object(i.jsx)("p",{children:o.length>0?o:"Enter Your text to preview"}),Object(i.jsx)("h2",{children:"What we copy:"}),Object(i.jsx)("p",{children:o.length>0?o:"Enter Your text to see, what we copeid"}),Object(i.jsx)("h4",{children:"Your Text Summary:"}),Object(i.jsxs)("p",{children:[o.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",o.length," characters"]}),Object(i.jsxs)("p",{children:["We can read ",o.split(/\s+/).filter((function(e){return 0!==e.length})).length," words in",.008*o.split(/\s+/).filter((function(e){return 0!==e.length})).length," Minutes"]})]})]})}function h(){var e=Object(c.useState)("Enable dark mode"),t=Object(l.a)(e,2),a=t[0],o=t[1],n=Object(c.useState)({color:"black",background:"white"}),s=Object(l.a)(n,2),r=s[0],d=s[1],b=Object(c.useState)("Enable Light mode"),h=Object(l.a)(b,2),u=h[0],j=h[1],m=function(){"white"===r.background?(d({color:"white",background:"black",border:"1px solid white"}),o("Enable Light mode"),j("Enable Dark mode")):(d({color:"black",background:"white"}),o("Enable Dark mode"),j("Enable Light mode"))};return Object(i.jsxs)("div",{className:"container my-4 ",style:r,children:[Object(i.jsx)("h1",{className:"container my-2",children:"About Us"}),Object(i.jsxs)("div",{className:"accordion",idname:"accordionExample",children:[Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",idname:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button",type:"button",style:r,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(i.jsx)("div",{idname:"collapseOne",className:"accordion-collapse collapse show",style:r,"aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",idname:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button",style:r,"data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse",style:r,"aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",idname:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button",style:r,"data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse",style:r,"aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(i.jsx)("button",{type:"button",className:"btn btn-primary my-3",onClick:m,children:a}),Object(i.jsxs)("div",{className:"form-check form-switch",onClick:m,children:[Object(i.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",idname:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",forhtml:"flexSwitchCheckDefault",children:u})]})]})}function u(e){return Object(i.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(i.jsxs)("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(i.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type),":"]})," ",e.alert.msg]})})}d.defaultProps={title:"This is default title",about:"This is default about"};var j=a(2);var m=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],o=t[1],n=Object(c.useState)(null),s=Object(l.a)(n,2),m=s[0],p=s[1],x=Object(c.useState)("primary"),g=Object(l.a)(x,2),O=g[0],y=g[1],v=Object(c.useState)("black"),w=Object(l.a)(v,2),f=w[0],k=w[1],N=function(e,t){p({msg:e,type:t}),setTimeout((function(){p(null)}),2e3)};return Object(i.jsx)("div",{children:Object(i.jsxs)(r.a,{children:[Object(i.jsx)(d,{title:"TextUtils",about:"Disabled1",togglemode:function(){"light"===a?(o("dark"),k("white"),document.body.style.background="#352164",N("Dark Mode\u2764 Enable","success"),y("light"),document.title="TextUtils-Dark Mode\u2764"):(o("light"),k("black"),document.body.style.background="white",N("Light Mode Enable","success"),y("primary"))},green:function(){o("Green"),document.body.style.background="#198754",k("white"),N("Green mode Enable","success"),y("secondary")},red:function(){o("Red"),document.body.style.background="#dc3545",k("black"),N("Red mode Enable","success"),y("warning")},yellow:function(){o("Yellow"),document.body.style.background="#ffc107",k("black"),N("Yellow mode Enable","success"),y("danger")},mode:a}),Object(i.jsx)(u,{alert:m,showAlert:N}),Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{exact:!0,path:"/about",children:Object(i.jsx)(h,{})}),Object(i.jsx)(j.a,{exact:!0,path:"/",children:Object(i.jsx)(b,{heading:"Enter Text to Analyze Below",showAlert:N,buttoncolor:O,bodyfontcolor:f})})]})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,30)).then((function(t){var a=t.getCLS,c=t.getFID,o=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),o(e),n(e),s(e)}))};s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),p()}},[[29,1,2]]]);
//# sourceMappingURL=main.2a0edc74.chunk.js.map