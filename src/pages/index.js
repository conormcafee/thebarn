import React from "react"
import Hero from "../components/Hero/hero";
import Nav from "../components/Nav/nav";
import Layout from "../components/layout";
import Container from "../components/Global/container";
import Schedule from "../components/Schedule";
import PhotoCards from "../components/PhotoCard";
import PhotoCard from "../components/PhotoCard/PhotoCard";
import Accomodation from "../components/Accomodation";

import * as Data from "../data";
class Index extends React.Component {
    render() {
        return (
            <Layout>
                {/* Hero */}

                <Hero>
                    <Nav navigation={Data.NAV}/>
                </Hero>

                {/* Introduction */}

                <Container className="light z10" text id="intro">
                    
                    <p>Our wedding venue is Segrave Barn in Co. Louth, and while it is a little different, we hope you will love it as much as we do. We have put together this website to help with all the logistics and informaiton you will need for the day. </p>
                    
                    <p>We've listed the running order of the day, directions to the chapel &amp; Segrave Barns (only a 25 minutes from Dromintee).  We've also listed accomodation for those wishing to stay the night of the wedding.</p>
                </Container>

                {/* Schedule & Music */}

                <div className="gradient">
                    <Container className="z10">
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
                        <PhotoCards data={Data.MUSIC}/>
                    </Container>
                            
                    {/* Directions */}

                    <Container className="z10" id='Directions'>
                        <article>
                            <h2 className="heading font-title mt0">Directions</h2>
                            <p>The wedding will take place in St Patrick's Chapel. Dromintee, Co. Armagh.  Click here for directions.</p>
                            <p>The reception is being held in Segrave Barns, Dunany, Co. Louth.  Click here for directions to Segrave Barns from St Patrick's Chapel.  We ask that you go straight to the reception once the mass is over as we will have canapes &amp; drinks on arrival.</p>
                        </article>
                        <aside>
                            {Data.DIRECTIONS.map((direct, index) => (
                                <PhotoCard 
                                    type="large"
                                    key={index}
                                    image={direct.image}
                                    title={direct.venue}
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
                            <p>We have rooms held in the Crowne Plaza, Dundalk, and if there is enough interest, we will provide a bus from the hotel to Segrave (return) for those guests. There are also some local B&Bs surrounding Segrave, and we will have a list of local taxis/taxi buses to ensure transport runs smoothly.</p>
                            <p>For anyone searching for their own accommodation, Segrave Barn is in the village of Dunany, and the nearby townlands are Annagassan, Togher, Clougherhead & Termonfeckin.</p>
                        </article>
                        
                        <aside>
                            <Accomodation data={Data.ACCOMODATION} />
                        </aside>
                    </Container>

                </div>
            </Layout>
        )
    }
}

export default Index