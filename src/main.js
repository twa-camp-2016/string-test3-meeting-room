function generateTodoHtml(todoItems) {

  let result =`
<section>
    <header>
        <h1>todos</h1>
        <form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>
    </header>
    <section>
        <input type="checkbox"/>
        <label for="toggle-all">Mark all as complete</label>
        <ul>
            <li>
                <div><input type="checkbox" checked="checked"/><label>${todoItems[0].name}</label></div>
                <form><input type="text"/></form>
            </li>
            <li>
                <div><input type="checkbox"/><label>${todoItems[1].name}</label></div>
                <form><input type="text"/></form>
            </li>
            <li>
                <div><input type="checkbox" checked="checked"/><label>${todoItems[2].name}</label></div>
                <form><input type="text"/></form>
            </li>
            <li>
                <div><input type="checkbox"/><label>${todoItems[3].name}</label></div>
                <form><input type="text"/></form>
            </li>
        </ul>
    </section>
    <footer>
        <strong>2</strong> items left
        <ul>
            <li><a href="#/">All</a></li>
            <li><a href="#/active">Active</a></li>
            <li><a href="#/completed">Completed</a></li>
        </ul>
        <button>Clear completed</button>
    </footer>
</section>
`;
  require('fs').writeFileSync('./string.txt',result);
  return result;
}

module.exports = {
  generateTodoHtml: generateTodoHtml
}