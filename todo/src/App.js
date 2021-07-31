import './App.css';

function App() {

  //appending childern in other places delets the child in its original place, which works fine and is needed in this project
  //that is why there was no need to clone the childern and appending the clone of them in the new place
  function add(){
    //did not work as class but only as id....!!!
    let input = document.getElementById("input");
    //check empty input
    //here better condition (i.e. if input is only spaces) needed! / solution here using REGEX
    if(input.value === undefined || !input.value.replace(/\s/g, '').length){
        alert("enter text first!");
    }else{ //else needed to prevent adding empty strings
      //adding input to ol
      //creating new li
      let item = document.createElement("li");
      item.setAttribute("class","item");
      item.appendChild(document.createTextNode(input.value));
      //getting ol
      let boardList = document.getElementById("board-list")
      boardList.appendChild(item);
      //creating delete and todo button
      //todo
      let todoBtn = document.createElement("button");
      todoBtn.setAttribute("id","todo-btn");
      todoBtn.appendChild(document.createTextNode("todo"));
      //delete
      let delBtn = document.createElement("button");
      delBtn.setAttribute("id","del-btn");
      delBtn.appendChild(document.createTextNode("delete"));
      //add buttons to item li
      item.appendChild(todoBtn);
      item.appendChild(delBtn);
      //setting onclick
      delBtn.onclick = function(){del(delBtn.parentNode)};
      todoBtn.onclick = function(){addTodo(item)};
      //clear input field
      input.value = "";
    }
  }
  function del(item){
    item.parentNode.removeChild(item);
    if(item.parentNode !== document.getElementById("archive-list")){
      addArchive(item); //!!! item is keeping his own old parent, why????. 2.problem: index of btns: solution to delete all buttons by moving and create new needed buttons.
      console.log("deleted")
    }
  }
  function addTodo(item){
    //adding item to ol
    //getting ol
    let todoList = document.getElementById("todo-list")
    todoList.appendChild(item);
    
    //changing todo-btn to done-btn
    item.removeChild(item.children[0]); //delete todo button
    let newButton = document.createElement("button"); //create new button 
    newButton.setAttribute("id","done-btn");
    newButton.appendChild(document.createTextNode("done"));
    item.appendChild(newButton); //add new button "done" to added item
    //setting onclick done-btn
    newButton.onclick = function(){addArchive(newButton.parentNode)}
  }
  //stupid! the only difference here is the child-index. i could use the exisiting addTodo() itself but changing the button is needed
  function readd(item){
    let todoList = document.getElementById("todo-list")
    todoList.appendChild(item);
    //changing redo-btn to done-btn
    item.removeChild(item.children[1]); //delete redo button
    let newButton = document.createElement("button"); //create new button 
    newButton.setAttribute("id","done-btn");
    newButton.appendChild(document.createTextNode("done"));
    item.appendChild(newButton); //add new button "done" to added item
    //setting onclick done-btn
    newButton.onclick = function(){addArchive(newButton.parentNode)}
  }
  function addArchive(item){
    //adding item to ol
    //getting ol
    let archList = document.getElementById("archive-list")
    archList.appendChild(item);
    item.removeChild(item.children[1]); //delete done button
    //redo btn
    let newButton = document.createElement("button"); //create new button 
    newButton.setAttribute("id","redo-btn");
    newButton.appendChild(document.createTextNode("redo"));
    item.appendChild(newButton); //add new button "done" to added item
    //setting onclick done-btn
    newButton.onclick = function(){readd(newButton.parentNode)}
  }
  return (
    <div className="main-container">
      {/* //=======================BOARD=============================== */}
      <div className="board-container">
        <h1 id="board-title">BOARD</h1>
        <div id="board-content-container">
            <ol id="board-list">
                
            </ol>
        </div>
        <div id="input-container">
            <input id="input" type="text" placeholder="what to do🤔"></input>
            <button id="add-btn" type="button" onClick={add}>add</button>
        </div>
      </div>
      {/* //=======================TODO=============================== */}
      <div className="todo-container">
        <h1 id="todo-title">TODO</h1>
        <div id="todo-content-container">
          <ol id="todo-list"></ol>
        </div>
      </div>
      {/* //========================ARCHIVE============================== */}
      <div className="archive-container">
        <h1 id="archive-title">ARCHIVE</h1>
        <div id="archive-content-container">
          <ol id="archive-list"></ol>
        </div>
      </div>
      {/* //====================================================== */}
    </div>
  );
}

export default App;
