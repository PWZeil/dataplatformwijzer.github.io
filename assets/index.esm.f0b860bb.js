var E,J=new Uint8Array(16);function O(){if(!E&&(E=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!E))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return E(J)}var P=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function G(f){return typeof f=="string"&&P.test(f)}var u=[];for(var k=0;k<256;++k)u.push((k+256).toString(16).substr(1));function N(f){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=(u[f[v+0]]+u[f[v+1]]+u[f[v+2]]+u[f[v+3]]+"-"+u[f[v+4]]+u[f[v+5]]+"-"+u[f[v+6]]+u[f[v+7]]+"-"+u[f[v+8]]+u[f[v+9]]+"-"+u[f[v+10]]+u[f[v+11]]+u[f[v+12]]+u[f[v+13]]+u[f[v+14]]+u[f[v+15]]).toLowerCase();if(!G(r))throw TypeError("Stringified UUID is invalid");return r}var $,D,L=0,V=0;function Q(f,v,r){var n=v&&r||0,e=v||new Array(16);f=f||{};var a=f.node||$,t=f.clockseq!==void 0?f.clockseq:D;if(a==null||t==null){var c=f.random||(f.rng||O)();a==null&&(a=$=[c[0]|1,c[1],c[2],c[3],c[4],c[5]]),t==null&&(t=D=(c[6]<<8|c[7])&16383)}var o=f.msecs!==void 0?f.msecs:Date.now(),s=f.nsecs!==void 0?f.nsecs:V+1,m=o-L+(s-V)/1e4;if(m<0&&f.clockseq===void 0&&(t=t+1&16383),(m<0||o>L)&&f.nsecs===void 0&&(s=0),s>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");L=o,V=s,D=t,o+=122192928e5;var A=((o&268435455)*1e4+s)%4294967296;e[n++]=A>>>24&255,e[n++]=A>>>16&255,e[n++]=A>>>8&255,e[n++]=A&255;var p=o/4294967296*1e4&268435455;e[n++]=p>>>8&255,e[n++]=p&255,e[n++]=p>>>24&15|16,e[n++]=p>>>16&255,e[n++]=t>>>8|128,e[n++]=t&255;for(var w=0;w<6;++w)e[n+w]=a[w];return v||N(e)}function Y(f){if(!G(f))throw TypeError("Invalid UUID");var v,r=new Uint8Array(16);return r[0]=(v=parseInt(f.slice(0,8),16))>>>24,r[1]=v>>>16&255,r[2]=v>>>8&255,r[3]=v&255,r[4]=(v=parseInt(f.slice(9,13),16))>>>8,r[5]=v&255,r[6]=(v=parseInt(f.slice(14,18),16))>>>8,r[7]=v&255,r[8]=(v=parseInt(f.slice(19,23),16))>>>8,r[9]=v&255,r[10]=(v=parseInt(f.slice(24,36),16))/1099511627776&255,r[11]=v/4294967296&255,r[12]=v>>>24&255,r[13]=v>>>16&255,r[14]=v>>>8&255,r[15]=v&255,r}function Z(f){f=unescape(encodeURIComponent(f));for(var v=[],r=0;r<f.length;++r)v.push(f.charCodeAt(r));return v}var z="6ba7b810-9dad-11d1-80b4-00c04fd430c8",j="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function K(f,v,r){function n(e,a,t,c){if(typeof e=="string"&&(e=Z(e)),typeof a=="string"&&(a=Y(a)),a.length!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var o=new Uint8Array(16+e.length);if(o.set(a),o.set(e,a.length),o=r(o),o[6]=o[6]&15|v,o[8]=o[8]&63|128,t){c=c||0;for(var s=0;s<16;++s)t[c+s]=o[s];return t}return N(o)}try{n.name=f}catch{}return n.DNS=z,n.URL=j,n}function W(f){if(typeof f=="string"){var v=unescape(encodeURIComponent(f));f=new Uint8Array(v.length);for(var r=0;r<v.length;++r)f[r]=v.charCodeAt(r)}return b(B(_(f),f.length*8))}function b(f){for(var v=[],r=f.length*32,n="0123456789abcdef",e=0;e<r;e+=8){var a=f[e>>5]>>>e%32&255,t=parseInt(n.charAt(a>>>4&15)+n.charAt(a&15),16);v.push(t)}return v}function X(f){return(f+64>>>9<<4)+14+1}function B(f,v){f[v>>5]|=128<<v%32,f[X(v)-1]=v;for(var r=1732584193,n=-271733879,e=-1732584194,a=271733878,t=0;t<f.length;t+=16){var c=r,o=n,s=e,m=a;r=d(r,n,e,a,f[t],7,-680876936),a=d(a,r,n,e,f[t+1],12,-389564586),e=d(e,a,r,n,f[t+2],17,606105819),n=d(n,e,a,r,f[t+3],22,-1044525330),r=d(r,n,e,a,f[t+4],7,-176418897),a=d(a,r,n,e,f[t+5],12,1200080426),e=d(e,a,r,n,f[t+6],17,-1473231341),n=d(n,e,a,r,f[t+7],22,-45705983),r=d(r,n,e,a,f[t+8],7,1770035416),a=d(a,r,n,e,f[t+9],12,-1958414417),e=d(e,a,r,n,f[t+10],17,-42063),n=d(n,e,a,r,f[t+11],22,-1990404162),r=d(r,n,e,a,f[t+12],7,1804603682),a=d(a,r,n,e,f[t+13],12,-40341101),e=d(e,a,r,n,f[t+14],17,-1502002290),n=d(n,e,a,r,f[t+15],22,1236535329),r=l(r,n,e,a,f[t+1],5,-165796510),a=l(a,r,n,e,f[t+6],9,-1069501632),e=l(e,a,r,n,f[t+11],14,643717713),n=l(n,e,a,r,f[t],20,-373897302),r=l(r,n,e,a,f[t+5],5,-701558691),a=l(a,r,n,e,f[t+10],9,38016083),e=l(e,a,r,n,f[t+15],14,-660478335),n=l(n,e,a,r,f[t+4],20,-405537848),r=l(r,n,e,a,f[t+9],5,568446438),a=l(a,r,n,e,f[t+14],9,-1019803690),e=l(e,a,r,n,f[t+3],14,-187363961),n=l(n,e,a,r,f[t+8],20,1163531501),r=l(r,n,e,a,f[t+13],5,-1444681467),a=l(a,r,n,e,f[t+2],9,-51403784),e=l(e,a,r,n,f[t+7],14,1735328473),n=l(n,e,a,r,f[t+12],20,-1926607734),r=h(r,n,e,a,f[t+5],4,-378558),a=h(a,r,n,e,f[t+8],11,-2022574463),e=h(e,a,r,n,f[t+11],16,1839030562),n=h(n,e,a,r,f[t+14],23,-35309556),r=h(r,n,e,a,f[t+1],4,-1530992060),a=h(a,r,n,e,f[t+4],11,1272893353),e=h(e,a,r,n,f[t+7],16,-155497632),n=h(n,e,a,r,f[t+10],23,-1094730640),r=h(r,n,e,a,f[t+13],4,681279174),a=h(a,r,n,e,f[t],11,-358537222),e=h(e,a,r,n,f[t+3],16,-722521979),n=h(n,e,a,r,f[t+6],23,76029189),r=h(r,n,e,a,f[t+9],4,-640364487),a=h(a,r,n,e,f[t+12],11,-421815835),e=h(e,a,r,n,f[t+15],16,530742520),n=h(n,e,a,r,f[t+2],23,-995338651),r=g(r,n,e,a,f[t],6,-198630844),a=g(a,r,n,e,f[t+7],10,1126891415),e=g(e,a,r,n,f[t+14],15,-1416354905),n=g(n,e,a,r,f[t+5],21,-57434055),r=g(r,n,e,a,f[t+12],6,1700485571),a=g(a,r,n,e,f[t+3],10,-1894986606),e=g(e,a,r,n,f[t+10],15,-1051523),n=g(n,e,a,r,f[t+1],21,-2054922799),r=g(r,n,e,a,f[t+8],6,1873313359),a=g(a,r,n,e,f[t+15],10,-30611744),e=g(e,a,r,n,f[t+6],15,-1560198380),n=g(n,e,a,r,f[t+13],21,1309151649),r=g(r,n,e,a,f[t+4],6,-145523070),a=g(a,r,n,e,f[t+11],10,-1120210379),e=g(e,a,r,n,f[t+2],15,718787259),n=g(n,e,a,r,f[t+9],21,-343485551),r=U(r,c),n=U(n,o),e=U(e,s),a=U(a,m)}return[r,n,e,a]}function _(f){if(f.length===0)return[];for(var v=f.length*8,r=new Uint32Array(X(v)),n=0;n<v;n+=8)r[n>>5]|=(f[n/8]&255)<<n%32;return r}function U(f,v){var r=(f&65535)+(v&65535),n=(f>>16)+(v>>16)+(r>>16);return n<<16|r&65535}function i(f,v){return f<<v|f>>>32-v}function M(f,v,r,n,e,a){return U(i(U(U(v,f),U(n,a)),e),r)}function d(f,v,r,n,e,a,t){return M(v&r|~v&n,f,v,e,a,t)}function l(f,v,r,n,e,a,t){return M(v&n|r&~n,f,v,e,a,t)}function h(f,v,r,n,e,a,t){return M(v^r^n,f,v,e,a,t)}function g(f,v,r,n,e,a,t){return M(r^(v|~n),f,v,e,a,t)}var r0=K("v3",48,W),f0=r0;function n0(f,v,r){f=f||{};var n=f.random||(f.rng||O)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,v){r=r||0;for(var e=0;e<16;++e)v[r+e]=n[e];return v}return N(n)}function e0(f,v,r,n){switch(f){case 0:return v&r^~v&n;case 1:return v^r^n;case 2:return v&r^v&n^r&n;case 3:return v^r^n}}function q(f,v){return f<<v|f>>>32-v}function a0(f){var v=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof f=="string"){var n=unescape(encodeURIComponent(f));f=[];for(var e=0;e<n.length;++e)f.push(n.charCodeAt(e))}else Array.isArray(f)||(f=Array.prototype.slice.call(f));f.push(128);for(var a=f.length/4+2,t=Math.ceil(a/16),c=new Array(t),o=0;o<t;++o){for(var s=new Uint32Array(16),m=0;m<16;++m)s[m]=f[o*64+m*4]<<24|f[o*64+m*4+1]<<16|f[o*64+m*4+2]<<8|f[o*64+m*4+3];c[o]=s}c[t-1][14]=(f.length-1)*8/Math.pow(2,32),c[t-1][14]=Math.floor(c[t-1][14]),c[t-1][15]=(f.length-1)*8&4294967295;for(var A=0;A<t;++A){for(var p=new Uint32Array(80),w=0;w<16;++w)p[w]=c[A][w];for(var I=16;I<80;++I)p[I]=q(p[I-3]^p[I-8]^p[I-14]^p[I-16],1);for(var R=r[0],C=r[1],x=r[2],y=r[3],S=r[4],T=0;T<80;++T){var H=Math.floor(T/20),F=q(R,5)+e0(H,C,x,y)+S+v[H]+p[T]>>>0;S=y,y=x,x=q(C,30)>>>0,C=R,R=F}r[0]=r[0]+R>>>0,r[1]=r[1]+C>>>0,r[2]=r[2]+x>>>0,r[3]=r[3]+y>>>0,r[4]=r[4]+S>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,r[0]&255,r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,r[1]&255,r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,r[2]&255,r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,r[3]&255,r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,r[4]&255]}var t0=K("v5",80,a0),v0=t0,o0={v1:Q,v3:f0,v4:n0,v5:v0};export{o0 as u};
