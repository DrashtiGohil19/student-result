import { useState } from "react"

function Practice(){

    const[input,setinput] = useState([])
    const[detail,setdetail] = useState({
        name:"",
        rollnum:""
    })
    
  const change = (e) =>{
    setdetail({...detail,[e.target.value]:e.target.value})
    console.log(detail)
  }

  let {name,rollnum} = detail;
  const changeh = () =>{
    setdetail([...input,{name,rollnum}])
    console.log(input)
  }

    return(
        <>
            <input type={'text'} name='name' value={detail.name} onChange={change}></input>
            <input type={'text'} name='rollnum' value={detail.rollnum} onChange={change}></input>
        </>
    )
}
export default Practice