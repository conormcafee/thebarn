import React from "react";
import AccomodationItem from "../Accomodation/Accomodation";
import styles from "./accomodation.module.css";
class Accomodation extends React.Component {
    render() {
        const props = this.props;
        return (
            <ol className="listReset">

                <li className={styles.accomodation}>
                    <h3 className="mt0 bold font-small">Best Option</h3>
                    <header className={styles.header}>
                        <div>
                            <b>Crowne Plaza Hotel, Dundalk</b>
                        </div>
                        <div>
                            <span className="font-small font-base-sm">15 mins away</span>
                        </div>
                    </header>
                    <footer>
                        <a href="https://dundalk.ie" className="text-navy font-small font-base-sm" target="_blank" rel="noopener noreferrer">https://dundalk.ie</a>
                        <a href="tel:447709128374" className="text-navy font-small font-base-sm">+447709128374</a>
                    </footer>
                </li>

                {props.data.map((place, index) => (
                    <AccomodationItem 
                        key={index}
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