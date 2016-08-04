function generateTodoHtml(todoItems) {
  let str = [];
  let count = 0;
  for(let items of todoItems){
    if(items.completed) {
      str+=
`            <li>
                <div><input type="checkbox" checked="checked"/><label>${items.name}</label></div>
                <form><input type="text"/></form>
            </li>
`;

    }else {
      count++;
      str+=
`            <li>
                <div><input type="checkbox"/><label>${items.name}</label></div>
                <form><input type="text"/></form>
            </li>
`
    }
  }
  let a =  `
<section>
    <header>
        <h1>todos</h1>
        <form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>
    </header>
    <section>
        <input type="checkbox"/>
        <label for="toggle-all">Mark all as complete</label>
        <ul>
${str}        </ul>
    </section>
    <footer>
        <strong>${count}</strong> items left
        <ul>
            <li><a href="#/">All</a></li>
            <li><a href="#/active">Active</a></li>
            <li><a href="#/completed">Completed</a></li>
        </ul>
        <button>Clear completed</button>
    </footer>
</section>
`;
  require('fs').writeFileSync('actual.txt', a);

  return a;
}

module.exports = {
  generateTodoHtml: generateTodoHtml
};