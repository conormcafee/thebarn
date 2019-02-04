import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styles from "../Nav/nav.module.css";

class Nav extends React.Component {
    render() {
        return (
            <nav className={`z10 ${styles.nav}`}>
                <img className={styles.navLogo} src={this.props.logo} alt="The Barn Wedding" />
                <ul className={`listReset ${styles.ul}`}>
                    {this.props.navigation.map((nav, index) => (
                        <li className="bold" key={index}>
                            <AnchorLink href={`#${nav.title}`} className="font-small font-base-sm">{nav.title}</AnchorLink>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}

export default Nav