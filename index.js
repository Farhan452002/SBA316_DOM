// Cache at least one element using selectElementById.  *CHECK : Line 55*

// Cache at least one element using querySelector or querySelectorAll.

// Use the parent-child-sibling relationship to navigate between elements at least once 
// (firstChild, lastChild, parentNode, nextElementSibling, etc.).

// Iterate over a collection of elements to accomplish some task.

// Create at least one element using createElement.

// Use appendChild and/or prepend to add new elements to the DOM.

// Modify the HTML or text content of at least one element in response to 
// user interaction using innerHTML, innerText, or textContent.

// Modify the style and/or CSS classes of an element in response 
// to user interactions using the style or classList properties.

// Modify at least one attribute of an element 
// in response to user interaction.

// Register at least two different event listeners 
// and create the associated event handler functions.

// Use at least two Browser Object Model (BOM) properties or methods. *CHECK : Line 45, 50*

// Include at least one form and/or input with HTML attribute validation.

// Include at least one form and/or input with DOM event-based validation.
// (This can be the same form or input as the one above, but should include
// event-based validation in addition to the HTML attribute validation.)

// Ensure that the program runs without errors (comment out things that do not work, 
// and explain your blockers - you can still receive partial credit).

// Commit frequently to the git repository.

// Include a README file that contains a description of your application.

// Level of effort displayed in creativity, presentation, 
// and user experience.

function newWindow() {
    myWindow = window.open(
      "https://www.kalamullah.com/Books/Mukhtasar%20al-Quduri.pdf",
      "Quduri",
      "width=800, height=400, resizable=yes, scrollbars=yes, location=yes"
    );
    myWindow.focus();
}
function closeWindow() {
    myWindow.close();
}
document.getElementById("openWindowBtn").addEventListener("click", newWindow);
document.getElementById("closeWindowBtn").addEventListener("click", closeWindow);

const rows = 13;
const cols = 10;

const tableDiv = document.getElementById("tableDiv");
const tableEl = document.createElement("table");

for (let r = 0; r < rows; r++) {
  const tr = document.createElement("tr");
  for (let c = 0; c < cols; c++) {
    const td = document.createElement("td");
    if(r>3&&r<9&&c==0){
      td.style.backgroundColor = "Red";
    }
    if(r>4&&r<8&&c==1){
      td.style.backgroundColor = "Red";
    }
    if(r==6&&c==2){
      td.style.backgroundColor = "Red";
    }
    tr.appendChild(td);
  }
  if(r<4){
    tr.style.backgroundColor = "Black";
  }
  if(r>8){
    tr.style.backgroundColor = "Green";
  }
  tableEl.appendChild(tr);
}

tableDiv.appendChild(tableEl);