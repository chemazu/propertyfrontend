(this.webpackJsonpacres=this.webpackJsonpacres||[]).push([[35],{103:function(e,s,t){"use strict";var i=t(38),a=t(39),l=t(41),r=t(40),n=t(1),c=t(0),j=t(9),d=function(e){Object(l.a)(t,e);var s=Object(r.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"subheader subheader-2 user-subheader bg-cover bg-center",style:{backgroundImage:"url(/propertyfrontend/assets/img/subheader-2.jpg)"},children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"media",children:[Object(n.jsx)("img",{src:"/propertyfrontend/assets/img/people/1.jpg",alt:"agent"}),Object(n.jsxs)("div",{className:"media-body",children:[Object(n.jsx)("h3",{className:"text-white",children:"Randy Blue"}),Object(n.jsx)("span",{className:"user-email",children:"randy_blue@hotmail.com"})]}),Object(n.jsxs)(j.b,{to:"/submit-listing",className:"btn-custom secondary mr-0",children:["Submit Listing ",Object(n.jsx)("i",{className:"fas mr-0 fa-plus"})," "]})]})})})}}]),t}(c.Component);s.a=d},359:function(e,s,t){"use strict";t.r(s);var i=t(38),a=t(39),l=t(41),r=t(40),n=t(1),c=t(0),j=t(46),d=t.n(j),o=t(47),m=t(103),g=t(48),b=t(9),h=t(49),p=t(332),u=t(334),x=t(144),O=t(336),f=Object(n.jsx)(p.a,{children:"Gallery"}),y=Object(n.jsx)(p.a,{children:"Beds"}),N=Object(n.jsx)(p.a,{children:"Bathrooms"}),v=Object(n.jsx)(p.a,{children:"Square Feet"}),k=function(e){Object(l.a)(t,e);var s=Object(r.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"section",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-lg-4",children:Object(n.jsx)("div",{className:"sidebar sticky-sidebar user-nav sidebar-left",children:Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[" ",Object(n.jsx)(b.b,{to:"/profile",children:" Edit Profile"})," "]}),Object(n.jsxs)("li",{children:[" ",Object(n.jsx)(b.b,{className:"active",to:"/profile-listings",children:"My Listings"})," "]}),Object(n.jsxs)("li",{children:[" ",Object(n.jsx)(b.b,{to:"/profile-saved-listings",children:"Saved Listings"})," "]}),Object(n.jsxs)("li",{children:[" ",Object(n.jsxs)(b.b,{className:"logout",to:"/",children:[Object(n.jsx)("i",{className:"flaticon-shut-down-button"})," Logout"]})," "]})]})})}),Object(n.jsx)("div",{className:"col-lg-8",children:h.slice(0,4).map((function(e,s){return Object(n.jsxs)("div",{className:"listing listing-list",children:[Object(n.jsxs)("div",{className:"listing-thumbnail",children:[Object(n.jsx)(b.b,{to:"/listing-details-v1",children:Object(n.jsx)("img",{src:"/propertyfrontend/"+e.listimg,alt:"listing"})}),Object(n.jsxs)("div",{className:"listing-badges",children:[!0===e.star?Object(n.jsxs)("span",{className:"listing-badge featured",children:[" ",Object(n.jsx)("i",{className:"fas fa-star"})," "]}):"",!0===e.sale?Object(n.jsx)("span",{className:"listing-badge sale",children:"On Sale"}):"",!0===e.pending?Object(n.jsx)("span",{className:"listing-badge pending",children:" Pending"}):"",!0===e.rental?Object(n.jsx)("span",{className:"listing-badge rent",children:" Rental"}):""]}),Object(n.jsxs)("div",{className:"listing-controls",children:[Object(n.jsx)(b.b,{to:"#",className:"favorite",children:Object(n.jsx)("i",{className:"far fa-heart"})}),Object(n.jsx)(b.b,{to:"#",className:"compare",children:Object(n.jsx)("i",{className:"fas fa-sync-alt"})}),Object(n.jsx)(b.b,{to:"#",className:"edit",children:Object(n.jsx)("i",{className:"fas fa-edit"})})]})]}),Object(n.jsxs)("div",{className:"listing-body",children:[Object(n.jsxs)("div",{className:"listing-author",children:[Object(n.jsx)("img",{src:"/propertyfrontend/"+e.authorimg,alt:"author"}),Object(n.jsxs)("div",{className:"listing-author-body",children:[Object(n.jsxs)("p",{children:[" ",Object(n.jsx)(b.b,{to:"#",children:e.authorname})," "]}),Object(n.jsx)("span",{className:"listing-date",children:e.postdate})]}),Object(n.jsxs)(u.a,{className:"options-dropdown",children:[Object(n.jsx)(u.a.Toggle,{as:x.a,children:Object(n.jsx)("i",{className:"fas fa-ellipsis-v"})}),Object(n.jsx)(u.a.Menu,{className:"dropdown-menu-right",children:Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[" ",Object(n.jsxs)(b.b,{to:"tel:+123456789",children:[" ",Object(n.jsx)("i",{className:"fas fa-phone"})," Call Agent"]})," "]}),Object(n.jsxs)("li",{children:[" ",Object(n.jsxs)(b.b,{to:"mailto:+123456789",children:[" ",Object(n.jsx)("i",{className:"fas fa-envelope"})," Send Message"]})," "]}),Object(n.jsxs)("li",{children:[" ",Object(n.jsxs)(b.b,{to:"/listing-details-v1",children:[" ",Object(n.jsx)("i",{className:"fas fa-bookmark"})," Book Tour"]})," "]})]})})]})]}),Object(n.jsxs)("h5",{className:"listing-title",children:[" ",Object(n.jsx)(b.b,{to:"/listing-details-v1",title:e.title,children:e.title})," "]}),Object(n.jsxs)("span",{className:"listing-price",children:[(new Intl.NumberFormat).format(e.monthlyprice.toFixed(2)),"$ ",Object(n.jsx)("span",{children:"/month"})," "]}),Object(n.jsx)("p",{className:"listing-text",children:e.text}),Object(n.jsxs)("div",{className:"acr-listing-icons",children:[Object(n.jsx)(O.a,{overlay:y,children:Object(n.jsxs)("div",{className:"acr-listing-icon",children:[Object(n.jsx)("i",{className:"flaticon-bedroom"}),Object(n.jsx)("span",{className:"acr-listing-icon-value",children:e.beds})]})}),Object(n.jsx)(O.a,{overlay:N,children:Object(n.jsxs)("div",{className:"acr-listing-icon",children:[Object(n.jsx)("i",{className:"flaticon-bathroom"}),Object(n.jsx)("span",{className:"acr-listing-icon-value",children:e.bathrooms})]})}),Object(n.jsx)(O.a,{overlay:v,children:Object(n.jsxs)("div",{className:"acr-listing-icon",children:[Object(n.jsx)("i",{className:"flaticon-ruler"}),Object(n.jsx)("span",{className:"acr-listing-icon-value",children:(new Intl.NumberFormat).format(e.area)})]})})]}),Object(n.jsxs)("div",{className:"listing-gallery-wrapper",children:[Object(n.jsx)(b.b,{to:"/listing-details-v1",className:"btn-custom btn-sm secondary",children:"View Details"}),Object(n.jsx)(O.a,{overlay:f,children:Object(n.jsxs)(b.b,{to:"#",className:"listing-gallery",children:[" ",Object(n.jsx)("i",{className:"fas fa-camera"})," "]})})]})]})]},s)}))})]})})})}}]),t}(c.Component),M=function(e){Object(l.a)(t,e);var s=Object(r.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){return Object(n.jsxs)(c.Fragment,{children:[Object(n.jsxs)(d.a,{children:[Object(n.jsx)("title",{children:"PropertyLens Real Estate  | My Listings"}),Object(n.jsx)("meta",{name:"description",content:"#"})]}),Object(n.jsx)(o.a,{}),Object(n.jsx)(m.a,{}),Object(n.jsx)(k,{}),Object(n.jsx)(g.a,{})]})}}]),t}(c.Component);s.default=M},49:function(e){e.exports=JSON.parse('[{"id":1,"gridimg":"assets/img/listings/1.jpg","listimg":"assets/img/listings-list/1.jpg","title":"Iris Watson, Frederick Nebraska 20620","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":true,"sale":false,"pending":true,"rental":false,"recent":true},{"id":2,"gridimg":"assets/img/listings/2.jpg","listimg":"assets/img/listings-list/2.jpg","title":"Theodore Lowe, Azusa New York 39531","authorimg":"assets/img/people/1.jpg","authorname":"Randy Blue","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":true,"sale":true,"pending":false,"rental":false,"recent":true},{"id":3,"gridimg":"assets/img/listings/3.jpg","listimg":"assets/img/listings-list/3.jpg","title":"Iris Watson, Frederick Nebraska 20620","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":false,"sale":false,"pending":true,"rental":false,"recent":true},{"id":4,"gridimg":"assets/img/listings/4.jpg","listimg":"assets/img/listings-list/4.jpg","title":"Iris Watson, Frederick Nebraska 20620","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":false,"sale":true,"pending":false,"rental":false,"recent":true},{"id":5,"gridimg":"assets/img/listings/5.jpg","listimg":"assets/img/listings-list/5.jpg","title":"Iris Watson, Frederick Nebraska 20620","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":false,"sale":true,"pending":false,"rental":false,"recent":false},{"id":6,"gridimg":"assets/img/listings/1.jpg","listimg":"assets/img/listings-list/6.jpg","title":"Iris Watson, Frederick Nebraska 20620","authorimg":"assets/img/people/4.jpg","authorname":"Mike Stanly","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":false,"sale":false,"pending":false,"rental":true,"recent":false},{"id":7,"gridimg":"assets/img/listings/6.jpg","listimg":"assets/img/listings-list/7.jpg","title":"Iris Watson, Frederick Nebraska 20620","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":true,"sale":false,"pending":true,"rental":false,"recent":false},{"id":8,"gridimg":"assets/img/listings/7.jpg","listimg":"assets/img/listings-list/8.jpg","title":"Theodore Lowe, Azusa New York 39531","authorimg":"assets/img/people/1.jpg","authorname":"Randy Blue","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":true,"sale":true,"pending":false,"rental":false,"recent":false}]')}}]);
//# sourceMappingURL=35.751a0a80.chunk.js.map