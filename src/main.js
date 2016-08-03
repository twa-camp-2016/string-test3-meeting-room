"use strict";
function generateTodoHtml(todoItems) {
  let todoList = todoItems.map(({name,completed})=>{
    if(completed){
      return {name, checkString: ` checked="checked"`};
    }else {
      return {name,checkString:""};
    }

  })
  let lines = ['<section>'];
  lines.push('    <header>');
  lines.push('        <h1>todos</h1>');
  lines.push('        <form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>');
  lines.push('    </header>');
  lines.push('    <section>');
  lines.push('        <input type="checkbox"/>');
  lines.push('        <label for="toggle-all">Mark all as complete</label>');
  lines.push('        <ul>');
  for(let {name,checkString} of todoList){
    lines.push('            <li>');
    lines.push(`                <div><input type="checkbox"${checkString}/><label>${name}</label></div>`)
    lines.push('                <form><input type="text"/></form>');
    lines.push('            </li>');
  }

  lines.push('        </ul>');
  lines.push('    </section>');
  lines.push('    <footer>');
  lines.push('        <strong>2</strong> items left');
  lines.push('        <ul>');
  lines.push('            <li><a href="#/">All</a></li>');
  lines.push('            <li><a href="#/active">Active</a></li>');
  lines.push('            <li><a href="#/completed">Completed</a></li>');
  lines.push('        </ul>');
  lines.push('        <button>Clear completed</button>');
  lines.push('    </footer>');
  lines.push('</section>');
  return lines.join("\n");
}

module.exports = {
  generateTodoHtml: generateTodoHtml
}