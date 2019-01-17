import React from "react";
import PhotoCard from "./PhotoCard";
import styles from "./photoCard.module.css";

class PhotoCards extends React.Component {
    render() {
        return (
            <div className={styles.photoCards}>
                {this.props.data.map((musician, index) => (
                    <PhotoCard 
                        key={index}
                        image={musician.image}
                        title={musician.singer}
                        desc={musician.venue}
                    />
                ))}
            </div>
        )
    }
}

export default PhotoCards