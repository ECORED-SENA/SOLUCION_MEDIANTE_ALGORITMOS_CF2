(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["comple","chunk-515a8379"],{"0095":function(t,a,n){"use strict";n("95c5")},"13aa":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container-fluid banner-interno"},[n("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),n("div",{staticClass:"container"},[n("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?n("div",{staticClass:"banner-interno__titulo__icono me-3"},[n("i",{class:t.icono})]):t._e(),n("h1",{staticClass:"h3 mb-0"},[t._v(t._s(t.titulo))])])])])},o=[],r={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},i=r,c=(n("0095"),n("2877")),l=Object(c["a"])(i,e,o,!1,null,null,null);a["default"]=l.exports},"44b8":function(t,a,n){"use strict";n("e29a")},"95c5":function(t,a,n){},dd8c:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"curso-main-container complementario"},[n("BannerInterno",{attrs:{icono:"far fa-folder-open",titulo:"Material complementario"}}),n("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[n("div",{staticClass:"table-responsive"},[n("table",[t._m(0),n("tbody",t._l(t.complementarioData,(function(a,e){return n("tr",{key:"complementario-"+e},[n("td",{attrs:{colspan:"8",scope:"row"}},[t._v(t._s(a.texto))]),n("td",{attrs:{colspan:"2"}},[t._v(t._s(a.tipo))]),n("td",{attrs:{colspan:"2"}},[n("div",{staticClass:"complementario__btn"},[n("a",{attrs:{href:a.descarga?t.obtenerLink(a.descarga):a.link,target:"_blank"}},[n("i",{staticClass:"fas fa-external-link-alt"})])])])])})),0)])])])],1)},o=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("thead",[n("tr",[n("th",{attrs:{colspan:"8",scope:"col"}},[t._v("Autor, (año del documento o material), Nombre del documento o material")]),n("th",{attrs:{colspan:"2",scope:"col"}},[t._v("Tipo de material")]),n("th",{attrs:{colspan:"2",scope:"col"}},[t._v("Enlace")])])])}],r=n("13aa"),i={name:"MaterialComplementario",components:{BannerInterno:r["default"]},computed:{complementarioData:function(){return this.$config.complementario}}},c=i,l=(n("44b8"),n("2877")),s=Object(l["a"])(c,e,o,!1,null,null,null);a["default"]=s.exports},e29a:function(t,a,n){}}]);
//# sourceMappingURL=comple.6064b7c9.js.map