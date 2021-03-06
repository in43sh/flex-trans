import React from 'react';
export const reservationFormContext = React.createContext({});

export default ({ children }) => {
    const [addressPick, setAddressPick] = React.useState("");
    const [coordinatesPick, setCoordinatesPick] = React.useState({lat: null, lng: null});
    const [buildingInfoPick, setBuildingInfoPick] = React.useState("");

    const [addressDrop, setAddressDrop] = React.useState("");
    const [coordinatesDrop, setCoordinatesDrop] = React.useState({lat: null, lng: null});
    const [buildingInfoDrop, setBuildingInfoDrop] = React.useState("");

    const [distance, setDistance] = React.useState("");

    const [price, setPrice] = React.useState(0);

    const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState({
                                            fullTime: "",
                                            hours: "0",
                                            minutes: "00",
                                            ampm: ""
                                        });

    const [passengerInfo, setPassengerInfo] = React.useState({
                                                        name: "",
                                                        phone: "",
                                                        email: "",
                                                        additionalPassenger: "None",
                                                        wheelchairNeeded: "No",
                                                        rideBackNeeded: "No",
                                                        knowReturnTime: "No, I will call",
                                                        returnTime: {
                                                            fullTime: "",
                                                            hours: "0",
                                                            minutes: "00",
                                                            ampm: ""
                                                        }
                                                        });

    const [browserLocation, setBrowserLocation] = React.useState({
                                                                browserLat: "",
                                                                browserLong: ""
                                                            });

    const reservationForm = {
        addressPick, setAddressPick,
        coordinatesPick, setCoordinatesPick,
        buildingInfoPick, setBuildingInfoPick,
        addressDrop, setAddressDrop,
        coordinatesDrop, setCoordinatesDrop,
        buildingInfoDrop, setBuildingInfoDrop,
        distance, setDistance,
        price, setPrice,
        date, setDate,
        time, setTime,
        passengerInfo, setPassengerInfo,
        browserLocation, setBrowserLocation
    }

    return <reservationFormContext.Provider value={reservationForm}>{ children }</reservationFormContext.Provider>
}


