---
title: 'Every VS Code extension a JavaScript web developer should have in 2021 (with gifs!)'
excerpt: 'A curated list of VS Code extensions that actually improve day-to-day JavaScript development, with demos to show them in action.'
publishDate: 'Mar 1 2020'
updatedDate: 'Sep 9 2021'
tags:
  - Productivity
  - VS Code
---

Visual Studio Code is a powerful editor out of the box, but there are [many many VS Code extensions](https://code.visualstudio.com/docs/editor/extension-gallery) to make it even more powerful!

If you're new to VS Code or coding in general, I recommend reading through everything here to see if there are new ways you can optimize your workflow. If you're a VS Code veteran, see if there's anything here you don't have, and let me know in the comments if I missed anything!

---

_VS Code is constantly updating, and I regularly review my extensions to figure out which ones are and are not adding value. I'll be keeping this list updated as I add and remove extensions._

---

## Must-have extensions (alphabetical)

### Better Comments

   ![Better Comments demo gif](https://dev-to-uploads.s3.amazonaws.com/i/md8xqxb73889sp8cvcry.gif)

   [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) shows your comments as different colors depending on how they're prefixed. Great to quickly visually scan and identify important pieces of your code. Keep in mind these colors only show if you have the extension, so this is best for personal use cases.

### Bookmarks

   ![Bookmarks](https://dev-to-uploads.s3.amazonaws.com/i/12ofd3pcsnr57bgm2vax.gif)

   Have you ever been working on a feature that involves 10 functions across several files, forcing you to hop around and re-find each function? [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks) helps you keep track of all the code that's important to you. Just add a bookmark to easily find your spot later!

### Bracket Pair Colorizer

   ![Bracket Pair Colorizer demo gif](https://dev-to-uploads.s3.amazonaws.com/i/ujl784wj8c0i9i6f0byb.gif)

   Trying to find missing parenthesis is my least favorite programming activity. Luckily, [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer) makes this a lot easier by color-coding all corresponding parenthesis and brackets. _(NOTE: This one has some known performance issues, and theres a beta version of [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer) out to fix this. Thanks for the tip, [@garret_alex](https://twitter.com/gerrit_alex/status/1226772068806594560))_

### change-case

   ![change-case demo gif](https://dev-to-uploads.s3.amazonaws.com/i/jqauylv6n1xtyyfuo799.gif)

   [change-case](https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case) gives an easy way to change a word or variable name to all sorts of cases including `camelCase`, `snake_case`, `TitleCase`, and more!

### Code Spell Checker

   ![Code Spell Checker demo gif](https://dev-to-uploads.s3.amazonaws.com/i/1zcibof0dh3o9acoqd49.gif)

   [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) finds typos and misspelled words, even if they're in the middle of a variable name. This is one I didn't truly realize the value of until I had it installed and started finding all my little typos. Turns out, having a spell checker in a code editor is just as useful as having one in a word processor!

### ES7 React/Redux/GraphQL/React-Native snippets

   ![Snippets demo gif](https://dev-to-uploads.s3.amazonaws.com/i/ozqafpz73zrsz1ege5bs.gif)

   [ES7 Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) has so many useful tools for autofilling in boilerplate text. Saves a ton of time whenever I'm writing imports or React components.

### ESLint

   ![ESLint demo gif](https://dev-to-uploads.s3.amazonaws.com/i/udrjqbrukiup53kgwklc.gif)

   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) is a great linter that will pick out syntax errors for you in your code to catch issues before you even run your code. Requires [configuration of ESLint](https://eslint.org/docs/user-guide/configuring) in your project.

### GitLens

   ![GitLens demo gif](https://i.imgur.com/3siDOZD.gif)

   [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) is a feature-packed extension that gives you all sorts of insight into your repository's commit history. Personally, I use it most often to see who wrote code inline, see previous versions of files, and compare HEAD to other commits/branches.

### glean

   ![glean demo gif](https://dev-to-uploads.s3.amazonaws.com/i/tdwhqt39j2ted8vpriyt.gif)

   If you're a React developer, you probably often find yourself breaking out large components into smaller ones in separate files as well as switching between class and functional components. [glean](https://marketplace.visualstudio.com/items?itemName=wix.glean) automates all this for you and automatically inserts all the needed boilerplate.

### Import Cost

   ![Import Cost demo gif](https://dev-to-uploads.s3.amazonaws.com/i/oukn7v142pueo1whagr8.gif)

   [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) helps you to be cognizant of the size of your imports. It shows the size of each import inline, and shows in red and yellow warning colors if the import is larger than normal.

### indent-rainbow

   ![indent-rainbow demo gif](https://dev-to-uploads.s3.amazonaws.com/i/pffij9jtrpzkkkhdghiq.gif)

   [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) makes it effortless to see indents at a glance. Plus, it's super pretty, right?

### javascript console utils

   ![javascript console utils demo gif](https://dev-to-uploads.s3.amazonaws.com/i/jgooe2ome7e7tfoxzew0.gif)

   Find yourself `console.log()`-ing a lot? [javascript console utils](https://marketplace.visualstudio.com/items?itemName=whtouche.vscode-js-console-utils) automates this for you by inserting `console.log()` statements into your code, complete with the plaintext variable name and variable value. There's even a hotkey to remove all `console.log()` statements when you're done with them!

### Prettier

   ![Prettier demo gif](https://dev-to-uploads.s3.amazonaws.com/i/tjzvre4nuubw4wz85u1n.gif)

   This one's important. I'd even go as far as to say that nobody should code without [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). Prettier auto-formats your code with `alt` + `shift` + `F`, or you can have it auto-format on every save. This saves a TON of time over remembering every semicolon and indent.

### Relative Path

   ![Relative Path demo gif](https://dev-to-uploads.s3.amazonaws.com/i/wqt6a34240y50065rkxy.gif)

   Ever work in a large codebase trying to figure out how to reference another file? Exactly how many `../`'s do you need to get back to the proper directory, then what's the path back down? [Relative Path](https://marketplace.visualstudio.com/items?itemName=jakob101.RelativePath) lets you search all files and auto-inserts the path relative to the file you're in. No tree counting needed!

### Settings Sync

   <center>*There's not a great way to demo this one, so here's my favorite gif of all time instead:*</center>

   ![Cat and Shaq wiggling](https://dev-to-uploads.s3.amazonaws.com/i/b3lsyiwleuwfvwafx5qc.gif)

   So, about the extension: When you've got a sweet setup in your editor, [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) gives a painless way to sync all your VS Code settings and extensions across your workstations by saving your configuration to a GitHub gist. They've even made several improvements over the past year to make syncing/authentication _much_ easier.

### Toggle Quotes

   ![Toggle Quotes demo gif](https://dev-to-uploads.s3.amazonaws.com/i/kmkuny531n8jh1ve0oyj.gif)

   With [Toggle Quotes](https://marketplace.visualstudio.com/items?itemName=BriteSnow.vscode-toggle-quotes), just use `⌘` + `'` (or `ctrl` + `'`) to cycle your strings between using `` ` ``, `'`, and `"`

### Version Lens

   ![Version Lens demo gif](https://dev-to-uploads.s3.amazonaws.com/i/lklf2900oy6m3nosykka.gif)

   It can be a hassle to keep track of all the latest versions of your npm packages. [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens) shows you inline how your installed versions in `package.json` compare to the current versions.

## Bonus

These items don't dramatically improve my day-to-day productivity, but golly, I sure do like them:

- **[Dracula Offical](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)** – my preferred color theme
- **[file-icons](https://marketplace.visualstudio.com/items?itemName=file-icons.file-icons)** – gives unique file icons to quickly identify types in the file browser. I find it most useful for quickly distinguishing between `.ts`, `.js`, `.test.ts`, & `.test.js`.
  ![Screenshot of file browser with icons](https://dev-to-uploads.s3.amazonaws.com/i/zd29hvp461jlsv7jcbvk.png)
- **[Fira Code](https://github.com/tonsky/FiraCode)** – a spiffy-looking font that includes some sweet ligatures! This means that inequality symbols such as `<=` and `!==` show up as a single character. It hasn't _improved_ my coding, per se, but it has made me feel cooler.
  ![Screenshot of ligatures](https://dev-to-uploads.s3.amazonaws.com/i/a1fvx517t47ukjk7cjfg.png)
  ℹ️ _Other ligatured fonts recommended by readers: [JetBrains Mono](https://www.jetbrains.com/lp/mono/), [Cascadia Code](https://github.com/microsoft/cascadia-code/), [Recursive Sans & Mono](https://www.recursive.design/)_

  _NOTE: Ligatures can be [a controversial topic among coders](https://practicaltypography.com/ligatures-in-programming-fonts-hell-no.html). My argument for using them is that I think they're sexy. I rest my case._

- **[Vim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)** – When I first started coding, I got really into becoming a [Vim editor](https://www.vim.org/) power user. The functionality of VS Code goes far beyond the utility I get from Vim, but sometimes I miss those old "Change 100 lines with 5 cryptic keystrokes" features. I mostly leave this disabled, but I fire it up every once in a while when I'm feeling spunky.

## Extensions I no longer use

Sometimes I stop using an extension because the functionality is added to base VS Code, or maybe the extension isn't as useful as I once thought it was. Here are some extensions I used heavily once, but eventually uninstalled:

- **[Indenticator](https://marketplace.visualstudio.com/items?itemName=SirTori.indenticator)** – provided a great way to visually see your indents using highlighted vertical lines. This now comes standard in VS Code, though [there are some differences](https://marketplace.visualstudio.com/items?itemName=SirTori.indenticator#remarks). VS Code Native settings: [`editor.renderIndentGuides`](https://code.visualstudio.com/docs/getstarted/userinterface#_indent-guides), [`editor.highlightActiveIndentGuide`](https://code.visualstudio.com/docs/getstarted/settings)
- **[Auto-close tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)** & **[Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)** – automatically provided closing HTML tags whenever you typed an opening tag, and kept them updated to match each other. Most of this functionality is now included in VS Code, and these plugins were known to cause big performance issues ([thanks for the tip, Matt Waler](https://dev.to/mattwaler/comment/lb40)). Native VS Code settings: [`html.autoClosingTags`](https://code.visualstudio.com/docs/languages/html#_close-tags), [`html.mirrorCursorOnMatchingTag`](https://code.visualstudio.com/docs/languages/html#_mirror-cursor).
- **[Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)** – Highlights any CSS color values with the color they represent. VS Code now natively shows a colored box next to the value, which is good enough for me: [`editor.colorDecorators`](https://code.visualstudio.com/docs/languages/css#_syntax-coloring-color-preview).

## Anything else?

What did I miss? Is there any other extension that helps you be a productive coder? Please let me know in the comments!
