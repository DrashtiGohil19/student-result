var name = "test";
var email = "test @gmail.com";
const obj = {
    name: "cdmi",
    email: "cdmi@gmail.com"
}
var arr = [1,2,3,4,5,6,7,8];

function Practice(){
    return(
        <div>
            <h1>{name}</h1>
            <h1> {obj.name} </h1>
            <h1>{obj.email}</h1>

            <ul>
                {
                    arr.map((item,k)=>{
                        return(
                            <li>
                                {item} = {k}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Practice