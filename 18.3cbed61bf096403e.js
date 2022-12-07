"use strict";(self.webpackChunkangular_cert_template=self.webpackChunkangular_cert_template||[]).push([[18],{3018:(X,Z,c)=>{c.r(Z),c.d(Z,{StockTrackerModule:()=>S});var L=c(723),y=c(8996),t=c(4650),v=c(4004),F=c(529);class g{constructor(n){this.http=n,this.API_KEY="bu4f8kn48v6uehqi3cqg",this.API_BASE_URL="https://finnhub.io/api/v1"}getQuote(n){return this.http.get(`${this.API_BASE_URL}/quote`,{params:{token:this.API_KEY,symbol:n}}).pipe((0,v.U)(e=>e))}getCompanyName(n){return this.http.get(`${this.API_BASE_URL}/search`,{params:{token:this.API_KEY,q:n}}).pipe((0,v.U)(e=>e.result[0]))}getSentiment(n){const e=new Date,o=e.getMonth()+1,i=e.getFullYear(),p=e.getDate();let u=o-3,f=i;u<0&&(u+=12,f-=1);const k=`${f}-${u.toString().padStart(2,"0")}-01`,R=`${i}-${o.toString().padStart(2,"0")}-${p.toString().padStart(2,"0")}`;return this.http.get(`${this.API_BASE_URL}/stock/insider-sentiment`,{params:{token:this.API_KEY,symbol:n,from:k,to:R}}).pipe((0,v.U)(V=>V.data))}static#t=this.\u0275fac=function(e){return new(e||g)(t.LFG(F.eN))};static#n=this.\u0275prov=t.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"})}var m=c(6895),r=c(1576),b=c(4859),s=c(3546),A=c(7392);function U(a,n){1&a&&(t.TgZ(0,"mat-icon",20),t._uU(1,"trending_up"),t.qZA())}function q(a,n){1&a&&(t.TgZ(0,"mat-icon",21),t._uU(1,"trending_down"),t.qZA())}function N(a,n){if(1&a&&(t.TgZ(0,"mat-card",10)(1,"div",11)(2,"div",12)(3,"div",13)(4,"span",14)(5,"b"),t._uU(6),t.qZA()()(),t.TgZ(7,"div",13)(8,"span",15)(9,"b"),t._uU(10,"Change"),t.qZA(),t._uU(11),t.qZA()(),t.TgZ(12,"div",13)(13,"span",15)(14,"b"),t._uU(15,"Mspr"),t.qZA(),t._uU(16),t.qZA()()(),t.TgZ(17,"div",16)(18,"div",17),t.YNc(19,U,2,0,"mat-icon",18),t.YNc(20,q,2,0,"mat-icon",19),t.qZA()()()()),2&a){const e=n.$implicit,o=t.oxw(2);t.Q6J("fxFlex",1==o.sentiments.length?"100%":2==o.sentiments.length?"50%":"33%"),t.xp6(6),t.Oqu(o.monthNames[e.month-1]+" "+e.year.toString()),t.xp6(5),t.hij(": ",e.change,""),t.xp6(5),t.hij(": ",e.mspr,""),t.xp6(2),t.Q6J("ngSwitch",e.change>0),t.xp6(1),t.Q6J("ngSwitchCase",!0),t.xp6(1),t.Q6J("ngSwitchCase",!1)}}function I(a,n){if(1&a&&(t.ynx(0),t.TgZ(1,"div",8),t.YNc(2,N,21,7,"mat-card",9),t.qZA(),t.BQk()),2&a){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.sentiments)}}function O(a,n){1&a&&(t.TgZ(0,"mat-card",22),t._uU(1," No data available "),t.qZA())}class d{constructor(n,e,o){this.route=n,this.router=e,this.stockTrackerService=o,this.sentiments=[],this.symbol="",this.companyName="",this.monthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}ngOnInit(){this.symbol=this.route.snapshot.paramMap.get("symbol")||"",this.route.queryParams.subscribe(n=>{this.companyName=n.companyName}),this.symbol&&!this.companyName&&this.stockTrackerService.getCompanyName(this.symbol).subscribe(n=>{this.companyName=n.description}),this.symbol&&this.stockTrackerService.getSentiment(this.symbol).subscribe(n=>{this.sentiments=n})}goBack(){this.router.navigate([".."])}static#t=this.\u0275fac=function(e){return new(e||d)(t.Y36(y.gz),t.Y36(y.F0),t.Y36(g))};static#n=this.\u0275cmp=t.Xpm({type:d,selectors:[["app-company-sentiment"]],decls:20,vars:4,consts:[["fxLayout","column"],["fxLayout","column","fxFlex","80%","fxLayoutGap","10px"],["fxLayout","row","fxFlexFill","","fxLayoutAlign","center center",1,"company-sentient-title"],["fxLayout","row","fxFlexFill","","fxLayoutAlign","center center"],[4,"ngIf","ngIfElse"],["noSentimentsTemplate",""],["fxLayout","row","fxLayoutAlign","start center","fxFlex","100%",1,"company-sentiment-back-btn"],["id","backBtn","mat-button","",3,"click"],["fxLayout","row","fxFlexFill","","fxLayoutAlign","center center",1,"company-sentient-card"],["fxLayout","column","class","sentiment-item",3,"fxFlex",4,"ngFor","ngForOf"],["fxLayout","column",1,"sentiment-item",3,"fxFlex"],["fxLayout","row"],["fxLayout","column","fxFlex","65%","fxLayoutGap","15px",1,"company-sentiment-data"],["fxLayout","row","fxFlexFil",""],[1,"company-sentiment-data-date"],[1,"company-sentiment-data-change-mspr"],["fxFlex","35%","fxLayout","column","fxLayoutAlign","center center"],[3,"ngSwitch"],["class","icon-trending change-positive",4,"ngSwitchCase"],["class","icon-trending change-negative",4,"ngSwitchCase"],[1,"icon-trending","change-positive"],[1,"icon-trending","change-negative"],["fxLayout","column","fxLayoutAlign","center center",1,"sentiment-item","company-sentient-card"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-card-title")(4,"strong"),t._uU(5),t.qZA()()(),t.TgZ(6,"div",3)(7,"mat-card-subtitle")(8,"span")(9,"b"),t._uU(10,"Note"),t.qZA(),t._uU(11,": some companies may not have sentiment data or may only have data for the last one or two months."),t.qZA()()(),t.YNc(12,I,3,1,"ng-container",4),t.YNc(13,O,2,0,"ng-template",null,5,t.W1O),t.TgZ(15,"div",6)(16,"mat-icon"),t._uU(17,"chevron_left"),t.qZA(),t.TgZ(18,"button",7),t.NdJ("click",function(){return o.goBack()}),t._uU(19,"Back"),t.qZA()()()()),2&e){const i=t.MAs(14);t.xp6(5),t.AsE("(",o.symbol,") ",o.companyName,""),t.xp6(7),t.Q6J("ngIf",o.sentiments.length>0)("ngIfElse",i)}},dependencies:[m.sg,m.O5,m.RF,m.n9,r.xw,r.SQ,r.Wh,r.s9,r.yH,b.lW,s.a8,s.$j,s.n5,A.Hw],styles:[".change-positive[_ngcontent-%COMP%]{color:#00800080}.change-negative[_ngcontent-%COMP%]{color:#ff000080}.company-sentient-card[_ngcontent-%COMP%]{margin:20px 5px}.icon-trending[_ngcontent-%COMP%]{transform:scale(3)}.sentiment-item[_ngcontent-%COMP%]{margin-right:10px;margin-left:10px;min-height:100px}.company-sentient-title[_ngcontent-%COMP%]{margin-top:10px}.company-sentiment-back-btn[_ngcontent-%COMP%]{margin-top:20px}.company-sentiment-data[_ngcontent-%COMP%]{padding:20px}.company-sentiment-data-date[_ngcontent-%COMP%]{font-size:20px}.company-sentiment-data-change-mspr[_ngcontent-%COMP%]{font-size:14px}"]})}var l=c(4006),C=c(5698),w=c(9841),J=c(8505),P=c(4144),T=c(9549);function Q(a,n){1&a&&(t.TgZ(0,"mat-icon",17),t._uU(1,"trending_up"),t.qZA())}function E(a,n){1&a&&(t.TgZ(0,"mat-icon",18),t._uU(1,"trending_down"),t.qZA())}function M(a,n){if(1&a&&(t.ynx(0),t.TgZ(1,"div",14),t.YNc(2,Q,2,0,"mat-icon",15),t.YNc(3,E,2,0,"mat-icon",16),t.qZA(),t.BQk()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngSwitch",e.company.d>0),t.xp6(1),t.Q6J("ngSwitchCase",!0),t.xp6(1),t.Q6J("ngSwitchCase",!1)}}function Y(a,n){1&a&&(t.TgZ(0,"div")(1,"mat-icon",19),t._uU(2,"error_outline"),t.qZA()())}const G=function(a){return["/sentiment",a]},B=function(a){return{companyName:a}};class h{constructor(){this.removeSymbolEvent=new t.vpe}set company(n){n&&(this._company=n)}get company(){return this._company}removeSymbol(n){this.removeSymbolEvent.emit(n)}static#t=this.\u0275fac=function(e){return new(e||h)};static#n=this.\u0275cmp=t.Xpm({type:h,selectors:[["app-company-stock-item"]],inputs:{company:"company"},outputs:{removeSymbolEvent:"removeSymbolEvent"},decls:49,vars:29,consts:[["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","30px"],["fxLayout","column","fxLayoutGap","10px","fxFlex","80%"],[1,"company-stock-title"],["fxLayout","column","fxLayoutGap","10px"],["mat-button","",3,"id","click"],["fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","10px",1,"company-stock-list-card"],["fxFlex","80%","fxLayout","column","fxLayoutGap","20px"],["fxLayout","row","fxLayoutAlign","space-between center","fxLayoutGap","20px"],["fxFlex","50%"],["fxFlex","20%","fxLayout","column","fxLayoutAlign","center center"],[4,"ngIf","ngIfElse"],["noCompanyData",""],["fxLayout","row","fxLayoutAlign","end center","fxFlex","100%"],["mat-button","",3,"id","routerLink","queryParams"],[3,"ngSwitch"],["color","primary","class","icon-trending change-positive",4,"ngSwitchCase"],["color","warn","class","icon-trending change-negative",4,"ngSwitchCase"],["color","primary",1,"icon-trending","change-positive"],["color","warn",1,"icon-trending","change-negative"],[1,"icon-trending","icon-trending-no-data"]],template:function(e,o){if(1&e&&(t.TgZ(0,"mat-card")(1,"div",0)(2,"div",1)(3,"mat-card-title",2),t._uU(4),t.qZA()(),t.TgZ(5,"div",3)(6,"button",4),t.NdJ("click",function(){return o.removeSymbol(o.company.symbol)}),t.ALo(7,"uppercase"),t.TgZ(8,"mat-icon"),t._uU(9,"close"),t.qZA()()()(),t.TgZ(10,"mat-card-content",5)(11,"div",6)(12,"div",7)(13,"span",8)(14,"b"),t._uU(15,"Change today:"),t.qZA(),t._UZ(16,"br"),t._uU(17),t.ALo(18,"number"),t.qZA(),t.TgZ(19,"span",8)(20,"b"),t._uU(21,"Opening price:"),t.qZA(),t._UZ(22,"br"),t._uU(23),t.ALo(24,"currency"),t.qZA()(),t.TgZ(25,"div",7)(26,"span",8)(27,"b"),t._uU(28,"Current price:"),t.qZA(),t._UZ(29,"br"),t._uU(30),t.ALo(31,"currency"),t.qZA(),t.TgZ(32,"span",8)(33,"b"),t._uU(34,"High price:"),t.qZA(),t._UZ(35,"br"),t._uU(36),t.ALo(37,"currency"),t.qZA()()(),t.TgZ(38,"div",9),t.YNc(39,M,4,3,"ng-container",10),t.YNc(40,Y,3,0,"ng-template",null,11,t.W1O),t.qZA()(),t.TgZ(42,"mat-card-actions")(43,"div",12)(44,"button",13),t.ALo(45,"uppercase"),t._uU(46,"See sentiment details"),t.qZA(),t.TgZ(47,"mat-icon"),t._uU(48,"chevron_right"),t.qZA()()()()),2&e){const i=t.MAs(41);t.xp6(4),t.AsE(" (",o.company.symbol,") ",o.company.description,""),t.xp6(2),t.s9C("id","remove"+t.lcZ(7,12,o.company.symbol)),t.xp6(11),t.hij(" ",o.company.d?t.xi3(18,14,o.company.d,"1.0-2")+"%":"No data"," "),t.xp6(6),t.hij(" ",o.company.o?t.lcZ(24,17,o.company.o):"No data"," "),t.xp6(7),t.hij(" ",o.company.c?t.lcZ(31,19,o.company.c):"No data"," "),t.xp6(6),t.hij(" ",o.company.h?t.lcZ(37,21,o.company.h):"No data"," "),t.xp6(3),t.Q6J("ngIf",o.company.d)("ngIfElse",i),t.xp6(5),t.s9C("id","sentiment"+t.lcZ(45,23,o.company.symbol)),t.Q6J("routerLink",t.VKq(25,G,o.company.symbol))("queryParams",t.VKq(27,B,o.company.description))}},dependencies:[m.O5,m.RF,m.n9,r.xw,r.SQ,r.Wh,r.yH,b.lW,s.a8,s.hq,s.dn,s.n5,A.Hw,y.rH,m.gd,m.JJ,m.H9],styles:[".icon-trending[_ngcontent-%COMP%]{transform:scale(3)}.change-positive[_ngcontent-%COMP%]{color:#00800080}.change-negative[_ngcontent-%COMP%]{color:#ff000080}.icon-trending-no-data[_ngcontent-%COMP%]{color:#000c}.company-stock-title[_ngcontent-%COMP%]{margin-left:15px;margin-top:10px}.company-stock-list-card[_ngcontent-%COMP%]{margin-top:20px}"]})}function $(a,n){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Stock symbol is required "),t.qZA())}function j(a,n){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Stock symbol must be at least 1 character long "),t.qZA())}function K(a,n){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Stock symbol must be at most 5 characters long "),t.qZA())}function W(a,n){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Stock symbol is already tracked "),t.qZA())}function H(a,n){1&a&&(t.TgZ(0,"mat-error"),t._uU(1," Stock symbol cannot contain leading or trailing whitespace "),t.qZA())}function z(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"div",10)(1,"app-company-stock-item",11),t.NdJ("removeSymbolEvent",function(i){t.CHM(e);const p=t.oxw();return t.KtG(p.removeSymbol(i))}),t.qZA()()}if(2&a){const e=n.$implicit;t.xp6(1),t.Q6J("company",e)}}class x{constructor(n,e){this.fb=n,this.stockTrackerService=e,this.isLoading=!1,this.companyStockCombined=[],this.localStorageKey="companiesAndQuotes",this.stockForm=n.group({symbol:["",[l.kI.required,l.kI.minLength(1),l.kI.maxLength(5),this.duplicateSymbolValidator,this.noWhiteSpaceValidator]]})}ngOnInit(){this.getSymbols()}getSymbols(){let n=localStorage.getItem(this.localStorageKey);n&&(this.companyStockCombined=JSON.parse(n))}addSymbol(){const n=this.stockForm.value.symbol?.toUpperCase();if(!n)return;let e=this.stockTrackerService.getCompanyName(n).pipe((0,C.q)(1)),o=this.stockTrackerService.getQuote(n).pipe((0,C.q)(1));(0,w.a)([e,o]).pipe((0,J.b)(([i,p])=>{const u={...i,...p};this.companyStockCombined=[...this.companyStockCombined,u],localStorage.setItem(this.localStorageKey,JSON.stringify(this.companyStockCombined)),this.stockForm.reset()})).subscribe()}removeSymbol(n){const e=this.companyStockCombined.findIndex(o=>o.symbol===n);e>=0&&(this.companyStockCombined.splice(e,1),localStorage.setItem("companiesAndQuotes",JSON.stringify(this.companyStockCombined)))}duplicateSymbolValidator(n){if(!n.value)return null;let e=localStorage.getItem("companiesAndQuotes");return(e?JSON.parse(e):[]).find(i=>i.symbol===n.value.toUpperCase())?{duplicate:!0}:null}noWhiteSpaceValidator(n){return(n.value||"").match(/\s/g)?{whitespace:!0}:null}static#t=this.\u0275fac=function(e){return new(e||x)(t.Y36(l.qu),t.Y36(g))};static#n=this.\u0275cmp=t.Xpm({type:x,selectors:[["app-stock-tracker"]],decls:26,vars:11,consts:[["fxLayout","column"],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","20px",1,"stock-tracker-card"],["fxLayout","row","fxFlexFill","","fxLayoutAlign","center center"],["fxLayout","row","fxFlexFill","","fxLayoutGap","50px","fxLayoutAlign","center center",1,"form-container"],[3,"formGroup"],["id","stockInput","matInput","","placeholder","Enter stock symbol","formControlName","symbol"],[4,"ngIf"],["id","trackBtn","mat-raised-button","","color","primary",3,"disabled","click"],["fxFill","","fxLayout","row wrap"],["fxFlex","25","fxFlex.md","33","fxFlex.sm","50","fxFlex.xs","100","fxLayout","column","class","company-stock-container",4,"ngFor","ngForOf"],["fxFlex","25","fxFlex.md","33","fxFlex.sm","50","fxFlex.xs","100","fxLayout","column",1,"company-stock-container"],[3,"company","removeSymbolEvent"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"mat-card",1)(2,"div",2)(3,"mat-card-title")(4,"b"),t._uU(5),t.ALo(6,"uppercase"),t.qZA()()(),t.TgZ(7,"div",2)(8,"mat-card-subtitle"),t._uU(9," Enter the symbol of a stock to trag (i.e. AAPL., TSLA., GOOGL). "),t.TgZ(10,"strong"),t._uU(11,"Note"),t.qZA(),t._uU(12," the query will return the first result that matches the symbol of a stock "),t.qZA()(),t.TgZ(13,"div",3)(14,"form",4)(15,"mat-form-field"),t._UZ(16,"input",5),t.YNc(17,$,2,0,"mat-error",6),t.YNc(18,j,2,0,"mat-error",6),t.YNc(19,K,2,0,"mat-error",6),t.YNc(20,W,2,0,"mat-error",6),t.YNc(21,H,2,0,"mat-error",6),t.qZA()(),t.TgZ(22,"button",7),t.NdJ("click",function(){return o.addSymbol()}),t._uU(23,"Track Stock"),t.qZA()()(),t.TgZ(24,"div",8),t.YNc(25,z,2,1,"div",9),t.qZA()()),2&e){let i,p,u,f,k;t.xp6(5),t.hij(" ",t.lcZ(6,9,"Stock Tracker")," "),t.xp6(9),t.Q6J("formGroup",o.stockForm),t.xp6(3),t.Q6J("ngIf",null==(i=o.stockForm.get("symbol"))?null:i.hasError("required")),t.xp6(1),t.Q6J("ngIf",null==(p=o.stockForm.get("symbol"))?null:p.hasError("minlength")),t.xp6(1),t.Q6J("ngIf",null==(u=o.stockForm.get("symbol"))?null:u.hasError("maxlength")),t.xp6(1),t.Q6J("ngIf",null==(f=o.stockForm.get("symbol"))?null:f.hasError("duplicate")),t.xp6(1),t.Q6J("ngIf",null==(k=o.stockForm.get("symbol"))?null:k.hasError("whitespace")),t.xp6(1),t.Q6J("disabled",!o.stockForm.valid),t.xp6(3),t.Q6J("ngForOf",o.companyStockCombined)}},dependencies:[m.sg,m.O5,r.xw,r.SQ,r.Wh,r.s9,r.yH,b.lW,s.a8,s.$j,s.n5,P.Nt,T.KE,T.TO,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,h,m.gd],styles:[".stock-tracker-card[_ngcontent-%COMP%]{margin-top:20px;margin-left:10px;margin-right:10px}.company-stock-container[_ngcontent-%COMP%]{padding:10px}.form-container[_ngcontent-%COMP%]{margin-bottom:20px}"]})}const D=[{path:"",component:x},{path:"sentiment/:symbol",component:d}];class _{static#t=this.\u0275fac=function(e){return new(e||_)};static#n=this.\u0275mod=t.oAB({type:_});static#e=this.\u0275inj=t.cJS({imports:[y.Bz.forChild(D),y.Bz]})}class S{static#t=this.\u0275fac=function(e){return new(e||S)};static#n=this.\u0275mod=t.oAB({type:S});static#e=this.\u0275inj=t.cJS({imports:[L.m,_]})}}}]);