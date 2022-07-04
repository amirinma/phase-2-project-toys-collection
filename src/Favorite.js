import React from "react";

function Favorite({toyMoved, setMoveToy}){
    setMoveToy(toyMoved)
    return(
        <div className="my-fav-toy">
            <h1 id="my-fav-toy-head">--- My Favorite Toy ---</h1>
            <div key={toyMoved.id} id="toy-fav-id">
                <h1 id="toy-fav-head">{toyMoved.name}</h1>
                <img id="toy-fav-image" src={toyMoved.image}/>
         </div>
        </div>

        
    )
}
export default Favorite