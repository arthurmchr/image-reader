!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.ImageReader=t()}}(function(){return function t(e,i,n){function r(o,a){if(!i[o]){if(!e[o]){var h="function"==typeof require&&require;if(!a&&h)return h(o,!0);if(s)return s(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var l=i[o]={exports:{}};e[o][0].call(l.exports,function(t){var i=e[o][1][t];return r(i?i:t)},l,l.exports,t,e,i,n)}return i[o].exports}for(var s="function"==typeof require&&require,o=0;o<n.length;o++)r(n[o]);return r}({1:[function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.autoplay,s=void 0===r?!0:r,o=i.el,a=void 0===o?null:o,h=i.fps,u=void 0===h?30:h,l=i.from,_=void 0===l?0:l,f=i.loop,p=void 0===f?!1:f,c=i.onComplete,m=void 0===c?null:c,d=i.onRepeat,g=void 0===d?null:d,v=i.onRepeatComplete,y=void 0===v?null:v,k=i.repeat,w=void 0===k?0:k,R=i.retina,C=void 0===R?!1:R,P=i.reverse,b=void 0===P?null:P,x=i.to,T=void 0===x?null:x;if(n(this,t),!e)throw new Error("images parameter can not be null");if(!Array.isArray(e))throw new Error("images parameter must be an array");if(this._images=e,this._elTarget=a||new Image,this._currentRepeat=0,this._from=_,this._current=_,this._to=T,this._isPlaying=s,this._repeat=p?-1:w,this._interval=1e3/u,this._then=null,this._onComplete=m,this._onRepeat=g,this._onRepeatComplete=y,null===this._to&&(this._to=this._images.length-1),this._side=b||this._from>this._to?-1:1,-1===this._side&&this._from<this._to){var M=this._from,O=this._to;this._from=Math.max(M,O),this._to=Math.min(M,O)}a||Object.assign(this._elTarget.style,{width:this._images[0].naturalWidth/(C?2:1)+"px",height:this._images[0].naturalHeight/(C?2:1)+"px"}),this.update(!0)}return r(t,[{key:"draw",value:function(){this._elTarget.src=this._images[this._current]}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!1;if(this._isPlaying||t){var e=performance.now(),i=e-this._then;i<this._interval&&!t||(this._then=e-i%this._interval,this.draw(),this._current===this._to?this._repeat?(this._currentRepeat++,this._current=this._from,this._currentPack=0,this._onRepeat&&this._onRepeat(),this._repeat>0&&this._currentRepeat>this._repeat&&(this._isPlaying=!1,this._onRepeatComplete&&this._onRepeatComplete())):(this._isPlaying=!1,this._onComplete&&this._onComplete()):this._current+=this._side)}}},{key:"play",value:function(){this._isPlaying=!0}},{key:"pause",value:function(){this._isPlaying=!1}},{key:"stop",value:function(){this._isPlaying=!1,this._current=this._from}},{key:"reverse",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!==t?this._side=t?1:-1:this._side=1===this._side?-1:1;var e=this._from,i=this._to;this._from=1===this._side?Math.min(e,i):Math.max(e,i),this._to=1===this._side?Math.max(e,i):Math.min(e,i),console.log(this._from,this._to)}},{key:"goFromTo",value:function(t,e){t>=0&&(this._from=t),e>=0&&(this._to=e),this._current=this._from,this._side=t>e?-1:1}},{key:"goToAndPlay",value:function(t){this._current=t,this._isPlaying=!0}},{key:"goToAndStop",value:function(t){this._current=t,this._isPlaying=!1}},{key:"destroy",value:function(){this._isPlaying=!1,this._elTarget.parentNode.remove(this._elTarget)}},{key:"el",get:function(){return this._elTarget}},{key:"current",get:function(){return this._current}},{key:"total",get:function(){return this._images.length}},{key:"fps",set:function(t){this._interval=1e3/t}},{key:"loop",set:function(t){t?this._repeat=-1:-1===this._repeat&&(this._repeat=0)}},{key:"repeat",set:function(t){this._repeat=t,this._currentRepeat=0}},{key:"onComplete",set:function(t){this._onComplete=t}},{key:"onRepeat",set:function(t){this._onRepeat=t}},{key:"onRepeatComplete",set:function(t){this._onRepeatComplete=t}}]),t}();i["default"]=s},{}]},{},[1])(1)});
//# sourceMappingURL=image-reader.js.map