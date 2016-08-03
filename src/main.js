function generateTodoHtml(todoItems) {
  // return /**/;
  let lines = [];
  lines.push(`<section>`);
  lines.push('<header>');
  lines.push('<h1>todos</h1>');
  lines.push('<form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>');
  lines.push('</header>');
  lines.push('<section>');
  lines.push('<input type="checkbox"/>');
  lines.push('<label for="toggle-all">Mark all as complete</label>');
  lines.push('<ul>');
 for(let {name} of todoItems){
   return lines.push(`<li>`);
   lines.push(`<div><input type="checkbox" checked="checked"/><label>${name}</label></div>`);
   lines.push('<form><input type="text"/></form>');
   lines.push('</li>');
 }
  lines.push('</ul>');
  lines.push('</section>');
  lines.push('<footer>');
  for(let {completed} of todoItems){
    let count=todoItems.completed.reduce(n=>n==='false');
    return lines.push(`<strong>${count}</strong> items left`);
  }
  lines.push('<ul>');
  lines.push('<li><a href="#/">All</a></li>');
  lines.push('<li><a href="#/active">Active</a></li>');
  lines.push('<li><a href="#/completed">Completed</a></li>');
  lines.push('</ul>');
  lines.push('<button>Clear completed</button>');
  lines.push('</footer>');
  lines.push('</section>');
  let string = lines.join('\n');
  return string;
}

module.exports = {
  generateTodoHtml: generateTodoHtml
}