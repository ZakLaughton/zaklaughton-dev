---
title: 'Getting your first website on the internet is easier than you think'
excerpt: 'From GitHub Pages to custom domains, here is everything you need to get your site live — and it takes less time than you expect.'
publishDate: 'Apr 25 2020'
tags:
  - Hosting
  - Git
---

Just before writing this article, I built a full website and published it online, **and it only took 5 minutes!!!** You can see the full site in all its glory here: [zaklaughton.github.io/im-on-the-internet/](https://zaklaughton.github.io/im-on-the-internet/).

<figure>
<img src="https://dev-to-uploads.s3.amazonaws.com/i/ecq74rycd8hqvcj5pjdr.png" alt="screenshot of website">
<figcaption>Wow!</figcaption>
</figure>

Okay, okay, so it's not the most impressive site (see all 3 lines of code in the repo [here](https://github.com/ZakLaughton/im-on-the-internet)), but it _was_ incredibly easy to put on the internet.

When I started learning web development, I thought getting my work online would be complicated. I pushed off figuring it out how to do it for way too long. It turns out, as long as you have an HTML file and a git repository, you can publish your site within minutes — you can even get a custom URL!

(This article assumes a basic understanding of git to push to a remote repository. If you're a new web developer unfamiliar with git, you'll need to learn it! Check out some of the training resources [here](https://try.github.io/)).

# GitHub pages

### Static files with GitHub Pages

My amazing "I'm on the internet" site above was posted online using [Github pages](https://pages.github.com/). Github pages is the simplest way to get your repository up on the internet. It's easy, free, and comes built-in with every repository on GitHub.

GitHub pages simply finds an `index.html` file in the root of your repository, and makes it available at a URL. As long as your repository has an `index.html` file you can open in a browser on your own computer, then this setup will work for you!

To enable:

1. Go to your repository on GitHub
1. Click "Settings"
1. Under _GitHub Pages_, select _master branch_ as the source.

![screenshot of GitHub settings](https://dev-to-uploads.s3.amazonaws.com/i/517j779j3716txtt66kg.png)

That's it! Github will provide you with a URL that you or anyone can use to access your site, and the site will _automatically update_ whenever you update your repository. Pretty cool!

💡[Step-by-step guide to getting started with GitHub pages](https://guides.github.com/features/pages/)

### Framework sites with GitHub Pages

If you're using a framework such as [React](https://reactjs.org/) to build your site, you probably don't have an index.html just laying out there to be served up. These types of frameworks typically require you to **build** the site — this just means running a command to take all your files written for your framework and turn them into a simple "index.html" site that browsers will understand. Most often, these end up in some sort of "/build" folder.

For GitHub Pages to use this page, you'll need to build the site, put the built site on a new branch, and point Github Pages to the "build" branch. It's a few extra steps, but still should still be relatively quick to get your site online. There are also some great tools out there to automate this for you.

💡[Step-by-step guide for publishing a subfolder to GitHub pages](https://gist.github.com/cobyism/4730490)<br>
💡If you're using React, check out [react-gh-pages](https://github.com/gitname/react-gh-pages)<br>
💡An example of a branch built in one of my projects from React to serve a webpage: [github.com/ZakLaughton/map-project/tree/gh-pages](https://github.com/ZakLaughton/map-project/tree/gh-pages)

# Custom URL

So what if you don't like having "github.io" in the URL and want to serve your GitHub pages site at your own custom domain name? Turns out, that's pretty easy too! As general steps:

1. Buy a domain name from a domain name provider (typically costs around \$12/year).
1. Update the domain name system (DNS) configuration with the provider to point to GitHub.
1. Update the repository settings on GitHub to point to your custom URL.

There are many domain name providers out there, and I recommend doing some research to figure out what works best for you. Personally, I like [Google Domains](https://domains.google.com/) for its low prices and intuitive interface.

Once you purchase the domain name, just update the DNS settings as described in the [GitHub Pages documentation](https://help.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site). Here are the settings for `youneedtocalmdown.fyi`, which direct both [youneedtocalmdown.fyi](https://youneedtocalmdown.fyi) and [www.youneedtocalmdown.fyi](https://www.youneedtocalmdown.fyi) to the same site:

<figure>
<img width="70%" src="https://dev-to-uploads.s3.amazonaws.com/i/8zy5javes69skn0ipl8m.png" alt="DNS configuration screenshot">
<figcaption>DNS settings in Google domains. (Be sure to consult the GitHub docs for the most up-to-date address to use)</figcaption>
</figure>

<figure>
<img width="70%"  src="https://dev-to-uploads.s3.amazonaws.com/i/rhe1rfyuy8jeoaacww5f.png" alt="Github settings">
<figcaption>Corresponding GitHub Pages settings on the repository</figcaption>
</figure>

💡[How to setup Google Domain for GitHub pages](https://dev.to/trentyang/how-to-setup-google-domain-for-github-pages-1p58)

## Using subdomains

\$12/year for a domain name is pretty cheap, but this can get expensive as you start buying more. For many of your personal projects, you probably just want to host them on a subdomain on your site. You can do this by adding `CNAME` entries into your DNS settings.

Here's the DNS settings which direct to `zaklaughton.dev`, along with all the GitHub repositories with GitHub Pages settings configured for [crossy.zaklaughton.dev](https://crossy.zaklaughton.dev), [map.zaklaughton.dev](https://map.zaklaughton.dev), [memory.zaklaughton.dev](https://memory.zaklaughton.dev), [minesweeper.zaklaughton.dev](https://minesweeper.zaklaughton.dev), and [myreads.zaklaughton.dev](https://myreads.zaklaughton.dev):

![DNS settings screenshot](https://dev-to-uploads.s3.amazonaws.com/i/679f10a0xc8w2br8k6q9.png)

# What if my site needs a server?

In building web apps, you may get to a point where you do need a server to help serve the data on the page, such as with a [back-end server](https://careerfoundry.com/en/blog/web-development/whats-the-difference-between-frontend-and-backend/) or a site that is [server-side rendered](https://www.clariontech.com/blog/server-side-rendering-vs.-client-side-rendering). While this isn't possible with GitHub pages, luckily there are sites that make it easy to host and run this server-side code, too! Both [Netlify](https://www.netlify.com/) and [Heroku](https://www.heroku.com/) are some of the more popular options.

The finer details are outside the scope of this article, but know that there are also server-side options are out there to automate the deployment process from a git repository.

**Examples**
🌐 [flattenthecurve.zaklaughton.dev](https://flattenthecurve.zaklaughton.dev) ([repo](https://github.com/ZakLaughton/flatten-the-curve)) — Server-side rendered site (using [Gatsby](https://www.gatsbyjs.org/)). Automatically builds and deploys the site when the GitHub master branch updates.
🌐 [survivorstats.com](https://survivorstats.com) ([repo](https://github.com/ZakLaughton/survivor-stats)) — Front end is hosted on netlify. Back end (responsible for fetching database data) is hosted on Heroku. The back end is updated with simple commands from the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

# Summary

Putting your sites on the internet is a great way to share your work, and it's quick and easy to do! There's no need to wait to share your projects with the world.

- Use [GitHub Pages](https://pages.github.com/) to make the sites in your GitHub repos public.
- For a custom URL, Set up a custom domain with a service like [Google domains](https://domains.google.com)
- Use hosting services such as [Netlify](https://www.netlify.com/) and [Heroku](https://www.heroku.com/) if you require any server-side code.
