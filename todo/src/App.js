import './App.css';

function App() {
  //appending childern in other places delets the child in its original place, which works fine and is needed in this project
  //that is why there was no need to clone the childern and appending the clone of them in the new place
  function add(){
    //did not work as class but only as id....!!!
    let input = document.getElementById("input");//bug by entering only number. Div is expanding out of nothing, auto scrollbar did not solve the problem
    //check empty input
    //here better condition (i.e. if input is only spaces) needed! / solution here using REGEX
    if(input.value === undefined || !input.value.replace(/\s/g, '').length){
        alert("enter text first!");
    }else{ //else needed to prevent adding empty strings
      //adding input to ol
      //creating new li
      let item = document.createElement("li");
      item.setAttribute("class","item");
      //creating text : had to create new element to make it child of item
      let text = document.createElement("p");
      text.setAttribute("id","text");
      text.appendChild(document.createTextNode(input.value));
      //add to item 
      item.appendChild(text);
      //getting ol
      let todoList = document.getElementById("todo-list")
      todoList.appendChild(item);
      //creating delete and done button and edit
      //done
      let doneBtn = document.createElement("button");
      doneBtn.setAttribute("id","done-btn");
      doneBtn.appendChild(document.createTextNode("👍"));
      //delete
      let delBtn = document.createElement("button");
      delBtn.setAttribute("id","del-btn");
      delBtn.appendChild(document.createTextNode("❌"));
      //edit
      let editBtn = document.createElement("button");
      editBtn.setAttribute("id","edit-btn");
      editBtn.appendChild(document.createTextNode("edit"));
      //add buttons to item li
      item.appendChild(doneBtn);
      item.appendChild(editBtn);
      item.appendChild(delBtn);
      //setting onclick
      delBtn.onclick = function(){del(item)};
      doneBtn.onclick = function(){addArchive(item)};
      editBtn.onclick = function(){edit(item)};
      //clear input field
      input.value = "";
      
    }
  }
  function del(item){
    if(item.parentNode !== document.getElementById("archive-list") && toDel){
      addArchive(item); //!!! else helped by adding to archive cause without else it would also delete the item after adding it to archive.
      //i expected that the item will not get deleted from todo after getting added to archive but the way appendChild() works (look at explaination at beginning ) saved the functionality
      //adding red color as sign for deleted before doing it
      item.setAttribute("style","background-color:rgba(255, 0, 0, 0.2);");
    }else{
      item.parentNode.removeChild(item);
    }
  }
  let toDel = true; //without this, the element will be added to archive after pressing on "edit"
  function edit(item){
    toDel = false;
    let inputToEdit = item.children[0];
    del(item);
    let input = document.getElementById("input");
    input.value = inputToEdit.innerHTML;
    toDel = true; //set back to true to keep del() working right
  }
  function readd(item){
    let todoList = document.getElementById("todo-list")
    todoList.appendChild(item);
    //delete old buttons. 0 node is input-text
    item.removeChild(item.children[1]);
    item.removeChild(item.children[1]);
    item.setAttribute("style","background-color:none;"); //deleting background color 
    //create new buttons
    //add done btn
    let doneBtn = document.createElement("button"); //create
    doneBtn.setAttribute("id","done-btn");
    doneBtn.appendChild(document.createTextNode("👍"));
    doneBtn.onclick = function(){addArchive(item)}; // set onclick
    item.appendChild(doneBtn); // add to parent (item)
    //add edit btn
    let editBtn = document.createElement("button"); //create
    editBtn.setAttribute("id","edit-btn");
    editBtn.appendChild(document.createTextNode("edit"));
    editBtn.onclick = function(){edit(item)}; // set onclick
    item.appendChild(editBtn); // add to parent (item)
    //add del btn
    let delBtn = document.createElement("button");
    delBtn.setAttribute("id","del-btn");
    delBtn.appendChild(document.createTextNode("❌"));
    delBtn.onclick = function(){del(item)};
    item.appendChild(delBtn);
  }
  function addArchive(item){
    //add green color to item as done status
    item.setAttribute("style","background-color:rgba(37,210,84,0.2);");
    //adding item to ol
    //getting ol
    let archList = document.getElementById("archive-list")
    archList.appendChild(item);
    //delete all buttons to add new ones
    //written three times cause second and third button will become at first postition after deleting the first and second button. 
    item.removeChild(item.children[1]);
    item.removeChild(item.children[1]);
    item.removeChild(item.children[1]);
    //make new buttons.....
    //add redo btn
    let redoBtn = document.createElement("button"); //create
    redoBtn.setAttribute("id","redo-btn"); //set id
    redoBtn.appendChild(document.createTextNode("✏️")); //add text "redo"
    redoBtn.onclick = function(){readd(item)}; // set onclick
    item.appendChild(redoBtn); // add to parent (item)
    //add del btn
    let delBtn = document.createElement("button");
    delBtn.setAttribute("id","del-btn");
    delBtn.appendChild(document.createTextNode("❌"));
    delBtn.onclick = function(){del(item)};
    //add button to item li
    item.appendChild(delBtn);
  }

  return (
    <div className="main-container">
      {/* //=======================TODO=============================== */}
      <div className="todo-container">
        <h1 id="todo-title">TODO</h1>
        <div id="todo-content-container">
          <ol id="todo-list"></ol>
        </div>
        <div id="input-container">
            <input id="input" type="text" placeholder="what to do🤔"></input>
            <div id="add-btn-container">
              <button id="add-btn" type="button" onClick={add}>➕</button>
            </div>
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
      
