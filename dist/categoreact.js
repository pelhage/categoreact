!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.CategoriedInput=t(require("react")):e.CategoriedInput=t(e.React)}(this,function(e){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),a=o(n);t["default"]=a["default"]},function(t,r){t.exports=e},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),c=r(1),s=o(c),l=r(3),p=o(l),f=r(4),d=o(f),y=function(e){function t(e){n(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={currentCategory:""},r.addToCategories=r.addToCategories.bind(r),r.handleCategories=r.handleCategories.bind(r),r.removeFromCategories=r.removeFromCategories.bind(r),r}return i(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({categories:e.categories})}},{key:"addToCategories",value:function(e){var t=9===e.which||188===e.which||9===e.keyCode||188===e.keyCode,r=e.target.value.trim();if(t&&(e.preventDefault(),r.length)){var o=this.props.categories.slice(),n=this.props.onCategoryAdd;o.indexOf(r)===-1&&o.push(r),this.setState({currentCategory:"",allCategories:o}),n&&n(r),this.props.onCategoryChange(o)}}},{key:"handleCategories",value:function(e){this.setState({currentCategory:e.target.value})}},{key:"removeFromCategories",value:function(e){var t=e.target.getAttribute("data-category"),r=this.props.categories.slice(),o=this.props,n=(o.onCategoryChange,o.onCategoryRemove);r.splice(r.indexOf(t),1),n&&n(t),this.props.onCategoryChange(r)}},{key:"render",value:function(){var e=this.props.categories;return s["default"].createElement("div",{className:"catreact"},s["default"].createElement(p["default"],{className:"catreact__input",onKeyDown:this.addToCategories,placeholder:this.props.placeholder,onChange:this.handleCategories,value:this.state.currentCategory}),s["default"].createElement(d["default"],{className:"catreact-render",categories:e,handleRemove:this.removeFromCategories}))}}]),t}(c.Component);y.propTypes={onCategoryChange:c.PropTypes.func.isRequired,onCategoryAdd:c.PropTypes.func,onCategoryRemove:c.PropTypes.func,categories:c.PropTypes.array.isRequired,placeholder:c.PropTypes.string},t["default"]=y},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),s=r(1),l=o(s),p=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.value!==e.value}},{key:"render",value:function(){return l["default"].createElement("input",u({className:"catreact__input"},this.props))}}]),t}(s.Component);p.defaultProps={type:"text"},t["default"]=p},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),c=r(1),s=o(c),l=function(e){function t(e){n(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.renderCategories=r.renderCategories.bind(r),r}return i(t,e),u(t,[{key:"renderCategories",value:function(){var e=this.props.handleRemove;return this.props.categories.map(function(t,r){return s["default"].createElement("span",{className:"catreact-render__tag",key:r},t,s["default"].createElement("span",{className:"catreact-render__tag-close","data-category":t,onClick:e},"x"))})}},{key:"render",value:function(){var e=this.props.categories;return e.length?s["default"].createElement("div",{className:"catreact-render__inner"},this.renderCategories(e)):s["default"].createElement("span",{className:"catreact__placeholder"},"Add categories separated by tabs or commas")}}]),t}(c.Component);l.propTypes={categories:c.PropTypes.array,handleRemove:c.PropTypes.func.isRequired},t["default"]=l}])});