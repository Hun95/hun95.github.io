import React, {useState} from react

const test =()=>{
    const [appState, changeAppState] = useState({
        activeObject : null,
        object: [{id:1}, {id:2}, {id:3}, {id:4}]
    })

    return(
        <div>
        { appState.object.map((element,index)=>(
            <div key={index} className={} onClick={}>
            
            </div>
        ))}
        </div>
    )
}