import React from "react";
import AccomodationItem from "../Accomodation/Accomodation";
import CallIcon from "../../svg/call.svg";
class Accomodation extends React.Component {
    render() {
        const props = this.props;
        return (
            <ol className="listReset">
                {props.data.map((place, index) => (
                    <AccomodationItem 
                        key={index}
                        callIcon={CallIcon}
                        place={place.place}
                        distance={place.distance}
                        web={place.website}
                        num={place.phone}
                        type={place.type}
                        contact={place.contact}
                    />
                ))}
            </ol>
        )
    }
}

export default Accomodation