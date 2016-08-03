function generateTodoHtml(todoItems) {
  let num=0;
  let result =`
<section>
    <header>
        <h1>todos</h1>
        <form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>
    </header>
    <section>
        <input type="checkbox"/>
        <label for="toggle-all">Mark all as complete</label>
        <ul>`;
  todoItems.forEach(({name,completed})=>{
    let check='';
    if(completed===false){
      num++;
    }else{
      check+=` checked="checked"`;
    }
    result+=`
            <li>
                <div><input type="checkbox"${check}/><label>${name}</label></div>
                <form><input type="text"/></form>
            </li>`;
  });
  result+=`
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
</section>
`;
  require('fs').writeFileSync('./string.txt',result);
  return result;
}

module.exports = {
  generateTodoHtml: generateTodoHtml
}