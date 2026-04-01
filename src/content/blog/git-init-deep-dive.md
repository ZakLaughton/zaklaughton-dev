---
title: 'Git deep-dive: "git init"'
excerpt: 'A closer look at the command that starts every git repository: what it actually does, what it creates, and a few tricks you might not know.'
publishDate: 'Mar 9 2020'
tags:
  - Git
---

This article takes a closer look at the common parts of git we often take for granted.

And what better way to start than with the command that starts all git repositories: `git init`.

# What you might know

`git init` starts a new repository! You want source control in Git? Just run the command `git init` and BAM!– that directory is now a git repository.

Here's what it looks like in action:

<figure><img alt="git init in terminal demo" src="https://dev-to-uploads.s3.amazonaws.com/i/9omg3gta1we59p7qhj08.gif"><figcaption>Git commands such as `git status` won't work in a directory until we initialize the git repository</figcaption></figure>

Once this is done, you can do all the cool things you do in git, such as `add`, `commit`, `merge`, and more!...But those commands are for another article. We're here to focus a little more on the usage of `git init`. Let's take a closer look...

# What you might not know

## 💡 How the repository is initialized

What is `git init` actually doing when it initializes a repository? When you run the command, it creates a hidden directory called `.git`:

<figure><img alt="screenshot of git init creating .git directory" src="https://dev-to-uploads.s3.amazonaws.com/i/87q2je7s6xc1lii3f811.png"></figure>

`.git/` contains all the behind-the-scenes data that makes git source control tick. All the branch information, past changes, current status, and more is all held here. Here's what the contents of that directory look like:

<figure><img alt="Screenshot of .git files and folders" src="https://dev-to-uploads.s3.amazonaws.com/i/5e3eueo9h2alh2i2i54s.png" width="350px"></figure>

We aren't going to go through what each directory and file does here. Most of it isn't human-readable, and is only intended to be interacted with using Git. Just know that this `.git/` sub-directory structure (or most of it) is required for git to do its thing.

If you wanted, you could even manually create `.git/` and all its contents, and git would still recognize it as a repository (Try it out if you have some free time! Which files are required? Which aren't?). This also means if you delete the `.git` directory on an existing repository, all your branches and git history will be deleted as well. This can actually be useful if you're _very early_ in a project and decide you want to re-start a repository to initialize from your current working files. Just `rm -rf .git` and `git init` all over again.

## 💡 ALL repository data is stored in `.git/`

We often think about git storing historical data, while your working directory (everything outside `.git/`) has the current files. It's important to remember that Git, or more specifically: the `.git` directory, has _all_ the data, including the most recent committed changes. In fact, you can even `git clone` directly from the `.git` directory, just like you would from a remote repository!

<figure><img alt="Original tree" src="https://dev-to-uploads.s3.amazonaws.com/i/zfet2so31fzri16x22y4.png"><figcaption>Now there are two of them!</figcaption></figure>

## 💡 Create a "remote" repository with `--bare`

Did you know you can actually `push` to and `pull` from your local working repository? However, you might run into some issues. Watch what happens when we try to push the `master` branch to a local working repository where `master` is also checked out:

<figure><img alt="git error" src="https://dev-to-uploads.s3.amazonaws.com/i/y3cevfg8c44wi3cqz9nq.png"><figcaption>Git says "NO!"</figcaption></figure>

This is why you'll typically push and pull from a remote repository instead of from someone else's working repository. Most often, this remote repository setup is handled through a git repo service such as [Bitbucket](https://bitbucket.org/product/) or [GitHub](https://github.com/), but if you wanted to set up your own, you'd use the `--bare` flag:

<figure><img alt="--bare flag demo" src="https://dev-to-uploads.s3.amazonaws.com/i/e4jd12tpisvayvbc6m0m.png"><figcaption></figcaption></figure>

Recognize those files and directories? That's everything we saw before in the hidden `.git` repository, except now they aren't covered by a hidden folder! Yes, they're..._naked_! 😮 So it shouldn't be surprising that this is known as a "bare repository". With a naked – um, I mean – _bare_ repository, you're essentially telling git, "Nobody's working here. Just store the data, and let users push and pull from it."

Since nobody's working here, you don't really need anything outside the `.git` directory. And if you don't need anything outside the `.git` directory, why not just put all the `.git` contents at the top level?

## 💡 Shhhhhh

And finally...Is your `git init` making TOO MUCH NOISE???

<figure><img alt="screenshot of git init" src="https://dev-to-uploads.s3.amazonaws.com/i/xlfzlgcex5v1c71q3rd6.png"><img alt="Man covering ears as cat walks by" src="https://dev-to-uploads.s3.amazonaws.com/i/m19dcgtbt21jvkwxugd0.gif"></figure>

Stop all that terrible noisy racket with the `-q` or `--quiet` flag:

<figure><img alt="screenshot of git init -q" src="https://dev-to-uploads.s3.amazonaws.com/i/vu4vclm2ilaacdvmel7i.png"><figcaption>Finally, some peace and quiet!</figcaption></figure>

# Wrap-up

I hope this has helped shine a light on how `git init` works and how a repository is born. For further reading, you may want to check out:

- [Official `git init` documentation](https://git-scm.com/docs/git-init)
- [This `git init` tutorial](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-init)

Stay tuned for the next article in the series where I cover the slightly-more-interesting command: `git add`.
