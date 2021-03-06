import React, { useEffect } from 'react';
import axios from 'axios';
import { reservationFormContext } from '../../contexts/reservationFormContext';

require('dotenv').config();

function StepTwo(props) {
    const {
        addressPick, addressDrop,
        distance, setDistance, price, setPrice
    } = React.useContext(reservationFormContext);

    useEffect(() => {
        let origins = [addressPick];
        let destinations = [addressDrop];
        axios.post('/distance', { origins, destinations })
            .then(res => {
                console.log('res.data = ', res.data);
                let distanceStrArr = res.data[0].elements[0].distance.text.split(' ');
                let distanceStr = distanceStrArr[0];
                console.log('distanceStr = ', distanceStr);
                let priceRes = (30 + (2.95 * parseInt(distanceStr))).toFixed(2);
                setPrice(priceRes);
                setDistance(distanceStr);
                console.log(distance);
            })
            .catch(err => {
                console.log(err);
            })
    });

    let mapUrl = `https://www.google.com/maps/embed/v1/directions?origin=${addressPick}&destination=${addressDrop}&language=EN&key=AIzaSyA97rzK2Y0x79nYrp4ozU5NzB7acY8MASE`;

    return (
        <div className="reservation-form__step-two">
            <div className="step-two__outer-container">
                <div className="step-two__form rounded-desktop">
                    <div className="step-two__locations">
                        <span className="step-two__locations-text--red">A: </span><span className="step-two__locations-text">{addressPick}</span>
                    </div>
                    <div className="step-two__locations">
                        <span className="step-two__locations-text--red">B: </span><span className="step-two__locations-text">{addressDrop}</span>
                    </div>
                    <div className="step-two__trip-cost-container">
                        <p className="step-two__info">Wheelchair rampvan <br/> One way trip {distance} mi</p>
                        <div>
                            <span className="step-two__dollar-sign">$</span>
                            <span className="step-two__cost">{price}</span>
                        </div>
                    </div>
                    <div className="reservation-form__submit-btn rounded pointer" onClick={props.next}>
                        <span className="reservation-form__submit-text">Make Reservation →</span>
                    </div>
                </div>
            </div>
            <div className="step-two__outer-container">
                <iframe className="google-map-iframe" title="google-map" frameBorder="0" style={{ borderTopRightRadius: "6px", borderBottomRightRadius: "6px" }} src={mapUrl}></iframe>
            </div>
        </div>
    )
}

export default StepTwo;