import React, { useState } from 'react';

import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';
import StepFour from './StepFour/StepFour';
import StepFive from './StepFive/StepFive';
import StepSix from './StepSix/StepSix';
import StepSeven from './StepSeven/StepSeven';
import StepEight from './StepEight/StepEight';

function ReservationForm(props) {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         currentStep: 1,
    //         // pick: '',
    //         // drop: ''
    //     }
    // }
    const [currentStep, setCurrentStep] = useState(1);
    const [addressPick, setAddressPick] = useState("");
    const [coordinatesPick, setCoordinatesPick] = useState({lat: null, lng: null})

    const _next = () => {
        console.log("current step before -> ", currentStep);
        console.log("addressPick ", addressPick);
        setCurrentStep(currentStep + 1)
        console.log("current step after -> ", currentStep);
    }

    const switchForms = () => {
        switch(currentStep){
            case 1:
                return <StepOne currentStep={currentStep} next={_next} addressPick={addressPick}/>
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
            case 8:
                return <StepEight currentStep={currentStep} next={_next}/>
            }
    }

    // nextButton() {
    //     let currentStep = this.state.currentStep;
        
    // }

    // test = param => {
    //     console.log (this.state.currentStep);
    // }
    
    return (
        <form className="reservation-form rounded">
            {switchForms()}
        </form>
    )
}

export default ReservationForm;
