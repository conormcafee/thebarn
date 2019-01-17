import React from "react";
import styles from "./photoCard.module.css";

class PhotoCard extends React.Component {
    render() {

        const props = this.props;
        const photoCardStyles = props.type === 'large' ? `${styles.photoCard} ${styles.photoCardLarge}` : `${styles.photoCard} ${styles.photoCardSmall}`

        return (
            <div className={photoCardStyles} style={{ backgroundImage: `url(${props.image})` }}>
                <div>
                    <b>{props.title}</b>
                    <span>{props.desc}</span>
                </div>
            </div>
        )
    }
}

export default PhotoCard