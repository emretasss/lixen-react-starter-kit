
import classNames from "classnames"





function Buttonprops (props ,{children}){
console.log()
return(
<button className={classNames({
"p-4 h-10 bg-secondary text-white  items-center rounded":true,
" bg-success ":props.variant==="success",
" bg-danger ":props.variant==="warning"



})}> {props.text} {props.variant} </button>

)
}

export default Buttonprops