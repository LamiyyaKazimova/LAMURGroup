
import { ServiceCartData } from "../../../hooks/AboutData";
import React, { useEffect,useState } from "react";

export function ServiceDImage() {
const [Data, setData] = useState({}); 
const data=ServiceCartData;
const id=sessionStorage.getItem('serviceid');
const find=data.find((el)=>el.id===Number(id));
    useEffect(()=>{
    if (!data) return 
     
      
  setData({...find})
    
    },[data])


    return(
<section className="section ">
  <div className="section-container">
    <div className="section-content project-des-section">
    <img src={Data.mainImage}/>
     
    </div>
  </div>
</section>
    )
}