import React from 'react';
import ReactDOM from 'react-dom';

import { reservationFormContext } from '../../contexts/reservationFormContext';

function StepThree(props) {
    const {
        addressPick, addressDrop, passengerInfo, setPassengerInfo,
        price, setPrice
    } = React.useContext(reservationFormContext);

    let mapUrl = `https://www.google.com/maps/embed/v1/directions?origin=${addressPick}&destination=${addressDrop}&language=EN&key=AIzaSyA97rzK2Y0x79nYrp4ozU5NzB7acY8MASE`;

    const handleNameChange = (e) => {
        setPassengerInfo({ ...passengerInfo, name: e.target.value });
        console.log('passengerInfo => ', passengerInfo.name);
    }

    const handlePhoneChange = (e) => {
        setPassengerInfo({ ...passengerInfo, phone: e.target.value });
        console.log('passengerInfo => ', passengerInfo.phone);
    }

    const handleEmailChange = (e) => {
        setPassengerInfo({ ...passengerInfo, email: e.target.value });
        console.log('passengerInfo => ', passengerInfo.email);
    }

    const handleAdditionalPassengerChange = (e) => {
        setPassengerInfo({ ...passengerInfo, additionalPassenger: e.target.value });
        console.log('passengerInfo => ', passengerInfo.additionalPassenger);
    }

    const handleWheelchairNeededChange = (e) => {
        setPassengerInfo({ ...passengerInfo, wheelchairNeeded: e.target.value });
        console.log('passengerInfo => ', passengerInfo.wheelchairNeeded);
    }

    const handleRideBackNeededChange = (e) => {
        let element = document.getElementById("do-you-know-time-additional-div");
        let elementTwo = document.getElementById("submit-return-time-additional-div");
        if (e.target.value === "Yes") {
            ReactDOM.findDOMNode(element).style.display = "flex";
            setPrice(price * 2);
        } else {
            ReactDOM.findDOMNode(element).style.display = "none";
            ReactDOM.findDOMNode(elementTwo).style.display = "none";
        }
        setPassengerInfo({ ...passengerInfo, rideBackNeeded: e.target.value });
        console.log('passengerInfo => ', passengerInfo.rideBackNeeded);
    }

    const handleKnowReturnTimeChange = (e) => {
        let element = document.getElementById("submit-return-time-additional-div");
        if (e.target.value === "Yes, I know") {
            ReactDOM.findDOMNode(element).style.display = "flex";
        } else {
            ReactDOM.findDOMNode(element).style.display = "none";
        }
        setPassengerInfo({ ...passengerInfo, knowReturnTime: e.target.value });
    }

    // const changeReturnTime = (attr, value) => {
    const handleReturnTimeChange = (event) => {
        console.log('passengerInfo => ', passengerInfo);
        // Gets input name and value
        const { name: attr, value } = event.target;

        // Gets info
        const info = { ...passengerInfo };

        // Updates info return time attr
        info.returnTime[attr] = value;

        console.log({info})

        // Updates state with updated info
        setPassengerInfo(info);
    };

    const nextStep = () => {
        let info = { ...passengerInfo };
        let timeStr = info.returnTime.hours + ':' + info.returnTime.minutes + ' ' + info.returnTime.ampm;
        info.returnTime.fullTime = timeStr;
        setPassengerInfo(info);

        var hasFalseValues = Object.keys(passengerInfo).some(k => !passengerInfo[k]);

        if (hasFalseValues) {
            alert ("Fill out all fields!");
        } else {
            props.next();
        }
    }

    return (
        <div className="reservation-form__step-five">
            <div className="step-five__inner-container">
                <div className="new-form__step-header">
                    <span className="new-form-step-two__header">Reservation Form</span>
                    <span className="reservation-form__back-container">
                        <span className="back-container__back-text pointer" onClick={() => props.previous()}>← Back </span>
                        <span className="back-container__step-text">Step 3</span>
                        <span className="back-container__of-steps-text"> of 5</span>
                    </span>
                </div>
                <div className="step-five__step-five-form">
                    <div className="step-five__pickup-container">
                        <p className="reservation-form__input-label">First & Last Name</p>
                        <input className="reservation-form__input rounded" onChange={e => handleNameChange(e)}/>
                    </div>
                    <div className="step-five__dropoff-container">
                        <p className="reservation-form__input-label">Phone Number</p>
                        <input className="reservation-form__input rounded" onChange={e => handlePhoneChange(e)}/>
                    </div>
                    <div className="step-five__dropoff-container">
                        <p className="reservation-form__input-label">Email Adress</p>
                        <input className="reservation-form__input rounded" onChange={e => handleEmailChange(e)}/>
                    </div>
                </div>
                <div className="step-five__additional-info">
                    <div className="step-five__additional-info-form-group">
                        <p className="step-five__additional-info-header reservation-form__input-label reservation-form__input-label--no-margin">Additional Passenger</p>
                        <select className="step-five__additional-info-input reservation-form__input reservation-form__input--no-margin rounded" onChange={e => handleAdditionalPassengerChange(e)}>
                            <option selected>None</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="step-five__additional-info-form-group">
                        <p className="step-five__additional-info-header reservation-form__input-label reservation-form__input-label--no-margin">Do you need our<br/>wheelchair provided?</p>
                        <select className="step-five__additional-info-input reservation-form__input reservation-form__input--no-margin rounded" onChange={e => handleWheelchairNeededChange(e)}>
                            <option>Yes</option>
                            <option selected>No</option>
                        </select>
                    </div>
                    <div className="step-five__additional-info-form-group">
                        <p className="step-five__additional-info-header reservation-form__input-label reservation-form__input-label--no-margin">Do you need<br/>a ride back?</p>
                        <select className="step-five__additional-info-input reservation-form__input reservation-form__input--no-margin rounded"onChange={e => handleRideBackNeededChange(e)}>
                            <option>Yes</option>
                            <option selected>No</option>
                        </select>
                    </div>
                    <div style={{display: 'none'}} id="do-you-know-time-additional-div" className="step-five__additional-info-form-group">
                        <p className="step-five__additional-info-header reservation-form__input-label reservation-form__input-label--no-margin">Do you know<br/>your return time?</p>
                        <select className="step-five__additional-info-input reservation-form__input reservation-form__input--no-margin rounded"onChange={e => handleKnowReturnTimeChange(e)}>
                            <option>Yes, I know</option>
                            <option selected>No, I will call</option>
                        </select>
                    </div>
                    <div style={{display: 'none'}} id="submit-return-time-additional-div" className="new-form__return-time-container">
                        <p className="step-five__additional-info-header reservation-form__input-label reservation-form__input-label--no-margin">Please, select<br/>your return time</p>
                        <div className="reservation-date-picker-container__reservation-time-picker">
                            <select name="hours" className="reservation-form__input reservation-form__input--no-margin rounded" onChange={e => handleReturnTimeChange(e)}>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                            <span> : </span>
                            <select name="minutes" className="reservation-form__input reservation-form__input--no-margin rounded" onChange={e => handleReturnTimeChange(e)}>
                                <option>00</option>
                                <option>15</option>
                                <option>30</option>
                                <option>45</option>
                            </select>
                        </div>
                        <div className="reservation-date-picker-container__reservation-am-pm-picker">
                            <div className="reservation-am-pm-picker__inner-container">
                                <div className="reservation-date-picker-container__am-container">
                                    <input type="radio" id="time-am" name="ampm" value="am" onChange={e => handleReturnTimeChange(e)}/>
                                    <label for="time-am">am</label>
                                </div>
                                <div className="reservation-date-picker-container__pm-container">
                                    <input type="radio" id="time-pm" name="ampm" value="pm" onChange={e => handleReturnTimeChange(e)}/>
                                    <label for="time-pm">pm</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="step-five__step-five-footer">
                    <div className="reservation-form__reservation-footer-price-container">
                        <span className="reservation-footer-price-container__total">Total: </span>
                        <span className="reservation-footer-price-container__dollar">$</span>
                        <span className="reservation-footer-price-container__price">{price}</span>
                    </div>
                    <div className="reservation-form__submit-btn rounded pointer" onClick={() => nextStep()}>
                        <span className="reservation-form__submit-text">Next Step →</span>
                    </div>
                </div>
            </div>
            <iframe className="google-map-iframe" title="google-map" frameBorder="0" style={{ borderBottomLeftRadius: "6px", borderBottomRightRadius: "6px" }} src={mapUrl}></iframe>
        </div>
    )
}

export default StepThree;