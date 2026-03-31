import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
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
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
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
        text: "I'm a full-stack developer based in Austin, TX, building tools to make life a little easier. I write about JavaScript, React, GraphQL, testing, and developer productivity.\n\nFeel free to explore my writing below, check out my work on [GitHub](https://www.github.com/zaklaughton/), or connect with me on [Twitter/X](https://www.twitter.com/zaklaughton/).",
        image: {
            src: hero,
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
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
