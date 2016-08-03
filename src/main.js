function generateTodoHtml(todoItems) {
let lines = [`\n`];
  lines.push(`<section>`);
  lines.push(`<header>`);
  lines.push(`<h1>todos</h1>`);
  lines.push(`<form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>`);
  lines.push(`/<header>`);
  lines.push(`<section>
        <input type="checkbox"/>
        <label for="toggle-all">Mark all as complete</label>
        <ul>
            <li>
                <div><input type="checkbox" checked="checked"/><label>吃饭</label></div>
                <form><input type="text"/></form>
            </li>
            <li>
                <div><input type="checkbox"/><label>练习</label></div>
                <form><input type="text"/></form>
            </li>
            <li>
                <div><input type="checkbox" checked="checked"/><label>锻炼</label></div>
                <form><input type="text"/></form>
            </li>
            <li>
                <div><input type="checkbox"/><label>睡觉</label></div>
                <form><input type="text"/></form>
            </li>
        </ul>
</section>`);
  lines.push(`<footer>
        <strong>2</strong> items left
        <ul>
            <li><a href="#/">All</a></li>
            <li><a href="#/active">Active</a></li>
            <li><a href="#/completed">Completed</a></li>
        </ul>
        <button>Clear completed</button>
</footer>`);
lines.push(`</section>`);

  let line = lines.join('\n');
//  require(`fs`).writeFileSync('2.txt', line);
  return line;
}

module.exports = {
  generateTodoHtml: generateTodoHtml
}