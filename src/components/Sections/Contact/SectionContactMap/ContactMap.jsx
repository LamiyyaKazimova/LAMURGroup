import React, { } from "react";





export function ContactMap(){





    return (
      <section className="section">
       <div className="mapped"> 
        <iframe 
        className="map-speci"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24311.84654436098!2d49.87185360339355!3d40.38711774125779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d40a035a6bd%3A0xa8c2cbf267a83fbd!2zSGV5ZMmZciDGj2xpeWV2IE3JmXJryZl6aQ!5e0!3m2!1str!2saz!4v1755861176345!5m2!1str!2saz"
         
          style={{
            border: 0,
            display: 'block',
            margin: 0,
            padding: 0
              }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          ariaHidden="false"
          tabIndex="0"
          title="Google Map"
        ></iframe>
        </div>
      </section>
    );
}