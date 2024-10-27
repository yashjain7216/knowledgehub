import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
 
} from "../assets";

import msteams from '../assets/collaboration/msteams.png'


import greythr from '../assets/collaboration/greythr.png'
import bamboohr from '../assets/collaboration/bamboohr.png'


export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },

  {
    id: "2",
    title: "Get started",
    url: "#how-to-use",
  },
  {
    id:"3",
    title: "Demo",
    url: "#demo",
  },{
    id:"4",
    title: "Coming Soon",
    url: "#coming-soon",
  }

  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

// export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [

];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];


export const collabText1 =
  "🔗 Plug into your favorite tools effortlessly! Say goodbye to clunky workflows and hello to a collaboration experience that's smoother than ever. Your team will thank you!";
  export const collabText2 =
  "⚡ Supercharge info retrieval with AI that's tuned to your team's roles. Need info? You’ve got it! The right data, for the right person, at the right time. It’s smart, it’s fast, and it’s secure—because productivity should feel like magic! ✨";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration:",
    text: collabText1,
  },
  {
    id: "2",
    title: "Unlock Your Organization's Superpowers with Role-Based AI!",
    text: collabText2,
  },
];

export const collabApps = [

  {
    id: "1",
    title: "Microsoft Teams",
    icon: msteams,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "GreytHR",
    icon: greythr,
    width: 36,
    height: 38,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },

  {
    id: "5",
    title: "Bamboo hr",
    icon: bamboohr,
    width: 36,
    height: 38,
  },
 
];

export const benefits = [
  {
    id: "0",
    title: "Your Data, Your Control : 🔐 On-Premises Data Security",
    text: "Yugm keeps your data safe and sound on-premises, giving you full control while meeting all compliance needs. Because security should never be a second thought!",
    backgroundUrl: "./client/src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Brainpower in a Box : 💡AI That Thinks Like You",
    text: "Yugm’s smart AI organizes your info, making sure you get the right answers when you need them. From categorizing knowledge to finding insights, it's like having a superbrain at your fingertips!",
    backgroundUrl: "./client/src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Talk to Your Knowledge: 🗣️ Chat with Your Data",
    text: "Why dig through files when you can just ask? With Yugm’s conversational AI, employees get instant access to what matters—making work smoother, faster, and a whole lot smarter!",
    backgroundUrl: "./client/src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  


];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
