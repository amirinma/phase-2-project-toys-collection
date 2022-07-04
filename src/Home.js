import React, { useState } from "react";
import Favorite from "./Favorite"


function Home({toysList, setToyslist}){
    const [moveToy, setMoveToy] = useState("")
        
    function toDelete(id){
        const upDatedToys = toysList.filter(toy => toy.id !== id)
        setToyslist(upDatedToys)
    }

    function dbDelete(number){

        fetch(`http://localhost:3500/toys/${number}`, {
            method: "DELETE"
        })
        toDelete(number)
    }

    function moveToFav(e){
        setMoveToy(e)
    }

    return(
        <div>
            <div>{toysList.map((toy)=>{
                return(
                    <div key={toy.id} id="toy-id">
                        <h1 id="toy-head">{toy.name}</h1>
                        <img id="toy-image" src={toy.image}/>
                        <h3 id="toy-price">Price ${toy.price}.00</h3>
                        <button id="toy-button" onClick={()=>dbDelete(toy.id)}>Delete Toy</button>
                        <button id="toy-button" onClick={()=>moveToFav(toy)}>Like</button>
                    </div>
                )
            })}
            </div>
            <Favorite toyMoved = {moveToy} setMoveToy={setMoveToy}/>
        </div>
        
    )
}
export default Home
