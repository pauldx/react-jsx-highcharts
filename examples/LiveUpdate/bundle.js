var example=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=189)}({0:function(e,t){e.exports=React},1:function(e,t){e.exports=ReactHighcharts},10:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}var o=n(2);function i(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?Object(o.a)(e):t}n.d(t,"a",function(){return i})},11:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",function(){return a})},12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=(r=o)&&r.__esModule?r:{default:r},c=n(13);function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r._handleRefMount=function(e){r._domNode=e},u(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.PureComponent),a(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.component,r=e.children;return i.default.createElement(n,{ref:this._handleRefMount,className:t},r)}}]),t}();l.propTypes={async:c.PropTypes.bool,className:c.PropTypes.string,children:c.PropTypes.any,component:c.PropTypes.node},l.defaultProps={component:"code"},t.default=l},13:function(e,t,n){e.exports=n(14)()},14:function(e,t,n){"use strict";var r=n(15);function a(){}e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=a,n.PropTypes=n,n}},15:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},18:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return o});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return[e+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:0)*t,Math.round(100*Math.random()*2)/2]},a=function(e,t){for(var n=[],a=-1*(arguments.length>2&&void 0!==arguments[2]?arguments[2]:100)+1;a<=0;a++)n.push(r(e,t,a));return n},o=function(e,t){t||(t=r());var n=e.slice(0);return n.push(t),n}},189:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=n(7),u=n(8),l=n(10),s=n(9),p=n(11),f=n(2),d=n(3),h=n.n(d),y=n(1),b=n(5),m=n(18),v=function(e){function t(e){var n;Object(c.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).updateLiveData=n.updateLiveData.bind(Object(f.a)(Object(f.a)(n))),n.handleStartLiveUpdate=n.handleStartLiveUpdate.bind(Object(f.a)(Object(f.a)(n))),n.handleStopLiveUpdate=n.handleStopLiveUpdate.bind(Object(f.a)(Object(f.a)(n)));var r=Date.now();return n.state={data1:Object(m.c)(r),data2:Object(m.c)(r),liveUpdate:!1},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.handleStartLiveUpdate()}},{key:"updateLiveData",value:function(){var e=this.state,t=e.data1,n=e.data2;this.setState({data1:Object(m.a)(t),data2:Object(m.a)(n)})}},{key:"handleStartLiveUpdate",value:function(e){e&&e.preventDefault(),this.setState({liveUpdate:window.setInterval(this.updateLiveData,1e3)})}},{key:"handleStopLiveUpdate",value:function(e){e.preventDefault(),window.clearInterval(this.state.liveUpdate),this.setState({liveUpdate:!1})}},{key:"render",value:function(){var e=this.state,t=e.data1,n=e.data2,r=e.liveUpdate;return a.a.createElement("div",{className:"app"},a.a.createElement(y.HighchartsChart,null,a.a.createElement(y.Chart,null),a.a.createElement(y.Title,null,"Dynamically updating data"),a.a.createElement(y.Legend,null,a.a.createElement(y.Legend.Title,null,"Legend")),a.a.createElement(y.XAxis,{type:"datetime"},a.a.createElement(y.XAxis.Title,null,"Time")),a.a.createElement(y.YAxis,null,a.a.createElement(y.YAxis.Title,null,"Pressure (m)"),a.a.createElement(y.LineSeries,{name:"Sensor 1",data:t}),a.a.createElement(y.LineSeries,{name:"Sensor 2",data:n}))),a.a.createElement("div",null,!r&&a.a.createElement("button",{className:"btn btn-success",onClick:this.handleStartLiveUpdate},"Live update"),r&&a.a.createElement("button",{className:"btn btn-danger",onClick:this.handleStopLiveUpdate},"Stop update")),a.a.createElement(b.a,{name:"LiveUpdate"},'\nupdateLiveData () {\n  const { data1, data2 } = this.state;\n\n  this.setState({\n    data1: addDataPoint(data1),\n    data2: addDataPoint(data2)\n  });\n}\n\nhandleStartLiveUpdate (e) {\n  e && e.preventDefault();\n  this.setState({\n    liveUpdate: window.setInterval(this.updateLiveData, 1000)\n  });\n}\n\nrender () {\n  const { data1, data2 } = this.state;\n\n  return (\n    <HighchartsChart>\n      <Chart />\n\n      <Title>Dynamically updating data</Title>\n\n      <Legend>\n        <Legend.Title>Legend</Legend.Title>\n      </Legend>\n\n      <XAxis type="datetime">\n        <XAxis.Title>Time</XAxis.Title>\n      </XAxis>\n\n      <YAxis>\n        <YAxis.Title>Pressure (m)</YAxis.Title>\n        <LineSeries name="Sensor 1" data={data1} />\n        <LineSeries name="Sensor 2" data={data2} />\n      </YAxis>\n    </HighchartsChart>\n  );\n}\n\n// Remember to inject Highcharts to exported component\nexport default withHighcharts(MyComponent, Highcharts);'))}}]),t}(r.Component),g=Object(y.withHighcharts)(v,h.a);i.a.render(a.a.createElement(g,null),document.getElementById("root"))},2:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return r})},3:function(e,t){e.exports=Highcharts},4:function(e,t){e.exports=ReactDOM},5:function(e,t,n){"use strict";var r=n(6);t.a=function(e){var t=e.name,n=e.children;return React.createElement("div",null,React.createElement("pre",null,React.createElement(r.PrismCode,{className:"language-jsx"},n)),React.createElement("a",{href:"https://github.com/whawker/react-jsx-highcharts/blob/gh-pages/examples/".concat(t,"/App.js"),className:"btn btn-link"},"See full example code"))}},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(12);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return a(r).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}})},7:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return r})},8:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",function(){return a})},9:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",function(){return r})}});