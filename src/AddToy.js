import {useState} from "react"


function AddNewToy({currentToys, setToyslist}){

    const [newToy, SetNewToy] = useState("")
    const [newToyLink, SetNewToyLink] = useState('')
    const [newToyPrice, SetNewToyPrice] = useState('')

    function hundleSubmit(event){
        event.preventDefault()
        console.log(newToy)
        const addNew = {
            id: "",
            name: newToy,
            image: newToyLink, 
            price: newToyPrice
        }
        fetch("http://localhost:3500/toys",{
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(addNew)
        } )
        .then((e)=>e.json())
        .then((data) => setToyslist([...currentToys, data]))
    
        }
    return(
        <form onSubmit={hundleSubmit} id="form">
            <h3 id="add-head">Add New Toy:</h3>
            <label className="add-label">Toy Name:</label>
            <input className="add-input" type='text'id="toyname" value={newToy} onChange={e=> SetNewToy(e.target.value)}></input>
            <label >Toy Image:</label>
            <input type='text' value={newToyLink} onChange={e=>SetNewToyLink(e.target.value)}></input>
            <label>Toy Price:</label>
            <input type='text' value={newToyPrice} onChange={e=> SetNewToyPrice(e.target.value)}></input>
            <button type="submit">Add New Toy!</button>
        </form>
    )
}

export default AddNewToy