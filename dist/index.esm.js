var e="0.1.2",t="taojian";const n=()=>t,o=()=>e;function r(e,t,n,o){return new(n||(n=Promise))((function(r,s){function i(e){try{c(o.next(e))}catch(e){s(e)}}function a(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((o=o.apply(e,t||[])).next())}))}const s=()=>{var e,t,n,o,r,s;const{userAgent:i,onLine:a,platform:c,cookieEnabled:l,language:d}=navigator,u=i.toLowerCase(),h=0<=u.indexOf("msie")?{type:"IE",version:Number(null===(e=u.match(/msie ([\d]+)/))||void 0===e?void 0:e[1])}:u.match(/trident\/.+?rv:(([\d.]+))/)?{type:"IE",version:11}:0<=u.indexOf("edge")?{type:"Edge",version:Number(null===(t=u.match(/edge\/([\d]+)/))||void 0===t?void 0:t[1])}:0<=u.indexOf("firefox")?{type:"Firefox",version:Number(null===(n=u.match(/firefox\/([\d]+)/))||void 0===n?void 0:n[1])}:0<=u.indexOf("chrome")?{type:"Chrome",version:Number(null===(o=u.match(/chrome\/([\d]+)/))||void 0===o?void 0:o[1])}:0<=u.indexOf("opera")?{type:"Opera",version:Number(null===(r=u.match(/opera.([\d]+)/))||void 0===r?void 0:r[1])}:0<=u.indexOf("safari")?{type:"Safari",version:Number(null===(s=u.match(/version\/([\d]+)/))||void 0===s?void 0:s[1])}:{type:u,version:-1};return Object.assign(Object.assign({},h),{onLine:a,platform:c,cookieEnabled:l,language:d})},i=()=>document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement,a=()=>{document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},c=e=>{e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},l=(e=!0)=>({width:e?window.innerWidth:window.document.documentElement.clientWidth,height:e?window.innerHeight:window.document.documentElement.clientHeight}),d=()=>{const e=void 0!==window.pageXOffset,t="CSS1Compat"===(document.compatMode||"");return{x:e?window.pageXOffset:t?document.documentElement.scrollLeft:document.body.scrollLeft,y:e?window.pageYOffset:t?document.documentElement.scrollTop:document.body.scrollTop}},u=(e,t)=>{navigator.clipboard.writeText(e).then((()=>t&&t())).catch((()=>{const t=document.createElement("textarea");t.value=e,t.style.position="position",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy")&&document.execCommand("copy"),document.body.removeChild(t)}))},h=e=>r(void 0,void 0,void 0,(function*(){navigator.clipboard.readText().then((t=>e&&e(t))).catch((e=>console.log(e)))})),m=e=>{const t=document.createRange();t.selectNodeContents(e);const n=window.getSelection();null==n||n.removeAllRanges(),null==n||n.addRange(t)},f=()=>{var e;return(null===(e=window.getSelection())||void 0===e?void 0:e.toString())||""},g=()=>navigator.language,p=()=>{document.execCommand?document.execCommand("print"):window.print()},b=()=>"object"==typeof window&&"object"==typeof document,w=()=>{const e=navigator.userAgent,t=/(?:Windows Phone)/.test(e),n=/(?:SymbianOS)/.test(e),o=/(?:Android)/.test(e),r=/(?:Firefox)/.test(e),s=/(?:Chrome|CriOS)/.test(e),i=/(?:iPad|PlayBook)/.test(e)||o&&!/(?:Mobile)/.test(e)||r&&/(?:Tablet)/.test(e),a=/(?:iPhone)/.test(e)&&!i;return t?"Windows Phone":n?"Symbian":i?"Tablet":a?"Ios":o?"Android":r?"FireFox":s?"Chrome":!a&&!o&&!n?"Pc":"Unkonwn"},v=()=>{const e=navigator.userAgent.toLowerCase();return/Micromessenger/i.test(e)},F=()=>/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i.test(navigator.userAgent),A=()=>/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent),y=()=>/(Android)/i.test(navigator.userAgent),E=e=>document.querySelector(e),D=e=>document.querySelectorAll(e),x=(e,t)=>{for(const n in t)e.style[n]=t[n]},S=(e,t)=>getComputedStyle(e)[t],k=e=>e.className,$=(e,t)=>e.classList.contains(t),C=(e,t)=>e.classList.remove(t),O=(e,t)=>{$(e,t)||e.classList.add(t)},I=(e,t)=>{for(const n in t)e.setAttribute(n,t[n])},P=(e,t)=>e.removeAttribute(t),N=(e,t)=>e.getAttribute(t),T=e=>Object.keys(e.attributes).map((t=>e.attributes[t].name)),M=e=>Object.keys(e.attributes).map((t=>({key:e.attributes[t].name,value:e.attributes[t].value}))),R=(e,t)=>{new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&t&&t()}))})).observe(e)},L=e=>{const t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight;return t.top<=n},H=e=>e.replace(/<[^>]+>/g,""),j=(e,t=window.location.href)=>{const n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),o=t.split("?")[1].match(n);return null!=o?decodeURIComponent(o[2]):""},B=(e=window.location.href)=>{const t={};if(e.indexOf("?")>-1&&e.indexOf("=")>-1){const n=e.split("?")[1].split("&");for(let e=0;e<n.length;e++)t[n[e].split("=")[0]]=decodeURIComponent(n[e].split("=")[1])}return t},U=(e=window.location.href)=>{const t={};if(e.indexOf("?")>-1&&e.indexOf("=")>-1){const n=e.split("?")[1].split("&");for(let e=0;e<n.length;e++){const o=n[e].split("=");t[o[0]]=decodeURIComponent(o[1])}}return t},Z=e=>{let t="";for(const n in e)t+=`${n}=${e[n]}&`;return t.slice(0,-1)},J={on:(e,t,n,o)=>{if(e.addEventListener)e.addEventListener(t,n,o);else{if(!e.attachEvent)throw new Error("Your browser does not support addEventListener");e.attachEvent(`on${t}`,n)}},off:(e,t,n,o)=>{if(e.removeEventListener)e.removeEventListener(t,n,o);else{if(!e.detachEvent)throw new Error("Your browser does not support removeEventListener");e.detachEvent(`on${t}`,n)}}},q={send:(e,t)=>new Promise(((n,o)=>{"Notification"in window?"granted"===Notification.permission?n(new Notification(e,t)):"denied"!==Notification.permission?Notification.requestPermission().then((r=>{"granted"===r?n(new Notification(e,t)):o(new Error("User denied"))})):o(new Error("notification denied")):o(new Error("This browser does not support desktop notification"))})),confirm:(e,t,n)=>{window.confirm(e)?t&&t():n&&n()}},Y=e=>Object.prototype.toString.call(e).match(/^\[object\s(.*)\]$/)[1],_=(e,t=!1)=>"Number"===Y(e)&&(!t||Number.isFinite(e)),W=e=>"String"===Y(e),z=e=>"Boolean"===Y(e),K=e=>"Null"===Y(e),X=e=>"Undefined"===Y(e),G=e=>"Symbol"===Y(e),Q=e=>"Object"===Y(e),V=e=>"Function"===Y(e),ee=e=>"Array"===Y(e),te=e=>"Date"===Y(e),ne=e=>"RegExp"===Y(e),oe=e=>"Error"===Y(e),re=e=>"Map"===Y(e),se=e=>"WeakMap"===Y(e),ie=e=>"Set"===Y(e),ae=e=>"WeakSet"===Y(e),ce=e=>"Promise"===Y(e),le={callbacks:{},on:function(e,t){return this.callbacks[e]?this.callbacks[e].push(t):this.callbacks[e]=[t],this.callbacks[e]},emit:function(e,t){this.callbacks[e]&&this.callbacks[e].length>0&&this.callbacks[e].forEach((e=>{e(t)}))},off:function(e){e?delete this.callbacks[e]:this.callbacks={}}},de={id:100,callbacks:{},subscribe:function(e,t){const n="token_"+this.id++;return this.callbacks[e]?this.callbacks[e][n]=t:this.callbacks[e]={[n]:t},n},publish:function(e,t){this.callbacks[e]&&Object.values(this.callbacks[e]).forEach((e=>{e instanceof Function&&e(t)}))},unsubscribe:function(e){if(e){if("string"==typeof e)if(e.startsWith("token")){const t=Object.values(this.callbacks).find((t=>(null==t?void 0:t.hasOwnProperty(e))||!1));t&&delete t[e]}else delete this.callbacks[e]}else this.callbacks={}}},ue=e=>e<10?"0"+e:""+e,he=e=>("string"==typeof e&&(e=new Date(e)),"number"==typeof e&&(e=new Date(e)),e instanceof Date||(e=new Date),{year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate(),hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds()}),me=(e,t="yyyy-MM-dd HH:mm:ss")=>{const{year:n,month:o,day:r,hour:s,minute:i,second:a}=he(e);return t.replace(/YYYY|yyyy/g,ue(n)).replace(/YY|yy/g,ue(n).toString().substr(2,2)).replace(/MM/g,ue(o)).replace(/DD|dd/g,ue(r)).replace(/HH|hh/g,ue(s)).replace(/mm/g,ue(i)).replace(/ss/g,ue(a))},fe=(e,t)=>{const n=e.getTime(),o=t.getTime(),r=Math.abs(n>=o?n-o:o-n);return Math.floor(r/864e5)},ge=e=>{const t=Date.parse((new Date).toString()),n=t-(e?Date.parse(new Date(e).toString()):t),o=parseInt(String(n/864e5)),r=parseInt(String(n/36e5)),s=parseInt(String(n/6e4)),i=parseInt(String(n/1e3)),a=parseInt(String(o/30)),c=parseInt(String(a/12));return c?c+"年前":a?a+"个月前":o?o+"天前":r?r+"小时前":s?s+"分钟前":i?i+"秒前":"刚刚"},pe=e=>{if(!b)throw new Error("getCookie is only available in browser");if(!e||!document.cookie)return null;const t=new RegExp(`(^| )${e}=([^;]*)(;|$)`),n=document.cookie.match(t);return n?n[2]:null},be=(e,t,n=0,o="/",r="")=>{if(!b)throw new Error("setCookie is only available in browser");if(!e||!document.cookie)return;let s=`${e}=${t}`;if(_(n)){const e=new Date;e.setTime(e.getTime()+24*n*3600*1e3),s+=`; expires=${e.toUTCString()}`}o&&(s+=`; path=${o}`),r&&(s+=`; domain=${r}`),document.cookie=s},we=(e,t="/",n="")=>{if(!b)throw new Error("removeCookie is only available in browser");e&&document.cookie&&be(e,"",-1,t,n)};class ve{constructor(e="local",t=""){if(this.prefix="",this._watcher={},!b)throw new Error("get is only available in browser");this.storage="local"===e?window.localStorage:window.sessionStorage,this.prefix=t}get(e){let t=null;const n=this.prefix+e,o=this.storage.getItem(n);try{if(o){const e=JSON.parse(o);e.expires&&_(e.expires)&&e.expires<(new Date).getTime()&&(this.storage.removeItem(n),t=null),t=e.value}}catch(e){t=o}return t}set(e,t,n=0){if(!e)return;const o=this.prefix+e;if(_(n)&&n>0){const e=new Date;e.setTime(e.getTime()+24*n*3600*1e3),this.storage.setItem(o,JSON.stringify({value:t,expires:e.getTime()}))}else this.storage.setItem(o,JSON.stringify({value:t}))}remove(e){const t=this.prefix+e;this.storage.removeItem(t),this._watcher[t]&&(clearInterval(this._watcher[t]),delete this._watcher[t])}clear(){this.storage.clear(),Object.keys(this._watcher).forEach((e=>{clearInterval(this._watcher[e])})),this._watcher={}}watch(e,t){const n=this.prefix+e;let o=this.get(n),r=o;this._watcher[n]&&clearInterval(this._watcher[n]);const s=setInterval((()=>{r=this.get(e),r!==o&&(t(r,o),o=r)}),100);return this._watcher[n]=s,s}}const Fe=new ve("local"),Ae=new ve("session"),ye=()=>`#${Math.floor(16777215*Math.random()).toString(16).padEnd(6,"0")}`,Ee=(e,t)=>{const n=Math.ceil(e),o=Math.floor(t);return Math.floor(Math.random()*(o-n+1))+n},De=(e=16)=>{let t=Math.random().toString(36).substr(2);return t.length>=e?t.substr(0,e):(t+=De(e-t.length),t)},xe=e=>/^[GCDZTSPKXLY1-9]\d{1,4}$/.test(e),Se=e=>/^\d{15,17}$/.test(e),ke=e=>/^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/.test(e),$e=e=>/^((255\.){3}(255|254|252|248|240|224|192|128|0))$/.test(e),Ce=e=>/^\d+(?:\.\d+){2}$/.test(e),Oe=e=>/^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i.test(e),Ie=e=>/^https?:\/\/(.+\/)+.+(\.(gif|jpg|jpeg|png|svg|webp|psd|bmp|tif))$/i.test(e),Pe=e=>/^[1-9]\d{9,29}$/.test(e),Ne=e=>/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z](?:((\d{5}[A-HJK])|([A-HJK][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳])$/.test(e),Te=e=>/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]$/.test(e),Me=e=>/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/.test(e),Re=e=>/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(e),Le=e=>/^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/.test(e),He=e=>/^浙江|上海|北京|天津|重庆|黑龙江|吉林|辽宁|内蒙古|河北|新疆|甘肃|青海|陕西|宁夏|河南|山东|山西|安徽|湖北|湖南|江苏|四川|贵州|云南|广西|西藏|江西|广东|福建|台湾|海南|香港|澳门$/.test(e),je=e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),Be=e=>/^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/.test(e),Ue=e=>/^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/.test(e),Ze=e=>/^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/.test(e),Je=e=>/^\d+\.\d+$/.test(e+""),qe=e=>/^\d+$/.test(e),Ye=e=>/^[a-zA-Z]+$/.test(e),_e=e=>/^[a-zA-Z0-9]+$/.test(e),We=e=>/<(\w+)[^>]*>(.*?<\/\1>)?/.test(e),ze=e=>/^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/.test(e),Ke=e=>/(^(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$)|(^\[(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))\](?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$)/i.test(e),Xe=e=>/^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/.test(e),Ge=e=>/^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i.test(e),Qe=e=>/^\+?[1-9]\d*$/.test(e+""),Ve=e=>/^\-[1-9]\d*$/.test(e+""),et=e=>/^(?:0|(?:-?[1-9]\d*))$/.test(e+""),tt=e=>/^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9])$/.test(e+""),nt=(e,t=new WeakMap)=>{if(null===e)return null;if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);if("object"!=typeof e)return e;if(t.has(e))return t.get(e);const n=Array.isArray(e)?[]:{};t.set(e,n);for(const o in e)e.hasOwnProperty(o)&&(n[o]=nt(e[o],t));return n},ot=e=>new Promise(((t,n)=>{const o=new Image;o.setAttribute("crossOrigin","anonymous"),o.onload=()=>{t({width:o.width,height:o.height})},o.onerror=e=>{n(e)},o.src=e})),rt=e=>new Promise(((t,n)=>{const o=new FileReader;o.onload=e=>{var o;const r=null===(o=e.target)||void 0===o?void 0:o.result;ot(r).then((e=>{t(e)})).catch((e=>{n(e)}))},o.readAsDataURL(e)})),st=(e,t)=>{const n=new Image;n.setAttribute("crossOrigin","anonymous"),n.onload=()=>{const e=document.createElement("canvas");e.width=n.width,e.height=n.height;const o=e.getContext("2d");if(o){o.drawImage(n,0,0,n.width,n.height);const r=e.toDataURL("image/png"),s=document.createElement("a"),i=new MouseEvent("click");s.download=(t||"photo")+".png",s.href=r,s.dispatchEvent(i)}},n.src=e+"?t="+(new Date).getTime()},it=e=>new Promise(((t,n)=>{const o=new FileReader;o.onload=e=>{var n;const o=(null===(n=e.target)||void 0===n?void 0:n.result)||"";t(o)},o.onerror=e=>n(e),o.readAsDataURL(e)})),at=(e,t)=>{var n;const o=e.split(","),r=(null===(n=o[0].match(/:(.*?);/))||void 0===n?void 0:n[1])||"",s=atob(o[1]);let i=s.length;const a=new Uint8Array(i);for(;i--;)a[i]=s.charCodeAt(i);return new File([a],t,{type:r})},ct=e=>{var t;const n=e.split(","),o=null===(t=n[0].match(/:(.*?);/))||void 0===t?void 0:t[1],r=atob(n[1]);let s=r.length;const i=new Uint8Array(s);for(;s--;)i[s]=r.charCodeAt(s);return new Blob([i],{type:o})},lt=e=>{const t=e.lastIndexOf(".");return e.substring(t+1)},dt=(e,t=2)=>{let n=0;for(;e>=1024;)e/=1024,n++;return e.toFixed(t)+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][n]},ut=(e,t=2)=>_(e)?Math.round((e+Number.EPSILON)*Math.pow(10,t))/Math.pow(10,t):e,ht=e=>{if(_(e)){const t=e.toString().split("."),n=t[0],o=t[1],r=/(?=(?!\b)(\d{3})+$)/g;return n.replace(r,",")+(o?"."+o:"")}return e},mt=(e,t=2)=>_(e)?(100*e).toFixed(t)+"%":e,ft=e=>_(parseFloat(e))&&e.indexOf("%")>-1?parseFloat(e)/100:e,gt=e=>{const t=e.toString(),n=/^(\d+)(e)([\-]?\d+)$/.exec(t);if(null==n)return e;{const e=Math.abs(Number(n[3])),t=new Array(e).join("0"),o=n[1]+t;return Number(o)}},pt=e=>Object.keys(e),bt=e=>0===Object.keys(e).length,wt=e=>e.charAt(0).toUpperCase()+e.slice(1),vt=e=>e.replace(/[-_\s]+(.)?/g,((e,t)=>t?t.toUpperCase():"")),Ft=(e,t,n)=>e.slice(0,t)+n+e.slice(t),At=e=>{const t=[];for(let n=0;n<e.length;n++)t[n]=("00"+e.charCodeAt(n).toString(16)).slice(-4);return"\\u"+t.join("\\u")},yt=e=>unescape(e.replace(/\\/g,"%")),Et=(e,t="default")=>{switch(t){case"all":return e.replace(/\s+/g,"");case"before":return e.replace(/(^\s*)/g,"");case"after":return e.replace(/(\s*$)/g,"");default:return e.replace(/(^\s*)|(\s*$)/g,"")}},Dt=e=>b()?btoa(unescape(encodeURIComponent(e))):Buffer.from(e,"utf-8").toString("base64"),xt=e=>b()?decodeURIComponent(escape(atob(e))):Buffer.from(e,"base64").toString("utf-8"),St=e=>0===e.length;class kt{constructor(e){this.options=e,this.init(),this.registerEvent()}init(){const{url:e}=this.options;if(!e)throw new Error("url is required");this.ws=new WebSocket(e)}registerEvent(){var e,t,n,o;const{onOpen:r,onMessage:s,onError:i,onClose:a,heartbeatable:c,reconnectable:l}=this.options;null===(e=this.ws)||void 0===e||e.addEventListener("open",(e=>{this.reconnectTimer&&clearInterval(this.reconnectTimer),r&&r(e),c&&this.heartbeat()})),null===(t=this.ws)||void 0===t||t.addEventListener("message",(e=>{s&&s(e)})),null===(n=this.ws)||void 0===n||n.addEventListener("error",(e=>{i&&i(e)})),null===(o=this.ws)||void 0===o||o.addEventListener("close",(e=>{a&&a(e),l&&this.reconnect()}))}heartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer);const e=this.options.heartbeatsInterval||1e3,t=this.options.heartbeatsMsg||"heartbeat";this.heartbeatTimer=setInterval((()=>{this.send(t)}),e)}reconnect(){this.reconnectTimer&&clearInterval(this.reconnectTimer);const e=this.options.reconnectInterval||1e3,t=this.options.reconnectTimes||10;let n=0;this.reconnectTimer=setInterval((()=>{n>=t?this.destroy():(this.init(),n++)}),e)}send(e){this.ws&&this.ws.send(e)}close(){this.ws&&this.ws.close()}destroy(){this.close(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer&&clearInterval(this.reconnectTimer)}}export{E as $,D as $$,J as Event,le as EventBus,q as Notice,de as Pubsub,kt as Socket,ve as Storage,O as addClass,xt as base642Str,ct as base64ToBlob,at as base64ToFile,vt as camelize,wt as capitalize,u as copyText,nt as deepClone,fe as diffDays,st as downloadImage,R as elShow,a as exitFullScreen,it as fileToBase64,me as formatDate,dt as formatFileSize,ge as formatPassTime,c as fullScreen,N as getAttr,M as getAttrKV,T as getAttrList,n as getAuthor,s as getBrowserInfo,g as getBrowserLanguage,k as getClass,pe as getCookie,lt as getFileSuffix,rt as getImageSizeByFile,ot as getImageSizeByUrl,w as getOS,pt as getObjKeys,j as getQueryString,ye as getRandomColor,Ee as getRandomInt,De as getRandomString,d as getScrollPosition,f as getSelectedText,S as getStyle,B as getUrlParams,o as getVersion,l as getWindowSize,$ as hasClass,Ft as insertStr,y as isAndroid,A as isApple,ee as isArray,Pe as isBankCard,z as isBoolean,b as isBrowser,Me as isCarNumber,Ze as isChinese,He as isChineseProvince,te as isDate,Le as isDateString,Je as isDecimal,je as isEmail,St as isEmptyArray,bt as isEmptyObject,oe as isError,tt as isFloat,i as isFullScreen,V as isFunction,We as isHtml,Se as isIMEI,Ue as isIdCard,Ie as isImageUrl,et as isInteger,ze as isIpv4,Ke as isIpv6,Ge as isMacAddress,re as isMap,F as isMobile,Re as isMobileNumer,Ve as isNegativeInteger,Ne as isNewEnergyCar,K as isNull,_ as isNumber,_e as isNumberOrLetter,Q as isObject,Ye as isOnlyLetter,qe as isOnlyNumber,Te as isPetrolCar,Qe as isPositiveInteger,Xe as isPostalCode,ce as isPromise,xe as isRailwayNumber,ne as isRegExp,ie as isSet,L as isShow,W as isString,$e as isSubnetMask,G as isSymbol,Be as isTelPhone,ke as isURL,X as isUndefined,Ce as isVersion,Oe as isVideoUrl,se as isWeakMap,ae as isWeakSet,v as isWeiXin,Fe as local,mt as numberToPercent,Z as obj2Url,he as parseDate,ft as percentToNumber,p as printPage,h as readClipboard,P as removeAttr,C as removeClass,we as removeCookie,H as removeTag,gt as scientificToNumber,m as selectText,Ae as session,I as setAttr,be as setCookie,x as setStyle,Dt as str2Base64,At as str2Unicode,ut as toFixed,ht as toThousands,Et as trim,yt as unicode2Str,U as url2Obj};
