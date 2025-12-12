const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");


addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text === "") return;

    addTask(text);
    saveTasks();
    taskInput.value = "";`
});
`

function addTask(text, completed = false) {
    const li = document.createElement("li");
    if (completed) li.classList.add("completed");

    li.innerHTML = `
        <span>${text}</span>
        <div class="btns"> 
            <button class="checkBtn">✔</button>
            <button class="delBtn">❌</button>
        </div>
    `;

    
    li.querySelector(".checkBtn").addEventListener("click", () => {
        li.classList.toggle("completed");
        saveTasks();
    });

    
    li.querySelector(".delBtn").addEventListener("click", () => {
        li.remove();
        saveTasks();
    });

    taskList.appendChild(li);
}


function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({
            text: li.querySelector("span").textContent,
            completed: li.classList.contains("completed")
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function loadTasks() {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    saved.forEach(task => addTask(task.text, task.completed));
}

loadTasks(); 
