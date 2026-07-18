import {useContext} from "react";
import UserContext from "./UserContext.jsx";
function GrantChild(){
    const name=useContext(UserContext);
    return <h2>{name}</h2>
}
export default GrantChild;