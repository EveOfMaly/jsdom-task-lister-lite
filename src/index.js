//specific form
const form = document.getElementById('create-task-form');
const taskDescription = document.getElementById('new-task-description');
const newTaskUI = document.getElementById('tasks');
let newTask 

//listen for submit event
form.addEventListener('submit', function(event) {
  createTask(event);
})

//create the new task
function createTask(event) {
  event.preventDefault(); //prevent form from redirecting 
  const newTaskDescription =  document.getElementById('new-task-description'); //get the new task description
  appendTask(newTaskDescription) ; //call appendTask and add to to DO
  console.log(newTaskDescription);

}

function appendTask(task) {
  newTask = newTaskUI.appendChild(document.createElement('li')).innerText = task.value

  console.log(`New task is:${task.value}`);

  console.log("Task being made");
}






