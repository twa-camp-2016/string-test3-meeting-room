function generateTodoHtml(todoItems) {
  let line=`
<section>
    <header>
        <h1>todos</h1>
        <form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>
    </header>
    <section>
        <input type="checkbox"/>
        <label for="toggle-all">Mark all as complete</label>
        <ul>\n`
  let num=0;
  for(let item of todoItems){
    if(item.completed===true){
      line+=`            <li>
                <div><input type="checkbox" checked="checked"/><label>${item.name}</label></div>
                <form><input type="text"/></form>
            </li>\n`;
    }else{
      num++;
      line+=`            <li>
                <div><input type="checkbox"/><label>${item.name}</label></div>
                <form><input type="text"/></form>
            </li>\n`;
    }
  }
  line+=`        </ul>
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
</section>
`;
  require('fs').writeFileSync('1.txt',line);
  return line;
}

module.exports = {
  generateTodoHtml: generateTodoHtml
}