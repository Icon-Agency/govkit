/*! @gov.au/main-nav v1.0.0 */var AU=AU||{};!function(e){function n(e,n,t,o){if("opening"===n||"open"===n)var a=t||"au-main-nav__content--closed",l=o||"au-main-nav__content--open";else var a=o||"au-main-nav__content--open",l=t||"au-main-nav__content--closed";!function(e,n){e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")}(e,a),function(e,n){e.classList?e.classList.add(n):e.className=e.className+" "+n}(e,l)}function t(e,n,t){function o(e){var n=t.apply(this,arguments);return!1===n&&(e.stopPropagation(),e.preventDefault()),n}function a(){var n=t.call(e,window.event);return!1===n&&(window.event.returnValue=!1,window.event.cancelBubble=!0),n}return e.addEventListener?(e.addEventListener(n,o,!1),{element:e,handler:o,event:n}):(e.attachEvent("on"+n,a),{element:e,handler:a,event:n})}function o(e){e.element.removeEventListener?e.element.removeEventListener(e.event,e.handler):e.element.detachEvent("on"+e.event,e.handler)}var a={},l={},c=!1;a.Toggle=function(i,u,s){if(!c){c=!0;try{window.event.cancelBubble=!0,event.stopPropagation()}catch(h){}"object"!=typeof s&&(s={});var r=i.getAttribute("aria-controls"),f=document.getElementById(r),p=f.querySelector(".au-main-nav__menu"),d=f.querySelector(".au-main-nav__overlay"),v=f.querySelector(".au-main-nav__toggle--close"),y=f.querySelector(".au-main-nav__toggle--open"),m=f.querySelector(".au-main-nav__focus-trap-top"),_=f.querySelector(".au-main-nav__focus-trap-bottom"),g=p.querySelectorAll("a, .au-main-nav__toggle"),b=-1===f.className.indexOf("au-main-nav__content--open"),S=p.offsetWidth,w=b?"opening":"";d.style.display="block",function(u,r){e.animate.Toggle({element:p,property:"left",openSize:0,closeSize:-1*S,speed:r||250,prefunction:function(){"opening"===w?(p.style.display="block",d.style.left=0,d.style.opacity=.5,"function"==typeof s.onOpen&&s.onOpen()):(d.style.opacity="0","function"==typeof s.onClose&&s.onClose())},postfunction:function(){"opening"===w?(v.focus(),m.setAttribute("tabindex",0),_.setAttribute("tabindex",0),l.focusTop=t(m,"focus",function(){g[g.length-1].focus()}),l.focusBottom=t(_,"focus",function(){g[0].focus()}),l.escKey=t(document,"keyup",function(){var e=e||window.event,n=function(e,n){return("undefined"!=typeof getComputedStyle?getComputedStyle(e,null):e.currentStyle)[n]}(d,"display");27===e.keyCode&&"block"===n&&a.Toggle(i,r,s)}),"function"==typeof s.afterOpen&&s.afterOpen()):(y.focus(),m.removeAttribute("tabindex"),_.removeAttribute("tabindex"),o(l.focusTop),o(l.focusBottom),o(l.escKey),"function"==typeof s.afterClose&&s.afterClose()),n(u,w),n(document.body,w,"au-main-nav__scroll--unlocked","au-main-nav__scroll--locked"),p.style.display="",p.style.left="",d.style.display="",d.style.left="",d.style.opacity="",c=!1}})}(f,u)}},e.mainNav=a}(AU),"undefined"!=typeof module&&(module.exports=AU);