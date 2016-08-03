function generateTodoHtml(todoItems) {
  let result = [];
  result.push(`<section>
  <header>
    <h1>todos</h1>
    <form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>
  </header>
  <section>
    <input type="checkbox"/>
    <label for="toggle-all">Mark all as complete</label>
    <ul>
`);

  todoItems.map(item =>{
    let div = `      <li>
        <div><input type="checkbox"`;
    if(item.completed === true) {
      div += ' checked="checked"';
    }
    div += `/><label>${item.name}</label></div>
        <form><input type="text"/></form>
      </li>
`;
    result.push(div);
  });
  result.push(`    </ul>
  </section>
  <footer>`)
  let unCompletedCount = 0;
  todoItems.map(item =>{
    if(item.completed === false) {
      unCompletedCount++;
    }
  });

  result.push(`    <strong>${unCompletedCount}</strong> items left
    <ul>
      <li><a href="#/">All</a></li>
      <li><a href="#/active">Active</a></li>
      <li><a href="#/completed">Completed</a></li>
    </ul>
    <button>Clear completed</button>
  </footer>
</section>`);


  return result;
}


module.exports = {
  generateTodoHtml: generateTodoHtml
}
