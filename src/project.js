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

    const addTaskButton = document.createElement('button');
    addTaskButton.classList.add('add-task-button');
    addTaskButton.textContent = '+';
    addTaskButton.type = 'button';
    projectForm.appendChild(addTaskButton);
    
    const createListButton = document.createElement('button');
    createListButton.classList.add('create-list-button');
    createListButton.textContent = '✓';
    projectForm.appendChild(createListButton);

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    projectForm.appendChild(taskContainer);

    projectBoard.appendChild(projectForm);

    addTaskButton.addEventListener('click', function() {
        const taskBox = document.createElement('div');
        taskBox.classList.add('task-box');
        taskContainer.appendChild(taskBox);

        const checkbox = document.createElement('input');
        checkbox.classList.add('checkbox');
        checkbox.type = 'checkbox';
        taskBox.appendChild(checkbox);

        const taskName = document.createElement('input');
        taskName.classList.add('task-name');
        taskName.placeholder = 'New Task Name';
        taskName.maxLength = "75";
        taskBox.appendChild(taskName);

        const taskDesc = document.createElement('input');
        taskDesc.classList.add('task-desc');
        taskDesc.placeholder = 'Describe your task...';
        taskDesc.maxLength = '110';
        taskBox.appendChild(taskDesc);

        const dueDate = document.createElement('input');
        dueDate.type = "date";
        dueDate.classList.add('due-date');
        taskBox.appendChild(dueDate);

        const priorityStar = document.createElement('input');
        priorityStar.type = "checkbox";
        priorityStar.classList.add('priority-star');
        taskBox.appendChild(priorityStar);

        const trashBin = document.createElement('button');
        trashBin.classList.add('trash-bin');
        trashBin.type = 'button';
        taskBox.appendChild(trashBin);

        priorityStar.addEventListener('change', function() {
            if (priorityStar.checked) {
                taskContainer.prepend(taskBox);
            } else {
                taskContainer.append(taskBox);
            }
        });

        trashBin.addEventListener('click', function() {
            taskBox.remove();
        });
    });
}