!function(e,r){if("function"==typeof define&&define.amd)define(["../rhelement/rhelement.compiled.js"],r);else if("undefined"!=typeof exports)r(require("../rhelement/rhelement.compiled.js"));else{r(e.rhelementCompiled),e.rhCta={}}}(this,function(e){"use strict";var r,o=(r=e)&&r.__esModule?r:{default:r};var n=function(){function e(e,r){for(var o=0;o<r.length;o++){var n=r[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,o,n){return o&&e(r.prototype,o),n&&e(r,n),r}}();var t=document.createElement("template");t.innerHTML='\n<style>:host {\n  display: inline-block; }\n  :host ::slotted(a) {\n    padding: 0;\n    border: 0;\n    background: none;\n    color: var(--rhe-theme--link-color, #06c);\n    text-decoration: underline; }\n    :host ::slotted(a)::after {\n      margin-left: var(--rhe-theme--spacer--xs, 0.25rem);\n      vertical-align: middle;\n      border-style: solid;\n      border-width: 0.313em 0.313em 0;\n      border-color: transparent;\n      border-top-color: var(--rhe-theme--link-color, #06c);\n      transform: rotate(-90deg);\n      display: inline-block;\n      content: "";\n      position: relative;\n      display: inline-block; }\n  :host ::slotted(a:visited) {\n    padding: 0;\n    border: 0;\n    background: none;\n    color: var(--rhe-theme--link-color--visited, #7551a6);\n    text-decoration: underline; }\n    :host ::slotted(a:visited)::after {\n      margin-left: var(--rhe-theme--spacer--xs, 0.25rem);\n      vertical-align: middle;\n      border-style: solid;\n      border-width: 0.313em 0.313em 0;\n      border-color: transparent;\n      border-top-color: var(--rhe-theme--link-color--visited, #7551a6);\n      transform: rotate(-90deg);\n      display: inline-block;\n      content: "";\n      position: relative;\n      display: inline-block; }\n  :host ::slotted(a:hover) {\n    padding: 0;\n    border: 0;\n    background: none;\n    color: var(--rhe-theme--link-color--hover, #004080);\n    text-decoration: underline; }\n    :host ::slotted(a:hover)::after {\n      margin-left: var(--rhe-theme--spacer--xs, 0.25rem);\n      vertical-align: middle;\n      border-style: solid;\n      border-width: 0.313em 0.313em 0;\n      border-color: transparent;\n      border-top-color: var(--rhe-theme--link-color--hover, #004080);\n      transform: rotate(-90deg);\n      display: inline-block;\n      content: "";\n      position: relative;\n      display: inline-block; }\n  :host ::slotted(a:focus) {\n    padding: 0;\n    border: 0;\n    background: none;\n    color: var(--rhe-theme--link-color--focus, #004080);\n    text-decoration: underline; }\n    :host ::slotted(a:focus)::after {\n      margin-left: var(--rhe-theme--spacer--xs, 0.25rem);\n      vertical-align: middle;\n      border-style: solid;\n      border-width: 0.313em 0.313em 0;\n      border-color: transparent;\n      border-top-color: var(--rhe-theme--link-color--focus, #004080);\n      transform: rotate(-90deg);\n      display: inline-block;\n      content: "";\n      position: relative;\n      display: inline-block; }\n  :host(.white) ::slotted(a) {\n    padding: 0;\n    border: 0;\n    background: none;\n    color: var(--rhe-theme--link-color--desaturated--inverted, #fff);\n    text-decoration: underline; }\n    :host(.white) ::slotted(a)::after {\n      margin-left: var(--rhe-theme--spacer--xs, 0.25rem);\n      vertical-align: middle;\n      border-style: solid;\n      border-width: 0.313em 0.313em 0;\n      border-color: transparent;\n      border-top-color: var(--rhe-theme--link-color--desaturated--inverted, #fff);\n      transform: rotate(-90deg);\n      display: inline-block;\n      content: "";\n      position: relative;\n      display: inline-block; }\n  :host(.black) ::slotted(a) {\n    padding: 0;\n    border: 0;\n    background: none;\n    color: var(--rhe-theme--link-color--desaturated, #1a1a1a);\n    text-decoration: underline; }\n    :host(.black) ::slotted(a)::after {\n      margin-left: var(--rhe-theme--spacer--xs, 0.25rem);\n      vertical-align: middle;\n      border-style: solid;\n      border-width: 0.313em 0.313em 0;\n      border-color: transparent;\n      border-top-color: var(--rhe-theme--link-color--desaturated, #1a1a1a);\n      transform: rotate(-90deg);\n      display: inline-block;\n      content: "";\n      position: relative;\n      display: inline-block; }\n\n:host(.solid) ::slotted(a),\n:host(.outlined) ::slotted(a),\n:host(.ghost) ::slotted(a) {\n  padding: var(--rhe-theme--spacer--sm, 0.5rem) var(--rhe-theme--spacer--md, 1.5rem);\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: var(--rhe-theme--FontWeight--semi-bold, 600);\n  font-size: 0.875em; }\n  :host(.solid) ::slotted(a)::after,\n  :host(.outlined) ::slotted(a)::after,\n  :host(.ghost) ::slotted(a)::after {\n    content: none;\n    display: none; }\n\n:host(.solid) ::slotted(a) {\n  background: var(--rhe-theme--bg-color--shade3, #d2d2d2);\n  color: var(--rhe-theme--text-color--shade3, #1a1a1a);\n  border: 1px solid transparent; }\n\n:host(.solid) ::slotted(a:visited) {\n  background: var(--rhe-theme--bg-color--shade3, #d2d2d2);\n  color: var(--rhe-theme--text-color--shade3, #1a1a1a);\n  border-color: transparent; }\n\n:host(.solid) ::slotted(a:hover) {\n  background: var(--rhe-theme--bg-color--shade3, #d2d2d2);\n  color: var(--rhe-theme--text-color--shade3, #1a1a1a);\n  border-color: transparent; }\n\n:host(.solid) ::slotted(a:focus) {\n  background: var(--rhe-theme--bg-color--shade3, #d2d2d2);\n  color: var(--rhe-theme--text-color--shade3, #1a1a1a);\n  border-color: transparent; }\n\n:host(.outlined) ::slotted(a) {\n  background: transparent !important;\n  color: var(--rhe-theme--text-color--shade3, #1a1a1a);\n  border: 1px solid var(--rhe-theme--border--BorderColor, #ccc); }\n\n:host(.outlined) ::slotted(a:visited) {\n  background: transparent !important;\n  color: var(--rhe-theme--text-color--shade3, #1a1a1a);\n  border-color: var(--rhe-theme--border--BorderColor, #ccc); }\n\n:host(.outlined) ::slotted(a:hover) {\n  background: transparent !important;\n  color: var(--rhe-theme--text-color--shade3, #1a1a1a);\n  border-color: var(--rhe-theme--border--BorderColor, #ccc); }\n\n:host(.outlined) ::slotted(a:focus) {\n  background: transparent !important;\n  color: var(--rhe-theme--text-color--shade3, #1a1a1a);\n  border-color: var(--rhe-theme--border--BorderColor, #ccc); }\n\n:host(.ghost) ::slotted(a) {\n  background: transparent;\n  color: var(--rhe-theme--link-color, #06c);\n  border: 1px solid transparent; }\n\n:host(.ghost) ::slotted(a:visited) {\n  background: transparent;\n  color: var(--rhe-theme--link-color--visited, #7551a6);\n  border-color: transparent; }\n\n:host(.ghost) ::slotted(a:hover) {\n  background: var(--rhe-theme--bg-color--shade2, #e7e7e7);\n  color: var(--rhe-theme--link-color--hover, #004080);\n  border-color: transparent; }\n\n:host(.ghost) ::slotted(a:focus) {\n  background: var(--rhe-theme--bg-color--shade2, #e7e7e7);\n  color: var(--rhe-theme--link-color--focus, #004080);\n  border-color: transparent; }</style>\n<slot></slot>\n';var a=function(e){function r(){return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),function(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,"rh-cta",t))}return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}(r,o.default),n(r,[{key:"connectedCallback",value:function(){(function e(r,o,n){null===r&&(r=Function.prototype);var t=Object.getOwnPropertyDescriptor(r,o);if(void 0===t){var a=Object.getPrototypeOf(r);return null===a?void 0:e(a,o,n)}if("value"in t)return t.value;var l=t.get;return void 0!==l?l.call(n):void 0})(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this);var e=this.children[0];e?e&&"a"!==e.tagName.toLowerCase()?console.warn("The first child in the light DOM must be an anchor tag (<a>)"):this.link=this.querySelector("a"):console.warn("The first child in the light DOM must be an anchor tag (<a>)")}},{key:"disconnectedCallback",value:function(){}}]),r}();window.customElements.define("rh-cta",a)});