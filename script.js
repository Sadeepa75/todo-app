const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
    if(taskInput.value.trim() === "") return;
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = '';
});