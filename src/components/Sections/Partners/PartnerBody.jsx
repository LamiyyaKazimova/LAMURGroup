import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import { Partnermodal } from "./PartnerModaj";
import { partnerData } from "../../../hooks/PartnerData";



export function Partnerbody() {
  const [partners, setPartners] = useState([]);
  const [selectedPartners, setSelectedPartners] = useState(false);
  const [modalData,setModalData] = useState([]);
  const data=partnerData
useEffect(()=>{
    if (data) {
        setPartners([...data]);
    }
},[]);
useEffect(()=>{
document.body.style.overflow =selectedPartners?'hidden':'' 
},[selectedPartners])
  const handlePartnerClick = (partner) => {
    setModalData(partner);
    setSelectedPartners(true);
  };
  return (
     <section className="section partners">
        <div className="section-container">
          <div className="section-content">
            <div className="partners-container">
              {Boolean(partners) && partners.map((partner) => (
                <div
                  className="partners-lists"
                  key={partner.id}
                  onClick={() => handlePartnerClick(partner)}
                >
                  <img src={partner.image} />
                </div>
              ))}
            </div>
              {selectedPartners && (<Partnermodal data={modalData} setstate={setSelectedPartners}/>)}
          </div>
        </div>
      </section>
    
  );
}