document.getElementById('addTaskBtn').addEventListener('click', function(){
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        addTask(taskText);
        taskInput.value = ''; // Clear input field
    }
});

function addTask(task) {
    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    
    listItem.innerHTML = `
        <span>${task}</span>
        <button onclick="deleteTask(this)">✖</button>
    `;
    
    listItem.querySelector('span').addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });
    
    taskList.appendChild(listItem);
}

function deleteTask(button) {
    button.parentElement.remove();
}