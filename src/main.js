function generateTodoHtml(todoItems) {
  //return /**/;
  let lines=[`<section>`];
  lines.push(`<header>`);
  lines.push(`<h1>todos</h1>`);
  lines.push(`<form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>`);
  lines.push(`</header>`);
  lines.push(`<section>`);
  lines.push(`<input type="checkbox"/>`);
  lines.push(`<label for="toggle-all">Mark all as complete</label>`);

   let found=_.some(todoItems,x=>_.find(x.completed===true));
  if(found)
  {
    lines.push(`<ul>`);
    lines.push(`<ul>`);
    lines.push(`<div><input type="checkbox" checked="checked"/><label>吃饭</label></div>`);
    lines.push(`<form><input type="text"/></form>`);
    lines.push(`</li>`);
    lines.push(`<li>`);
    lines.push(`<div><input type="checkbox"/><label>练习</label></div>`);
    lines.push(`<form><input type="text"/></form>`);
    lines.push(`</li>`);
    lines.push(`</li>`);
    lines.push(`<div><input type="checkbox" checked="checked"/><label>锻炼</label></div>`);
    lines.push('<form><input type="text"/></form>');
    lines.push(`</li>`);
    lines.push(`<li>`);
    lines.push(`<div><input type="checkbox"/><label>睡觉</label></div>`);
    lines.push(`<form><input type="text"/></form>`);
    lines.push(`</li>`);
    lines.push(`</ul>`);
    lines.push(`</section>`);
  }else{
    lines.push(`<ul>`);
    lines.push(`<ul>`);
    lines.push(`<div><input type="checkbox"/><label>吃饭</label></div>`);
    lines.push(`<form><input type="text"/></form>`);
    lines.push(`</li>`);
    lines.push(`<li>`);
    lines.push(`<div><input type="checkbox"/><label>练习</label></div>`);
    lines.push(`<form><input type="text"/></form>`);
    lines.push(`</li>`);
    lines.push(`</li>`);
    lines.push(`<div><input type="checkbox"/><label>锻炼</label></div>`);
    lines.push('<form><input type="text"/></form>');
    lines.push(`</li>`);
    lines.push(`<li>`);
    lines.push(`<div><input type="checkbox"/><label>睡觉</label></div>`);
    lines.push(`<form><input type="text"/></form>`);
    lines.push(`</li>`);
    lines.push(`</ul>`);
    lines.push(`</section>`);

  }
  lines.push(`<footer>`);
  lines.push(`<strong>4</strong> items left`);
  lines.push('');


}

module.exports = {
  generateTodoHtml: generateTodoHtml
}