import avatar from '../assets/images/avatar.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://zaklaughton.dev',
    avatar: {
        src: avatar,
        alt: 'Zak Laughton'
    },
    title: 'Zak Laughton',
    subtitle: 'Engineering leader in Austin, TX',
    description: "Zak Laughton's portfolio. Engineering manager and full-stack engineer with 9 years at Atlassian.",
    image: {
        src: '/dante-preview.jpg',
        alt: 'Zak Laughton - Engineering leader'
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
        text: "Engineering manager and full-stack engineer with 9 years at Atlassian. I care about building teams that are aligned, motivated, and doing their best work.\n\nCurrently open to engineering manager roles. Find me on [GitHub](https://www.github.com/zaklaughton/), [Twitter/X](https://www.twitter.com/zaklaughton/), or [LinkedIn](https://www.linkedin.com/in/zaklaughton/).",
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
