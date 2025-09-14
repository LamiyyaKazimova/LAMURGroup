import React ,{ useEffect,useState } from "react";
import { ServiceCartData } from "../../../hooks/AboutData";


export function ServiceContext(){
 const [Data, setData] = useState({});
  const data=ServiceCartData;
   const id=sessionStorage.getItem('serviceid');
   const find=data.find((el)=>el.id===Number(id));
    useEffect(()=>{
    if (!data) return 
     
      
  setData({...find})
    
    },[])


    return(
        <div className="section">
            <div className="section-container">
            <div className="ck-content"  dangerouslySetInnerHTML={{ __html: Data.mainDes }}/>
            </div>
        </div>
    )
}