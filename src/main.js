function generateTodoHtml(todoItems) {
  let result="";let count=0;
  for(let {name,completed} of todoItems)
  {
      let items="";
      if(completed)
      {    items=`<div><input type="checkbox" checked="checked"/>`;}
      else{ items=`<div><input type="checkbox"/>`;count++;}
    result+=`
            <li>
                ${items}<label>${name}</label></div>
                <form><input type="text"/></form>
            </li>`
  }
  let list = `
<section>
    <header>
        <h1>todos</h1>
        <form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>
    </header>
    <section>
        <input type="checkbox"/>
        <label for="toggle-all">Mark all as complete</label>
        <ul>`;
      let lists= `
        </ul>
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
</section>`;
    let expected=`${list+result+lists}`;
  require(`fs`).writeFileSync('./1.txt',expected);
  return expected;
}

module.exports = {generateTodoHtml
};
