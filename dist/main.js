!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";n.r(t);var o,r=n(0),a=n(1);!function(e){e.ME="images/me.jpg",e.MACHINE_LEARNING="images/ml_concept.jpg"}(o||(o={}));let i=0;const s={textAlign:"center"},l={width:"800px",textAlign:"left",display:"inline-block"};class c extends r.Component{render(){return r.createElement("div",{className:"page",style:s},r.createElement("div",{className:"container",style:l},this.props.children))}}const d={borderRadius:"100%",width:"200px",height:"200px"},u={width:"200px"};class m extends r.Component{render(){return r.createElement(c,null,r.createElement("h1",null,"CURRENTLY UNDER CONSTRUCTION"),r.createElement("img",{style:d,src:o.ME}),r.createElement("p",null,"Welcome, select a concept below to see what projects I have done in this area."),r.createElement("table",null,r.createElement("tr",null,r.createElement("th",null,r.createElement("a",null,r.createElement("img",{style:u,src:o.MACHINE_LEARNING}))))),r.createElement("p",null,"Machine Learning"),r.createElement("p",null,"Programming Languages"),r.createElement("p",null,"Video Games"),r.createElement("p",null,"Computer Graphics"))}}const f={left:"0px",top:"0px",position:"fixed",width:"100%",height:"100%",backgroundColor:"#000000"},p={margin:"0",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"32px",color:"#ffffff"};class h extends r.Component{constructor(e){super(e),this.state={mounted:!1,loaded:!1,dotCount:0,fadeFrame:0,dotTimeout:0}}changeDotCount(){this.setState({dotCount:(this.state.dotCount+1)%4,dotTimeout:window.setTimeout(this.changeDotCount.bind(this),700)})}componentDidMount(){if(!this.state.mounted){const e={mounted:!0,dotTimeout:window.setTimeout(this.changeDotCount.bind(this),350),fadeFrame:0};(function(e){const t=Object.values(o);return t.reduce((n,o)=>{const r=new Image;return r.src=o,r.onload=()=>{i+1===t.length?e():i+=1},n&&r.complete},!0)})(this.onLoaded.bind(this))&&(e.fadeFrame=30),this.setState(e)}}fade(){this.state.fadeFrame<30&&(this.setState({fadeFrame:this.state.fadeFrame+1}),window.setTimeout(this.fade.bind(this),16))}onLoaded(){window.clearTimeout(this.state.dotTimeout),window.setTimeout(this.fade.bind(this),16),this.setState({loaded:!0})}render(){const e=Object.assign({},f);this.state.fadeFrame>20&&(e.backgroundColor="#"+(25*(this.state.fadeFrame-20)).toString(16).repeat(3));const t=r.createElement("div",{style:e},r.createElement("div",{style:p},"Loading",".".repeat(this.state.dotCount)));return this.state.loaded&&30===this.state.fadeFrame?r.createElement(m,null):t}}a.render(r.createElement(h,null),document.getElementById("root"))}]);
//# sourceMappingURL=main.js.map