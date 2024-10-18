const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Event listener untuk tombol "Add"
addBtn.addEventListener('click', addTodo);

// Fungsi untuk menambah item baru
function addTodo() {
    const taskText = todoInput.value.trim();
    if (taskText === '') return;

    const listItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.innerText = taskText;
    
    // Buat tombol edit
    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.classList.add('edit');
    
    // Buat tombol delete
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    
    // edit item
    editBtn.addEventListener('click', function() {
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.value = taskSpan.innerText;

        inputField.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                taskSpan.innerText = inputField.value;
                listItem.replaceChild(taskSpan, inputField);
            }
        });

        listItem.replaceChild(inputField, taskSpan); 
        inputField.focus();
    });
    
    // hapus item
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(listItem);
    });
    
    // Tambahkan elemen ke dalam list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);

    // Tambahkan list item ke ul
    todoList.appendChild(listItem);

    // Kosongkan input
    todoInput.value = '';
}

// Event listener untuk menambahkan dengan enter
todoInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});
