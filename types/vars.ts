import { FcSettings } from 'react-icons/fc';
import { MdContactPage } from 'react-icons/md';

export const navItems = [
    {name: "Dashboard", path: "/dashboard"},
    {name: "Network", path: "/network"},
    {name: "Teams", path: "/teams"},
    {name: "Contact", path: "/contact"}
];

export const profileSettings = [
    {name: "profile", icon: MdContactPage},
    {name: "settings", icon: FcSettings, size: 5},
];

export const moonColorDesktop = "#C9C6C6FF";
export const sunColorDesktop = "#51EBF3";

export const moonColorMobile = "#C9C6C6FF";
export const sunColorMobile = "#ffdf19";