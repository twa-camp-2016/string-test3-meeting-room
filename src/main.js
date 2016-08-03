"use strict";
function generateTodoHtml(todoItems) {
  let todoList = todoItems.map(({name,completed})=>{
    if(completed){
      return {name,checkString:` checked="checked"`};
    }else {
      return {name,checkString:""};
    }
  });

let num =0;
  let todoString = `
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
  for(let {name,checkString} of todoList){
      todoString+=`            <li>
                <div><input type="checkbox"${checkString}/><label>${name}</label></div>
                <form><input type="text"/></form>
            </li>
`;
      if(checkString.length===0){
        num++;
      }
  }

todoString += `        </ul>
    </section>
    <footer>
`;
todoString+=`        <strong>${num}</strong> items left
`;
todoString+=`        <ul>
            <li><a href="#/">All</a></li>
            <li><a href="#/active">Active</a></li>
            <li><a href="#/completed">Completed</a></li>
        </ul>
        <button>Clear completed</button>
    </footer>
</section>
`;
  require('fs').writeFileSync('./1.txt',todoString);

  return todoString;

}
module.exports = {
  generateTodoHtml: generateTodoHtml
}