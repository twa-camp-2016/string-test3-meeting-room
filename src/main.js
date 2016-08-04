function generateTodoHtml(todoItems) {
    let result = `
<section>
    <header>
        <h1>todos</h1>
        <form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>
    </header>
    <section>
        <input type="checkbox"/>
        <label for="toggle-all">Mark all as complete</label>
        <ul>
`;
  todoItems.map(item =>{
      let li = `            <li>
                <div><input type="checkbox"`;
      if(item.completed === true) {
          li += ' checked="checked"';
      }
      li += `/><label>${item.name}</label></div>
                <form><input type="text"/></form>
            </li>
`;
      result += li;
  });

    result += `        </ul>
    </section>
    <footer>
`;

    let unCompletedCount = 0;
    todoItems.map(item =>{
        if(item.completed === false) {
            unCompletedCount++;
        }
    });

    result += `        <strong>${unCompletedCount}</strong> items left
        <ul>
            <li><a href="#/">All</a></li>
            <li><a href="#/active">Active</a></li>
            <li><a href="#/completed">Completed</a></li>
        </ul>
        <button>Clear completed</button>
    </footer>
</section>
`;
    require('fs').writeFileSync( '1', result);

    return result;

}

module.exports = {
    generateTodoHtml: generateTodoHtml
}
let todoItems = [
    {name: '吃饭', completed: false},
    {name: '练习', completed: false},
    {name: '锻炼', completed: false},
    {name: '睡觉', completed: false}
];
generateTodoHtml(todoItems);
//console.log(false && true || true);