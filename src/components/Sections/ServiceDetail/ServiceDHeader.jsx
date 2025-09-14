import React, { useEffect,useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ServiceCartData } from "../../../hooks/AboutData";
export function SDetailsHeader() {
 const navigate=useNavigate();
  const { t, i18n } = useTranslation();
  const [Data, setData] = useState({});
 const data=ServiceCartData;
 const id=sessionStorage.getItem('serviceid');
 const find=data.find((el)=>el.id===Number(id));
  useEffect(()=>{
  if (!data) return 
    
    
setData({...find})
  
  },[])
  return (
    <div className="aboutContainer">
      <h2>{Data.name}</h2>
      <p className="pages_special_hover">
        <span onClick={()=>navigate(`/${i18n.language}/`)}>{t('homes')}</span> <span>/</span> <span onClick={()=>navigate(`/${i18n.language}/services`)}>{t('servicess')}</span> <span>/</span>
        <span>{Data.name}</span>
      </p>
    </div>
  );
}