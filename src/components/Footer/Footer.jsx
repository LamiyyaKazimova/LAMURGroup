import React,{useEffect,useState} from "react";
import { useTranslation } from "react-i18next";
import SKNlogo from "../../assets/image/Group21.png";
import { useNavigate } from "react-router-dom";
import { infos, socials } from './../../hooks/Social';
export function Footer() {
  const [stInfo, setItInfo] = useState([]);
  const [social, setSocial] = useState([]);
  const info=infos;
  const scl=socials;
  useEffect(() => {
    if (Array.isArray(info)) {
      setItInfo(info);
    } else {
      setItInfo([]);
    }
  
    if (Array.isArray(scl)) {
      setSocial(scl);
    } else {
      setSocial([]);
    }
  }, []);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  return (
    <footer className="footer" >
      <div className="footer-container"  >
        <div className="section-container-content">
          <div className="social-content">
            <img className="sknLogo" src={SKNlogo} />
            <p className="social-description">
            Stay tuned for the latest updates and exciting content. Follow us on social media and be part of our journey!
            </p>
            <div className="social-icons">
            {social&&social.map((el)=>(
                <a className="style-none" href={el.link} target="_blank">{<span dangerouslySetInnerHTML={{ __html: el.icon}}/>}</a>
              ))}
            </div>
          </div>

          <div className="contact-info">
            {stInfo&&stInfo.map((el,index)=>(
              <div className="contact-info-content" key={index}>
              <div dangerouslySetInnerHTML={{ __html: el.cdnIcon}} />
              <div className="contact-spans">
              <span>{el.label}</span>
              <span>{el.value}</span>
              </div>
            </div>
            ))

            }
            </div>
          <div className="company">
            <h4 className="company-header">Company</h4>
            <div className="company-info">
              <button
                onClick={() => {
                  navigate(`/${i18n.language}/aboutus`);
                }}
              >
                {t("company")}
              </button>
              <button
                onClick={() => {
                  navigate(`/${i18n.language}/contact`);
                }}
              >
                {t("contact")}
              </button>
              <button
                onClick={() => {
                  navigate(`/${i18n.language}/partners`);
                }}
              >
                {t("partners")}
              </button>
              <button
                onClick={() => {
                  navigate(`/${i18n.language}/services`);
                }}
              >
                {t("services")}
              </button>
              <button
                onClick={() => {
                  navigate(`/${i18n.language}/FAQs`);
                }}
              >
                {t("FAQS")}
              </button>
            </div>
          </div>
        </div>

        <div className="footer-endpoint">
          <p>Copyright © 2025 SKN Group</p>
          <p>Developed By</p>
        </div>
      </div>
    </footer>
  );
}