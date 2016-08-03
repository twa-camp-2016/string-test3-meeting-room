let _ = require('lodash');
function generateTodoHtml(todoItems) {
  let lines = ['<section>'];
  lines.push('    <header>');
  lines.push(`        <h1>todos</h1>`);
  lines.push(`        <form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>`);
  lines.push(`    </header>`);
  lines.push(`    <section>`);
  lines.push(`        <input type="checkbox"/>`);
  lines.push(`        <label for="toggle-all">Mark all as complete</label>`);
  lines.push(`        <ul>`);
  _.map(todoItems, todoItem => {
    let line = [`            <li>`];
    line.push(`                <div><input type="checkbox" checked="checked"/><label>${todoItem.name}</label></div>`);
    line.push(`                <form><input type="text"/></form>`);
    line.push(`            </li>`);
    lines.push(line);
  });
  lines.push(`        </ul>`);
  lines.push(`    </section>`);
  lines.push(`    <footer>`);
  lines.push(`        <strong>2</strong> items left`);
  lines.push(`        <ul>`);
  lines.push(`            <li><a href="#/">All</a></li>`);
  lines.push(`            <li><a href="#/active">Active</a></li>`);
  lines.push(`            <li><a href="#/completed">Completed</a></li>`);
  lines.push(`        </ul>`);
  lines.push(`        <button>Clear completed</button>`);
  lines.push(`    </footer>`);
  lines.push(`</section>`);

  require('fs').writeFileSync('1.txt',lines.join('\n'));
  return lines.join('\n');
}

module.exports = {
  generateTodoHtml: generateTodoHtml
};