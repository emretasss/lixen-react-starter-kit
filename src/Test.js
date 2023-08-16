
import { useEffect,useState } from "react"


 function Test ()
{
    const[posta,postb]=useState(false)
    const [post,setpost]=useState(1)



    const [count,setCount]=useState(0)
    useEffect(() => {console.log("compenent ilk yüklendiğinde")
    
    return()=>{console.log("destroy")}
    
    },[])



useEffect(() => {


fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
.then(res=> res.json())
.then(data =>postb(data))

},[post])

useEffect(() => {console.log("compenent render oldu")

})

    return(
<div className="App">
    <h2>{count}</h2>
        <button onClick={()=> setCount( count=>count +1) } >arttır</button>

        <h2>{post}</h2>
        {posta && JSON.stringify(posta)}
        <button onClick={()=> setpost( post=>post +1) } >diğer konuyu getir</button>

    test compenent yapı.
</div>


    )
    }




export default Test
