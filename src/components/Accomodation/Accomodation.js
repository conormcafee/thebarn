import React from "react";
import styles from "./accomodation.module.css";

class AccomodationItem extends React.Component {
    render() {
        const props = this.props
        return(
            <li className={styles.accomodation}>
                <header className={styles.header}>
                    <div>
                        <img src={props.pin} alt="Location Icon" />
                        <b>{props.place}</b>
                    </div>
                    <div>
                        <img src={props.cars} alt="Distance Icon" />
                        <span className="font-small font-base-sm">{props.distance} away</span>
                    </div>
                </header>
                <a className="text-blue font-small font-base-sm" href={props.web}>{props.web}</a>
                <span className="font-small font-base-sm">{props.num}</span>
            </li>
        )
    }
}

export default AccomodationItem