import React from "react";

export function Partnermodal({data,setstate}){

const closeModal = () => {
    setstate(false);
  };
    




    return(
         <div className="partner-modal-backdrop" onClick={closeModal}>
                   <div className="section-modal">
                  <div
                    className="partner-modal"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img className="logos" src={data.image} />

                    <div className="partner-modal-des">
                      <h2>{data.name}</h2>
                      <p>{data.description}</p>
                       
                      
                    </div>
                  </div>
                </div>
            </div>
    )
}