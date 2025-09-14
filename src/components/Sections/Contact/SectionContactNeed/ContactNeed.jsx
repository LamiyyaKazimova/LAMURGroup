import React, { useState } from "react";






export function ContactNeedInfo(){

const [stInfo, setItInfo] = useState([]);
const [social, setSocial] = useState([]);
const [Data, setData] = useState([]);


    return (
      <div className="contactNeed section-container ">
        <div className="contactNeedDescription">
          <h2 className="contactNeedHeader">{Data?.title}</h2>
          <p className="contactHeadDescription">
           {Data.description}
          </p>
        </div>

        <div className="contactNeedInfo">
          <div className="contactNeedInfoAdress">
            {stInfo && stInfo.map((el,index)=>(
               <div className="contact-info-content" key={index} >
             <div dangerouslySetInnerHTML={{ __html: el.cdnIcon}} />
               <div className="contact-spans">
                 <span>{el.label}</span>
                 <span>{el.value}</span>
               </div>
             </div>
            ))}
          </div>

          <div className="contactNeedSocial">
            <p className="contact-need-social-des">
             {Data.followOnSocialMedia}
            </p>
            <div className="contact-need-social-media">
              {social&&social.map((el)=>(
                <a className="style-none" href={el.link}>{<span dangerouslySetInnerHTML={{ __html: el.cdnIcon}}/>}</a>
              ))}
              
             
            </div>
          </div>
        </div>
      </div>
    );
}