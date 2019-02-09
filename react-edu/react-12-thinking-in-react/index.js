!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(13),i=n(14),c=n(15),s=n(16),l={text:r.RenderText,tag:i.RenderTag,component:c.RenderComponent,null:s.RenderNull};t.Render=function(e,t=null){const n=o.VDomType(e);if(n)return l[n](e,t);throw`invalid node: ${JSON.stringify(e,null,4)} found!`}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(5);t.DomType=function(e){return e instanceof Text?"text":"tag"},t.VDomType=function(e){if(!e)return"null";if("string"==typeof e||"number"==typeof e)return"text";if("object"==typeof e&&"string"==typeof e.type)return"tag";if("object"==typeof e&&"function"==typeof e.type)return"component";throw`unknown vdom type! vdom: ${JSON.stringify(e,null,4)}`},t.ComponenType=function(e){return o.Component.isPrototypeOf(e)?"class":"function"},t.Flat=function(e){return function e(t){return t.reduce((t,n)=>Array.isArray(n)?t.concat(e(n)):t.concat(n),[])}([...e]).filter(e=>null!==e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(9),r=n(10),i=n(3),c=n(11),s=n(12),l={text:o.PatchText,same_tag:r.PatchSameTag,tag_by_text:i.FullRender,text_by_tag:i.FullRender,diff_tag:i.FullRender,component:c.PatchByComponent,null:s.PatchNull};t.Patch=function({vdom:e,dom:t}){const n=i.PatchType({vdom:e,dom:t});if(n)return l[n]({vdom:e,dom:t});throw`unknown patch type! vdom: ${JSON.stringify(e,null,4)} dom:${JSON.stringify(t,null,4)}`}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1);function i({old_child:e,new_child:t}){return e.parentNode.replaceChild(t,e),t}t.Replace=i,t.FullRender=function({dom:e,vdom:t}){return i({old_child:e,new_child:o.Render(t)})},t.PatchType=function({dom:e,vdom:t}){if("null"===r.VDomType(t))return"null";if("component"===r.VDomType(t))return"component";if("tag"===r.VDomType(t)&&"tag"===r.DomType(e)&&e.nodeName===t.type.toUpperCase())return"same_tag";if("tag"===r.VDomType(t)&&"tag"===r.DomType(e)&&e.nodeName!==t.type.toUpperCase())return"diff_tag";if("text"===r.VDomType(t)&&"text"===r.DomType(e))return"text";if("text"===r.VDomType(t)&&"tag"===r.DomType(e))return"tag_by_text";if("tag"===r.VDomType(t)&&"text"===r.DomType(e))return"text_by_tag";throw`unknown patch type! vdom: ${JSON.stringify(t,null,4)} dom:${JSON.stringify(e,null,4)}`}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Mount=function(e,t=null){return t?t.appendChild(e):e},t.SetAttribute=function(e,t,n){if("function"==typeof n&&t.startsWith("on")){let o=t.slice(2).toLowerCase();"change"===o&&(o="input");const r=e;r.__RigidHandlers__=r.__RigidHandlers__||{},r.removeEventListener(o,r.__RigidHandlers__[o]),r.__RigidHandlers__[o]=n,r.addEventListener(o,r.__RigidHandlers__[o])}else"style"==t&&"object"==typeof n?Object.assign(e.style,n):"key"===t?e.__RigidKey__=n:e[t]=n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(2);t.Component=class{constructor(e){this.props=e||{},this.state=null}SetState(e){this.ShouldComponentUpdate(this.props,e)?(this.ComponentWillUpdate(this.props,e),this.state=Object.assign({},this.state,e),o.Patch({dom:this.base,vdom:this.Render()}),this.ComponentDidUpdate(this.props,e)):this.state=Object.assign({},this.state,e)}ComponentWillMount(){}ComponentDidMount(){}ComponentWillUnmount(){}ComponentWillReceiveProps(e){}ComponentWillUpdate(e,t){}ComponentDidUpdate(e,t){}ShouldComponentUpdate(e,t){return!0}}},function(e,t,n){const{Render:o,CreateElement:r,Component:i,Patch:c}=n(7);class s extends i{Render(){const e=this.props.category;return r("tr",null,r("th",{colSpan:"2"},e))}}class l extends i{Render(){const e=this.props.product,t=e.stocked?e.name:r("span",{style:{color:"red"}},e.name);return r("tr",null,r("td",null,t),r("td",null,e.price))}}class u extends i{Render(){const e=this.props.filterText,t=this.props.inStockOnly,n=[];let o=null;return this.props.products.forEach(i=>{-1!==i.name.indexOf(e)&&(t&&!i.stocked||(i.category!==o&&n.push(r(s,{category:i.category,key:i.category})),n.push(r(l,{product:i,key:i.name})),o=i.category))}),r("table",null,r("thead",null,r("tr",null,r("th",null,"Name"),r("th",null,"Price"))),r("tbody",null,n))}}class a extends i{constructor(e){super(e),this.handleFilterTextChange=this.handleFilterTextChange.bind(this),this.handleInStockChange=this.handleInStockChange.bind(this)}handleFilterTextChange(e){this.props.onFilterTextChange(e.target.value)}handleInStockChange(e){this.props.onInStockChange(e.target.checked)}Render(){return r("form",null,r("input",{type:"text",placeholder:"Search...",value:this.props.filterText,onChange:this.handleFilterTextChange}),r("p",null,r("input",{type:"checkbox",checked:this.props.inStockOnly,onChange:this.handleInStockChange})," ","Only show products in stock"))}}o(r(class extends i{constructor(e){super(e),this.state={filterText:"",inStockOnly:!1},this.handleFilterTextChange=this.handleFilterTextChange.bind(this),this.handleInStockChange=this.handleInStockChange.bind(this)}handleFilterTextChange(e){this.SetState({filterText:e})}handleInStockChange(e){this.SetState({inStockOnly:e})}Render(){return r("div",null,r(a,{filterText:this.state.filterText,inStockOnly:this.state.inStockOnly,onFilterTextChange:this.handleFilterTextChange,onInStockChange:this.handleInStockChange}),r(u,{products:this.props.products,filterText:this.state.filterText,inStockOnly:this.state.inStockOnly}))}},{products:[{category:"Sporting Goods",price:"$49.99",stocked:!0,name:"Football"},{category:"Sporting Goods",price:"$9.99",stocked:!0,name:"Baseball"},{category:"Sporting Goods",price:"$29.99",stocked:!1,name:"Basketball"},{category:"Electronics",price:"$99.99",stocked:!0,name:"iPod Touch"},{category:"Electronics",price:"$399.99",stocked:!1,name:"iPhone 5"},{category:"Electronics",price:"$199.99",stocked:!0,name:"Nexus 7"}]}),document.getElementById("root"))},function(e,t,n){"use strict";function o(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),o(n(8)),o(n(0)),o(n(5)),o(n(2))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CreateElement=function(e,t,...n){return{type:e,props:t||{},children:n||[]}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(3);t.PatchText=function({dom:e,vdom:t}){return e.textContent!==t.toString()?r.Replace({old_child:e,new_child:o.Render(t)}):e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(2),i=n(4),c=n(1);t.PatchSameTag=function({dom:e,vdom:t}){const n=new Map,s=document.activeElement;c.Flat(e.childNodes).forEach((e,t)=>{const o=e.__RigidKey__||`__index__${t}`;n.set(o,e)}),c.Flat(t.children).forEach((t,i)=>{const c=t.props&&t.props.key||`__index__${i}`,s=n.get(c)?r.Patch({dom:n.get(c),vdom:t}):o.Render(t);s&&e.appendChild(s),n.delete(c)}),n.forEach(e=>{const t=e.__RigidInstance__;t&&t.ComponentWillUnmount(),e.remove()});for(const t of e.attributes)e.removeAttribute(t.name);for(const n in t.props)i.SetAttribute(e,n,t.props[n]);return s.focus(),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(2),r=n(1),i=n(3);t.PatchByComponent=function({dom:e,vdom:t}){const n=Object.assign({},t.props,{children:t.children}),c=t.type;if(e.__RigidInstance__){const r=e.__RigidInstance__;if(r.constructor===c){if(r.ComponentWillReceiveProps(n),r.props=n,r.ShouldComponentUpdate(r.props,r.state)){r.ComponentWillUpdate(r.props,r.state);const t=o.Patch({dom:e,vdom:r.Render()});return r.ComponentDidUpdate(r.props,r.state),t}return e}return r.ComponentWillUnmount(),i.FullRender({dom:e,vdom:t})}return"function"===r.ComponenType(c)?o.Patch({dom:e,vdom:c(n)}):"class"===r.ComponenType(c)?i.FullRender({dom:e,vdom:t}):void 0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PatchNull=function({dom:e}){e.remove()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4);t.RenderText=function(e,t=null){return o.Mount(document.createTextNode(e.toString()),t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),r=n(0),i=n(1);t.RenderTag=function(e,t=null){const n=o.Mount(document.createElement(e.type));return i.Flat(e.children).forEach(e=>r.Render(e,n)),Object.entries(e.props).forEach(e=>o.SetAttribute(n,...e)),o.Mount(n,t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(1);t.RenderComponent=function(e,t=null){const n=Object.assign({},e.props,{children:e.children}),i=e.type;if("class"===r.ComponenType(i)){const r=new i(n);return r.ComponentWillMount(),r.base=o.Render(r.Render(),t),r.base.__RigidInstance__=r,r.base.__RigidKey__=e.props.key,r.ComponentDidMount(),r.base}if("function"===r.ComponenType(i)){const r=o.Render(i(n),t);return r&&(r.__RigidKey__=e.props.key),r}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RenderNull=function(e,t=null){return null}}]);