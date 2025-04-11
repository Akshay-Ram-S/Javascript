const listItems = document.querySelectorAll("#draggable-list li");
let draggedItem = null;

listItems.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    draggedItem = item;
    item.classList.add("dragging");
  });

  item.addEventListener("dragend", () => {
    draggedItem = null;
    item.classList.remove("dragging");
  });

  item.addEventListener("dragover", (e) => {
    e.preventDefault();
    item.classList.add("over");
  });

  item.addEventListener("dragleave", () => {
    item.classList.remove("over");
  });

  item.addEventListener("drop", () => {
    item.classList.remove("over");

    if (draggedItem && draggedItem !== item) {
      const list = document.getElementById("draggable-list");
      const draggedIndex = Array.from(list.children).indexOf(draggedItem);
      const targetIndex = Array.from(list.children).indexOf(item);

      if (draggedIndex < targetIndex) {
        list.insertBefore(draggedItem, item.nextSibling);
      } else {
        list.insertBefore(draggedItem, item);
      }
    }
  });
});
