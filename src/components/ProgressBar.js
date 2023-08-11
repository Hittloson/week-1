import React,{useState} from 'react'
import homeStyle from './homeStyle.css'

function ProgressBar() {
    const [progress, setProgress] = useState(0);
  const steps = ['Information', 'Payment', 'Confirmation'];
  const stepWidth = 100 / steps.length;

  const handleClick = (index) => {
    setProgress(stepWidth * (index + 1));
  };
  return (
    <div>
        <div className="steps">
        {steps.map((step, index) => (
            <div key={index} className="step" onClick={() => handleClick(index)}>
            {step}
        </div>
        ))}
        </div>
        <div className="progress-container mt-4">
            <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
    </div>
  )
}

export default ProgressBar