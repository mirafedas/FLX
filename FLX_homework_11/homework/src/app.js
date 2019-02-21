let rootNode = document.getElementById('root'); 
let elementId = 0;
let dragYCord = 0;

const listItems = document.getElementById('listItems');
listItems.setAttribute('ondrop', 'drop(event)');
listItems.setAttribute('ondragover', 'allowDrop(event)');

// eslint-disable-next-line no-magic-numbers
const button = document.getElementsByTagName('button')[0];

const addBox = document.getElementById('addBox');
addBox.setAttribute('onclick', 'addNewItem()');

const markAsDone = (e) => {
   if (e.target.innerHTML === 'check_box_outline_blank') {
    e.target.innerHTML = 'check_box';
   }
}

const deleteItem = (e) => {
    e.target.parentElement.remove();
    const warningMsg = document.getElementsByClassName('warning')[0];
    if (warningMsg) {
        button.removeAttribute('disabled');
        document.getElementById('input').removeAttribute('disabled');
        warningMsg.remove();
    }
}

const success = () => {
    if(document.getElementById('input').value === '') { 
        document.getElementById('button').disabled = true; 
    } else { 
        document.getElementById('button').disabled = false;
    }
}

const listIsNotFull = (countOfElements) => {
    // eslint-disable-next-line no-magic-numbers
    if (countOfElements > 9) {
        button.setAttribute('disabled', true);
        document.getElementById('input').setAttribute('disabled', true);
        const warning = document.createElement('div');
        warning.innerHTML = 'Maximum item per list are created';
        warning.setAttribute('class', 'warning');
        // eslint-disable-next-line no-magic-numbers
        document.getElementsByTagName('h1')[0].appendChild(warning);
    }
}

const drag = (ev) => {
    dragYCord = ev.screenY;
    ev.dataTransfer.setData('text', ev.target.id);
}

const allowDrop = (ev) => {
    ev.preventDefault();
}

const drop = (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    const dropContainer = ev.target.closest('#listItems');
    const dropElement = ev.target.closest('.listItems');
    console.log(ev.target.nextSibling)
    const dropYCord = ev.screenY;
    if (dragYCord > dropYCord) {
        dropContainer.insertBefore(document.getElementById(data), dropElement);
    } else {
        const nextEl = dropElement.nextSibling;
        if (nextEl) {
            dropContainer.insertBefore(document.getElementById(data), nextEl);
        } else {
            dropContainer.appendChild(document.getElementById(data));
        }
    }    
}

const addNewItem = () => {
    const inputValue = document.getElementById('input').value;
    const deleteIcons = document.getElementsByClassName('delete');
    const checkboxIcon = document.getElementsByClassName('checkboxIcon');
    const countOfElements = deleteIcons.length;    
    // eslint-disable-next-line no-magic-numbers
    if (inputValue && countOfElements <= 9) {        
        const newListItem = document.createElement('div');
        newListItem.setAttribute('class', 'listItems');
        newListItem.setAttribute('id', elementId++);
        newListItem.setAttribute('draggable', 'true');
        newListItem.setAttribute('ondragstart', 'drag(event)');
        newListItem.innerHTML = '<div class="checkbox">' + 
        '<i id="addBox" class="material-icons checkboxIcon">check_box_outline_blank</i>' + 
        inputValue
        + '</div>' + '<i class="material-icons delete">delete</i>';
        listItems.appendChild(newListItem);
        // eslint-disable-next-line no-magic-numbers
        listIsNotFull(countOfElements + 1);        
        deleteIcons[countOfElements].addEventListener('click', deleteItem);
        checkboxIcon[countOfElements].addEventListener('click', markAsDone);        
    }
}
