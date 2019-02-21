import React from "react"
import Hero from "../components/Hero/hero";
import Nav from "../components/Nav/nav";
import Layout from "../components/layout";
import Container from "../components/Global/container";
import Schedule from "../components/Schedule";
// import PhotoCards from "../components/PhotoCard";
import PhotoCard from "../components/PhotoCard/PhotoCard";
import Accomodation from "../components/Accomodation";

import * as Data from "../data";
import Logo from "../svg/logo.svg";
import SGB from "../images/segrave-barns-courtyard.jpg";
class Index extends React.Component {
    render() {
        return (
            <Layout>
                {/* Hero */}

                <Hero>
                    <Nav 
                        logo={Logo}
                        navigation={Data.NAV}
                    />
                </Hero>

                {/* Introduction */}

                <Container className="light z10" text id="intro">
                    
                    <div>
                        <p>Our wedding venue is Segrave Barn in Co. Louth, and while it is a little different, we hope you will love it as much as we do. We have put together this website to help with all the logistics and information you will need for the day. </p>
                        <p>We've listed the running order of the day, directions to the chapel &amp; Segrave Barns (approx 30 minutes from Dromintee).  We've also listed accommodation for those wishing to stay the night of the wedding.</p>
                    </div>

                    <ol className="listReset">
                        {Data.SCHEDULE.map((day, index) => (
                            <Schedule 
                                key={index}
                                icon={day.icon}
                                time={day.time}
                                location={day.location}
                            />
                        ))}
                    </ol>
                </Container>

                <div className="gradient">
                    
                    {/* Directions */}

                    <Container className="z10" id='Directions'>
                        <article>
                            <h2 className="heading font-title mt0">Directions</h2>
                            <p>The wedding will take place in St Patrick's Chapel. Dromintee, Co. Armagh.  Click here for directions.</p>
                            <p>The reception is being held in Segrave Barns, Dunany, Co. Louth.  Click here for directions to Segrave Barns from St Patrick's Chapel.  We ask that you go straight to the reception once the mass is over as we will have canapes &amp; drinks on arrival.</p>

                            <p>Note that on Google, you need to type "Seagrave House, Dunany" for it to appear</p>
                        </article>
                        <aside>
                            {Data.DIRECTIONS.map((direct, index) => (
                                <PhotoCard 
                                    type="large"
                                    key={index}
                                    image={direct.image}
                                    title={direct.venue}
                                    url={direct.url}
                                    desc="Click for Directions"
                                />
                            ))}
                        </aside>
                    </Container>

                    {/* Accomodation */}

                    <Container className="z10" id="Accomodation">
                        <article>
                            <h2 className="heading font-title mt0">Accommodation</h2>
                            <p>Accommodation on site is limited to the bridal party, so we have combined a list of local accommodation for those wishing to stay over.</p>
                            <h3 className="bold font-small text-blue mt0 no-uppercase">Accommodation for the night before the wedding</h3>
                            <p>Dromintee Chapel is approx. 1 hour 15 min drive from Ballymena. Anyone wishing to stay the night before the wedding, we would recommend the <a href="https://www.carrickdale.com/index.html" title="Book rooms in the Carrickdale Hotel" target="_blank" rel="noopener noreferrer">Carrickdale Hotel</a>, which is 2 miles from the Chapel. The Crowne Plaza, Dundalk, is approx 15 mins from the Chapel, making it another viable option.</p> 
                            <h3 className="bold font-small text-blue mt0 no-uppercase">Accommodation for night of the wedding</h3>
                            <p>We have a block booking on rooms with the Crowne Plaza, Dundalk (<b>Please quote "FMC" when booking</b>).  If there is enough interest, we will provide transport from the <i>Crowne Plaza to Segrave Barns (return)</i> for those guests staying in the hotel.  Please contact <a href="tel:+447527063489" title="Call or Text Fionnuala">Fionnuala</a> or <a href="tel:+447709128374" title="Call or Text Conor">Conor</a> if you book into the Crowne Plaza.</p>
                            <p>For anyone searching for their own accommodation, Segrave Barns is in the village of Dunany, and the nearby townlands are Annagassan, Togher, Clougherhead & Termonfeckin.</p>
                        </article>
                        
                        <aside>
                            <Accomodation data={Data.ACCOMODATION} />
                        </aside>
                    </Container>

                    <Container className="z10">
                        <PhotoCard 
                            type="large"
                            image={SGB}
                            title="Segrave Barns, Dunany"
                            desc="Day Two Celebtations"
                        />

                        <aside>
                            <h2 className="heading font-title mt-0">Day Two</h2>
                            <p>We will be staying in Segrave Barns for two nights, and will be continuing the celebrations on the Sunday in the bar with some music, food and craic. Everyone is welcome to return to help us keep the party going.</p>

                            <p><b>Hope you find all this info helpful, looking forward to 22nd June.</b></p>
                            <p><b>Fionnuala and Conor</b></p>
                        </aside>
                    </Container>

                    <Container className="z10">
                        <div className="flexcenter">
                            <img src={Logo} alt="The Barn Wedding" />
                        </div>
                    </Container>

                </div>
            </Layout>
        )
    }
}

export default Index