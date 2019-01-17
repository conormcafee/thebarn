import React from "react";
import styles from "./schedule.module.css"; 

class Schedule extends React.Component {
    render() {
        const hour = `${this.props.time[0]}${this.props.time[1]}`
        const mins = `${this.props.time[3]}${this.props.time[4]}`

        return (
            <li className={styles.schedule}>
                <figure>
                    <img 
                        src={this.props.icon.name} 
                        alt={`${this.props.icon.title} Icon`} 
                        style={{
                            height: this.props.icon.height,
                            width: this.props.icon.width
                        }}
                    />
                    <figcaption>
                        <span className={`bold ${styles.time}`}>
                            <b>{hour}<span className="text-blue">:</span>{mins}</b>
                        </span>
                        <span className={styles.location}>{this.props.location}</span>
                    </figcaption>
                </figure>
            </li>
        )
    }
}

export default Schedule