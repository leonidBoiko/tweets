(this["webpackJsonptweetme-web"]=this["webpackJsonptweetme-web"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),o=a.n(r),l=a(7),s=a.n(l),i=a(2),u=a(1);function m(e,t,a,n){var c;n&&(c=JSON.stringify(n));var r=new XMLHttpRequest,o="http://localhost:8000/api".concat(t);r.responseType="json";var l=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var a=document.cookie.split(";"),n=0;n<a.length;n++){var c=a[n].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t}("csrftoken");r.open(e,o),r.setRequestHeader("Content-Type","application/json"),l&&(r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("X-CSRFToken",l)),r.onload=function(){403===r.status&&("Authentication credentials were not provided."===r.response.detail&&(window.location.href="/login?loginRequired=true"));a(r.response,r.status)},r.onerror=function(e){a({message:"The request was an error"},400)},r.send(c)}var d=a(8);function f(e){var t=e.tweet,a=e.action,n=e.didPerfomeAction,r=t.likes?t.likes:0,o=a.display?a.display:"Action",l=e.className?e.className:"btn btn-primary",s=function(e,t){console.log(e,t),200!==t&&201!==t||!n||n(e,t)},i="like"===a.type?"".concat(r," ").concat(o):o;return c.a.createElement("button",{className:l,onClick:function(e){e.preventDefault(),function(e,t,a){var n={id:e,action:t};m("POST","".concat("/tweets","/action/"),a,n)}(t.id,a.type,s)}},i)}function p(e){var t=e.parentTweet;return t?c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-11 mx-auto p-3 border rounded"},c.a.createElement("p",{className:"mb-0 text-muted small"},"Retweet"),c.a.createElement(w,{hideActions:!0,className:" ",tweet:t}))):null}function w(e){var t=e.tweet,a=e.didRetweet,r=e.hideActions,o=Object(n.useState)(e.tweet?e.tweet:null),l=Object(u.a)(o,2),s=l[0],i=l[1],m=e.className?e.className:"col-10 mx-auto col-md-6",w=window.location.pathname,b=Object(d.a)(/([0-9]+)/,{tweetid:1}),E=w.match(b),v=E?E.groups.tweetid:-1,h="".concat(t.id)==="".concat(v),g=function(e,t){200===t?i(e):201===t&&a&&a(e)};return c.a.createElement("div",{className:m},c.a.createElement("div",null,c.a.createElement("p",null,t.id," - ",t.content),c.a.createElement(p,{parentTweet:t.parent})),c.a.createElement("div",{className:"btn btn-group"},s&&!0!==r&&c.a.createElement(c.a.Fragment,null,c.a.createElement(f,{tweet:s,didPerfomeAction:g,action:{type:"like",display:"Like"}}),c.a.createElement(f,{tweet:s,didPerfomeAction:g,action:{type:"unlike",display:"Unlike"}}),c.a.createElement(f,{tweet:s,didPerfomeAction:g,action:{type:"retweet",display:"Retweet"}})),!0===h?null:c.a.createElement("button",{className:"btn btn-outline-primary",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)}},"View")))}function b(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)([]),s=Object(u.a)(l,2),d=s[0],f=s[1],p=Object(n.useState)(!1),b=Object(u.a)(p,2),E=b[0],v=b[1];Object(n.useEffect)((function(){var t=Object(i.a)(e.newTweets).concat(r);t.length!==d.length&&f(t)}),[e.newTweets,d,r]),Object(n.useEffect)((function(){if(!1===E){!function(e,t){var a="".concat("/tweets");e&&(a="".concat("/tweets","/?username=").concat(e)),m("GET",a,t)}(e.username,(function(e,t){200===t?(o(e),v(!0)):alert("Was an error")}))}}),[r,E,v,e.username]);var h=function(e){var t=Object(i.a)(r);t.unshift(e),o(t);var a=Object(i.a)(d);a.unshift(e),f(a)};return d.map((function(e,t){return c.a.createElement(w,{tweet:e,className:"bg-white text-dark",key:"".concat(t,"-{item.id}"),didRetweet:h})}))}function E(e){var t=c.a.createRef(),a=e.didTweet,n=function(e,t){201===t?a(e):alert("An error occurd please rty again ")};return c.a.createElement("div",{className:e.className},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a,c,r=t.current.value;a=r,c=n,m("POST","".concat("/tweets","/create/"),c,{content:a}),t.current.value=""}},c.a.createElement("textarea",{ref:t,required:!0,className:"form-control"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary my-3"},"Tweet")))}function v(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],o=a[1],l="false"!==e.canTweet;return c.a.createElement("div",{className:e.className},!0===l&&c.a.createElement(E,{didTweet:function(e){var t=Object(i.a)(r);t.unshift(e),o(t)},className:"col-6 mx-auto my-3"}),c.a.createElement(b,Object.assign({newTweets:r},e)))}function h(e){var t=e.tweetId,a=Object(n.useState)(!1),r=Object(u.a)(a,2),o=r[0],l=r[1],s=Object(n.useState)(null),i=Object(u.a)(s,2),d=i[0],f=i[1],p=function(e,t){200===t?f(e):alert("There was an error finding your tweet")};return Object(n.useEffect)((function(){!1===o&&(!function(e,t){m("GET","".concat("/tweets","/").concat(e,"/"),t)}(t,p),l(!0))}),[t,o,l]),null===d?null:c.a.createElement(w,{tweet:d,className:e.className})}a(14);var g=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),c.a.createElement("p",null,"Edit ",c.a.createElement("code",null,"src/App.js")," and save to reload."),c.a.createElement("div",null,c.a.createElement(v,null)),c.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))},j=document.getElementById("root");j&&o.a.render(c.a.createElement(g,null),j);var N=c.a.createElement,O=document.getElementById("tweetme-2");O&&o.a.render(N(v,O.dataset),O),document.querySelectorAll(".tweetme-2-detail").forEach((function(e){o.a.render(N(h,e.dataset),e)}))},7:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.56f9cd56.chunk.js.map