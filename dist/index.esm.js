const e=()=>"taojian";function t(e,t,n,o){return new(n||(n=Promise))((function(r,s){function i(e){try{c(o.next(e))}catch(e){s(e)}}function a(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((o=o.apply(e,t||[])).next())}))}const n=()=>{var e,t,n,o,r,s;const{userAgent:i,onLine:a,platform:c,cookieEnabled:l,language:d}=navigator,u=i.toLowerCase(),h=0<=u.indexOf("msie")?{type:"IE",version:Number(null===(e=u.match(/msie ([\d]+)/))||void 0===e?void 0:e[1])}:u.match(/trident\/.+?rv:(([\d.]+))/)?{type:"IE",version:11}:0<=u.indexOf("edge")?{type:"Edge",version:Number(null===(t=u.match(/edge\/([\d]+)/))||void 0===t?void 0:t[1])}:0<=u.indexOf("firefox")?{type:"Firefox",version:Number(null===(n=u.match(/firefox\/([\d]+)/))||void 0===n?void 0:n[1])}:0<=u.indexOf("chrome")?{type:"Chrome",version:Number(null===(o=u.match(/chrome\/([\d]+)/))||void 0===o?void 0:o[1])}:0<=u.indexOf("opera")?{type:"Opera",version:Number(null===(r=u.match(/opera.([\d]+)/))||void 0===r?void 0:r[1])}:0<=u.indexOf("safari")?{type:"Safari",version:Number(null===(s=u.match(/version\/([\d]+)/))||void 0===s?void 0:s[1])}:{type:u,version:-1};return Object.assign(Object.assign({},h),{onLine:a,platform:c,cookieEnabled:l,language:d})},o=()=>document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement,r=()=>{document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},s=e=>{e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},i=(e=!0)=>({width:e?window.innerWidth:window.document.documentElement.clientWidth,height:e?window.innerHeight:window.document.documentElement.clientHeight}),a=()=>{const e=void 0!==window.pageXOffset,t="CSS1Compat"===(document.compatMode||"");return{x:e?window.pageXOffset:t?document.documentElement.scrollLeft:document.body.scrollLeft,y:e?window.pageYOffset:t?document.documentElement.scrollTop:document.body.scrollTop}},c=(e,t)=>{navigator.clipboard.writeText(e).then((()=>t&&t())).catch((()=>{const t=document.createElement("textarea");t.value=e,t.style.position="position",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy")&&document.execCommand("copy"),document.body.removeChild(t)}))},l=e=>t(void 0,void 0,void 0,(function*(){navigator.clipboard.readText().then((t=>e&&e(t))).catch((e=>console.log(e)))})),d=e=>{const t=document.createRange();t.selectNodeContents(e);const n=window.getSelection();null==n||n.removeAllRanges(),null==n||n.addRange(t)},u=()=>{var e;return(null===(e=window.getSelection())||void 0===e?void 0:e.toString())||""},h=()=>navigator.language,m=()=>{document.execCommand?document.execCommand("print"):window.print()},f=()=>"object"==typeof window&&"object"==typeof document,g=()=>{const e=navigator.userAgent,t=/(?:Windows Phone)/.test(e),n=/(?:SymbianOS)/.test(e),o=/(?:Android)/.test(e),r=/(?:Firefox)/.test(e),s=/(?:Chrome|CriOS)/.test(e),i=/(?:iPad|PlayBook)/.test(e)||o&&!/(?:Mobile)/.test(e)||r&&/(?:Tablet)/.test(e),a=/(?:iPhone)/.test(e)&&!i;return t?"Windows Phone":n?"Symbian":i?"Tablet":a?"Ios":o?"Android":r?"FireFox":s?"Chrome":!a&&!o&&!n?"Pc":"Unkonwn"},p=()=>{const e=navigator.userAgent.toLowerCase();return/Micromessenger/i.test(e)},b=()=>/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i.test(navigator.userAgent),w=()=>/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent),v=()=>/(Android)/i.test(navigator.userAgent),F=e=>document.querySelector(e),A=e=>document.querySelectorAll(e),y=(e,t)=>{for(const n in t)e.style[n]=t[n]},E=(e,t)=>getComputedStyle(e)[t],D=e=>e.className,S=(e,t)=>e.classList.contains(t),x=(e,t)=>e.classList.remove(t),k=(e,t)=>{S(e,t)||e.classList.add(t)},$=(e,t)=>{for(const n in t)e.setAttribute(n,t[n])},C=(e,t)=>e.removeAttribute(t),O=(e,t)=>e.getAttribute(t),I=e=>Object.keys(e.attributes).map((t=>e.attributes[t].name)),P=e=>Object.keys(e.attributes).map((t=>({key:e.attributes[t].name,value:e.attributes[t].value}))),N=(e,t)=>{new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&t&&t()}))})).observe(e)},M=e=>{const t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight;return t.top<=n},T=e=>e.replace(/<[^>]+>/g,""),R=(e,t=window.location.href)=>{const n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),o=t.split("?")[1].match(n);return null!=o?decodeURIComponent(o[2]):""},L=(e=window.location.href)=>{const t={};if(e.indexOf("?")>-1&&e.indexOf("=")>-1){const n=e.split("?")[1].split("&");for(let e=0;e<n.length;e++)t[n[e].split("=")[0]]=decodeURIComponent(n[e].split("=")[1])}return t},j=(e=window.location.href)=>{const t={};if(e.indexOf("?")>-1&&e.indexOf("=")>-1){const n=e.split("?")[1].split("&");for(let e=0;e<n.length;e++){const o=n[e].split("=");t[o[0]]=decodeURIComponent(o[1])}}return t},H=e=>{let t="";for(const n in e)t+=`${n}=${e[n]}&`;return t.slice(0,-1)},B={on:(e,t,n,o)=>{if(e.addEventListener)e.addEventListener(t,n,o);else{if(!e.attachEvent)throw new Error("Your browser does not support addEventListener");e.attachEvent(`on${t}`,n)}},off:(e,t,n,o)=>{if(e.removeEventListener)e.removeEventListener(t,n,o);else{if(!e.detachEvent)throw new Error("Your browser does not support removeEventListener");e.detachEvent(`on${t}`,n)}}},U={send:(e,t)=>new Promise(((n,o)=>{"Notification"in window?"granted"===Notification.permission?n(new Notification(e,t)):"denied"!==Notification.permission?Notification.requestPermission().then((r=>{"granted"===r?n(new Notification(e,t)):o(new Error("User denied"))})):o(new Error("notification denied")):o(new Error("This browser does not support desktop notification"))})),confirm:(e,t,n)=>{window.confirm(e)?t&&t():n&&n()}},Z=e=>Object.prototype.toString.call(e).match(/^\[object\s(.*)\]$/)[1],J=(e,t=!1)=>"Number"===Z(e)&&(!t||Number.isFinite(e)),W=e=>"String"===Z(e),q=e=>"Boolean"===Z(e),Y=e=>"Null"===Z(e),_=e=>"Undefined"===Z(e),z=e=>"Symbol"===Z(e),K=e=>"Object"===Z(e),X=e=>"Function"===Z(e),G=e=>"Array"===Z(e),Q=e=>"Date"===Z(e),V=e=>"RegExp"===Z(e),ee=e=>"Error"===Z(e),te=e=>"Map"===Z(e),ne=e=>"WeakMap"===Z(e),oe=e=>"Set"===Z(e),re=e=>"WeakSet"===Z(e),se=e=>"Promise"===Z(e),ie={isNumber:J,isString:W,isBoolean:q,isNull:Y,isUndefined:_,isSymbol:z,isObject:K,isFunction:X,isArray:G,isDate:Q,isRegExp:V,isError:ee,isMap:te,isWeakMap:ne,isSet:oe,isWeakSet:re,isPromise:se},ae={callbacks:{},on:function(e,t){return this.callbacks[e]?this.callbacks[e].push(t):this.callbacks[e]=[t],this.callbacks[e]},emit:function(e,t){this.callbacks[e]&&this.callbacks[e].length>0&&this.callbacks[e].forEach((e=>{e(t)}))},off:function(e){e?delete this.callbacks[e]:this.callbacks={}}},ce={id:100,callbacks:{},subscribe:function(e,t){const n="token_"+this.id++;return this.callbacks[e]?this.callbacks[e][n]=t:this.callbacks[e]={[n]:t},n},publish:function(e,t){this.callbacks[e]&&Object.values(this.callbacks[e]).forEach((e=>{e instanceof Function&&e(t)}))},unscribe:function(e){if(e){if("string"==typeof e)if(e.startsWith("token")){const t=Object.values(this.callbacks).find((t=>(null==t?void 0:t.hasOwnProperty(e))||!1));t&&delete t[e]}else delete this.callbacks[e]}else this.callbacks={}}},le=e=>e<10?"0"+e:""+e,de=e=>("string"==typeof e&&(e=new Date(e)),"number"==typeof e&&(e=new Date(e)),e instanceof Date||(e=new Date),{year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate(),hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds()}),ue=(e,t="yyyy-MM-dd HH:mm:ss")=>{const{year:n,month:o,day:r,hour:s,minute:i,second:a}=de(e);return t.replace(/YYYY|yyyy/g,le(n)).replace(/YY|yy/g,le(n).toString().substr(2,2)).replace(/MM/g,le(o)).replace(/DD|dd/g,le(r)).replace(/HH|hh/g,le(s)).replace(/mm/g,le(i)).replace(/ss/g,le(a))},he=(e,t)=>{const n=e.getTime(),o=t.getTime(),r=Math.abs(n>=o?n-o:o-n);return Math.floor(r/864e5)},me=e=>{const t=Date.parse((new Date).toString()),n=t-(e?Date.parse(new Date(e).toString()):t),o=parseInt(String(n/864e5)),r=parseInt(String(n/36e5)),s=parseInt(String(n/6e4)),i=parseInt(String(n/1e3)),a=parseInt(String(o/30)),c=parseInt(String(a/12));return c?c+"年前":a?a+"个月前":o?o+"天前":r?r+"小时前":s?s+"分钟前":i?i+"秒前":"刚刚"},fe=e=>{if(!f)throw new Error("getCookie is only available in browser");if(!e||!document.cookie)return null;const t=new RegExp(`(^| )${e}=([^;]*)(;|$)`),n=document.cookie.match(t);return n?n[2]:null},ge=(e,t,n=0,o="/",r="")=>{if(!f)throw new Error("setCookie is only available in browser");if(!e||!document.cookie)return;let s=`${e}=${t}`;if(J(n)){const e=new Date;e.setTime(e.getTime()+24*n*3600*1e3),s+=`; expires=${e.toUTCString()}`}o&&(s+=`; path=${o}`),r&&(s+=`; domain=${r}`),document.cookie=s},pe=(e,t="/",n="")=>{if(!f)throw new Error("removeCookie is only available in browser");e&&document.cookie&&ge(e,"",-1,t,n)};class be{constructor(e="local",t=""){if(this.prefix="",this._watcher={},!f)throw new Error("get is only available in browser");this.storage="local"===e?window.localStorage:window.sessionStorage,this.prefix=t}get(e){let t=null;const n=this.prefix+e,o=this.storage.getItem(n);try{if(o){const e=JSON.parse(o);e.expires&&J(e.expires)&&e.expires<(new Date).getTime()&&(this.storage.removeItem(n),t=null),t=e.value}}catch(e){t=o}return t}set(e,t,n=0){if(!e)return;const o=this.prefix+e;if(J(n)&&n>0){const e=new Date;e.setTime(e.getTime()+24*n*3600*1e3),this.storage.setItem(o,JSON.stringify({value:t,expires:e.getTime()}))}else this.storage.setItem(o,JSON.stringify({value:t}))}remove(e){const t=this.prefix+e;this.storage.removeItem(t),this._watcher[t]&&(clearInterval(this._watcher[t]),delete this._watcher[t])}clear(){this.storage.clear(),Object.keys(this._watcher).forEach((e=>{clearInterval(this._watcher[e])})),this._watcher={}}watch(e,t){const n=this.prefix+e;let o=this.get(n),r=o;this._watcher[n]&&clearInterval(this._watcher[n]);const s=setInterval((()=>{r=this.get(e),r!==o&&(t(r,o),o=r)}),100);return this._watcher[n]=s,s}}const we=new be("local"),ve=new be("session"),Fe=()=>`#${Math.floor(16777215*Math.random()).toString(16).padEnd(6,"0")}`,Ae=(e,t)=>{const n=Math.ceil(e),o=Math.floor(t);return Math.floor(Math.random()*(o-n+1))+n},ye=(e=16)=>{let t=Math.random().toString(36).substr(2);return t.length>=e?t.substr(0,e):(t+=ye(e-t.length),t)},Ee=e=>/^[GCDZTSPKXLY1-9]\d{1,4}$/.test(e),De=e=>/^\d{15,17}$/.test(e),Se=e=>/^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/.test(e),xe=e=>/^((255\.){3}(255|254|252|248|240|224|192|128|0))$/.test(e),ke=e=>/^\d+(?:\.\d+){2}$/.test(e),$e=e=>/^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i.test(e),Ce=e=>/^https?:\/\/(.+\/)+.+(\.(gif|jpg|jpeg|png|svg|webp|psd|bmp|tif))$/i.test(e),Oe=e=>/^[1-9]\d{9,29}$/.test(e),Ie=e=>/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z](?:((\d{5}[A-HJK])|([A-HJK][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳])$/.test(e),Pe=e=>/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]$/.test(e),Ne=e=>/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/.test(e),Me=e=>/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(e),Te=e=>/^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/.test(e),Re=e=>/^浙江|上海|北京|天津|重庆|黑龙江|吉林|辽宁|内蒙古|河北|新疆|甘肃|青海|陕西|宁夏|河南|山东|山西|安徽|湖北|湖南|江苏|四川|贵州|云南|广西|西藏|江西|广东|福建|台湾|海南|香港|澳门$/.test(e),Le=e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),je=e=>/^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/.test(e),He=e=>/^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/.test(e),Be=e=>/^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/.test(e),Ue=e=>/^\d+\.\d+$/.test(e+""),Ze=e=>/^\d+$/.test(e),Je=e=>/^[a-zA-Z]+$/.test(e),We=e=>/^[a-zA-Z0-9]+$/.test(e),qe=e=>/<(\w+)[^>]*>(.*?<\/\1>)?/.test(e),Ye=e=>/^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/.test(e),_e=e=>/(^(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$)|(^\[(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))\](?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$)/i.test(e),ze=e=>/^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/.test(e),Ke=e=>/^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i.test(e),Xe=e=>/^\+?[1-9]\d*$/.test(e+""),Ge=e=>/^\-[1-9]\d*$/.test(e+""),Qe=e=>/^(?:0|(?:-?[1-9]\d*))$/.test(e+""),Ve=e=>/^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9])$/.test(e+""),et=(e,t=new WeakMap)=>{if(null===e)return null;if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);if("object"!=typeof e)return e;if(t.has(e))return t.get(e);const n=Array.isArray(e)?[]:{};t.set(e,n);for(const o in e)e.hasOwnProperty(o)&&(n[o]=et(e[o],t));return n},tt=e=>new Promise(((t,n)=>{const o=new Image;o.setAttribute("crossOrigin","anonymous"),o.onload=()=>{t({width:o.width,height:o.height})},o.onerror=e=>{n(e)},o.src=e})),nt=e=>new Promise(((t,n)=>{const o=new FileReader;o.onload=e=>{var o;const r=null===(o=e.target)||void 0===o?void 0:o.result;tt(r).then((e=>{t(e)})).catch((e=>{n(e)}))},o.readAsDataURL(e)})),ot=(e,t)=>{const n=new Image;n.setAttribute("crossOrigin","anonymous"),n.onload=()=>{const e=document.createElement("canvas");e.width=n.width,e.height=n.height;const o=e.getContext("2d");if(o){o.drawImage(n,0,0,n.width,n.height);const r=e.toDataURL("image/png"),s=document.createElement("a"),i=new MouseEvent("click");s.download=(t||"photo")+".png",s.href=r,s.dispatchEvent(i)}},n.src=e+"?t="+(new Date).getTime()},rt=e=>new Promise(((t,n)=>{const o=new FileReader;o.onload=e=>{var n;const o=(null===(n=e.target)||void 0===n?void 0:n.result)||"";t(o)},o.onerror=e=>n(e),o.readAsDataURL(e)})),st=(e,t)=>{var n;const o=e.split(","),r=(null===(n=o[0].match(/:(.*?);/))||void 0===n?void 0:n[1])||"",s=atob(o[1]);let i=s.length;const a=new Uint8Array(i);for(;i--;)a[i]=s.charCodeAt(i);return new File([a],t,{type:r})},it=e=>{var t;const n=e.split(","),o=null===(t=n[0].match(/:(.*?);/))||void 0===t?void 0:t[1],r=atob(n[1]);let s=r.length;const i=new Uint8Array(s);for(;s--;)i[s]=r.charCodeAt(s);return new Blob([i],{type:o})},at=e=>{const t=e.lastIndexOf(".");return e.substring(t+1)},ct=(e,t=2)=>{let n=0;for(;e>=1024;)e/=1024,n++;return e.toFixed(t)+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][n]},lt=(e,t=2)=>J(e)?Math.round((e+Number.EPSILON)*Math.pow(10,t))/Math.pow(10,t):e,dt=e=>{if(J(e)){const t=e.toString().split("."),n=t[0],o=t[1],r=/(?=(?!\b)(\d{3})+$)/g;return n.replace(r,",")+(o?"."+o:"")}return e},ut=(e,t=2)=>J(e)?(100*e).toFixed(t)+"%":e,ht=e=>J(parseFloat(e))&&e.indexOf("%")>-1?parseFloat(e)/100:e,mt=e=>{const t=e.toString(),n=/^(\d+)(e)([\-]?\d+)$/.exec(t);if(null==n)return e;{const e=Math.abs(Number(n[3])),t=new Array(e).join("0"),o=n[1]+t;return Number(o)}},ft=e=>Object.keys(e),gt=e=>0===Object.keys(e).length,pt=e=>e.charAt(0).toUpperCase()+e.slice(1),bt=e=>e.replace(/[-_\s]+(.)?/g,((e,t)=>t?t.toUpperCase():"")),wt=(e,t,n)=>e.slice(0,t)+n+e.slice(t),vt=e=>{const t=[];for(let n=0;n<e.length;n++)t[n]=("00"+e.charCodeAt(n).toString(16)).slice(-4);return"\\u"+t.join("\\u")},Ft=e=>unescape(e.replace(/\\/g,"%")),At=(e,t="default")=>{switch(t){case"all":return e.replace(/\s+/g,"");case"before":return e.replace(/(^\s*)/g,"");case"after":return e.replace(/(\s*$)/g,"");default:return e.replace(/(^\s*)|(\s*$)/g,"")}},yt=e=>f()?btoa(unescape(encodeURIComponent(e))):Buffer.from(e,"utf-8").toString("base64"),Et=e=>f()?decodeURIComponent(escape(atob(e))):Buffer.from(e,"base64").toString("utf-8"),Dt=e=>0===e.length;class St{constructor(e){this.options=e,this.init(),this.registerEvent()}init(){const{url:e}=this.options;if(!e)throw new Error("url is required");this.ws=new WebSocket(e),this.registerEvent()}registerEvent(){var e,t,n,o;const{onOpen:r,onMessage:s,onError:i,onClose:a,heartbeatable:c,reconnectable:l}=this.options;null===(e=this.ws)||void 0===e||e.addEventListener("open",(e=>{r&&r(e),c&&this.heartbeat()})),null===(t=this.ws)||void 0===t||t.addEventListener("message",(e=>{s&&s(e)})),null===(n=this.ws)||void 0===n||n.addEventListener("error",(e=>{i&&i(e)})),null===(o=this.ws)||void 0===o||o.addEventListener("close",(e=>{a&&a(e),l&&this.reconnect()}))}heartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer);const e=this.options.heartbeatsInterval||1e3,t=this.options.heartbeatsMsg||"heartbeat";this.heartbeatTimer=setInterval((()=>{this.send(t)}),e)}reconnect(){this.reconnectTimer&&clearInterval(this.reconnectTimer);const e=this.options.reconnectInterval||1e3,t=this.options.reconnectTimes||10;let n=0;this.reconnectTimer=setInterval((()=>{n>=t?this.destroy():(this.init(),n++)}),e)}send(e){this.ws&&this.ws.send(e)}close(){this.ws&&this.ws.close()}destroy(){this.close(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer&&clearInterval(this.reconnectTimer)}}export{F as $,A as $$,B as Event,ae as EventBus,U as Notice,ce as Pubsub,St as Socket,be as Storage,k as addClass,Et as base642Str,it as base64ToBlob,st as base64ToFile,bt as camelize,pt as capitalize,c as copyText,ie as datatypes,et as deepClone,he as diffDays,ot as downloadImage,N as elShow,r as exitFullScreen,rt as fileToBase64,ue as formatDate,ct as formatFileSize,me as formatPassTime,s as fullScreen,O as getAttr,P as getAttrKV,I as getAttrList,e as getAuthor,n as getBrowserInfo,h as getBrowserLanguage,D as getClass,fe as getCookie,at as getFileSuffix,nt as getImageSizeByFile,tt as getImageSizeByUrl,g as getOS,ft as getObjKeys,R as getQueryString,Fe as getRandomColor,Ae as getRandomInt,ye as getRandomString,a as getScrollPosition,u as getSelectedText,E as getStyle,L as getUrlParams,i as getWindowSize,S as hasClass,wt as insertStr,v as isAndroid,w as isApple,G as isArray,Oe as isBankCard,q as isBoolean,f as isBrowser,Ne as isCarNumber,Be as isChinese,Re as isChineseProvince,Q as isDate,Te as isDateString,Ue as isDecimal,Le as isEmail,Dt as isEmptyArray,gt as isEmptyObject,ee as isError,Ve as isFloat,o as isFullScreen,X as isFunction,qe as isHtml,De as isIMEI,He as isIdCard,Ce as isImageUrl,Qe as isInteger,Ye as isIpv4,_e as isIpv6,Ke as isMacAddress,te as isMap,b as isMobile,Me as isMobileNumer,Ge as isNegativeInteger,Ie as isNewEnergyCar,Y as isNull,J as isNumber,We as isNumberOrLetter,K as isObject,Je as isOnlyLetter,Ze as isOnlyNumber,Pe as isPetrolCar,Xe as isPositiveInteger,ze as isPostalCode,se as isPromise,Ee as isRailwayNumber,V as isRegExp,oe as isSet,M as isShow,W as isString,xe as isSubnetMask,z as isSymbol,je as isTelPhone,Se as isURL,_ as isUndefined,ke as isVersion,$e as isVideoUrl,ne as isWeakMap,re as isWeakSet,p as isWeiXin,we as local,ut as numberToPercent,H as obj2Url,de as parseDate,ht as percentToNumber,m as printPage,l as readClipboard,C as removeAttr,x as removeClass,pe as removeCookie,T as removeTag,mt as scientificToNumber,d as selectText,ve as session,$ as setAttr,ge as setCookie,y as setStyle,yt as str2Base64,vt as str2Unicode,lt as toFixed,dt as toThousands,At as trim,Ft as unicode2Str,j as url2Obj};
