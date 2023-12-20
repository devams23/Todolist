function getvalue() {
  // Retrieve values from the form
  
  const taskvalue = document.getElementById("taskid").value;

  // Create a new li element
  const li = document.createElement("li");
  var ul = document.getElementById("todo-list");
  var children = ul.children.length + 1
  // Set the content of the li element with the form values
  li.innerHTML = `<strong>${taskvalue}</strong> <button onclick = remove(event) class="delete">Done</button>`;

  // Append the li element to the ul with id "resultList"
  li.setAttribute("id", "element" +children);
  document.getElementById("todo-list").appendChild(li);
  // Optional: Clear the form values
  document.getElementById("taskid").value = "";

} 
function remove(event){
// Get a reference to the target element that was clicked
// Get a reference to the parent <li> element
const listItem = event.target.closest('li');

// Check if the parent <li> element exists
if (listItem) {
    // Remove the entire <li> element
    listItem.remove();
}
}
