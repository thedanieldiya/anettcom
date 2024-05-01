import React from 'react'
import './industries.css'
import { Industry } from '../../components'
import { Education, EducationSvg, Fintech, FintechSvg, Healthcare, HealthcareSvg, RealEstate, RealEstateSvg, Retail, RetailSvg, Travel, TravelSvg } from '../../assets'

const Industries = () => {
  return (
    <div className='industries section__padding'>
      <div className="industries__cards">
        <Industry icon={HealthcareSvg} bgImg={Healthcare} title='Healthcare'/>
        <Industry icon={EducationSvg} bgImg={Education} title='Education'/>
        <Industry icon={TravelSvg} bgImg={Travel} title='Travel'/>
        <Industry icon={RetailSvg} bgImg={Retail} title='Retail'/>
        <Industry icon={FintechSvg} bgImg={Fintech} title='Fintech'/>
        <Industry icon={RealEstateSvg} bgImg={RealEstate} title='Real Estate'/>
      </div>
      <div className="industries__text">
        <h2>Industries we work with</h2>
        <p>Our experience span across industries. Leveraging our expertise to provide customized solutions that address industry-specific challenges.</p>
      </div>
    </div>
  )
}

export default Industries