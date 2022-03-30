import React, {useState} from "react";


function HogList({hogs}){

    const[clicked, setClicked]= useState(false)

    function handleClick(){
       setClicked(!clicked)
    }

    const displayHogs = hogs.map((hog) => {
        return (    
    <div key={hog.name}>
        <p></p>
        <h1>{hog.name}</h1>
        <img src={hog.image} alt={hog.name} onClick={handleClick} />
        {clicked ? <p>Specialty: {hog.specialty} </p> : null}
        {clicked ? <p>Weight: {hog.weight} </p> : null}
        {clicked ? <p>Greased? {hog.greased ? "Yes" : "No" }</p> : null}
        {clicked ?<p>Highest Medal Achieved: {hog["highest medal achieved"]} </p> : null}
        <p>-----------------------------------------------------------------------------------------</p>
    </div>
        )
    })

    return(
      <div>
          {displayHogs}
    
      </div>
        
    
    )


}

export default HogList;