import React, { useEffect, useState} from "react";
import { SliderTop } from "../../components/Sections/Home/Slider/Slider";
import { SectionBuilding } from "../../components/Sections/Home/SectionAbout/SectionAbout";
import { OurSection } from "../../components/Sections/Home/SectionOur/OurSection";
import { WhyChooseUs } from "./../../components/Sections/Home/sectionwhychoose/SectionWhyChoose";
import {PartnerSlider} from "../../components/Sections/Home/PartnerSlider/PartnerSlider";


export function Home() {


  return (
    <div className="body">
      <SliderTop />
      <SectionBuilding />
      <OurSection />
      <WhyChooseUs />
      <PartnerSlider />
    </div>
  );
}
