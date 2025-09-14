import React, { useEffect,useState } from "react";
import { useTranslation } from "react-i18next";
import { Hcart } from "../home-card/ServiceCart";
import { useNavigate } from "react-router-dom";
import { ServiceCartData } from './../../../../hooks/AboutData';

export function OurSection() {
  const navigate=useNavigate()
  const data=ServiceCartData
  const [service, setService] = useState([]);
  const { t,i18n } = useTranslation();
  useEffect(() => {
    if (Array.isArray(data)) {
      setService(data);
    } else {
      setService([]); 
    }
  }, []);

  return (
    <section className="section full projects">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">
            {t("h-sectionthree.ourheading")}
          </span>
          <h2 className="section-title">{t("h-sectionthree.ourtittle")}</h2>
        </div>

        <div className="section-content">
          <div className="our-service-card-box">
            {Boolean(service) &&
              service.map((el) => <Hcart key={el.id} cards={el} />)}
          </div>
        </div>
        <div className="more-service-btn-box">
          <button className="more-serive-btn" onClick={()=>navigate(`/${i18n.language}/services`)}>
            {t("h-sectionthree.moreservice")}
          </button>
        </div>
      </div>
    </section>
  );
}

