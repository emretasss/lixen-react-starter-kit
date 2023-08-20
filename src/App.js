
import Test from  "./Test.js"
import styles from "./App.module.css"
import {Title} from  "./components"
import Abc from "./Bootstrap.js"
import "./style.scss"
import Buttonprops from "./components/button.js"
import Tab from "./components/tab.js"
import { useState } from "react"
function App() {
const todos=['todo1','todo2','todo3']
const [show,setshow]=useState(false)
  return (
    console.log(styles),
 <div className={styles.App} >
      <>
      <div style={{padding:20}}>
      <Tab activeTab={0}>
        <Tab.Panel  title="profil">tab panel1</Tab.Panel>
        <Tab.Panel title="hakkında">tab panel2</Tab.Panel>
        <Tab.Panel title="Ayarlar" >tab panel3</Tab.Panel>
      </Tab>
  
      </div>
        <img src="/logo192.png" alt="" /> 
      <Title className="App" > {process.env.NODE_ENV} </Title>
      <Title className="App" theme="dark"> abcjkhjkh </Title>
      <Abc/>
      <span className="span">
      <h1>  deneme scss </h1>
      </span>
      {
        todos.map((todo,index) =>
          (<li key={index}>
            {todo}
          </li>)          
          )
      }
        <div style={{padding:20 ,borderColor:"yellow"}}>
        <Buttonprops  text="hello" variant="warning"  />
        <Buttonprops  text="hello"   variant="success"  />
        <Buttonprops  text="hello"   />
        </div>
      </>
      <xxx/>  
     <button
     onClick={()=> setshow(show=>!show) }

     className="bg-primary rounded text-white">  {show ? "gizle" :"göster"} </button> 
     {show &&      <Test />}
   </div>
  );
}

export default App;
