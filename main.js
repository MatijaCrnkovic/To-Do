const date = document.getElementById('date');
const list = document.getElementById('item');
const input = document.getElementById('input');

const CHECK = './img/done_icon.svg';
const UNCHECK = './img/uncheck_icon.png';
const LINE_THROUGHT = 'lineThrough';

const LIST = [];
const id = 0;

const todayDate = new Date();
const optionsDate = { weekday: 'long', month: 'long', day: 'numeric' };
date.innerHTML = todayDate.toLocaleDateString('en-US', optionsDate);

const addToDo = (name, id, check, remove) => {
  const done = check ? CHECK : UNCHECK;
  const line = check ? LINE_THROUGHT : '';
  const p = `<li class="list"><img class='${done} check' src="${done}">
  <p class="text ${line}">${name}</p>
  <img class='trash' src="img/remove_icon.svg"</li>`;
  const position = 'beforeend';
  list.insertAdjacentHTML(position, p);
};

document.addEventListener('keyup', event => {
  if (event.keyCode == 13) {
    const text = input.value;
    if (text) {
      addToDo(text);
    }
    input.value = '';
  }
});

addToDo('sdfs', 1, true, false);

const completeTask = () => {};

const deleteTask = () => {};
