(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{107:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Field is required"},c=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},109:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.385f97b7.svg",c=n(1);t.a=function(e){return Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:r})})}},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return S})),n.d(t,"f",(function(){return v}));var r=n(13),c=n.n(r),a=n(26),i=n(56),s=n(8),u=n(24),o=function(e){return u.c.get("profile/"+e).then((function(e){return e.data}))},l=function(e){return u.c.get("profile/status/"+e).then((function(e){return e.data}))},d=function(e){return u.c.put("profile/status",{status:e}).then((function(e){return e.data}))},j=function(e){var t=new FormData;return t.append("image",e),u.c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},f=function(e){return u.c.put("profile",e).then((function(e){return e.data}))},b=n(65),O={posts:[{id:1,message:"Did you have a nice day?",likesCount:14},{id:2,message:"My first post",likesCount:29}],profile:null,status:""},h={addPostActionCreator:function(e){return{type:"SN/PROFILE/ADD-POST",newPostText:e}},setUserProfile:function(e){return{type:"SN/PROFILE/SET_USER_PROFILE",profile:e}},setStatus:function(e){return{type:"SN/PROFILE/SET_STATUS",status:e}},deletePost:function(e){return{type:"SN/PROFILE/DELETE_POST",postId:e}},savePhotoSuccess:function(e){return{type:"SN/PROFILE/SAVE_PHOTO_SUCCESS",photos:e}}},p=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(e);case 2:r=t.sent,n(h.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:r=t.sent,n(h.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d(e);case 3:0===t.sent.resultCode&&n(h.setStatus(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:0===(r=t.sent).resultCode&&n(h.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n,r){var a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,f(e);case 3:if(0!==(i=t.sent).resultCode){t.next=12;break}if(null==a){t.next=9;break}n(p(a)),t.next=10;break;case 9:throw new Error("userId can't be null");case 10:t.next=14;break;case 12:return n(Object(b.a)("edit-profile",{_error:i.messages[0]})),t.abrupt("return",Promise.reject(i.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD-POST":var n={id:5,message:t.newPostText,likesCount:2};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n])});case"SN/PROFILE/SET_STATUS":return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case"SN/PROFILE/SET_USER_PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case"SN/PROFILE/DELETE_POST":return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case"SN/PROFILE/SAVE_PHOTO_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(56),c=n(8),a={dialogs:[{id:1,name:"Dima"},{id:2,name:"Sveta"},{id:3,name:"Sasha"},{id:4,name:"Olga"},{id:5,name:"Tom"},{id:6,name:"Alex"}],messages:[{id:1,message:"Hey"},{id:2,message:"How are you?"},{id:3,message:"Did you have a nice day?"}]},i={sendMessage:function(e){return{type:"SN/DIALOGS/SEND-MESSAGE",newMessageBody:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;if("SN/DIALOGS/SEND-MESSAGE"===t.type){var n=t.newMessageBody;return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:n}])})}return e}},175:function(e,t,n){"use strict";t.a=n.p+"static/media/user.0a4ae0bf.png"},191:function(e,t,n){"use strict";n.d(t,"c",(function(){return N})),n.d(t,"d",(function(){return T})),n.d(t,"b",(function(){return U}));var r=n(13),c=n.n(r),a=n(26),i=n(56),s=n(8),u={"messages-received":[],"status-changed":[]},o=null,l=function(){O("pending"),setTimeout(h,3e3)},d=function(e){var t=JSON.parse(e.data);u["messages-received"].forEach((function(e){return e(t)}))},j=function(){O("ready")},f=function(){O("error"),console.error("REFRESH PAGE")},b=function(){var e,t,n,r;null===(e=o)||void 0===e||e.removeEventListener("close",l),null===(t=o)||void 0===t||t.removeEventListener("message",d),null===(n=o)||void 0===n||n.removeEventListener("open",j),null===(r=o)||void 0===r||r.removeEventListener("error",f)},O=function(e){u["status-changed"].forEach((function(t){return t(e)}))};function h(){var e,t,n,r,c;b(),null===(e=o)||void 0===e||e.close(),o=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),O("pending"),null===(t=o)||void 0===t||t.addEventListener("close",l),null===(n=o)||void 0===n||n.addEventListener("message",d),null===(r=o)||void 0===r||r.addEventListener("open",j),null===(c=o)||void 0===c||c.addEventListener("error",f)}var p=function(){h()},m=function(){var e;u["messages-received"]=[],u["status-changed"]=[],b(),null===(e=o)||void 0===e||e.close()},g=function(e,t){return u[e].push(t),function(){u[e]=u[e].filter((function(e){return e!==t}))}},S=function(e,t){u[e]=u[e].filter((function(e){return e!==t}))},v=function(e){var t;null===(t=o)||void 0===t||t.send(e)},x=n(390),E={messages:[],status:"pending"},y=function(e){return{type:"SN/chat/MESSAGES_RECEIVED",payload:{messages:e}}},w=function(e){return{type:"SN/chat/STATUS_CHANGED",payload:{status:e}}},_=null,P=function(e){return null===_&&(_=function(t){e(y(t))}),_},I=null,C=function(e){return null===I&&(I=function(t){e(w(t))}),I},N=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(),g("messages-received",P(t)),g("status-changed",C(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S("messages-received",P(t)),S("status-changed",P(t)),m();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v(e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/chat/MESSAGES_RECEIVED":return Object(s.a)(Object(s.a)({},e),{},{messages:[].concat(Object(i.a)(e.messages),Object(i.a)(t.payload.messages.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{id:Object(x.a)()})})))).filter((function(e,t,n){return t>=n.length-100}))});case"SN/chat/STATUS_CHANGED":return Object(s.a)(Object(s.a)({},e),{},{status:t.payload.status});default:return e}}},196:function(e,t,n){e.exports={userPhoto:"users_userPhoto__2B4yM",followUnfollowButton:"users_followUnfollowButton__3ZSk-"}},24:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r,c,a=n(193),i=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"c068030d-a8e8-4515-bf10-1c9a17242b72"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(c||(c={}))},245:function(e,t,n){},246:function(e,t,n){},248:function(e,t,n){},250:function(e,t,n){},251:function(e,t,n){},384:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,400)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},c=n(0),a=n.n(c),i=n(40),s=n.n(i),u=(n(245),n(154)),o=n(155),l=n(190),d=n(188),j=(n(246),n(247),n(248),n(1)),f=function(e){return Object(j.jsx)("div",{children:"News"})},b=(n(250),function(e){return Object(j.jsx)("div",{children:"Music"})}),O=(n(251),function(e){return Object(j.jsx)("div",{children:"Settings"})}),h=n(41),p=n(21),m=n(16),g=n(19),S=n(8),v=n(13),x=n.n(v),E=n(26),y=n(24),w=function(){return y.c.get("auth/me").then((function(e){return e.data}))},_=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0;return y.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},P=function(){return y.c.delete("auth/login")},I=function(){return y.c.get("security/get-captcha-url").then((function(e){return e.data}))},C=n(65),N={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},T=function(e,t,n,r){return{type:"SN/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},U=function(e){return{type:"SN/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},R=function(){return function(){var e=Object(E.a)(x.a.mark((function e(t){var n,r,c,a,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:(n=e.sent).resultCode===y.b.Success&&(r=n.data,c=r.id,a=r.login,i=r.email,t(T(c,i,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(){return function(){var e=Object(E.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:n=e.sent,r=n.url,t(U(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/auth/SET_USER_DATA":case"SN/auth/GET_CAPTCHA_URL_SUCCESS":return Object(S.a)(Object(S.a)({},e),t.payload);default:return e}},k={initialized:!1},F=function(){return{type:"SN/APP/INITIALIZED_SUCCESS"}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;return"SN/APP/INITIALIZED_SUCCESS"===t.type?Object(S.a)(Object(S.a)({},e),{},{initialized:!0}):e},G=n(109),M=n(153),z=n(164),H={},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H;return e},V=n(56),q={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return y.c.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===r?"":"&friend=".concat(r))).then((function(e){return e.data}))},follow:function(e){return y.c.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return y.c.delete("follow/".concat(e)).then((function(e){return e.data}))}},W=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(S.a)(Object(S.a)({},e),r):e}))},J={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],filter:{term:"",friend:null}},K=function(e){return{type:"SN/USERS/SET_USERS",users:e}},X=function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},Z=function(e){return{type:"SN/USERS/SET_FILTER",payload:e}},Y=function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",count:e}},Q=function(e){return{type:"SN/USERS/TOGGLE_IS_FETCHING",isFetching:e}},$=function(e,t,n){return function(){var r=Object(E.a)(x.a.mark((function r(c,a){var i;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(Q(!0)),c(X(e)),c(Z(n)),r.next=5,q.getUsers(e,t,n.term,n.friend);case 5:i=r.sent,c(Q(!1)),c(K(i.items)),c(Y(i.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(S.a)(Object(S.a)({},e),{},{users:W(e.users,t.userId,"id",{followed:!0})});case"SN/USERS/UNFOLLOW":return Object(S.a)(Object(S.a)({},e),{},{users:W(e.users,t.userId,"id",{followed:!1})});case"SN/USERS/SET_USERS":return Object(S.a)(Object(S.a)({},e),{},{users:t.users});case"SN/USERS/SET_CURRENT_PAGE":return Object(S.a)(Object(S.a)({},e),{},{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(S.a)(Object(S.a)({},e),{},{totalUsersCount:t.count});case"SN/USERS/TOGGLE_IS_FETCHING":return Object(S.a)(Object(S.a)({},e),{},{isFetching:t.isFetching});case"SN/USERS/SET_FILTER":return Object(S.a)(Object(S.a)({},e),{},{filter:t.payload});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(S.a)(Object(S.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(V.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},te=n(194),ne=n(189),re=n(191),ce=Object(g.c)({profilePage:M.b,dialogsPage:z.b,sidebar:B,usersPage:ee,auth:A,form:ne.a,app:D,chat:re.a}),ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.d,ie=Object(g.e)(ce,ae(Object(g.a)(te.a)));window.__store__=ie;var se=ie;function ue(e){return function(t){return Object(j.jsx)(a.a.Suspense,{fallback:Object(j.jsx)("div",{children:"...loading"}),children:Object(j.jsx)(e,Object(S.a)({},t))})}}var oe=n(211),le=Object(oe.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),de=function(e){return e.usersPage.pageSize},je=function(e){return e.usersPage.totalUsersCount},fe=function(e){return e.usersPage.currentPage},be=function(e){return e.usersPage.isFetching},Oe=function(e){return e.usersPage.followingInProgress},he=function(e){return e.usersPage.filter},pe=n(110),me=n(152),ge=n(70),Se=n.n(ge),ve=n(6),xe=n.n(ve),Ee=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,i=e.portionSize,s=void 0===i?10:i,u=Math.ceil(t/n),o=[],l=1;l<=u;l++)o.push(l);var d=Math.ceil(u/s),f=Object(c.useState)(1),b=Object(me.a)(f,2),O=b[0],h=b[1],p=(O-1)*s+1,m=O*s;return Object(j.jsxs)("div",{className:Se.a.paginator,children:[O>1&&Object(j.jsx)("button",{className:Se.a.paginatorButton,onClick:function(){h(O-1)},children:"PREV"}),o.filter((function(e){return e>=p&&e<=m})).map((function(e){return Object(j.jsx)("span",{className:xe()(Object(pe.a)({},Se.a.selectedPage,r===e),Se.a.pageNumber),onClick:function(t){a(e)},children:e},e)})),d>O&&Object(j.jsx)("button",{className:Se.a.paginatorButton,onClick:function(){h(O+1)},children:"NEXT"})]})},ye=n(196),we=n.n(ye),_e=n(175),Pe=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,c=e.follow;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{children:[Object(j.jsx)("div",{children:Object(j.jsx)(h.c,{to:"/profile"+t.id,children:Object(j.jsx)("img",{src:null!=t.photos.small?t.photos.small:_e.a,className:we.a.userPhoto})})}),Object(j.jsx)("div",{children:t.followed?Object(j.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(j.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Follow"})})]}),Object(j.jsxs)("span",{children:[Object(j.jsxs)("span",{children:[Object(j.jsx)("div",{children:t.name}),Object(j.jsx)("div",{children:t.status})]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("div",{children:"user.location.country"}),Object(j.jsx)("div",{children:"user.location.city"})]})]})]})},Ie=n(95),Ce=function(e){return{}},Ne=a.a.memo((function(e){var t=Object(m.d)(he);return Object(j.jsx)("div",{children:Object(j.jsx)(Ie.c,{enableReinitialize:!0,initialValues:{term:t.term,friend:String(t.friend)},validate:Ce,onSubmit:function(t,n){var r=n.setSubmitting,c={term:t.term,friend:"null"===t.friend?null:"true"===t.friend};e.onFilterChanged(c),r(!1)},children:function(e){var t=e.isSubmitting;return Object(j.jsxs)(Ie.b,{children:[Object(j.jsx)(Ie.a,{type:"text",name:"term"}),Object(j.jsxs)(Ie.a,{name:"friend",as:"select",children:[Object(j.jsx)("option",{value:"null",children:"All"}),Object(j.jsx)("option",{value:"true",children:"Followed only"}),Object(j.jsx)("option",{value:"false",children:"Unfollowed only"})]}),Object(j.jsx)("button",{type:"submit",disabled:t,children:"Find"})]})}})})})),Te=function(e){var t=Object(m.d)(le),r=Object(m.d)(je),a=Object(m.d)(fe),i=Object(m.d)(de),s=Object(m.d)(he),u=Object(m.d)(Oe),o=Object(m.c)(),l=Object(p.g)(),d=n(340);Object(c.useEffect)((function(){var e=d.parse(l.location.search.substr(1)),t=a,n=s;switch(e.page&&(t=Number(e.page)),e.term&&(n=Object(S.a)(Object(S.a)({},n),{},{term:e.term})),e.friend){case"null":n=Object(S.a)(Object(S.a)({},n),{},{friend:null});break;case"true":n=Object(S.a)(Object(S.a)({},n),{},{friend:!0});break;case"false":n=Object(S.a)(Object(S.a)({},n),{},{friend:!1})}o($(t,i,n))}),[]),Object(c.useEffect)((function(){var e={};s.term&&(e.term=s.term),null!==s.friend&&(e.friend=String(s.friend)),1!==a&&(e.page=String(a)),l.push({pathname:"/developers",search:d.stringify(e)})}),[s,a]);var f=function e(t){o(e(t))},b=function e(t){o(e(t))};return Object(j.jsxs)("div",{children:[Object(j.jsx)(Ne,{onFilterChanged:function(e){o($(1,i,e))}}),Object(j.jsx)(Ee,{currentPage:a,onPageChanged:function(e){o($(e,i,s))},totalItemsCount:r,pageSize:i}),Object(j.jsx)("div",{children:t.map((function(e){return Object(j.jsx)(Pe,{user:e,followingInProgress:u,unfollow:b,follow:f},e.id)}))})]})},Ue=function(e){var t=Object(m.d)(be);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:e.pageTitle}),t?Object(j.jsx)(G.a,{}):null,Object(j.jsx)(Te,{})]})},Re=n(187),Le=n(107),Ae=n(57),ke=n(86),Fe=n.n(ke),De=Object(Re.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(j.jsxs)("form",{onSubmit:t,children:[Object(Ae.c)("Email","email",[Le.b],Ae.a),Object(Ae.c)("Password","password",[Le.b],Ae.a,{type:"password"}),Object(Ae.c)(void 0,"rememberMe",[],Ae.a,{type:"checkbox"},"remember me"),r&&Object(j.jsx)("img",{src:r}),r&&Object(Ae.c)("Symbols from image","captcha",[Le.b],Ae.a,{}),n&&Object(j.jsx)("div",{className:Fe.a.formSummaryError,children:n}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:"Login"})})]})})),Ge=function(e){var t=Object(m.d)((function(e){return e.auth.captchaUrl})),n=Object(m.d)((function(e){return e.auth.isAuth})),r=Object(m.c)();return n?Object(j.jsx)(p.a,{to:"profile"}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"login"}),Object(j.jsx)(De,{onSubmit:function(e){var t,n,c,a;r((t=e.email,n=e.password,c=e.rememberMe,a=e.captcha,function(){var e=Object(E.a)(x.a.mark((function e(r){var i,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t,n,c,a);case 2:(i=e.sent).resultCode===y.b.Success?r(R()):(i.resultCode===y.a.CaptchaIsRequired&&r(L()),s=i.messages.length>0?i.messages[0]:"Some error",r(Object(C.a)("login",{_error:s})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},captchaUrl:t})]})},Me=n(151),ze=n(387),He=n(389),Be=n(393),Ve=n(394),qe=n(395),We=n(391),Je=n(392),Ke=n(388),Xe=n(129),Ze=function(e){return e.auth.isAuth},Ye=function(e){return e.auth.login},Qe=function(e){var t=Object(m.d)(Ze),n=Object(m.d)(Ye),r=Object(m.c)(),c=ze.a.Header;return Object(j.jsxs)(c,{className:"header",children:[Object(j.jsxs)(We.a,{children:[Object(j.jsx)(Je.a,{span:18,children:Object(j.jsx)(Me.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:Object(j.jsx)(Me.a.Item,{children:Object(j.jsx)(h.b,{to:"/developers",children:"Developers"})},"1")})}),t?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(Je.a,{span:1,children:Object(j.jsx)(Ke.a,{alt:n||"",style:{backgroundColor:"#87d068"},icon:Object(j.jsx)(Be.a,{})})}),Object(j.jsx)(Je.a,{span:5,children:Object(j.jsx)(Xe.a,{onClick:function(){r(function(){var e=Object(E.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:0===e.sent.data.resultCode&&t(T(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:" Log out "})})]}):Object(j.jsx)(Je.a,{span:6,children:Object(j.jsxs)(Xe.a,{children:[Object(j.jsx)(h.b,{to:"/login",children:"Login"})," "]})})]}),");"]})},$e=Me.a.SubMenu,et=ze.a.Content,tt=ze.a.Footer,nt=ze.a.Sider,rt=a.a.lazy((function(){return n.e(4).then(n.bind(null,403))})),ct=a.a.lazy((function(){return n.e(3).then(n.bind(null,402))})),at=a.a.lazy((function(){return n.e(5).then(n.bind(null,401))})),it=ue(rt),st=ue(ct),ut=ue(at),ot=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).catchAllUnhandledErrors=function(e){alert("Some error occured")},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(j.jsxs)(ze.a,{children:[Object(j.jsx)(Qe,{}),Object(j.jsxs)(et,{style:{padding:"0 50px"},children:[Object(j.jsxs)(He.a,{style:{margin:"16px 0"},children:[Object(j.jsx)(He.a.Item,{children:"Home"}),Object(j.jsx)(He.a.Item,{children:"List"}),Object(j.jsx)(He.a.Item,{children:"App"})]}),Object(j.jsxs)(ze.a,{className:"site-layout-background",style:{padding:"24px 0"},children:[Object(j.jsx)(nt,{className:"site-layout-background",width:200,children:Object(j.jsxs)(Me.a,{mode:"inline",defaultSelectedKeys:["1"],style:{height:"100%"},children:[Object(j.jsxs)($e,{icon:Object(j.jsx)(Be.a,{}),title:"My profile",children:[Object(j.jsx)(Me.a.Item,{children:Object(j.jsx)(h.b,{to:"/profile",children:" Profile "})},"1"),Object(j.jsx)(Me.a.Item,{children:Object(j.jsx)(h.b,{to:"/dialogs",children:" Messages "})},"2"),Object(j.jsx)(Me.a.Item,{children:"option3"},"3"),Object(j.jsx)(Me.a.Item,{children:"option4"},"4")]},"sub1"),Object(j.jsxs)($e,{icon:Object(j.jsx)(Ve.a,{}),title:"Developers",children:[Object(j.jsx)(Me.a.Item,{children:Object(j.jsx)(h.b,{to:"/developers",children:" Developers "})},"5"),Object(j.jsx)(Me.a.Item,{children:"option6"},"6"),Object(j.jsx)(Me.a.Item,{children:"option7"},"7"),Object(j.jsx)(Me.a.Item,{children:"option8"},"8")]},"sub2"),Object(j.jsxs)($e,{icon:Object(j.jsx)(qe.a,{}),title:"subnav 3",children:[Object(j.jsx)(Me.a.Item,{children:Object(j.jsx)(h.b,{to:"/chat",children:" Chat "})},"9"),Object(j.jsx)(Me.a.Item,{children:"option10"},"10"),Object(j.jsx)(Me.a.Item,{children:"option11"},"11"),Object(j.jsx)(Me.a.Item,{children:"option12"},"12")]},"sub3")]})}),Object(j.jsx)(et,{style:{padding:"0 24px",minHeight:280},children:Object(j.jsxs)(p.d,{children:[Object(j.jsx)(p.b,{path:"/dialogs",render:function(){return Object(j.jsx)(it,{})}}),Object(j.jsx)(p.b,{path:"/profile:userId?",render:function(){return Object(j.jsx)(st,{})}}),Object(j.jsx)(p.b,{path:"/news",render:function(){return Object(j.jsx)(f,{})}}),Object(j.jsx)(p.b,{path:"/music",render:function(){return Object(j.jsx)(b,{})}}),Object(j.jsx)(p.b,{path:"/settings",render:function(){return Object(j.jsx)(O,{})}}),Object(j.jsx)(p.b,{path:"/developers",render:function(){return Object(j.jsx)(Ue,{pageTitle:"Samurajs"})}}),Object(j.jsx)(p.b,{path:"/login",render:function(){return Object(j.jsx)(Ge,{})}}),Object(j.jsx)(p.b,{path:"/chat",render:function(){return Object(j.jsx)(ut,{})}}),Object(j.jsx)(p.b,{path:"*",render:function(){return Object(j.jsx)("div",{children:"404 NOT FOUND "})}})]})})]})]}),Object(j.jsx)(tt,{style:{textAlign:"center"},children:"Samuraj Social Network 2022"})]}):Object(j.jsx)(G.a,{})}}]),n}(c.Component),lt=Object(g.d)(p.h,Object(m.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(R());Promise.all([t]).then((function(){e(F())}))}}}))(ot),dt=function(){return Object(j.jsx)(h.a,{children:Object(j.jsx)(m.a,{store:se,children:Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(lt,{})})})})};s.a.render(Object(j.jsx)(dt,{}),document.getElementById("root")),r()},57:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return b}));var r=n(8),c=n(146),a=(n(0),n(86)),i=n.n(a),s=n(145),u=n(1),o=["input","meta"],l=["input","meta"],d=function(e){var t=e.meta,n=t.touched,r=t.error,c=e.children,a=n&&r;return Object(u.jsxs)("div",{className:i.a.formControl+" "+(a?i.a.error:""),children:[Object(u.jsx)("div",{children:c}),a&&Object(u.jsx)("span",{children:r})]})},j=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,o));return Object(u.jsxs)(d,Object(r.a)(Object(r.a)({},e),{},{children:[" ",Object(u.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))]}))},f=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,l));return Object(u.jsxs)(d,Object(r.a)(Object(r.a)({},e),{},{children:[" ",Object(u.jsx)("input",Object(r.a)(Object(r.a)({},t),n))]}))};function b(e,t,n,c){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(u.jsxs)("div",{children:[Object(u.jsx)(s.a,Object(r.a)({placeholder:e,name:t,validate:n,component:c},a))," ",i]})}},70:function(e,t,n){e.exports={paginator:"Paginator_paginator__1YgH8",pageNumber:"Paginator_pageNumber__2J6yr",selectedPage:"Paginator_selectedPage__13Ii0",paginatorButton:"Paginator_paginatorButton__2kyq9"}},86:function(e,t,n){e.exports={formControl:"FormsControls_formControl__lI7Lw",error:"FormsControls_error__1ih9r",formSummaryError:"FormsControls_formSummaryError__27wI-"}}},[[384,1,2]]]);
//# sourceMappingURL=main.f6d154fd.chunk.js.map