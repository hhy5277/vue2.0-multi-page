webpackJsonp([8,6],{0:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=n(4),o=n(5),r=a(o),s=n(246),u=a(s),c=n(255),l=a(c);n(197);new i.Vue({el:"#home",store:r.default,template:'<div class="pageview"><home-header></home-header><home-index></home-index></div>',components:{"home-index":l.default,"home-header":u.default}})},1:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.PAGE_SET_INFO="PAGE_SET_INFO",e.SHOPPING_GET_NUM="SHOPPING_GET_NUM",e.TOP_RIGHT_CLICK_FONT="TOP_RIGHT_CLICK_FONT",e.GLOBAL_SET_LOADINNG="GLOBAL_SET_LOADINNG",e.SET_TOKEN="SET_TOKEN",e.INDEX_GET_DATA="INDEX_GET_DATA",e.MESSAGE_GET_LIST="MESSAGE_GET_LIST",e.MESSAGE_LIST_CURRENTPAGE="MESSAGE_LIST_CURRENTPAGE",e.SHOPPINGCART_GET_LIST="SHOPPINGCART_GET_LIST",e.SHOPPINGCART_LIST_CURRENTPAGE="SHOPPINGCART_LIST_CURRENTPAGE",e.SHOPPINGCART_SELECT_ALL="SHOPPINGCART_SELECT_ALL",e.SHOPPINGCART_SELECT_ITEM="SHOPPINGCART_SELECT_ITEM",e.SHOPPINGCART_DELETE_SELECT="SHOPPINGCART_DELETE_SELECT",e.SHOPPINGCART_DELETE_ARRAY="SHOPPINGCART_DELETE_ARRAY",e.CALCULATE_TOTAL_PRICE="CALCULATE_TOTAL_PRICE",e.MESSAGE_GET_COUNTER="MESSAGE_GET_COUNTER",e.CENTER_GET_DATA="CENTER_GET_DATA",e.COLLECT_GET_LIST="COLLECT_GET_LIST",e.COLLECT_LIST_CURRENTPAGE="COLLECT_LIST_CURRENTPAGE",e.SHOW_CHECKBOX="SHOW_CHECKBOX",e.LOGIN_IS_SUCCESS="LOGIN_IS_SUCCESS",e.DESTINATION_GET_INDEX="DESTINATION_GET_INDEX",e.BECOMMENT_GET_LIST="BECOMMENT_GET_LIST",e.BECOMMENT_LIST_CURRENTPAGE="BECOMMENT_LIST_CURRENTPAGE"},2:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(14),r=i(o),s=n(5),u=i(s),c=n(1),l=a(c),f=n(54),d=i(f),_=n(18),p=_.build.assetsPublicPath+_.build.assetsSubDirectory+"/api/";d.default.interceptors.request.use(function(t){return u.default.commit(l.GLOBAL_SET_LOADINNG,!0),t},function(t){return r.default.reject(t)}),d.default.interceptors.response.use(function(t){return u.default.commit(l.GLOBAL_SET_LOADINNG,!1),t},function(t){return r.default.reject(t)}),e.default={getMessageList:function(t,e){d.default.get(p+"center/getNotification.json?t="+1*new Date+"&currentPage="+t+"&callback=?").then(function(t){t.status>=200&&t.status<300&&e(t.data)}).catch(function(t){return r.default.reject(t)})},getLogin:function(t,e){d.default.get(p+"user/login.json?t="+1*new Date+"&callback=?").then(function(t){t.status>=200&&t.status<300&&e(t.data)}).catch(function(t){return r.default.reject(t)})},getShoppingCartNum:function(t){d.default.get(p+"order/countShopCartNum.json?t="+1*new Date+"&callback=?").then(function(e){e.status>=200&&e.status<300&&t(e.data)}).catch(function(t){return r.default.reject(t)})},getCollectList:function(t,e){return new r.default(function(n,a){d.default.get(p+"center/getFavourite.json?t="+1*new Date+"&currentPage="+t+"&callback=?").then(function(t){t.status>=200&&t.status<300&&(e(t.data),n(t.data))}).catch(function(t){a(t)})})},getBeCommentList:function(t,e){return new r.default(function(t,n){d.default.get("/center/waitForCommentList").then(function(n){n.status>=200&&n.status<300&&(e(n.data),t(n.data))}).catch(function(t){n(t)})})},getShoppingCartList:function(t,e){return new r.default(function(n,a){d.default.get(p+"order/shopCart.json?t="+1*new Date+"&currentPage="+t+"&callback=?").then(function(t){t.status>=200&&t.status<300&&(e(t.data),n(t.data))}).catch(function(t){a(t)})})},deleteShoppingCartList:function(t,e){d.default.get("/shopping/delete").then(function(n){n.status>=200&&n.status<300&&e(n.data,t)}).catch(function(t){return r.default.reject(t)})},getCenterData:function(t){return new r.default(function(e,n){d.default.get(p+"center/getCenter.json?t="+1*new Date+"&callback=?").then(function(n){n.status>=200&&n.status<300&&(t(n.data),e(n.data))}).catch(function(t){n(t)})})},getIndexData:function(t){return new r.default(function(e,n){d.default.get(p+"home/homepageV3.json?t="+1*new Date+"&callback=?").then(function(n){n.status>=200&&n.status<300&&(t(n.data),e(n.data))}).catch(function(t){n(t)})})},getDestinationIndex:function(t){d.default.get(p+"destination/getDestination.json?t="+1*new Date+"&callback=?").then(function(e){e.status>=200&&e.status<300&&t(e.data)}).catch(function(t){return r.default.reject(t)})}}},4:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=n(13),o=a(i),r=n(37),s=a(r),u=n(19),c=a(u),l=n(38),f=a(l),d=n(7),_=a(d),p=n(63),g=a(p),h=n(64),E=a(h),C=n(67),T=a(C),m=n(62),v=a(m),S=n(22),L=(a(S),n(36)),P=a(L),I=n(35),O=a(I);n(33),o.default.use(v.default),o.default.use(T.default),o.default.use(E.default),o.default.use(_.default),o.default.use(g.default);var y={"zh-CN":P.default,"en-US":O.default},N=new g.default({locale:"zh-CN",messages:y});n(34),t.exports={Vue:o.default,$:s.default,Common:c.default,wx:f.default,i18n:N,VueRouter:T.default}},5:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(13),o=a(i),r=n(6),s=a(r),u=n(30),c=a(u),l=n(26),f=a(l),d=n(31),_=a(d),p=n(29),g=a(p),h=n(28),E=a(h),C=n(25),T=a(C),m=n(27),v=a(m),S=n(32),L=a(S),P=n(24),I=a(P);o.default.use(s.default),e.default=new s.default.Store({modules:{index:E.default,common:f.default,my:_.default,messageList:c.default,login:g.default,collect:T.default,destinationIndex:v.default,shoppingCart:L.default,beComment:I.default},strict:!1})},9:function(t,e){"use strict";t.exports={NODE_ENV:'"production"'}},17:function(t,e,n){"use strict";var a=n(68),i=n(9);t.exports=a(i,{NODE_ENV:'"development"'})},18:function(t,e,n){(function(e){"use strict";var a=n(61);t.exports={build:{env:n(9),assetsRoot:a.resolve(e,"../dist"),assetsSubDirectory:"static",assetsPublicPath:"https://github.com/luchanan/vue2.0-multi-page/dist/",productionSourceMap:!1,productionGzip:!1,productionGzipExtensions:["js","css"]},dev:{env:n(17),port:8080,assetsSubDirectory:"static",assetsPublicPath:"/",proxyTable:{},cssSourceMap:!1}}}).call(e,"/")},19:function(t,e){"use strict";var n={isLogin:function(){return null!=window.localStorage.getItem("userInfo")},hasDeviceId:!1,index2PageCount:function(t,e){return Math.ceil(t/(e||10))},goBack:function(){window.history.go(-1)}};t.exports=n},20:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(21),o=a(i),r=[];r.push(o.default),e.default=r},21:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(8),o=(a(i),{path:"/center/waitForCommentList",data:{error_code:1e3,error_msg:"ok","execute_time|1-10":1,"comment_list|10":[{product_name:"@cparagraph()","id|+1":1e3,order_date:"@datetime()"}],"last_index|+10":9,total_index:31}});e.default=o},22:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function i(t){t.forEach(function(t){r.default.mock(t.path,t.data)})}Object.defineProperty(e,"__esModule",{value:!0});var o=n(8),r=a(o),s=n(23),u=a(s),c=n(20),l=a(c);i(u.default),i(l.default),e.default=r.default},23:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(8),o=(a(i),[{path:"/center/waitForCommentList",data:{"error_code|1":["0000","1000"],error_msg:function(){var t=this.error_code,e="";switch(t){case"0000":e="删除成功";break;case"1000":e="删除失败";break;default:e="未知错误"}return e},"execute_time|1-10":1}}]);e.default=o},24:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o,r=n(3),s=i(r),u=n(1),c=a(u),l=n(4),f=n(2),d=i(f),_={beCommentList:[],hasMore:!0,currentPage:0},p={getBeCommentList:function(t){var e=t.commit;if(_.hasMore)return e(c.BECOMMENT_LIST_CURRENTPAGE),d.default.getBeCommentList(_.currentPage,function(t){e(c.BECOMMENT_GET_LIST,t)})}},g=(o={},(0,s.default)(o,c.BECOMMENT_GET_LIST,function(t,e){console.log(e),t.beCommentList=t.beCommentList.concat(e.comment_list),t.hasMore=t.currentPage<l.Common.index2PageCount(e.total_index)==!0}),(0,s.default)(o,c.BECOMMENT_LIST_CURRENTPAGE,function(t){t.currentPage+=1,t.hasMore=!1}),o);e.default={state:_,actions:p,mutations:g}},25:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o,r=n(3),s=i(r),u=n(1),c=a(u),l=n(4),f=n(2),d=i(f),_={showCheckbox:!1,collectList:[],hasMore:!0,currentPage:0},p={getCollectList:function(t){var e=t.commit;if(_.hasMore)return e(c.COLLECT_LIST_CURRENTPAGE),d.default.getCollectList(_.currentPage,function(t){e(c.COLLECT_GET_LIST,t)})}},g={getCollectList:function(t){return t.collectList},collectHasMore:function(t){return t.hasMore},getCheckboxShow:function(t){return t.showCheckbox}},h=(o={},(0,s.default)(o,c.COLLECT_GET_LIST,function(t,e){t.collectList=t.collectList.concat(e.favourite_list),t.hasMore=t.currentPage<l.Common.index2PageCount(e.total_index)==!0}),(0,s.default)(o,c.COLLECT_LIST_CURRENTPAGE,function(t){t.currentPage+=1,t.hasMore=!1}),(0,s.default)(o,c.SHOW_CHECKBOX,function(t){t.showCheckbox?t.showCheckbox=!1:t.showCheckbox=!0}),o);e.default={state:_,actions:p,getters:g,mutations:h}},26:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o,r=n(3),s=i(r),u=n(50),c=i(u),l=n(7),f=n(1),d=a(f),_=n(2),p=i(_),g={globalLoadinng:!0,headerTitle:"我的",left:"",right:"",type:"",shoppingCartNum:0,token:null},h={setPageInfo:function(t,e){var n=t.commit;n(d.PAGE_SET_INFO,e)},getShoppingCartNum:function(t){var e=t.commit;p.default.getShoppingCartNum(function(t){e(d.SHOPPING_GET_NUM,t)})}},E={getPageInfo:function(t){return t},getShoppingCartNum:function(t){return t.shoppingCartNum}},C=(o={},(0,s.default)(o,d.SET_TOKEN,function(t,e){t=(0,c.default)(t,e)}),(0,s.default)(o,d.PAGE_SET_INFO,function(t,e){t=(0,c.default)(t,e)}),(0,s.default)(o,d.SHOPPING_GET_NUM,function(t,e){t.shoppingCartNum=e.shop_cart_num}),(0,s.default)(o,d.GLOBAL_SET_LOADINNG,function(t,e){t.globalLoadinng=e,t.globalLoadinng?l.Indicator.open():l.Indicator.close()}),(0,s.default)(o,d.TOP_RIGHT_CLICK_FONT,function(t,e){t.right.font===e.afterFont?t.right.font="编辑":t.right.font="完成"}),o);e.default={state:g,actions:h,getters:E,mutations:C}},27:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=i(o),s=n(1),u=a(s),c=n(2),l=i(c),f={getDestinationIndex:[]},d={getDestinationIndex:function(t){var e=t.commit;l.default.getDestinationIndex(function(t){e(u.DESTINATION_GET_INDEX,t)})}},_={getDestinationIndex:function(t){return t.getDestinationIndex}},p=(0,r.default)({},u.DESTINATION_GET_INDEX,function(t,e){t.getDestinationIndex=e.country_list});e.default={state:f,actions:d,getters:_,mutations:p}},28:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=i(o),s=n(1),u=a(s),c=n(2),l=i(c),f={indexData:[]},d={getIndexData:function(t){var e=t.commit;return l.default.getIndexData(function(t){e(u.INDEX_GET_DATA,t)})}},_={getIndexData:function(t){return t.indexData}},p=(0,r.default)({},u.INDEX_GET_DATA,function(t,e){t.indexData=e});e.default={state:f,actions:d,getters:_,mutations:p}},29:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=i(o),s=n(14),u=i(s),c=n(1),l=a(c),f=n(2),d=i(f),_={loginSuccess:!1,errorMessage:""},p={goLogin:function(t,e){var n=t.commit;return new u.default(function(t,a){d.default.getLogin(e,function(e){n(l.LOGIN_IS_SUCCESS,e),t(e)})})}},g={getLoginSuccess:function(t){return t.loginSuccess},getLoginMessage:function(t){return t.errorMessage}},h=(0,r.default)({},l.LOGIN_IS_SUCCESS,function(t,e){t.loginSuccess="0000"===e.error_code,t.errorMessage=e.error_msg});e.default={state:_,actions:p,getters:g,mutations:h}},30:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o,r=n(3),s=i(r),u=n(4),c=n(2),l=i(c),f=n(1),d=a(f),_={listData:[],hasMore:!0,currentPage:0,totalPage:0},p={getMessageList:function(t){var e=t.commit;_.hasMore&&(e(d.MESSAGE_LIST_CURRENTPAGE),l.default.getMessageList(_.currentPage,function(t){e(d.MESSAGE_GET_LIST,t)}))}},g={getMessageListGet:function(t){return t.listData},hasMore:function(t){return t.hasMore}},h=(o={},(0,s.default)(o,d.MESSAGE_GET_LIST,function(t,e){t.listData=t.listData.concat(e.notification_list),t.hasMore=t.currentPage<u.Common.index2PageCount(e.total_index)==!0}),(0,s.default)(o,d.MESSAGE_LIST_CURRENTPAGE,function(t){t.currentPage+=1,t.hasMore=!1}),o);e.default={state:_,actions:p,getters:g,mutations:h}},31:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o,r=n(3),s=i(r),u=n(1),c=a(u),l=n(2),f=i(l),d={messageCount:0,centerData:[]},_={getMessageCount:function(t,e){var n=t.commit;n(c.MESSAGE_GET_COUNTER,e)},gerCenterData:function(t){var e=t.commit;return f.default.getCenterData(function(t){e(c.CENTER_GET_DATA,t)})}},p={getMessageCount:function(t){return t.messageCount},getCenterData:function(t){return t.centerData}},g=(o={},(0,s.default)(o,c.MESSAGE_GET_COUNTER,function(t,e){t.messageCount=e}),(0,s.default)(o,c.CENTER_GET_DATA,function(t,e){t.centerData=e}),o);e.default={state:d,actions:_,getters:p,mutations:g}},32:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o,r=n(3),s=i(r),u=n(5),c=i(u),l=n(1),f=a(l),d=n(4),_=n(2),p=i(_),g=n(7),h={go:"去结算",delete:"删除"},E={shoppingCartCheckbox:!1,shoppingList:[],hasMore:!0,currentPage:0,totalPrice:0,buyBtnDisabled:!0,buyBtnCurrentFont:h.go,priceShow:{visibility:"visible"},checkAll:!1,itemChecked:[],isDelete:!1,deleteIDs:[]},C={getShoppingCartList:function(t){var e=t.commit;if(E.hasMore)return e(f.SHOPPINGCART_LIST_CURRENTPAGE),p.default.getShoppingCartList(E.currentPage,function(t){e(f.SHOPPINGCART_GET_LIST,t)})},deleteShoppingCartList:function(t){var e=t.commit,n=t.state,a=n.deleteIDs;(0,g.MessageBox)({title:"",showCancelButton:!0,message:"确定删除这"+a.length+"个商品?",callback:function(t){"confirm"===t&&p.default.deleteShoppingCartList(n.deleteIDs,function(t){console.log(t),"0000"===t.error_code?e(f.SHOPPINGCART_DELETE_SELECT,t):(0,g.Toast)({message:t.error_msg,duration:3e3})})}})}},T={getShoppingList:function(t){return t.shoppingList},shoppingCartHasMore:function(t){return t.hasMore}},m=(o={},(0,s.default)(o,f.SHOPPINGCART_DELETE_ARRAY,function(t){var e=(t.shoppingList.length,[]),n=t.shoppingList.filter(function(t,e,n){return t.checked===!0});n.forEach(function(t,n,a){e.push(t.id)}),t.deleteIDs=e}),(0,s.default)(o,f.SHOPPINGCART_DELETE_SELECT,function(t,e){t.deleteIDs.forEach(function(n,a,i){var o=t.shoppingList.map(function(t){return t.id}).indexOf(n);t.shoppingList.splice(o,1),(0,g.Toast)({message:e.error_msg,duration:3e3})})}),(0,s.default)(o,f.SHOPPINGCART_SELECT_ITEM,function(t,e){var n=(t.shoppingList.length,t.shoppingList.findIndex(function(t){return t.id===e}));n>-1&&(t.shoppingList[n].checked=!t.shoppingList[n].checked);var a=t.shoppingList.every(function(t,e){return t.checked});t.checkAll=a===!0;var i=t.shoppingList.some(function(t,e){return t.checked});t.buyBtnDisabled=i===!1,c.default.commit(f.SHOPPINGCART_DELETE_ARRAY),c.default.commit("CALCULATE_TOTAL_PRICE")}),(0,s.default)(o,f.CALCULATE_TOTAL_PRICE,function(t){var e=0;t.deleteIDs.forEach(function(n,a,i){var o=t.shoppingList.map(function(t){return t.id}).indexOf(n);e+=Number(t.shoppingList[o].payment)}),t.totalPrice=e}),(0,s.default)(o,f.SHOPPINGCART_SELECT_ALL,function(t){t.shoppingList.forEach(function(e){e.checked=!t.checkAll}),t.checkAll=!t.checkAll,c.default.commit(f.SHOPPINGCART_DELETE_ARRAY),c.default.commit("CALCULATE_TOTAL_PRICE"),t.buyBtnDisabled=t.checkAll===!1}),(0,s.default)(o,f.SHOPPINGCART_GET_LIST,function(t,e){e.cart_list.forEach(function(t,e,n){t.checked=!1}),t.shoppingList=t.shoppingList.concat(e.cart_list),t.hasMore=t.currentPage<d.Common.index2PageCount(e.total_index)==!0}),(0,s.default)(o,f.SHOPPINGCART_LIST_CURRENTPAGE,function(t){t.currentPage+=1,t.hasMore=!1}),(0,s.default)(o,f.SHOW_CHECKBOX,function(t){if(c.default.commit("TOP_RIGHT_CLICK_FONT",{afterFont:"完成"}),t.shoppingCartCheckbox){t.shoppingCartCheckbox=!1,t.priceShow={visibility:"visible"},t.buyBtnDisabled=!0,t.buyBtnCurrentFont=h.go,t.isDelete=!1;var e=t.shoppingList.some(function(t,e){return t.checked});t.buyBtnDisabled=e===!1}else t.shoppingCartCheckbox=!0,t.priceShow={visibility:"hidden"},t.buyBtnDisabled=!1,t.buyBtnCurrentFont=h.delete,t.isDelete=!0}),o);e.default={state:E,actions:C,getters:T,mutations:m}},33:function(t,e){},34:function(t,e){},35:function(t,e){t.exports={setting:{topTitle:"setting",share:"share friends",advice:"advice",changeLanguage:"change language",logout:"log out"}}},36:function(t,e){t.exports={setting:{topTitle:"设置",share:"告诉朋友",advice:"意见反馈",changeLanguage:"切换语言",logout:"退出登录"}}},37:function(t,e){t.exports=jQuery},38:function(t,e){t.exports=jWeixin},55:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(10),o=a(i),r=n(4),s=n(6);e.default={props:["footerIndex"],mounted:function(){var t=this;document.querySelector("footer").children[0].children[t.footerIndex].children[0].classList.add("on"),r.Common.isLogin()&&this.$store.dispatch("getShoppingCartNum")},computed:(0,o.default)({},(0,s.mapGetters)({getShoppingCartNum:"getShoppingCartNum"}))}},65:function(t,e,n){var a,i;a=n(55);var o=n(66);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=a},66:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("ul",{staticClass:"clearfix"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("li",[n("a",{staticClass:"cart",attrs:{href:"shoppingCart.html","data-font":"购物车","data-count":t.getShoppingCartNum}})]),t._v(" "),t._m(2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"index.html","data-font":"首页"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"destination",attrs:{href:"destinationIndex.html","data-font":"目的地"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"my",attrs:{href:"center.html","data-font":"我的"}})])}]}},132:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},133:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a="undefined"!=typeof window;a&&(window.Swiper=n(111)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&a&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&a){delete t.options.notNextTick;var e=!1;for(var n in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(n)&&t.options[n]&&(e=!0,t.defaultSwiperClasses[n]=t.options[n]);var i=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(i):i()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},134:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{goTo:function(){console.log("a")}}}},135:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{goTo:function(){console.log("b")}}}},136:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(245),o=a(i),r=n(244),s=a(r);e.default={data:function(){return{msg:"头部"}},components:{"service-icon":o.default,"search-icon":s.default}}},145:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(57),o=a(i),r=n(56),s=a(r),u=n(10),c=a(u),l=n(65),f=a(l),d=n(6),_=n(242),p=n(5);a(p);e.default={data:function(){var t=this;return{swiperOption:{swiperSlides:0,autoplay:5e3,autoplayDisableOnInteraction:!1,notNextTick:!0,pagination:".swiper-pagination",onSlideNextEnd:function(){t.swiperSlideEnd()}}}},computed:(0,c.default)({swiper:function(){return this.$refs.mySwiperA.swiper}},(0,d.mapGetters)({indexData:"getIndexData"})),mounted:function(){var t=this;(0,s.default)(o.default.mark(function e(){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("getIndexData");case 3:t.swiperSlideEnd(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}},e,t,[[0,6]])}))()},components:{swiper:_.swiper,swiperSlide:_.swiperSlide,"common-footer":f.default},methods:{swiperSlideEnd:function(){var t=this.swiper.slides[this.swiper.activeIndex],e=t.getAttribute("data-image");if(null!==e){var n=new window.Image;n.src=e,n.onload=function(){t.removeAttribute("data-image"),t.setAttribute("lazy","loaded"),t.style.cssText="background-image:url("+e+")"}}}}}},197:function(t,e){},202:function(t,e){},203:function(t,e){},204:function(t,e){},244:function(t,e,n){var a,i;n(204),a=n(134);var o=n(274);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-682a2f84",t.exports=a},245:function(t,e,n){var a,i;n(202),a=n(135);var o=n(272);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-5a880481",t.exports=a},246:function(t,e,n){var a,i;n(203),a=n(136);var o=n(273);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-5e3ec4af",t.exports=a},255:function(t,e,n){var a,i;a=n(145);var o=n(269);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=a},258:function(t,e,n){var a,i;a=n(132);var o=n(264);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=a},259:function(t,e,n){var a,i;a=n(133);var o=n(266);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=a},264:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}},266:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),n("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},269:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container padding_b_120"},[n("swiper",{ref:"mySwiperA",attrs:{options:t.swiperOption,id:"carrousel"}},[t._l(t.indexData.banner_list,function(t){return n("swiper-slide",{staticClass:"slide bg_lazyload",attrs:{lazy:"loading","data-image":t.image}},[n("a",{attrs:{href:""}})])}),t._v(" "),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2),t._v(" "),n("div",{staticClass:"item boutique"},[n("h1",{staticClass:"title"},[t._v("精选频道")]),t._v(" "),n("div",{staticClass:"scroll"},[n("ul",t._l(t.indexData.line_list,function(t){return n("li",[n("a",{attrs:{href:""}},[n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.image,expression:"line.image",arg:"background-image"}],staticClass:"bg bg_lazyload"})])])}),0)])]),t._v(" "),t._l(t.indexData.data_list,function(e){return n("div",{class:{item:2==e.data_type,"item surprise":1==e.data_type&&3==e.display_type,"item surprise activity":0==e.data_type&&3==e.display_type,"item surprise list":1==e.data_type&&2==e.display_type}},[n("h1",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"scroll"},[n("ul",t._l(e.data,function(a){return n("li",[n("a",{attrs:{href:""}},[n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:a.image,expression:"item.image",arg:"background-image"}],staticClass:"bg bg_lazyload"}),t._v(" "),3==e.display_type&&2==e.data_type?n("div",{staticClass:"text flex flex_v_center"},[n("div",{staticClass:"flex_item"},[t._v(t._s(a.title))])]):t._e(),t._v(" "),3==e.display_type&&1==e.data_type||1==e.data_type&&2==e.display_type?n("div",{staticClass:"bottom_title"},[n("h2",[t._v(t._s(a.title))]),t._v(" "),n("div",{staticClass:"flex"},[n("div",{staticClass:"left flex_item"},[t._v("已售"+t._s(a.sale_amount)+"份")]),t._v(" "),n("div",{staticClass:"right flex_item"},[t._v(t._s(a.price))])])]):t._e()])])}),0)])])}),t._v(" "),n("common-footer",{attrs:{footerIndex:"0"}})],2)},staticRenderFns:[]}},272:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"service",attrs:{href:"javascript:void(0)","data-src":"http://www.frontsucai.com"}},[t._v("客服帮助")])},staticRenderFns:[]}},273:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"padding_24 clearfix"},[n("search-icon",{staticClass:"float_left"}),t._v(" "),n("service-icon",{staticClass:"float_right"})],1)},staticRenderFns:[]}},274:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"search",attrs:{href:"http://www.frontsucai.com"}},[t._v("搜索按钮")])},staticRenderFns:[]}}});