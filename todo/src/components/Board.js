import "../css/BoardStyle.css"
export default function Board(){
    
    function add(){
        //did not work as class but only as id....!!!
        let input = document.getElementById("input");
        //check empty input
        //here better condition (i.e. if input is only spaces) needed! / solution here using REGEX
        if(input.value === undefined || !input.value.replace(/\s/g, '').length){
            alert("enter text first!");
        }
        //adding input to ol
        //creating new li
        let item = document.createElement("li");
        item.setAttribute("class","item");
        item.appendChild(document.createTextNode(input.value));
        //getting ol
        let list = document.getElementById("list")
        list.appendChild(item);
        //creating delete and archiv button
        let delBtn = document.createElement("button");
        delBtn.setAttribute("id","del-btn");
        delBtn.appendChild(document.createTextNode("delete"));
        let archBtn = document.createElement("button");
        archBtn.setAttribute("id","arch-btn");
        archBtn.appendChild(document.createTextNode("archive"));
        //add buttons to item li
        item.appendChild(delBtn);
        item.appendChild(archBtn);
        //clear input field
        input.value = "";
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