import React from 'react'
import "./Description.css"
const Hero = () => {
  return (
    <div className='inner description-inner'>
      <h1 className="tit">
        <span>
          자동차사고 과실비율 측정 AI
        </span>
      </h1>
      <p className="txt">
        교통사고 발생 시 상황을 분석하여<br/>
        도로교통법, 과실비율 인정기준, 판례 데이터 등을 종합분석하여<br/>
        객관적인 과실비율을 제시하는 서비스입니다.<br/></p>
        <p className='engtxt'>
        We'll analyze the situation in the event of a traffic accident<br/>
By comprehensively analyzing the Road Traffic Act, the criteria for recognizing the percentage of negligence, and case law data<br/>
It is a service that presents an objective percentage of negligence.<br/>
      </p>
    </div>
  )
}

export default Hero