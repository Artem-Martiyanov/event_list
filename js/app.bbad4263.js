(function(){"use strict";var e={8157:function(e,t,s){var n=s(9242),i=s(3396);function r(e,t,s,n,r,a){const l=(0,i.up)("event-section");return(0,i.wg)(),(0,i.j4)(l,{"event-list":r.eventList,"current-time":this.currentTime},null,8,["event-list","current-time"])}var a=s(7139);const l=(0,i._)("span",{class:"event-item__green-line"},null,-1),o={class:"event-item__inner"},c={class:"event-item__header"},u={class:"event-item__time"},p={key:0,class:"event-item__countdown"},m={class:"event-item__title"},v={class:"event-item__footer"},_={class:"event-item__badge-list"},h={class:"event-item__badge event-item__badge--accent"},d={class:"event-item__badge"},f={class:"event-item__badge event-item__badge--fz-small"},g=(0,i._)("span",{class:"event-item__green-line"},null,-1),w={class:"event-item__inner"},y={class:"event-item__header"},I={class:"event-item__time"},k={class:"event-item__title"};function b(e,t,s,n,r,b){const D=(0,i.up)("progress-bar"),T=(0,i.up)("speakers-slider");return"regular"===s.eventData.type?((0,i.wg)(),(0,i.iD)("li",{key:0,class:(0,a.C_)("event-item "+(b.isActive?"event-item--active":""))},[l,(0,i._)("div",o,[b.isActive?((0,i.wg)(),(0,i.j4)(D,{key:0,"full-present":b.howTimeProgress()},null,8,["full-present"])):(0,i.kq)("",!0),(0,i._)("header",c,[(0,i._)("p",u,(0,a.zw)(b.getTimeInterval()),1),b.isActive?((0,i.wg)(),(0,i.iD)("span",p,"осталось "+(0,a.zw)(b.timeLeft)+" мин",1)):(0,i.kq)("",!0)]),(0,i.Wm)(T,{"speaker-names":s.eventData.speakers,"speaker-photos":s.eventData.speakerPhotos},null,8,["speaker-names","speaker-photos"]),(0,i._)("h2",m,(0,a.zw)(s.eventData.title),1),(0,i._)("footer",v,[(0,i._)("ul",_,[(0,i._)("li",h,(0,a.zw)(s.eventData.badgeType),1),(0,i._)("li",d,(0,a.zw)(s.eventData.badgeLang),1),(0,i._)("li",f,(0,a.zw)(s.eventData.badgeTheme),1)])])])],2)):"simple"===s.eventData.type?((0,i.wg)(),(0,i.iD)("li",{key:1,class:(0,a.C_)("event-item event-item--simple "+(b.isActive?"event-item--active":""))},[g,(0,i._)("div",w,[b.isActive?((0,i.wg)(),(0,i.j4)(D,{key:0,"full-present":this.howTimeProgress()},null,8,["full-present"])):(0,i.kq)("",!0),(0,i._)("header",y,[(0,i._)("p",I,(0,a.zw)(b.getTimeInterval()),1),(0,i._)("h2",k,(0,a.zw)(s.eventData.title),1)])])],2)):(0,i.kq)("",!0)}const D={class:"progress-bar"};function T(e,t,s,n,r,l){return(0,i.wg)(),(0,i.iD)("div",D,[(0,i._)("span",{class:"progress-bar__line",style:(0,a.j5)({width:`${this.fullPresent}%`})},null,4)])}var j={name:"ProgressBar",props:{fullPresent:{type:Number,required:!0}}},O=s(89);const z=(0,O.Z)(j,[["render",T]]);var q=z;const P=e=>{const[t,s]=e.split(":");return 60*t+ +s},S=e=>`${Math.floor(e/60).toFixed(0)}:${(e%60).toFixed(0).padStart(2,"0")}`,x={class:"authors-list__avatar"},A=["src","alt"],E={class:"authors-list__description"},$={class:"authors-list__name"},L={class:"authors-list__job"},C={key:1,class:"authors-list"},M={class:"authors-list__item"},N={class:"authors-list__avatar"},R=["src","alt"],Z={class:"authors-list__description"},Y={class:"authors-list__name"},F={class:"authors-list__job"};function H(e,t,s,n,r,l){const o=(0,i.up)("swiper-slide"),c=(0,i.up)("swiper");return s.speakerNames.length>2?((0,i.wg)(),(0,i.j4)(c,{key:0,"slides-per-view":2,loop:!0,class:"authors-list",onSwiper:l.onSwiper,autoplay:{delay:5e3},"allow-touch-move":!1},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.speakerNames,((e,t)=>((0,i.wg)(),(0,i.j4)(o,{class:"authors-list__item"},{default:(0,i.w5)((()=>[(0,i._)("div",x,[(0,i._)("img",{src:s.speakerPhotos[t],alt:e.split("/")[0]},null,8,A)]),(0,i._)("div",E,[(0,i._)("p",$,(0,a.zw)(e.split("/")[0]),1),(0,i._)("p",L,(0,a.zw)(e.split("/")[1]),1)])])),_:2},1024)))),256))])),_:1},8,["onSwiper"])):((0,i.wg)(),(0,i.iD)("ul",C,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.speakerNames,((e,t)=>((0,i.wg)(),(0,i.iD)("li",M,[(0,i._)("div",N,[(0,i._)("img",{src:s.speakerPhotos[t],alt:e.split("/")[0]},null,8,R)]),(0,i._)("div",Z,[(0,i._)("p",Y,(0,a.zw)(e.split("/")[0]),1),(0,i._)("p",F,(0,a.zw)(e.split("/")[1]),1)])])))),256))]))}var K=s(1923),B={name:"SpeakersSlider",components:{Swiper:K.tq,SwiperSlide:K.o5},props:{speakerNames:{type:Array,required:!0},speakerPhotos:{type:Array,required:!0}},data(){return{autoPlayId:null,swiper:null}},methods:{onSwiper(e){this.swiper=e}},mounted(){this.autoPlayId=setInterval((()=>{this.swiper&&this.swiper.slideNext()}),1e4)},unmounted(){clearInterval(this.autoPlayId)}};const Q=(0,O.Z)(B,[["render",H]]);var W=Q,G={name:"EventItem",components:{SpeakersSlider:W,ProgressBar:q},props:{eventData:{type:Object,required:!0},currentTime:{type:Object,required:!0}},computed:{timeLeft(){return-1*(60*this.currentTime.h+ +this.currentTime.m-this.endMinutes)},isActive(){return this.startMinutes<=60*this.currentTime.h+ +this.currentTime.m&&60*this.currentTime.h+ +this.currentTime.m<this.endMinutes}},data(){return{startMinutes:+P(this.eventData.time),endMinutes:+P(this.eventData.time)+this.eventData.duration}},watch:{isActive(){this.$emit("active",this)}},mounted(){this.isActive&&this.$emit("active",this),window.addEventListener("resize",this.onResize)},methods:{getTimeInterval(){return`${this.eventData.time} - ${S(this.endMinutes)}`},howTimeProgress(){return 100*(1-this.timeLeft/this.eventData.duration)},onResize(){this.isActive&&this.$emit("active",this)}},unmounted(){document.removeEventListener("resize",this.onResize)}};const J=(0,O.Z)(G,[["render",b]]);var U=J;const V="/event_list/backend/",X=async e=>{try{const t=await fetch(V+e);if(!t.ok)throw new Error(t.statusText);return await t.json()}catch(t){console.log(t)}},ee=e=>({type:"-"===e["__4"]?"simple":"regular",title:"-"===e["__1"]?null:e["__1"],time:"-"===e["__2"]?null:e["__2"],duration:"-"===e["__3"]?null:e["__3"],speakers:"-"===e["__4"]?null:e["__4"].split(";"),speakerPhotos:"-"===e["__5"]?null:e["__5"].split(";"),badgeType:"-"===e["__6"]?null:e["__6"],badgeLang:"-"===e["__7"]?null:e["__7"],badgeTheme:"-"===e["__8"]?null:e["__8"]});var te=s.p+"img/qr-1.27e51da5.jpg",se=s.p+"img/qr-1@2x.5798dfc0.jpg",ne=s.p+"img/qr-2.c6c4cde2.jpg",ie=s.p+"img/qr-2@2x.4f7c510e.jpg",re=s.p+"img/logo.95fb4360.png",ae=s.p+"img/logo@2x.6c351ba0.png";const le=se+" 2x",oe=ie+" 2x",ce=ae+" 2x",ue={class:"wrapper"},pe={class:"main-header"},me={class:"main-title"},ve={class:"main-date"},_e=(0,i.uE)('<footer class="main-footer"><ul class="main-footer__list"><li class="main-footer__item"><img src="'+te+'" srcset="'+le+'" alt="QR-код."></li><li class="main-footer__item"><img src="'+ne+'" srcset="'+oe+'" alt="QR-код."><p class="main-footer__item-text">отсканируйте qr-код, чтобы скачать полную программу конференции</p></li><li class="main-footer__item"><img src="'+re+'" srcset="'+ce+'" alt="analyst days #17."></li></ul></footer>',1);function he(e,t,s,n,r,l){const o=(0,i.up)("event-item");return(0,i.wg)(),(0,i.iD)("section",ue,[(0,i._)("header",pe,[(0,i._)("h1",me,"Cекция "+(0,a.zw)(l.sectionName),1),(0,i._)("p",ve,(0,a.zw)(r.currentDate),1)]),s.eventList.length>0?((0,i.wg)(),(0,i.iD)("ul",{key:0,class:"event-list",ref:r.listRef,style:(0,a.j5)(l.getOffsetStyles())},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.eventList,(e=>((0,i.wg)(),(0,i.j4)(o,{"event-data":e,onActive:l.onActiveEventItem,currentTime:this.currentTime},null,8,["event-data","onActive","currentTime"])))),256))],4)):(0,i.kq)("",!0),_e])}const de={reports_1:"А",reports_2:"Б",reports_3:"В",reports_4:"Г",reports_5:"Д"};var fe={name:"EventSection",props:{eventList:{type:Array,required:!0},currentTime:{type:Object,required:!0}},components:{EventItem:U},data(){return{currentDate:this.getCurrentDate(),dateIntervalId:null,listOffset:0,listRef:null}},methods:{getCurrentDate:()=>{const e=["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"],t=new Date,[s,n]=t.toLocaleTimeString().split(":");return`${e[t.getDay()]}, ${s}:${n}`},onActiveEventItem(e){setTimeout((()=>{this.listOffset=e.$el.offsetTop}))},getOffsetStyles(){return this.listOffset?{transform:`translateY(calc(${-this.listOffset}px + var(--gap)))`}:""}},computed:{sectionName(){if(this.$route.params.sectionId)return de[this.$route.params.sectionId]}},mounted(){this.dateIntervalId=setInterval((()=>this.currentDate=this.getCurrentDate()),3e4)},unmounted(){clearInterval(this.dateIntervalId)}};const ge=(0,O.Z)(fe,[["render",he]]);var we=ge,ye={name:"App",components:{EventSection:we,EventItem:U},data(){return{eventList:[],fetchIntervalId:null,reloadIntervalId:null,currentTime:this.getCurrentTime()}},computed:{endpoint(){return this.$route.params.sectionId}},watch:{endpoint(){this.fetchEvents()}},methods:{async fetchEvents(){if(this.endpoint){const e=await X(this.endpoint+".json");e&&(this.eventList=e.slice(1).map((e=>ee(e))))}},getCurrentTime(){const[e,t]=(new Date).toLocaleTimeString().split(":");return{h:e,m:t}}},mounted(){this.fetchEvents(),this.fetchIntervalId=setInterval((()=>this.fetchEvents()),3e5),this.reloadIntervalId=setInterval((()=>{this.currentTime=this.getCurrentTime()}),5e3)},unmounted(){clearInterval(this.fetchIntervalId),clearInterval(this.reloadIntervalId)}};const Ie=(0,O.Z)(ye,[["render",r]]);var ke=Ie,be=s(2483);const De=[{path:"/:sectionId",name:"section",component:we}],Te=(0,be.p7)({history:(0,be.PO)("/event_list/"),routes:De});var je=Te;(0,n.ri)(ke).use(je).mount("#app")}},t={};function s(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,s),r.exports}s.m=e,function(){var e=[];s.O=function(t,n,i,r){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],r=e[u][2];for(var l=!0,o=0;o<n.length;o++)(!1&r||a>=r)&&Object.keys(s.O).every((function(e){return s.O[e](n[o])}))?n.splice(o--,1):(l=!1,r<a&&(a=r));if(l){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,i,r]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.p="/event_list/"}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,r,a=n[0],l=n[1],o=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in l)s.o(l,i)&&(s.m[i]=l[i]);if(o)var u=o(s)}for(t&&t(n);c<a.length;c++)r=a[c],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(u)},n=self["webpackChunkevent_list"]=self["webpackChunkevent_list"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(8157)}));n=s.O(n)})();
//# sourceMappingURL=app.bbad4263.js.map