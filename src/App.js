
import Test from  "./Test.js"
import styles from "./App.module.css"
import {Title} from  "./components"

import Abc from "./Bootstrap.js"

import "./style.scss"



function App() {
const todos=['todo1','todo2','todo3']


  return (
    console.log(styles),
 <div className={styles.App} >

      <>
        <img src="/logo192.png" alt="" /> 
      <Title className="App" > {process.env.NODE_ENV} </Title>
      <Title className="App" theme="dark"> abcjkhjkh </Title>

        <Test/>

        
    
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




      </>


     
 
     
   </div>
  );
}

export default App;
