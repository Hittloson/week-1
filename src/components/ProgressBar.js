import React,{useState} from 'react'
import homeStyle from './homeStyle.css'
import Information from './Information'
import Payment from './Payment'
import Confirmation from './Confirmation'

function ProgressBar() {
    const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Information', 'Payment', 'Confirmation'];
  const stepWidth = 100 / steps.length;

  const handleClick = (index) => {
    setCurrentStep(stepWidth * (index + 1));
  };
  return (
    <div className='progressBae-container'>
        <div className="steps">
        {steps.map((step, index) => (
            <div key={index} className="step" onClick={() => handleClick(index)}>
            {step}
        </div>
        ))}
        </div>
        <div className="progress-container mt-1">
            <div className="progress" style={{ width: `${currentStep}%` }}></div>
        </div>
        <div className="information-container">
          {currentStep === 0 && <Information />}
          {currentStep === 1 && <Payment />}
          {currentStep === 2 && <Confirmation />}
      </div>
    </div>
  )
}

export default ProgressBar