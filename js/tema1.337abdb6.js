(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema1"],{"02c8":function(e,a,s){"use strict";s.r(a);var t=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"curso-main-container pb-3"},[t("BannerInterno"),t("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[e._m(0),e._m(1),e._m(2),t("div",{attrs:{id:"t_1_1"}}),e._m(3),t("div",{staticClass:"row"},[e._m(4),t("div",{staticClass:"col-md-11"},[t("p",[e._v("Como se percibió en componentes anteriores, la fase de análisis trata de responder a la pregunta: "),t("b",[e._v("¿Qué es lo que se debe hacer?, ")]),t("b-none",[e._v("y esto es necesario para entender el problema. Por ello, es preciso relacionar los datos de entrada, salida o resultados con los procesos a ejecutar con esta información y los datos auxiliares que se puedan requerir en las tareas.")])],1)])]),t("div",{staticClass:"row my-5"},[t("div",{staticClass:"col-lg-7"},[t("p",[e._v("Hasta este punto parece que esas son las actividades propias del análisis, sin embargo, el éxito de un algoritmo consiste en reducir a cero la brecha de lo que el cliente necesita y los resultados que el algoritmo entrega. Para lograrlo en su totalidad, "),t("b",[e._v("es importante indagar otros aspectos que corresponden a la naturaleza del problema, ")]),t("b-none",[e._v("las siguientes preguntas modeladoras son de referencia casi obligante a tener en cuenta:")])],1)]),e._m(5)]),t("div",{attrs:{id:"t_1_2"}}),e._m(6),t("div",{staticClass:"row"},[e._m(7),t("div",{staticClass:"col-11"},[t("p",[e._v("En esta etapa se responde, básicamente, a la pregunta "),t("b",[e._v("¿Cómo se va a hacer?, ")]),t("b-none",[e._v("refiriéndose a la manera en la que el sistema va a realizar la tarea solicitada. Lo importante en este punto, es que debe quedar bien definido el problema, sin dar espacio a más de una interpretación de la acción o acciones que debe hacer el sistema.")])],1)])]),t("p",[e._v("En el proceso de desarrollo del algoritmo, las siguientes actividades son obligatorias, sobre todo si se está empezado en el diseño de soluciones basadas en algoritmos y no se cuenta con mucha experiencia:")]),e._m(8),e._m(9),t("div",{staticClass:"h5"},[e._v("1.2.1. Notación de diseño: pseudocódigo")]),e._m(10),e._m(11),e._m(12),t("TabsB",{staticClass:"my-5"},[t("div",{staticClass:"py-4 py-md-5",attrs:{titulo:"Análisis",icono:s("e4d0")}},[t("p",[t("span",{staticClass:"etiqueta--amarilla"},[t("b",[e._v("Análisis:")])]),e._v(" el dato de entrada debe ser un número ingresado por el usuario, pero antes de eso el sistema debe solicitarle al usuario que lo ingrese (digite) al programa, si no, ¿de qué otra manera el usuario sabría que el programa está esperando el ingreso de ese dato? Por lo tanto, una posible operación inicial dentro del algoritmo sería escribir en pantalla que “por favor se ingrese un número”. "),t("br"),t("br"),e._v("La segunda operación es la de recibir ese número desde el teclado, para ingresarlo al programa, pero esto implica que se debe definir un dato intermedio donde se guardará ese valor y el cual identificará el valor ingresado (a este dato se denomina variable porque puede tener cualquier valor entero según digite el usuario). Ya ocurre el primer problema: para guardar el dato (variable) se debe definir dónde se almacenará o como podría referirse al dato ingresado dentro del programa, por lo tanto, antes de empezar el algoritmo se debe indicar al computador que reserve un espacio para guardar un número entero."),t("br"),t("br"),e._v("Una vez definida la variable, es posible referirse a ella, leer desde el teclado el número entero y almacenarlo en dicha variable."),t("br"),t("br")]),t("p",[e._v("Por último, el sistema debe imprimir el contenido de la variable (dato de salida), con lo cual se puede dar final al programa.")]),t("p")]),t("div",{staticClass:"py-4 py-md-5",attrs:{titulo:"Diseño",icono:s("35d8")}},[t("p",[t("span",{staticClass:"etiqueta--amarilla"},[t("b",[e._v("Diseño:")])]),e._v(" en anterior análisis se contemplaron los datos de entrada, datos auxiliares (variable) operaciones (impresión en pantalla, lectura de datos e impresión en pantalla de resultados). Pero son muchas las palabras usadas en el análisis por lo tanto lo abreviamos con el siguiente código que, posteriormente, se explicará.")]),t("figure",{staticClass:"my-5"},[t("img",{staticClass:"m-auto",staticStyle:{width:"600px"},attrs:{src:s("e96b"),alt:"Texto que describa la imagen"}}),t("figcaption",{staticClass:"mt-3"},[e._v("Figura 2. pseudocódigo imprimir un número")])])])]),e._m(13),t("div",{staticClass:"h5"},[e._v("1.2.2. Pruebas de escritorio o trazas")]),t("div",{staticClass:"tarjeta tarjeta--gris p-4 p-md-5 mt-5"},[t("div",{staticClass:"row justify-content-around align-items-center"},[e._m(14),t("div",{staticClass:"col-md col-lg-6"},[e._m(15),t("p",{staticClass:"mb-4"},[e._v("Las pruebas de escritorio son las simulaciones de ejecución de un algoritmo que permite determinar la validez o efectividad del mismo. Se trata de escribir en una tabla con tantas columnas como variables tiene el algoritmo y seguir las instrucciones poniendo los valores correspondientes.")]),t("a",{staticClass:"boton boton--a",attrs:{href:e.obtenerLink("/downloads/Infografia_Prueba_de_Escritorio.pdf"),target:"_blank",type:"application/pdf"}},[t("span",[e._v("Descargar")]),t("i",{staticClass:"fas fa-file-download"})])])])]),e._m(16),t("TabsB",{staticClass:"my-5"},[t("div",{staticClass:"py-4 py-md-5",attrs:{titulo:"Análisis",icono:s("e4d0")}},[t("p",[t("span",{staticClass:"etiqueta--amarilla"},[t("b",[e._v("Análisis:")])]),e._v(" nuevamente el dato de entrada debe ser un número ingresado por el usuario, y al igual que en el ejemplo anterior se debe solicitar al usuario que lo digite. "),t("br"),t("br"),e._v("Antes de realizar las operaciones de elevar al cuadrado y al cubo, se necesita definir las dos variables que recibirán estos datos (el cuadrado, y el cubo), por lo tanto, el algoritmo debe definirlas antes de realizar las operaciones y asignarles a ellas los resultados."),t("br"),t("br"),e._v("Una vez realizadas las operaciones el algoritmo debe mostrar en pantalla el contenido de estas variables, con un mensaje texto que indique si es el resultado del cuadrado o del cubo.")])]),t("div",{staticClass:"py-4 py-md-5",attrs:{titulo:"Diseño",icono:s("35d8")}},[t("p",[t("span",{staticClass:"etiqueta--amarilla"},[e._v("Diseño:")]),e._v(" la siguiente figura tiene la representación del resultado al análisis anterior.")]),t("figure",{staticClass:"my-5"},[t("img",{staticClass:"m-auto",staticStyle:{width:"600px"},attrs:{src:s("9b20"),alt:"Texto que describa la imagen"}}),t("figcaption",{staticClass:"mt-3"},[e._v("Figura 3. Metodología de creación de algoritmos")])])])]),t("hr",{staticClass:"mb-5"}),t("p",[e._v("Las pruebas de escritorio permiten verificar que el pseudocódigo realice lo que se espera al resolver el problema. Sin embargo, por ahora es importante que a todos los pseudocódigos se les aplique, al menos, una de prueba de escritorio o las que se consideren necesarias. "),t("br"),t("br"),t("b",[e._v("La mayoría de las pruebas de escritorio se representan en una tabla, donde en cada columna se anotan las variables y condiciones si las hay, ")]),t("b-none",[e._v("en el orden en que aparecen en el algoritmo, ")]),t("b",[e._v("para entenderlo se tiene que recorrer línea a línea el pseudocódigo y así identificar tanto las variables como condiciones ")]),t("b-none",[e._v("e ir anotándolas en la tabla de la prueba de escritorio. ")]),t("br"),t("br"),e._v("Es importante que en la tabla no aparezcan variables o condiciones repetidas y en la última columna se pueden anotar los datos de salida para entonces también anotar "),t("b",[e._v("“Salida”.")]),t("br"),t("br"),e._v("Ejecutando línea a línea el algoritmo de la figura 3 y se va llenando la tabla como muestra la siguiente figura: ")],1),e._m(17),t("p",[e._v("También es posible realizar pruebas de escritorio a otras representaciones de algoritmos, como los diagramas de flujo, expuestos a continuación, y que se representan con algoritmos recomendando que a cada ejemplo presentado se le realice la prueba de escritorio correspondiente.")])],1)],1)},i=[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"titulo-principal"},[s("div",{staticClass:"titulo-principal__numero"},[s("div",{staticClass:"h3"},[e._v("1")])]),s("div",{staticClass:"h3"},[e._v("Metodología de algoritmos")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-4"},[t("figure",[t("img",{attrs:{src:s("10a4"),alt:"Texto que describa la imagen"}})])]),t("div",{staticClass:"col-lg-8"},[t("p",[e._v("De manera implícita, en las distintas áreas productivas de la sociedad se usan algoritmos y un par de ejemplos pueden ser que, en la construcción de una casa, el ingeniero o el arquitecto analiza el terreno, diseña unos planos, realiza maquetas y así continúan siguiendo una secuencia lógica de procesos, para la resolución del problema; o un abogado que antes de defender a un cliente analiza las pruebas, elabora un plan, practica sus argumentos y sigue un método para lograr la defensa de su cliente. Se puede concluir, entonces, que una solución a la medida de un problema requiere una metodología que lleve a la solución final."),t("br"),t("br"),t("b",[e._v("En el proceso de desarrollo de programas informáticos, aparte de conocer esta metodología, se necesita conocer las funciones que puede realizar un computador y la representación de las mismas. ")]),t("br"),t("br"),e._v("En general, existen tres (3) fases secuenciales para la elaboración de un algoritmo representadas en la siguiente figura y de las cuales se abordarán las dos primeras:")])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("figure",{staticClass:"my-5"},[t("img",{attrs:{src:s("5a1a"),alt:"Texto que describa la imagen"}}),t("figcaption",{staticClass:"mt-3"},[e._v("Figura 1. Metodología de creación de algoritmos")])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"titulo-segundo"},[s("div",{staticClass:"h4"},[e._v("1.1. Análisis")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col-md-1"},[t("figure",{staticClass:"d-none d-xl-block d-xxl-block"},[t("img",{staticStyle:{width:"80px"},attrs:{src:s("04dd"),alt:"Texto que describa la imagen"}})])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"col-lg-5"},[s("div",{staticClass:"cajon--azul p-4 mb-5 mb-lg-0"},[s("div",{staticClass:"h5 text-center"},[e._v("¿Qué es?")]),s("div",{staticClass:"h5 text-center"},[e._v("¿Quiénes intervienen?")]),s("div",{staticClass:"h5 text-center"},[e._v("¿Cómo interviene o se comporta?")]),s("div",{staticClass:"h5 text-center"},[e._v("¿Cuándo?")]),s("div",{staticClass:"h5 text-center"},[e._v("¿Cómo lo hace?")]),s("div",{staticClass:"h5 text-center"},[e._v("¿Por qué? y ")]),s("div",{staticClass:"h5 text-center"},[e._v("¿Para qué?")])])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"titulo-segundo"},[s("div",{staticClass:"h4"},[e._v("1.2. Diseño ")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col-1"},[t("figure",{staticClass:"d-none d-xl-block d-xxl-block"},[t("img",{staticStyle:{width:"80px"},attrs:{src:s("9e67"),alt:"Texto que describa la imagen"}})])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("figure",{staticClass:"my-5"},[t("img",{staticClass:"m-auto",staticStyle:{width:"496px"},attrs:{src:s("183d"),alt:"Texto que describa la imagen"}})])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("p",{staticClass:"mb-5"},[e._v("Para la verificación del algoritmo, se aplica una técnica denominada "),s("span",{staticClass:"etiqueta--morada"},[s("b",[e._v("pruebas de escritorio o trazas, que trata de la validación y verificación del algoritmo mediante la ejecución de las sentencias u operaciones que lo componen (proceso),")])]),e._v("y así determinar sus resultados de salida a partir de una base determinada de elementos en la entrada del proceso."),s("br"),s("br"),e._v("Como el resultado del proceso de diseño es un algoritmo, es obligatorio saber representarlo de alguna manera, y se empleará inicialmente con la notación de pseudocódigo para hacer este tipo de representaciones.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"row mb-3"},[t("div",{staticClass:"col-lg-4"},[t("figure",{staticClass:"mb-5"},[t("img",{attrs:{src:s("ec27"),alt:"Texto que describa la imagen"}})])]),t("div",{staticClass:"col-lg-8"},[t("p",[e._v("Para expresar el contenido de un programa de computadora, se necesita de un lenguaje de programación que las computadoras pueden interpretar. Sin embargo, se puede expresar ese mismo contenido en el lenguaje natural lengua materna (español), empleando expresiones sencillas que lo simplifican y abrevian. Cuando se emplea esta técnica, se dice que está escrito en pseudocódigo.")])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"cajon--azul p-4 mb-5 mb-lg-0 mx-5"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-1"},[t("figure",{staticClass:"d-none d-xl-block d-xxl-block"},[t("img",{staticStyle:{width:"100%"},attrs:{src:s("a711"),alt:"Texto que describa la imagen"}})])]),t("div",{staticClass:"col-11"},[t("div",{staticClass:"h5"},[e._v("Ejemplo: el cliente pide que se desarrolle un programa de computadora que le solicite al usuario un número, luego el sistema debe mostrar en pantalla el número digitado.")])])])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("p",{staticClass:"mt-5"},[s("b",[e._v("A continuación, se aplica la metodología vista:")])])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("p",{staticClass:"mb-5"},[e._v("En "),s("span",{staticClass:"etiqueta--morada"},[e._v("ALGORITMO ")]),e._v("se indica el nombre del algoritmo, y después se declaran las variables que serán usadas en él (con VAR) indicando su tipo de dato (un valor de tipo "),s("span",{staticClass:"etiqueta--morada"},[e._v("ENTERO ")]),e._v(", para este ejemplo). "),s("br"),s("br"),e._v("Entre "),s("span",{staticClass:"etiqueta--morada"},[e._v("INICIO ")]),e._v("y "),s("span",{staticClass:"etiqueta--morada"},[e._v("FIN ")]),e._v("se escriben las diferentes acciones que realizará el algoritmo y usamos "),s("span",{staticClass:"etiqueta--morada"},[e._v("ESCRIBIR()")]),e._v("para indicar con esta palabra que se mostrará un mensaje por pantalla (el texto que se va a mostrar 'tal cual' debe ir entre paréntesis dobles), "),s("span",{staticClass:"etiqueta--morada"},[e._v("y LEER() ")]),e._v("para recibir el dato desde el teclado."),s("br"),s("br"),e._v("Se debe tener en cuenta que cada línea termina en punto y coma (excepto "),s("span",{staticClass:"etiqueta--morada"},[e._v("INICIO ")]),e._v("y "),s("span",{staticClass:"etiqueta--morada"},[e._v("FIN ")]),e._v("), el punto y coma indica que lo que se ejecuta es una sentencia que hace una única operación, mientras que lo que está entre "),s("span",{staticClass:"etiqueta--morada"},[e._v("INICIO ")]),e._v("y "),s("span",{staticClass:"etiqueta--morada"},[e._v("FIN ")]),e._v("agrupa varias sentencias que se ejecutan en un orden determinado.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col-8 col-sm-6 col-md-4 mb-4 mb-md-0"},[t("img",{attrs:{src:s("3a4e")}})])},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"titulo-segundo"},[s("div",{staticClass:"h2"},[e._v("Pruebas de escritorio o trazas")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"cajon--azul p-4 mb-5 mb-lg-0 mx-5 mt-5"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-1"},[t("figure",{staticClass:"d-none d-xl-block d-xxl-block"},[t("img",{staticStyle:{width:"100%"},attrs:{src:s("a711"),alt:"Texto que describa la imagen"}})])]),t("div",{staticClass:"col-11"},[t("div",{staticClass:"h5"},[e._v("Ejemplo: escribir un algoritmo que calcule el cuadrado y el cubo de un número introducido por teclado y mostrar los resultados para el cubo y el cuadrado.")])])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("figure",{staticClass:"my-5"},[t("img",{staticClass:"m-auto",staticStyle:{width:"100%"},attrs:{src:s("4898"),alt:"Texto que describa la imagen"}}),t("figcaption",{staticClass:"mt-3"},[e._v("Figura 4- Tablas de traza del algoritmo")])])}],r={name:"Tema1",data:function(){return{}}},o=r,n=s("2877"),l=Object(n["a"])(o,t,i,!1,null,"1cc26ca2",null);a["default"]=l.exports},"04dd":function(e,a,s){e.exports=s.p+"img/img3.8613eaf7.svg"},"10a4":function(e,a,s){e.exports=s.p+"img/img1.ba4ee98a.jpg"},"183d":function(e,a,s){e.exports=s.p+"img/img5.fda6d004.svg"},"35d8":function(e,a,s){e.exports=s.p+"img/img8.b4b8bd20.svg"},"3a4e":function(e,a,s){e.exports=s.p+"img/ej-01.26a22b82.png"},4898:function(e,a,s){e.exports=s.p+"img/img12.31584611.svg"},"5a1a":function(e,a,s){e.exports=s.p+"img/img2.d88adbe9.svg"},"9b20":function(e,a,s){e.exports=s.p+"img/img11.2e508044.png"},"9e67":function(e,a,s){e.exports=s.p+"img/img4.4656676f.svg"},a711:function(e,a,s){e.exports=s.p+"img/img30.bb852190.svg"},e4d0:function(e,a,s){e.exports=s.p+"img/img7.aaa82a6e.svg"},e96b:function(e,a,s){e.exports=s.p+"img/img9.d03db886.png"},ec27:function(e,a,s){e.exports=s.p+"img/img6.3d5b2647.jpg"}}]);
//# sourceMappingURL=tema1.337abdb6.js.map