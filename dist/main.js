!function(t){var e={};function n(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(s,r,function(e){return t[e]}.bind(null,r));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var s=class{constructor(t){let e=t;this.getWalletValue=(()=>e),this.checkCanPlay=(t=>e>=t),this.changeWallet=((t,n="+")=>{if("number"!=typeof t||isNaN(t))throw new Error("nieprawdidłowa liczba");if("+"===n)return e+=t;if("-"===n)return e-=t;throw new Error("nieprawidłowy typ działania")})}};var r=class{constructor(){this.options=["red","green","blue"];let t=this.drawResult();this.getDrawResult=(()=>t)}drawResult(){let t=[];for(let e=0;e<this.options.length;e++){const e=Math.floor(Math.random()*this.options.length);t.push(this.options[e])}return t}};var a=class{static moneyWinInGame(t,e){return t?3*e:0}static checkWinner(t){return t[0]===t[1]&&t[1]===t[2]||t[0]!==t[1]&&t[1]!==t[2]&&t[0]!==t[2]}};var i=class{constructor(){this.gameResults=[]}addGameToStats(t,e){let n={win:t,bid:e};this.gameResults.push(n)}showGameStats(){return[this.gameResults.length,this.gameResults.filter(t=>t.win).length,this.gameResults.filter(t=>!t.win).length]}};new class{constructor(t){this.stats=new i,this.wallet=new s(t),document.getElementById("start").addEventListener("click",this.startGame.bind(this)),this.spanWallet=document.querySelector(".panel span.wallet"),this.boards=[...document.querySelectorAll("div.color")],this.inputBid=document.getElementById("bid"),this.spanResult=document.querySelector(".score span.result"),this.spanGames=document.querySelector(".score span.number"),this.spanWins=document.querySelector(".score span.win"),this.spanLosses=document.querySelector(".score span.loss"),this.render()}render(t=["grey","grey","grey"],e=this.wallet.getWalletValue(),n="",s=[0,0,0],r=0,a=0){this.boards.forEach((e,n)=>{e.style.backgroundColor=t[n]}),this.spanWallet.textContent=e,n?n=`Wygrałeś ${a}$. `:n||""===n||(n=`Przegrałeś ${r}$. `),this.spanResult.textContent=n,this.spanGames.textContent=s[0],this.spanWins.textContent=s[1],this.spanLosses.textContent=s[2],this.inputBid.value=""}startGame(){if(this.inputBid.value<1)return alert("Nieprawidłowa Stawka. Minimalna stawka = 1. Podaj prawidłową stawkę");const t=Math.floor(this.inputBid.value);if(!this.wallet.checkCanPlay(t))return alert("masz za mało środków, lub podana została nieprawidłowa wartość");this.wallet.changeWallet(t,"-"),this.draw=new r;const e=this.draw.getDrawResult(),n=a.checkWinner(e),s=a.moneyWinInGame(n,t);this.wallet.changeWallet(s),this.stats.addGameToStats(n,t),this.render(e,this.wallet.getWalletValue(),n,this.stats.showGameStats(),t,s)}}(200)}]);