module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=29)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat["utils/Stream"]},function(e,t){e.exports=flarum.core.compat.extend},function(e,t,n){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",function(){return r})},function(e,t){e.exports=flarum.core.compat["utils/stringToColor"]},function(e,t){e.exports=flarum.core.compat["helpers/avatar"]},function(e,t){e.exports=flarum.core.compat["components/DiscussionPage"]},function(e,t){e.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/components/Widget"]},,function(e,t){e.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/extend/Widgets"]},function(e,t){e.exports=flarum.core.compat["components/LoadingIndicator"]},function(e,t){e.exports=flarum.core.compat["components/Tooltip"]},function(e,t){e.exports=flarum.core.compat["components/Link"]},function(e,t,n){"use strict";var r=n(9),o=n.n(r),s=n(3),i=n(10),a=n.n(i),u=n(11),c=n.n(u),p=n(5),l=n.n(p),d=n(12),f=n.n(d),h=n(4),y=n.n(h),b=n(1),v=n.n(b),g=n(7),w=n.n(g),x=w.a?function(e){function t(){return e.apply(this,arguments)||this}Object(s.a)(t,e);var n=t.prototype;return n.oninit=function(t){e.prototype.oninit.call(this,t),this.users=[],this.loading=!0},n.oncreate=function(t){var n=this;e.prototype.oncreate.call(this,t),app.pusher.then(function(e){var t=e.channels.presence,r=Object.keys(t.members.members);0===r.length?t.bind("pusher:subscription_succeeded",function(e){Object.keys(e.members).map(function(r){t.members.myID==r||r.includes("Guest")||(e.members[r].id=r,n.pushMember(e.members[r]))}),n.loading=!1,m.redraw()}):(r.map(function(e){t.members.myID==e||e.includes("Guest")||(t.members.members[e].id=e,n.pushMember(t.members.members[e]))}),n.loading=!1,m.redraw()),t.bind("pusher:member_removed",function(e){n.users.some(function(t,r){if(t.id()==e.id)return n.users.splice(r,1),m.redraw(),!0})}),t.bind("pusher:member_added",function(e){t.members.myID!=e.id&&"string"!=typeof e.id&&(e.info.id=e.id,n.pushMember(e.info),m.redraw())})})},n.pushMember=function(e){this.users.push({id:v()(e.id),color:v()("#"+y()(e.username)),displayName:v()(e.username),avatarUrl:v()(e.avatarUrl),slug:v()(e.slug)})},n.className=function(){return"WebsocketOnlineUsersWidget"},n.icon=function(){return"fas fa-user-friends"},n.title=function(){return app.translator.trans("kyrne-websocket.forum.widget.title")},n.content=function(){if(this.loading)return m(a.a,null);var e=this.users;return m("div",{className:"WebsocketOnlineUsersWidget-users"},m("div",{className:"WebsocketOnlineUsersWidget-users-message"},0===e.length?app.translator.trans("kyrne-websocket.forum.widget.empty"):null),m("div",{className:"WebsocketOnlineUsersWidget-users-list"},e.slice(0,15).map(function(e){return m(f.a,{href:app.route("user",{username:e.slug()}),className:"WebsocketOnlineUsersWidget-users-item"},m(c.a,{text:e.displayName()},l()(e)))}),e.length>15?m("span",{className:"WebsocketOnlineUsersWidget-users-item WebsocketOnlineUsersWidget-users-item--plus"},m("span",{className:"Avatar"},"+15")):null))},t}(w.a):function(){};t.a=function(e){(new o.a).add({key:"WebsocketOnlineUsersWidget",component:x,isDisabled:!1,placement:"end",position:1}).extend(e,"kyrne-websocket")}},function(e,t){e.exports=flarum.core.compat["components/DiscussionList"]},function(e,t){e.exports=flarum.core.compat["components/IndexPage"]},function(e,t,n){e.exports=n(26)},function(e,t){e.exports=flarum.core.compat["components/ReplyComposer"]},function(e,t){e.exports=flarum.core.compat["components/ReplyPlaceholder"]},function(e,t){e.exports=flarum.core.compat["helpers/username"]},function(e,t){e.exports=flarum.core.compat["states/DiscussionListState"]},function(e,t){e.exports=flarum.core.compat["components/Button"]},,,,,function(e,t,n){var r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,s=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(27),o)r.regeneratorRuntime=s;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},function(e,t){!function(t){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},i=s.iterator||"@@iterator",a=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag",c="object"==typeof e,p=t.regeneratorRuntime;if(p)c&&(e.exports=p);else{(p=t.regeneratorRuntime=c?e.exports:{}).wrap=w;var l="suspendedStart",d="suspendedYield",f="executing",m="completed",h={},y={};y[i]=function(){return this};var b=Object.getPrototypeOf,v=b&&b(b(E([])));v&&v!==r&&o.call(v,i)&&(y=v);var g=j.prototype=O.prototype=Object.create(y);k.prototype=g.constructor=j,j.constructor=k,j[u]=k.displayName="GeneratorFunction",p.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===k||"GeneratorFunction"===(t.displayName||t.name))},p.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(g),e},p.awrap=function(e){return{__await:e}},_(N.prototype),N.prototype[a]=function(){return this},p.AsyncIterator=N,p.async=function(e,t,n,r){var o=new N(w(e,t,n,r));return p.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},_(g),g[u]="Generator",g[i]=function(){return this},g.toString=function(){return"[object Generator]"},p.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},p.values=E,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return a.type="throw",a.arg=e,t.next=r,o&&(t.method="next",t.arg=n),!!o}for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var s=r;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var i=s?s.completion:{};return i.type=e,i.arg=t,s?(this.method="next",this.next=s.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:E(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),h}}}function w(e,t,n,r){var o=t&&t.prototype instanceof O?t:O,s=Object.create(o.prototype),i=new T(r||[]);return s._invoke=function(e,t,n){var r=l;return function(o,s){if(r===f)throw new Error("Generator is already running");if(r===m){if("throw"===o)throw s;return S()}for(n.method=o,n.arg=s;;){var i=n.delegate;if(i){var a=P(i,n);if(a){if(a===h)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var u=x(e,t,n);if("normal"===u.type){if(r=n.done?m:d,u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=m,n.method="throw",n.arg=u.arg)}}}(e,n,i),s}function x(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function O(){}function k(){}function j(){}function _(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function N(e){var t;this._invoke=function(n,r){function s(){return new Promise(function(t,s){!function t(n,r,s,i){var a=x(e[n],e,r);if("throw"!==a.type){var u=a.arg,c=u.value;return c&&"object"==typeof c&&o.call(c,"__await")?Promise.resolve(c.__await).then(function(e){t("next",e,s,i)},function(e){t("throw",e,s,i)}):Promise.resolve(c).then(function(e){u.value=e,s(u)},function(e){return t("throw",e,s,i)})}i(a.arg)}(n,r,t,s)})}return t=t?t.then(s,s):s()}}function P(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,P(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=x(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var s=o.arg;return s?s.done?(t[e.resultName]=s.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,h):s:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function U(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(U,this),this.reset(!0)}function E(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,s=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return s.next=s}}return{next:S}}function S(){return{value:n,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},,function(e,t,n){"use strict";n.r(t);var r=n(16),o=n.n(r);function s(e,t,n,r,o,s,i){try{var a=e[s](i),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,o)}var i=n(2),a=n(0),u=n.n(a),c=n(20),p=n.n(c),l=n(14),d=n.n(l),f=n(6),h=n.n(f),y=n(15),b=n.n(y),v=n(21),g=n.n(v),w=n(1),x=n.n(w),O=n(17),k=n.n(O),j=n(18),_=n.n(j),N=n(5),P=n.n(N),U=n(19),L=n.n(U),T=n(4),E=n.n(T),S=n(13);u.a.initializers.add("kyrne-websocket",function(){var e=new Promise(function(e,t){"connected"!==u.a.socketStatus&&$.getScript("//cdnjs.cloudflare.com/ajax/libs/pusher/5.1.1/pusher.min.js",function(){if(!u.a.session.user&&u.a.forum.attribute("websocketAuthOnly"))return!1;u.a.forum.attribute("debug")&&(Pusher.logToConsole=!0);var t="1"===u.a.forum.attribute("websocketReverseProxy")?443:u.a.forum.attribute("websocketPort")||2083,n=new Pusher(u.a.forum.attribute("websocketKey"),{authEndpoint:u.a.forum.attribute("apiUrl")+"/websocket/auth",cluster:null,wsHost:u.a.forum.attribute("websocketHost")||window.location.hostname,wsPort:u.a.forum.attribute("websocketPort")||2083,wssPort:t,enableStats:!1,encrypted:u.a.forum.attribute("websocketSecure"),auth:{headers:{"X-CSRF-Token":u.a.session.csrfToken}},enabledTransports:["ws","flash"],disabledTransports:["xhr_polling","xhr_streaming","sockjs"]});return n.connection.bind("state_change",function(e){return u.a.socketStatus=e.current}),e({channels:{main:n.subscribe("public"),user:u.a.session.user?n.subscribe("private-user"+u.a.session.user.id()):null,presence:n.subscribe("presence-forum")},pusher:n})})});u.a.pusher=e,u.a.pushedUpdates=[],Object(i.extend)(d.a.prototype,"oncreate",function(e){var t=this;u.a.pusher.then(function(e){var n=e.channels;Object.keys(n).map(function(e){null!==n[e]&&n[e].bind("newPost",function(e){var n=u.a.discussions.getParams();if(!n.q&&!n.sort&&!n.filter){if(n.tags){var r=u.a.store.getBy("tags","slug",n.tags);if(-1===e.tagIds.indexOf(Number(r.id())))return}var o=String(e.discussionId);u.a.current.get("discussion")&&o===u.a.current.get("discussion").id()||-1!==u.a.pushedUpdates.indexOf(o)||u.a.request({method:"GET",url:u.a.forum.attribute("apiUrl")+"/discussions/"+o}).then(function(e){if(u.a.forum.attribute("websocketAutoUpdate")){var n=u.a.store.pushPayload(e);t.attrs.state.addDiscussion(n),document.hasFocus()||(u.a.setTitleCount(u.a.titleCount+1),$(window).one("focus",function(){return u.a.setTitleCount(0)}))}else u.a.pushedUpdates.push(e),u.a.current.matches(b.a)&&u.a.setTitleCount(u.a.pushedUpdates.length),m.redraw()})}})})})}),Object(i.extend)(d.a.prototype,"onremove",function(e){u.a.pusher.then(function(e){var t=e.channels;Object.keys(t).map(function(e){null!==t[e]&&t[e].unbind("newPost")})})}),Object(i.extend)(d.a.prototype,"view",function(e){var t=this;if(u.a.pushedUpdates){var n=u.a.pushedUpdates.length,r=!1;u.a.pushedUpdates.map(function(e){for(var t=0;t<e.included.length;t++)if("users"===e.included[t].type){u.a.current.data.user&&e.included[t].id==u.a.current.data.user.id()&&(r=!0);break}});var i=function(){var r,i;e.children.unshift(g.a.component({className:"Button Button--block DiscussionList-update",onclick:(r=o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loadingUpdated=!0,e.next=3,u.a.pushedUpdates.map(function(e){for(var n=u.a.store.pushPayload(e),r=0;r<n.payload.included.length;r++){var o=n.payload.included[r];if("users"===o.type){o=new u.a.store.models.users(o),n.user=x()(o),u.a.store.data.discussions[n.id()].user=x()(o);break}}t.attrs.state.addDiscussion(n)});case 3:u.a.pushedUpdates=[],u.a.setTitleCount(0),m.redraw(),t.loadingUpdated=!1;case 7:case"end":return e.stop()}},e,this)}),i=function(){var e=this,t=arguments;return new Promise(function(n,o){var i=r.apply(e,t);function a(e){s(i,n,o,a,u,"next",e)}function u(e){s(i,n,o,a,u,"throw",e)}a(void 0)})},function(){return i.apply(this,arguments)}),loading:t.loadingUpdated},u.a.translator.trans("kyrne-websocket.admin.discussion_list.show_updates_text",{count:n})))};u.a.current.data.user?r&&i():n&&i()}}),Object(i.extend)(p.a.prototype,"parseResults",function(){u.a.pushedUpdates=[],u.a.current.matches(b.a)&&u.a.setTitleCount(0),m.redraw()}),Object(i.extend)(h.a.prototype,"oncreate",function(){var e=this;u.a.pusher.then(function(t){var n=t.channels;Object.keys(n).map(function(t){null!==n[t]&&n[t].bind("newPost",function(t){var n=String(t.discussionId);if(e.discussion&&e.discussion.id()===n&&e.stream){var r=e.discussion.commentCount();u.a.store.find("discussions",e.discussion.id()).then(function(){e.stream.update().then(function(){document.hasFocus()||(u.a.setTitleCount(Math.max(0,e.discussion.commentCount()-r)),$(window).one("focus",function(){return u.a.setTitleCount(0)})),m.redraw()})})}})})})}),Object(i.extend)(h.a.prototype,"onremove",function(){u.a.pusher.then(function(e){var t=e.channels;Object.keys(t).map(function(e){null!==t[e]&&t[e].unbind("newPost")})})}),Object(i.extend)(b.a.prototype,"actionItems",function(e){e.remove("refresh")}),u.a.pusher.then(function(e){var t=e.channels;t.user&&t.user.bind("notification",function(){u.a.session.user.pushAttributes({unreadNotificationCount:u.a.session.user.unreadNotificationCount()+1,newNotificationCount:u.a.session.user.newNotificationCount()+1}),u.a.notifications.clear(),m.redraw()})}),Object(i.extend)(h.a.prototype,"view",function(e){var t=this;app.pusher.then(function(e){!app.discussions.presence&&t.discussion&&(app.discussions.presence=e.pusher.subscribe("presence-"+t.discussion.id()),app.discussions.presence.bind("pusher:subscription_succeeded",function(e){t.membersOnline=[],Object.keys(e.members).map(function(n){app.discussions.presence.members.myID!=n&&"string"!=typeof n&&(t.membersOnline.push({id:x()(n),color:x()("#"+E()(e.members[n].username)),displayName:x()(e.members[n].username),avatarUrl:x()(e.members[n].avatarUrl)}),m.redraw())})}),app.discussions.presence.bind("pusher:member_removed",function(e){t.membersOnline.some(function(n,r){if(n.id()==e.id)return t.membersOnline.splice(r,1),m.redraw(),!0})}),app.discussions.presence.bind("pusher:member_added",function(e){app.discussions.presence.members.myID!=e.id&&"string"!=typeof e.id&&(t.membersOnline.push({id:x()(e.id),color:x()("#"+E()(e.info.username)),displayName:x()(e.info.username),avatarUrl:x()(e.info.avatarUrl)}),m.redraw())}))})}),Object(i.extend)(h.a.prototype,"sidebarItems",function(e){this.membersOnline&&this.membersOnline.length&&e.add("viewing",m("div",{className:"UsersOnline"},m("legend",{className:"UsersOnline-title"},app.translator.trans("kyrne-websocket.forum.discussion_page.viewing_title")),m("ul",{className:"UsersOnline-list"},this.membersOnline.map(function(e){return m("li",{className:"UsersOnline-item"},P()(e),L()(e))}))),-101)}),Object(i.extend)(h.a.prototype,"oncreate",function(e){window.matchMedia("only screen and (max-width: 767px)").matches||$(window).on("scroll",function(e){var t=$(".DiscussionPage-nav").children();$(window).scrollTop()>147?(t.css("position","fixed"),t.addClass("websocket-nav")):(t.css("position","absolute"),t.removeClass("websocket-nav"))})}),Object(i.extend)(h.a.prototype,"onremove",function(e){var t=this;app.pusher.then(function(e){app.discussions.presence&&(app.discussions.presence=e.pusher.unsubscribe("presence-"+t.discussion.id()),app.discussions.presence=null)})}),Object(i.extend)(k.a.prototype,"oninit",function(){var e=this;!function t(){e.typingTimeout=!0,setTimeout(function(){t()},18e3)}()}),Object(i.extend)(k.a.prototype,"view",function(){var e=this;app.session.user&&$(".TextEditor-editor").on("keydown",function(){e.typingTimeout&&(e.typingTimeout=!1,app.request({method:"POST",url:app.forum.attribute("apiUrl")+"/posts/typing",body:{discussionId:e.attrs.discussion.id()}}))})}),Object(i.extend)(_.a.prototype,"oninit",function(){var e=this;this.typers={},setTimeout(function(){app.discussions.presence&&app.discussions.presence.bind("typing",function(t){e.typers[t.userId]||t.userId==app.discussions.presence.members.myID||(e.typers[t.userId]={id:x()(t.userId),color:x()("#"+E()(t.username)),displayName:x()(t.username),avatarUrl:x()(t.avatarUrl),time:new Date}),m.redraw()})},2e3),function t(){Object.keys(e.typers).map(function(t){e.typers[t].time<new Date(Date.now()-2e4)&&(delete e.typers[t],m.redraw())}),setTimeout(function(){t()},2e4)}()}),Object(i.extend)(_.a.prototype,"view",function(e){var t=this;Object.keys(this.typers).length&&e.children.push(m("div",{className:"ReplyPlaceholder-typers"},m("ul",{className:"ReplyPlaceholder-typers-list"},Object.keys(this.typers).map(function(e){return m("li",{className:"ReplyPlaceholder-typers-item"},P()(t.typers[e]),L()(t.typers[e]),m("div",{className:"tiblock"},m("div",{className:"tidot"}),m("div",{className:"tidot"}),m("div",{className:"tidot"})))}))))}),u.a.initializers.has("afrux/forum-widgets-core")&&Object(S.a)(u.a)})}]);
//# sourceMappingURL=forum.js.map