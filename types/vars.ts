import { FcSettings } from 'react-icons/fc';
import { MdContactPage } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import {signOut} from "next-auth/react";

export const navItems = [
    {name: "Dashboard", path: "/dashboard"},
    {name: "Network", path: "/network"},
    {name: "Community", path: "/community"},
    {name: "Contact", path: "/contact"}
];

export const socialIcons = [
    {file: "google_contact", name:"contact", height: "h-14", link: "/contact/reyan-zein.vcf"},
    {file: "gmail", name:"e-mail", height: "h-10", link: "mailto:contact@holistic-life.dev"},
    {file: "linkedin", name:"linkedin", height: "h-12", link: "https://www.linkedin.com/in/reyan-zein-11506225b", newTab: true},
    // {file: "whatsapp", name:"whatsapp", height: "18"},
    // {file: "paypal", name:"paypal", height: "12"},
    // {file: "patreon", name:"patreon", height: "12"},
    // {file: "donate", name:"donate", height: "18"}
];

export const legalLinks = [
    {name: "terms of service", href: "/terms-of-service"},
    {name: "privacy policy", href: "/privacy-policy"},
    {name: "cookie use", href: "/cookie-use"}
];

export const profileSettings = [
    {name: "profile", icon: MdContactPage, href: "/profile"},
    {name: "settings", icon: FcSettings, href:"/settings", size: 5},
    {name: "signOut", icon: BiLogOut, href: "/login", size: 5},
];

export const moonColorDesktop = "#C9C6C6FF";
export const sunColorDesktop = "#51EBF3";

export const moonColorMobile = "#C9C6C6FF";
export const sunColorMobile = "#ffdf19";