webpackJsonp([0x7e671427ccb5],{"./src/components/CustomerLogos.jsx":function(e,t,A){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=A("./node_modules/react/index.js"),c=o(s),a=A("./node_modules/react-i18next/dist/commonjs/index.js"),f=A("./src/components/Container.jsx"),m=o(f),u=A("./src/images/platforms/messenger.png"),i=o(u),D=A("./src/images/platforms/telegram.png"),d=o(D),C=A("./src/images/platforms/slack.png"),l=o(C),G=A("./src/images/platforms/skype.png"),M=o(G),Y=function(e){function t(){return r(this,t),n(this,e.apply(this,arguments))}return g(t,e),t.prototype.render=function(){var e=this.props.t,t=[{company:"Messenger",logo:i.default},{company:"Telegram",logo:d.default},{company:"Slack",logo:l.default},{company:"Your Platform",logo:M.default}];return c.default.createElement(m.default,{isWide:!0},c.default.createElement("div",{className:"CustomerLogos"},c.default.createElement("h5",null,e("heading")),c.default.createElement("div",{className:"CustomerLogos__grid"},t.map(function(e){var t=e.company,A=e.logo;return c.default.createElement("div",{className:"CustomerLogos__logo",key:t},c.default.createElement("img",{src:A,alt:t}))}))))},t}(s.Component);t.default=(0,a.translate)("Platforms")(Y),e.exports=t.default},"./src/images/platforms/messenger.png":function(e,t){e.exports="data:image/png;base64,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"},"./src/images/platforms/skype.png":function(e,t,A){e.exports=A.p+"static/skype.c6cd1b5c.png"},"./src/images/platforms/slack.png":function(e,t){e.exports="data:image/png;base64,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"},"./src/images/platforms/telegram.png":function(e,t){e.exports="data:image/png;base64,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"},'./node_modules/babel-loader/lib/index.js?{"plugins":["/home/frzn/Projects/vertike/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/frzn/Projects/vertike/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/frzn/Projects/vertike/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/home/frzn/Projects/vertike/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/home/frzn/Projects/vertike/node_modules/babel-preset-stage-0/lib/index.js","/home/frzn/Projects/vertike/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/book-demo.jsx':function(e,t,A){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=A("./node_modules/react/index.js"),c=o(s),a=A("./node_modules/react-i18next/dist/commonjs/index.js"),f=A("./src/utils/show-intercom.js"),m=A("./src/components/SEO.jsx"),u=o(m),i=A("./src/components/PageHeader.jsx"),D=o(i),d=A("./src/components/CustomerLogos.jsx"),C=o(d),l=A("./src/components/SignUp.jsx"),G=o(l),M=function(e){function t(){return r(this,t),n(this,e.apply(this,arguments))}return g(t,e),t.prototype.render=function(){var e=this.props.t;return c.default.createElement("div",{className:"BookDemo"},c.default.createElement(u.default,{pageMeta:{title:e("heading")+" | doopoll",path:"/book-demo"}}),c.default.createElement(D.default,null,c.default.createElement("h1",null,e("heading")),c.default.createElement("p",null,e("introduction")),c.default.createElement("button",{className:"Button",onClick:function(){return(0,f.showIntercom)()}},e("book_demo"))),c.default.createElement(C.default,null),c.default.createElement(G.default,null))},t}(s.Component);t.default=(0,a.translate)("BookDemo")(M),e.exports=t.default}});
//# sourceMappingURL=component---src-pages-book-demo-jsx-ae8a64f3f6b26a156eae.js.map