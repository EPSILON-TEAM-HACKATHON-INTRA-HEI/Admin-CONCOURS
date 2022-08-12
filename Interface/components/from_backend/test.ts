import axios from "axios"
export default async function(){
    const Data=await axios.get("");
    
    return await Data;
}