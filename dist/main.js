!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(1);const l=["me.jpg","ml_concept.jpg","languages_concept.jpg","games_concept.jpg","graphics_concept.jpg"],a={};const c={textAlign:"center"},s={width:"800px",textAlign:"left",display:"inline-block"};class i extends o.Component{render(){return o.createElement("div",{className:"page",style:c},o.createElement("div",{className:"container",style:s},this.props.children))}}class u extends o.Component{render(){return o.createElement(i,null,o.createElement("p",null,"Welcome, select a concept below to see what projects I have done in this area."),o.createElement("p",null,"Machine Learning"),o.createElement("p",null,"Programming Languages"),o.createElement("p",null,"Video Games"),o.createElement("p",null,"Computer Graphics"))}}const p={margin:"0",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"20px",backgroundColor:"#101010"};class d extends o.Component{constructor(e){super(e),this.state={loaded:!1,dotCount:0}}changeDotCount(){this.setState({dotCount:(this.state.dotCount+1)%4}),setTimeout(this.changeDotCount.bind(this),700)}componentDidMount(){!function(e){let t=0;for(let n in l){const o=l[n],r=new Image;r.src="./images/"+o,r.onload=()=>{a[o]=r,t+=1,t===l.length&&e()}}}(this.setState.bind({loaded:!0})),setTimeout(this.changeDotCount.bind(this),350)}render(){const e=o.createElement("div",{style:p},"Loading",".".repeat(this.state.dotCount)),t=o.createElement(u,null);return this.state.loaded?t:e}}r.render(o.createElement(d,null),document.getElementById("root"))}]);
//# sourceMappingURL=main.js.map