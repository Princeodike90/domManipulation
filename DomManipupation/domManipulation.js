document.addEventListener("DOMContentLoaded", function() {
    const itemList = document.getElementById("item-list");
    const addItemForm = document.getElementById("add-item-form");
    const newItemInput = document.getElementById("new-item");

    // Function to add a new item to the list
    function addItem(event) {
        event.preventDefault();
        const newItemText = newItemInput.value.trim();
        if (newItemText !== '') {
            const newItem = document.createElement("li");
            newItem.textContent = newItemText;
            newItem.addEventListener("click", changeColor);
            itemList.appendChild(newItem);
            newItemInput.value = ''; 
        }
    }

    // Function to change the color of an item
    function changeColor(event) {
        const randomColor = getRandomColor();
        event.target.style.backgroundColor = randomColor;
    }

    //function to generate a random color
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Event listener to add a new item
    addItemForm.addEventListener("submit", addItem);
});