(this.webpackJsonpacres=this.webpackJsonpacres||[]).push([[27],{346:function(e,t,s){"use strict";s.r(t);var a=s(38),i=s(39),r=s(41),n=s(40),c=s(1),l=s(0),o=s(46),m=s.n(o),d=s(47),j=s(43),b=s(48),g=s(44),u=s(9),p=s(53),h=s(74),x=s(201),O=s.n(x),f=s(42),y=s.n(f),v=s(62),N=function(e){Object(r.a)(s,e);var t=Object(n.a)(s);function s(){var e;return Object(a.a)(this,s),(e=t.call(this)).state={items:p.a,currentPage:1,itemsPerPage:4,loading:!1},e.handleClick=e.handleClick.bind(Object(g.a)(e)),e}return Object(i.a)(s,[{key:"handleClick",value:function(e){var t=this,s=e.target.closest(".pagination-content");s&&s.scrollIntoView(),this.setState({loading:!0}),setTimeout((function(){t.setState({currentPage:Number(e.target.getAttribute("data-page")),loading:!1})}),2e3)}},{key:"render",value:function(){for(var e=this,t=this.state,s=t.items,a=t.currentPage,i=t.itemsPerPage,r=a*i,n=r-i,o=s.slice(n,r).map((function(e,t){return Object(c.jsx)("div",{className:"col-md-6 masonry-item",children:Object(c.jsxs)("article",{className:"post",children:[Object(c.jsx)("div",{className:"post-thumbnail",children:Object(c.jsx)(u.b,{to:"/blog-single",children:Object(c.jsx)("img",{src:"/acres/"+e.gridimg,alt:"blog post"})})}),Object(c.jsxs)("div",{className:"post-body",children:[Object(c.jsxs)("div",{className:"post-author",children:[Object(c.jsx)("img",{src:"/acres/"+e.authorimg,alt:"author"}),Object(c.jsxs)("div",{className:"post-author-body",children:[Object(c.jsxs)("p",{children:[" ",Object(c.jsx)(u.b,{to:"#",children:e.authorname})," "]}),Object(c.jsx)("span",{className:"post-date",children:e.postdate})]})]}),Object(c.jsxs)("h5",{className:"post-title",children:[" ",Object(c.jsx)(u.b,{to:"/blog-single",children:e.title})," "]}),Object(c.jsx)("p",{className:"post-text",children:e.text.slice(0,75)}),Object(c.jsxs)("div",{className:"post-controls",children:[Object(c.jsx)(u.b,{to:"/blog-single",className:"btn-custom secondary btn-sm",children:"Read More"}),Object(c.jsx)("div",{className:"post-comment-authors",children:e.totalcomment>0||""!==e.totalcomment?Object(c.jsxs)(l.Fragment,{children:[Object(c.jsx)("span",{children:"Comments by: "}),Object(c.jsxs)("div",{className:"post-comment-authors-img",children:[e.usercomment.map((function(e,t){return Object(c.jsxs)(u.b,{to:"#",children:[" ",Object(c.jsx)("img",{src:"/acres/"+e.img,alt:"comment author"})," "]},t)})),Object(c.jsxs)(u.b,{to:"#",children:[" +",e.totalcomment," "]})]})]}):Object(c.jsx)("span",{children:"0 Comments"})})]})]})]})},t)})),m=[],d=1;d<=Math.ceil(s.length/i);d++)m.push(d);var j=m.map((function(t){var s=e.state.currentPage===t?"active":"";return Object(c.jsx)(l.Fragment,{children:m.length>1?Object(c.jsx)("li",{className:y()("page-item",{active:s}),children:Object(c.jsx)(u.b,{className:"page-link",to:"#","data-page":t,onClick:e.handleClick,children:t})}):""},t)}));return Object(c.jsx)("div",{className:"section posts pagination-content",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-lg-8",children:[Object(c.jsx)(O.a,{className:"row masonry",imagesLoadedOptions:{itemSelector:".masonry-item",percentPosition:!1,resize:!0,fitWidth:!0},children:!1===this.state.loading?o:Object(c.jsx)(v.a,{})}),m.length>1?Object(c.jsxs)("ul",{className:"pagination",children:[m.length>1&&1!==this.state.currentPage?Object(c.jsx)("li",{className:"page-item",children:Object(c.jsx)(u.b,{className:"page-link",to:"#","data-page":this.state.currentPage-1,onClick:this.handleClick,children:Object(c.jsx)("i",{className:"fas fa-chevron-left"})})}):"",j,m.length>1&&this.state.currentPage!==m.length?Object(c.jsx)("li",{className:"page-item",children:Object(c.jsx)(u.b,{className:"page-link",to:"#","data-page":parseInt(this.state.currentPage+1),onClick:this.handleClick,children:Object(c.jsx)("i",{className:"fas fa-chevron-right"})})}):""]}):""]}),Object(c.jsx)("div",{className:"col-lg-4",children:Object(c.jsx)(h.a,{})})]})})})}}]),s}(l.Component),k=function(e){Object(r.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(c.jsxs)(l.Fragment,{children:[Object(c.jsxs)(m.a,{children:[Object(c.jsx)("title",{children:"PropertyLens Real Estate  | Blog Grid"}),Object(c.jsx)("meta",{name:"description",content:"#"})]}),Object(c.jsx)(d.a,{}),Object(c.jsx)(j.a,{breadcrumb:{pagename:"Blog Grid"}}),Object(c.jsx)(N,{}),Object(c.jsx)(b.a,{})]})}}]),s}(l.Component);t.default=k},43:function(e,t,s){"use strict";var a=s(38),i=s(39),r=s(41),n=s(40),c=s(1),l=s(0),o=s(9),m=function(e){Object(r.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"subheader bg-cover bg-center dark-overlay",style:{backgroundImage:"url(/acres/assets/img/subheader.jpg )"},children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"subheader-inner",children:[Object(c.jsx)("h1",{className:"text-white",children:this.props.breadcrumb.pagename}),Object(c.jsx)("nav",{"aria-label":"breadcrumb",children:Object(c.jsxs)("ol",{className:"breadcrumb",children:[Object(c.jsx)("li",{className:"breadcrumb-item",children:Object(c.jsxs)(o.b,{to:"/",children:[" ",Object(c.jsx)("i",{className:"fas fa-home"})," "]})}),Object(c.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:this.props.breadcrumb.pagename})]})})]})})})}}]),s}(l.Component);t.a=m},53:function(e){e.exports=JSON.parse('{"a":[{"id":1,"gridimg":"assets/img/blog/1.jpg","listimg":"assets/img/blog-list/1.jpg","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","title":"What agencies are looking for in an agent","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"House"}],"totalcomment":7,"usercomment":[{"img":"assets/img/people/1.jpg"},{"img":"assets/img/people/5.jpg"}],"recent":true},{"id":2,"gridimg":"assets/img/blog/2.jpg","listimg":"assets/img/blog-list/2.jpg","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","title":"Changing the way we sell and buy real estate","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"Real Estate"},{"title":"Building"}],"totalcomment":"","usercomment":[],"recent":true},{"id":3,"gridimg":"assets/img/blog/3.jpg","listimg":"assets/img/blog-list/3.jpg","authorimg":"assets/img/people/1.jpg","authorname":"Randy Blue","postdate":"March 13, 2020","title":"Families, its the best time to start buying","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"Agency"}],"totalcomment":3,"usercomment":[{"img":"assets/img/people/3.jpg"},{"img":"assets/img/people/4.jpg"}],"recent":true},{"id":4,"gridimg":"assets/img/blog/4.jpg","listimg":"assets/img/blog-list/4.jpg","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","title":"Our all new duplex apartment is up for grabs","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"Family"}],"totalcomment":"","usercomment":[],"recent":true},{"id":5,"gridimg":"assets/img/blog/5.jpg","listimg":"assets/img/blog-list/5.jpg","authorimg":"assets/img/people/1.jpg","authorname":"Randy Blue","postdate":"March 3, 2020","title":"Villa sales are going down this year, find out why","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"Acres"}],"totalcomment":"","usercomment":[],"recent":false},{"id":6,"gridimg":"assets/img/blog/6.jpg","listimg":"assets/img/blog-list/6.jpg","authorimg":"assets/img/people/2.jpg","authorname":"Heather Mclayn","postdate":"March 3, 2020","title":"Flats in wisconsin are being held for rental","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","tagslist":[{"title":"Baths"},{"title":"Rooms"}],"totalcomment":3,"usercomment":[{"img":"assets/img/people/3.jpg"},{"img":"assets/img/people/4.jpg"}],"recent":false}],"b":[{"id":1,"title":"Living Rooms","count":24},{"id":2,"title":"Real Estate","count":16},{"id":3,"title":"Kitchens","count":32},{"id":4,"title":"Flats","count":22},{"id":5,"title":"Luxury","count":15},{"id":6,"title":"Bed Rooms","count":8}],"c":[{"id":1,"userimg":"assets/img/people/1.jpg","username":"Randy Blue","commentdate":"December 10 2020","comment":"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.","replies":[{"id":11,"userimg":"assets/img/people/3.jpg","username":"Melany frank","commentdate":"December 10 2020","comment":"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches"}]},{"id":2,"userimg":"assets/img/people/2.jpg","username":"Heather Mclayn","commentdate":"December 8 2020","comment":"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches","replies":[]}]}')},62:function(e,t,s){"use strict";var a=s(38),i=s(39),r=s(41),n=s(40),c=s(1),l=s(0),o=function(e){Object(r.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"pagination-loader",children:Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"#fff",display:"block",shapeRendering:"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(c.jsx)("g",{transform:"translate(80,50)",children:Object(c.jsx)("g",{transform:"rotate(0)",children:Object(c.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:1,children:[Object(c.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(c.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(c.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(c.jsx)("g",{transform:"rotate(45)",children:Object(c.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.875",children:[Object(c.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(c.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(c.jsx)("g",{transform:"translate(50,80)",children:Object(c.jsx)("g",{transform:"rotate(90)",children:Object(c.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.75",children:[Object(c.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(c.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(c.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(c.jsx)("g",{transform:"rotate(135)",children:Object(c.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.625",children:[Object(c.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(c.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(c.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(c.jsx)("g",{transform:"rotate(180)",children:Object(c.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.5",children:[Object(c.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(c.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(c.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(c.jsx)("g",{transform:"rotate(225)",children:Object(c.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.375",children:[Object(c.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(c.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(c.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(c.jsx)("g",{transform:"rotate(270)",children:Object(c.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.25",children:[Object(c.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(c.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(c.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(c.jsx)("g",{transform:"rotate(315)",children:Object(c.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.125",children:[Object(c.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(c.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})})}}]),s}(l.Component);t.a=o},74:function(e,t,s){"use strict";var a=s(38),i=s(39),r=s(41),n=s(40),c=s(1),l=s(0),o=s(9),m=s(53),d=function(e){Object(r.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsx)("div",{className:"sidebar-widget",children:Object(c.jsxs)("form",{method:"post",children:[Object(c.jsx)("h5",{children:"Search Posts"}),Object(c.jsxs)("div",{className:"search-wrapper",children:[Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"Search",name:"sidebar-search"}),Object(c.jsx)("button",{type:"submit",className:"btn-custom",children:Object(c.jsx)("i",{className:"flaticon-search"})})]})]})}),Object(c.jsxs)("div",{className:"sidebar-widget",children:[Object(c.jsx)("h5",{children:"Recent Posts"}),m.a.filter((function(e){return!0===e.recent})).slice(0,4).map((function(e,t){return Object(c.jsxs)("article",{className:"media",children:[Object(c.jsx)(o.b,{to:"/blog-single",children:Object(c.jsx)("img",{src:"/acres/"+e.gridimg,alt:"post"})}),Object(c.jsxs)("div",{className:"media-body",children:[Object(c.jsxs)("h6",{children:[" ",Object(c.jsx)(o.b,{to:"/blog-single",children:e.title})," "]}),Object(c.jsx)("span",{children:e.postdate})]})]},t)}))]}),Object(c.jsxs)("div",{className:"sidebar-widget sidebar-list",children:[Object(c.jsx)("h5",{children:"Popular Categories"}),Object(c.jsx)("ul",{children:m.b.map((function(e,t){return Object(c.jsx)("li",{children:Object(c.jsxs)(o.b,{to:"/blog-single",children:[" ",e.title," ",Object(c.jsxs)("span",{children:["(",e.count,")"]}),Object(c.jsx)("i",{className:"fas fa-chevron-right"})]})},t)}))})]}),Object(c.jsxs)("div",{className:"sidebar-widget tags",children:[Object(c.jsx)("h5",{children:"Popular Tags"}),m.a.map((function(e,t){return Object(c.jsx)(l.Fragment,{children:e.tagslist.map((function(e,t){return Object(c.jsx)(o.b,{to:"/blog-single",children:e.title},t)}))},t)}))]})]})}}]),s}(l.Component);t.a=d}}]);
//# sourceMappingURL=27.6605a809.chunk.js.map