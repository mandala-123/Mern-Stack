import {useState,useEffect} from "react";
import Parent from "./Parent.jsx";
import UserContext from "./UserContext.jsx";
import "./Count.css";
function Count(){
    const[count,setCount]=useState(0);
    const[Mobile,BuyMobile]=useState("moto");
    const[dress,birthdaydress]=useState("dress");
    const[lunch,biryani]=useState("biryani");
    return(
        <>
        <h1 className="count">Count:{count}</h1>
        <div className="counting">
        <button onDoubleClick={() => setCount(count + 1)}>+1</button>
        <button onDoubleClick={() => setCount(count - 1)}>-1</button>
        
        
        <h2>Mobile:{Mobile}</h2>
        <button onClick={() => BuyMobile("iphone")}>Buy Mobile</button>
        <h2>Dress:{dress}</h2>
        <button onClick={() => birthdaydress("birthday dress ")}>Buy Birthday Dress</button>
        <h2>Lunch:i ate my {lunch} on lunch</h2>
        <input type="text" placeholder="enter your lunch" value={lunch} onChange={(e)=>biryani(e.target.value)}/>
        
        </div>  
        <UserContext.Provider value="poojitha">
            <Parent />
        </UserContext.Provider>
        
        </>
    );

    
}
export default Count;