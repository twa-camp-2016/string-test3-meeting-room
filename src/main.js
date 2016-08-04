let _ = require('lodash');

function generateTodoHtml(todoItems) {
    let lines = [];
    lines.push('');
    lines.push(`<section>`);
    lines.push(`    <header>`);
    lines.push(`        <h1>todos</h1>`);
    lines.push(`        <form><input type="text" autofocus="" placeholder="What needs to be done?"/></form>`);
    lines.push(`    </header>`);
    lines.push(`    <section>`);
    lines.push(`        <input type="checkbox"/>`);
    lines.push(`        <label for="toggle-all">Mark all as complete</label>`);
    lines.push(`        <ul>`);

    for (let element of todoItems) {
        if (element.completed === true) {
            lines.push(`            <li>`);
            lines.push(`                <div><input type="checkbox" checked="checked"/><label>${element.name}</label></div>`);
            lines.push(`                <form><input type="text"/></form>`);
            lines.push(`            </li>`);
        } else {
            lines.push(`            <li>`);
            lines.push(`                <div><input type="checkbox"/><label>${element.name}</label></div>`);
            lines.push(`                <form><input type="text"/></form>`);
            lines.push(`            </li>`);
        }
    }

    let number = _(todoItems).filter(x=> x.completed === false).size();
    lines.push(`        </ul>`);
    lines.push(`    </section>`);
    lines.push(`    <footer>`);
    lines.push(`        <strong>${number}</strong> items left`);
    lines.push(`        <ul>`);
    lines.push(`            <li><a href="#/">All</a></li>`);
    lines.push(`            <li><a href="#/active">Active</a></li>`);
    lines.push(`            <li><a href="#/completed">Completed</a></li>`);
    lines.push(`        </ul>`);
    lines.push(`        <button>Clear completed</button>`);
    lines.push(`    </footer>`);
    lines.push(`</section>`);
    lines.push('');
    return lines.join('\n');
}

module.exports = {
    generateTodoHtml: generateTodoHtml
}