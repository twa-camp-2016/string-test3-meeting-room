function generateTodoHtml(todoItems) {
  return /**/

  let line=`<section>\n`;
   line +=`    <header>\n`;
  line +=`        <h1>todos</h1>\n`;
  line+=`        <form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>\n`;
  line+=`    </header>`;
  line+=`    <section>`;
  line += `        <input type="checkbox"/>`;
  line+=`        <label for="toggle-all">Mark all as complete</label>`;
  line +=`        <ul>`;
  for(let item of todoItems){
    if(item.completed===true){
    line +=`            <li>`;
    line += `                <div><input type="checkbox" checked="checked"/><label>${item.name}</label></div>`;
    line+=`                <form><input type="text"/></form>`;
    line += `            </li>`;}
    else{
      line +=`            <li>`;
      line += `                <div><input type="checkbox"/><label>${item.name}</label></div>`;
      line+=`                <form><input type="text"/></form>`;
      line += `            </li>`
    }
  }
  line +=`</ul>
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
</section>`
  return line;
}

module.exports = {
  generateTodoHtml: generateTodoHtml
}