
import { useEffect } from "react"


 function Test ()
{useEffect(() => {console.log("compenent ilk yüklendiğinde")},[])

useEffect(() => {console.log("compenent render oldu")})

    return(
<div className="App">
    test compenent yapı.
</div>


    )
}

export default Test