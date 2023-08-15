
import { useEffect,useState } from "react"


 function Test ()
{
    const [count,setCount]=useState(0)
useEffect(() => {console.log("compenent ilk yüklendiğinde")

return()=>{console.log("destroy")}

},[])

useEffect(() => {console.log("compenent render oldu")

})

    return(
<div className="App">
    <h2>{count}</h2>
        <button onClick={()=> setCount( count=>count +1) } >arttır</button>

    test compenent yapı.
</div>


    )
}

export default Test
