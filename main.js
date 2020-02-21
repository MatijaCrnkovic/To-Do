const date = document.getElementById('date');
const list = document.getElementById('list');
const input = document.getElementById('input');

const CHECK = 'checked';
const UNCHECK = 'check';
const LINE_THROUGHT = 'lineThrough';

let LIST = [];
let ID = 0;

const todayDate = new Date();
const optionsDate = { weekday: 'long', month: 'long', day: 'numeric' };
date.innerHTML = todayDate.toLocaleDateString('en-US', optionsDate);

const addToDo = (name, id, check, trash) => {
  if (trash) {
    return;
  }
  const done = check ? CHECK : UNCHECK;
  const line = check ? LINE_THROUGHT : '';
  const p = `<li class="item">
              <img class='check ${done}' job='complete' id="${ID}" src="img/done_icon.svg">
              <p class="text ${line}" job='complete' id="${ID}">${name}</p>
              <img class='trash' job='remove' src="img/remove_icon.svg" id="${ID}">
            </li>`;
  const position = 'beforeend';
  list.insertAdjacentHTML(position, p);
};

document.addEventListener('keyup', event => {
  if (event.keyCode == 13) {
    const text = input.value;
    if (text) {
      addToDo(text);
      LIST.push({
        name: text,
        id: ID,
        done: false,
        trash: false
      });
      input.value = '';
      ID++;
    }
  }
});

const completeTask = element => {
  element.parentNode.querySelector('.check').classList.toggle(CHECK);
  element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGHT);
  LIST[element.id].done = LIST[element.id].done ? false : true;
};

const deleteTask = element => {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].trash = true;
};

list.addEventListener('click', event => {
  const element = event.target;
  const elementJob = element.attributes.job.value;

  if (elementJob == 'complete') {
    completeTask(element);
  } else if (elementJob == 'remove') {
    deleteTask(element);
  }
});
