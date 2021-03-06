// Define UI Variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners() {
  //DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);
  //Add task event
  form.addEventListener('submit', addTask);
  //Remove task event
  taskList.addEventListener('click', removeTask);
  //Clear Task event
  clearBtn.addEventListener('click', clearTask);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// Get Tasks from Local Storage
function getTasks() {
  let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks= [];
    } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        // Create a li element to hold a new list element
        const li = document.createElement('li');
        // Add a default class to it
        li.className = 'collection-item';
        // Create text node and append to li
        li.appendChild(document.createTextNode(task));
        // Create a new link element
        const link = document.createElement('a');
        // Add a default class to the newly created link
        link.className = 'delete-item secondary-content';
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append link to li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);
    });
}

// Add Task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add Task');
  }
  // Create a li element to hold a new list element
  const li = document.createElement('li');
  // Add a default class to it
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create a new link element
  const link = document.createElement('a');
  // Add a default class to the newly created link
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  //Store in Local Storage
  storeTaskInLocalStorage(taskInput.value);

  // Clear Input
  taskInput.value = '';

  e.preventDefault();
}
  //Store Task
  function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks= [];
    }
      else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
      }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

//Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains
    ('delete-item')) {
      if (confirm('Are you sure ?')){
      e.target.parentElement.parentElement.remove();
      // Remove task from Local Storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}
// Remove task from Local Storage
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Task
function clearTask() {
  //taskList.innerHTML = '';

  // Faster
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
    }
    // https://jsperf.com/innerhtml-vs-removechild

    // Clear from Local Storage
    clearTasksFromLocalStorage();
  }

    // Clear Tasks from Local Storage
    function clearTasksFromLocalStorage() {
      localStorage.clear();
    }

// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach
  (function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1){ //if the text item exists
      task.style.display = 'block'; //display the matching item in the list
    } else {
      task.style.display = 'none'; // don't display anything
    }
  });
}
