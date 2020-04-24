import React, { useState } from 'react';

import StepOne from '../ReservationFormHome/StepOne';
import StepTwo from '../ReservationFormHome/StepTwo';
import StepThree from '../ReservationFormHome/StepThree';
import StepFour from '../ReservationFormHome/StepFour';
import StepFive from '../ReservationFormHome/StepFive';
import StepSix from '../ReservationFormHome/StepSix';
import StepSeven from '../ReservationFormHome/StepSeven';

function ReservationForm(props) {
    const [currentStep, setCurrentStep] = useState(1);

    const _next = () => {
        // console.log("current step before -> ", currentStep);
        setCurrentStep(currentStep + 1)
        // console.log("current step after -> ", currentStep);
    }

    const switchForms = () => {
        switch (currentStep) {
            case 1:
                return <StepOne currentStep={currentStep} next={_next}/>
            case 2:
                return <StepTwo currentStep={currentStep} next={_next}/>
            case 3:
                return <StepThree currentStep={currentStep} next={_next}/>
            case 4:
                return <StepFour currentStep={currentStep} next={_next}/>
            case 5:
                return <StepFive currentStep={currentStep} next={_next}/>
            case 6:
                return <StepSix currentStep={currentStep} next={_next}/>
            case 7:
                return <StepSeven currentStep={currentStep} next={_next}/>
            default:
                return <StepOne currentStep={currentStep} next={_next}/>
            }
    }
    
    return (
        <form className="reservation-form rounded">
            {switchForms()}
        </form>
    )
}

export default ReservationForm;
