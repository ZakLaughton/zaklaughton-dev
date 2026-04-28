import avatar from '../assets/images/avatar.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://zaklaughton.dev',
    avatar: {
        src: avatar,
        alt: 'Zak Laughton'
    },
    title: 'Zak Laughton',
    subtitle: 'Full-stack engineer in Austin, TX',
    description: "Zak Laughton's portfolio. Full-stack engineer with 9 years at Atlassian.",
    image: {
        src: '/dante-preview.jpg',
        alt: 'Zak Laughton - Full-stack engineer'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
    ],
    footerNavLinks: [],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://www.github.com/zaklaughton/'
        },
        {
            text: 'X/Twitter',
            href: 'https://www.twitter.com/zaklaughton/'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/zaklaughton/'
        }
    ],
    hero: {
        title: 'Hey, I\'m Zak Laughton',
        text: "Senior software engineer with 9 years at Atlassian. Full-stack in TypeScript, React, and Node.js, with a background spanning frontend systems, data pipelines, and developer tooling.\n\nCurrently open to new roles. Find me on [GitHub](https://www.github.com/zaklaughton/) or [LinkedIn](https://www.linkedin.com/in/zaklaughton/).",
        actions: []
    },
    subscribe: {
        enabled: false,
        title: 'Subscribe to Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
