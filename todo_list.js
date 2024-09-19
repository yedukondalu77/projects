// let todoin=document.getElementById("taskid")
// let newtodo=document.getElementById("tasklist")
// var btn=document.getElementById("add")
// btn.addEventListener('click',ListAdd)

// function ListAdd(){
//     if(todoin.value.length ==0){
//         alert("enter a task to do")
//     }
//     else{
//         newtodo.innerHTML+=`
//         <div class="task">
//         <span id="work">${todoin.value}</span>
//         <button class="edit"><span class="material-symbols-outlined">edit</span></button>
//         <button class="del"><span class="material-symbols-outlined">delete</span></button>
//         </div>`
//         let alltasks=document.querySelectorAll('.del')
//         for(i=0;i<alltasks.length;i++){
//             alltasks[i].onclick=function(){
//                  console.log(this)
//                  console.log(this.parentNode)
//                  this.parentNode.remove()
//             }
//         }
//         todoin.value=""
//         let edit=document.querySelectorAll('.edit')
//         console.log(edit)
//         for(e=0;e<edit.length;e++){
//             edit[e].onclick=function(){
//                 edit.innerHTML=todoin.value
//             }
//         }

//     }
// }
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

        // Create the edit button
        const editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.innerHTML = `<span class="material-symbols-outlined">edit</span>`;

        // Create the delete button
        const delBtn = document.createElement('button');
        delBtn.classList.add('del');
        delBtn.innerHTML = `<span class="material-symbols-outlined">delete</span>`;

        // Append elements to taskDiv
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

        // Handle edit button click
        editBtn.onclick = function() {
            // Set the input value to the current task text
            todoin.value = taskSpan.innerText;

            // Remove the task (optional)
            taskDiv.remove();

            // Focus back on the input field
            todoin.focus();
        };
    }
}