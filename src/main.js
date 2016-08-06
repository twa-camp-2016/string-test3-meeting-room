function generateTodoHtml(todoItems) {
  let num = 0;
  let string = `
<section>
    <header>
        <h1>todos</h1>
        <form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>
    </header>
    <section>
        <input type="checkbox"/>
        <label for="toggle-all">Mark all as complete</label>
        <ul>`;
  for(let item of todoItems){
    if(item.completed === true){
      string +=  `\n            <li>
                <div><input type="checkbox" checked="checked"/><label>${item.name}</label></div>
                <form><input type="text"/></form>
            </li>`;
    }else{
      num++;
      string += `\n            <li>
                <div><input type="checkbox"/><label>${item.name}</label></div>
                <form><input type="text"/></form>
            </li>`;
    }
  }
  string+=`
        </ul>
    </section>
    <footer>
        <strong>${num}</strong> items left
        <ul>
            <li><a href="#/">All</a></li>
            <li><a href="#/active">Active</a></li>
            <li><a href="#/completed">Completed</a></li>
        </ul>
        <button>Clear completed</button>
    </footer>
</section>`;
  require('fs').writeFileSync('1.txt',string);
  return string;
}

module.exports = {
  generateTodoHtml: generateTodoHtml
}