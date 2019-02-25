/* eslint-disable no-magic-numbers */
const rootNode = document.getElementById('root');

let todoItems = localStorage.todoItems;
if (todoItems) {
    todoItems = JSON.parse(todoItems);
} else {
    todoItems = [];
}

let clickedEl = {};

const checkboxIconUnchecked = '<img src="./assets/img/todo-s.png"></img>';
const checkboxIconChecked = '<img src="./assets/img/done-s.png"></img>';
const removeItemIcon = '<img src="./assets/img/remove-s.jpg"></img>';

const addButton = document.getElementById('addItem');
addButton && addButton.setAttribute('onclick', 'redirectToAdd()');

const saveChangesButton = document.getElementById('save');
saveChangesButton && saveChangesButton.setAttribute('onclick', 'addNewItem()');

const saveModifiedButton = document.getElementById('saveModified');
saveModifiedButton && saveModifiedButton.setAttribute('onclick', 'saveModified()');

if (!localStorage.id) {
    localStorage.id = 0;
}

const redirectToAdd = () => {
    document.location.href = './add.html';
}

const redirectToIndex = () => {
    document.location.href = './index.html';
}

const addNewItem = () => {
    const newItemDescription = document.getElementById('addItemInput').value;
    const newItem = {
        isDone: false,
        id: localStorage.id++,
        description: newItemDescription
    }
    if (newItemDescription) {
        todoItems.push(newItem);
        localStorage.todoItems = JSON.stringify(todoItems);
        redirectToIndex();
    }    
}

const redirectToModify = (e) => {
    localStorage.setItem('clickedElId', e.target.parentElement.id);
    document.location.href = './modify.html';
}

const cancelButton = document.getElementById('cancel');
cancelButton && cancelButton.addEventListener('click', redirectToIndex);

const findElByID = (clickedElId) => {
    todoItems.forEach((el) => {
        // eslint-disable-next-line eqeqeq
        if (el.id == clickedElId) {
            clickedEl = el;
        }
    });
}

const renderModifiedItem = () => {
    const input = document.getElementById('modifyItem');
    if (!input) {
        return;
    }
    const clickedElId = localStorage.getItem('clickedElId');
    findElByID(clickedElId);   
    input.value = clickedEl.description;
}
renderModifiedItem();

const saveModified = () => {
    const modifiedDescription = document.getElementById('modifyItem').value;
    clickedEl.description = modifiedDescription;
    localStorage.todoItems = JSON.stringify(todoItems);
    redirectToIndex();
}

const removeItem = (e) => {
    const itemToRemove = e.target.parentElement.parentElement;
    findElByID(itemToRemove.id);
    todoItems.splice(todoItems.indexOf(clickedEl), 1);
    itemToRemove.remove();
    localStorage.todoItems = JSON.stringify(todoItems);
}

const compare = (a,b) => {
    if (a.isDone < b.isDone){
        return -1;
    }              
    if (a.isDone > b.isDone) {
        return 1;
    }            
    return 0;
  }

const markAsDone = (e) => {
    const itemToMarkAsDone = e.target.parentElement.parentElement;
    findElByID(itemToMarkAsDone.id);
    clickedEl.isDone = !clickedEl.isDone;
    localStorage.todoItems = JSON.stringify(todoItems);
    const listWrapper = document.getElementById('listWrapper');
    listWrapper.innerHTML = null;
    renderListItems();
}

const renderListItems = () => {
    const listWrapper = document.getElementById('listWrapper');
    if (listWrapper) {
        todoItems.sort(compare);
        todoItems.forEach( (el) => {
            const newListItem = document.createElement('div');
            newListItem.setAttribute('class', 'listItem');
            newListItem.setAttribute('id', el.id);

            const description = document.createElement('div');
            description.setAttribute('class', 'description');
            description.innerText = el.description;
            description.addEventListener('click', redirectToModify);
            
            const checkbox = document.createElement('div');
            checkbox.setAttribute('class', 'checkbox');
            if (el.isDone) {
                checkbox.innerHTML = checkboxIconChecked;
            } else {
                checkbox.innerHTML = checkboxIconUnchecked;
            }
            checkbox.addEventListener('click', markAsDone);

            const removeIcon = document.createElement('div');
            removeIcon.setAttribute('class', 'removeIcon');
            removeIcon.innerHTML = removeItemIcon;
            removeIcon.addEventListener('click', removeItem);
            
            newListItem.appendChild(checkbox);
            newListItem.appendChild(description);
            newListItem.appendChild(removeIcon);
            listWrapper.appendChild(newListItem);
        });
    }
}
renderListItems();
