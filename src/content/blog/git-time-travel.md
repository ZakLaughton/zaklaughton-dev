---
title: '3 ways to time travel in Git to undo destructive mistakes'
excerpt: 'Botched a rebase? Nuked commits with a reset? Git has built-in tools to get you back without re-cloning.'
publishDate: 'Feb 27 2020'
isFeatured: true
tags:
  - Git
  - Productivity
---

Raise your hand if you can relate:

> *Honest job interview*
>
> Interviewer: "What's your biggest weakness?"
>
> Me: "Sometimes I fuck up my rebase so badly I delete the repo and clone a new copy 🔥🙆‍♀️"
>
> — Emma Bostian (@EmmaBostian)

🙋🙋🙋🙋🙋

We've all been there! It's easy to do a well-meaning `git rebase` or `git reset` only to find everything broken afterwards. Then, since your changes [rewrote history](https://www.atlassian.com/git/tutorials/rewriting-history), the only way to go back is to delete everything and re-clone the repository to start over again. I used to do this all the time!

But what if I told you there was a better way? What if you could _time travel_ back to a point before you did those destructive changes without deleting anything? It turns out, git has built-in tools for this such as `reflog`, `ORIG_HEAD`, and `gitrevisions`, and they're surprisingly easy to use!

![Back to the Future screenshot with caption "When this baby hits reflog, you're going to see some serious shit"](https://dev-to-uploads.s3.amazonaws.com/i/n5343e32u8nelyqvm1a4.png)

In this article, I'll show you how to use these nifty shortcuts to undo some of those history-changing moves and get back to the proper timeline!

## Setup

If you only want to read the examples, you can skip to the next section. But if you want to follow along with the examples on your own terminal, run each line below as a command in your terminal to set up the demo repository:

```bash
mkdir reflog-demo && cd reflog-demo && git init
echo "file 1 content" > file1.txt && git add . && git commit -m "add file1"
echo "file 2 content" > file2.txt && git add . && git commit -m "add file2"
git checkout -b my-new-branch
echo "new branch file content" > newBranchFile.txt && git add . && git commit -m "add newBranchFile"
git checkout master
echo "file 3 content" > file3.txt && git add . && git commit -m "add file3"
git checkout my-new-branch
```

## Examples

Here's an overview of the starting git history (using the command `git log --oneline --graph --all`):

![git log screenshot](https://dev-to-uploads.s3.amazonaws.com/i/bv27lqw3xzwj4zb57u9b.png)

There is a `master` branch with 3 files, each added in a separate commit. There is also a separate `my-new-branch` branch. This branch also has the first two files, but then splits off from master and has its own third file.

And here are all the files in `my-new-branch`:
![screenshot of ls -1 command](https://dev-to-uploads.s3.amazonaws.com/i/p5tgkqwa1r7djie8t9o0.png)

This is the desired state. When we mess it up in the examples below, our goal is to bring the repository back to this state.

### 1. Reset using a `reflog` reference

Let's say we're on `my-new-branch` and we [rebase](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase) onto master:

![Terminal screenshot running git rebase](https://dev-to-uploads.s3.amazonaws.com/i/yn4ifkyt7o178o2x15gu.png)

But Agh! We realize this was a mistake! Maybe the code stopped working after the rebase. Maybe there were some weird merge conflicts during the rebase and everything got messy. Either way, we want things to be the way they were before, but here is what our new git log shows:

![screenshot of rebased git log](https://dev-to-uploads.s3.amazonaws.com/i/z75jgauge3csh8cxzfdj.png)

...and all our `my-new-branch` files are combined with the `master` files:
![screenshot of "ls -1" command after rebase on master](https://dev-to-uploads.s3.amazonaws.com/i/lvztassizg0xzwf9foiw.png)

Apparently, our original commit (`6cde040`) is _gone_. How do we go back? We _could_ delete everything and re-clone, but we probably don't have a remote copy of our most recent changes to clone. We _could_ manually create a new branch off the old commit and re-add/delete the files that were there, but what a hassle!

Instead, try running `git reflog` to see some helpful points in history:
![screenshot of git reflog output](https://dev-to-uploads.s3.amazonaws.com/i/a68bghpazwvr45bw6lmj.png)

[Git reflog](https://git-scm.com/docs/git-reflog) shows everywhere our current working `HEAD` was at, _including_ commits that were removed with destructive commands such as `git reset` and `git rebase`. Simply pick the commit before our destructive changes, do a hard reset to the [gitrevision](https://git-scm.com/docs/gitrevisions) number (the one with the curly braces), and everything is reset to the way it was before the rebase!

```bash
git reset --hard HEAD@{3}
```

After running this command, our `git log` shows us we're back to our original state with the original commits and the original files:

<figure><img alt="Original tree" src="https://dev-to-uploads.s3.amazonaws.com/i/ugqktdxw8te53jfdgjwi.png"><figcaption>Ahhhh, good ol' un-touched branches!</figcaption></figure>

### 2. Reset to `ORIG_HEAD`

"_But Zak,_" you might say, "_that reflog output is kind of confusing, and it's hard to tell exactly which reflog line to go back to._"

Agreed! Luckily, there's an EVEN EASIER way!

```bash
git reset --hard ORIG_HEAD
```

`ORIG_HEAD` automatically points to the state before the most recent destructive change, so we can easily undo our most recent `rebase` or `reset` with a single command! Running `git reset --hard ORIG_HEAD` here does the exact same thing as running `git reset --hard HEAD@{3}` in the example above without needing to hunt down a specific revision!

### 3. Reset to a relative time

🌟🌟🌟**_WARNING: THIS IS REALLY COOL_**

Resetting to `ORIG_HEAD` is great, but what if we've _really_ gone down a rabbit hole of destructive changes. Let's take the rebase from the last example, and add a few more steps to it:

```bash
git rebase master
git reset --hard HEAD~2
git commit --amend -m 'shablagoo!'
```

Why did we do this? I don't know ¯\\\_(ツ)\_/¯. Someone on Stack Overflow probably said it was a good idea, so we tried it on a whim and, well, things got weird:
![Screenshot of log after changes](https://dev-to-uploads.s3.amazonaws.com/i/c6sq1smls5ebkohax2ed.png)
![Screenshot of files after changes](https://dev-to-uploads.s3.amazonaws.com/i/xe3m1krntlf9u3snr33f.png)

The commits are all out of order, and we are _missing files_. How can we undo this??? We made several destructive changes, so `ORIG_HEAD` isn't going to work. We can check `git reflog`, but there's so many changes that happened that it might be hard to find the right one. **All we want is for our branch to look like it did 5 minutes ago before the changes.**

Try this:

```bash
git reset --hard HEAD@{5.minutes.ago}
```

...and afterwards, you'll see the branch in the exact state it was 5 minutes ago:

<figure><img alt="Original tree" src="https://dev-to-uploads.s3.amazonaws.com/i/ugqktdxw8te53jfdgjwi.png"><figcaption>Ahhhh, good ol' un-touched branches!</figcaption></figure>

Yes, you read that right: **This command literally tells Git in plain English to return to some time in the past, and Git does it!**

!["MAGIC" gif](https://dev-to-uploads.s3.amazonaws.com/i/s8h0fyztzhva21gcvicy.gif)

This is using a powerful concept in git called [gitrevisions](https://git-scm.com/docs/gitrevisions). Some other examples include: `HEAD@{1.day.2.hours.ago}`, `HEAD@{yesterday}`, `HEAD@{2020-01-01 18:30:00}`, `HEAD@{12:43}`. In other words: TIME TRAVEL IS POSSIBLE IN GIT!!!

## Caveats

The techniques above are powerful, but there are a few limitations to keep in mind:

- **Only works for your local terminal** – your `reflog` and gitrevisions are stored locally, but aren't shared when you push to a remote repository
- **Only works for committed files** – if you've deleted uncommitted files, these aren't stored in Git anywhere. Good reason to [commit early and often](https://sethrobertson.github.io/GitBestPractices/#commit)

## Recap

So, to summarize, here are some ways to fix your repo after you `reset` or `rebase` your code into an unusable state:

- Use `git reflog` to pick a point in history, then undo your recent changes `git reset --hard HEAD@{<number>}`
- As a shortcut, use `git reset --hard ORIG_HEAD` to undo the most recent destructive operation
- Reset to `<refname>@<relative time>` to time travel back to a happier state (e.g. `git reset --hard HEAD@{10.minutes.ago}`)

I hope this helps someone out there! Let me know in the comments if you have any questions or any other go-to methods for undoing git mistakes!
