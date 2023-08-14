import { useState } from "react"




function Tab({ children ,activeTab}) {



//usestate kullanım
const [active, setactive]= useState(activeTab);

    return (
        <div>
            <nav>
                {children.map((tab, index) => <button 
                onClick={
                ()=> setactive(index)  }

              
                
                
                className= {active === index ? "bg-danger" : "bg-warning"}
                key={index}>{tab.props.title}</button>)}
            </nav>
            {children}
        </div>


    )
}


Tab.Panel = function ({ children, title }) {
 
    return (

        <div>{children} {title} </div>



    )

}
export default Tab