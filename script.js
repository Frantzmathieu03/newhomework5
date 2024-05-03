// Retrieve tasks and nextId from localStorage
//let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const taskCard = $('<div>')
    .addClass('card w-75 task-card draggable my-3')
    .attr('data-task-id', task.id);
    const cardHeader = $('<div>').addClass('card-header h4').text(task.title);
    const cardBody = $('<div>').addClass('card-body');
    const cardDescription = $('<p>').addClass('card-text').text(task.description);
    const cardDueDate = $('<p>').addClass('card-text').text(task.dueDate);
    cardBody.append(cardDescription, cardDueDate);
  taskCard.append(cardHeader, cardBody);
  return taskCard;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    const todoList = $('#todo-cards')
for (let task of taskList){
    todoList.append(createTaskCard(task))
}
}

let taskList =[]
// Todo: create a function to handle adding a new task
function handleAddTask(event){
event.preventDefault()
const task ={
    id: Math.random(),
    title: $('#taskTitle').val(),
    description:$('#taskDescription').val(),
    dueDate: $('#taskDueDate').val(),
    status: "to-do"
}
taskList.push(task)

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
$('#taskForm').on('submit', handleAddTask)
renderTaskList()
});
