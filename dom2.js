// Create Variable for FORM / LISTE / SEARCH

let form = document.getElementById('form-input');
let listItems = document.getElementById('items');
let filter = document.querySelector('#filter');

// FORM Submit Event add new Item
form.addEventListener('submit', addList);

// Remove new Item Event
listItems.addEventListener('click', removeItem);

// Filter Search Event
filter.addEventListener('keyup', searchFilter);

// TEST AND LEARNING PERPOSES
let lineBottom = document.getElementById('head-box');
lineBottom.style.borderBottom = 'solid 2px #333';
console.log(lineBottom);

// GRAB H1 ON Header 
let changeTitle1 = document.querySelector('#main-title');
changeTitle1.innerHTML = 'Learn The DOM JS.'
console.log(changeTitle1);

// GRAB H2 ON Div 
let changeTitle2 = document.querySelector('#li-title');
changeTitle2.innerHTML = 'Lists Items'
console.log(changeTitle2);


function addList(e) {
    e.preventDefault();

    // GET Input value
    let newItem = document.getElementById('name').value;

    // Check if the value is empte!
    if (newItem === '') {
        alert('Please Enter an Item');
        return;
    }

    // Create a new li Element 
    let li = document.createElement('li');
    // Add class 
    li.className = 'list-item';

    // Create Delete Button Element
    let btnDelete = document.createElement('button');
    // Add class to a Delete Button 
    btnDelete.className = 'btn-x'

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Append it to ul
    listItems.appendChild(li);

    // Append Text node for BTN-X
    btnDelete.appendChild(document.createTextNode('X'));

    // Append BTN-X to li
    li.appendChild(btnDelete);

    console.log(li);
}

function removeItem(e) {
    if (e.target.classList.contains('btn-x')) {
        if (confirm('You want delete it?')) {
            const li = e.target.parentElement;
            listItems.removeChild(li);
        }
    }
    //console.log('out!');
}

function searchFilter(e) {
    // convert text lowercase
    let text = e.target.value.toLowerCase();
    // get lis
    let items = listItems.getElementsByTagName('li');
    // Convert to an Array
    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
        console.log(itemName);
    });
}