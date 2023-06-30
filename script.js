var draggableElement = document.querySelector('.draggable-element');
var isDragging = false;
var offsetX, offsetY;

draggableElement.addEventListener('mousedown', function(event) {
  isDragging = true;
  offsetX = event.offsetX;
  offsetY = event.offsetY;
});

document.addEventListener('mousemove', function(event) {
  if (isDragging) {
    var x = event.clientX - offsetX;
    var y = event.clientY - offsetY;
    draggableElement.style.left = x + 'px';
    draggableElement.style.top = y + 'px';
  }
});

document.addEventListener('mouseup', function() {
  isDragging = false;
});




// // Get all div elements with the specified ID
// let divs = document.querySelectorAll("[id^='dragme']");

// // Make each DIV element draggable
// divs.forEach(function(elmnt) {
//   dragElement(elmnt);
// });

// function dragElement(elmnt) {
//   let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     // If present, the header is where you move the DIV from
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     // Otherwise, move the DIV from anywhere inside the DIV
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // Get the mouse cursor position at startup
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // Call a function whenever the cursor moves
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // Calculate the new cursor position
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // Set the element's new position
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     // Stop moving when the mouse button is released
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }
