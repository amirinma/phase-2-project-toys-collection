import React from "react";

function Compare({toysList}){
    
        const comparedToys = toysList.map((toy) => {
           
            return (
                <div key={toy.id}>
                    <table id="tr-table">
                        <tbody id="tr-name">{toy.name}</tbody>
                        <tbody id="tr-price">${toy.price}</tbody>
                    </table>
                </div>
            )
        } )
    return(
        <div id="compare-div">
        <h2 id="com-hd-id">Compare All Toys!</h2>
        {comparedToys}
        </div>
    )
}
export default Compare