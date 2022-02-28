import{r as _e,o as c,c as k,a as he,b as fe,j as ye,d as ge,e as v,f as N,g as d,h as a,u as p,i as l,p as L,k as I,l as y,m as Ce,t as h,n as G,q as R,s as j,v as q,w as Z,x as F,y as W,z as Q,A as K,F as b,B as J,C as X,D as ee,E as te,G as we,H as se,I as oe,J as ae,K as ke,L as be,M as Be,N as U,O as De,P as Le,Q as Ie}from"./vendor.a1f6a28d.js";function xo(){import("data:text/javascript,")}const xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}};xe();var _=(e,t)=>{const s=e.__vccOpts||e;for(const[o,n]of t)s[o]=n;return s};const Ee={};function Fe(e,t){const s=_e("router-view");return c(),k(s)}var Qe=_(Ee,[["render",Fe]]);const Se=he();function Me(e,t,s=800){if(typeof s=="number"){const o=new Date;o.setTime(o.getTime()+s*1e3),document.cookie=e+"="+encodeURI(t)+";expires="+o.toUTCString()}else document.cookie=e+"="+encodeURI(t)+";expires="+s.toUTCString()}function ne(e){const t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]*)(;|$)"));return t!=null?decodeURI(t[2]):null}function Te(e){const t=new Date;t.setTime(t.getTime()-1);const s=ne(e);s!=null&&(document.cookie=e+"="+s+";expires="+t.toUTCString())}var P={setCookie:Me,getCookie:ne,clearCookie:Te};const He=e=>{const t=fe(e).exp;if(typeof t=="number")return new Date(t*1e3);throw new TypeError("cannot extract time from jwt")},Ve=(e,t)=>{t?P.setCookie("ACCESS_TOKEN","",t):P.setCookie("ACCESS_TOKEN","",He(e)),localStorage.setItem("ACCESS_TOKEN",e)},$e=e=>{localStorage.setItem("REFRESH_TOKEN",e)},Ne=()=>P.getCookie("ACCESS_TOKEN")!==null?localStorage.getItem("ACCESS_TOKEN"):null,qe=()=>localStorage.getItem("REFRESH_TOKEN"),Ke=()=>{P.clearCookie("ACCESS_TOKEN"),localStorage.removeItem("ACCESS_TOKEN"),localStorage.removeItem("REFRESH_TOKEN")};var B={setAccessToken:Ve,setRefreshToken:$e,getAccessToken:Ne,getRefreshToken:qe,removeAllToken:Ke};const Je=ye({useNativeBigInt:!0});class S{static instance;axiosInstance;constructor(){this.axiosInstance=ge.create({baseURL:"/api",timeout:1e4,transformResponse:[t=>Je.parse(t)]}),this.initInterceptors()}static getInstance(){return S.instance||(S.instance=new S),S.instance}requestSuccess(t){return t.headers&&t.headers.needToken!==!1&&(t.headers.Authorization="Bearer "+B.getAccessToken()),t}requestFail(t){Promise.reject(t.toJSON())}responseSuccess(t){if(t.headers&&t.headers.authorization){const s=t.headers.authorization.split(" ")[1];B.setAccessToken(s)}return Promise.resolve(t)}responseFail(t){const s=t.response;if(s)switch(s.status){case 400:t.message="\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF\uFF0C\u8BF7\u91CD\u8BD5";break;case 412:t.message="\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4FE1\u606F\u7684\u5148\u51B3\u6761\u4EF6\u9519\u8BEF";break;case 401:t.message="\u767B\u5F55\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55";break;case 500:case 502:case 504:case 505:t.message="\u670D\u52A1\u5668\u672A\u54CD\u5E94\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458";break;case 503:t.message="\u670D\u52A1\u5668\u7E41\u5FD9\uFF0C\u8BF7\u91CD\u8BD5";break;case 501:t.message="\u670D\u52A1\u5668\u4E0D\u652F\u6301\u8BF7\u6C42\u7684\u529F\u80FD\uFF0C\u65E0\u6CD5\u5B8C\u6210\u8BF7\u6C42";break;default:t.message="\u7CFB\u7EDF\u5F02\u5E38\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458";break}else t.message==="Network Error"&&(t.message="\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u662F\u5426\u6B63\u5E38");return Promise.reject(t)}initInterceptors(){this.axiosInstance.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",this.axiosInstance.interceptors.request.use(this.requestSuccess,this.requestFail),this.axiosInstance.interceptors.response.use(this.responseSuccess,this.responseFail)}}const f=S.getInstance().axiosInstance,Ue=()=>typeof B.getAccessToken()=="string",Pe=(e,t,s)=>f.post("/users",{userName:e,password:s,nickname:t}),Oe=async()=>(await f.get("/users/current")).data;var T;(function(e){e.SessionURL="/sessions",e.sessionTokenURL="/sessions/current/tokens"})(T||(T={}));const je=async(e,t)=>{const s=await f.post(T.SessionURL,{userName:e,password:t},{headers:{needToken:!1}}),{accessToken:o,expiresIn:n,refreshToken:i}=s.data;B.setAccessToken(o,n),typeof i=="string"&&B.setRefreshToken(i)},ze=()=>f.get(T.SessionURL),Ye=async()=>{await f.delete(T.SessionURL),B.removeAllToken()};class D{static instance;static intervel=2e3;intervelId=0;static getInstance(){return D.instance||(D.instance=new D),D.instance}async startTimer(){this.intervelId=setInterval(this.test,D.intervel)}async stopTimer(){clearInterval(this.intervelId)}test(){ze()}}const Ge={"aria-hidden":"true"},Re=["xlink:href","fill"],r=v({props:{prefix:{type:String,default:"icon"},name:{type:String,required:!0},color:{type:String,default:"#333"}},setup(e){const t=e,s=N(()=>`#${t.prefix}-${t.name}`);return(o,n)=>(c(),d("svg",Ge,[a("use",{"xlink:href":p(s),fill:e.color},null,8,Re)]))}});const Ze=e=>(L("data-v-21f51f11"),e=e(),I(),e),We={class:"footer"},Xe={class:"new-list"},et=Ze(()=>a("div",null,"\u65B0\u5EFA\u5217\u8868",-1)),tt={class:"new-group"},st=v({setup(e){return(t,s)=>(c(),d("div",We,[a("div",Xe,[l(r,{class:"icon",name:"plus"}),et]),a("div",tt,[l(r,{class:"icon",name:"new-group"})])]))}});var ot=_(st,[["__scopeId","data-v-21f51f11"]]);function at(e){const t=new Date(e.createdAt),s=new Date(e.updatedAt);return{...e,createdAt:t,updatedAt:s}}const ie=y([{id:1n,name:"\u6211\u7684\u4E00\u5929",isLeaf:!0,count:0,type:"my-day",iconName:"sun",isChecked:!0},{id:2n,name:"\u91CD\u8981",isLeaf:!0,count:0,type:"important-todo",iconName:"star",isChecked:!1},{id:3n,name:"\u8BA1\u5212\u5185",isLeaf:!0,count:0,type:"in-plan",iconName:"plan",isChecked:!1},{id:4n,name:"\u5DF2\u5206\u914D\u7ED9\u6211",isLeaf:!0,count:0,type:"assign-to-me",iconName:"user",isChecked:!1},{id:5n,name:"\u4EFB\u52A1",isLeaf:!0,count:0,type:"task-todo",iconName:"home",isChecked:!1}]);function le(e){const t=[];return e.forEach(s=>{let o;s.children?o={...s,type:"todo-folder",isChecked:!1,children:le(s.children)}:o={...s,type:"todo-list",isChecked:!1,children:[]},t.push(o)}),t}const H=Ce("useData",{state:()=>({userData:null,navData:[],fixedTodoData:null,todoListData:[]}),actions:{setUser(e){this.userData=at(e)},setNavTree(e){this.navData=le(e)},setFixedTodo(e){this.fixedTodoData=e},setTodoList(e){this.todoListData=e}}});const nt={class:"my-dialog"},it={class:"wrapper"},lt={class:"content"},ut=v({props:{content:{type:String,default:"\u63D0\u793A\u5185\u5BB9"},mountDom:{type:HTMLDivElement,default:""}},setup(e){const t=e,s=()=>{t.mountDom.remove()};return(o,n)=>(c(),d("div",nt,[a("div",it,[a("p",lt,h(e.content),1),l(r,{class:"icon",name:"close",onClick:s})])]))}});var ct=_(ut,[["__scopeId","data-v-02feee5d"]]);const x=(e,t=1)=>{const s=document.createElement("div");s.setAttribute("class","o-message"),document.body.appendChild(s),typeof e!="string"&&(e=e.message);const o=G(ct,{mountDom:s,content:e});R(o,s),setTimeout(()=>s.remove(),t*1e3)};const rt=e=>(L("data-v-d08cb0d4"),e=e(),I(),e),At={class:"profile"},dt=rt(()=>a("div",{class:"profile-avatar"},null,-1)),pt={class:"profile-account"},mt={class:"account-name"},vt={class:"account-email"},_t=v({setup(e){const t=H(),s=j(),n=q({data:[{text:"\u9000\u51FA\u767B\u5F55",iconName:"home"}],handler:u=>{switch(u){case 0:Ye().then(()=>{B.removeAllToken(),s.push({name:"login"})}).catch(A=>x(A,2));break;default:return}}}),i=y("bottom");return(u,A)=>{const m=Z("lmb-menu");return F((c(),d("div",At,[dt,a("div",pt,[a("div",mt,h(p(t).userData?.name),1),a("div",vt,[a("span",null,h(p(t).userData?.email),1),l(r,{class:"icon",name:"expand"})])])])),[[m,p(n),i.value]])}}});var ht=_(_t,[["__scopeId","data-v-d08cb0d4"]]);const ft={class:"search-bar"},yt=v({emits:["search"],setup(e,{emit:t}){const s=y("");return(o,n)=>(c(),d("div",ft,[a("input",{type:"text",placeholder:"Search",onInput:n[0]||(n[0]=i=>s.value=i.target.value),onKeyup:n[1]||(n[1]=W(i=>t("search",s.value),["enter"]))},null,32),l(r,{class:"icon",name:"search",onClick:n[2]||(n[2]=i=>t("search",s.value))})]))}});var gt=_(yt,[["__scopeId","data-v-3c9bdb52"]]);const Ct={class:"item-title"},wt={key:0,class:"todo-num"},kt=v({props:{data:null},setup(e){return(t,s)=>(c(),d("li",{class:Q({checked:e.data.isChecked})},[l(r,{class:Q(["icon",e.data.type]),name:e.data.iconName||"list"},null,8,["class","name"]),a("span",Ct,h(e.data.name),1),e.data.count?(c(),d("span",wt,h(e.data.count),1)):K("",!0)],2))}});var ue=_(kt,[["__scopeId","data-v-1fe37e42"]]);const bt={class:"item-title"},Bt=v({props:{title:{type:String,default:"\u65E0\u6807\u9898\u7EC4"},data:{type:Object,required:!0},parentIndex:{type:Number,required:!0}},emits:["click"],setup(e,{emit:t}){const s=y(!0),o=()=>{s.value=!s.value};return(n,i)=>(c(),d(b,null,[a("li",{onClick:o},[l(r,{class:"icon",name:"group"}),a("span",bt,h(e.title),1),l(r,{class:"icon",name:"down-arrow"})]),(c(!0),d(b,null,J(e.data,(u,A)=>F((c(),k(ue,{key:A,class:"todo-group-list",data:u,onClick:m=>t("click",A,e.parentIndex)},null,8,["data","onClick"])),[[X,s.value]])),128))],64))}});var Dt=_(Bt,[["__scopeId","data-v-29104c08"]]);const Lt={class:"menu-wrapper"},It={class:"body"},xt={class:"nav-menu"},Et={key:2,class:"delimiter"},Ft=v({emits:["nav-change"],setup(e,{emit:t}){const s=H(),o=N(()=>ie.value.concat(s.navData)),n=(A=o.value)=>{A.forEach(m=>{m.isLeaf?m.isChecked=!1:n(m.children)})},i=(A,m,C=o.value)=>{m?i(A,void 0,C[m].children):(n(),C[A].isChecked=!0,t("nav-change",C[A]))},u=A=>{console.log(A)};return(A,m)=>(c(),d("aside",Lt,[a("div",It,[l(p(ht)),l(p(gt),{onSearch:u}),a("nav",xt,[a("ul",null,[(c(!0),d(b,null,J(p(o),(C,M)=>(c(),d(b,{key:C.id},[C.isLeaf?(c(),k(p(ue),{key:1,data:C,onClick:w=>i(M)},null,8,["data","onClick"])):(c(),k(p(Dt),{key:0,title:C.name,data:C.children||[],"parent-index":M,onClick:i},null,8,["title","data","parent-index"])),M===4?(c(),d("hr",Et)):K("",!0)],64))),128))])])]),l(p(ot))]))}});var Qt=_(Ft,[["__scopeId","data-v-9d571736"]]);const St=e=>(L("data-v-1b8b2cbe"),e=e(),I(),e),Mt={class:"todo-item"},Tt={class:"todo-info"},Ht={class:"todo-detail"},Vt=St(()=>a("span",null,"\u2022",-1)),$t=v({props:{data:{type:Object,required:!0}},setup(e){return(t,s)=>(c(),d("li",Mt,[l(r,{class:Q(["icon tick",{"tick-completed":e.data.done}]),name:"check"},null,8,["class"]),a("div",Tt,[a("div",{class:Q(["todo-text",{"todo-text-completed":e.data.done}])},h(e.data.title),3),a("div",Ht,[K("",!0),e.data.deadline?(c(),d(b,{key:1},[l(r,{class:"icon calendar",name:"calendar"}),a("span",null,h(e.data.deadline),1),Vt],64)):K("",!0)])]),e.data.importance?(c(),k(r,{key:0,class:"icon",name:"star-solid"})):(c(),k(r,{key:1,class:"icon",name:"star"}))]))}});var Nt=_($t,[["__scopeId","data-v-1b8b2cbe"]]);const qt=e=>(L("data-v-0a67bd39"),e=e(),I(),e),Kt={class:"footer"},Jt={class:"add-todo"},Ut=qt(()=>a("div",{id:"icon",name:"check"},null,-1)),Pt=["onKeyup"],Ot={class:"selector"},jt={class:"list-selector"},zt={class:"list-text"},Yt={class:"calender-selector"},Gt={class:"calender-text"},Rt={class:"loop-selector"},Zt={class:"loop-text"},Wt=v({props:{currentList:null},emits:["submit"],setup(e,{emit:t}){const s=e,o=H(),n=y(""),i=y(s.currentList.name),u=y(s.currentList.id);ee(te(s,"currentList"),w=>{u.value=w.id,i.value=w.name});const A=N(()=>o.todoListData.map(w=>({text:w.name,id:w.id,iconName:"list"}))),m=q({data:A.value,handler:(w,$)=>{i.value=m.data[w].text,u.value=$||-1n}}),C=()=>{const w={title:n.value,todolistId:u.value};t("submit",w),n.value=""},M=y("top");return(w,$)=>{const me=Z("lmb-menu");return c(),d("footer",Kt,[a("div",Jt,[Ut,F(a("input",{"onUpdate:modelValue":$[0]||($[0]=ve=>n.value=ve),class:"add-todo-input",type:"text",onKeyup:W(C,["enter"])},null,40,Pt),[[we,n.value]]),F(a("div",Ot,[F((c(),d("div",jt,[l(r,{class:"icon",name:"list"}),a("span",zt,h(i.value),1)])),[[me,p(m),M.value]]),a("div",Yt,[l(r,{class:"icon",name:"calendar"}),a("span",Gt,h(),1)]),a("div",Rt,[l(r,{class:"icon",name:"loop"}),a("span",Zt,h(),1)])],512),[[X,!0]])])])}}});var Xt=_(Wt,[["__scopeId","data-v-0a67bd39"]]);const ce=e=>(L("data-v-7a838a63"),e=e(),I(),e),es={class:"board-header"},ts={key:0,class:"header-title"},ss=ce(()=>a("h1",null,"\u6211\u7684\u4E00\u5929",-1)),os=ce(()=>a("p",null,"2\u67081\u65E5\uFF0C\u661F\u671F\u4E8C",-1)),as=[ss,os],ns={class:"header-title-text"},is={class:"header-button-group"},ls=v({props:{type:null,iconName:{default:"list"},title:{default:"\u7A7A\u5217\u8868"}},setup(e){return(t,s)=>(c(),d("header",es,[e.type==="my-day"?(c(),d("div",ts,as)):(c(),d(b,{key:1},[l(r,{class:"header-title-icon",name:e.iconName},null,8,["name"]),a("span",ns,h(e.title),1)],64)),a("div",is,[l(r,{class:"icon",name:"bulb"}),l(r,{class:"icon",name:"settings"})])]))}});var us=_(ls,[["__scopeId","data-v-7a838a63"]]);const g=e=>(L("data-v-f46e94fe"),e=e(),I(),e),cs={class:"todo-detail"},rs={class:"todo-steps"},As={class:"steps-title"},ds=g(()=>a("input",{type:"text"},null,-1)),ps={class:"step-item"},ms=g(()=>a("input",{type:"text"},null,-1)),vs=g(()=>a("hr",{class:"delimiter"},null,-1)),_s={class:"step-item"},hs=g(()=>a("input",{type:"text"},null,-1)),fs={class:"item-list"},ys={class:"detail-item"},gs=g(()=>a("span",null,'\u6DFB\u52A0\u5230"\u6211\u7684\u4E00\u5929"',-1)),Cs={class:"item-list"},ws={class:"detail-item"},ks=g(()=>a("span",null,"\u63D0\u9192\u6211",-1)),bs=g(()=>a("hr",{class:"delimiter"},null,-1)),Bs={class:"detail-item"},Ds=g(()=>a("span",null,"\u6DFB\u52A0\u622A\u81F3\u65E5\u671F",-1)),Ls=g(()=>a("hr",{class:"delimiter"},null,-1)),Is={class:"detail-item"},xs=g(()=>a("span",null,"\u91CD\u590D",-1)),Es={class:"item-list"},Fs={class:"detail-item"},Qs=g(()=>a("span",null,"\u6DFB\u52A0\u6587\u4EF6",-1)),Ss=g(()=>a("textarea",{cols:"30",rows:"10"},null,-1)),Ms=v({setup(e){return(t,s)=>(c(),d("div",cs,[l(r,{class:"icon close",name:"close"}),a("ul",rs,[a("li",As,[l(r,{class:"icon tick",name:"check"}),ds,l(r,{class:"icon important",name:"star"})]),a("li",ps,[l(r,{class:"icon tick",name:"check"}),ms,l(r,{class:"icon delete",name:"close"})]),vs,a("li",_s,[l(r,{class:"icon tick",name:"check"}),hs,l(r,{class:"icon delete",name:"close"})])]),a("ul",fs,[a("div",ys,[l(r,{class:"icon",name:"sun"}),gs,l(r,{class:"icon cancel",name:"close"})])]),a("ul",Cs,[a("div",ws,[l(r,{class:"icon",name:"alarm"}),ks,l(r,{class:"icon cancel",name:"close"})]),bs,a("div",Bs,[l(r,{class:"icon",name:"calendar"}),Ds,l(r,{class:"icon",name:"close"})]),Ls,a("div",Is,[l(r,{class:"icon",name:"loop"}),xs,l(r,{class:"icon",name:"close"})])]),a("ul",Es,[a("div",Fs,[l(r,{class:"icon",name:"paperclip"}),Qs,l(r,{class:"icon cancel",name:"close"})])]),Ss]))}});var Ts=_(Ms,[["__scopeId","data-v-f46e94fe"]]);const Hs=async()=>[],Vs=async()=>(await f.get("/users/current/todos/basic")).data,$s=async()=>(await f.get("/users/current/todos/important")).data,Ns=async()=>(await f.get("/users/current/todos/planned")).data,qs=async()=>(await f.get("/users/current/todos/not-notified")).data,Ks=async()=>({basicListData:await Vs(),dailyListData:await Hs(),plannedListData:await Ns(),importantListData:await $s(),unnotifiedListData:await qs()}),Js=async e=>f.post("/todos",e),Us=async e=>(await f.get("/todo-lists/"+e+"/todos")).data;const Ps={class:"main-board"},Os={class:"board-wrapper"},js={class:"body"},zs={class:"todo-list"},Ys={class:"aside"},Gs=v({props:{todoList:null},setup(e){const t=e,s=H(),o=y();y([{id:3n,todoNum:1,isPrevious:!0,itemArray:[{id:1n,title:"\u65F6\u95F4\u5217\u8868",isCompleted:!1,isImportant:!1,isInMyDay:!1,deadline:"",isSync:!0,haveAttachment:!0,haveMemo:!0}]}]);const n=async(u,A)=>{try{switch(A){case"my-day":o.value=s.fixedTodoData?.dailyListData;break;case"in-plan":o.value=s.fixedTodoData?.plannedListData;break;case"important-todo":o.value=s.fixedTodoData?.importantListData;break;case"task-todo":o.value=s.fixedTodoData?.basicListData;break;case"todo-list":o.value=await Us(u);break;default:return}}catch{x("\u8BF7\u6C42\u6570\u636E\u5931\u8D25",2)}};ee(te(t,"todoList"),u=>{n(u.id,u.type)});const i=u=>{Js(u).then(()=>{n(t.todoList.id,t.todoList.type)}).catch(()=>{x("\u6DFB\u52A0Todo\u5931\u8D25")})};return(u,A)=>(c(),d("div",Ps,[a("div",Os,[a("div",js,[l(us,{type:e.todoList.type,"icon-name":e.todoList.iconName,title:e.todoList.name},null,8,["type","icon-name","title"]),a("ul",zs,[(c(!0),d(b,null,J(o.value,m=>(c(),k(Nt,{key:m.id.toString(),data:m},null,8,["data"]))),128))])]),l(Xt,{"current-list":e.todoList,onSubmit:i},null,8,["current-list"])]),a("div",Ys,[l(Ts)])]))}});var Rs=_(Gs,[["__scopeId","data-v-793a442f"]]);const Zs=async()=>(await f.get("/users/current/menu")).data,Ws=async()=>(await f.get("/users/current/todo-lists")).data;const Xs=v({setup(e){const t=H(),s=y(ie.value[0]);function o(n){s.value=n}return se(async()=>{const n=async i=>{try{await i()}catch{x("\u8BF7\u6C42\u670D\u52A1\u5668\u4FE1\u606F\u5931\u8D25\uFF01",2)}};await Promise.allSettled([n(async()=>t.setUser(await Oe())),n(async()=>t.setNavTree(await Zs())),n(async()=>t.setTodoList(await Ws())),n(async()=>t.setFixedTodo(await Ks()))])}),(n,i)=>(c(),d(b,null,[l(Qt,{onNavChange:o}),l(Rs,{"todo-list":s.value},null,8,["todo-list"])],64))}});const eo=["value","disabled"],to=v({props:{title:null,loading:{type:Boolean}},emits:["click"],setup(e,{emit:t}){const s=e;return(o,n)=>(c(),d("input",{type:"submit",value:s.title,disabled:s.loading,onClick:n[0]||(n[0]=oe(i=>t("click"),["prevent"]))},null,8,eo))}});var re=_(to,[["__scopeId","data-v-8d312fe0"]]),so="data:image/gif;base64,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",oo="/oToDo-UI/assets/oToDo-logo.87189c39.jpg";const ao=e=>(L("data-v-ef8f030c"),e=e(),I(),e),no={class:"wrapper"},io={class:"login-box"},lo=ao(()=>a("img",{class:"img-logo",src:oo,alt:"oToDo-logo"},null,-1)),uo={class:"input-group"},co={class:"button-group"},ro=v({props:{title:null,loading:{type:Boolean}},setup(e){const t=e;return(s,o)=>(c(),d("div",no,[a("form",io,[a("img",{class:Q(["img-loading",{hidden:t.loading}]),src:so,alt:"logging-in"},null,2),lo,a("h1",null,h(t.title),1),a("div",uo,[ae(s.$slots,"default",{},void 0,!0)]),a("div",co,[ae(s.$slots,"footer",{},void 0,!0)])])]))}});var Ae=_(ro,[["__scopeId","data-v-ef8f030c"]]);function de(e){for(const[,t]of Object.entries(e))if(t.isValid=!0,t.val==="")return t.isValid=!1,!1;return!0}const Ao=["type","name","disabled","placeholder"],po=v({props:{modelValue:null,valid:{type:Boolean},loading:{type:Boolean},title:null,type:{default:"text"},name:{default:""},placeholder:{default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const s=e,o=N({get(){return s.modelValue},set(n){t("update:modelValue",n)}});return(n,i)=>(c(),d("div",{class:Q(["group-row",{"group-wearning":!s.valid}])},[a("p",null,h(s.title),1),F(a("input",{"onUpdate:modelValue":i[0]||(i[0]=u=>be(o)?o.value=u:null),type:s.type,name:s.name,disabled:e.loading,placeholder:s.placeholder},null,8,Ao),[[ke,p(o)]])],2))}});var V=_(po,[["__scopeId","data-v-6fb6981f"]]);const mo={class:"olink"},vo=v({props:{title:null,event:null},emits:["click"],setup(e,{emit:t}){const s=e;return(o,n)=>(c(),d("p",mo,[Be(h(s.title)+" ",1),a("a",{onClick:n[0]||(n[0]=i=>t("click"))},h(s.event),1)]))}});var z=_(vo,[["__scopeId","data-v-91b1b28a"]]);const _o=async()=>(await f.get("/sessions/oauth/github")).data,ho=async(e,t)=>{const s=await f.post("/sessions/oauth/github",{code:e,state:t},{headers:{needToken:!1}}),{accessToken:o,expiresIn:n,refreshToken:i}=s.data;B.setAccessToken(o,n),typeof i=="string"&&B.setRefreshToken(i)};async function fo(){try{const{redirectURI:e}=await _o();globalThis.window.location.href=e}catch(e){console.log(e)}}function yo(e,t){return ho(e,t)}const go=v({setup(e){const t=j(),s=y(!1),o=q({username:{val:"",isValid:!0},password:{val:"",isValid:!0}}),n=()=>{t.push("/register")},i=()=>{if(s.value=!0,de(o)===!1){s.value=!1;return}je(o.username.val,o.password.val).then(()=>t.push("/")).catch(u=>{s.value=!1,x(u,2)})};return se(async()=>{const u=t.currentRoute.value.query;typeof u.username=="string"&&(o.username.val=u.username),typeof u.code=="string"&&typeof u.state=="string"&&(s.value=!0,yo(u.code,u.state).then(()=>{t.push("/")}).catch(A=>{x(A,2)}).finally(()=>{s.value=!1}))}),(u,A)=>(c(),k(Ae,{loading:s.value,title:"oToDo Login"},{default:U(()=>[l(V,{modelValue:p(o).username.val,"onUpdate:modelValue":A[0]||(A[0]=m=>p(o).username.val=m),valid:p(o).username.isValid,loading:s.value,title:"\u8BF7\u8F93\u5165\u6709\u6548\u7684\u7535\u5B50\u90AE\u4EF6\u5730\u5740\u3001\u7535\u8BDD\u53F7\u7801\u6216 Skype \u7528\u6237\u540D",name:"username",placeholder:"\u7528\u6237\u540D\u3001\u7535\u5B50\u90AE\u4EF6\u3001\u7535\u8BDD\u6216 Skype"},null,8,["modelValue","valid","loading"]),l(V,{modelValue:p(o).password.val,"onUpdate:modelValue":A[1]||(A[1]=m=>p(o).password.val=m),valid:p(o).password.isValid,loading:s.value,title:"\u8BF7\u8F93\u5165\u6709\u6548\u7684\u5BC6\u7801",type:"password",name:"password",placeholder:"\u5BC6\u7801"},null,8,["modelValue","valid","loading"]),l(z,{title:"\u7B2C\u4E09\u65B9\u767B\u9646",event:"GitHub",onClick:p(fo)},null,8,["onClick"]),l(z,{title:"\u6CA1\u6709\u8D26\u6237\uFF1F",event:"\u521B\u5EFA\u4E00\u4E2A",onClick:n})]),footer:U(()=>[l(re,{title:"\u767B\u5F55",loading:s.value,onClick:i},null,8,["loading"])]),_:1},8,["loading"]))}}),Co=v({setup(e){const t=j(),s=y(!1),o=q({username:{val:"",isValid:!0},password:{val:"",isValid:!0},nickname:{val:"",isValid:!0}}),n=u=>{u?t.push({path:"/login",query:{username:u}}):t.push("/login")},i=()=>{if(s.value=!0,de(o)===!1){s.value=!1;return}Pe(o.username.val,o.nickname.val,o.password.val).then(()=>{n(o.username.val)}).catch(u=>{x(u,2)}).finally(()=>{s.value=!1})};return(u,A)=>(c(),k(Ae,{title:"oToDo Register",loading:s.value},{default:U(()=>[l(V,{modelValue:p(o).username.val,"onUpdate:modelValue":A[0]||(A[0]=m=>p(o).username.val=m),valid:p(o).username.isValid,loading:s.value,title:"\u8BF7\u8F93\u5165\u6709\u6548\u7684\u7535\u5B50\u90AE\u4EF6\u5730\u5740\u3001\u7535\u8BDD\u53F7\u7801\u6216 Skype \u7528\u6237\u540D",name:"username",placeholder:"\u7528\u6237\u540D\u3001\u7535\u5B50\u90AE\u4EF6\u3001\u7535\u8BDD\u6216 Skype"},null,8,["modelValue","valid","loading"]),l(V,{modelValue:p(o).nickname.val,"onUpdate:modelValue":A[1]||(A[1]=m=>p(o).nickname.val=m),valid:p(o).nickname.isValid,loading:s.value,title:"\u8BF7\u8F93\u5165\u6709\u6548\u7684\u6635\u79F0",name:"nickname",placeholder:"\u6635\u79F0"},null,8,["modelValue","valid","loading"]),l(V,{modelValue:p(o).password.val,"onUpdate:modelValue":A[2]||(A[2]=m=>p(o).password.val=m),valid:p(o).password.isValid,loading:s.value,title:"\u8BF7\u8F93\u5165\u6709\u6548\u7684\u5BC6\u7801",type:"password",name:"password",placeholder:"\u5BC6\u7801"},null,8,["modelValue","valid","loading"]),l(z,{title:"\u5DF2\u7ECF\u6709\u4E86\u8D26\u6237\uFF1F",event:"\u53BB\u767B\u5F55",onClick:n})]),footer:U(()=>[l(re,{title:"\u767B\u5F55",loading:s.value,onClick:i},null,8,["loading"])]),_:1},8,["loading"]))}}),wo=[{path:"/",component:Xs,name:"main",meta:{requiresAuth:!0}},{path:"/login",component:go,name:"login",meta:{requiresAuth:!1}},{path:"/register",component:Co,name:"register",meta:{requiresAuth:!1}}],pe=De({history:Le("/oToDo-UI/"),routes:wo});pe.beforeEach(e=>{if(e.meta.requiresAuth&&!Ue())return{path:"/login",query:{redirect:e.fullPath}};e.meta.requiresAuth?D.getInstance().startTimer():D.getInstance().stopTimer()});if(typeof window!="undefined"){let e=function(){var t=document.body,s=document.getElementById("__svg__icons__dom__");s||(s=document.createElementNS("http://www.w3.org/2000/svg","svg"),s.style.position="absolute",s.style.width="0",s.style.height="0",s.id="__svg__icons__dom__",s.setAttribute("xmlns","http://www.w3.org/2000/svg"),s.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),s.innerHTML='<symbol viewBox="0 0 24 24" id="icon-alarm"><path fill="currentColor" d="M12 20a7 7 0 0 1-7-7 7 7 0 0 1 7-7 7 7 0 0 1 7 7 7 7 0 0 1-7 7m0-16a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9m.5 4H11v6l4.75 2.85.75-1.23-4-2.37V8M7.88 3.39 6.6 1.86 2 5.71l1.29 1.53 4.59-3.85M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72Z" /></symbol><symbol viewBox="0 0 24 24" id="icon-bulb"><path fill="currentColor" d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7M9 21v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1m3-17a5 5 0 0 0-5 5c0 2.05 1.23 3.81 3 4.58V16h4v-2.42c1.77-.77 3-2.53 3-4.58a5 5 0 0 0-5-5Z" /></symbol><symbol viewBox="0 0 24 24" id="icon-calendar"><path fill="currentColor" d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 16H5V10h14v10m0-12H5V6h14v2Z" /></symbol><symbol viewBox="0 0 24 24" id="icon-check"><path fill="currentColor" d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7Z" /></symbol><symbol viewBox="0 0 24 24" id="icon-circle"><path fill="currentColor" d="M12 20a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2Z" /></symbol><symbol viewBox="0 0 24 24" id="icon-close"><path fill="currentColor" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z" /></symbol><symbol viewBox="0 0 24 24" id="icon-down-arrow"><path fill="currentColor" d="M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42Z" /></symbol><symbol viewBox="0 0 24 24" id="icon-expand"><path fill="currentColor" d="M12 18.17 8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83Z" /></symbol><symbol viewBox="0 0 24 24" id="icon-group"><path fill="currentColor" d="M20 18H4V8h16m0-2h-8l-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z" /></symbol><symbol viewBox="0 0 24 24" id="icon-home"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5Z" /></symbol><symbol viewBox="0 0 24 24" id="icon-list"><path fill="currentColor" d="M7 5h14v2H7V5m0 8v-2h14v2H7M4 4.5A1.5 1.5 0 0 1 5.5 6 1.5 1.5 0 0 1 4 7.5 1.5 1.5 0 0 1 2.5 6 1.5 1.5 0 0 1 4 4.5m0 6A1.5 1.5 0 0 1 5.5 12 1.5 1.5 0 0 1 4 13.5 1.5 1.5 0 0 1 2.5 12 1.5 1.5 0 0 1 4 10.5M7 19v-2h14v2H7m-3-2.5A1.5 1.5 0 0 1 5.5 18 1.5 1.5 0 0 1 4 19.5 1.5 1.5 0 0 1 2.5 18 1.5 1.5 0 0 1 4 16.5Z" /></symbol><symbol viewBox="0 0 24 24" id="icon-loop"><path fill="currentColor" d="M12 6v3l4-4-4-4v3a8 8 0 0 0-8 8c0 1.57.46 3.03 1.24 4.26L6.7 14.8A5.9 5.9 0 0 1 6 12a6 6 0 0 1 6-6m6.76 1.74L17.3 9.2c.44.84.7 1.8.7 2.8a6 6 0 0 1-6 6v-3l-4 4 4 4v-3a8 8 0 0 0 8-8c0-1.57-.46-3.03-1.24-4.26Z" /></symbol><symbol viewBox="0 0 24 24" id="icon-new-group"><path fill="currentColor" d="M12 12h2v-2h2v2h2v2h-2v2h-2v-2h-2v-2m10-4v10c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2V6c0-1.11.89-2 2-2h6l2 2h8c1.11 0 2 .89 2 2m-2 0H4v10h16V8Z" /></symbol><symbol viewBox="0 0 24 24" id="icon-note"><path fill="currentColor" d="M14 10h5.5L14 4.5V10M5 3h10l6 6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2m0 2v14h14v-7h-7V5H5Z" /></symbol><symbol viewBox="0 0 24 24" id="icon-paperclip"><path fill="currentColor" d="M16.5 6v11.5a4 4 0 0 1-4 4 4 4 0 0 1-4-4V5A2.5 2.5 0 0 1 11 2.5 2.5 2.5 0 0 1 13.5 5v10.5a1 1 0 0 1-1 1 1 1 0 0 1-1-1V6H10v9.5a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5V5a4 4 0 0 0-4-4 4 4 0 0 0-4 4v12.5a5.5 5.5 0 0 0 5.5 5.5 5.5 5.5 0 0 0 5.5-5.5V6h-1.5Z" /></symbol><symbol viewBox="0 0 24 24" id="icon-plan"><path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5v-2H5V8h14v1h2V5a2 2 0 0 0-2-2m2.7 10.35-1 1-2.05-2 1-1c.2-.21.54-.22.77 0l1.28 1.28c.19.2.19.52 0 .72M12 18.94l6.07-6.06 2.05 2L14.06 21H12v-2.06Z" /></symbol><symbol viewBox="0 0 24 24" id="icon-plus"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" /></symbol><symbol viewBox="0 0 24 24" id="icon-search"><path fill="currentColor" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5Z" /></symbol><symbol viewBox="0 0 24 24" id="icon-settings"><path fill="currentColor" d="M3 17v2h6v-2H3M3 5v2h10V5H3m10 16v-2h8v-2h-8v-2h-2v6h2M7 9v2H3v2h4v2h2V9H7m14 4v-2H11v2h10m-6-4h2V7h4V5h-4V3h-2v6Z" /></symbol><symbol viewBox="0 0 24 24" id="icon-star-solid"><path fill="currentColor" d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.45 4.73L5.82 21 12 17.27Z" /></symbol><symbol viewBox="0 0 24 24" id="icon-star"><path fill="currentColor" d="m12 15.39-3.76 2.27.99-4.28-3.32-2.88 4.38-.37L12 6.09l1.71 4.04 4.38.37-3.32 2.88.99 4.28M22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.45 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24Z" /></symbol><symbol viewBox="0 0 24 24" id="icon-sun"><path fill="currentColor" d="M12 18a6 6 0 0 1-6-6 6 6 0 0 1 6-6 6 6 0 0 1 6 6 6 6 0 0 1-6 6m8-2.69L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69Z" /></symbol><symbol viewBox="0 0 24 24" id="icon-user"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1Z" /></symbol>',t.insertBefore(s,t.lastChild)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()}const ko=["onClick"],bo={class:"item-text"},Bo=v({props:{data:{type:Object,required:!0}},emits:["oclick"],setup(e,{emit:t}){const s=(o,n)=>{t("oclick",o,n)};return(o,n)=>(c(),d("ul",null,[(c(!0),d(b,null,J(e.data,(i,u)=>(c(),d("li",{key:u,class:"pop-item",onClick:oe(A=>s(u,i.id),["stop"])},[l(r,{class:"icon",name:i.iconName},null,8,["name"]),a("span",bo,h(i.text),1)],8,ko))),128))]))}});var Do=_(Bo,[["__scopeId","data-v-d57e5894"]]);const Lo=e=>{switch(e){case"top":return"bottom: 100% ;";case"bottom":return"top: 100% ;";default:return"bottom: 100%;"}};let E=null;const Y=e=>{e!==null&&(e.remove(),e=null)},Io=(e,t)=>{document.body.addEventListener("click",()=>{Y(E)}),e.addEventListener("click",s=>{s.stopPropagation(),Y(E),E=document.createElement("div"),E.style.cssText="position: absolute;"+Lo(t.arg),e.appendChild(E);const o=G(Do,{data:t.value.data,onOclick:(n,i)=>{Y(E),t.value.handler(n,i)}});R(o,E)})},O=Ie(Qe);O.use(Se);O.use(pe);O.mount("#app");O.directive("lmbMenu",Io);export{xo as __vite_legacy_guard};
