import React from "react";
import AccomodationItem from "../Accomodation/Accomodation";
import Pin from "../../svg/pin.svg";
import Cars from "../../svg/cars.svg";

class Accomodation extends React.Component {
    render() {
        const props = this.props;
        return (
            <ol className="listReset">
                {props.data.map((place, index) => (
                    <AccomodationItem 
                        key={index}
                        pin={Pin}
                        cars={Cars}
                        place={place.place}
                        distance={place.distance}
                        web={place.website}
                        num={place.phone}
                    />
                ))}
            </ol>
        )
    }
}

export default Accomodation