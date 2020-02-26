// EXAMINE THE DOCUMENT OBJECT //
//console.dir(document);
//console.log(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
document.title = 'DOM JS'
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all[7]);
//document.all[7].textContent = 'New Title';

// GET ELEMENT BY ID //
let mainTitle = document.getElementById('main-title');
//console.log(mainTitle);
mainTitle.innerHTML = 'Learn The DOM'
//console.log(mainTitle);
//console.log(document.getElementById('sec-title'));
//document.getElementById('sec-title').textContent = 'New change'
let changeTitle = document.getElementById('sec-title');
//console.log(changeTitle);
changeTitle.textContent = 'Change Title2'
let lineHead = document.getElementById('head-box');
lineHead.style.borderBottom = 'solid 3px #444';
//console.log(lineHead);

// GET ELEMENT BY CLASS NAME //
//listItem = document.getElementsByClassName('list-item');
//console.log(listItem);
//listItem[2].textContent = 'Hello World';
//listItem[2].style.color = '#fff';
//listItem[2].style.backgroundColor = '#333';

//for (let i = 0; i < listItem.length; i++) {
//    listItem[i].style.backgroundColor = '#888'
//}

// QUERY SELECTOR //
//console.log(document.querySelector('input'));
let input = document.querySelector('input');
input.value = 'Hello World!'
//let inputButton = document.querySelector('button');
//console.log(inputButton);
//inputButton.textContent = 'SEND'
//let groupItem = document.querySelector('.list-item');
//console.log(groupItem);
//groupItem.style.color = 'green';
//let groupItemLast = document.querySelector('.list-item:last-child');
//console.log(groupItemLast);
//groupItemLast.style.color = 'blue'
//let groupItemThird = document.querySelector('.list-item:nth-child(3)');
//groupItemThird.style.color = 'red'

// QUERY SELECTOR ALL // 
let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');
//console.log(even);
for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4a';
    even[i].style.backgroundColor = '#ccc';
}

// TRAVERSING THE DOM //

// parentNode
let itemLists = document.querySelector('#items')
//console.log(itemLists.parentNode);
//itemLists.parentNode.parentNode.style.border = 'solid 2px yellow'

// parentElement 
//console.log(itemLists.parentElement);
//itemLists.parentElement.parentElement.style.border = 'solid 2px yellow'

// CHILDNODES
//console.log(itemLists.childNodes);

// CHILDREN
//console.log(itemLists.children);

// FIRSTCHILD
//console.log(itemLists.firstChild);
// FIRSTELEMENTCHILD
//console.log(itemLists.firstElementChild);
itemLists.firstElementChild.textContent = 'FIRST I'
// LASTCHILD
//console.log(itemLists.lastChild);
// LASTELEMENTCHILD
//console.log(itemLists.lastElementChild);
itemLists.lastElementChild.textContent = 'LAST I'
// NEXTSIBLING
// NEXTELEMANTSIBLING
// PREVIOUSSIBLING
// PREVIOUSELEMENTSIBLING
itemLists.previousElementSibling.style.borderBottom = 'solid'


// CREATEELEMENT

// lets create a div tag
let buildDiv = document.createElement('div');
//console.log(buildDiv);

// add class
buildDiv.className = 'box'

// add id 
buildDiv.id = 'main-box'

// add attribute
buildDiv.setAttribute('title', 'box1');

// add text node
let buildText = document.createTextNode('PUT OUR CONTENT');

// add text to a div
buildDiv.appendChild(buildText);

// add our new ELEMENT BUILDDIV on page

let container = document.querySelector('nav, .container');
let h1 = document.querySelector('nav h1');

container.insertBefore(buildDiv, h1);

buildDiv.style.backgroundColor = '#ccc';
buildDiv.style.width = '210px';
buildDiv.style.margin = '0';
buildDiv.style.textAlign = 'center';
h1.style.margin = '0';

//console.log(buildDiv);

// function to Click Button and call it 'onClick'
//function inputUser() {
//    let putName = window.prompt('Enter name');
//    let greeting = alert('Welcome ' + putName);
//    console.log(putName);
//    console.log(greeting);
//}

/// EVENET LISTENER TYPES ///

//let clickBut = document.getElementById('button').addEventListener(
//    'click', buttonClick);
//
//function buttonClick(e) {
//let liTitle = document.querySelector('.li-title');
//console.log(liTitle);
//liTitle.textContent = 'List Items';
//let changeColor = document.getElementsByTagName('section')
//console.log(changeColor);
//changeColor[0].style.backgroundColor = 'red';

// Traget 
//console.log(e.target.id);
//console.log(e.target);
//console.log(e.target.className);
//console.log(e.target.classList);
//let output = document.getElementById('output');
//output.innerHTML = '<h3>' + e.target.classList[1] + '</h3>'
//console.log(output);
//console.log(e);

//console.log(e.clientX);
//console.log(e.clientY);
//console.log(e.offsetY);
//console.log(e.offsetX);

//console.log(e.altKey);
//console.log(e.ctrlKey);
//console.log(e.shiftKey);
//}

///// TYPE OF CLICKS /////

//let button = document.getElementById('button');
//let box = document.getElementById('box1');
//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

//button.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseleave', runEvent);
//box.addEventListener('mouseover', runEvent);
//box.addEventListener('mouseout', runEvent);

//box.addEventListener('mousemove', runEvent);
//let output = document.getElementById('output');

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
let select = document.querySelector('select');
//itemInput.addEventListener('keydown', runEvent);
//itemInput.addEventListener('keyup', runEvent);
//itemInput.addEventListener('keypress', runEvent);

//itemInput.addEventListener('cut', runEvent);
//itemInput.addEventListener('paste', runEvent);

//select.addEventListener('change', runEvent);
form.addEventListener('submit', runEvent);

function runEvent(e) {
    e.preventDefault();
    console.log('EVENT TYPE: ' + e.type);
    // console.log('WHAT TYPING: ' + e.target.value);
    //output.innerHTML = '<h3>MouseX:' + e.offsetX + '</h3><h3>MouseY:'
    // + e.offsetY + '</h3>';
    //document.body.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ", 40)";
    //console.log(output);
}

// BOM Browser Object Model
function verBrowser(e) {
    //Browser detail
    document.write("<br> Name: " + window.navigator.appName);
    document.write("<br> Name: " + window.navigator.appCodeName);
    document.write("<br> Name: " + window.navigator.appVersion);
    // SCREEN INFORMATION
    document.write("<br> Name: " + window.screen.width);
    document.write("<br> Name: " + window.screen.height);
    document.write("<br> Name: " + window.screen.pixelDepth);
}

verBrowser();