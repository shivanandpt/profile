import React from 'react';
import {
    LandingPageMainSection,
    LandingPageSectionOne,
    LandingPageSectionTwo
} from '../../layouts/LandingPageLayouts';
import TilesSection from '../tiles/TilesSection';
import Technologies from '../cards/Technologies';
import data from '../../data.json';
function Intro() {

    return (
        <LandingPageMainSection>
            <LandingPageSectionOne>
                <TilesSection sectionName='Blogs' data={data}></TilesSection>
                <TilesSection sectionName='Projects' data={data}></TilesSection>
            </LandingPageSectionOne>
            <LandingPageSectionTwo>
                <Technologies></Technologies>
            </LandingPageSectionTwo>
        </LandingPageMainSection>
    );
}

export default Intro;