const toDoForm =document.getElementById("todo-form");
const toDoList =document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY ="todos";
let toDos = [];
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    /* localStorage.setItem("test", toDos); */
/*     console.log(localStorage.getItem("contents"), localStorage.getItem("test"));
 */}
function deleteToDo(event){
  const li =(event.target.parentElement);
  li.remove();
  toDos =toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  const json_toDos = JSON.stringify(toDos);
  localStorage.setItem(TODOS_KEY, json_toDos);
}
/* Element의 id 속성값은 String타입 배열안의 객체안의 id타입은 number */
//delte Todo
function handleToDoSubmit(event){
 event.preventDefault();
 const newTodo = toDoInput.value;
 toDoInput.value ="";
 const newTodpObj ={
    text:newTodo,
    id:Date.now(),
 }
 toDos.push(newTodpObj);
 paintToDo(newTodpObj);
 saveToDos();
}
//submit Todo
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id =newTodo.id;
    const span =document.createElement("span");
    span.innerText =newTodo.text;
    const button =document.createElement("button");
    button.innerText="Delete";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
   toDoList.appendChild(li);
}
//create Todo

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos =localStorage.getItem(TODOS_KEY);
if(savedToDos != null){
    const parsedToDos =JSON.parse(savedToDos);
    toDos = parsedToDos; 
    parsedToDos.forEach(paintToDo);
}
