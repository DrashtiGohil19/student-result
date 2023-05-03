import logo from './logo.svg';
import './App.css';
import { useState } from "react"


function App() {

  const [inputarr, setinputarr] = useState([])
  const [input, setinput] = useState({
    name: "",
    rollnum: "",
    sub1: "",
    sub2: "",
    sub3: "",
    sub4: "",
    sub5: "",
  })
  function change(e) {
    setinput({ ...input, [e.target.name]: e.target.value })
  }
  let { name, rollnum, sub1, sub2, sub3, sub4, sub5 } = input

  function handler() {

    var total = parseFloat(sub1) + parseFloat(sub2) + parseFloat(sub3) + parseFloat(sub4) + parseFloat(sub5)
    var pr = parseFloat(total*100/500)
    var min = Math.min(sub1, sub2, sub3, sub4, sub5)
    var max = Math.max(sub1, sub2, sub3, sub4, sub5)
    var grade

    if (pr > 35) {
      grade = "Pass"
    } else {
      grade = "Fail"
    }

    setinputarr([...inputarr, { name, rollnum, sub1, sub2, sub3, sub4, sub5, total, pr, min, max, grade }])
    setinput({ name: "", rollnum: "", sub1: "", sub2: "", sub3: "", sub4: "", sub5: "" })
  }

  const delethandler = (index) => {
    const arrdata = inputarr.splice(index,1);
    const newlist = inputarr.filter((index)=>index !== arrdata)

    // newlist.pop()
    setinputarr(newlist)

  //  setinputarr(newlist)
  }

  return (

    <div className="">

      Name : <input type={'text'} value={input.name} name='name' onChange={change}></input><br></br><br></br>
      Roll Num : <input type={'text'} value={input.rollnum} name='rollnum' onChange={change}></input><br></br><br></br>
      Subject1 : <input type={'text'} value={input.sub1} name='sub1' onChange={change}></input><br></br><br></br>
      Subject2 : <input type={'text'} value={input.sub2} name='sub2' onChange={change}></input><br></br><br></br>
      Subject3 : <input type={'text'} value={input.sub3} name='sub3' onChange={change}></input><br></br><br></br>
      Subject4 : <input type={'text'} value={input.sub4} name='sub4' onChange={change}></input><br></br><br></br>
      Subject5 : <input type={'text'} value={input.sub5} name='sub5' onChange={change}></input><br></br><br></br>

      <button onClick={handler}>GET RESULT</button><br></br><br></br>

      <table border={'2px solid'} cellPadding='10px'>
        <tr>
          <td rowSpan={2}>Name</td>
          <td rowSpan={2}>Roll Num</td>
          <td>Subject1</td>
          <td>Subject2</td>
          <td>Subject3</td>
          <td>Subject4</td>
          <td>Subject5</td>
          <td rowSpan={2}>Total</td>
          <td rowSpan={2}>Minimum</td>
          <td rowSpan={2}>Maximum</td>
          <td rowSpan={2}>Parcentage</td>
          <td rowSpan={2}>Grade</td>
          <td rowSpan={2}>Delet</td>
        </tr>
        <tr>
          <td colSpan={5}>Marks out of 100</td>
        </tr>
        {
          inputarr.map((item)=>{
            return(
              <tr>
                <td>{item.name}</td>
                <td>{item.rollnum}</td>
                <td>{item.sub1}</td>
                <td>{item.sub2}</td>
                <td>{item.sub3}</td>
                <td>{item.sub4}</td>
                <td>{item.sub5}</td>
                <td>{item.total}</td>
                <td>{item.min}</td>
                <td>{item.max}</td>
                <td>{item.pr}</td>
                <td>{item.grade}</td>
                <td><button onClick={delethandler}>Delet</button></td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default App;
