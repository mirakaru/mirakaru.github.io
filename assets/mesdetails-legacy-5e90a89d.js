System.register(["./index-legacy-fdc91f3e.js"],(function(e,t){"use strict";var l,a,s,n,r,i,u,c,o,d,p,f,m,g,v,h,b,_,x,y,w,M,I,j,C,k,A;return{setters:[e=>{l=e.d,a=e.r,s=e.o,n=e.c,r=e.w,i=e.u,u=e.l,c=e.a,o=e.b,d=e.I,p=e.e,f=e.f,m=e.g,g=e.h,v=e.i,h=e.j,b=e.k,_=e.m,x=e.t,y=e.n,w=e.p,M=e.F,I=e.q,j=e.s,C=e.v,k=e.x,A=e._}],execute:function(){var t=document.createElement("style");t.textContent=".circle[data-v-6e9bfeba]{list-style-type:circle}.center-list[data-v-6e9bfeba]{display:flex;flex-direction:column;align-items:center;margin:0;padding:0}.paragraph[data-v-6e9bfeba]{padding-left:20px;padding-right:20px;text-align:left}\n",document.head.appendChild(t);const R=e=>(C("data-v-6e9bfeba"),e=e(),k(),e),S=R((()=>b("h2",null,"Ingrédients",-1))),q={class:"circle center-list"},E=R((()=>b("h2",null,"Instructions",-1))),F={class:"paragraph"};e("default",A(l({__name:"mesdetails",setup(e){const t=a({}),l=a([]);return s((()=>{console.log(" a fait entrer"),(async()=>{const e=await u.create({message:"Attendre SVP ..."});await e.present();let a="https://www.themealdb.com/api/json/v1/1/lookup.php?i=";a+=window.location.pathname.split("details/")[1],fetch(a).then((e=>e.json())).then((a=>{console.log("( Recette :"),console.log(a),t.value=a.meals[0];const s=[];for(let e=1;e<=50;e++)""!==a.meals[0]["strMeasure"+e]&&void 0!==a.meals[0]["strMeasure"+e]&&null!==a.meals[0]["strMeasure"+e]&&" "!==a.meals[0]["strMeasure"+e]&&s.push(a.meals[0]["strMeasure"+e]+" "+a.meals[0]["strIngredient"+e]);l.value=s,console.log(" Liste d'ingredients :\n "+l.value),e.dismiss()}))})()})),(e,a)=>(c(),n(i(j),null,{default:r((()=>[o(i(h),{translucent:!0},{default:r((()=>[o(i(d),null,{default:r((()=>[o(i(p),{slot:"start"},{default:r((()=>[o(i(f),{color:"primary"}),o(i(m),{defaultHref:"/"})])),_:1}),o(i(g),null,{default:r((()=>[v("Recette")])),_:1})])),_:1})])),_:1}),o(i(I),{fullscreen:!0,class:"ion-text-center ion-align-items-center"},{default:r((()=>[b("div",null,[o(i(_),{src:t.value.strMealThumb},null,8,["src"]),b("h1",null,x(t.value.strMeal),1),b("p",null,"Origine: "+x(t.value.strArea),1),b("p",null," Catégorie: "+x(t.value.strCategory),1),S,b("ul",q,[(c(!0),y(M,null,w(l.value,(e=>(c(),y("li",{key:e},x(e),1)))),128))]),E,b("p",F,x(t.value.strInstructions),1)])])),_:1})])),_:1}))}}),[["__scopeId","data-v-6e9bfeba"]]))}}}));
