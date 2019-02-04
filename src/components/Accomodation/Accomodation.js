import React from "react";
import styles from "./accomodation.module.css";

class AccomodationItem extends React.Component {
    render() {
        const props = this.props
        return(
            <li className={styles.accomodation}>
                <header className={styles.header}>
                    <div>
                        <b>{props.place}</b>
                    </div>
                    <div>
                        <span className="font-small font-base-sm">{props.type} | {props.distance} away</span>
                    </div>
                </header>
                <footer>
                    <a href={`tel:${props.num}`} className={`${styles.accomoCall} font-small font-base-sm`}>
                        <img className={styles.callIcon} src={props.callIcon} alt="Call Icon" /> 
                        <span>Call</span>
                    </a>
                    {props.web !== null && <a href={props.web} target="_blank" rel="noopener noreferrer" className="text-blue font-small font-base-sm">Website ></a>}
                </footer>
            </li>
        )
    }
}

export default AccomodationItem