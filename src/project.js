export function loadNewProject() {
    const projectBoard = document.getElementById('project-board');

    const projectForm = document.createElement('form');
    projectForm.classList.add('project-form');

    const listName = document.createElement('input');
    listName.classList.add('list-name');
    listName.placeholder = "New Project Name";
    listName.maxLength = "37";
    projectForm.appendChild(listName);

    const listDesc = document.createElement('input');
    listDesc.classList.add('list-desc');
    listDesc.placeholder = 'Describe your project...';
    listDesc.maxLength = "130";
    projectForm.appendChild(listDesc);

    const taskBox = document.createElement('div');
    taskBox.classList.add('task-box');
    projectForm.appendChild(taskBox);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    taskBox.appendChild(checkbox);

    const addTaskButton = document.createElement('button');
    addTaskButton.classList.add('add-task-button');
    addTaskButton.textContent = '+';
    projectForm.appendChild(addTaskButton);
    
    const createListButton = document.createElement('button');
    createListButton.classList.add('create-list-button');
    createListButton.textContent = '✓';
    projectForm.appendChild(createListButton);

    projectBoard.appendChild(projectForm);
}