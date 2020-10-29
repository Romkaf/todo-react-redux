(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={item:"Todo-item_item__1ZlDl",item__delete:"Todo-item_item__delete__1rd50",item_completed:"Todo-item_item_completed__uK0Zn",item__task:"Todo-item_item__task__1jFce",item_editing:"Todo-item_item_editing__3v0xt",item__choice:"Todo-item_item__choice__2tvre"}},,,,,function(e,t,n){e.exports={header__title:"Header_header__title__2hFUs",header__choiceAll:"Header_header__choiceAll__1fHHi",header__choiceAll_selected:"Header_header__choiceAll_selected__2ogM0",header__input:"Header_header__input__ep3tJ"}},,,function(e,t,n){e.exports={filter:"Filter_filter__3RCIX",filter__btn:"Filter_filter__btn__A1KCQ",filter__btn_active:"Filter_filter__btn_active__2BM0M"}},,,,,,function(e,t,n){e.exports={counter:"Counter_counter__3RupU"}},function(e,t,n){e.exports={btn:"Btn-clear-completed_btn__3vz4X"}},function(e,t,n){e.exports={footer:"Footer_footer__7dIj9"}},function(e,t,n){e.exports={app:"App_app__3BT4Y"}},,function(e,t,n){e.exports=n(37)},,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),l=n.n(r),i=n(3),c=n(12),d=n(4),u=n(23),s="ADD_TODO",p="DELETE_TODO",m="SELECT_TODO",_="EDIT_TODO",f="SELECT_ALL_TODO",h="DELETE_COMPLETED_TODO",v="FILTER_CHANGE",y="ALL_COMPLETED_CHANGE",E=function(e,t){if(void 0===e)return[];var n,a=e.todosArray,o=e.allCompleted,r=0===a.length?1:a[a.length-1].id+1;switch(t.type){case s:return[].concat(Object(u.a)(a),[(n=t.payload,{title:n,id:r++,completed:!1})]);case p:return a.filter((function(e){return!(e.id===t.payload)}));case m:return a.map((function(e){return e.id===t.payload?Object(d.a)(Object(d.a)({},e),{},{completed:!e.completed}):e}));case _:var l=t.payload,i=l.idx,c=l.text;return a.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{title:e.id===i?c:e.title})}));case f:return a.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{completed:!o})}));case h:return a.filter((function(e){return!e.completed}));default:return a}},b=function(e,t){if(void 0===e)return"all";switch(t.type){case v:return t.payload;default:return e.filter}},T=function(e,t){if(void 0===e)return!1;var n=e.todosArray,a=e.allCompleted;switch(t.type){case y:return n.every((function(e){return e.completed}));case s:return!1;case f:return!a;case h:return!1;default:return a}},g=function(e,t){return{todosArray:E(e,t),filter:b(e,t),allCompleted:T(e,t)}},C=13,O=27,A=localStorage.getItem("todo-redux-state")?JSON.parse(localStorage.getItem("todo-redux-state")):void 0,j=Object(c.b)(g,A),k=(n(35),n(36),n(2)),D=n(6),N=n(7),I=n(9),x=n(8),S=n(10),w=n.n(S),F=n(1),L=n.n(F),B=function(e){Object(I.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(D.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={value:""},e.handleValidateValue=function(t){var n=t.target.value.trim().replace(/\s+/g," ");n&&e.props.addTodo(n),e.setState({value:""})},e.handleInputBlur=function(t){"blur"===t.type&&e.handleValidateValue(t)},e.handleInputEnter=function(t){t.keyCode===C&&e.handleValidateValue(t)},e.handleInputChange=function(t){return e.setState({value:t.target.value})},e}return Object(N.a)(n,[{key:"render",value:function(){var e=w.a.header,t=w.a.header__title,n=w.a.header__choiceAll,a=w.a.header__choiceAll_selected,r=w.a.header__input,l=this.props,i=l.todosArray,c=l.selectAllTodo,d=L()(n,Object(k.a)({hidden:!i.length},a,i.every((function(e){return e.completed}))));return o.a.createElement("header",{className:e},o.a.createElement("h1",{className:t},"ToDo"),o.a.createElement("span",{className:d,onClick:c},"\u2039"),o.a.createElement("input",{className:r,type:"text",placeholder:"\u0427\u0442\u043e \u043d\u0430\u0434\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c?",onChange:this.handleInputChange,value:this.state.value,onBlur:this.handleInputBlur,onKeyDown:this.handleInputEnter}))}}]),n}(a.Component),H={addTodo:function(e){return{type:s,payload:e}},selectAllTodo:function(){return{type:f}}},K=Object(i.b)((function(e){return{todosArray:e.todosArray}}),H)(B),V=n(5),J=n.n(V),M=function(e){Object(I.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(D.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={visibilityElement:"visible",isEditing:!1,value:""},e.handleTaskDblClick=function(t){e.setState({visibilityElement:"hidden",isEditing:!0,value:t.target.textContent})},e.handleTodoEditingComplete=function(t){var n=t.target,a=t.keyCode===O?e.props.title:n.value.trim().replace(/\s+/g," ");a?e.props.onTodoEdit(a):e.props.onTodoDelete(),e.setState({visibilityElement:"visible",isEditing:!1})},e.handleInputBlur=function(t){"blur"===t.type&&e.handleTodoEditingComplete(t)},e.handleInputKeyDown=function(t){t.keyCode!==C&&t.keyCode!==O||e.handleTodoEditingComplete(t)},e.handleInputChange=function(t){e.setState({value:t.target.value})},e}return Object(N.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.completed!==e.completed||this.state.isEditing!==t.isEditing||this.state.value!==t.value}},{key:"componentDidUpdate",value:function(e){e.completed!==this.props.completed&&this.props.onAllCompletedChange()}},{key:"render",value:function(){var e,t=this.props,n=t.title,a=t.completed,r=t.onTodoSelect,l=t.onTodoDelete,i=this.state,c=i.visibilityElement,d=i.isEditing,u=i.value,s=J.a.item,p=J.a.item_completed,m=J.a.item_editing,_=J.a.item__choice,f=J.a.item__task,h=J.a.item__delete,v=L()(s,(e={},Object(k.a)(e,p,a),Object(k.a)(e,m,d),e)),y={hidden:"hidden"===c},E=L()(_,y),b=L()(h,y),T=L()(y);return o.a.createElement("div",{className:v},o.a.createElement("input",{className:E,type:"checkbox",onClick:r,checked:a,readOnly:!0}),o.a.createElement("label",{className:T},"\u2713"),d?o.a.createElement("input",{className:f,onKeyDown:this.handleInputKeyDown,onBlur:this.handleInputBlur,value:u,onChange:this.handleInputChange,autoFocus:!0}):o.a.createElement("span",{className:f,onDoubleClick:this.handleTaskDblClick},n),o.a.createElement("button",{className:b,onClick:l},o.a.createElement("span",{role:"img","aria-label":"cross"},"\u274c")))}}]),n}(a.Component),U={deleteTodo:function(e){return{type:p,payload:e}},selectTodo:function(e){return{type:m,payload:e}},editTodo:function(e,t){return{type:_,payload:{idx:e,text:t}}},changeAllCompleted:function(){return{type:y}}},R=Object(i.b)((function(e){return{todosArray:e.todosArray,filter:e.filter}}),U)((function(e){var t=e.todosArray,n=e.filter,a=e.selectTodo,r=e.deleteTodo,l=e.editTodo,i=e.changeAllCompleted,c=function(e,t){switch(t){case"all":return e;case"active":return e.filter((function(e){return!e.completed}));case"completed":return e.filter((function(e){return e.completed}));default:return e}}(t,n).map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(M,{title:e.title,completed:e.completed,onTodoSelect:function(){return a(e.id)},onTodoDelete:function(){return r(e.id)},onTodoEdit:function(t){return l(e.id,t)},onAllCompletedChange:i}))}));return o.a.createElement("ul",{className:"todo-list"},c)})),G=n(19),P=n.n(G),X=Object(a.memo)((function(e){var t=e.activeTodosAmount;return o.a.createElement("span",{className:P.a.counter},"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0434\u0430\u043d\u0438\u0439:",o.a.createElement("b",null,t))})),Z=n(13),z=n.n(Z),Q=Object(a.memo)((function(e){var t=e.onFilterChange,n=e.filter,a=z.a.filter,r=z.a.filter__btn,l=z.a.filter__btn_active,i=function(e){t(e.target.dataset.filter)},c=[{title:"\u0412\u0441\u0435",filter:"all"},{title:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435",filter:"active"},{title:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435",filter:"completed"}].map((function(e){var t=L()(r,Object(k.a)({},l,e.filter===n));return o.a.createElement("button",{className:t,type:"button",key:e.filter,"data-filter":e.filter,onClick:i},e.title)}));return o.a.createElement("div",{className:a},c)})),Y=n(20),q=n.n(Y),W=function(e){Object(I.a)(n,e);var t=Object(x.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(N.a)(n,[{key:"shouldComponentUpdate",value:function(e){return 0===this.props.completedTodosAmount&&e.completedTodosAmount>0||this.props.completedTodosAmount>0&&0===e.completedTodosAmount}},{key:"render",value:function(){var e=this.props,t=e.completedTodosAmount,n=e.onCompletedDelete,a=L()(q.a.btn,{hidden:0===t});return o.a.createElement("button",{className:a,onClick:n},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435")}}]),n}(a.Component),$=n(21),ee=n.n($),te={deleteComoletedTodo:function(){return{type:h}},changeFilter:function(e){return{type:v,payload:e}}},ne=Object(i.b)((function(e){return{todosArray:e.todosArray,filter:e.filter}}),te)((function(e){var t=e.todosArray,n=e.deleteComoletedTodo,a=e.changeFilter,r=e.filter,l=t.filter((function(e){return!1===e.completed})).length,i=t.length-l;return 0===t.length?null:o.a.createElement("footer",{className:ee.a.footer},o.a.createElement(X,{activeTodosAmount:l}),o.a.createElement(Q,{onFilterChange:a,filter:r}),o.a.createElement(W,{completedTodosAmount:i,onCompletedDelete:n}))})),ae=n(22),oe=n.n(ae),re=function(){return o.a.createElement("div",{className:oe.a.app},o.a.createElement(K,null),o.a.createElement("main",null,o.a.createElement(R,null)),o.a.createElement(ne,null))};j.subscribe((function(){localStorage.setItem("todo-redux-state",JSON.stringify(j.getState()))})),l.a.render(o.a.createElement(i.a,{store:j},o.a.createElement(re,null)),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.51be0606.chunk.js.map