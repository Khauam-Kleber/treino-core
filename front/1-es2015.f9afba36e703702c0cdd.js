(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{Buwi:function(e,t,i){"use strict";i.r(t);var r=i("ofXK"),n=i("tyNb"),s=i("0IaG"),a=i("3Pt+"),o=i("fXoL"),l=i("Y+0n");let c=(()=>{class e{constructor(e,t,i,r){this.formBuilder=e,this.itensService=t,this.dialogRef=i,this.data=r,this.criarForm(),this.itensService.buscarListaFavoritos()}criarForm(){this.form=this.formBuilder.group({quantity:[this.data.item.quantityPurchased,a.D.required],price:[this.data.item.pricePurchased,a.D.required]})}onNoClick(){this.dialogRef.close()}saveQuantityPurchase(){this.data.item.quantityPurchased=this.form.get("quantity").value,this.data.item.pricePurchased=this.form.get("price").value,this.itensService.atualizarQuantidadeFavoritos(this.data.item),this.dialogRef.close()}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](a.f),o["\u0275\u0275directiveInject"](l.a),o["\u0275\u0275directiveInject"](s.h),o["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["skin-dialog"]],decls:10,vars:1,consts:[["mat-dialog-content",""],[3,"formGroup","ngSubmit"],[1,"input-group","mb-3"],["type","number","id","quantity","formControlName","quantity","placeholder","Quantity",1,"form-control"],["type","number","step","0.01","id","price","formControlName","price","placeholder","Price",1,"form-control"],["type","submit",1,"btn","btn-primary","mb-4"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"div",0),o["\u0275\u0275elementStart"](1,"p"),o["\u0275\u0275text"](2,"Coloque a Quantidade e Pre\xe7o da compra dos itens"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"form",1),o["\u0275\u0275listener"]("ngSubmit",(function(){return t.saveQuantityPurchase()})),o["\u0275\u0275elementStart"](4,"div",2),o["\u0275\u0275element"](5,"input",3),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"div",2),o["\u0275\u0275element"](7,"input",4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](8,"button",5),o["\u0275\u0275text"](9," Salvar"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("formGroup",t.form))},directives:[s.f,a.F,a.q,a.i,a.v,a.c,a.p,a.h],encapsulation:2}),e})();var d=i("ynNG"),m=i("AytR"),u=i("tk/3"),p=i("6Qg2"),h=i("5eHb");class v{constructor(e,t,i){this.httpClient=e,this.userService=t,this.toastr=i,this.listFavoritesUser=[],this.valorRendimentoTotal=0}getItensMercadoSteam(e,t){return this.httpClient.get("https://steamfolio.com/api/Popular/sort?type=2&ascending=false&watchlist=false&searchTerm="+e+"&filterType="+t)}getItensMercadoSteam2(e,t){return this.httpClient.get(`${m.a.apiUrl}/skin-item/find-skins/list`,{params:{term:e,tipoItem:t}})}getItemPrice(e="AK-47 | Redline (Field-Tested)"){if("string"!=typeof e||0===e.length)throw new Error('The "market_hash_name" parameter is not a valid string or missing.');return this.httpClient.get(`https://csgobackpack.net/api/GetItemPrice/?currency=BRL&id=${e}&time=7&icon=1`)}adicionarOuRemoverFavoritos(e){let t=this.userService.userValue.data;if(this.listFavoritesUser.find(t=>t.id===e.id)){let t=this.listFavoritesUser.findIndex(t=>t.id==e.id);this.listFavoritesUser.splice(t,1)}else this.listFavoritesUser.length<=5?this.listFavoritesUser.push(new d.a(e)):this.toastr.error("Usamos API P\xfablicas gr\xe1tis que possuem limites de buscas :(","M\xe1ximo 6 Itens Favoritos",{positionClass:"toast-top-center"});t.steamItems=this.listFavoritesUser,this.userService.updateFavorites(t.id,t).subscribe(e=>this.buscarListaFavoritos())}atualizarQuantidadeFavoritos(e){let t=this.userService.userValue.data,i=this.listFavoritesUser.findIndex(t=>t.id===e.id);this.listFavoritesUser[i]=e,t.steamItems=this.listFavoritesUser,this.userService.updateFavorites(t.id,t).subscribe(e=>this.buscarListaFavoritos())}buscarListaFavoritos(e=!1){this.userService.getFavoritemsUser().subscribe(t=>{this.listFavoritesUser=t,e&&this.realTimePrice()},e=>{})}verificarFavoritos(e){return!this.listFavoritesUser||!this.listFavoritesUser.find(t=>t.id===e.id)}realTimePrice(){this.valorRendimentoTotal=0,this.listFavoritesUser.forEach((e,t)=>{this.getByName(e.name).subscribe(i=>{this.listFavoritesUser[t].lowest_price=i.lowest_price.replace(/[^0-9\.,]/g,"").replace(/,/g,"."),this.valorRendimentoTotal=this.valorRendimentoTotal+(parseFloat(this.listFavoritesUser[t].lowest_price)-e.pricePurchased)*e.quantityPurchased,this.listFavoritesUser[t].volume=i.volume})})}getByName(e){return this.httpClient.get(`${m.a.apiUrl}/skin-item/skin-price/${e}`)}}v.\u0275fac=function(e){return new(e||v)(o["\u0275\u0275inject"](u.b),o["\u0275\u0275inject"](p.a),o["\u0275\u0275inject"](h.c))},v.\u0275prov=o["\u0275\u0275defineInjectable"]({token:v,factory:v.\u0275fac,providedIn:"root"});var f=i("/n7v");function g(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"h3",9),o["\u0275\u0275element"](1,"i",16),o["\u0275\u0275text"](2),o["\u0275\u0275pipe"](3,"number"),o["\u0275\u0275elementEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]().$implicit;o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind2"](3,1,(e.lowest_price-e.pricePurchased)*e.quantityPurchased,".2-2"))}}function b(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"h3",9),o["\u0275\u0275element"](1,"i",16),o["\u0275\u0275text"](2,"N/A"),o["\u0275\u0275elementEnd"]())}function S(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div",5),o["\u0275\u0275elementStart"](1,"app-card",6),o["\u0275\u0275listener"]("editItemEvent",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().dialogEditItem(t)}))("removeItemEvent",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().removeItemCard(t)})),o["\u0275\u0275elementStart"](2,"div",7),o["\u0275\u0275elementStart"](3,"div",8),o["\u0275\u0275elementStart"](4,"h3",9),o["\u0275\u0275element"](5,"i",10),o["\u0275\u0275text"](6),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"div",11),o["\u0275\u0275elementStart"](8,"p",12),o["\u0275\u0275text"](9,"Pre\xe7o"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](10,"div",8),o["\u0275\u0275template"](11,g,4,4,"h3",13),o["\u0275\u0275template"](12,b,3,0,"h3",13),o["\u0275\u0275elementStart"](13,"div",11),o["\u0275\u0275elementStart"](14,"p",12),o["\u0275\u0275text"](15,"Lucro"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](16,"div",8),o["\u0275\u0275elementStart"](17,"h3",9),o["\u0275\u0275element"](18,"i",14),o["\u0275\u0275text"](19),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](20,"div",15),o["\u0275\u0275elementStart"](21,"p",12),o["\u0275\u0275text"](22,"Volume 24h"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("hidHeader",!1)("cardTitle",e.name)("item",e),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate"](e.lowest_price),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("ngIf",e.pricePurchased),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",!e.pricePurchased),o["\u0275\u0275advance"](7),o["\u0275\u0275textInterpolate"](e.volume)}}const F=[{path:"",component:(()=>{class e{constructor(e,t,i){this.itensService=e,this.route=t,this.dialog=i}ngOnInit(){this.itensService.buscarListaFavoritos(!0)}removeItemCard(e){this.itensService.adicionarOuRemoverFavoritos(e)}dialogEditItem(e){this.dialog.open(c,{width:"250px",data:{item:e}}).afterClosed().subscribe(e=>{this.itensService.buscarListaFavoritos(!0)})}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](v),o["\u0275\u0275directiveInject"](n.a),o["\u0275\u0275directiveInject"](s.b))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-default"]],decls:7,vars:5,consts:[[1,"div-refresh"],[1,"feather","icon-refresh-cw","icon-refresh",3,"click"],[1,"mb-4","text-center","rendimento"],[1,"row"],["class","col-md-6 col-xl-4",4,"ngFor","ngForOf"],[1,"col-md-6","col-xl-4"],[3,"hidHeader","cardTitle","item","editItemEvent","removeItemEvent"],[1,"column","d-flex","align-items-left"],[1,"col-4"],[1,"f-w-300","d-flex","align-items-center","m-b-0"],[1,"feather","icon-shopping-cart","text-c-blue","f-30","m-r-10"],[1,"col-8","text-left"],[1,"m-b-0"],["class","f-w-300 d-flex align-items-center m-b-0",4,"ngIf"],[1,"feather","icon-activity","text-c-red","f-30","m-r-10"],[1,"col-12","text-left"],[1,"feather","icon-target","text-c-green","f-30","m-r-10"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"div",0),o["\u0275\u0275elementStart"](1,"i",1),o["\u0275\u0275listener"]("click",(function(){return t.itensService.buscarListaFavoritos(!0)})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](2,"h3",2),o["\u0275\u0275text"](3),o["\u0275\u0275pipe"](4,"number"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"div",3),o["\u0275\u0275template"](6,S,23,7,"div",4),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate1"]("Rendimento Total: R$ ",o["\u0275\u0275pipeBind2"](4,2,t.itensService.valorRendimentoTotal,".2-2"),""),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("ngForOf",t.itensService.listFavoritesUser))},directives:[r.NgForOf,f.a,r.NgIf],pipes:[r.DecimalPipe],styles:[".div-refresh[_ngcontent-%COMP%]{padding-bottom:10px}.icon-refresh[_ngcontent-%COMP%]{font-size:25px;color:#1de9bc;cursor:pointer}.rendimento[_ngcontent-%COMP%]{font-weight:bolder}"]}),e})()}];let I=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.j.forChild(F)],n.j]}),e})();var y=i("ebz3");i.d(t,"DefaultModule",(function(){return x}));let x=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.CommonModule,I,y.a]]}),e})()}}]);