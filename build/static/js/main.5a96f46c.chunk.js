(this.webpackJsonpkuvera=this.webpackJsonpkuvera||[]).push([[0],{50:function(e,t,a){e.exports=a.p+"static/media/back.841cd051.svg"},61:function(e,t,a){e.exports=a(73)},66:function(e,t,a){},68:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),o=a(17),i=a(10),s=a(11),u=a(15),d=a(14),m=(a(66),a(29)),p=a.n(m),v=a(43),h=function(){var e=Object(v.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){if(200===e.status)return e.json()})).then((function(e){return e})).catch((function(e){console.error(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(v.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("https://api.kuvera.in/api/v3/funds.json");case 2:a=e.sent,t("allFunds",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(v.a)(p.a.mark((function e(t,a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("https://api.kuvera.in/api/v3/funds/".concat(t,".json"));case 2:n=e.sent,a("fundDetails",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),y=a(45),E=(a(68),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card-item"},r.a.createElement("div",{className:"card-item-container"},r.a.createElement("div",{className:"card-item-label"},this.props.label),r.a.createElement("div",{className:"card-item-content"},this.props.value)))}}]),a}(r.a.PureComponent)),g=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.fund,a=t.name,n=t.fund_type,l=t.fund_category,c=t.returns,o=c.inception,i=c.year_1,s=c.year_3,u=c.year_5,d=t.volatility;return r.a.createElement("div",{className:"fund-list card",onClick:function(){return e.props.onClick()}},r.a.createElement("h3",{className:"fund-title inline-block"},a),r.a.createElement("div",{className:"fund-category"},"".concat(n||"").concat(n&&l?" \xb7 ":"").concat(l||"")),r.a.createElement("h4",{className:"fund-title"},"Past Performance"),r.a.createElement(E,{label:"SINCE LAUNCH (SL)",value:void 0!==o?"".concat(o.toFixed(1),"%"):"NA"}),r.a.createElement(E,{label:"1Y Return",value:void 0!==i?"".concat(i.toFixed(1),"%"):"NA"}),r.a.createElement(E,{label:"3Y Return",value:void 0!==s?"".concat(s.toFixed(1),"%"):"NA"}),r.a.createElement(E,{label:"5Y Return",value:void 0!==u?"".concat(u.toFixed(1),"%"):"NA"}),r.a.createElement(E,{label:"Volatility (Vol)",value:void 0!==d?"".concat(d.toFixed(1),"%"):"NA"}))}}]),a}(r.a.PureComponent),O=a(50),k=a.n(O),N=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"loader"})}}]),a}(r.a.PureComponent),j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).setData=function(e,t){n.setState(Object(o.a)({},e,t))},n.state={fundDetails:null},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){b(this.props.fund.code,this.setData)}},{key:"render",value:function(){var e=this,t=this.props.fund.name,a=this.state.fundDetails;return r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:k.a,alt:"Go back",className:"back-button",onClick:function(){return e.props.handleBackButton()}}),r.a.createElement("div",{className:"title"},t),a?null:r.a.createElement("div",{className:"push-20"},r.a.createElement(N,null)))}}]),a}(r.a.PureComponent),C=a(51),F=a.n(C),x=a(104),D=a(113),w=a(111),B=a(116),S=a(114),L=a(115),_=a(110),A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleOpenFundDetails=function(e){n.setState({openedFund:e})},n.handleUpdateFilter=function(e,t){var a;n.setState((a={},Object(o.a)(a,e,t),Object(o.a)(a,"pagesLoaded",1),a))},n.handleChangePlan=function(e,t){n.setState({plan:Object(y.a)(Object(y.a)({},n.state.plan),{},Object(o.a)({},e,t)),pagesLoaded:1})},n.state={openedFund:null,pagesLoaded:1,search:"",category:"all",subCategory:"all",sortBy:"year_3",plan:{growth:!0,dividend:!1}},n}return Object(s.a)(a,[{key:"render",value:function(){var e,t=this,a=null===(e=this.props.allFunds)||void 0===e?void 0:e.filter((function(e){return""===t.state.search||e.name.toLowerCase().indexOf(t.state.search.toLowerCase())>-1})),n=null===a||void 0===a?void 0:a.filter((function(e){return!!(t.state.plan.growth&&"GROWTH"===e.plan||t.state.plan.dividend&&("DIVIDEND ANNUAL"===e.plan||null===e.plan))||t.state.plan.growth===t.state.plan.dividend})),l=null===n||void 0===n?void 0:n.sort((function(e,a){var n=function(e){return e||-1/0};return"volatility"===t.state.sortBy?n(e[t.state.sortBy])-n(a[t.state.sortBy]):n(a.returns[t.state.sortBy])-n(e.returns[t.state.sortBy])})),c=null===l||void 0===l?void 0:l.filter((function(e){return"all"===t.state.category||e.fund_type===t.state.category})),o="all"===this.state.category?{}:null===c||void 0===c?void 0:c.reduce((function(e,t){return e[t.fund_category]=!0,e}),{}),i=null===c||void 0===c?void 0:c.filter((function(e){return"all"===t.state.subCategory||e.fund_category===t.state.subCategory}));return this.state.openedFund?r.a.createElement(j,{fund:this.state.openedFund,handleBackButton:function(){return t.handleOpenFundDetails(null)}}):r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"top-title"},"Mutual Funds"),this.props.allFunds?null:r.a.createElement("div",{className:"push-20"},r.a.createElement(N,null)),this.props.allFunds?r.a.createElement("div",{className:"filters"},r.a.createElement(x.a,{variant:"outlined",className:"control-item"},r.a.createElement(B.a,{id:"outlined-basic-search",label:"Search",variant:"outlined",onChange:function(e){return t.handleUpdateFilter("search",e.target.value)}})),r.a.createElement(x.a,{variant:"outlined",className:"control-item plan-check"},r.a.createElement(D.a,{control:r.a.createElement(w.a,{className:"checkbox",checked:this.state.plan.growth,onChange:function(){return t.handleChangePlan("growth",!t.state.plan.growth)},name:"checkedB",color:"primary"}),className:"checkbox-container",label:r.a.createElement("div",{className:"checkbox-label"},"Growth")}),r.a.createElement(D.a,{control:r.a.createElement(w.a,{className:"checkbox",checked:this.state.plan.dividend,onChange:function(){return t.handleChangePlan("dividend",!t.state.plan.dividend)},name:"checkedB",color:"primary"}),className:"checkbox-container",label:r.a.createElement("div",{className:"checkbox-label"},"Dividend")})),r.a.createElement(x.a,{variant:"outlined",className:"control-item"},r.a.createElement(S.a,{id:"sort-by-label"},"Sort By"),r.a.createElement(_.a,{labelId:"sort-by-label",id:"sort-by",value:this.state.sortBy,onChange:function(e){return t.handleUpdateFilter("sortBy",e.target.value)},label:"Sort By"},r.a.createElement(L.a,{value:"year_3"},"3 Years"),r.a.createElement(L.a,{value:"year_5"},"5 Years"),r.a.createElement(L.a,{value:"year_1"},"1 Year"),r.a.createElement(L.a,{value:"inception"},"Since Launch (Inception)"),r.a.createElement(L.a,{value:"volatility"},"Volatility"))),r.a.createElement(x.a,{variant:"outlined",className:"control-item"},r.a.createElement(S.a,{id:"category-label"},"Category"),r.a.createElement(_.a,{labelId:"category-label",id:"category",value:this.state.category,onChange:function(e){t.handleUpdateFilter("category",e.target.value),t.handleUpdateFilter("subCategory","all")},label:"Category"},r.a.createElement(L.a,{value:"all"},"All"),r.a.createElement(L.a,{value:"Debt"},"Debt"),r.a.createElement(L.a,{value:"Equity"},"Equity"),r.a.createElement(L.a,{value:"Hybrid"},"Hybrid"),r.a.createElement(L.a,{value:"Others"},"Others"),r.a.createElement(L.a,{value:"Solution Oriented"},"Solution Oriented"))),r.a.createElement(x.a,{variant:"outlined",className:"control-item"},r.a.createElement(S.a,{id:"sub-category-label"},"Sub Category"),r.a.createElement(_.a,{labelId:"sub-category-label",id:"sub-category",value:this.state.subCategory,onChange:function(e){return t.handleUpdateFilter("subCategory",e.target.value)},label:"Sub Category"},r.a.createElement(L.a,{value:"all"},"All"),Object.keys(o).map((function(e,t){return r.a.createElement(L.a,{key:t,value:e},e)}))))):null,this.props.allFunds?r.a.createElement(F.a,{pageStart:0,loadMore:function(){setTimeout((function(){t.setState({pagesLoaded:t.state.pagesLoaded+1})}),500)},hasMore:!0,loader:r.a.createElement("div",{key:this.state.pagesLoaded,className:"push-20"},r.a.createElement(N,null))},null===i||void 0===i?void 0:i.slice(0,10*this.state.pagesLoaded).map((function(e,a){return r.a.createElement(g,{key:a,fund:e,onClick:function(){return t.handleOpenFundDetails(e)}})}))):null)}}]),a}(r.a.PureComponent),P=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).setData=function(e,t){n.setState(Object(o.a)({},e,t))},n.state={allFunds:null},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){f(this.setData)}},{key:"render",value:function(){return r.a.createElement(A,this.state)}}]),a}(r.a.Component);c.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.5a96f46c.chunk.js.map