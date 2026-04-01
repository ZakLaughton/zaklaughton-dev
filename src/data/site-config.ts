import avatar from '../assets/images/avatar.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://zaklaughton.dev',
    avatar: {
        src: avatar,
        alt: 'Zak Laughton'
    },
    title: 'Zak Laughton',
    subtitle: 'Full-stack developer in Austin, TX',
    description: "Zak Laughton's blog and portfolio. Writing about JavaScript, React, GraphQL, testing, and developer productivity.",
    image: {
        src: '/dante-preview.jpg',
        alt: 'Zak Laughton - Full-stack developer'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
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
        text: "Senior full-stack engineer with ~10 years of experience building scalable UI systems and developer tooling, most recently at Atlassian. I specialize in React, TypeScript, and Node.js, with a track record of shipping polished user experiences and raising the bar on developer productivity at scale.\n\nFind me on [GitHub](https://www.github.com/zaklaughton/), [Twitter/X](https://www.twitter.com/zaklaughton/), or [LinkedIn](https://www.linkedin.com/in/zaklaughton/).",
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
