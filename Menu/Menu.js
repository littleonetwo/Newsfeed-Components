/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/*

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.

*/

function createMenu(info){


  let newMenu1 = document.createElement('div');
  let newMenu2 = document.createElement('ul');

  newMenu1.classList.add('menu');

  let final = newMenu1;
  let menu = newMenu2;

  let count = 0;

  while(count < info.length){
    let newMenu3 = document.createElement('li');
    newMenu3.textContent = info[count];
    menu.appendChild(newMenu3);
    count ++;
  };



  final.appendChild(menu);



  return final;

};


let newMenu = createMenu(menuItems);


menuSelect = document.querySelector('.menu-button');
header = document.querySelector('.header');
header.appendChild(newMenu);



menuSelect2 = document.querySelector('.menu');

menuSelect.addEventListener('click', (e)=>{
  menuSelect2.classList.toggle('menu--open');

});
