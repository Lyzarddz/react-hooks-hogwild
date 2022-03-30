import React, {useState} from "react";


function HogSort({hogs}) {
    const [greased, setGreased ]= useState(false);
   
 

    function handleClickFilter(){
        const filterHogs = hogs.filter(hog => hog.greased === true)
        setGreased(filterHogs)   
    }



        return (
            <div>
                <button onClick={handleClickFilter}>{ greased ? "All Hogs" : "Greased Hogs Only"}</button>
            </div>

        )

        }

export default HogSort; 