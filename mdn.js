//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random(1) * array.length);
  return array[random];
}

// 2 2. RAW TEXT STRINGS

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
let insertX = ["Willy the Goblin Big Daddy Father Christmas"]
let insertY = [", the soup kitchen Disneyland the White House"]
let insertZ = ["spontaneously combusted melted into a puddle on the sidewalk turned into a slug and crawled away"]

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);


function result(e) {

  let newStory = storyText;

  let xItem = randomValueFromArray(insertY);
  console.log(xItem);
  let yItem = randomValueFromArray(insertX);
  let zItem = randomValueFromArray(insertZ);


  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);


  //console.log(newStory, 'chan1');


  if (customName.value !== name) {
    let name = customName.value;
    newStory = newStory.replace('Bob', name);
    console.log(name);

  }

  if (document.getElementById("uk").checked) {

    let weight = Math.round(300 * 0.071429);
    newStory = newStory.replace('300 pounds', weight + ' stones');
    let temperature = Math.round((94 - 32) * 5 / 9);
    newStory = newStory.replace('94 fahrenheit', temperature + ' centigrade');

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';

  return;
}