function add_item() {
    let item = document.getElementById("box");
    let list_item = document.getElementById("List_items");
    
    if (item.value !== "") {
        let make_li = document.createElement("li");
        make_li.appendChild(document.createTextNode(item.value));

        // Add a delete button to each list item
        let deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Delete"));
        deleteButton.className = "delete-btn";
        deleteButton.onclick = function () {
            this.parentElement.remove();
        };

        make_li.appendChild(deleteButton);

        list_item.appendChild(make_li);
        item.value = "";
    } else {
        alert("No new tasks to add to the list");
    }
}
