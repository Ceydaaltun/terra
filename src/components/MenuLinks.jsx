/**
 * Menu Links Component
 * 
 * Renders a list of navigation links for the application, 
 * including internal sections and external links (GitHub, LinkedIn).
 * 
 * Props:
 * - onLinkClick: Function to call when a link is clicked.
 * - classNames: Object containing class names for styling.
 * 
 * Returns: JSX element for the navigation links.
 * 
 * Key Features:
 * - Smooth scrolling for internal links.
 * - Supports external links that open in a new tab.
 * 
 * @component
 * @author Ceyda Aleyna Altun
 * @date 2023-10-04
 */
'use client'

import Link from 'next/link';

import {
    UserGroupIcon,
    HomeIcon,
} from '@heroicons/react/24/outline';

import { FaGithub,FaLinkedin } from 'react-icons/fa';



// Map of links to display in the side navigation.
const links = [
    { 
        name: 'Home',
        href: '#home',
        icon: HomeIcon,
        showName: true,
        showIcon: false,
        openInNewTab: false
    },
    {
        name: 'About',
        href: '#about',
        icon: HomeIcon,
        showName: true,
        showIcon: false,
        openInNewTab: false
    },
    {
        name: 'Mission&Vision',
        href: '#mission-and-vision',
        icon: HomeIcon,
        showName: true,
        showIcon: false,
        openInNewTab: false
    },
    {
        name: 'Contact',
        href: '#contact',
        icon: UserGroupIcon,
        showName: true,
        showIcon: false,
        openInNewTab: false
    },
    {
        name: 'Github',
        href: 'https://github.com/Ceydaaltun',
        icon: FaGithub,
        showName: false,
        showIcon: true,
        openInNewTab: true
    },
    {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/ceyda-aleyna-altun/',
        icon: FaLinkedin,
        showName: false,
        showIcon: true,
        openInNewTab: true
    },
];



export default function MenuLinks({ onLinkClick = () => {}, classNames = {} }) {
    
    const handleClick = (e, href) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            } 
        }
    };
    return (
        <>
            <div className={classNames.container}>
                {links
                    .filter((link) => !link.showIcon)
                    .map((link) => {
                        const LinkIcon = link.icon;
                        const isExternal = link.openInNewTab || link.href.startsWith('http');
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                target='_self'
                                onClick={(e) => {
                                    if(isExternal) handleClick(e, link.href);
                                    onLinkClick();
                                }}
                                className={classNames.link}
                            >
                                {link.showName && <p className={classNames.linkText}>{link.name}</p>}

                            </Link>
                        );
                    })}
            </div>

            <div className={classNames.iconContainer}>
                {links
                    .filter((link) => link.showIcon) // Filter links with icons
                    .map((link) => {
                        const LinkIcon = link.icon;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                target='_blank'
                                rel='noopener noreferrer'
                                className={classNames.iconLink}
                            >
                                <LinkIcon className={classNames.icon} />
                            </Link>
                        );
                    })}
            </div>
        </>
    );
}

