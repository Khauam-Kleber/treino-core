(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"z/QQ":function(e,t,r){"use strict";r.r(t);var n=r("ofXK"),a=r("ebz3"),i=r("tyNb"),o=r("M9IT"),s=r("Dh3D"),l=r("+0xr"),c=r("0IaG"),m=r("3Pt+"),d=r("fXoL"),u=r("A4b0"),p=r("GDbA"),f=r("6Qg2"),h=r("OC8m"),g=r("AytR"),v=r("lJxs"),b=r("tk/3");let S=(()=>{class e{constructor(e){this.http=e}create(e){return this.http.post(`${g.a.apiUrl}/performance`,e)}getAllByMatchId(e){return this.http.get(`${g.a.apiUrl}/performance/find-performaces-match/${e}`)}getAll(){return this.http.get(`${g.a.apiUrl}/performance`)}getById(e){return this.http.get(`${g.a.apiUrl}/performance/${e}`)}remove(e){return this.http.delete(`${g.a.apiUrl}/performance/${e}`)}update(e,t){return this.http.put(`${g.a.apiUrl}/performance/${e}`,t).pipe(Object(v.a)(e=>e))}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275inject"](b.b))},e.\u0275prov=d["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var C=r("/n7v"),y=r("xHqg"),x=r("XiUz"),w=r("ZOsW"),I=r("znSr");const F=["stepper"];function T(e,t){1&e&&d["\u0275\u0275text"](0,"Partida")}function P(e,t){1&e&&d["\u0275\u0275text"](0,"Individual")}const _=function(e){return{"is-invalid-select":e}},O=function(e){return{"is-invalid":e}};function E(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275elementStart"](1,"form",6),d["\u0275\u0275listener"]("ngSubmit",(function(){d["\u0275\u0275restoreView"](e);const r=t.index;return d["\u0275\u0275nextContext"]().salvarPerformace(r)})),d["\u0275\u0275elementStart"](2,"div",21),d["\u0275\u0275element"](3,"ng-select",22),d["\u0275\u0275element"](4,"input",23),d["\u0275\u0275element"](5,"input",24),d["\u0275\u0275element"](6,"input",25),d["\u0275\u0275element"](7,"input",26),d["\u0275\u0275elementStart"](8,"button",27),d["\u0275\u0275text"](9," Salvar"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,r=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("formGroup",e),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("items",r.usuariosList)("ngClass",d["\u0275\u0275pureFunction1"](7,_,r.submitted&&e.controls.player.errors)),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngClass",d["\u0275\u0275pureFunction1"](9,O,r.submitted&&e.controls.rating.errors)),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngClass",d["\u0275\u0275pureFunction1"](11,O,r.submitted&&e.controls.kills.errors)),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngClass",d["\u0275\u0275pureFunction1"](13,O,r.submitted&&e.controls.assists.errors)),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngClass",d["\u0275\u0275pureFunction1"](15,O,r.submitted&&e.controls.deaths.errors))}}let A=(()=>{class e{constructor(e,t,r,n,a,i,o,s){this.formBuilder=e,this.partidaService=t,this.timeService=r,this.dialogRef=n,this.usuarioService=a,this.notificationService=i,this.performanceService=o,this.data=s,this.timesList=[],this.submitted=!1,this.isLinear=!0,this.usuariosList=[],this.performances=new m.e([]),this.buscarTimesContras(this.usuarioService.userValue.data.teamId),this.criarForm(this.data.partida)}ngOnInit(){}criarForm(e){this.form=this.formBuilder.group({_id:[e?e._id:null],teamHome:[{_id:this.usuarioService.userValue.data.teamId}],teamAgainst:[e.teamAgainst?e.teamAgainst._id:null,m.F.required],date:[e&&e.date?this.convertDateIsoTimezone(e.date):(new Date).toISOString().slice(0,16),m.F.required],scoreboardTeamAgainst:[e?e.scoreboardTeamAgainst:null,m.F.required],scoreboardTeamHome:[e?e.scoreboardTeamHome:null,m.F.required],learnings:[e?e.learnings:null,m.F.required],roundsToObserve:[e?e.roundsToObserve:null,m.F.required]})}convertDateIsoTimezone(e){var t=new Date(e);return new Date(t.getTime()-6e4*t.getTimezoneOffset()).toISOString().slice(0,16)}get f(){return this.form.controls}onNoClick(){this.dialogRef.close()}salvarPartida(){this.submitted=!0,this.form.invalid?console.log("invalido"):this.form.get("_id").value?this.partidaService.update(this.form.get("_id").value,this.form.value).subscribe(e=>{this.notificationService.showCreateSuccess(),this.myStepper.next(),this.submitted=!1},e=>{console.log(e)}):this.partidaService.create(this.form.value).subscribe(e=>{this.form.get("_id").setValue(e._id),this.notificationService.showCreateSuccess(),this.myStepper.next(),this.submitted=!1},e=>{console.log(e)})}criarNovoTime(e){this.timeService.create({_id:null,name:e,teamOwner:{_id:this.usuarioService.userValue.data.teamId}}).subscribe(e=>{this.timesList.push(e),this.timesList=[...this.timesList]},e=>{})}removerTime(e){this.timeService.remove(e.value._id).subscribe(e=>{this.notificationService.showCreateSuccess()},e=>{})}buscarTimesContras(e){this.timeService.buscarTimesContras().subscribe(e=>{this.timesList=e},e=>{console.log(e)})}abaPerformace(e){1===e.selectedIndex?(this.buscarMembrosTime(this.usuarioService.userValue.data.teamId),this.performanceService.getAllByMatchId(this.form.get("_id").value).subscribe(e=>{e.forEach(e=>{this.performances.push(this.criarFormPerformaces(e))})},e=>{console.log(e)})):this.performances.clear()}addPerformaceForm(){this.performances.push(this.criarFormPerformaces())}criarFormPerformaces(e){return this.formBuilder.group({_id:[e?e._id:null],player:[e&&e.player?e.player._id:null,m.F.required],rating:[e?e.rating:null,m.F.required],kills:[e?e.kills:null,m.F.required],assists:[e?e.assists:null,m.F.required],deaths:[e?e.deaths:null,m.F.required],match:[]})}fperformace(e){return this.performances.controls[e]}salvarPerformace(e){const t=this.performances.controls[e];this.submitted=!0,t.invalid?console.log("invalido"):(t.value.player={_id:t.value.player},t.value.match={_id:this.form.get("_id").value},t.get("_id").value?this.performanceService.update(t.get("_id").value,t.value).subscribe(e=>{this.notificationService.showCreateSuccess()},e=>{console.log(e)}):this.performanceService.create(t.value).subscribe(e=>{this.form.get("_id").setValue(e._id),this.notificationService.showCreateSuccess()},e=>{console.log(e)}))}buscarMembrosTime(e){this.timeService.buscarUsuariosMembros(e).subscribe(e=>{this.usuariosList=e},e=>{console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](m.g),d["\u0275\u0275directiveInject"](u.a),d["\u0275\u0275directiveInject"](p.a),d["\u0275\u0275directiveInject"](c.h),d["\u0275\u0275directiveInject"](f.a),d["\u0275\u0275directiveInject"](h.a),d["\u0275\u0275directiveInject"](S),d["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["app-match-form"]],viewQuery:function(e,t){var r;1&e&&d["\u0275\u0275viewQuery"](F,!0),2&e&&d["\u0275\u0275queryRefresh"](r=d["\u0275\u0275loadQuery"]())&&(t.myStepper=r.first)},decls:24,vars:20,consts:[["cardTitle","Dados da Partida",3,"options"],[3,"linear","selectionChange"],["stepper",""],[3,"stepControl"],["matStepLabel",""],["mat-dialog-content",""],[3,"formGroup","ngSubmit"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","space-between center",1,"mb-3"],["fxFlex","45","formControlName","teamAgainst","addTagText","Criar Novo","placeholder","Time Contra","bindLabel","name","bindValue","_id",3,"addTag","multiple","ngClass","items","remove"],["fxFlex","45","type","datetime-local","formControlName","date","placeholder","Data",1,"form-control",3,"ngClass"],["fxLayout","row","fxLayoutAlign","space-between center",1,"mb-3"],["fxFlex","45","type","number","formControlName","scoreboardTeamAgainst","placeholder","Pontos Time Contra",1,"form-control",3,"ngClass"],["fxFlex","45","type","number","formControlName","scoreboardTeamHome","placeholder","Pontos Nosso Time ",1,"form-control",3,"ngClass"],[1,"input-group","mb-3"],["type","text","formControlName","learnings","placeholder","Resumo Aprendizado",1,"form-control"],["type","text","formControlName","roundsToObserve","placeholder","Rounds \xe0 Observar ",1,"form-control"],["type","submit",1,"btn","btn-primary","mb-4"],["matStepLabel","",3,"click"],["type","button",1,"btn","btn-icon","btn-success",3,"click"],[1,"feather","icon-plus"],[4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","space-between center",1,"mb-4"],["fxFlex","20","formControlName","player","bindLabel","name","bindValue","_id",3,"items","ngClass"],["fxFlex","15","type","number","formControlName","rating","placeholder","Avalia\xe7\xe3o",1,"form-control",3,"ngClass"],["fxFlex","15","type","number","formControlName","kills","placeholder","Kills",1,"form-control",3,"ngClass"],["fxFlex","15","type","number","formControlName","assists","placeholder","Assists",1,"form-control",3,"ngClass"],["fxFlex","15","type","number","formControlName","deaths","placeholder","Deaths",1,"form-control",3,"ngClass"],["fxFlex","15","type","submit",1,"btn","btn-primary"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"app-card",0),d["\u0275\u0275elementStart"](1,"mat-horizontal-stepper",1,2),d["\u0275\u0275listener"]("selectionChange",(function(e){return t.abaPerformace(e)})),d["\u0275\u0275elementStart"](3,"mat-step",3),d["\u0275\u0275template"](4,T,1,0,"ng-template",4),d["\u0275\u0275elementStart"](5,"div",5),d["\u0275\u0275elementStart"](6,"form",6),d["\u0275\u0275listener"]("ngSubmit",(function(){return t.salvarPartida()})),d["\u0275\u0275elementStart"](7,"div",7),d["\u0275\u0275elementStart"](8,"ng-select",8),d["\u0275\u0275listener"]("remove",(function(e){return t.removerTime(e)})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"input",9),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"div",10),d["\u0275\u0275element"](11,"input",11),d["\u0275\u0275element"](12,"input",12),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](13,"div",13),d["\u0275\u0275element"](14,"textarea",14),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](15,"div",13),d["\u0275\u0275element"](16,"input",15),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](17,"button",16),d["\u0275\u0275text"](18," Salvar"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](19,"mat-step"),d["\u0275\u0275template"](20,P,1,0,"ng-template",17),d["\u0275\u0275listener"]("click",(function(){return t.abaPerformace()})),d["\u0275\u0275elementStart"](21,"button",18),d["\u0275\u0275listener"]("click",(function(){return t.addPerformaceForm()})),d["\u0275\u0275element"](22,"i",19),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](23,E,10,17,"div",20),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("options",!1),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("linear",null==t.f._id.value),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("stepControl",t.form),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("formGroup",t.form),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("addTag",t.criarNovoTime.bind(t))("multiple",!1)("ngClass",d["\u0275\u0275pureFunction1"](12,_,t.submitted&&t.f.teamAgainst.errors))("items",t.timesList),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngClass",d["\u0275\u0275pureFunction1"](14,O,t.submitted&&t.f.date.errors)),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngClass",d["\u0275\u0275pureFunction1"](16,O,t.submitted&&t.f.scoreboardTeamAgainst.errors)),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngClass",d["\u0275\u0275pureFunction1"](18,O,t.submitted&&t.f.scoreboardTeamHome.errors)),d["\u0275\u0275advance"](11),d["\u0275\u0275property"]("ngForOf",t.performances.controls))},directives:[C.a,y.a,y.b,y.d,c.f,m.H,m.s,m.j,x.f,x.e,w.a,x.b,m.r,m.i,n.NgClass,I.a,m.c,m.x,n.NgForOf],styles:[".is-invalid-select[_ngcontent-%COMP%]{border:1px solid red}"]}),e})();function z(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"div",14),d["\u0275\u0275elementStart"](1,"button",15),d["\u0275\u0275listener"]("click",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().cadastrarPartida(t)})),d["\u0275\u0275text"](2,"Cadastrar"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}}function D(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"th",16),d["\u0275\u0275text"](1," Time contra "),d["\u0275\u0275elementEnd"]())}function M(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"td",17),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",e.teamAgainst.name," ")}}function L(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"th",16),d["\u0275\u0275text"](1," Placar "),d["\u0275\u0275elementEnd"]())}function N(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"td",17),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate2"](" ",e.scoreboardTeamAgainst," x ",e.scoreboardTeamHome," ")}}function j(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"th",16),d["\u0275\u0275text"](1," Rounds a observar "),d["\u0275\u0275elementEnd"]())}function k(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"td",17),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",e.roundsToObserve," ")}}function R(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"th",18),d["\u0275\u0275text"](1," Aprendizados "),d["\u0275\u0275elementEnd"]())}function V(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"td",19),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",e.learnings,"")}}function $(e,t){1&e&&d["\u0275\u0275element"](0,"tr",20)}function q(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tr",21),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](e);const r=t.$implicit;return d["\u0275\u0275nextContext"]().cadastrarPartida(r)})),d["\u0275\u0275elementEnd"]()}}const H=[{path:"",component:(()=>{class e{constructor(e,t,r){this.partidaService=e,this.dialog=t,this.usuarioService=r,this.displayedColumns=["timeContra","placar","roundsToObserve","learnings"],this.totalRows=0,this.pageSize=5,this.currentPage=0,this.pageSizeOptions=[2,5,10,25,100],this.dataSource=new l.o,this.playerName="",this.term="",this.tipoItemFiltro=1,this.sort=new s.a}set matSort(e){this.sort=e,this.setDataSourceAttributes()}ngOnInit(){this.fazBuscaItens()}setDataSourceAttributes(){this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator}pageChanged(e){console.log({event:e}),this.pageSize=e.pageSize,this.currentPage=e.pageIndex,this.fazBuscaItens()}ngAfterViewInit(){this.dataSource.sort=this.sort}fazBuscaItens(){this.partidaService.findMatchesPagination(this.currentPage+1,this.pageSize).subscribe(e=>{this.dataSource=new l.o(e.data),this.paginator.pageIndex=this.currentPage,this.paginator.length=e.count}),this.dataSource.sort=this.sort,setTimeout(()=>{this.dataSource.sort=this.sort},1e3)}cadastrarPartida(e){this.dialog.open(A,{width:"1000px",data:{partida:e}}).afterClosed().subscribe(e=>{this.fazBuscaItens()})}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](u.a),d["\u0275\u0275directiveInject"](c.b),d["\u0275\u0275directiveInject"](f.a))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["matches-table"]],viewQuery:function(e,t){var r;1&e&&(d["\u0275\u0275viewQuery"](s.a,!0),d["\u0275\u0275viewQuery"](o.a,!0)),2&e&&(d["\u0275\u0275queryRefresh"](r=d["\u0275\u0275loadQuery"]())&&(t.matSort=r.first),d["\u0275\u0275queryRefresh"](r=d["\u0275\u0275loadQuery"]())&&(t.paginator=r.first))},decls:18,vars:9,consts:[["fxLayout","row","fxLayoutAlign","end center",4,"ngIf"],["mat-table","","matSort","","flex","100",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","timeContra"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","placar"],["matColumnDef","roundsToObserve"],["matColumnDef","learnings"],["mat-header-cell","","mat-sort-header","","class","width50",4,"matHeaderCellDef"],["mat-cell","","class","width50",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["aria-label","Select page",3,"length","pageIndex","pageSize","pageSizeOptions","page"],["paginator",""],["fxLayout","row","fxLayoutAlign","end center"],["type","button","ngbTooltip","btn-info",1,"btn","btn-info",3,"click"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell","","mat-sort-header","",1,"width50"],["mat-cell","",1,"width50"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(e,t){1&e&&(d["\u0275\u0275template"](0,z,3,0,"div",0),d["\u0275\u0275elementStart"](1,"table",1),d["\u0275\u0275elementContainerStart"](2,2),d["\u0275\u0275template"](3,D,2,0,"th",3),d["\u0275\u0275template"](4,M,2,1,"td",4),d["\u0275\u0275elementContainerEnd"](),d["\u0275\u0275elementContainerStart"](5,5),d["\u0275\u0275template"](6,L,2,0,"th",3),d["\u0275\u0275template"](7,N,2,2,"td",4),d["\u0275\u0275elementContainerEnd"](),d["\u0275\u0275elementContainerStart"](8,6),d["\u0275\u0275template"](9,j,2,0,"th",3),d["\u0275\u0275template"](10,k,2,1,"td",4),d["\u0275\u0275elementContainerEnd"](),d["\u0275\u0275elementContainerStart"](11,7),d["\u0275\u0275template"](12,R,2,0,"th",8),d["\u0275\u0275template"](13,V,2,1,"td",9),d["\u0275\u0275elementContainerEnd"](),d["\u0275\u0275template"](14,$,1,0,"tr",10),d["\u0275\u0275template"](15,q,1,0,"tr",11),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](16,"mat-paginator",12,13),d["\u0275\u0275listener"]("page",(function(e){return t.pageChanged(e)})),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("ngIf",t.usuarioService.userValue.data.teamId),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("dataSource",t.dataSource),d["\u0275\u0275advance"](13),d["\u0275\u0275property"]("matHeaderRowDef",t.displayedColumns)("matHeaderRowDefSticky",!0),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("matRowDefColumns",t.displayedColumns),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("length",t.totalRows)("pageIndex",t.currentPage)("pageSize",t.pageSize)("pageSizeOptions",t.pageSizeOptions))},directives:[n.NgIf,l.n,s.a,l.c,l.i,l.b,l.k,l.m,o.a,x.f,x.e,l.h,s.b,l.a,l.j,l.l],styles:["table.mat-table[_ngcontent-%COMP%]{display:table;width:100%}table.mat-table[_ngcontent-%COMP%]   th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}.width100[_ngcontent-%COMP%]{width:100%}.width50[_ngcontent-%COMP%]{width:50%}.width25[_ngcontent-%COMP%]{width:25%}.espacamento[_ngcontent-%COMP%]{margin-right:15px}.verde[_ngcontent-%COMP%]{color:green}.vermelho[_ngcontent-%COMP%]{color:red}.azul[_ngcontent-%COMP%]{color:#00f}.fundo-verde[_ngcontent-%COMP%]{background-color:#95f595}.icon-star[_ngcontent-%COMP%]{fill:red}.icon-fav[_ngcontent-%COMP%]{font-size:30px;cursor:pointer}"]}),e})()}];let Q=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.j.forChild(H)],i.j]}),e})();r.d(t,"MatchesTableModule",(function(){return B}));let B=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.CommonModule,Q,a.a,n.CommonModule]]}),e})()}}]);