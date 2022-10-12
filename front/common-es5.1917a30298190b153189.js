function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{GDbA:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n("lJxs"),a=n("AytR"),r=n("fXoL"),s=n("tk/3"),c=function(){var t=function(){function t(e){_classCallCheck(this,t),this.http=e}return _createClass(t,[{key:"create",value:function(t){return this.http.post("".concat(a.a.apiUrl,"/teams"),t)}},{key:"getAll",value:function(){return this.http.get("".concat(a.a.apiUrl,"/teams"))}},{key:"buscarUsuariosMembros",value:function(t){return this.http.get("".concat(a.a.apiUrl,"/users/team-users/").concat(t))}},{key:"buscarTimesContras",value:function(){return this.http.get("".concat(a.a.apiUrl,"/teams/againsts/teams"))}},{key:"getById",value:function(t){return this.http.get("".concat(a.a.apiUrl,"/teams/").concat(t))}},{key:"remove",value:function(t){return this.http.delete("".concat(a.a.apiUrl,"/teams/").concat(t))}},{key:"update",value:function(t,e){return this.http.put("".concat(a.a.apiUrl,"/teams/").concat(t),e).pipe(Object(o.a)((function(t){return t})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275inject"](s.b))},t.\u0275prov=r["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},OC8m:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n("fXoL"),a=n("5eHb"),r=function(){var t=function(){function t(e){_classCallCheck(this,t),this.toastr=e}return _createClass(t,[{key:"showCreateSuccess",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Cadastrado com Sucesso!",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Dados salvos";this.toastr.success(t,e,{positionClass:"toast-top-center"})}},{key:"showUpdateSuccess",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Atulizado com Sucesso!",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Dados salvos";this.toastr.success(t,e,{positionClass:"toast-top-center"})}},{key:"showDeleteSuccess",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Deletado com Sucesso!",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Dados salvos";this.toastr.success(t,e,{positionClass:"toast-top-center"})}},{key:"showError",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Ocorreu um erro na opera\xe7\xe3o!",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Erro";this.toastr.error(t,e,{positionClass:"toast-top-center"})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o["\u0275\u0275inject"](a.c))},t.\u0275prov=o["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);