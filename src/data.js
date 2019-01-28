// Icons 
import Rings from "./svg/rings.svg";
import Drinks from "./svg/drinks.svg";
import Speeches from "./svg/speeches.svg";
import Menu from "./svg/menu.svg";
import FirstDance from "./svg/first-dance.svg";
import Music from "./svg/menu.svg";

// Music

import Niamh from "./images/niamh.jpg";
import Coves from "./images/coves.jpg";

// Directions

import SegraveSmall from "./images/segrave-small.jpg";
import Dromintee from "./images/dromintee.jpg";

export const NAV = [
    { title: "Directions" },
    { title: "Accomodation" }
]

export const SCHEDULE = [
    {
        icon: {
            name: Rings,
            height: '42px',
            width: '50px',
            title: 'Rings'
        },
        time: "12:30",
        location: "St Patrick's Chapel, Dromintee"
    },
    {
        icon: {
            name: Drinks,
            height: '41px',
            width: '38px',
            ttle: "Drinks"
        },
        time: "15:00",
        location: "Canapes & drinks on arrival at Segrave Barns"
    },
    {
        icon: {
            name: Speeches,
            height: '41px',
            width: '38px',
            title: "Speeches"
        },
        time: "17:00",
        location: "The bridal party speeches"
    },
    {
        icon: {
            name: Menu,
            height: '41px',
            width: '32px',
            title: "Menu"
        },
        time: "17:45",
        location: "Dinner is served"
    },
    {
        icon: {
            name: FirstDance,
            height: '41px',
            width: '32px',
            title: "First Dance",
        },
        time: "20:00",
        location: "The new Mr & Mrs McAfee invite you out to the forest for their first dance"
    },
    {
        icon: {
            name: Music,
            height: '41px',
            width: '36px',
            title: "Music"
        },
        time: "20:30",
        location: "The party begin"
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
        venue: "St Patrick's Chapel, Dromintee"
    },
    {
        image: SegraveSmall,
        venue: "Segrave Barns, Dunany, Co.Louth"
    }
]

export const ACCOMODATION = [
    {
        place: "Crowne Plaza Hotel, Dundalk",
        type: "Hotel",
        distance: "15 mins",
        website: "https://dundalk.ie",
        phone: "+447709128374",
        code: "FMC" // 22nd May €129 B&B per room
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