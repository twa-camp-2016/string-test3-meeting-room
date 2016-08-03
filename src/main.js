function generateTodoHtml(todoItems) {
  let count=0;
  for(let item of todoItems){
    if(item.completed===false){
      count+=1;
    }
  }
  for(let item of todoItems){
    if(item.completed===true){
     let lines=`   
    <li>
    <div><input type="checkbox" checked="checked"/><label>${item.name}</label></div>
        <form><input type="text"/></form>
        </li>
  `
  }else {
   let lines=` <li>
      <div><input type="checkbox"/><label>${item.name}</label></div>
          <form><input type="text"/></form>
          </li>`;
    }
  return expected = `
<section>
    <header>
        <h1>todos</h1>
        <form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>
    </header>
    <section>
        <input type="checkbox"/>
        <label for="toggle-all">Mark all as complete</label>
        
    </section>
    <footer>
        <strong>count</strong> items left
        <ul>
            <li><a href="#/">All</a></li>
            <li><a href="#/active">Active</a></li>
            <li><a href="#/completed">Completed</a></li>
        </ul>
        <button>Clear completed</button>
    </footer>
</section>
`
      /**/;
}

module.exports = {
  generateTodoHtml: generateTodoHtml
}