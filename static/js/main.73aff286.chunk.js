(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=(a(16),a(2)),C=a(6),o=a(3),s=a(1);function d(e){var t=e.addTask,a=Object(n.useState)(""),r=Object(o.a)(a,2),c=r[0],i=r[1];return Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(c),i("")},children:[Object(s.jsx)("input",{className:"text",value:c,type:"text",onChange:function(e){i(e.target.value)},placeholder:"Wert eingeben"}),Object(s.jsx)("button",{children:"Add"})]})}function u(e){var t=e.addText,a=e.itemId,r=e.value,c=Object(n.useState)(r||" "),i=Object(o.a)(c,2),l=i[0],C=i[1];Object(n.useEffect)((function(){t(l,a)}),[l]);return Object(s.jsx)("textarea",{className:"textArea",type:"textarea",name:"textValue",value:l,onChange:function(e){C(e.target.value)}})}var f,j,p=a(8),L=["title","titleId"];function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function m(e,t){var a=e.title,r=e.titleId,c=b(e,L);return n.createElement("svg",h({width:112,height:112,viewBox:"0 0 112 112",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,f||(f=n.createElement("g",{clipPath:"url(#clip0)"},n.createElement("path",{d:"M38.2987 37.1613C38.2987 37.1613 37.2466 36.877 39.025 36.8966L40.4425 36.7785L41.4837 36.4941L42.5228 36.5795C42.5228 36.5795 42.8203 37.3276 43.4131 45.6182C43.815 48.1951 44.0118 50.7999 44.0016 53.4079C44.0016 53.4079 43.6953 85.8485 43.0741 88.281C43.0741 88.281 43.9644 67.9373 43.6822 66.6576C43.6822 66.6576 42.9494 86.1088 42.3872 87.6073C42.3872 87.6073 43.2228 68.7335 42.5009 67.0448C42.5009 67.0448 41.7287 84.4113 41.0091 86.5135C41.0091 86.5135 41.2956 83.182 41.2081 82.2938L40.9894 83.847L41.02 81.3445L41.1884 79.8985C41.1884 79.8985 40.6919 83.8163 40.4381 84.0876C40.4381 84.0876 40.7444 85.8726 40.6284 78.807C40.6306 78.8201 42.3762 62.1076 38.2987 37.1613Z",fill:"white"}),n.createElement("path",{d:"M95.1563 8.91633C95.1563 8.91633 94.0625 8.78289 95.9066 8.79164L97.3788 8.73695L98.4616 8.60352L99.54 8.6407C99.54 8.6407 99.8484 8.99508 100.465 12.8779C100.877 14.0517 101.085 15.2872 101.08 16.531C101.08 16.531 100.763 31.7341 100.111 32.8738C100.111 32.8738 101.038 23.3385 100.743 22.737C100.743 22.737 99.9819 31.8566 99.3956 32.5566C99.3956 32.5566 100.271 23.7126 99.5159 22.9316C99.5159 22.9316 98.7131 31.0691 97.9628 32.0557C97.9628 32.0557 98.2647 30.4916 98.1816 30.0738L97.9628 30.8023L97.9912 29.632L98.1684 28.9538C98.1684 28.9538 97.65 30.787 97.3875 30.9226C97.3875 30.9226 97.7047 31.7626 97.5866 28.4485C97.58 28.4376 99.3913 20.6107 95.1563 8.91633Z",fill:"white"}),n.createElement("path",{d:"M15.8069 10.7953C15.8069 10.7953 16.8634 10.6663 15.085 10.6728L13.6631 10.6203L12.6262 10.5L11.5937 10.5328C11.5937 10.5328 11.2984 10.8675 10.7056 14.6081C10.3108 15.7371 10.1118 16.9252 10.1172 18.1212C10.1172 18.1212 10.4191 32.7534 11.0447 33.8537C11.0447 33.8537 10.1544 24.6663 10.4366 24.0975C10.4366 24.0975 11.1694 32.8716 11.7316 33.5497C11.7316 33.5497 10.8959 25.0381 11.6134 24.2791C11.6134 24.2791 12.3856 32.1147 13.1075 33.0641C13.1075 33.0641 12.8209 31.5591 12.9084 31.1566L13.1272 31.8587L13.0987 30.7278L12.9303 30.0716C12.9303 30.0716 13.4269 31.8391 13.6784 31.9594C13.6784 31.9594 13.3766 32.7666 13.4903 29.5772C13.4816 29.5838 11.7359 22.05 15.8069 10.7953Z",fill:"white"}),n.createElement("path",{d:"M53.34 37.1613C53.34 37.1613 52.2878 36.877 54.0619 36.8966L55.4838 36.7785L56.525 36.4941L57.5641 36.5795C57.5641 36.5795 57.8594 37.3276 58.4522 45.6182C58.8568 48.1949 59.055 50.7997 59.045 53.4079C59.045 53.4079 58.7366 85.8485 58.1131 88.281C58.1131 88.281 59.0034 67.9373 58.7213 66.6576C58.7213 66.6576 57.9928 86.1088 57.4263 87.6073C57.4263 87.6073 58.2663 68.7335 57.54 67.0448C57.54 67.0448 56.77 84.4113 56.0481 86.5135C56.0481 86.5135 56.3391 83.182 56.2472 82.2938L56.0284 83.847L56.0613 81.3445L56.2275 79.8985C56.2275 79.8985 55.7309 83.8163 55.4794 84.0876C55.4794 84.0876 55.7813 85.8726 55.6675 78.807C55.6675 78.8201 57.4109 62.1076 53.34 37.1613Z",fill:"white"}),n.createElement("path",{d:"M69.0637 37.1613C69.0637 37.1613 68.0028 36.877 69.7812 36.8966L71.2053 36.7785L72.2444 36.4941L73.2834 36.5795C73.2834 36.5795 73.5787 37.3276 74.1716 45.6182C74.5762 48.1949 74.7744 50.7997 74.7644 53.4079C74.7644 53.4079 74.4581 85.8485 73.8369 88.281C73.8369 88.281 74.7272 67.9373 74.445 66.6576C74.445 66.6576 73.7166 86.1088 73.1456 87.6073C73.1456 87.6073 73.9856 68.7335 73.2637 67.0448C73.2637 67.0448 72.4916 84.4113 71.7697 86.5135C71.7697 86.5135 72.065 83.182 71.9731 82.2938L71.7544 83.847L71.7828 81.3445L71.9491 79.8985C71.9491 79.8985 71.4547 83.8163 71.2053 84.0876C71.2053 84.0876 71.5028 85.8726 71.3934 78.807C71.3912 78.8201 73.1325 62.1076 69.0637 37.1613Z",fill:"white"}),n.createElement("path",{d:"M13.2387 34.2212C13.2387 34.2212 12.7487 35.6562 12.7816 33.2499L12.5781 31.3206L12.0837 29.9074L12.2303 28.5118C12.2303 28.5118 13.5253 28.1071 27.8994 27.3043C32.3808 26.7554 36.8922 26.4873 41.4072 26.5015C41.4072 26.5015 97.6565 26.9128 101.887 27.7615C101.887 27.7615 66.6115 26.554 64.3912 26.9412C64.3912 26.9412 98.1203 27.9278 100.704 28.6912C100.704 28.6912 67.9809 27.5581 65.0672 28.5359C65.0672 28.5359 95.1891 29.5771 98.8291 30.5528C98.8291 30.5528 93.0497 30.1634 91.5097 30.2881L94.2047 30.579L89.8603 30.5375L87.3644 30.3187C87.3644 30.3187 94.1456 30.9924 94.6247 31.3315C94.6247 31.3315 97.7178 30.9224 85.4656 31.0734C85.4787 31.0624 56.5031 28.7065 13.2387 34.2212Z",fill:"white"}),n.createElement("path",{d:"M22.5706 111.379C22.5706 111.379 22.1462 113.488 22.1769 109.939L22.0041 107.096L21.5797 105.011L21.7044 102.942C21.7044 102.942 22.8156 102.349 35.2056 101.168C35.2056 101.168 40.1581 99.9819 46.8431 99.9819C46.8431 99.9819 95.3137 100.592 98.9559 101.846C98.9559 101.846 68.5672 100.061 66.6509 100.632C66.6509 100.632 95.7119 102.088 97.9453 103.219C97.9453 103.219 69.7528 101.548 67.2437 103.001C67.2437 103.001 93.1919 104.532 96.3375 105.982C96.3375 105.982 91.3566 105.405 90.0266 105.582L92.3497 106.019L88.6091 105.956L86.4522 105.628C86.4522 105.628 92.3016 106.61 92.7084 107.12C92.7084 107.12 95.3772 106.512 84.8225 106.741C84.8181 106.728 59.8522 103.25 22.5706 111.379Z",fill:"white"}),n.createElement("path",{d:"M13.3044 20.0175C13.3044 20.0175 12.81 22.4632 12.845 18.3507L12.6503 15.0694L12.1559 12.6632L12.3003 10.2569C12.3003 10.2569 13.5931 9.56566 27.9453 8.19848C27.9453 8.19848 33.6853 6.8291 41.44 6.8291C41.44 6.8291 97.6084 7.53129 101.815 8.98379C101.815 8.98379 66.5962 6.91441 64.3781 7.57066C64.3781 7.57066 98.0656 9.26379 100.645 10.5741C100.645 10.5741 67.9766 8.63816 65.0672 10.3094C65.0672 10.3094 95.1409 12.0944 98.7766 13.7591C98.7766 13.7591 93.0081 13.1028 91.4637 13.2997L94.1544 13.805L89.8209 13.7307L87.3294 13.3435C87.3294 13.3435 94.1106 14.4875 94.5787 15.0694C94.5787 15.0694 97.6675 14.3738 85.4372 14.6319C85.4372 14.6275 56.5053 10.5894 13.3044 20.0175Z",fill:"white"}),n.createElement("path",{d:"M49.315 11.5015C49.315 11.5015 50.0478 11.5606 48.8141 11.5562L47.8231 11.5825L47.1013 11.6415L46.3859 11.624C46.3859 11.624 46.1672 11.4687 45.7669 9.73186C45.4981 9.22758 45.3576 8.66486 45.3578 8.09342C45.3578 8.09342 45.5766 1.31217 46.0009 0.800293C46.0009 0.800293 45.3819 5.05279 45.5766 5.32186C45.5766 5.32186 46.0884 1.25311 46.4778 0.946855C46.4778 0.946855 45.8959 4.88436 46.3969 5.24311C46.3969 5.24311 46.935 1.60967 47.4316 1.17217C47.4316 1.17217 47.2369 1.86779 47.2959 2.04717L47.4469 1.72342L47.425 2.24623L47.3113 2.54811C47.3113 2.54811 47.6525 1.72998 47.8275 1.67311C47.8275 1.67311 47.6088 1.29686 47.6984 2.76686C47.6984 2.78654 46.4888 6.27998 49.315 11.5015Z",fill:"white"}),n.createElement("path",{d:"M47.6416 4.21539C47.6416 4.21539 47.5431 4.99633 47.5497 3.68164L47.5059 2.62946L47.4097 1.85946L47.4359 1.09383C47.4359 1.09383 47.6984 0.875081 50.6056 0.437581C51.4849 0.143826 52.4064 -0.00396235 53.3334 8.07613e-05C53.3334 8.07613e-05 64.7084 0.218831 65.5572 0.684768C65.5572 0.684768 58.4281 0.0285183 57.9797 0.236331C57.9797 0.236331 64.7981 0.781018 65.3209 1.19446C65.3209 1.19446 58.7081 0.575393 58.1197 1.11352C58.1197 1.11352 64.2097 1.68446 64.9425 2.20727C64.9425 2.20727 63.7744 1.98852 63.4616 2.06289L64.0062 2.21821L63.1312 2.20071L62.6237 2.07602C62.6237 2.07602 63.9953 2.44571 64.0937 2.62508C64.0937 2.62508 64.715 2.40633 62.2409 2.48508C62.2431 2.49164 56.385 1.20102 47.6416 4.21539Z",fill:"white"}),n.createElement("path",{d:"M66.5 10.7537C66.5 10.7537 67.2328 10.7975 66.0034 10.7953L65.0169 10.8106L64.2906 10.8544L63.5688 10.8391C63.5688 10.8391 63.3653 10.7319 62.9541 9.49156C62.6981 9.15651 62.5542 8.74931 62.5428 8.32781C62.5428 8.32781 62.7616 3.4825 63.1991 3.11719C63.1991 3.11719 62.58 6.15563 62.7747 6.34594C62.7747 6.34594 63.2822 3.43656 63.6737 3.21562C63.6737 3.21562 63.0919 6.03531 63.5972 6.27813C63.5972 6.27813 64.1353 3.68156 64.6319 3.36875C64.6319 3.36875 64.4328 3.86531 64.4919 3.99875L64.6472 3.76687L64.61 4.15625L64.4963 4.375C64.4963 4.375 64.8375 3.78875 65.0147 3.74937C65.0147 3.74937 64.7959 3.48469 64.8813 4.54125C64.8834 4.5325 63.6738 7.02406 66.5 10.7537Z",fill:"white"}),n.createElement("path",{d:"M28.3478 103.731C21.0066 61.4906 23.7541 32.6878 23.9728 30.5703H21.7087C21.0066 40.1581 20.4859 51.1328 20.4859 51.1328C19.7706 49.5797 19.8669 39.6463 20.1206 30.5703H19.2981C19.1778 32.725 19.0553 34.9191 18.9481 37.0541L19.5366 97.825C20.1403 104.018 20.4378 104.751 20.4378 104.751L22.3825 104.895L24.3381 104.398L27.0003 104.195C30.3297 104.223 28.3478 103.731 28.3478 103.731Z",fill:"white"}),n.createElement("path",{d:"M17.1916 70.2031C17.1916 70.2316 17.1916 70.2622 17.1916 70.295C17.1916 70.1397 17.1916 69.9778 17.1916 69.8247C17.1959 70.0631 17.1916 70.2031 17.1916 70.2031Z",fill:"white"}),n.createElement("path",{d:"M88.4538 72.4431C88.4538 80.3181 89.5628 86.1544 89.5628 86.1544C90.6741 100.738 91.2297 102.049 91.2297 102.049L93.17 102.195L93.7103 102.055C93.0213 96.1644 91.6453 83.4113 91.7175 76.5819C91.7175 76.5819 91.4988 53.8625 91.8269 50.8394L93.9509 101.994L95.1256 101.699L97.7812 101.5C101.106 101.528 99.1244 101.032 99.1244 101.032C92.9819 65.6247 93.9159 39.6678 94.5 30.9419H92.2819C91.6891 39.6525 91.2778 48.4222 91.2778 48.4222C90.6412 47.0419 90.6478 39.0553 90.8403 30.9419H89.9063C89.4097 40.0835 89.0488 49.1222 89.0488 49.1222C88.7994 48.0613 89.0334 39.6088 89.3572 30.9419H89.1625",fill:"white"}),n.createElement("path",{d:"M91.8291 50.8374C91.5053 53.8605 91.7197 76.5799 91.7197 76.5799C91.6453 83.4093 93.0322 96.1624 93.7125 102.053C93.9312 103.989 94.0887 105.186 94.0887 105.186L93.9553 101.99",fill:"white"}),n.createElement("path",{d:"M63.5578 2.05811H47.2981V7.80904H63.5578V2.05811Z",fill:"white"}))),j||(j=n.createElement("defs",null,n.createElement("clipPath",{id:"clip0"},n.createElement("rect",{width:112,height:112,fill:"white"})))))}var O=n.forwardRef(m);a.p;var x=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("items"))||[]),t=Object(o.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){localStorage.setItem("items",JSON.stringify(a))}),[a]);var c=function(e,t){e&&r(Object(C.a)(a.map((function(a){return a.id===t?Object(l.a)(Object(l.a)({},a),{},{textValue:e}):Object(l.a)({},a)}))))};return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("header",{children:Object(s.jsxs)("div",{className:"title",children:[" ToDo List: ",a.length," "]})}),Object(s.jsx)(d,{addTask:function(e){if(e){var t={id:Math.random().toString(36).substr(2,9),task:e,complete:!1,textValue:""};r([].concat(Object(C.a)(a),[t]))}}}),Object(s.jsx)(p.a,{onBeforeCapture:function(){},onBeforeDragStart:function(){},onDragStart:function(){},onDragUpdate:function(){},onDragEnd:function(e){if(console.log(e),e.destination&&e.destination.index!==e.source.index){var t=Array.from(a),n=t.splice(e.source.index,1),c=Object(o.a)(n,1)[0];t.splice(e.destination.index,0,c),r(t)}},children:Object(s.jsx)(p.c,{droppableId:"droppable",children:function(e){return Object(s.jsxs)("div",Object(l.a)(Object(l.a)({className:"wrapper"},e.droppableProps),{},{ref:e.innerRef,children:[a.map((function(e,t){return Object(s.jsx)(p.b,{draggableId:e.id,index:t,children:function(n){return Object(s.jsxs)("div",Object(l.a)(Object(l.a)(Object(l.a)({className:"item-wrapper"},n.draggableProps),n.dragHandleProps),{},{ref:n.innerRef,children:[Object(s.jsxs)("div",{className:"item-todo",children:[Object(s.jsxs)("label",{className:"container",children:[Object(s.jsx)("input",{onClick:function(){return t=e.id,void r(Object(C.a)(a.map((function(e){return e.id===t?Object(l.a)(Object(l.a)({},e),{},{complete:!e.complete}):Object(l.a)({},e)}))));var t},type:"checkbox"}),Object(s.jsx)("span",{className:"checkmark"})]}),Object(s.jsxs)("div",{className:"item-todo-inner",children:[Object(s.jsxs)("div",{className:e.complete?"item-text strike":"item-text",children:[t,". ",e.task]}),Object(s.jsx)("div",{className:"item-delete",onClick:function(){return function(e){var t=Object(C.a)(a).filter((function(t){return t.id!==e}));r(t)}(e.id)},children:Object(s.jsx)(O,{})})]})]}),Object(s.jsx)(u,{addText:c,itemId:e.id,value:e.textValue})]}))}},e.id)})),e.placeholder]}))}})})]})};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.73aff286.chunk.js.map