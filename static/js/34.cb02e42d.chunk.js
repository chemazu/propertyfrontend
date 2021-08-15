(this.webpackJsonpacres=this.webpackJsonpacres||[]).push([[34],{385:function(e,t,s){"use strict";s.r(t);var c=s(41),i=s(42),n=s(44),l=s(43),a=s(1),r=s(0),j=s(55),o=s.n(j),d=s(47),b=s(53),m=s(52),h=s(75),u=s.n(h),x=s(76),O=s(16),p=s(10),g=s(62),f=s(150),v=s(2),N=s(77),y=s.n(N),k=JSON.parse(localStorage.getItem("loggedInUser"));var C=function(e){var t=Object(v.g)(),s=Object(r.useState)({userId:k._id,title:"",name:"",email:"",phone:"",location:"",description:"",status:"",category:"",type:"",area:"",address:"",price:"",bedrooms:"",toilets:"",bathrooms:"",parking:"",furnished:"",serviced:"",images:[],more:""}),c=Object(g.a)(s,2),i=c[0],n=c[1];function l(e){var t=e.target,s=t.name,c=t.value;n(Object(p.a)(Object(p.a)({},i),{},Object(O.a)({},s,c)))}function j(){return(j=Object(x.a)(u.a.mark((function e(s){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.next=3,y.a.post("".concat("https://protected-retreat-60273.herokuapp.com","/request/add"),i);case 3:return c=e.sent,e.next=6,c.data;case 6:e.sent.success?t.push("/profile"):console.log("error");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var o=i.location,d=i.name,b=i.email,m=i.phone,h=i.description,N=i.status,C=i.category,w=i.area,T=i.type,S=i.address,A=i.price,P=i.bedrooms;return Object(a.jsx)("div",{className:"section",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)(f.a.Container,{defaultActiveKey:"tab1",children:Object(a.jsxs)("div",{className:"col-md-12",children:[Object(a.jsx)("h4",{children:"Request Details"}),Object(a.jsxs)("form",{onSubmit:function(e){return j.apply(this,arguments)},children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-3 form-group",children:[Object(a.jsx)("label",{children:"Property Status"}),Object(a.jsxs)("select",{className:"form-control",name:"status",value:N,onChange:l,children:[Object(a.jsx)("option",{value:"For Rent",children:"Select Property Status"}),Object(a.jsx)("option",{value:"For Rent",children:"For Rent"}),Object(a.jsx)("option",{value:"Featured",children:"Featured"}),Object(a.jsx)("option",{value:"For Sale",children:"For Sale"})]})]}),Object(a.jsxs)("div",{className:"col-md-3 form-group",children:[Object(a.jsx)("label",{children:"Property Category"}),Object(a.jsxs)("select",{className:"form-control",name:"category",value:C,onChange:l,children:[Object(a.jsx)("option",{children:"Select Category"}),Object(a.jsx)("option",{value:"Residential",children:"Residential"}),Object(a.jsx)("option",{value:"Commercial",children:"Commercial"}),Object(a.jsx)("option",{value:"Villas",children:"Villas"}),Object(a.jsx)("option",{value:"Apartments",children:"Apartments"}),Object(a.jsx)("option",{value:"Beach House",children:"Beach House"}),Object(a.jsx)("option",{value:"Duplex",children:"Duplex"})]})]}),Object(a.jsxs)("div",{className:"col-md-3",children:[Object(a.jsx)("label",{children:"Property Type"}),Object(a.jsxs)("select",{className:"form-control",name:"type",value:T,onChange:l,children:[Object(a.jsx)("option",{children:"Select property type"}),Object(a.jsx)("option",{value:"House",children:"House"}),Object(a.jsx)("option",{value:"Apartment",children:"Apartment"}),Object(a.jsx)("option",{value:"Condo",children:"Condo"}),Object(a.jsx)("option",{value:"Townhome",children:"Townhome"}),Object(a.jsx)("option",{value:"Villa",children:"Villa"}),Object(a.jsx)("option",{value:"Duplex",children:"Duplex"})]})]}),Object(a.jsxs)("div",{className:"col-md-3 form-group",children:[Object(a.jsx)("label",{children:"Property Space (Sqft)"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Property Space (Sqft)",name:"area",value:w,onChange:l})]}),Object(a.jsxs)("div",{className:"col-md-3 form-group",children:[Object(a.jsx)("label",{children:"Location"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Location",name:"location",value:o,onChange:l})]}),Object(a.jsxs)("div",{className:"col-md-3 form-group",children:[Object(a.jsx)("label",{children:"Property Address"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Property Address",name:"address",value:S,onChange:l})]}),Object(a.jsxs)("div",{className:"col-md-3 form-group",children:[Object(a.jsx)("label",{children:"Beds"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Number of Bathrooms",name:"bedrooms",value:P,onChange:l})]}),Object(a.jsxs)("div",{className:"col-md-3 form-group",children:[Object(a.jsx)("label",{children:"Property Price"}),Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text",children:"\u20a6"})}),Object(a.jsx)("input",{type:"text",className:"form-control",name:"price",value:A,onChange:l,placeholder:"Property Price"})]})]}),Object(a.jsxs)("div",{className:"col-md-12 form-group",children:[Object(a.jsx)("label",{children:"Property Description"}),Object(a.jsx)("textarea",{rows:4,className:"form-control",placeholder:"Property Description",name:"description",value:h,onChange:l})]}),Object(a.jsxs)("div",{className:"col-md-6 form-group",children:[Object(a.jsx)("label",{children:"Name"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Property Address",name:"name",value:d,onChange:l})]}),Object(a.jsxs)("div",{className:"col-md-6 form-group",children:[Object(a.jsx)("label",{children:"Phone Number"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Property Address",name:"phone",value:m,onChange:l})]}),Object(a.jsxs)("div",{className:"col-md-8 form-group",children:[Object(a.jsx)("label",{children:"Email"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Property Address",name:"email",value:b,onChange:l})]})]}),Object(a.jsx)("button",{type:"submit",className:"btn-custom",name:"submit",children:"Submit Request"})]})]})})})})})},w=function(e){Object(n.a)(s,e);var t=Object(l.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsxs)(o.a,{children:[Object(a.jsx)("title",{children:"PropertyLens Real Estate | Submit Listing"}),Object(a.jsx)("meta",{name:"description",content:"#"})]}),Object(a.jsx)(d.a,{}),Object(a.jsx)(b.a,{breadcrumb:{pagename:"Create Property Request"}}),Object(a.jsx)(C,{}),Object(a.jsx)(m.a,{})]})}}]),s}(r.Component);t.default=w},47:function(e,t,s){"use strict";var c=s(41),i=s(42),n=s(44),l=s(43),a=s(1),r=s(0),j=s(48),o=s(49),d=s(51),b=s(8),m=s(45),h=s.n(m),u=function(e){Object(n.a)(s,e);var t=Object(l.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){var e=this.state.isTop?"sticky":"";return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsxs)("aside",{className:h()("main-aside",{open:this.state.navtoggle}),children:[Object(a.jsx)("div",{className:"aside-title",children:Object(a.jsxs)("div",{className:"aside-controls aside-trigger",children:[Object(a.jsx)("h4",{children:"Menu"}),Object(a.jsxs)("div",{className:"close-btn close-dark",onClick:this.navtoggleClass,children:[Object(a.jsx)("span",{}),Object(a.jsx)("span",{})]})]})}),Object(a.jsx)(o.a,{})]}),Object(a.jsx)("div",{className:"aside-overlay aside-trigger",onClick:this.navtoggleClass}),Object(a.jsxs)("header",{className:"main-header header-fw can-sticky header-1 ".concat(e),children:[Object(a.jsx)("div",{className:"top-header",children:Object(a.jsxs)("div",{className:"top-header-inner",children:[Object(a.jsxs)("ul",{className:"social-media",children:[Object(a.jsxs)("li",{children:[" ",Object(a.jsxs)(b.b,{to:"#",children:[" ",Object(a.jsx)("i",{className:"fab fa-facebook-f"})," "]})," "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsxs)(b.b,{to:"#",children:[" ",Object(a.jsx)("i",{className:"fab fa-pinterest-p"})," "]})," "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsxs)(b.b,{to:"#",children:[" ",Object(a.jsx)("i",{className:"fab fa-linkedin-in"})," "]})," "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsxs)(b.b,{to:"#",children:[" ",Object(a.jsx)("i",{className:"fab fa-twitter"})," "]})," "]})]}),Object(a.jsxs)("ul",{className:"top-header-nav",children:[Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(b.b,{to:"/login",children:" Login"})," "]}),Object(a.jsx)("li",{children:"or"}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(b.b,{to:"/register",children:" Signup"})," "]})]})]})}),Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsx)(j.a,{}),Object(a.jsxs)("div",{className:"header-controls",children:[Object(a.jsx)("ul",{className:"header-controls-inner d-none d-lg-flex",children:Object(a.jsx)("li",{children:Object(a.jsxs)(b.b,{to:"/submit-listing",className:"btn-custom primary",children:["Submit Listing ",Object(a.jsx)("i",{className:"fas fa-plus"})," "]})})}),Object(a.jsxs)("div",{className:"aside-toggler aside-trigger",onClick:this.navtoggleClass,children:[Object(a.jsx)("span",{}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{})]})]})]})]})]})}}]),s}(d.a);t.a=u},48:function(e,t,s){"use strict";var c=s(41),i=s(42),n=s(44),l=s(43),a=s(1),r=s(0),j=s(8),o=function(e){Object(n.a)(s,e);var t=Object(l.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsxs)(j.b,{className:"navbar-brand",to:"/",children:[" ",Object(a.jsx)("img",{src:"/propertyfrontend/assets/img/logo.jpg",alt:"logo"})," "]}),Object(a.jsxs)("ul",{className:"navbar-nav",children:[Object(a.jsx)("li",{className:"menu-item menu-item-has-children",children:Object(a.jsx)(j.b,{to:"/",children:"Home"})}),Object(a.jsxs)("li",{className:"menu-item menu-item-has-children",children:[Object(a.jsx)(j.b,{children:"Buy"}),Object(a.jsx)("ul",{className:"submenu",children:Object(a.jsxs)("li",{className:"menu-item",children:[" ",Object(a.jsx)(j.b,{to:"/listing-grid/buy",children:"find properties for sale"})," "]})})]}),Object(a.jsxs)("li",{className:"menu-item menu-item-has-children",children:[Object(a.jsx)(j.b,{children:"Rent"}),Object(a.jsx)("ul",{className:"submenu",children:Object(a.jsxs)("li",{className:"menu-item",children:[" ",Object(a.jsxs)(j.b,{to:"/listing-grid/rent",children:["find properties for rent"," "]})," "]})})]}),Object(a.jsxs)("li",{className:"menu-item menu-item-has-children",children:[Object(a.jsx)(j.b,{to:"/submit-listing",children:"Sell"}),Object(a.jsx)("ul",{className:"submenu",children:Object(a.jsxs)("li",{className:"menu-item",children:[" ",Object(a.jsx)(j.b,{to:"/submit-listing",children:"sell with ease "})," "]})})]}),Object(a.jsxs)("li",{className:"menu-item menu-item-has-children",children:[Object(a.jsx)(j.b,{children:"Request"}),Object(a.jsxs)("ul",{className:"submenu",children:[Object(a.jsxs)("li",{className:"menu-item",children:[" ",Object(a.jsx)(j.b,{to:"/submit-request",children:"Submit Request"})," "]}),Object(a.jsxs)("li",{className:"menu-item",children:[" ",Object(a.jsx)(j.b,{to:"/listing-grid/rent",children:"View Requests"})," "]})]})]}),Object(a.jsxs)("li",{className:"menu-item menu-item-has-children",children:[Object(a.jsx)(j.b,{to:"/agent-archive/craftsmen",children:"Find Craftsmen"}),Object(a.jsxs)("ul",{className:"submenu",children:[Object(a.jsxs)("li",{className:"menu-item",children:[" ",Object(a.jsx)(j.b,{to:"/agent-archive/craftsmen",children:"Find craftsmen and other Pros"})," "]}),Object(a.jsxs)("li",{className:"menu-item",children:[" ",Object(a.jsx)(j.b,{to:"/register",children:"Enlist your trade as a craftsman"})," "]})]})]}),Object(a.jsxs)("li",{className:"menu-item menu-item-has-children",children:[Object(a.jsx)(j.b,{to:"/agency-archive",children:"Agents"}),Object(a.jsxs)("ul",{className:"submenu",children:[Object(a.jsxs)("li",{className:"menu-item",children:[" ",Object(a.jsx)(j.b,{to:"/agency-archive",children:"Estate Agents"})," "]}),Object(a.jsxs)("li",{className:"menu-item",children:[" ",Object(a.jsx)(j.b,{to:"/agency-details",children:"Developers"})," "]})]})]}),Object(a.jsx)("li",{className:"menu-item menu-item-has-children",children:Object(a.jsx)(j.b,{to:"/profile",children:"Profile"})})]})]})}}]),s}(r.Component);t.a=o},49:function(e,t,s){"use strict";var c=s(41),i=s(42),n=s(44),l=s(43),a=s(1),r=s(0),j=s(8),o=s(50),d=function(e){Object(n.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(c.a)(this,s);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).getNextSibling=function(e,t){var s=e.nextElementSibling;if(!t)return s;for(;s;){if(s.matches(t))return s;s=s.nextElementSibling}},e.triggerChild=function(t){var s="";null!==(s=void 0!==e.getNextSibling(t.target,".submenu")?e.getNextSibling(t.target,".submenu"):null)&&void 0!==s&&""!==s&&(s.classList=s.classList.contains("d-block")?"submenu":"submenu d-block")},e}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"aside-scroll",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{className:"menu-section-title",children:"Pages"}),o.length>0?o.map((function(t,s){return Object(a.jsxs)("li",{className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild,children:[t.child?Object(a.jsxs)(j.b,{onClick:function(e){return e.preventDefault()},to:"/",children:[" ",Object(a.jsx)("i",{className:"flaticon-"+t.icon})," ",t.linkText," "]}):Object(a.jsxs)(j.b,{to:t.link,children:[" ",Object(a.jsx)("i",{className:"flaticon-"+t.icon})," ",t.linkText," "]}),t.child?Object(a.jsx)("ul",{className:"submenu",role:"menu",children:t.submenu.map((function(e,t){return Object(a.jsxs)("li",{className:"menu-item ".concat(e.child?"menu-item-has-children":""," "),children:[e.child?Object(a.jsxs)(j.b,{onClick:function(e){return e.preventDefault()},to:"/",children:[" ",e.linkText," "]}):Object(a.jsxs)(j.b,{to:e.link,children:[" ",e.linkText," "]}),e.submenu?Object(a.jsx)("ul",{className:"submenu",children:e.submenu.map((function(e,t){return Object(a.jsx)("li",{className:"menu-item",children:Object(a.jsx)(j.b,{to:e.link,children:e.linkText})},t)}))}):null]},t)}))}):null]},s)})):null,Object(a.jsx)("li",{className:"menu-section-title",children:"Get Social"}),Object(a.jsxs)("li",{className:"menu-item",children:[" ",Object(a.jsxs)(j.b,{to:"#",children:[" ",Object(a.jsx)("i",{className:"flaticon-facebook"}),"Facebook"]})," "]}),Object(a.jsxs)("li",{className:"menu-item",children:[" ",Object(a.jsxs)(j.b,{to:"#",children:[" ",Object(a.jsx)("i",{className:"flaticon-linkedin"})," Linkedin"," "]})," "]}),Object(a.jsxs)("li",{className:"menu-item",children:[" ",Object(a.jsxs)(j.b,{to:"#",children:[" ",Object(a.jsx)("i",{className:"flaticon-twitter"})," Twitter"," "]})," "]}),Object(a.jsxs)("li",{className:"menu-item",children:[" ",Object(a.jsxs)(j.b,{to:"#",children:[" ",Object(a.jsx)("i",{className:"flaticon-instagram"})," Instagram"," "]})," "]})]})})}}]),s}(r.Component);t.a=d},50:function(e){e.exports=JSON.parse('[{"id":1,"linkText":"Home","child":false,"icon":"home"},{"id":2,"linkText":"Buy","child":true,"icon":"company","submenu":[{"id":21,"link":"/listing-grid/buy","linkText":"find properties for sale"}]},{"id":3,"linkText":"Rent","child":true,"icon":"layers","submenu":[{"id":31,"link":"/listing-grid/rent","linkText":"find properties for rent"}]},{"id":4,"linkText":"Sell","child":true,"icon":"company","submenu":[{"id":41,"link":"/submit-listing","linkText":"sell with ease"}]},{"id":5,"linkText":"Request","child":true,"icon":"list","submenu":[{"id":51,"link":"/listing-grid/rent","linkText":"submit request"},{"id":52,"link":"/listing-grid/rent","linkText":"view requests"}]},{"id":6,"linkText":"Find Craftsmen","child":true,"icon":"writing-1","submenu":[{"id":61,"link":"/listing-grid/rent","linkText":"find craftsmen and other pros"},{"id":62,"link":"/register","linkText":"enlist your trade as a craftsman"}]},{"id":5,"linkText":"Agents","child":true,"icon":"headset","submenu":[{"id":51,"link":"/agent-archive","linkText":"Agents Archive"},{"id":52,"link":"/agent-details","linkText":"Agents Details"},{"id":53,"child":true,"linkText":"Agent Profile","submenu":[{"id":531,"link":"/profile","linkText":"My Account"},{"id":532,"link":"/profile-listings","linkText":"My Listings"},{"id":533,"link":"/profile-saved-listings","linkText":"Saved Listings"}]}]},{"id":6,"linkText":"Agency","child":true,"icon":"company","submenu":[{"id":61,"link":"/agency-archive","linkText":"Agency Archive"},{"id":62,"link":"/agency-details","linkText":"Agency Details"}]}]')},51:function(e,t,s){"use strict";var c=s(41),i=s(42),n=s(46),l=s(44),a=s(43),r=s(1),j=s(0),o=function(e){Object(l.a)(s,e);var t=Object(a.a)(s);function s(e){var i;return Object(c.a)(this,s),(i=t.call(this,e)).state={navtoggle:!1},i.navtoggleClass=i.navtoggleClass.bind(Object(n.a)(i)),i}return Object(i.a)(s,[{key:"navtoggleClass",value:function(){this.setState({navtoggle:!this.state.navtoggle})}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){e.setState({isTop:window.scrollY>100})}),!1)}},{key:"render",value:function(){return Object(r.jsx)(j.Fragment,{})}}]),s}(j.Component);t.a=o},52:function(e,t,s){"use strict";var c=s(41),i=s(42),n=s(44),l=s(43),a=s(1),r=s(0),j=s(8),o=s(365),d=s(152),b=function(e){Object(n.a)(s,e);var t=Object(l.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"footer-top",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row footer-btn-wrapper",children:[Object(a.jsxs)("div",{className:"col-lg-7 footer-widget",children:[Object(a.jsx)("h4",{children:"Download Our App"}),Object(a.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s "})]}),Object(a.jsx)("div",{className:"col-lg-5 col-md-12 footer-widget",children:Object(a.jsxs)("div",{className:"footer-btn",children:[Object(a.jsxs)(j.b,{to:"#",className:"btn-custom-2 grey",children:[" ",Object(a.jsx)("i",{className:"flaticon-playstore"}),"Google Play"]}),Object(a.jsxs)(j.b,{to:"#",className:"btn-custom-2 grey",children:[" ",Object(a.jsx)("i",{className:"flaticon-apple"}),"App Store"]})]})})]})})})}}]),s}(r.Component),m=function(e){Object(n.a)(s,e);var t=Object(l.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("footer",{className:"acr-footer footer-2",children:[Object(a.jsx)(b,{}),Object(a.jsx)("div",{className:"footer-middle",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-lg-5 col-sm-12 footer-widget",children:[Object(a.jsxs)("div",{className:"footer-logo",children:[" ",Object(a.jsx)("img",{src:"/propertyfrontend/assets/img/logo.jpg",alt:"acres"})," "]}),Object(a.jsxs)("p",{children:["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"," "]}),Object(a.jsxs)(o.a,{className:"acr-language-selector",children:[Object(a.jsxs)(o.a.Toggle,{as:d.a,className:"dropdownicon",children:[Object(a.jsx)("img",{src:"/propertyfrontend/assets/img/flags/united-states.png",alt:"flag"}),Object(a.jsx)("span",{children:"English"})]}),Object(a.jsx)(o.a.Menu,{className:"dropdown-menu",children:Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[" ",Object(a.jsxs)(j.b,{to:"#",children:[Object(a.jsx)("img",{src:"/propertyfrontend/assets/img/flags/germany.png",alt:"flag"})," ","German"]})," "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsxs)(j.b,{to:"#",children:[Object(a.jsx)("img",{src:"/propertyfrontend/assets/img/flags/russia.png",alt:"flag"})," ","Russian"]})," "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsxs)(j.b,{to:"#",children:[Object(a.jsx)("img",{src:"/propertyfrontend/assets/img/flags/united-states.png",alt:"flag"}),"English"]})," "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsxs)(j.b,{to:"#",children:[Object(a.jsx)("img",{src:"/propertyfrontend/assets/img/flags/spain.png",alt:"flag"})," ","Spanish"]})," "]})]})})]})]}),Object(a.jsxs)("div",{className:"col-lg-2 offset-lg-1 col-sm-4 footer-widget",children:[Object(a.jsx)("h5",{className:"widget-title",children:"Menu"}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(j.b,{to:"/listing-grid/buy",children:"Find home for sale"})," "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(j.b,{to:"/submit-listing",children:"Add Listing"})," "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(j.b,{to:"/listing-grid/rent",children:"Find home for sale"})," "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(j.b,{to:"/blog-grid",children:"Blog"})," "]})]})]}),Object(a.jsxs)("div",{className:"col-lg-2 col-sm-4 footer-widget",children:[Object(a.jsx)("h5",{className:"widget-title",children:"Information"}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(j.b,{to:"/about",children:"About Us"})," "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(j.b,{to:"/contact",children:"Contact Us"})," "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(j.b,{to:"/services",children:"Services"})," "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(j.b,{to:"/faq",children:"FAQ"})," "]})]})]}),Object(a.jsxs)("div",{className:"col-lg-2 col-sm-4 footer-widget",children:[Object(a.jsx)("h5",{className:"widget-title",children:"Legal"}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(j.b,{to:"/legal",children:"Privacy Policy"})," "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(j.b,{to:"/legal",children:"Refund Policy"})," "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(j.b,{to:"/legal",children:"Cookie Policy"})," "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(j.b,{to:"/legal",children:"Legal Terms"})," "]})]})]})]})})}),Object(a.jsx)("div",{className:"footer-bottom",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-lg-7",children:Object(a.jsxs)("p",{className:"m-0",children:["\xa9 Copyright 2020 - ",Object(a.jsx)(j.b,{to:"#",children:"PropertyLens"})," All Rights Reserved."]})}),Object(a.jsx)("div",{className:"col-lg-5",children:Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(j.b,{to:"/listing-map",children:"Find a Home"})," "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(j.b,{to:"/submit-listing",children:"Add Listing"})," "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)(j.b,{to:"/agency-archive",children:"View Agencies"})," "]})]})})]})})})]})}}]),s}(r.Component);t.a=m},53:function(e,t,s){"use strict";var c=s(41),i=s(42),n=s(44),l=s(43),a=s(1),r=s(0),j=s(8),o=function(e){Object(n.a)(s,e);var t=Object(l.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"subheader bg-cover bg-center dark-overlay",style:{backgroundImage:"url(/propertyfrontend/assets/img/subheader.jpg )"},children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"subheader-inner",children:[Object(a.jsx)("h1",{className:"text-white",children:this.props.breadcrumb.pagename}),Object(a.jsx)("nav",{"aria-label":"breadcrumb",children:Object(a.jsxs)("ol",{className:"breadcrumb",children:[Object(a.jsx)("li",{className:"breadcrumb-item",children:Object(a.jsxs)(j.b,{to:"/",children:[" ",Object(a.jsx)("i",{className:"fas fa-home"})," "]})}),Object(a.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:this.props.breadcrumb.pagename})]})})]})})})}}]),s}(r.Component);t.a=o}}]);
//# sourceMappingURL=34.cb02e42d.chunk.js.map