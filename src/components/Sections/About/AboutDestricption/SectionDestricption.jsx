import React from "react";
import { useTranslation } from "react-i18next";



export function SectionDescription() {
  const { t } = useTranslation();


  return (
    <div className="section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">{t("ourheading")}</span>
          <h2 className="section-title">{t("ourtittle")}</h2>
        </div>
        <p className="aboutDescription">{t('ourData')}</p>
       
      </div>
    </div>
  );
}
