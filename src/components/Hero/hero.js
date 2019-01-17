import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styles from "../Hero/hero.module.css";
import Segrave from "../../images/segrave-barns-dunany.jpg";

class Hero extends React.Component {
    render() {
        return (
            <header className={styles.header} style={{ backgroundImage: `url(${Segrave})`}}>
                
                {this.props.children}

                <div className={`${styles.heroText}  z10`}>
                    <h1 className="mv0">
                        <span className="block font-base font-medium-sm italic">On the 22nd June 2019</span>
                        <span className={`heading ${styles.heroHeading}`}>Fionnuala <span className="inline-block text-blue">&amp;</span> Conor</span>
                        <span className="block font-base font-medium-sm italic mt1">Welcome you to Segrave Barns in Co.Louth</span>
                    </h1>
                </div>

                <div className="text-center z10">
                    <AnchorLink className="font-small font-base-sm italic text-white text-center" href="#intro">More Details Below</AnchorLink>
                </div>
            </header>
        )
    }
}

export default Hero