// Icons 
import Rings from "./svg/ring.svg";
import Drinks from "./svg/drinks.svg";
import Speeches from "./svg/speeches.svg";
import Menu from "./svg/menu.svg";
import FirstDance from "./svg/married.svg";
import Music from "./svg/music.svg";

// Music

import Niamh from "./images/niamh.jpg";
import Coves from "./images/coves.jpg";

// Directions

import SegraveSmall from "./images/segrave-small.jpg";
import Dromintee from "./images/dromintee.jpg";

export const NAV = [
    { title: "Directions" },
    { title: "Accommodation" }
]

export const SCHEDULE = [
    {
        icon: {
            name: Rings,
            height: '56px',
            width: '56px',
            title: 'Rings'
        },
        time: "12:30",
        location: "St Patrick's Chapel, Dromintee"
    },
    {
        icon: {
            name: Drinks,
            height: '56px',
            width: '56px',
            ttle: "Drinks"
        },
        time: "15:00",
        location: "Canapes & drinks on arrival at Segrave Barns"
    },
    {
        icon: {
            name: Speeches,
            height: '56px',
            width: '56px',
            title: "Speeches"
        },
        time: "17:00",
        location: "The bridal party speeches"
    },
    {
        icon: {
            name: Menu,
            height: '56px',
            width: '56px',
            title: "Menu"
        },
        time: "17:45",
        location: "Dinner is served"
    },
    {
        icon: {
            name: FirstDance,
            height: '56px',
            width: '56px',
            title: "First Dance",
        },
        time: "20:00",
        location: "Mr & Mrs McAfee's first dance"
    },
    {
        icon: {
            name: Music,
            height: '56px',
            width: '56px',
            title: "Music"
        },
        time: "20:30",
        location: "The party begins"
    }
]

export const MUSIC = [
    {
        image: Niamh,
        singer: "Niamh McGlinchy",
        venue: "Chapel & Drinks Reception"
    },
    {
        image: Coves,
        singer: "The Coves",
        venue: "Segrave Barns, Dunany"
    }
]

export const DIRECTIONS = [
    {
        image: Dromintee,
        venue: "St Patrick's Chapel, Dromintee",
        url: "https://www.google.com/maps/dir/Ballymena/St+Patrick's+Church,+Dromintee,+Finegans+Road,+Killeavy,+Newry/@54.4769803,-6.7919451,9z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x48603410cd42e129:0xd10181120eb86c9c!2m2!1d-6.2802213!2d54.8652935!1m5!1m1!1s0x4860c5f5dca3e9bf:0x79e7bd1c1eb3b099!2m2!1d-6.4195737!2d54.0899904!3e0"
    },
    {
        image: SegraveSmall,
        venue: "Segrave Barns, Dunany, Co.Louth",
        url: "https://www.google.com/maps/dir/St+Patrick's+Church,+Dromintee,+Finegans+Road,+Killeavy,+Newry/Seagrave+House,+Dunany,+Togher,+County+Louth,+Ireland/@54.0230786,-6.4231252,12.74z/data=!4m15!4m14!1m5!1m1!1s0x4860c5f5dca3e9bf:0x79e7bd1c1eb3b099!2m2!1d-6.4195737!2d54.0899904!1m5!1m1!1s0x48672deced81b5c9:0xb18e29db6d30b943!2m2!1d-6.2526283!2d53.8547409!3e0!4e1"
    }
]

export const ACCOMODATION = [
    {
        place: "Crowne Plaza, Dundalk",
        type: "Hotel",
        distance: "15 mins",
        website: "https://www.cpireland.crowneplaza.com/dundalk/",
        phone: "+003531800848270",
        contact: null
    },
    {
        place: "Cooley View",
        type: "B&B",
        distance: "3 mins",
        website: null,
        phone: "+00353872764048",
        contact: "Susan Donegan"
    },
    {
        place: "Sea Breeze House",
        type: "B&B",
        distance: "6 mins",
        website: null,
        phone: "+00353861959007",
        contact: "Cathryn McMahon"
    },
    {
        place: "Catherine Rodgers",
        type: "B&B",
        distance: "6 mins",
        website: null,
        phone: "+00353879186650",
        contact: "Cathryn McMahon"
    },
    {
        place: "The Glyde Inn",
        type: "B&B",
        distance: "10 mins",
        website: "https://theglydeinn.ie",
        phone: "+00353429372350",
        contact: null
    },
    {
        place: "Cathryn Tuite",
        type: "B&B",
        distance: "10 mins",
        website: null,
        phone: "+00353861959007",
        contact: "Cathryn Tuite"
    },
    {
        place: "Flynns Boutique Hotel, Termonfeckin",
        type: "Hotel",
        distance: "15 mins",
        website: null,
        phone: null,
        contact: null
    },
]