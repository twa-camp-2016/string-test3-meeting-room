function generateTodoHtml(todoItems) {
    let result = '';
    let num = 0;
    result+=`
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
        let checked='';
        if(completed){
            checked+=' checked="checked"';
        }else{
            num++;
        }
        result+=`
            <li>
                <div><input type="checkbox"${checked}/><label>${name}</label></div>
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
};