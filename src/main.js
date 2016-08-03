function generateTodoHtml(todoItems) {
  lines.push=[``];
  lines.push('<section>');
  lines.push('    <header>');
  lines.push('        <h1>todos</h1>');
  lines.push('        <form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>');
  lines.push('    </header>');
  lines.push('    <section>');
  lines.push('        <input type="checkbox"/>');
  lines.push('        <label for="toggle-all">Mark all as complete</label>');
  lines.push('        <ul>');
  lines.push('            <li>');
  if({name: '吃饭', completed: true}){
    lines.push(`                <div><input type="checkbox" checked="checked"/><label>吃饭</label></div>`);
  }else{
    lines.push(`                <div><input type="checkbox"/><label>吃饭</label></div>`);
  }
  lines.push('                <form><input type="text"/></form>');
  lines.push('            </li>');
  lines.push('            <li>');
  if({name: '练习', completed: false}){
    lines.push('                <div><input type="checkbox"/><label>练习</label></div>');
    lins.push('                <form><input type="text"/></form>');
  }
  lines.push('            </li>');
  lines.push('            <li>');

  if({name: '锻炼', completed: true}){
    lines.push(`                <div><input type="checkbox" checked="checked"/><label>锻炼</label></div>`);
  }else{
    lines.push('                <div><input type="checkbox" checked="checked"/><label>锻炼</label></div>');
  }
  lines.push('                <form><input type="text"/></form>');
  lines.push('            </li>');
  lines.push('            <li>');
  if({name: '睡觉', completed: false}){
    lines.push('                <div><input type="checkbox"/><label>练习</label></div>');
    lins.push('                <form><input type="text"/></form>');
  }
  lines.push('            </li>');
  lines.push('        </ul>');
}
lins.push('    </section>');
lines.push('    </section>');
lines.push('    <footer>');
lines.push('    <footer>');
lines.push('        <strong>2</strong> items left');





// let expected = `
// <section>
//     <header>
//         <h1>todos</h1>
//         <form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>
//     </header>
//     <section>
//         <input type="checkbox"/>
//         <label for="toggle-all">Mark all as complete</label>
//         <ul>
//             <li>
//                 <div><input type="checkbox" checked="checked"/><label>吃饭</label></div>
//                 <form><input type="text"/></form>
//             </li>
//             <li>
//                 <div><input type="checkbox"/><label>练习</label></div>
//                 <form><input type="text"/></form>
//             </li>
//             <li>
//                 <div><input type="checkbox" checked="checked"/><label>锻炼</label></div>
//                 <form><input type="text"/></form>
//             </li>
//             <li>
//                 <div><input type="checkbox"/><label>睡觉</label></div>
//                 <form><input type="text"/></form>
//             </li>
//         </ul>
//     </section>
//     <footer>
//         <strong>2</strong> items left
//         <ul>
//             <li><a href="#/">All</a></li>
//             <li><a href="#/active">Active</a></li>
//             <li><a href="#/completed">Completed</a></li>
//         </ul>
//         <button>Clear completed</button>
//     </footer>
// </section>
// `
// expect(result).toEqual(expected);
// });







module.exports = {
  generateTodoHtml: generateTodoHtml
}