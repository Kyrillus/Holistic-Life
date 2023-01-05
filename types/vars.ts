import { FcSettings } from 'react-icons/fc';
import { MdContactPage } from 'react-icons/md';

export const navItems = [
    {name: "Dashboard", path: "/dashboard"},
    {name: "Network", path: "/network"},
    {name: "Teams", path: "/teams"},
    {name: "Contact", path: "/contact"}
];

export const socialIcons = [
    {file: "google_contact", name:"contact", height: "h-14", link: "https://admin.holistic-life.dev/uploads/vcard_f96bea270f.vcf"},
    {file: "gmail", name:"e-mail", height: "h-10", link: "mailto:contact@holistic-life.dev"},
    {file: "linkedin", name:"linkedin", height: "h-12", link: "https://www.linkedin.com/in/reyan-zein-11506225b", newTab: true},
    // {file: "whatsapp", name:"whatsapp", height: "18"},
    // {file: "paypal", name:"paypal", height: "12"},
    // {file: "patreon", name:"patreon", height: "12"},
    // {file: "donate", name:"donate", height: "18"}
];

export const profileSettings = [
    {name: "profile", icon: MdContactPage},
    {name: "settings", icon: FcSettings, size: 5},
];

export const moonColorDesktop = "#C9C6C6FF";
export const sunColorDesktop = "#51EBF3";

export const moonColorMobile = "#C9C6C6FF";
export const sunColorMobile = "#ffdf19";