webpackJsonp([85349411524201],{'./node_modules/babel-loader/lib/index.js?{"plugins":["/home/frzn/Projects/vertike/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/frzn/Projects/vertike/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/frzn/Projects/vertike/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/home/frzn/Projects/vertike/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/home/frzn/Projects/vertike/node_modules/babel-preset-stage-0/lib/index.js","/home/frzn/Projects/vertike/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/JobsPage.jsx':function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var s=l("./node_modules/react/index.js"),r=a(s),n=l("./node_modules/gatsby-link/index.js"),o=a(n),d=l("./src/components/SEO.jsx"),u=a(d),m=l("./src/components/Container.jsx"),i=a(m),c=l("./src/components/PageHeader.jsx"),f=a(c);t.default=function(e){var t=e.data,l=t.markdownRemark,a=l.frontmatter,s=a.title,n=a.lastUpdated,d=a.closingDate,m=a.salary;return r.default.createElement("div",null,r.default.createElement(u.default,{pageMeta:{title:s+" | doopoll",path:""+l.fields.slug}}),r.default.createElement(f.default,null,r.default.createElement("h5",null,r.default.createElement(o.default,{to:"/jobs/"},"Jobs")),r.default.createElement("h1",null,s),m?r.default.createElement("p",{className:"lead"},m):null,r.default.createElement("h5",{className:"PageHeader__meta"},"Posted: ",n),r.default.createElement("h5",{className:"PageHeader__meta"},"Closing Date: ",d)),r.default.createElement(i.default,null,r.default.createElement("div",{dangerouslySetInnerHTML:{__html:l.html}})))};t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-jobs-page-jsx-d65e28a38c0187588583.js.map