(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(3),s=a(6),o=a(4),r=a(7),c=a(0),l=a.n(c),u=a(5),m=a.n(u),d=(a(14),{summer:{text:"let's hit the beach!",iconName:"sun"},winter:{text:"Burr it is cold!",iconName:"snowflake"}}),g=function(e){var t,a,n=(t=e.latitude,(a=(new Date).getMonth())>2&&a<9?t>0?"summer":"winter":t>0?"winter":"summer"),i=d[n],s=i.text,o=i.iconName;return l.a.createElement("div",{className:"season-display ".concat(n)},l.a.createElement("i",{className:"icon-left massive ".concat(o," icon")}),l.a.createElement("h1",null,s),l.a.createElement("i",{className:"icon-right massive ".concat(o," icon")}))},h=function(e){return l.a.createElement("div",{className:"ui active dimmer"},l.a.createElement("div",{className:"ui big text loader"},e.message||"Loading ..."))};h.defaultProps={message:"Loading ..."};var v=h,f=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={latitude:null,longitude:null,errorMessage:""},a}return Object(r.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition(function(t){return e.setState({latitude:t.coords.latitude,longitude:t.coords.longitude})},function(t){return e.setState({errorMessage:t.message.toString()})})}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate")}},{key:"render",value:function(){return this.state.errorMessage&&!this.state.latitude?l.a.createElement("div",null,this.state.errorMessage):!this.state.errorMessage&&this.state.latitude?l.a.createElement(g,{lat:this.state.latitude,long:this.state.longitude}):l.a.createElement(v,{message:"Please accept the location request"})}}]),t}(l.a.Component);m.a.render(l.a.createElement(f,null),document.querySelector("#root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.a43de17a.chunk.js.map