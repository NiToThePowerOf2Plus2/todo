import "../css/BoardStyle.css"
export default function Board(){
    
    return(
        <div className="main-container">
            <h1 className="title">BOARD</h1>
            <div className="content-container"></div>
            <div className="input-container">
                <input className="input" type="text" placeholder="what to do🤔"></input>
                <button className="add-btn" type="button">add</button>
            </div>
        </div>
    );
}