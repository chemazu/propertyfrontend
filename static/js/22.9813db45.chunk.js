(this.webpackJsonpacres=this.webpackJsonpacres||[]).push([[22],{123:function(e,s,t){"use strict";var i=t(38),a=t(39),c=t(41),n=t(40),r=t(1),l=t(0),o=t(9),j=function(e){Object(c.a)(t,e);var s=Object(n.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"cta cta-1",children:Object(r.jsxs)("div",{className:"row align-items-center",children:[Object(r.jsx)("div",{className:"col-lg-4",children:Object(r.jsx)("h3",{children:"Need More Information On Real Estate?"})}),Object(r.jsxs)("div",{className:"offset-lg-1 col-lg-7",children:[Object(r.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."}),Object(r.jsx)(o.b,{to:"/contact",className:"btn-custom-2 light",children:"Find Out More"})]})]})})})}}]),t}(l.Component);s.a=j},124:function(e,s,t){"use strict";var i=t(52),a=t(38),c=t(39),n=t(44),r=t(41),l=t(40),o=t(1),j=t(0),d=t(9),m=t(72),b=t.n(m),h=t(73),p=function(e){Object(r.a)(t,e);var s=Object(l.a)(t);function t(e){var i;return Object(a.a)(this,t),(i=s.call(this,e)).next=i.next.bind(Object(n.a)(i)),i.previous=i.previous.bind(Object(n.a)(i)),i}return Object(c.a)(t,[{key:"next",value:function(){this.slider.slickNext()}},{key:"previous",value:function(){this.slider.slickPrev()}},{key:"render",value:function(){var e=this;return Object(o.jsx)("div",{className:"section pt-0 agents",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"section-title-wrap section-header flex-header",children:[Object(o.jsxs)("div",{className:"section-title-text",children:[Object(o.jsx)("h5",{className:"custom-primary",children:"Our Back bone"}),Object(o.jsx)("h2",{className:"title",children:"Meet Our Agents"})]}),Object(o.jsxs)("div",{className:"acr-arrows primary-arrows",children:[Object(o.jsx)("i",{className:"slider-prev fas fa-arrow-left slick-arrow",onClick:this.previous}),Object(o.jsx)("i",{className:"slider-next fas fa-arrow-right slick-arrow",onClick:this.next})]})]}),Object(o.jsx)(b.a,Object(i.a)(Object(i.a)({className:"agents-slider",ref:function(s){return e.slider=s}},{slidesToShow:3,slidesToScroll:1,arrows:!1,dots:!1,responsive:[{breakpoint:991,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]}),{},{children:h.slice(0,4).map((function(e,s){return Object(o.jsx)("div",{className:"col-12",children:Object(o.jsxs)("div",{className:"acr-agent",children:[!0===e.star?Object(o.jsx)("div",{className:"listing-badge featured",children:Object(o.jsx)("i",{className:"fas fa-star"})}):"",Object(o.jsxs)("div",{className:"acr-dots-wrapper acr-agent-thumb",children:[Object(o.jsx)("div",{className:"acr-dots"}),Object(o.jsx)(d.b,{to:"/agent-details",children:Object(o.jsx)("img",{src:"/property/"+e.img,alt:"agent"})})]}),Object(o.jsxs)("div",{className:"acr-agent-body",children:[Object(o.jsxs)("h6",{children:[" ",Object(o.jsx)(d.b,{to:"/agent-details",children:e.name})," "]}),Object(o.jsx)("span",{children:e.post}),Object(o.jsx)("p",{children:e.text}),Object(o.jsx)(d.b,{to:"/agent-details",className:"btn-custom secondary btn-sm",children:"View Profile"})]})]})},s)}))}))]})})}}]),t}(j.Component);s.a=p},125:function(e){e.exports=JSON.parse('[{"id":1,"title":"Perfect service","comment":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry","author":"John Mishlen","post":"Executive CEO at company","authorimg":"assets/img/people/1.jpg","rating":5},{"id":2,"title":"Competitive prices","comment":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry","author":"Moe Sondi","post":"Executive CEO at company","authorimg":"assets/img/people/2.jpg","rating":4},{"id":3,"title":"Great agents","comment":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry","author":"Mandy Floss","post":"Executive CEO at company","authorimg":"assets/img/people/3.jpg","rating":4}]')},143:function(e,s,t){"use strict";var i=t(38),a=t(39),c=t(41),n=t(40),r=t(1),l=t(0),o=t(125);function j(e){for(var s=[],t=0;t<5;t++)s.push(Object(r.jsx)("i",{className:"fas fa-star"},t));if(e&&e>0)for(var i=0;i<=e-1;i++)s[i]=Object(r.jsx)("i",{className:"fas fa-star active"},i);return s}var d=function(e){Object(c.a)(t,e);var s=Object(n.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"section section-padding",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"section-title-wrap section-header",children:[Object(r.jsx)("h5",{className:"custom-primary",children:"Testimonials"}),Object(r.jsx)("h2",{className:"title",children:"What Are People Saying"})]}),Object(r.jsx)("div",{className:"row",children:o.slice(0,3).map((function(e,s){return Object(r.jsx)("div",{className:"col-lg-4 col-md-12",children:Object(r.jsxs)("div",{className:"acr-testimonial",children:[Object(r.jsxs)("div",{className:"acr-testimonial-body",children:[Object(r.jsx)("h5",{children:e.title}),Object(r.jsx)("div",{className:"acr-rating-wrapper",children:Object(r.jsx)("div",{className:"acr-rating",children:j(e.rating)})}),Object(r.jsx)("p",{children:e.comment})]}),Object(r.jsxs)("div",{className:"acr-testimonial-author",children:[Object(r.jsx)("img",{src:"/property/"+e.authorimg,alt:"testimonial"}),Object(r.jsxs)("div",{className:"acr-testimonial-author-inner",children:[Object(r.jsx)("h6",{children:e.author}),Object(r.jsx)("span",{children:e.post})]})]})]})},s)}))})]})})}}]),t}(l.Component);s.a=d},200:function(e){e.exports=JSON.parse('{"a":[{"id":1,"icon":"company","img":"assets/img/categories/1.jpg","title":"Commercial","numberofitem":90,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{"id":2,"icon":"house","img":"assets/img/categories/2.jpg","title":"Residential","numberofitem":433,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{"id":3,"icon":"villa","img":"assets/img/categories/3.jpg","title":"Villas","numberofitem":221,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{"id":4,"icon":"apartment","img":"assets/img/categories/4.jpg","title":"Apartments","numberofitem":185,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{"id":5,"icon":"beach-house","img":"assets/img/categories/5.jpg","title":"Beach House","numberofitem":230,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{"id":6,"icon":"garage","img":"assets/img/categories/6.jpg","title":"Duplex","numberofitem":365,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}]}')},335:function(e,s,t){"use strict";t.r(s);var i=t(38),a=t(39),c=t(41),n=t(40),r=t(1),l=t(0),o=t(46),j=t.n(o),d=t(47),m=t(48),b=t(123),h=t(124),p=t(52),g=t(44),x=t(9),u=t(72),O=t.n(u),y=[{id:1,img:"assets/img/banner/1.jpg",price:852e3,emitime:60,location:"Iris Watson, Frederick Nebraska 20620",beds:3,baths:2,area:2499,text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",type:"House",view:"City View",size:"89 Acres",condition:"Brand New"},{id:2,img:"assets/img/banner/2.jpg",price:12e5,emitime:60,location:"Theodore Lowe, Azusa New York 39531",beds:4,baths:3,area:3120,text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",type:"Duplex",view:"Forest View",size:"180 Acres",condition:"Brand New"}],v=function(e){Object(c.a)(t,e);var s=Object(n.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=s.call(this,e)).next=a.next.bind(Object(g.a)(a)),a.previous=a.previous.bind(Object(g.a)(a)),a}return Object(a.a)(t,[{key:"next",value:function(){this.slider.slickNext()}},{key:"previous",value:function(){this.slider.slickPrev()}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{className:"banner banner-2",children:[Object(r.jsx)(O.a,Object(p.a)(Object(p.a)({className:"banner-slider",ref:function(s){return e.slider=s}},{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1,fade:!0}),{},{children:y.map((function(e,s){return Object(r.jsxs)("div",{className:"banner-item",children:[Object(r.jsx)("div",{className:"banner-inner bg-cover bg-center dark-overlay",style:{backgroundImage:"url("+e.img+")"}}),Object(r.jsxs)("div",{className:"acr-listing-details",children:[Object(r.jsxs)("div",{className:"acr-listing-section",children:[Object(r.jsx)("div",{className:"acr-listing-nav",children:Object(r.jsx)(x.b,{to:"/listing-details-v1",className:"btn-custom secondary",children:"See more details"})}),Object(r.jsx)("div",{className:"acr-listing-section-body",children:Object(r.jsxs)("div",{className:"acr-listing-section-price",children:[Object(r.jsx)("span",{children:"For Sale"}),Object(r.jsxs)("h3",{children:["$",(new Intl.NumberFormat).format(e.price.toFixed(2))]}),Object(r.jsx)("span",{children:"Est. Mortgage"}),Object(r.jsxs)("p",{children:["$",(new Intl.NumberFormat).format((e.price/e.emitime).toFixed(2)),"/mo"]})]})})]}),Object(r.jsx)("div",{className:"acr-listing-section",children:Object(r.jsxs)("div",{className:"acr-listing-section-body",children:[Object(r.jsxs)("h4",{children:[" ",Object(r.jsx)(x.b,{to:"/listing-details-v1",children:e.location})," "]}),Object(r.jsxs)("div",{className:"acr-listing-icons",children:[Object(r.jsxs)("div",{className:"acr-listing-icon",children:[Object(r.jsx)("i",{className:"flaticon-bedroom"}),Object(r.jsx)("span",{children:"Beds"}),Object(r.jsx)("span",{className:"acr-listing-icon-value",children:e.beds})]}),Object(r.jsxs)("div",{className:"acr-listing-icon",children:[Object(r.jsx)("i",{className:"flaticon-bathroom"}),Object(r.jsx)("span",{children:"Baths"}),Object(r.jsx)("span",{className:"acr-listing-icon-value",children:e.baths})]}),Object(r.jsxs)("div",{className:"acr-listing-icon",children:[Object(r.jsx)("i",{className:"flaticon-ruler"}),Object(r.jsx)("span",{children:"Sqft"}),Object(r.jsx)("span",{className:"acr-listing-icon-value",children:(new Intl.NumberFormat).format(e.area.toFixed(2))})]})]}),Object(r.jsx)("p",{children:e.text})]})}),Object(r.jsxs)("div",{className:"acr-listing-section",children:[Object(r.jsxs)("div",{className:"acr-listing-controls",children:[Object(r.jsx)(x.b,{to:"#",className:"acr-listing-control",children:Object(r.jsx)("i",{className:"flaticon-share"})}),Object(r.jsx)(x.b,{to:"#",className:"acr-listing-control",children:Object(r.jsx)("i",{className:"flaticon-star"})}),Object(r.jsxs)(x.b,{to:"#",className:"acr-schedule-tour acr-listing-control",children:[Object(r.jsx)("i",{className:"flaticon-event"}),Object(r.jsx)("span",{children:"Schedule Link tour"})]})]}),Object(r.jsx)("div",{className:"acr-listing-section-body",children:Object(r.jsx)("div",{className:"acr-listing-meta",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-lg-6 col-md-3 col-sm-3",children:Object(r.jsxs)("div",{className:"acr-listing-meta-item",children:[Object(r.jsx)("span",{children:"Type"}),Object(r.jsx)("p",{children:e.type})]})}),Object(r.jsx)("div",{className:"col-lg-6 col-md-3 col-sm-3",children:Object(r.jsxs)("div",{className:"acr-listing-meta-item",children:[Object(r.jsx)("span",{children:"View"}),Object(r.jsx)("p",{children:e.view})]})}),Object(r.jsx)("div",{className:"col-lg-6 col-md-3 col-sm-3",children:Object(r.jsxs)("div",{className:"acr-listing-meta-item",children:[Object(r.jsx)("span",{children:"Lot Size"}),Object(r.jsx)("p",{children:e.size})]})}),Object(r.jsx)("div",{className:"col-lg-6 col-md-3 col-sm-3",children:Object(r.jsxs)("div",{className:"acr-listing-meta-item",children:[Object(r.jsx)("span",{children:"Condition"}),Object(r.jsx)("p",{children:e.condition})]})})]})})})]})]})]},s)}))})),Object(r.jsxs)("div",{className:"acr-arrows",children:[Object(r.jsx)("i",{className:"slider-prev fas fa-arrow-left slick-arrow",onClick:this.previous}),Object(r.jsx)("i",{className:"slider-next fas fa-arrow-right slick-arrow",onClick:this.next})]})]})}}]),t}(l.Component),N=t(200),f=function(e){Object(c.a)(t,e);var s=Object(n.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"section section-padding",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"section-title-wrap section-header",children:[Object(r.jsx)("h5",{className:"custom-primary",children:"Categories"}),Object(r.jsx)("h2",{className:"title",children:"Browse By Category"})]}),Object(r.jsx)("div",{className:"row",children:N.a.slice(0,8).map((function(e,s){return Object(r.jsx)("div",{className:"col-lg-4 col-md-6",children:Object(r.jsx)("div",{className:"acr-category",children:Object(r.jsxs)("div",{className:"acr-category-thumb",children:[Object(r.jsx)("i",{className:"flaticon-"+e.icon}),Object(r.jsx)(x.b,{to:"#",children:Object(r.jsx)("img",{src:"/property/"+e.img,alt:"category"})}),Object(r.jsxs)("div",{className:"acr-category-body",children:[Object(r.jsxs)("h5",{children:[" ",Object(r.jsx)(x.b,{to:"#",children:e.title})," "]}),Object(r.jsxs)("span",{children:[e.numberofitem," Listings"]})]})]})})},s)}))})]})})}}]),t}(l.Component),w=function(e){Object(c.a)(t,e);var s=Object(n.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"section section-padding light-bg",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"section-title-wrap section-header",children:[Object(r.jsx)("h5",{className:"custom-primary",children:"Latest News"}),Object(r.jsx)("h2",{className:"title",children:"From Our Blog"})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-lg-6",children:Object(r.jsxs)("article",{className:"post",children:[Object(r.jsx)("div",{className:"post-thumbnail",children:Object(r.jsx)(x.b,{to:"/blog-single",children:Object(r.jsx)("img",{src:"/property/assets/img/blog/1.jpg",alt:"blog post"})})}),Object(r.jsxs)("div",{className:"post-body",children:[Object(r.jsxs)("h5",{className:"post-title",children:[" ",Object(r.jsx)(x.b,{to:"/blog-single",children:"What agencies are looking for in an agent"})," "]}),Object(r.jsx)("p",{className:"post-text",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}),Object(r.jsxs)("div",{className:"post-controls",children:[Object(r.jsx)(x.b,{to:"#",className:"btn-custom secondary btn-sm",children:"Read More"}),Object(r.jsxs)("div",{className:"post-comment-authors",children:[Object(r.jsx)("span",{children:"Comments by: "}),Object(r.jsxs)("div",{className:"post-comment-authors-img",children:[Object(r.jsxs)(x.b,{to:"#",children:[" ",Object(r.jsx)("img",{src:"/property/assets/img/people/3.jpg",alt:"comment author"})," "]}),Object(r.jsxs)(x.b,{to:"#",children:[" ",Object(r.jsx)("img",{src:"/property/assets/img/people/4.jpg",alt:"comment author"})," "]}),Object(r.jsx)(x.b,{to:"#",children:" +3 "})]})]})]})]})]})}),Object(r.jsxs)("div",{className:"col-lg-6",children:[Object(r.jsxs)("article",{className:"post post-list",children:[Object(r.jsx)("div",{className:"post-thumbnail",children:Object(r.jsx)(x.b,{to:"/blog-single",children:Object(r.jsx)("img",{src:"/property/assets/img/blog/2.jpg",alt:"blog post"})})}),Object(r.jsxs)("div",{className:"post-body",children:[Object(r.jsxs)("h5",{className:"post-title",children:[" ",Object(r.jsx)(x.b,{to:"/blog-single",children:"Changing the way we sell and buy real estate"})," "]}),Object(r.jsx)("p",{className:"post-text",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"})]})]}),Object(r.jsxs)("article",{className:"post post-list",children:[Object(r.jsx)("div",{className:"post-thumbnail",children:Object(r.jsx)(x.b,{to:"/blog-single",children:Object(r.jsx)("img",{src:"/property/assets/img/blog/3.jpg",alt:"blog post"})})}),Object(r.jsxs)("div",{className:"post-body",children:[Object(r.jsxs)("h5",{className:"post-title",children:[" ",Object(r.jsx)(x.b,{to:"/blog-single",children:"Families, its the best time to start buying"})," "]}),Object(r.jsx)("p",{className:"post-text",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"})]})]})]})]})]})})}}]),t}(l.Component),k=t(332),I=t(334),L=t(144),C=t(336),F=t(49),S=Object(r.jsx)(k.a,{children:"Gallery"}),M=Object(r.jsx)(k.a,{children:"Beds"}),T=Object(r.jsx)(k.a,{children:"Bathrooms"}),B=Object(r.jsx)(k.a,{children:"Square Feet"}),E=function(e){Object(c.a)(t,e);var s=Object(n.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=s.call(this,e)).next=a.next.bind(Object(g.a)(a)),a.previous=a.previous.bind(Object(g.a)(a)),a}return Object(a.a)(t,[{key:"next",value:function(){this.slider.slickNext()}},{key:"previous",value:function(){this.slider.slickPrev()}},{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{className:"section section-padding pt-0 listings",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"section-title-wrap section-header flex-header",children:[Object(r.jsxs)("div",{className:"section-title-text",children:[Object(r.jsx)("h5",{className:"custom-primary",children:"Find Your Home"}),Object(r.jsx)("h2",{className:"title",children:"Recent Listings"})]}),Object(r.jsxs)("div",{className:"acr-arrows primary-arrows",children:[Object(r.jsx)("i",{className:"slider-prev fas fa-arrow-left slick-arrow",onClick:this.previous}),Object(r.jsx)("i",{className:"slider-next fas fa-arrow-right slick-arrow",onClick:this.next})]})]}),Object(r.jsx)(O.a,Object(p.a)(Object(p.a)({className:"listings-slider",ref:function(s){return e.slider=s}},{slidesToShow:3,slidesToScroll:1,arrows:!1,dots:!1,responsive:[{breakpoint:991,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]}),{},{children:F.slice(0,4).map((function(e,s){return Object(r.jsx)("div",{className:"col-12",children:Object(r.jsxs)("div",{className:"listing",children:[Object(r.jsxs)("div",{className:"listing-thumbnail",children:[Object(r.jsx)(x.b,{to:"/listing-details-v1",children:Object(r.jsx)("img",{src:"/property/"+e.gridimg,alt:"listing"})}),Object(r.jsxs)("div",{className:"listing-badges",children:[!0===e.star?Object(r.jsxs)("span",{className:"listing-badge featured",children:[" ",Object(r.jsx)("i",{className:"fas fa-star"})," "]}):"",!0===e.sale?Object(r.jsx)("span",{className:"listing-badge sale",children:"On Sale"}):"",!0===e.pending?Object(r.jsx)("span",{className:"listing-badge pending",children:" Pending"}):"",!0===e.rental?Object(r.jsx)("span",{className:"listing-badge rent",children:" Rental"}):""]}),Object(r.jsxs)("div",{className:"listing-controls",children:[Object(r.jsx)(x.b,{to:"#",className:"favorite",children:Object(r.jsx)("i",{className:"far fa-heart"})}),Object(r.jsx)(x.b,{to:"#",className:"compare",children:Object(r.jsx)("i",{className:"fas fa-sync-alt"})})]})]}),Object(r.jsxs)("div",{className:"listing-body",children:[Object(r.jsxs)("div",{className:"listing-author",children:[Object(r.jsx)("img",{src:"/property/"+e.authorimg,alt:"author"}),Object(r.jsxs)("div",{className:"listing-author-body",children:[Object(r.jsxs)("p",{children:[" ",Object(r.jsx)(x.b,{to:"#",children:e.authorname})," "]}),Object(r.jsx)("span",{className:"listing-date",children:e.postdate})]}),Object(r.jsxs)(I.a,{className:"options-dropdown",children:[Object(r.jsx)(I.a.Toggle,{as:L.a,children:Object(r.jsx)("i",{className:"fas fa-ellipsis-v"})}),Object(r.jsx)(I.a.Menu,{className:"dropdown-menu-right",children:Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:[" ",Object(r.jsxs)(x.b,{to:"tel:+123456789",children:[" ",Object(r.jsx)("i",{className:"fas fa-phone"})," Call Agent"]})," "]}),Object(r.jsxs)("li",{children:[" ",Object(r.jsxs)(x.b,{to:"mailto:+123456789",children:[" ",Object(r.jsx)("i",{className:"fas fa-envelope"})," Send Message"]})," "]}),Object(r.jsxs)("li",{children:[" ",Object(r.jsxs)(x.b,{to:"/listing-details-v1",children:[" ",Object(r.jsx)("i",{className:"fas fa-bookmark"})," Book Tour"]})," "]})]})})]})]}),Object(r.jsxs)("h5",{className:"listing-title",children:[" ",Object(r.jsx)(x.b,{to:"/listing-details-v1",title:e.title,children:e.title})," "]}),Object(r.jsxs)("span",{className:"listing-price",children:[(new Intl.NumberFormat).format(e.monthlyprice.toFixed(2)),"$ ",Object(r.jsx)("span",{children:"/month"})," "]}),Object(r.jsx)("p",{className:"listing-text",children:e.text}),Object(r.jsxs)("div",{className:"acr-listing-icons",children:[Object(r.jsx)(C.a,{overlay:M,children:Object(r.jsxs)("div",{className:"acr-listing-icon",children:[Object(r.jsx)("i",{className:"flaticon-bedroom"}),Object(r.jsx)("span",{className:"acr-listing-icon-value",children:e.beds})]})}),Object(r.jsx)(C.a,{overlay:T,children:Object(r.jsxs)("div",{className:"acr-listing-icon",children:[Object(r.jsx)("i",{className:"flaticon-bathroom"}),Object(r.jsx)("span",{className:"acr-listing-icon-value",children:e.bathrooms})]})}),Object(r.jsx)(C.a,{overlay:B,children:Object(r.jsxs)("div",{className:"acr-listing-icon",children:[Object(r.jsx)("i",{className:"flaticon-ruler"}),Object(r.jsx)("span",{className:"acr-listing-icon-value",children:(new Intl.NumberFormat).format(e.area)})]})})]}),Object(r.jsxs)("div",{className:"listing-gallery-wrapper",children:[Object(r.jsx)(x.b,{to:"/listing-details-v1",className:"btn-custom btn-sm secondary",children:"View Details"}),Object(r.jsx)(C.a,{overlay:S,children:Object(r.jsxs)(x.b,{to:"#",className:"listing-gallery",children:[" ",Object(r.jsx)("i",{className:"fas fa-camera"})," "]})})]})]})]})},s)}))}))]})})}}]),t}(l.Component),A=function(e){Object(c.a)(t,e);var s=Object(n.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"acr-single-agent",children:[Object(r.jsxs)("div",{className:"acr-single-agent-thumb",children:[Object(r.jsx)("img",{src:"/property/assets/img/person.png",alt:"agent"}),Object(r.jsx)("div",{className:"transparent-square",children:Object(r.jsx)("div",{})})]}),Object(r.jsxs)("div",{className:"acr-single-agent-body",children:[Object(r.jsx)("h3",{children:"Agent Of The Month"}),Object(r.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"}),Object(r.jsxs)("div",{className:"acr-single-agent-meta",children:[Object(r.jsx)("h5",{children:"Jonathan Blue"}),Object(r.jsx)("span",{children:"Agent at Company"})]}),Object(r.jsxs)("div",{className:"acr-rating",children:[Object(r.jsx)("i",{className:"fas fa-star active"}),Object(r.jsx)("i",{className:"fas fa-star active"}),Object(r.jsx)("i",{className:"fas fa-star active"}),Object(r.jsx)("i",{className:"fas fa-star active"}),Object(r.jsx)("i",{className:"fas fa-star active"})]})]})]})})})}}]),t}(l.Component),R=t(143),H=Object(r.jsx)(k.a,{children:"Gallery"}),P=Object(r.jsx)(k.a,{children:"Beds"}),W=Object(r.jsx)(k.a,{children:"Bathrooms"}),J=Object(r.jsx)(k.a,{children:"Square Feet"}),z=function(e){Object(c.a)(t,e);var s=Object(n.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=s.call(this,e)).next=a.next.bind(Object(g.a)(a)),a.previous=a.previous.bind(Object(g.a)(a)),a}return Object(a.a)(t,[{key:"next",value:function(){this.slider.slickNext()}},{key:"previous",value:function(){this.slider.slickPrev()}},{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{className:"section light-bg",children:Object(r.jsxs)("div",{className:"container top-listings",children:[Object(r.jsxs)("div",{className:"acr-arrows",children:[Object(r.jsx)("i",{className:"slider-prev fas fa-arrow-left slick-arrow",onClick:this.previous}),Object(r.jsx)("i",{className:"slider-next fas fa-arrow-right slick-arrow",onClick:this.next})]}),Object(r.jsxs)("div",{className:"section-title-wrap section-header",children:[Object(r.jsx)("h5",{className:"custom-primary",children:"Trending"}),Object(r.jsx)("h2",{className:"title",children:"Our Top Listings"})]}),Object(r.jsx)(O.a,Object(p.a)(Object(p.a)({className:"top-listings-slider col-12",ref:function(s){return e.slider=s}},{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1,autoplay:!0,responsive:[{breakpoint:991,settings:{arrows:!1}}]}),{},{children:F.slice(0,4).map((function(e,s){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"acr-top-listing-item bg-cover dark-overlay bg-center",style:{backgroundImage:"url(/property/"+e.gridimg+")"},children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-lg-6",children:Object(r.jsx)("div",{className:"acr-top-listing-body listing",children:Object(r.jsxs)("div",{className:"listing-body",children:[Object(r.jsxs)("h5",{className:"listing-title",children:[" ",Object(r.jsx)(x.b,{to:"/listing-details-v1",title:e.title,children:e.title})," "]}),Object(r.jsxs)("div",{className:"listing-author",children:[Object(r.jsx)("img",{src:"/property/"+e.authorimg,alt:"author"}),Object(r.jsxs)("div",{className:"listing-author-body",children:[Object(r.jsxs)("p",{children:[" ",Object(r.jsx)(x.b,{to:"#",children:e.authorname})," "]}),Object(r.jsx)("span",{className:"listing-date",children:e.postdate})]}),Object(r.jsxs)(I.a,{className:"options-dropdown",children:[Object(r.jsx)(I.a.Toggle,{as:L.a,children:Object(r.jsx)("i",{className:"fas fa-ellipsis-v"})}),Object(r.jsx)(I.a.Menu,{className:"dropdown-menu-right",children:Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:[" ",Object(r.jsxs)(x.b,{to:"tel:+123456789",children:[" ",Object(r.jsx)("i",{className:"fas fa-phone"})," Call Agent"]})," "]}),Object(r.jsxs)("li",{children:[" ",Object(r.jsxs)(x.b,{to:"mailto:+123456789",children:[" ",Object(r.jsx)("i",{className:"fas fa-envelope"})," Send Message"]})," "]}),Object(r.jsxs)("li",{children:[" ",Object(r.jsxs)(x.b,{to:"/listing-details-v1",children:[" ",Object(r.jsx)("i",{className:"fas fa-bookmark"})," Book Tour"]})," "]})]})})]})]}),Object(r.jsxs)("span",{className:"listing-price",children:[(new Intl.NumberFormat).format(e.monthlyprice.toFixed(2)),"$ ",Object(r.jsx)("span",{children:"/month"})," "]}),Object(r.jsx)("p",{className:"listing-text",children:e.text}),Object(r.jsxs)("div",{className:"acr-listing-icons",children:[Object(r.jsx)(C.a,{overlay:P,children:Object(r.jsxs)("div",{className:"acr-listing-icon",children:[Object(r.jsx)("i",{className:"flaticon-bedroom"}),Object(r.jsx)("span",{className:"acr-listing-icon-value",children:e.beds})]})}),Object(r.jsx)(C.a,{overlay:W,children:Object(r.jsxs)("div",{className:"acr-listing-icon",children:[Object(r.jsx)("i",{className:"flaticon-bathroom"}),Object(r.jsx)("span",{className:"acr-listing-icon-value",children:e.bathrooms})]})}),Object(r.jsx)(C.a,{overlay:J,children:Object(r.jsxs)("div",{className:"acr-listing-icon",children:[Object(r.jsx)("i",{className:"flaticon-ruler"}),Object(r.jsx)("span",{className:"acr-listing-icon-value",children:(new Intl.NumberFormat).format(e.area)})]})})]}),Object(r.jsxs)("div",{className:"listing-gallery-wrapper",children:[Object(r.jsx)(x.b,{to:"/listing-details-v1",className:"btn-custom btn-sm secondary",children:"View Details"}),Object(r.jsx)(C.a,{overlay:H,children:Object(r.jsxs)(x.b,{to:"#",className:"listing-gallery",children:[" ",Object(r.jsx)("i",{className:"fas fa-camera"})," "]})})]})]})})})})})},s)}))}))]})})}}]),t}(l.Component),V=function(e){Object(c.a)(t,e);var s=Object(n.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){return Object(r.jsxs)(l.Fragment,{children:[Object(r.jsx)(v,{}),Object(r.jsx)(f,{}),Object(r.jsx)(E,{}),Object(r.jsx)(z,{}),Object(r.jsx)(A,{}),Object(r.jsx)(h.a,{}),Object(r.jsx)(w,{}),Object(r.jsx)(R.a,{}),Object(r.jsx)("div",{className:"section pt-0",children:Object(r.jsx)(b.a,{})})]})}}]),t}(l.Component),q=function(e){Object(c.a)(t,e);var s=Object(n.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){return Object(r.jsxs)(l.Fragment,{children:[Object(r.jsxs)(j.a,{children:[Object(r.jsx)("title",{children:"PropertyLens - Real Estate Listing | Homepage"}),Object(r.jsx)("meta",{name:"description",content:"#"})]}),Object(r.jsx)(d.a,{}),Object(r.jsx)(V,{}),Object(r.jsx)(m.a,{})]})}}]),t}(l.Component);s.default=q},49:function(e){e.exports=JSON.parse('[{"id":1,"gridimg":"assets/img/listings/1.jpg","listimg":"assets/img/listings-list/1.jpg","title":"Iris Watson, Frederick Nebraska 20620","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":true,"sale":false,"pending":true,"rental":false,"recent":true},{"id":2,"gridimg":"assets/img/listings/2.jpg","listimg":"assets/img/listings-list/2.jpg","title":"Theodore Lowe, Azusa New York 39531","authorimg":"assets/img/people/1.jpg","authorname":"Randy Blue","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":true,"sale":true,"pending":false,"rental":false,"recent":true},{"id":3,"gridimg":"assets/img/listings/3.jpg","listimg":"assets/img/listings-list/3.jpg","title":"Iris Watson, Frederick Nebraska 20620","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":false,"sale":false,"pending":true,"rental":false,"recent":true},{"id":4,"gridimg":"assets/img/listings/4.jpg","listimg":"assets/img/listings-list/4.jpg","title":"Iris Watson, Frederick Nebraska 20620","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":false,"sale":true,"pending":false,"rental":false,"recent":true},{"id":5,"gridimg":"assets/img/listings/5.jpg","listimg":"assets/img/listings-list/5.jpg","title":"Iris Watson, Frederick Nebraska 20620","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":false,"sale":true,"pending":false,"rental":false,"recent":false},{"id":6,"gridimg":"assets/img/listings/1.jpg","listimg":"assets/img/listings-list/6.jpg","title":"Iris Watson, Frederick Nebraska 20620","authorimg":"assets/img/people/4.jpg","authorname":"Mike Stanly","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":false,"sale":false,"pending":false,"rental":true,"recent":false},{"id":7,"gridimg":"assets/img/listings/6.jpg","listimg":"assets/img/listings-list/7.jpg","title":"Iris Watson, Frederick Nebraska 20620","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":true,"sale":false,"pending":true,"rental":false,"recent":false},{"id":8,"gridimg":"assets/img/listings/7.jpg","listimg":"assets/img/listings-list/8.jpg","title":"Theodore Lowe, Azusa New York 39531","authorimg":"assets/img/people/1.jpg","authorname":"Randy Blue","postdate":"March 3, 2020","monthlyprice":3500,"text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","beds":3,"bathrooms":2,"area":2499,"star":true,"sale":true,"pending":false,"rental":false,"recent":false}]')},73:function(e){e.exports=JSON.parse('[{"id":1,"img":"assets/img/agents/1.jpg","name":"Randy Blue","post":"Expert at Company","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,","star":true},{"id":2,"img":"assets/img/agents/2.jpg","name":"Rinda Flow","post":"Expert at Company","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,","star":false},{"id":3,"img":"assets/img/agents/3.jpg","name":"Gina Mconihon","post":"Expert at Company","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,","star":false},{"id":4,"img":"assets/img/agents/4.jpg","name":"Oliver Rasky","post":"Expert at Company","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,","star":true}]')}}]);
//# sourceMappingURL=22.9813db45.chunk.js.map