!function(t){var n={};function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)r.d(e,i,function(n){return t[n]}.bind(null,i));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=46)}([function(t,n,r){"use strict";t.exports=function(t,n){return n||(n={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,n,r){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var r=function(t,n){var r=t[1]||"",e=t[3];if(!e)return r;if(n&&"function"==typeof btoa){var i=(a=e,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(d," */")),o=e.sources.map((function(t){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(t," */")}));return[r].concat(o).concat([i]).join("\n")}var a,l,d;return[r].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(t,r,e){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(e)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);e&&i[d[0]]||(r&&(d[2]?d[2]="".concat(r," and ").concat(d[2]):d[2]=r),n.push(d))}},n}},function(t,n,r){"use strict";n.a=r.p+"images/background.mp4"},function(t,n,r){"use strict";n.a=r.p+"images/kimberley_bl.ttf"},function(t,n,r){"use strict";var e,i=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},o=function(){var t={};return function(n){if(void 0===t[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[n]=r}return t[n]}}(),a=[];function l(t){for(var n=-1,r=0;r<a.length;r++)if(a[r].identifier===t){n=r;break}return n}function d(t,n){for(var r={},e=[],i=0;i<t.length;i++){var o=t[i],d=n.base?o[0]+n.base:o[0],c=r[d]||0,s="".concat(d," ").concat(c);r[d]=c+1;var p=l(s),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==p?(a[p].references++,a[p].updater(u)):a.push({identifier:s,updater:g(u,n),references:1}),e.push(s)}return e}function c(t){var n=document.createElement("style"),e=t.attributes||{};if(void 0===e.nonce){var i=r.nc;i&&(e.nonce=i)}if(Object.keys(e).forEach((function(t){n.setAttribute(t,e[t])})),"function"==typeof t.insert)t.insert(n);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var s,p=(s=[],function(t,n){return s[t]=n,s.filter(Boolean).join("\n")});function u(t,n,r,e){var i=r?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(t.styleSheet)t.styleSheet.cssText=p(n,i);else{var o=document.createTextNode(i),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(o,a[n]):t.appendChild(o)}}function x(t,n,r){var e=r.css,i=r.media,o=r.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}var h=null,f=0;function g(t,n){var r,e,i;if(n.singleton){var o=f++;r=h||(h=c(n)),e=u.bind(null,r,o,!1),i=u.bind(null,r,o,!0)}else r=c(n),e=x.bind(null,r,n),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var r=d(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var e=0;e<r.length;e++){var i=l(r[e]);a[i].references--}for(var o=d(t,n),c=0;c<r.length;c++){var s=l(r[c]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}r=o}}}},function(t,n,r){"use strict";n.a=r.p+"images/fondo-info-complete-v2.png"},function(t,n,r){"use strict";n.a=r.p+"images/marco-runner-race2-left.png"},function(t,n,r){"use strict";n.a=r.p+"images/marco-runner-race2-right.png"},function(t,n,r){"use strict";n.a=r.p+"images/marco-runner-race2-left-bg.png"},function(t,n,r){"use strict";n.a=r.p+"images/marco-runner-race2-right-bg.png"},function(t,n,r){"use strict";n.a=r.p+"images/marco-timer-race2-v1.png"},function(t,n,r){"use strict";r.p},function(t,n,r){"use strict";r.p},function(t,n,r){"use strict";n.a=r.p+"images/marco-logo-v3.png"},,,,,,,,,,,,,,,,,,function(t,n,r){"use strict";n.a=r.p+"images/divisores-race2-v2.png"},,,,,,,,,,,,,,,function(t,n,r){t.exports=r(47)},function(t,n,r){"use strict";r.r(n);r(48),r(11),r(12),r(2);let e=document.querySelector("#game"),i=document.querySelector("#category"),o=document.querySelector("#estimate"),a=document.querySelector("#platform"),l=document.querySelector(".next-run-list");const d=nodecg.Replicant("generalRunInfo"),c=nodecg.Replicant("nextRunsListSchedule"),s=nodecg.Replicant("timer"),p=nodecg.Replicant("racePlayers");let u=document.querySelector("[data-chronometer]"),x=(document.querySelector(".left-runner-name"),document.querySelector(".right-runner-name"),document.querySelector(".left-runner-twitch")),h=document.querySelector(".right-runner-twitch");NodeCG.waitForReplicants(d,c,s,p).then(()=>{d.on("change",t=>{e.innerHTML=t.game,i.innerHTML=t.category,o.innerHTML=t.estimate,a.innerHTML=t.platform}),s.on("change",t=>{"00"===t.hours?(u.textContent=`${t.minutes}:${t.seconds}.${t.tenthseconds}`,u.setAttribute("data-text",`${t.minutes}:${t.seconds}.${t.tenthseconds}`)):(u.textContent=`${t.hours}:${t.minutes}:${t.seconds}.${t.tenthseconds}`,u.setAttribute("data-text",`${t.hours}:${t.minutes}:${t.seconds}.${t.tenthseconds}`))}),p.on("change",(t,n)=>{x.textContent=t.twitch[0],h.textContent=t.twitch[1]}),c.on("change",(t,n)=>{for(;l.firstChild;)l.removeChild(l.firstChild);for(let n=0;n<t.length;n++){let r=document.createElement("div");r.classList.add("next-run-container"),l.appendChild(r);let e=document.createElement("h2");e.classList.add("next-run-game-title"),r.appendChild(e),e.textContent=t[n].game}})});const f=nodecg.Replicant("activeIncentives");let g=[],m=0,b=document.querySelector(".incentive-list");NodeCG.waitForReplicants(f).then(()=>{f.on("change",(t,n)=>{if(g=[],m=0,t.length>0){if(b)for(;b.firstChild;)b.removeChild(b.firstChild);t.forEach(t=>{if(t.bidWar)if(2==t.bids.length){let n=document.createElement("div");n.classList.add("incentive-container"),b.appendChild(n);let r=document.createElement("div");r.classList.add("incentive-title-container"),r.classList.add("bidwar-title-container"),n.appendChild(r);let e=document.createElement("h2");e.classList.add("incentive-title"),r.appendChild(e);let i=document.createElement("div");i.classList.add("bids-versus-container"),n.appendChild(i);let o=document.createElement("div");o.classList.add("bid-versus-container"),o.classList.add("winner"),i.appendChild(o);let a=document.createElement("div");a.classList.add("bid-versus-title-container"),o.appendChild(a);let l=document.createElement("h2");l.classList.add("bid-versus-title"),a.appendChild(l);let d=document.createElement("div");d.classList.add("bid-versus-amount-container"),o.appendChild(d);let c=document.createElement("h2");c.classList.add("bid-amount"),d.appendChild(c);let s=document.createElement("div");s.classList.add("bid-versus-container"),s.classList.add("loser"),i.appendChild(s);let p=document.createElement("div");p.classList.add("bid-versus-title-container"),s.appendChild(p);let u=document.createElement("h2");u.classList.add("bid-versus-title"),p.appendChild(u);let x=document.createElement("div");x.classList.add("bid-versus-amount-container"),s.appendChild(x);let h=document.createElement("h2");h.classList.add("bid-amount"),x.appendChild(h);let f=0,g={name:"",amount:0},m={name:"",amount:0};t.bids.forEach(n=>{let r=t.currentAmount-n.currentAmount;r>f&&(f=r)}),g.amount=f,t.bids.forEach(t=>{g.amount===t.currentAmount?g.name=t.name:(m.amount=t.currentAmount,m.name=t.name)}),e.textContent=t.name,l.textContent=g.name,c.textContent=v.format(g.amount),u.textContent=m.name,h.textContent=v.format(m.amount)}else{let n=document.createElement("div");n.classList.add("incentive-container"),b.appendChild(n);let r=document.createElement("div");r.classList.add("incentive-title-container"),r.classList.add("bidwar-title-container"),n.appendChild(r);let e=document.createElement("h2");e.classList.add("incentive-title"),r.appendChild(e);let i=document.createElement("div");i.classList.add("bids-container"),n.appendChild(i);let o=[],a=[];e.textContent=t.name,t.bids.forEach(t=>{if(o.push(t.currentAmount),!a.includes(t))if(a.length>0){let n=0;for(;t.currentAmount<a[n].currentAmount&&(n++,a[n]););a.splice(n,0,t)}else a.push(t)});let l=3;a.length<3&&(l=a.length);for(let t=0;t<l;t++){let n=document.createElement("div");n.classList.add("bid-container"),i.appendChild(n);let r=document.createElement("div");r.classList.add("bid-title-container"),n.appendChild(r);let e=document.createElement("h2");e.classList.add("bid-title"),r.appendChild(e);let o=document.createElement("div");o.classList.add("bid-amount-container"),n.appendChild(o);let l=document.createElement("h2");l.classList.add("bid-amount"),o.appendChild(l),e.textContent=a[t].name,l.textContent=v.format(a[t].currentAmount)}}else{let n=document.createElement("div");n.classList.add("incentive-container"),b.appendChild(n);let r=document.createElement("div");r.classList.add("progress-bar-incentive-title"),n.appendChild(r);let e=document.createElement("h2");e.classList.add("incentive-title"),r.appendChild(e);let i=document.createElement("div");i.classList.add("progress-bar-container"),n.appendChild(i);let o=document.createElement("div");o.classList.add("progress-bar-subcontainer"),i.appendChild(o);let a=document.createElement("span");a.classList.add("progress-bar"),o.appendChild(a);let l=document.createElement("h2");l.classList.add("progress-bar-current-amount"),a.appendChild(l);let d=document.createElement("div");d.classList.add("progress-bar-total-container"),i.appendChild(d);let c=document.createElement("h2");c.classList.add("progress-bar-total-amount"),d.appendChild(c);let s=t.currentAmount*858/t.goal;a.style.width=s+"px",e.textContent=t.name,l.textContent=v.format(t.currentAmount),c.textContent=v.format(t.goal),g.push(n)}})}else if(b)for(;b.firstChild;)b.removeChild(b.firstChild)})});let v=new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",minimumFractionDigits:0,maximumFractionDigits:0})},function(t,n,r){var e=r(4),i=r(49);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};e(i,o);t.exports=i.locals||{}},function(t,n,r){"use strict";r.r(n);var e=r(1),i=r.n(e),o=r(0),a=r.n(o),l=r(3),d=r(2),c=r(31),s=r(6),p=r(7),u=r(8),x=r(9),h=r(5),f=r(13),g=r(10),m=i()(!1),b=a()(l.a),v=a()(d.a),w=a()(c.a),y=a()(s.a),C=a()(p.a),k=a()(u.a),E=a()(x.a),L=a()(h.a),j=a()(f.a),S=a()(g.a);m.push([t.i,"body {\r\n\tmargin: 0;\r\n\tbox-sizing: border-box;\r\n\tpadding: 0;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: kimberley;\r\n\tsrc: url("+b+");\r\n}\r\n\r\n.neon {\r\n\tfilter: drop-shadow(0 0 0.3rem #00DFCC);\r\n\tanimation: pulsate 4s infinite alternate;\r\n}\r\n\r\n.body-container {\r\n\twidth: 1920px;\r\n\theight: 1080px;\r\n\t/* background-color: tomato; */\r\n\tfont-family: kimberley;\r\n}\r\n\r\n.bg-container {\r\n\tposition: absolute;\r\n\twidth: 1920px;\r\n\theight: 1080px;\r\n\t/* background: url(../../../images/vlc_yxf8mfldzZ.png); */\r\n\tbackground: url("+v+");\r\n\tbackground-size: 100%;\r\n\tfilter: brightness(60%) contrast(110%);\r\n\tz-index: -10;\r\n}\r\n\r\n.dividers-bg-wrap {\r\n\tfilter: drop-shadow(0 0 0.3rem #00DFCC);\r\n}\r\n\r\n.dividers-container {\r\n\tposition: absolute;\r\n\twidth: 1920px;\r\n\theight: 1031px;\r\n\tbackground: url("+w+");\r\n\t/* clip-path: polygon(0px 262px, 350px 262px, 350px 0px, 356px 0px, 356px, 879px, 1564px 879px, 1564px 885px, 1140px 885px, 1140px 1030px, 1564px 1030px, 1564px 1031px, 0px 1031px, 0px 1030px, 1134px 1030px, 1134px 885px, 356px 885px, 356px 1030px, 350px 1030px, 350px 268px, 0px 268px) */\r\n}\r\n\r\n\r\n.bg-video {\r\n\tposition: absolute;\r\n\twidth: 1920px;\r\n\theight: 1080px;\r\n}\r\n\r\n.middle-container {\r\n\twidth: 1920px;\r\n\theight: 1030px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n.players-containers {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n}\r\n\r\n.left-container {\r\n\twidth: 960px;\r\n\theight: 1030px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\t/* border-right: 6px solid #52dccb; */\r\n}\r\n\r\n.left-cam-container {\r\n\tposition: relative;\r\n\twidth: 364px;\r\n\theight: 272px;\r\n\ttop: 97px;\r\n\tleft: 194px;\r\n\t/* background-color: #176902; */\r\n\t/* border-bottom: 6px solid #52dccb; */\r\n}\r\n\r\n.right-cam-container {\r\n\tposition: relative;\r\n\twidth: 364px;\r\n\theight: 272px;\r\n\ttop: 97px;\r\n\tleft: 405px;\r\n\t/* background-color: #176902; */\r\n\t/* border-bottom: 6px solid #52dccb; */\r\n}\r\n\r\n.left-runner-container {\r\n\tposition: relative;\r\n\twidth: 344px;\r\n\theight: 76px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tmargin-top: 20px;\r\n\ttop: 41px;\r\n\tleft: 368px;\r\n}\r\n\r\n.right-runner-container {\r\n\tposition: relative;\r\n\twidth: 344px;\r\n\theight: 76px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tmargin-top: 20px;\r\n\ttop: 41px;\r\n\tleft: 248px;\r\n}\r\n\r\n.left-runner-bg-wrap {\r\n\tfilter: drop-shadow(0 0 0.3rem #00DFCC);\r\n}\r\n\r\n.right-runner-bg-wrap {\r\n\tfilter: drop-shadow(0 0 0.3rem #00DFCC);\r\n}\r\n\r\n.left-runner-bg-container {\r\n\tposition: relative;\r\n\twidth: 372px;\r\n\theight: 80px;\r\n\tright: 8px;\r\n\tbackground: url("+y+");\r\n\t/* clip-path: polygon(0px 44px, 22px 44px, 22px 13px, 36px 0px, 301px 0px, 324px 18px, 324px 44px, 350px 44px, 350px 50px, 324px 50px, 324px 77px, 299px 96px, 226px 96px, 222px 91px, 111px 91px, 107px 95px, 41px 95px, 22px 82px, 22px 50px, 0px 50px); */\r\n}\r\n\r\n.right-runner-bg-container {\r\n\tposition: relative;\r\n\twidth: 372px;\r\n\theight: 80px;\r\n\tleft: 7px;\r\n\tbackground: url("+C+");\r\n\t/* clip-path: polygon(0px 44px, 22px 44px, 22px 13px, 36px 0px, 301px 0px, 324px 18px, 324px 44px, 350px 44px, 350px 50px, 324px 50px, 324px 77px, 299px 96px, 226px 96px, 222px 91px, 111px 91px, 107px 95px, 41px 95px, 22px 82px, 22px 50px, 0px 50px); */\r\n}\r\n\r\n.left-runner-bg-container-1 {\r\n\tposition: absolute;\r\n\twidth: 372px;\r\n\theight: 80px;\r\n\tright: 0px;\r\n\tbackground: url("+k+");\r\n}\r\n\r\n.right-runner-bg-container-1 {\r\n\tposition: absolute;\r\n\twidth: 372px;\r\n\theight: 80px;\r\n\tleft: 0px;\r\n\tbackground: url("+E+");\r\n}\r\n\r\n.left-runner-name-container {\r\n\tposition: absolute;\r\n\twidth: 288px;\r\n\theight: 96px;\r\n\tcolor: white;\r\n\tfont-size: 12px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.right-runner-name-container {\r\n\tposition: absolute;\r\n\twidth: 288px;\r\n\theight: 96px;\r\n\tcolor: white;\r\n\tfont-size: 12px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.runner-name {\r\n\t/* display: flex; */\r\n\tdisplay: none;\r\n}\r\n\r\n.runner-twitch {\r\n\tdisplay: flex;\r\n\t/* display: none; */\r\n}\r\n\r\n.runner-twitch-icon {\r\n\tdisplay: flex;\r\n\t/* display: none; */\r\n\tfont-size: 40px;\r\n\tposition: relative;\r\n\ttop: 4px;\r\n\tright: 9px;\r\n\tcolor: purple;\r\n}\r\n\r\n.coms-container {\r\n\tgrid-area: coms;\r\n\twidth: 96%;\r\n\theight: 100%;\r\n\t/* height: 538px;\r\n\tdisplay: flex; */\r\n\tbackground: url("+L+");\r\n\tbackground-size: cover;\r\n\tmargin-left: 10px;\r\n\ttransform: rotateY(180deg);\r\n}\r\n\r\n.logo-sre8-container {\r\n\twidth: 300px;\r\n\theight: 110px;\r\n\theight: auto;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tpadding: 0 10px 0 0;\r\n}\r\n\r\n.logo-bg-wrap {\r\n\tfilter: drop-shadow(0 0 0.3rem #00DFCC);\r\n}\r\n\r\n.logo-bg-container {\r\n\tposition: relative;\r\n\twidth: 298px;\r\n\theight: 108px;\r\n\tbackground: url("+j+');\r\n\tclip-path: polygon(0px 8px, 169px 8px, 174px 0px, 283px 0px, 298px, 13px, 298px 93px, 282px 108px, 274px 108px, 293px 90px, 293px 23px, 279px 11px, 0px 11px)\r\n}\r\n\r\n.logo-sre8 {\r\n\tposition: absolute;\r\n\twidth: 303px;\r\n\theight: auto;\r\n}\r\n\r\n.right-container {\r\n\twidth: 960px;\r\n\theight: 1029px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n.left-game-container {\r\n\tposition: relative;\r\n\ttop: 56px;\r\n\tleft: 5px;\r\n\twidth: 941px;\r\n\theight: 529px;\r\n\t/* background-color: brown; */\r\n\t/* border-bottom: 6px solid #52dccb; */\r\n}\r\n\r\n.right-game-container {\r\n\tposition: relative;\r\n\ttop: 56px;\r\n\tleft: 15px;\r\n\twidth: 941px;\r\n\theight: 529px;\r\n\t/* background-color: brown; */\r\n\t/* border-bottom: 6px solid #52dccb; */\r\n}\r\n\r\n.bottom-container {\r\n\tposition: absolute;\r\n\twidth: 482px;\r\n\theight: 433px;\r\n\ttop: 590px;\r\n\tleft: 718px;\r\n\t/* border-top: 6px solid #52dccb; */\r\n\tdisplay: grid;\r\n\tgrid-template-rows: 1fr 1fr 2fr;\r\n\tgrid-template-columns: 1fr 0.48fr 1fr;\r\n\tgrid-template-areas:\r\n\t\t"timer timer timer"\r\n\t\t"game game game"\r\n\t\t"info info coms";\r\n\t/* display: flex;\r\n\tflex-direction: column;\r\n\talign-items: center; */\r\n\tfont-size: 20px;\r\n\t/* color: white; */\r\n\tcolor: #b176cc;\r\n}\r\n\r\n.game-info-container {\r\n\theight: 300px;\r\n\twidth: 482px;\r\n\t/* border-right: 3px solid #52dccb; */\r\n\t/* display: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center; */\r\n\tcolor: #b176cc;\r\n\t/* background: url(../../../images/fondo-info-complete-v2.png); */\r\n}\r\n\r\n.game-name-container {\r\n\theight: 93px;\r\n\twidth: 100%;\r\n\tgrid-area: game;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 24px;\r\n\ttext-align: center;\r\n\t/* padding-top: 10px; */\r\n\toverflow-wrap: break-word;\r\n\t/* background: url(../../../images/fondo-info-complete-v2.png); */\r\n}\r\n\r\n#game {\r\n\tmargin: 0;\r\n}\r\n\r\n.bot-bottom-container {\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\theight: 200px;\r\n}\r\n\r\n.game-category-plat-container {\r\n\tgrid-area: info;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\twidth: 290px;\r\n\theight: 203px;\r\n\tjustify-content: space-evenly;\r\n\t/* margin-bottom: 2%; */\r\n\t/* margin-top: 23px; */\r\n\tbackground: url('+L+");\r\n\tbackground-size: cover;\r\n}\r\n\r\n.category-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tjustify-content: flex-start;\r\n}\r\n\r\n.icon {\r\n\tfont-size: 50px;\r\n\tpadding: 0 10px;\r\n}\r\n\r\n.category-icon {\r\n\t/* font-size: 30px; */\r\n\ttext-shadow: 0 0 0.3rem #9c1ed6;\r\n}\r\n\r\n#category {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\tmargin: 0;\r\n\t/* width: 24rem; */\r\n\theight: 56%;\r\n\toverflow-wrap: break-word;\r\n\talign-items: center;\r\n}\r\n\r\n.platform-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tjustify-content: flex-start;\r\n}\r\n\r\n.platform-icon {\r\n\ttext-shadow: 0 0 0.3rem #9c1ed6;\r\n}\r\n\r\n.timer-info-container {\r\n\twidth: 482px;\r\n\theight: 128px;\r\n\t/* border-left: 3px solid #52dccb; */\r\n\tgrid-area: timer;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tcolor: #b176cc;\r\n}\r\n\r\n.timer-bg {\r\n\tposition: absolute;\r\n\twidth: 382px;\r\n\theight: 57px;\r\n\tbackground: url("+S+")\r\n}\r\n\r\n.timer {\r\n\tmargin: 0;\r\n\tposition: relative;\r\n\twidth: 313px;\r\n\tleft: 86px;\r\n\tfilter: none;\r\n}\r\n\r\n.timer-container {\r\n\tmargin-top: 10px;\r\n\twidth: 80%;\r\n\theight: 100%;\r\n\t/* border: 1px solid #751fa0; */\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfilter: drop-shadow(0 0 0.3rem #751fa0);\r\n\tanimation: pulsate-timer 4s infinite alternate;\r\n}\r\n\r\n.estimate-container {\r\n\tdisplay: flex;\r\n\twidth: 300px;\r\n\talign-items: center;\r\n\tjustify-content: center\r\n}\r\n\r\n.clock-icon {\r\n\tfont-size: 30px;\r\n\tmargin-right: 8px;\r\n\ttext-shadow: 0 0 0.3rem #9c1ed6;\r\n}\r\n\r\n\r\n.aux-bar-container {\r\n\tposition: absolute;\r\n\tdisplay: flex;\r\n\t/* top: 1030px; */\r\n\twidth: 1920px;\r\n\theight: 50px;\r\n\t/* background-color: cadetblue; */\r\n\t/* background-color: #b3fff6; */\r\n\t/* border-top: 1px solid #2eefd7; */\r\n\t/* background-color: rgba(28, 133, 119, 0.5); */\r\n\tbackground-color: rgba(46, 239, 215, 0.2);\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tcolor: whitesmoke;\r\n}\r\n\r\n.main-aux-content-container {\r\n\twidth: 76%;\r\n\theight: inherit;\r\n\tdisplay: flex;\r\n\tflex: 1 1 auto;\r\n\t/* background-color: wheat; */\r\n\talign-items: center;\r\n\t/* border-right: 1px solid white; */\r\n\tpadding-left: 1rem;\r\n}\r\n\r\n.aux-divisor-container-initial {\r\n\tposition: absolute;\r\n\twidth: 10px;\r\n\theight: 80%;\r\n\t/* left: 17.2%; */\r\n\tleft: 0.7%;\r\n\tborder-left: 10px double #e40052;\r\n}\r\n\r\n.aux-divisor-container {\r\n\t/* position: absolute; */\r\n\twidth: 10px;\r\n\theight: 80%;\r\n\t/* left: 17.2%; */\r\n\tleft: 16.2%;\r\n}\r\n\r\n.first-divisor {\r\n\tborder-left: 10px double #e40052;\r\n}\r\n\r\n.second-divisor {\r\n\tborder-left: 10px double #ad26b1;\r\n\t/* border-left: 10px double #33ff00; */\r\n\t/* border-left: 10px double #23ad00; */\r\n}\r\n\r\n.main-aux-content-container .first-section-container {\r\n\theight: inherit;\r\n\tdisplay: none;\r\n\t/* display: flex; */\r\n\tjustify-content: flex-start;\r\n\talign-items: center;\r\n\tflex: 1 1 auto;\r\n\tpadding: 0 0 0 20px;\r\n\toverflow: visible;\r\n}\r\n\r\n.first-section-title-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\twidth: 16%;\r\n\theight: 80%;\r\n\tbackground-color: #e40052;\r\n\tbox-shadow: 0 0 10px #e40052;\r\n\tpadding: 0 20px;\r\n\tmargin-right: 20px;\r\n}\r\n\r\n.next-run-list {\r\n\twidth: 80%;\r\n\theight: 80%;\r\n\t/* border-left: 10px double #e40052; */\r\n\tdisplay: flex;\r\n}\r\n\r\n.next-run-container {\r\n\twidth: 30%;\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\toverflow-wrap: break-word;\r\n\tpadding-left: 10px;\r\n}\r\n\r\n.next-run-game-title {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tfont-size: 17.5px;\r\n\tletter-spacing: 1px;\r\n\t/* font-size: clamp(15px, 20px, 25px); */\r\n\tborder-right: 5px solid #e40052;\r\n}\r\n\r\n.main-aux-content-container .second-section-container {\r\n\theight: inherit;\r\n\t/* display: none; */\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\talign-items: center;\r\n\tflex: 1 1 auto;\r\n\tpadding: 0 0 0 20px;\r\n\toverflow: visible;\r\n}\r\n\r\n.second-section-title-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\twidth: 8%;\r\n\theight: 80%;\r\n\tbackground-color: #ad26b1;\r\n\t/* background-color: #23ad00; */\r\n\tbox-shadow: 0 0 10px #ad26b1;\r\n\t/* box-shadow: 0 0 10px #33ff00; */\r\n\tpadding: 0 20px;\r\n\tmargin-right: 20px;\r\n}\r\n\r\n.incentive-list {\r\n\twidth: 84%;\r\n\theight: 80%;\r\n\t/* border-left: 10px double #e40052; */\r\n\tdisplay: flex;\r\n}\r\n\r\n.incentive-container {\r\n\twidth: 100%;\r\n\theight: 99%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: flex-start;\r\n\toverflow-wrap: break-word;\r\n\tpadding-left: 10px;\r\n}\r\n\r\n.progress-bar-incentive-title {\r\n\twidth: 22%;\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tbackground-color: #8880886b;\r\n\tbox-shadow: 0 0 10px #8880886b;\r\n\t/* border-right: 5px solid #ad26b1; */\r\n\t/* border-right: 5px solid #23ad00; */\r\n}\r\n\r\n.incentive-title-container {\r\n\twidth: 30%;\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tbackground-color: #8880886b;\r\n\tbox-shadow: 0 0 10px #8880886b;\r\n\t/* border-right: 5px solid #ad26b1; */\r\n\t/* border-right: 5px solid #23ad00; */\r\n}\r\n\r\n.incentive-title {\r\n\twidth: auto;\r\n\tfont-size: 15px;\r\n\tletter-spacing: 1px;\r\n}\r\n\r\n.progress-bar-container {\r\n\twidth: 75%;\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\toverflow: visible;\r\n\t/* background-color: #176902; */\r\n\tborder: 1px solid #23ad00;\r\n\t/* border-left: 5px solid #23ad00; */\r\n}\r\n\r\n.progress-bar-subcontainer {\r\n\twidth: 90%;\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: flex-start;\r\n}\r\n\r\n.progress-bar {\r\n\tmin-width: 10%;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: flex-end;\r\n\tbackground-color: #176902;\r\n\t/* border: 1px solid #23ad00; */\r\n\tborder-left: 5px solid #23ad00;\r\n\tborder-right: 1px solid #23ad00;\r\n}\r\n\r\n.progress-bar-total-container {\r\n\tmargin-left: 5px;\r\n\twidth: 10%;\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tborder-left: 1px solid #23ad00;\r\n}\r\n\r\n.aux-divisor-total {\r\n\twidth: 6px;\r\n\theight: 100%;\r\n\tbackground-color: #00DFCC;\r\n\tbox-shadow: 0 0 0.3rem #00DFCC;\r\n}\r\n\r\n.total-amount-container {\r\n\theight: inherit;\r\n\twidth: 10%;\r\n\t/* width: 200px; */\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tpadding: 0 10px 0 10px;\r\n}\r\n\r\n.bid-versus-container {\r\n\twidth: 47%;\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\toverflow: visible;\r\n\tbackground-color: #12303D;\r\n\tborder: 1px solid #2EEFD7;\r\n\t/* border-left: 5px solid #2EEFD7; */\r\n}\r\n\r\n.bid-container {\r\n\twidth: 31%;\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\toverflow: visible;\r\n\tbackground-color: #12303D;\r\n\tborder: 1px solid #2EEFD7;\r\n\t/* border-left: 5px solid #2EEFD7; */\r\n}\r\n\r\n.bids-container {\r\n\twidth: 81%;\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tmargin-left: 15px;\r\n}\r\n\r\n.bids-versus-container {\r\n\twidth: 72%;\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tmargin-left: 35px;\r\n}\r\n\r\n.bidwar-title-container {\r\n\twidth: 23%;\r\n}\r\n\r\n.bid-versus-title-container {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n.winner .bid-versus-title-container {\r\n\t/* width: 45%; */\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\toverflow: visible;\r\n\tborder-right: 1px solid #23ad0094;\r\n}\r\n\r\n.loser .bid-versus-title-container {\r\n\t/* width: 45%; */\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\toverflow: visible;\r\n\tborder-right: 1px solid #b100007e;\r\n}\r\n\r\n.bid-versus-title {\r\n\twidth: auto;\r\n\tfont-size: 17px;\r\n\tletter-spacing: 1px;\r\n}\r\n\r\n.bid-versus-amount-container {\r\n\twidth: 20%;\r\n\theight: 100%;\r\n\tpadding: 0 5px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n.bid-versus-amount-container {\r\n\twidth: 20%;\r\n\tpadding: 0 5px;\r\n\tletter-spacing: 3px;\r\n}\r\n\r\n.winner .bid-versus-amount-container {\r\n\tbackground-color: #23ad005b;\r\n}\r\n\r\n.loser .bid-versus-amount-container {\r\n\tbackground-color: #b100003a;\r\n}\r\n\r\n.winner {\r\n\t/* width: 40% */\r\n\tborder: 1px solid #23ad0094;\r\n\tborder-left: 5px solid #23ad0094;\r\n\t/* background-color: #23ad005b; */\r\n}\r\n\r\n.loser {\r\n\t/* width: 28% */\r\n\tborder: 1px solid #b100007e;\r\n\tborder-left: 5px solid #b100007e;\r\n\t/* background-color: #b100003a; */\r\n}\r\n\r\n.bid-title-container {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tborder-right: 1px solid #2EEFD7;\r\n}\r\n\r\n.bid-amount-container {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\twidth: 18%;\r\n\theight: 100%;\r\n\tpadding: 0 2px;\r\n\tfont-size: 12px;\r\n\tbackground-color: #2eefd86c;\r\n}\r\n\r\n.bid-title {\r\n\twidth: auto;\r\n\tfont-size: 13px;\r\n\tletter-spacing: 1px;\r\n}\r\n\r\n.logo-aecc-container {\r\n\twidth: 7%;\r\n\theight: inherit;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\t/* background: url(../../../images/aecc-v1.png); */\r\n}\r\n\r\n.aecc-logo {\r\n\twidth: 129px;\r\n\theight: auto;\r\n}\r\n\r\n@keyframes pulsate {\r\n\t100% {\r\n\t\t/* Larger blur radius */\r\n\t\tfilter: drop-shadow(0 0 0.3rem #00DFCC)\r\n\t}\r\n\r\n\t0% {\r\n\t\t/* Smaller blur radius */\r\n\t\tfilter: drop-shadow(0 0 0.05rem #00DFCC)\r\n\t}\r\n}\r\n\r\n@keyframes pulsate-timer {\r\n\t100% {\r\n\t\t/* Larger blur radius */\r\n\t\tfilter: drop-shadow(0 0 0.3rem #751fa0)\r\n\t}\r\n\r\n\t0% {\r\n\t\t/* Smaller blur radius */\r\n\t\tfilter: drop-shadow(0 0 0.05rem #751fa0)\r\n\t}\r\n}\r\n\r\n\r\n@keyframes flicker {\r\n\r\n\t0%,\r\n\t18%,\r\n\t22%,\r\n\t25%,\r\n\t53%,\r\n\t57%,\r\n\t100% {\r\n\t\tfilter: drop-shadow(0 0 0.3rem #00DFCC)\r\n\t}\r\n\r\n\t20%,\r\n\t24%,\r\n\t55% {\r\n\t\tfilter: none;\r\n\t}\r\n}\r\n",""]),n.default=m}]);