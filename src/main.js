function generateTodoHtml(todoItems) {
  let result="";
  todoItems.map(todoItem =>{
result+= ` <li>
               <div><input type="checkbox" checked="checked"/><label>${todoItem.name}</label></div>
               <form><input type="text"/></form>
          </li>
`;});
  let expected = `
<section>
    <header>
        <h1>todos</h1>
        <form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>
    </header>
    <section>
        <input type="checkbox"/>
        <label for="toggle-all">Mark all as complete</label>
        <ul>
           ${result.trim()}
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
</section>`;
  require(`fs`).writeFileSync('./1.txt',expected);
  return result;
}

module.exports = {generateTodoHtml
};
