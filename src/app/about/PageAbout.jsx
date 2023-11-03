
"use client";


import rightImg from "@/images/hero-right1.png";
import React from "react";
import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import BgGlassmorphism from "@/components/BgGlassmorphism/BgGlassmorphism";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionHero from "./SectionHero";
import SectionClientSay from "@/components/SectionClientSay/SectionClientSay";
import SectionPromo3 from "@/components/SectionPromo3";
import HeaderTitle from './HeaderTitle';

//import SectionVideo from "./SectionVideos"
import Crousal from "../Crousal/page";
import { PageHome } from "../page";

const PageAbout = ({ }) => {

  return (
    <div className={`nc-PageAbout overflow-hidden relative`}>
      {/* ======== BG GLASS ======== */}

      <BgGlassmorphism />
      <Crousal
      />

      <div className="pt-2 ">
        <HeaderTitle />
      </div>

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">

        <div className="relative overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 rounded">
            <iframe
              className="w-full h-full absolute top-0 left-0 rounded"
              src={'https://www.youtube.com/embed/pcZivOPnsJU'}
              title="YouTube Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* <SectionVideo/> */}
        <SectionHero
          rightImg={rightImg}
          heading="👋 About Us."
          btnText=""
          subHeading="

          After the Creation of Uttarakhand state in November 9, 2000 as 27 state of India. It was felt by Govt. of Uttarakhand that vide extension of sericulture in all over the state it is necessary to establish a separate Directorate.Through which DOS Uttarakhand can generate the employment opportunities for unemployed people as well as up-liftmen of the socio economic condition of rural people in the state. After some time in year 2001 A separate Directorate of Sericulture Uttarakhand was established in the state by Govt. of Uttarakhand under the Ministry of Horticulture.
          
          Since inception DOS Uttarakhand was already a vast infrastructure for development of various type of sericulture in the state.But a newly created Uttarakhand state has a long traditional and great history of silk production.
         "
        />

        <SectionFounder />
        <div className="relative py-16">
          <BackgroundSection />
          {/* <SectionClientSay /> */}
        </div>

        <SectionStatistic />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.527405645236!2d77.96277967556495!3d30.33595767477822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b5ca23b57c3%3A0x22913355728bbfce!2sDOON%20SILK!5e0!3m2!1sen!2sin!4v1699033595448!5m2!1sen!2sin" width="600" height="450" style={{border:'0px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        {/* <SectionPromo3 /> */}
      </div>
    </div>
  );
};


export default PageAbout;