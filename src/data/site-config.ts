import avatar from '../assets/images/avatar.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://zaklaughton.dev',
    avatar: {
        src: avatar,
        alt: 'Zak Laughton'
    },
    title: 'Zak Laughton',
    subtitle: 'Engineering manager + full-stack engineer in Austin, TX',
    description: "Zak Laughton's portfolio. Engineering manager and full-stack engineer with 9 years at Atlassian.",
    image: {
        src: '/dante-preview.jpg',
        alt: 'Zak Laughton - Engineering manager and full-stack engineer'
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
        text: "I manage engineering teams and write code. Nine years at Atlassian doing both. This is where I think out loud about software, leadership, and the overlap between them.\n\nCurrently exploring new opportunities. Find me on [LinkedIn](https://www.linkedin.com/in/zaklaughton/) or [GitHub](https://www.github.com/zaklaughton/).",
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
