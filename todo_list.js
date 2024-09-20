
let todoin = document.getElementById("taskid");
let newtodo = document.getElementById("tasklist");
let btn = document.getElementById("add");

btn.addEventListener('click', ListAdd);

function ListAdd() {
    if (todoin.value.length === 0) {
        alert("Enter a task to do");
    } else {
        // Create the task element
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        // Create the span for the task text
        const taskSpan = document.createElement('span');
        taskSpan.classList.add('work');
        taskSpan.innerText = todoin.value;

        const taskcheck = document.createElement('button')
        taskcheck.classList.add('check');
        taskcheck.innerHTML=`<span class="material-symbols-outlined">check_box_outline_blank</span>`
       


        // Create the edit button
        const editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.innerHTML = `<span class="material-symbols-outlined">edit</span>`;

        // Create the delete button
        const delBtn = document.createElement('button');
        delBtn.classList.add('del');
        delBtn.innerHTML = `<span class="material-symbols-outlined">delete</span>`;

        // Append elements to taskDiv
        taskDiv.appendChild(taskcheck)
        taskDiv.appendChild(taskSpan);
        taskDiv.appendChild(editBtn);
        taskDiv.appendChild(delBtn);
        newtodo.appendChild(taskDiv);

        // Clear the input field
        todoin.value = "";

        // Handle delete button click
        delBtn.onclick = function() {
            taskDiv.remove();
        };


        
        editBtn.onclick = function() {
            // Create an input field for editing
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.name="replace"
            editInput.value = taskSpan.innerText;
            editInput.classList.add('edit-input');
            
            // Replace the taskSpan with the input field
            taskDiv.replaceChild(editInput, taskSpan);
            editInput.focus();
        
            // Handle when the input loses focus
            // editInput.onblur = function() {
            //     taskSpan.innerText = editInput.value; // Update taskSpan text
            //     taskDiv.replaceChild(taskSpan, editInput);
            //     // Replace input with updated span
            // };
           
        
            // Handle pressing Enter key
            editInput.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    taskSpan.innerText = editInput.value; // Update taskSpan text
                    taskDiv.replaceChild(taskSpan, editInput); // Replace input with updated span
                }
            });
        
            // Optionally, handle pressing Escape to cancel editing
            // editInput.addEventListener('keydown', function(event) {
            //     if (event.key === 'Escape') {
            //         taskDiv.replaceChild(taskSpan, editInput); // Cancel editing
            //     }
            // });
        };
        
        
        taskcheck.onclick=function(){
            if(taskcheck.innerHTML.includes("check_box_outline_blank")){
                taskcheck.innerHTML=`<span class="material-symbols-outlined">check_box</span>`
                taskSpan.style.textDecorationLine='line-through'
                taskcheck.style.color="orange"
                taskSpan.style.opacity='0.4'
                }
            else{
                taskcheck.innerHTML=`<span class="material-symbols-outlined">check_box_outline_blank</span>`
                taskSpan.style.textDecorationLine='none'
                taskcheck.style.color="yellow"
                taskSpan.style.opacity='1'
            }
        }

    }
}