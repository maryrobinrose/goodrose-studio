 // Get the draggable div element
 var draggableDiv = document.getElementById('dragme');

 // Variables to store the starting position of the div
 var startX, startY;

 // Function to handle the mousedown event
 function startDrag(e) {
   // Store the starting position of the div
   startX = e.clientX - draggableDiv.offsetLeft;
   startY = e.clientY - draggableDiv.offsetTop;

   // Attach event listeners for mousemove and mouseup events
   document.addEventListener('mousemove', dragDiv);
   document.addEventListener('mouseup', stopDrag);
 }

 // Function to handle the mousemove event
 function dragDiv(e) {
   // Calculate the new position of the div
   var newPosX = e.clientX - startX;
   var newPosY = e.clientY - startY;

   // Set the new position of the div
   draggableDiv.style.left = newPosX + 'px';
   draggableDiv.style.top = newPosY + 'px';
 }

 // Function to handle the mouseup event
 function stopDrag() {
   // Remove event listeners for mousemove and mouseup events
   document.removeEventListener('mousemove', dragDiv);
   document.removeEventListener('mouseup', stopDrag);
 }

 // Attach event listener for mousedown event on the draggable div
 draggableDiv.addEventListener('mousedown', startDrag);