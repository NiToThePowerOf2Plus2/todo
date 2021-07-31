import "../css/BoardStyle.css"
export default function Board(){
    
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
            let list = document.getElementById("list")
            list.appendChild(item);
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
            //clear input field
            input.value = "";
        }
    }
    function del(item){
        let list = document.getElementById("list")
        list.removeChild(item);
    }
    return(
        <div id="main-container">
            <h1 id="title">BOARD</h1>
            <div id="content-container">
                <ol id="list">
                    
                </ol>
            </div>
            <div id="input-container">
                <input id="input" type="text" placeholder="what to do🤔"></input>
                <button id="add-btn" type="button" onClick={add}>add</button>
            </div>
        </div>
    );
}