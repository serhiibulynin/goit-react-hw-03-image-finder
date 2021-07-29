(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{69:function(e,t,r){},70:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(8),c=r.n(o),i=r(12),s=r(4),u=r(5),l=r(7),h=r(6),d=r(13),g=r(0),p=function(e){var t=e.webformatURL,r=e.tags,n=e.largeImageURL,a=e.toggleModal;return Object(g.jsx)("li",{className:"ImageGalleryItem",children:Object(g.jsx)("img",{src:t,alt:r,className:"ImageGalleryItem-image",onClick:function(){a(n,r)}})})},b=function(e){var t=e.pictures,r=e.toggleModal;return Object(g.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(g.jsx)(p,Object(d.a)(Object(d.a)({},e),{},{toggleModal:r}),e.id)}))})},j=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={query:""},e.onHandleChange=function(t){e.setState({query:t.currentTarget.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(u.a)(r,[{key:"render",value:function(){return Object(g.jsx)("header",{className:"Searchbar",children:Object(g.jsxs)("form",{className:"SearchForm",onSubmit:this.onFormSubmit,children:[Object(g.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(g.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(g.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.onHandleChange})]})})}}]),r}(n.Component),m=document.querySelector("#modal-root"),f=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).closeModalByEsc=function(t){"Escape"===t.code&&e.props.toggleModal("","")},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.toggleModal("","")},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModalByEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModalByEsc)}},{key:"render",value:function(){return Object(o.createPortal)(Object(g.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(g.jsx)("div",{className:"Modal",children:Object(g.jsx)("img",{src:this.props.url,alt:this.props.alt})})}),m)}}]),r}(n.Component),y=function(e){var t=e.children,r=e.onClick;return Object(g.jsx)("button",{className:"Button",type:"button",onClick:r,children:t})};y.defaultProps={onClick:function(){return null},children:null};var O=y,v=r(10),x=r.n(v),k=r(22),S=r(11),w=r.n(S);w.a.defaults.baseURL="https://pixabay.com/api/";var M=function(){var e=Object(k.a)(x.a.mark((function e(t){var r,n,a,o,c,i,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.searchQuery,n=void 0===r?"":r,a=t.currentPage,o=void 0===a?1:a,c=t.pageSize,i=void 0===c?12:c,e.next=3,w.a.get("?q=".concat(n,"&page=").concat(o,"&key=22368455-652b774db086074207edc62e9&image_type=photo&orientation=horizontal&per_page=").concat(i)).then((function(e){return e.data.hits}));case 3:if((s=e.sent).length){e.next=6;break}return e.abrupt("return",Promise.reject("No any matches found!"));case 6:if(!s.length){e.next=8;break}return e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=r(23),C=r.n(P),N=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={pictures:[],searchQuery:"",currentPage:1,showModal:!1,originalPictureSize:"",originalPictureTag:"",isLoading:!1,error:null},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,pictures:[],error:null})},e.fetchPictures=function(){var t=e.state,r={searchQuery:t.searchQuery,currentPage:t.currentPage};e.setState({isLoading:!0}),M(r).then((function(t){return e.setState((function(e){return{pictures:[].concat(Object(i.a)(e.pictures),Object(i.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.toggleModal=function(t,r){e.setState((function(e){return{showModal:!e.showModal,originalPictureSize:t,originalPictureTag:r}}))},e}return Object(u.a)(r,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchPictures(),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.pictures,r=e.originalPictureSize,n=e.originalPictureTag,a=e.isLoading,o=e.error;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(j,{onSubmit:this.onChangeQuery}),o&&alert("Not found pictures for you querry"),Object(g.jsx)(b,{pictures:t,toggleModal:this.toggleModal}),t.length&&Object(g.jsx)(O,{onClick:this.fetchPictures,children:a?Object(g.jsx)(C.a,{type:"Circles",color:"#00BFFF",height:24,width:24}):"Load More"}),this.state.showModal&&Object(g.jsx)(f,{url:r,alt:n,toggleModal:this.toggleModal})]})}}]),r}(n.Component);r(68),r(69);c.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(N,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.c4f8a2f1.chunk.js.map