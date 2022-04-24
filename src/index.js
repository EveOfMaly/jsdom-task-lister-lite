//specific form
const form = document.getElementById('create-task-form');
const taskDescription = document.getElementById('new-task-description');
const newTaskUI = document.getElementById('tasks');
let sortedTask = []
let newTask 

//listen for submit event
form.addEventListener('submit', function(event) {
  createTask(event);
})

//create the new task
function createTask(event) {
  event.preventDefault(); //prevent form from redirecting 
  const newTaskDescription =  document.getElementById('new-task-description'); //get the new task description
  const newTaskRankLow =  document.getElementById('new-task-priority-low'); //get the new task description
  const newTaskRankMed =  document.getElementById('new-task-priority-med');
  const newTaskRankHigh =  document.getElementById('new-task-priority-high');
  sortedTask.push(newTaskDescription.value) //not operational build method .
  appendTask(newTaskDescription, newTaskRankLow, newTaskRankMed, newTaskRankHigh) ; //call appendTask and add to to DO
  console.log(newTaskDescription);
}

function appendTask(task, low, med, high) {
  newTask = newTaskUI.appendChild(document.createElement('li')).innerText = task.value

  console.log(`New task is:${task.value}`);

  console.log("Task being made");
}


// A delete function that will remove tasks from your list
function deleteTask() {
  newTaskUI.remove()
}

// A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)



// As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority



// An additional input field (e.g. user, duration, date due)


// Ability to edit tasks



// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM




