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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis erat et velit blandit pellentesque. Pellentesque vestibulum sapien non dignissim fermentum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis erat et velit blandit pellentesque. Pellentesque vestibulum sapien non dignissim fermentum.</p>
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
                            <p>For those unfamilar with the Dromintee parish, please click on the image of the chapel and this will take you to Google Maps to get directions.</p>
                            <p>If you are needing directions to Segrave Barns, Dunany then click on the image of Segrave and this will automatically populate directions from St Patrick’s Church to Segrave (roughly a 30 minute journey).</p>
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
                            <h2 className="heading font-title mt0">Accomodation</h2>
                            <p>There is on;y accomodation on site for the bridal party, so for those who are wishing to stay we have sorted a list of nearby accomodation.</p>
                            <p>For those who opt to stay in the Crowne Plaza in Dundalk, we will provide a bus from the hotel to the venue, and then at the end of the night back to the Crowne Plaza.  If you book into the Crowne Plaza, send either Conor or Fionnuala a message so we can gauge numbers.</p>
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