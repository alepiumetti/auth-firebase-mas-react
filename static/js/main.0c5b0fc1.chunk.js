(this["webpackJsonpproyecto-2"]=this["webpackJsonpproyecto-2"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports={btn:"Auth_btn__2naob",input:"Auth_input__24wQh"}},,function(e,t,a){e.exports={input:"Suma_input__2Lb7D",result:"Suma_result__1Q2q8",btn:"Suma_btn__3r9j6"}},function(e,t,a){e.exports={input:"Resta_input__10Cd1",result:"Resta_result__3padW",btn:"Resta_btn__kUFUR"}},function(e,t,a){e.exports={input:"Multiplicacion_input__csh3W",result:"Multiplicacion_result__i2W81",btn:"Multiplicacion_btn__25a4m"}},,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){e.exports={btn:"VerMas_btn__1D4IG"}},function(e,t,a){e.exports=a(36)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),s=a.n(l),c=(a(29),a(22)),o=a.n(c),u=(a(30),a(8)),i=a(9),m=a.n(i),p=a(17),d=(a(34),a(11)),h=a.n(d),b=function(e){var t=Object(n.useState)(""),a=Object(p.a)(t,2),l=a[0],s=a[1],c=Object(n.useState)(""),o=Object(p.a)(c,2),i=o[0],d=o[1],b=Object(u.b)(),E=Object(u.d)();return r.a.createElement("div",null,!E&&r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"E-mail "),r.a.createElement("input",{className:h.a.input,type:"email",id:"email",onChange:function(e){return s(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"password"},"Contrase\xf1a "),r.a.createElement("input",{className:h.a.input,type:"password",id:"password",onChange:function(e){return d(e.target.value)}}),r.a.createElement("p",null,r.a.createElement("button",{onClick:function(){return m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.awrap(b.auth().signInWithEmailAndPassword(l,i));case 2:case"end":return e.stop()}}))},className:h.a.btn},"Iniciar sesi\xf3n"),r.a.createElement("button",{onClick:function(){return m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.awrap(b.auth().createUserWithEmailAndPassword(l,i));case 2:case"end":return e.stop()}}))},className:h.a.btn},"Crear cuenta"))),E&&r.a.createElement("button",{className:h.a.btn,onClick:function(){return m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.awrap(b.auth().signOut());case 2:case"end":return e.stop()}}))}},"Cerrar sesi\xf3n"))},E=a(3),f=a(4),v=a(6),g=a(5),y=a(7),_=a(13),C=a.n(_),O=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(v.a)(this,Object(g.a)(t).call(this,e))).validation=function(){""===a.state.nro1||""===a.state.nro2?alert("Ingrese un n\xfamero v\xe1lido"):a.sumar()},a.sumar=function(){a.setState({resultado:parseFloat(a.state.nro1)+parseFloat(a.state.nro2)})},a.state={resultado:"",nro1:"",nro2:""},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"syncChanges",value:function(e,t){var a={};a[t]=e,this.setState(a)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Suma de 2 n\xfameros"),r.a.createElement("input",{className:C.a.input,type:"number",placeholder:"Ingres\xe1 un N\xfamero",onChange:function(t){e.syncChanges(t.target.value,"nro1")}}),r.a.createElement("span",null," + "),r.a.createElement("input",{className:C.a.input,type:"number",placeholder:"Ingres\xe1 otro N\xfamero",onChange:function(t){e.syncChanges(t.target.value,"nro2")}}),r.a.createElement("span",null," = "),r.a.createElement("input",{className:C.a.result,type:"number",readOnly:!0,value:this.state.resultado}),r.a.createElement("br",null),r.a.createElement("button",{className:C.a.btn,onClick:this.validation},"Sumar"))}}]),t}(n.Component),j=a(14),N=a.n(j),w=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(v.a)(this,Object(g.a)(t).call(this,e))).validation=function(){""===a.state.nro1||""===a.state.nro2?alert("Ingrese un n\xfamero v\xe1lido"):a.restar()},a.restar=function(){a.setState({resultado:parseFloat(a.state.nro1)-parseFloat(a.state.nro2)})},a.state={resultado:"",nro1:"",nro2:""},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"syncChanges",value:function(e,t){var a={};a[t]=e,this.setState(a)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Resta de 2 n\xfameros"),r.a.createElement("input",{className:N.a.input,type:"number",placeholder:"Ingres\xe1 un N\xfamero",onChange:function(t){e.syncChanges(t.target.value,"nro1")}}),r.a.createElement("span",null," - "),r.a.createElement("input",{className:N.a.input,type:"number",placeholder:"Ingres\xe1 otro N\xfamero",onChange:function(t){e.syncChanges(t.target.value,"nro2")}}),r.a.createElement("span",null," = "),r.a.createElement("input",{className:N.a.result,type:"number",readOnly:!0,value:this.state.resultado}),r.a.createElement("br",null),r.a.createElement("button",{className:N.a.btn,onClick:this.validation},"Restar"))}}]),t}(n.Component),k=a(15),S=a.n(k),I=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(v.a)(this,Object(g.a)(t).call(this,e))).validation=function(){""===a.state.nro1||""===a.state.nro2?alert("Ingrese un n\xfamero v\xe1lido"):a.multiplicar()},a.multiplicar=function(){a.setState({resultado:parseFloat(a.state.nro1)*parseFloat(a.state.nro2)})},a.state={resultado:"",nro1:"",nro2:""},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"syncChanges",value:function(e,t){var a={};a[t]=e,this.setState(a)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Multiplicaci\xf3n de 2 n\xfameros"),r.a.createElement("input",{className:S.a.input,type:"number",placeholder:"Ingres\xe1 un N\xfamero",onChange:function(t){e.syncChanges(t.target.value,"nro1")}}),r.a.createElement("span",null," x "),r.a.createElement("input",{className:S.a.input,type:"number",placeholder:"Ingres\xe1 otro N\xfamero",onChange:function(t){e.syncChanges(t.target.value,"nro2")}}),r.a.createElement("span",null," = "),r.a.createElement("input",{className:S.a.result,type:"number",readOnly:!0,value:this.state.resultado}),r.a.createElement("br",null),r.a.createElement("button",{className:S.a.btn,onClick:this.validation},"Multiplicar"))}}]),t}(n.Component),x=a(23),F=a.n(x),A=function(e){function t(){return Object(E.a)(this,t),Object(v.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("a",{href:"#explicacion"},r.a.createElement("button",{className:F.a.btn},"Ver m\xe1s")))}}]),t}(n.Component);var M=function(){var e=Object(u.d)();return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:o.a,className:"App-logo",alt:"logo"}),e&&r.a.createElement("div",null,r.a.createElement("p",null,"Hola!"),r.a.createElement("p",null,"Iniciaste sesi\xf3n con ",e.email),r.a.createElement("hr",null),r.a.createElement(O,null),r.a.createElement("hr",null),r.a.createElement(w,null),r.a.createElement("hr",null),r.a.createElement(I,null),r.a.createElement("hr",null)),r.a.createElement(b,null),r.a.createElement(A,null)),r.a.createElement("div",{id:"explicacion"},r.a.createElement("p",null,'Esta web fue creada usando Auth de Firebase. Una "calculadora" super simple que para poder ingresar deb\xe9s crearte una cuenta e iniciar sesi\xf3n.'),r.a.createElement("p",null,"Las cuentas son guardadas en la BDD de Firebase encriptadas. As\xed que tranquilo, tu contrase\xf1a est\xe1 segura."),r.a.createElement("p",null,"Todo est\xe1 estilizado con m\xf3dulos CSS, creando las clases de los elementos de forma optima."),r.a.createElement("p",null,"Para conocer m\xe1s pod\xe9s ingresar a el ",r.a.createElement("a",{href:"https://github.com/alepiumetti/calculadora-simple-react"},"repositorio")," de esta web")),r.a.createElement("div",null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(u.a,{firebaseConfig:{apiKey:"AIzaSyBwumU04QJ1s63xkg3LMJhOCBT5nxjQw3w",authDomain:"proyecto-1-a2dae.firebaseapp.com",databaseURL:"https://proyecto-1-a2dae.firebaseio.com",projectId:"proyecto-1-a2dae",storageBucket:"proyecto-1-a2dae.appspot.com",messagingSenderId:"943611128169",appId:"1:943611128169:web:b386a993ff54c5f84035f8",measurementId:"G-0EKS14SXVJ"}},r.a.createElement(n.Suspense,{fallback:"Conectando la app..."},r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[24,1,2]]]);
//# sourceMappingURL=main.0c5b0fc1.chunk.js.map