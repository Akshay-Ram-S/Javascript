const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Load tasks from localStorage
const loadTasks = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.innerHTML = "";
  tasks.forEach((task) => createTaskElement(task));
};

// Save tasks to localStorage
const saveTasks = () => {
  const tasks = [];
  document.querySelectorAll("li").forEach((li) => {
    const task = {
      text: li.querySelector(".task-text").innerText,
      completed: li.classList.contains("completed"),
    };
    tasks.push(task);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Create a task element
const createTaskElement = (task) => {
  const li = document.createElement("li");
  li.classList.toggle("completed", task.completed);

  const taskText = document.createElement("span");
  taskText.classList.add("task-text");
  taskText.innerText = task.text;

  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.addEventListener("click", () => editTask(li, taskText));

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => removeTask(li));

  const toggleButton = document.createElement("button");
  toggleButton.innerText = task.completed ? "Undo" : "Complete";
  toggleButton.addEventListener("click", () => toggleTaskCompletion(li));

  li.appendChild(taskText);
  li.appendChild(toggleButton);
  li.appendChild(editButton);
  li.appendChild(deleteButton);

  taskList.appendChild(li);
};

// Add a new task
addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    createTaskElement({ text: taskText, completed: false });
    saveTasks();
    taskInput.value = "";
  }
});

// Remove a task
const removeTask = (li) => {
  li.remove();
  saveTasks();
};

// Edit a task
const editTask = (li, taskText) => {
  const newText = prompt("Edit task:", taskText.innerText);
  if (newText !== null && newText.trim() !== "") {
    taskText.innerText = newText;
    saveTasks();
  }
};

// Toggle task completion
const toggleTaskCompletion = (li) => {
  li.classList.toggle("completed");
  saveTasks();
};

// Initial load of tasks
loadTasks();
