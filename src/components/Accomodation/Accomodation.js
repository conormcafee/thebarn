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
                        <span className="font-small font-base-sm">{props.distance} away</span>
                    </div>
                </header>
                <footer>
                    <a href={props.web} target="_blank" rel="noopener noreferrer" className="text-blue font-small font-base-sm">{props.web}</a>
                    <a href={`tel:${props.num}`} className="font-small font-base-sm">{props.num}</a>
                </footer>
            </li>
        )
    }
}

export default AccomodationItem