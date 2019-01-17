import React from "react";
import styles from "./container.module.css";

class Container extends React.Component {
    render() {
        const props = this.props;
        const containerStyle = props.text ? `${styles.container} ${styles.containerText}` : `${styles.container} pv8`
        const className = props.className ? props.className : ''
        
        return (
            <section id={props.id ? props.id : null} className={`${containerStyle} ${className}`}>
                {this.props.children}
            </section>
        )
    }
}

export default Container