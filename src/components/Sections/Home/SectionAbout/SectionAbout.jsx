import React, { useEffect,useState } from "react";
import { useTranslation } from 'react-i18next';

import buildog from '../../../../assets/image/buildog.jpg'


export function SectionBuilding() {
   const { t } = useTranslation(); 



   
  return (
    <>
      <section className="section about-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-subtitle">
              {t("h-sectiontwo.subheading")}
            </span>
            <h2 className="section-title">{t("h-sectiontwo.title")}</h2>
          </div>

          <div className="section-content">
            <article className="text-content">
              <p className="description">{t('servicesummary')}</p>

              <div className="block">
                <div className="info-block">
                  <h3 className="info-title">
                    {t("h-sectiontwo.whoWeAreTitle")}
                  </h3>
                  <p className="info-text">{t('whoweares')}</p>
                </div>
              </div>
              <div className="block">
                <div className="info-block">
                  <h3 className="info-title">
                    {t("h-sectiontwo.missionTitle")}
                  </h3>
                  <p className="info-text">{t('missions')}</p>
                </div>
              </div>
            </article>

            <figure className="image-wrapper">
              <img src={buildog} alt="glass building" className="image" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}




