(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(n,t,e){n.exports=e(20)},18:function(n,t,e){},20:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),a=e(9),i=e.n(a),c=(e(18),e(11)),u=e(3),l=e(4),s=e(6),d=e(5),b=e(7),f=e(2),p=e(1);function h(){var n=Object(f.a)(["\n        width: 600px;\n        margin: 0 auto;\n      "]);return h=function(){return n},n}var j=function(n){var t=n.children;return Object(p.b)("div",{css:Object(p.a)(h())},t)};function O(){var n=Object(f.a)(["\n              ",";\n              margin-left: 10px;\n            "]);return O=function(){return n},n}function v(){var n=Object(f.a)(["\n              ",";\n            "]);return v=function(){return n},n}function m(){var n=Object(f.a)(["\n            position: absolute;\n            display: flex;\n            flex-direction: row;\n            right: 15px;\n            top: 50%;\n            transform: translateY(-50%);\n          "]);return m=function(){return n},n}function g(){var n=Object(f.a)(["\n            margin: 0;\n          "]);return g=function(){return n},n}function x(){var n=Object(f.a)(["\n          padding: 20px 180px 20px 15px;\n          border-radius: 4px;\n          background-color: #61dafb;\n          color: #282c34;\n          word-break: break-word;\n          position: relative;\n          text-decoration: ",";\n          &:not(:first-of-type) {\n            margin-top: 20px;\n          }\n        "]);return x=function(){return n},n}function k(){var n=Object(f.a)(["\n  border: none;\n  padding: 5px 15px;\n  display: inline-block;\n  border-radius: 4px;\n  background-color: #fff;\n  color: #282c34;\n  font-weight: bold;\n  cursor: pointer;\n  font-size: 12px;\n  &:hover,\n  &:focus {\n    background-color: #282c34;\n    color: #61dafb;\n    outline: none;\n  }\n"]);return k=function(){return n},n}var w=Object(p.a)(k()),y=function(n){function t(){var n,e;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=Object(s.a)(this,(n=Object(d.a)(t)).call.apply(n,[this].concat(o)))).state={done:!1,remove:!1},e.onBtnDoneClickHandler=function(n){n.preventDefault(),e.setState({done:!e.state.done})},e.toggleDoneState=function(){return!!e.state.done},e}return Object(b.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){var n=this.props.data;return Object(p.b)("li",{css:Object(p.a)(x(),this.toggleDoneState()?"line-through":"none")},Object(p.b)("p",{css:Object(p.a)(g())},n.title),Object(p.b)("div",{css:Object(p.a)(m())},Object(p.b)("button",{id:"btnDone",css:Object(p.a)(v(),w),onClick:this.onBtnDoneClickHandler},"Done"),Object(p.b)("button",{css:Object(p.a)(O(),w)},"Remove")))}}]),t}(r.Component);function C(){var n=Object(f.a)(["\n          list-style: none;\n          padding: 0;\n        "]);return C=function(){return n},n}var D=function(n){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){var n=this.props.data;return Object(p.b)("ul",{css:Object(p.a)(C())},n.map(function(n,t){return Object(p.b)(y,{key:t,data:n})}))}}]),t}(r.Component),I=e(10);function A(){var n=Object(f.a)(["\n            flex-shrink: 0;\n            margin-left: 20px;\n            border: none;\n            padding: 5px 15px;\n            display: inline-block;\n            border-radius: 4px;\n            background-color: #fff;\n            color: #282c34;\n            font-size: 16px;\n            font-weight: bold;\n            cursor: pointer;\n            cursor: ",";\n            opacity: ",";\n            &:hover,\n            &:focus {\n              background-color: #61dafb;\n              color: #282c34;\n              outline: none;\n            }\n          "]);return A=function(){return n},n}function B(){var n=Object(f.a)(["\n            flex: 1;\n            border: none;\n            padding: 5px 15px;\n            border-radius: 4px;\n            height: 36px;\n            font-size: 16px;\n            color: #282c34;\n            font-weight: bold;\n            border: 3px solid #ffffff;\n            &:focus {\n              outline: none;\n              border-color: #61dafb;\n            }\n          "]);return B=function(){return n},n}function E(){var n=Object(f.a)(["\n          display: flex;\n          margin-top: 20px;\n        "]);return E=function(){return n},n}var L=function(n){function t(){var n,e;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=Object(s.a)(this,(n=Object(d.a)(t)).call.apply(n,[this].concat(o)))).state={addUserInput:""},e.handleChange=function(n){var t=n.currentTarget,r=t.id,o=t.value;e.setState(Object(I.a)({},r,o))},e.onBtnClickHandler=function(n){n.preventDefault();var t=e.state.addUserInput;e.props.onAddListItem({id:+new Date,title:t})},e.formValidate=function(){return!!e.state.addUserInput.trim()},e}return Object(b.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){var n=this.state.addUserInput;return Object(p.b)("form",{css:Object(p.a)(E())},Object(p.b)("input",{id:"addUserInput",type:"text",value:n,onChange:this.handleChange,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443",css:Object(p.a)(B())})," ",Object(p.b)("button",{type:"button",disabled:!this.formValidate(),onClick:this.onBtnClickHandler,css:Object(p.a)(A(),this.formValidate()?"pointer":"not-allowed",this.formValidate()?1:.5)},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"," ")," ")}}]),t}(r.Component),S=[{title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{title:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{title:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}],U=function(n){function t(){var n,e;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=Object(s.a)(this,(n=Object(d.a)(t)).call.apply(n,[this].concat(o)))).state={list:S},e.handleAddListItem=function(n){var t=[n].concat(Object(c.a)(e.state.list));e.setState({list:t})},e}return Object(b.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(j,null,o.a.createElement(L,{onAddListItem:this.handleAddListItem}),o.a.createElement(D,{data:this.state.list}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.2a69f86f.chunk.js.map